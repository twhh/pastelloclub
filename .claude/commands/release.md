---
description: Flip draft flags for all posts whose pubDate has arrived, then report Pinterest assets
---

Today's posts are going live. Work in this repo (pastelloclub):

1. Check today's actual date.
2. Scan every `.md` in `src/content/posts/`. For each post with `draft: true` whose frontmatter `pubDate` is **today or earlier**, flip `draft: true` to `draft: false`. Do NOT touch posts that are already live, posts with future pubDates, or pubDate values.
3. For each post you flipped, print: title, slug, pubDate, cover path, and pin path (`public/images/posts/pins/<slug>-pin.jpg`), plus the matching pin row from `pinterest-launch-list.md` (title, description, alt text) so the Pinterest pin can be created without hunting.
4. Run `npm run build` and confirm it passes and the flipped posts are included.
5. Do NOT run any git commands - I handle commits, pushes, and deploys myself.

If nothing is due, say so and list what's next with dates.
