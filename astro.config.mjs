// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'www.theoryofanyth.ing',
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