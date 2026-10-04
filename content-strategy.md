# pastelloclub Content Strategy

Last updated: October 2026. Companion to GROWTH-PLAYBOOK.md.

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
| 1 | "Is that Trump Account email real?" - spotting the scam wave | Searchable, awareness | Fake-activation searches spike with each Treasury wave. Ship immediately. | 8.6 | **Shipped** Oct 3 (`trump-account-email-scams`) |
| 2 | Trump Account vs UTMA vs Custodial Roth | Searchable, consideration | The comparison gap; natural calculator link | 8.3 | Draft ready, release Oct 14 (moved after #5: it links both later posts) |
| 3 | Front-loading $5,000 for a 17-year-old + the Roth conversion at 18 | Searchable, consideration | New segment (parents of teens). Kiddie-tax catch vs dependent standard deduction; the post corrects the viral version. | 8.1 | Draft ready, release Oct 10 |
| 4 | Trump Account claim-rate stats page (curated, refreshed monthly) | Link-earning stat roundup | Citation infrastructure for the news cycle; our best AI-citation asset. | 8.0 | Draft ready, release Oct 17 |
| 5 | What happens at 18: taking control, Traditional default, Roth election | Searchable | Calculator companion; pairs with #3. Releases FIRST - #2, #3, #4 all link to it. | 7.8 | Draft ready, release Oct 7 |
| 6 | Build your own benefits package (self-employed parent edition): dependent care FSA, HSA, QBI | Use-case, differentiated | Feeds the email list | 7.6 | Queued |
| 7 | Solo 401k vs SEP IRA after a baby | Searchable, consideration | Sequel to #6 | 7.4 | Queued |
| 8 | Why we bought the Cruz and skipped the Vista | Searchable, consideration | Honest angle: owned Cruz, researched Vista. Never write spec-sheet comparisons of gear we don't own. | 7.2 | Queued |

Shareable slot, 1/month max: "We returned $800 of the registry" (real numbers,
Pinterest-friendly).

Dropped: Yoto Mini vs Yoto Player comparison (never seriously considered the Player;
fold any contrast into the existing Mini review instead).

## Production rules

1. **Batch-write, stagger-publish, never backdate.** Google indexes by discovery, not
   pubDate; freshness and honest dates matter for the Trump cluster, future refreshes,
   and AI citations. Keep `draft: true` until each release date.
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
MONEY HUB: /tools/trump-account-calculator/
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

- Price watch worker is live and self-starts when Amazon grants API access
  (eligible-pending, up to 48h from Oct 3-4). When data flows, build /price-watch/
  pages and link reviews to them.
- Email capture is on every post + calculator, source-tagged per page in the
  "pastelloclub-emails" sheet. Review the Source column monthly to learn which
  lanes convert.
- Pinterest: pin every gear post's cover (durable for visual niches per playbook).
