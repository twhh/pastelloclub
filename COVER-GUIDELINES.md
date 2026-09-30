# Pastelloclub Cover Guidelines

## Requirements

- **Size:** 1200x630 pixels (og:image / social card ratio; Astro `<Image>` handles other crops)
- **Format:** JPG, quality ~90-92
- **Location:** `/public/images/posts/`
- **Naming:** `<post-slug>-cover.jpg` (e.g., `car-essentials-infant-travel-cover.jpg`)
- **Frontmatter:** set `cover` to the `/images/posts/...` path and write a descriptive `coverAlt`

## Two Cover Styles

### 1. 3D Nursery Render (original style)

Photorealistic 3D interior renders (see `nursery-furniture-essentials-cover.jpg`, the review covers). Generated outside this repo with an image tool, then dropped into `/public/images/posts/`. No text overlay needed.

### 2. Pastel Illustration Series (Aug 2026+)

Flat vector illustrations generated in-repo as SVG, rendered to JPG with `sharp`. Used for: `top-25-girl-names-2026-cover.jpg`, `top-25-boy-names-2026-cover.jpg`, `car-essentials-infant-travel-cover.jpg`.

**Series design system:**

- Background: soft vertical two-stop gradient, cream at top fading to a pastel accent
- Illustration centered in the upper two-thirds (roughly y 60-440)
- Caption in Georgia italic, ~46px, letter-spacing 3, centered at y~500, colored to match the accent
- Decorative accents (hearts, daisies, stars, clouds) scattered in corners and sky, opacity 0.5-0.9
- Soft drop shadows (`rgba(93,64,45,0.1-0.12)` ellipses) under objects
- Slight rotations (-4 to 4 degrees) on blocks/objects for a playful, hand-placed feel

**Palettes used so far (avoid repeats):**

| Post | Gradient | Accent | Caption color |
|---|---|---|---|
| girl names 2026 | `#FFF7F1` to `#FBDCE6` | blush pink | `#B07588` |
| boy names 2026 | `#F5FAF3` to `#D7EBDD` | sage mint | `#5F8A79` |
| car essentials | `#FFF9F1` to `#FBE3CC` | warm peach | `#C08A5E` |

Other useful fills: wooden blocks `#F6DCB4` face / `#DCA96F` edge / `#8A5A33` letters; gold stars `#E8C36A`; hearts `#E8A0B4`.

## Generating a Cover In-Repo

There is no permanent script (keeps the repo clean). Workflow:

1. Write a temporary `.cjs` script at the repo root (so `require('sharp')` resolves against the project's `node_modules`).
2. Build the SVG as a template string, then render:

```js
// gen-cover-<slug>.cjs - delete after running
const sharp = require('sharp');
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">...</svg>`;
sharp(Buffer.from(svg))
  .jpeg({ quality: 92 })
  .toFile('public/images/posts/<slug>-cover.jpg')
  .then(() => console.log('cover written'));
```

3. Run `node gen-cover-<slug>.cjs`.
4. Verify (see below), then delete the script.

**SVG tips learned the hard way:**

- Fonts: use `Georgia, 'Times New Roman', serif` - reliably present on macOS via sharp/librsvg
- Keep all text inside x 250-950 and clear of the caption zone (y 460-530)
- Rotate blocks around their own center: `transform="rotate(-4 cx cy)"`
- Scale small shapes with `transform="translate(x y) scale(s)"` on a `<g>` or path

## Verification Checklist

Before calling a cover done:

1. View the generated JPG and check: fonts rendered (no tofu boxes), nothing clipped at edges, no decoration overlapping the caption or main object
2. If something looks wrong but the SVG math says otherwise, trust the pixels. When re-reading a file with the same name, tools can show a stale cached copy. For certainty, pixel-check with sharp:

```js
const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
// data[(y * info.width + x) * 3] etc. - sample a region where a shape should/shouldn't be
```

3. Confirm `cover` + `coverAlt` are set in the post frontmatter
4. Run `npm run build` - a broken cover path fails the build only if the path is wrong, not if colors clash
