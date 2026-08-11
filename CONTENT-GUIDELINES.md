# Pastelloclub Content Guidelines

## Writing Style

**Voice**: Personal, practical, and honest. Write like you're talking to a friend who's also navigating parenthood.

**Tone**:
- Authentic about challenges (limited leave, budget constraints, overwhelming moments)
- Practical and solution-oriented
- Not overly polished or perfect

## Formatting Rules

### Dashes
- **NO emdashes (—)** - Use regular hyphens with spaces on both sides instead
- Example: "more time - more leave, more budget" (not "more time—more leave")
- This keeps the formatting simple and consistent

### Headers
- Use H2s (##) for main sections
- Keep headers catchy but clear
- Make them benefit-driven when possible

### Links
- All external links will automatically open in new tabs (handled by rehype plugin)
- Use standard markdown: `[text](url)`

### Blockquotes
- Use for the affiliate disclaimer at the end of each post
- Format: `> **A quiet note:** Some of the links in my journal are affiliate links...`

## SEO Best Practices

### Titles
- Include keywords naturally
- Make benefit-driven when possible
- Example: "The Only 3 Nursery Furniture Items You Actually Need (That Last Through Toddlerhood)"

### Descriptions
- 1-2 sentences that hook the reader
- Include authority elements when possible
- Example: "Skip the Pinterest pressure. Here are the three nursery essentials that survived four years of real parenting."

### Tags
- Use 3-4 tags per post
- Mix broad categories (tips, new-parents) with specific topics (nursery, baby-gear)
- Consistent tag names across posts

## Post Structure

1. **Hook** - Acknowledge common pain points or misconceptions
2. **Personal context** - Share your honest experience (challenges included)
3. **Main content** - Practical advice with specific examples
4. **Closing** - Reassuring, practical summary
5. **Affiliate disclaimer** - Standard blockquote at the end

## Cover Images

- Add to `/public/images/posts/` directory
- Format: JPG or PNG
- Name: descriptive, e.g., `nursery-furniture-essentials-cover.jpg`
- Add `cover` and `coverAlt` fields to frontmatter

## Product Reviews

### Template Location
`src/content/_templates/review-template.md` - Copy this file to `src/content/posts/` and rename it when starting a new review.

### Review-Specific Frontmatter Fields
- `type: review` - Required to identify this as a product review
- `product` - The product name (for display and filtering)
- `price` - Numeric price value at time of review (for future price range filtering)
- `priceRange` - Price category: `$` (under $25), `$$` ($25-75), `$$$` ($75-200), `$$$$` ($200+)
- `rating` - The Pastello Scale score (0-5, supports decimals like 4.5)
- `buyLink` - Direct affiliate link to the product

### The Pastello Scale (Rating System)
- Use crayon emoji: 🖍️
- Format: 🖍️🖍️🖍️🖍️🖍️ (5/5) or 🖍️🖍️🖍️🖍️.5 (4.5/5)
- Use ".5" after the crayons for half ratings

### Review Structure
1. **Title** - "[Product Name] Review: [Catchy subtitle]"
2. **Short Version** - 2-3 sentence honest summary + Pastello Scale rating
3. **Why We Brought It Home** - The specific problem you were trying to solve
4. **The Everyday Feel** - What it's like living with this product (diary-style)
5. **A Few Quiet Details** - Specific features with honest takes
6. **The Low Lights** - Honest cons (parents trust honesty)
7. **Is It Worth the Space?** - Final verdict
8. **Shop the Notes** - Affiliate link with current price note

### Review Tags
- Always include `review` as the first tag
- Add the product category (e.g., `sleep`, `feeding`, `gear`)
- Add relevant life stage (e.g., `newborn`, `toddler`)

