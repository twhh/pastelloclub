// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://pastelloclub.com',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
    rehypePlugins: [[rehypeExternalLinks, {
      target: '_blank',
      rel: ['noopener', 'noreferrer'],
    }]],
  },
});
