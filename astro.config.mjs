// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://nc61.github.io',
  base: '/theoryofanything',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [rehypeMathjax, {
        tex: {
          packages: ['base', 'ams', 'physymb', 'color'],
          tags: 'ams',
        }
      }]
    ],
  },

  integrations: [mdx()],
});