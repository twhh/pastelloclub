/**
 * pastello-price-watch
 *
 * Hourly cron: polls the Amazon Creators API (creatorsapi.amazon, OAuth
 * bearer-token auth) for the tracked ASINs and snapshots prices into D1.
 * History is the moat.
 *
 * Auth: Credential ID + Secret are exchanged at api.amazon.com/auth/o2/token
 * (credential version 3.1 = .com; see CREDENTIAL_VERSION var) for a bearer
 * token with scope "creatorsapi::default".
 *
 * GET endpoints (CORS-enabled, for the static site):
 *   /prices           -> latest price + all-time low/high per product
 *   /prices/[asin]    -> full snapshot history for one product
 *   /poll?token=X     -> manual poll trigger (token = CRON_TOKEN secret)
 *
 * Graceful degradation: if the API errors or access lapses, snapshots simply
 * stop accruing; existing data keeps serving with its timestamps.
 */
import { PRODUCTS } from './asins';

interface Env {
  DB: D1Database;
  AMAZON_ACCESS_KEY: string; // Credential ID
  AMAZON_SECRET_KEY: string; // Credential Secret
  AMAZON_PARTNER_TAG: string;
  CREDENTIAL_VERSION?: string; // "3.1" (US) | "3.2" (UK) | "3.3" (JP)
  CRON_TOKEN: string;
}

// Minimal ambient types (avoids a @cloudflare/workers-types dependency).
interface D1Result {
  results?: any[];
}
interface D1PreparedStatement {
  bind(...values: any[]): D1PreparedStatement;
  first<T = any>(): Promise<T | null>;
  all<T = any>(): Promise<D1Result>;
  run(): Promise<any>;
}
interface D1Database {
  prepare(query: string): D1PreparedStatement;
  batch(statements: D1PreparedStatement[]): Promise<any[]>;
}

const CATALOG_BASE = 'https://creatorsapi.amazon/catalog/v1';
const MARKETPLACE = 'www.amazon.com';
const TOKEN_ENDPOINTS: Record<string, string> = {
  '3.1': 'https://api.amazon.com/auth/o2/token',
  '3.2': 'https://api.amazon.co.uk/auth/o2/token',
  '3.3': 'https://api.amazon.co.jp/auth/o2/token',
};
const RESOURCES = [
  'itemInfo.title',
  'itemInfo.byLineInfo',
  'images.primary.large',
  'offersV2.listings.price',
  'offersV2.listings.availability',
];

async function getAccessToken(env: Env): Promise<string> {
  const endpoint = TOKEN_ENDPOINTS[env.CREDENTIAL_VERSION ?? '3.1'] ?? TOKEN_ENDPOINTS['3.1'];
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: env.AMAZON_ACCESS_KEY,
      client_secret: env.AMAZON_SECRET_KEY,
      scope: 'creatorsapi::default',
    }),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`token exchange ${res.status}: ${text.slice(0, 300)}`);
  const data = JSON.parse(text) as { access_token?: string };
  if (!data.access_token) throw new Error('token exchange returned no access_token');
  return data.access_token;
}

interface Snapshot {
  asin: string;
  price: number | null;
  listPrice: number | null;
  currency: string | null;
  availability: string | null;
  title?: string | null;
  imageUrl?: string | null;
}

function pickMoney(node: any): { amount: number | null; currency: string | null } {
  if (!node || typeof node !== 'object') return { amount: null, currency: null };
  const src = node.money ?? node;
  return {
    amount: typeof src.amount === 'number' ? src.amount : null,
    currency: typeof src.currency === 'string' ? src.currency : null,
  };
}

async function fetchPrices(asins: string[], token: string, env: Env): Promise<Map<string, Snapshot>> {
  const out = new Map<string, Snapshot>();
  const body = JSON.stringify({
    itemIds: asins,
    itemIdType: 'ASIN',
    marketplace: MARKETPLACE,
    partnerTag: env.AMAZON_PARTNER_TAG,
    resources: RESOURCES,
  });
  const res = await fetch(`${CATALOG_BASE}/getItems`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json; charset=utf-8',
      'x-marketplace': MARKETPLACE,
    },
    body,
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`getItems ${res.status}: ${text.slice(0, 300)}`);
  const data = JSON.parse(text);

  for (const err of data.errors ?? []) {
    console.error('Creators API item error:', JSON.stringify(err));
  }
  for (const item of data.itemsResult?.items ?? []) {
    const listing = item.offersV2?.listings?.[0] ?? item.offers?.listings?.[0];
    const price = pickMoney(listing?.price);
    const listPrice = pickMoney(listing?.price?.savingBasis ?? listing?.savingBasis);
    const avail = listing?.availability;
    out.set(item.asin ?? item.ASIN, {
      asin: item.asin ?? item.ASIN,
      price: price.amount,
      listPrice: listPrice.amount,
      currency: price.currency,
      availability:
        (typeof avail === 'string' ? avail : avail?.message ?? avail?.type ?? null) ?? null,
      title: item.itemInfo?.title?.displayValue ?? null,
      imageUrl: item.images?.primary?.large?.url ?? null,
    });
  }
  return out;
}

async function pollAll(env: Env): Promise<string> {
  const capturedAt = new Date().toISOString();
  const token = await getAccessToken(env);
  const asins = PRODUCTS.map((p) => p.asin);
  const chunks: string[][] = [];
  for (let i = 0; i < asins.length; i += 10) chunks.push(asins.slice(i, i + 10));

  let saved = 0;
  for (const chunk of chunks) {
    const snaps = await fetchPrices(chunk, token, env);
    const stmts = [...snaps.values()].map((s) => {
      const product = PRODUCTS.find((p) => p.asin === s.asin);
      const detailUrl = `https://${MARKETPLACE}/dp/${s.asin}/?tag=${env.AMAZON_PARTNER_TAG}`;
      return env.DB.batch([
        env.DB.prepare(
          `INSERT OR REPLACE INTO snapshots (asin, captured_at, price, list_price, currency, availability)
           VALUES (?, ?, ?, ?, ?, ?)`,
        ).bind(s.asin, capturedAt, s.price, s.listPrice, s.currency, s.availability),
        env.DB.prepare(
          `INSERT INTO products (asin, slug, title, image_url, detail_url, updated_at)
           VALUES (?, ?, ?, ?, ?, ?)
           ON CONFLICT(asin) DO UPDATE SET
             title = COALESCE(excluded.title, title),
             image_url = COALESCE(excluded.image_url, image_url),
             detail_url = excluded.detail_url,
             updated_at = excluded.updated_at`,
        ).bind(s.asin, product?.slug ?? s.asin, s.title, s.imageUrl, detailUrl, capturedAt),
      ]);
    });
    // stmts here are batches; run them sequentially to keep D1 happy.
    for (const b of stmts) await b;
    saved += stmts.length;
  }
  return `snapshotted ${saved}/${asins.length} products at ${capturedAt}`;
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Content-Type': 'application/json; charset=utf-8',
};

export default {
  async scheduled(_event: unknown, env: Env, ctx: { waitUntil: (p: Promise<any>) => void }) {
    ctx.waitUntil(pollAll(env).then(console.log, (e) => console.error('poll failed:', e)));
  },

  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }

    if (url.pathname === '/poll') {
      if (url.searchParams.get('token') !== env.CRON_TOKEN) {
        return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401, headers: CORS });
      }
      try {
        const message = await pollAll(env);
        return new Response(JSON.stringify({ ok: true, message }), { headers: CORS });
      } catch (e) {
        return new Response(JSON.stringify({ ok: false, error: String(e) }), { status: 502, headers: CORS });
      }
    }

    if (url.pathname === '/prices') {
      const latest = await env.DB.prepare(
        `SELECT s.asin, s.price, s.list_price, s.currency, s.availability, s.captured_at
         FROM snapshots s
         JOIN (SELECT asin, MAX(captured_at) AS m FROM snapshots GROUP BY asin) t
           ON s.asin = t.asin AND s.captured_at = t.m`,
      ).all();
      const stats = await env.DB.prepare(
        `SELECT asin, MIN(price) AS low, MAX(price) AS high, COUNT(*) AS n
         FROM snapshots WHERE price IS NOT NULL GROUP BY asin`,
      ).all();
      const products = await env.DB.prepare(
        `SELECT asin, slug, title, image_url, detail_url FROM products`,
      ).all();
      const statMap = new Map((stats.results ?? []).map((r: any) => [r.asin, r]));
      const metaMap = new Map((products.results ?? []).map((r: any) => [r.asin, r]));
      const rows = latest.results?.map((r: any) => ({
        ...r,
        ...metaMap.get(r.asin),
        name: PRODUCTS.find((p) => p.asin === r.asin)?.name ?? null,
        review_slug: PRODUCTS.find((p) => p.asin === r.asin)?.reviewSlug ?? null,
        all_time_low: statMap.get(r.asin)?.low ?? null,
        all_time_high: statMap.get(r.asin)?.high ?? null,
        snapshots: statMap.get(r.asin)?.n ?? 0,
      })) ?? [];
      return new Response(JSON.stringify({ as_of: new Date().toISOString(), products: rows }), {
        headers: { ...CORS, 'Cache-Control': 'public, max-age=300' },
      });
    }

    const historyMatch = url.pathname.match(/^\/prices\/([A-Z0-9]{10})$/);
    if (historyMatch) {
      const asin = historyMatch[1];
      const rows = await env.DB.prepare(
        `SELECT captured_at, price, list_price, availability
         FROM snapshots WHERE asin = ? ORDER BY captured_at`,
      ).bind(asin).all();
      return new Response(JSON.stringify({ asin, history: rows.results ?? [] }), {
        headers: { ...CORS, 'Cache-Control': 'public, max-age=300' },
      });
    }

    return new Response(JSON.stringify({ error: 'not found' }), { status: 404, headers: CORS });
  },
};
