# pastelloclub Content Strategy

Last updated: October 2026. Companion to GROWTH-PLAYBOOK.md.

## Voice & facts canon

The position: a builder with receipts, not an "honest parent" brand. Never claim
honesty/realness - demonstrate it with specifics from this canon. ("Honest
review" is fine in post titles/meta descriptions as a search phrase only.)

Facts approved for use in copy:

- Jason. Bay Area, CA. Kids: 4-year-old + infant (no names, no faces). 75-lb
  bernedoodle (5).
- Career: Engineer and Data Scientist at Google (incl. Gmail spam/phishing
  detection - referenced in the scam guide), Engineer at Facebook, Data
  Scientist and PM at Twitter, PM at Discord. Early employee at two startups
  acquired (by Twitter, Discord).
- Solo LLC, 5 years, product management consulting (pre-seed to Fortune 500);
  replaced full-time tech salary. Actual revenue swings $10-55K/mo, but publish
  softened ("six figures a year, with swings"). Expanding to a team this year.
  LLC taxed as S corp in California.
- Retirement: Solo 401(k) only; S corp side makes employer contributions (I
  match myself).
- 529 (California ScholarShare) for the older kid: opened 2022, contributed
  monthly near the annual gifting max until she was ~3, >65% total return /
  >20% annualized (as of Oct 2026). Will open one for the infant.
  Researching/opening a Trump Account for the infant now.
- Taxes: quarterly, accounting outsourced to Collective (referral:
  https://share.collective.com/simplybootstrapped). Health insurance through
  spouse's employer.
- Housing: bought a Bay Area home in 2020. Mortgages/rent-vs-buy content is
  parked - generic versions are head terms we can't win, and the self-employed
  mortgage angle isn't our lived story (bought pre-LLC).
- Gear: mostly from the 4-year-old, bought ourselves. Durability
  retrospectives are the review format. Don't claim "no sponsored posts / no
  free gear" as policy - state self-bought as present fact only, keep options
  open.
- Own apps, plug only where natural: Lullaby (Android feeding/diaper tracker;
  free core + paid premium - still in Play Store testing, don't link from the
  blog until it's live), kidsmealtoys (Happy Meal toy tracker).
- Income/numbers publish as ranges, rounded to comfort. Spouse referred to
  generically; no employer names.

## Diagnosis

Zero domain authority means we win long-tail, intent-exact, timely queries only. Our
differentiated lane is money for self-employed parents: generic finance sites won't
out-write us there, and the Trump Account news cycle creates live search and link
demand. Gate 1 (8-10 weeks after finance cluster + calculator): if money posts
accumulate impressions while gear stays flat, money becomes the primary lane.

## Pillars

| Pillar | Job | Why us |
|---|---|---|
| 1. Parent money (self-employed angle) | Traffic + links + email | Timely (Trump accounts), differentiated, calculator hub |
| 2. Premium gear, honestly tested | Affiliate revenue + price-watch synergy | Real multi-year ownership, Pastello Scale, review-to-price-page funnel |
| 3. Everyday notes | Voice + shareability | Retention and brand. Capped at ~1/month |

Calendar split while authority is zero: 75% pillar 1 / 15% pillar 2 / 10% pillar 3.

## Queue (scored, build order)

| # | Piece | Type / intent | Notes | Score | Status |
|---|---|---|---|---|---|
| 1 | "Is that Trump Account email real?" - spotting the scam wave | Searchable, awareness | Fake-activation searches spike with each Treasury wave. | 8.6 | **Shipped** Oct 3 (`trump-account-email-scams`) |
| 5 | What happens at 18: taking control, Traditional default, Roth election | Searchable | Calculator companion; pairs with #3. | 7.8 | **Shipped** Oct 5 (`trump-account-what-happens-at-18`) |
| 3 | Front-loading $5,000 for a 17-year-old + the Roth conversion at 18 | Searchable, consideration | New segment (parents of teens). Kiddie-tax catch vs dependent standard deduction; the post corrects the viral version. | 8.1 | **Shipped** Oct 7 (`trump-account-front-load-roth-conversion`) |
| 2 | Trump Account vs UTMA vs Custodial Roth | Searchable, consideration | The comparison gap; natural calculator link | 8.3 | **Shipped** Oct 9 (`trump-account-vs-utma-vs-roth`) |
| 4 | Trump Account claim-rate stats page (curated, refreshed monthly) | Link-earning stat roundup | Citation infrastructure for the news cycle; our best AI-citation asset. Pitch writers once live. | 8.0 | **Shipped** Oct 11 (`trump-account-statistics`) |
| 6 | The self-employed parent's benefits decision: build, buy, or use a spouse's plan | Use-case, differentiated | Our real answer was "mostly the spouse's employer plan." Feeds the email list | 7.6 | Draft ready (`self-employed-benefits-decision`), release Oct 14; needs cover |
| 7 | Solo 401(k) vs SEP IRA: why the complicated one won | Searchable, consideration | Sequel to #6. Broad sole-prop framing + our S-corp case study; Vanguard-to-Ascensus vendor story is the differentiator. Collective plug. Primary keyword: solo 401k vs sep ira | 7.4 | Draft ready (`solo-401k-vs-sep-ira`), release Oct 16; cover + pin done. `/tools/solo-401k-calculator/` ships with it |
| 8 | Why we bought the Cruz and skipped the Vista | Searchable, consideration | Owned Cruz, researched Vista - "the choice we made" framing. Never write spec-sheet comparisons of gear we don't own. | 7.2 | Draft ready (`cruz-vs-vista-choice`), release Oct 19; needs render cover + pin |
| 9 | How I pay myself: S-corp salary, payroll, QBI | Searchable, consideration | Sequel to #6/#7 (both link forward). LinkedIn audience = tech PMs gone solo. Collective plug. | 7.2 | Queued, release Oct 22 |
| 10 | We returned $800 of the registry | Shareable | Real numbers, Pinterest-friendly. The monthly shareable slot. | 6.8 | Queued, release Oct 25 |
| 11 | What the first year actually costs (receipts: daycare, hospital, diapers, food) | Searchable + email | Bay Area real numbers; Rakuten/cashback section lives here. Carries a downloadable checklist = first real lead magnet for the newsletter. | 7.6 | Queued, release Oct 28 |
| 12 | Pampers rewards: how we saved a few hundred on diapers | Searchable, affiliate | Referral code; recurring-cost evergreen; Pinterest-native. | 7.5 | Queued, release Oct 31 |
| 13 | Free stuff from the Amazon baby registry | Searchable, affiliate | Welcome box / completion discount long-tail; Amazon affiliate; pairs with #10. | 7.2 | Queued, release Nov 3 |

Shareable slot, 1/month max: filled through November by #10 ("We returned $800
of the registry"). December slot open.

Dropped: Yoto Mini vs Yoto Player comparison (never seriously considered the Player;
fold any contrast into the existing Mini review instead).

## Production rules

1. **Batch-write, stagger-publish, never backdate.** Google indexes by discovery, not
   pubDate; freshness and honest dates matter for the Trump cluster, future refreshes,
   and AI citations. Keep `draft: true` until each release date. Release-day workflow:
   `npm run queue` lists scheduled drafts (dates, cover + pin paths); `npm run release
   <slug>` flips the flag and prints the Pinterest assets.
2. **De-slop pass before publish** (see CONTENT-GUIDELINES.md): run every draft through
   the no-ai-slop skill; fix flagged lines, keep the voice.
3. Cadence: 1-2 posts/week maximum. Each post gets its own launch day.
4. Every money post links the calculator. Every gear post links its price-watch page
   (when live).
5. Pre-publish gate: name the distribution plan (Reddit thread, Pinterest pin, or
   outreach target) before writing.
6. The stats page (#4) is infrastructure, not a post: refresh monthly.
7. Ownership rule: only review or compare gear we own. "The choice we made" framing is
   the honest substitute for two-sided comparisons.
8. **Dependency check before scheduling:** a post may only link to posts already
   published or scheduled earlier. Release order follows the link graph
   (foundations first).

## Cluster map

```
MONEY HUB: /tools/trump-account-calculator/ + /tools/529-calculator/
|- Claim guide <-> Scam guide (#1)        [timely wave]
|- Trump vs 529 <-> 529 from zero
|- Trump vs UTMA vs Roth (#2)
|- Front-load at 17 + Roth conversion (#3) <-> What happens at 18 (#5)
|- Claim-rate stats page (#4)              [link magnet]
|- Self-employed series (#6, #7)

GEAR HUB (later): /price-watch/
|- 7 existing reviews -> price pages
|- "The choice we made" posts: Cruz-not-Vista (#8)
```

## Pinterest distribution

Launched Oct 2026. See `pinterest-launch-list.md` for the two-week starter plan
(setup steps, boards, pin-by-pin schedule with titles and descriptions). Cadence:
3-5 fresh pins/week, deep links only, benefit-phrase titles. Money and gear lanes
pin; everyday essays don't. When the price watch goes live, it generates one
"biggest drop this week" pin per week from data we already have.

## Channel notes

- Early signals (Oct 11, day 7 of 30): GSC 57 impressions through Oct 9, avg
  position 51.1 - indexed and climbing, not ranking. Nursery furniture
  (earliest posts) shows first life: index age, not lane fit. Baby names 2,
  Trump calculator 3 impressions. Bing: 1 impression. Pinterest: 6 pins, 24
  views, 0 clicks (normal week 1). Newsletter: 0 signups - upstream problem
  (no traffic yet), not a capture-copy problem. No conclusions before the
  Nov 4 gate.
- Reddit: participate by answering questions properly (r/personalfinance,
  r/newparents, r/BayArea); most subs don't allow link drops, so the value is
  being the sourced answer in threads that themselves rank. Don't force links.
- IndexNow + sitemap submitted (Oct 2026). Don't resubmit.
- On-site analytics (Oct 11): Cloudflare Web Analytics, zone-level, EU-excluded
  (edge-measured, cookieless, no beacon). Gotcha fixed the same day: the apex A
  records were DNS-only, so apex traffic never transited Cloudflare and visits
  showed ~zero. All four apex A records are now proxied; www already was.
  Measurement stack: GSC/Bing = impressions, CF Web Analytics = visits +
  referrers, pastelloclub-emails sheet = signups by source, Pinterest native =
  pin performance. SSL/TLS = Full (strict), Always Use HTTPS on.
- Price watch: missed the Amazon API access window (Oct 2026) - punted until we
  re-qualify and reapply. The worker stays dormant; /price-watch/ pages and the
  weekly "biggest drop" pin are blocked on that. Until then, gear posts link
  straight to affiliate links, no price pages.
- Email capture is on every post + calculator, source-tagged per page in the
  "pastelloclub-emails" sheet. Review the Source column monthly to learn which
  lanes convert.
- 529 calculator shipped Oct 4 (state tax lookup + college-cost coverage +
  FAQ schema). Maintenance: the state tax table is approximated from memory,
  last reviewed Oct 2026 - spot-check the big states (NY, IL, PA, CO, IN)
  before promoting the state angle, and refresh with the monthly stats pass.
  Same cadence for the college-cost averages.
- Pinterest: pin every gear post's cover (durable for visual niches per playbook).

## 30-day validation plan (Oct 4 - Nov 4, 2026)

Budget: 2-3 hrs/day. Purpose: decide whether pastelloclub earns more investment.
Positioning work shipped Oct 4: About rewrite, hero/tagline sweep, facts canon,
Pinterest copy, Collective placement.

- Weeks 1-4: run the Trump Account queue (Oct 7/10/14/17) + 1 self-employed
  money post/week (queue #6, then #7). Pinterest cadence per
  `pinterest-launch-list.md`.
- Monetization plumbing (week 1): Amazon/eBay links live; Collective referral
  in every self-employed post; research Solo 401(k) provider affiliate
  programs. No display ads until ~10k sessions/mo.
- Baseline GSC/GA4/Pinterest analytics in week 1 so day-30 reads clean.
- Lullaby plugs resume only after Play Store approval.

Day-30 go/no-go (Nov 4): organic impressions trending up week-over-week, >=1
post in top 20 for a target keyword, Pinterest outbound clicks >100/mo, first
affiliate revenue != $0. Rising trend -> invest more; flat -> kill or pivot.

## Distribution adds (Oct 2026)

- Reddit participation, not profile-building: when Trump Account questions
  land in r/personalfinance, r/newparents, r/BayArea and similar, answer them
  properly and link the relevant post only where sub rules allow. Reddit
  threads themselves rank; being the sourced answer there is a SERP.
- Stats page shipped Oct 11. The 15-20 writer/newsletter pitch is DEFERRED
  (decided Oct 11): we're too new and our posts visibly use AI assistance -
  pitching now burns contacts on a site that looks unproven. Revisit once the
  stats page has months of refresh history and GSC shows real impressions.
  Zero-backlink domains don't rank without outreach, so this stays on the
  list - just not yet.
- LinkedIn only for self-employed money posts (Jason's real network is tech
  PMs who went solo - the exact reader). No X/IG/FB/YouTube this quarter: they
  need an audience we don't have yet and don't compound with our lanes.
