# pastelloclub

A small, warm, markdown-powered blog for parents — hosted at
[pastelloclub.com](https://pastelloclub.com).

> **Heads up:** this repository is auto-mirrored from `twhh/regle`
> (`pastelloclub/` directory). Edit there, not here. Direct edits will be
> overwritten on the next mirror push.

## Stack

- [Astro 5](https://astro.build) — static site generator
- Markdown content collections (`src/content/posts/`)
- Zero client-side JavaScript by default
- Deployed to GitHub Pages via GitHub Actions

## Writing a post

Drop a markdown file in `src/content/posts/`:

```md
---
title: "A new post"
description: "Optional short blurb (used for SEO and the post list)."
pubDate: 2026-05-20
tags: ["sleep", "rituals"]
draft: false        # set true to hide until published
---

Markdown body here.
```

The filename becomes the URL slug (`my-post.md` → `/posts/my-post/`).

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview
```

## Deployment

Push to `main` (mirror does this automatically) → GitHub Actions runs
`.github/workflows/deploy.yml` → Pages serves from `dist/`.

### One-time GitHub setup (on `twhh/pastelloclub`)

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. **Settings → Pages → Custom domain:** `pastelloclub.com` (verify, then
   enable “Enforce HTTPS” once the cert is provisioned — usually 5–30 min).
   The `public/CNAME` file is already committed.

### Cloudflare DNS (for `pastelloclub.com`)

Set these in the `pastelloclub.com` zone:

| Type  | Name | Value              | Proxy status | TTL  |
| ----- | ---- | ------------------ | ------------ | ---- |
| A     | @    | 185.199.108.153    | DNS only 🟤  | Auto |
| A     | @    | 185.199.109.153    | DNS only 🟤  | Auto |
| A     | @    | 185.199.110.153    | DNS only 🟤  | Auto |
| A     | @    | 185.199.111.153    | DNS only 🟤  | Auto |
| CNAME | www  | twhh.github.io     | DNS only 🟤  | Auto |

Optional IPv6 (AAAA on `@`): `2606:50c0:8000::153`, `2606:50c0:8001::153`,
`2606:50c0:8002::153`, `2606:50c0:8003::153`.

**Important:** start with the gray cloud (DNS only) so GitHub Pages can
issue a Let's Encrypt certificate. After "Enforce HTTPS" is enabled on
GitHub Pages and the site is live, you may turn the proxy on (orange
cloud) — but if you do, set **SSL/TLS → Overview → Full** (not Flexible),
otherwise you'll get a redirect loop.
