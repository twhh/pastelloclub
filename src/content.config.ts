import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('pastelloclub'),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
    // Review-specific fields (optional - only used for product reviews)
    type: z.enum(['post', 'review']).default('post'),
    product: z.string().optional(),
    price: z.number().optional(),
    priceRange: z.enum(['$', '$$', '$$$', '$$$$']).optional(),
    rating: z.number().min(0).max(5).optional(),
    buyLink: z.string().url().optional(),
  }),
});

export const collections = { posts };
