// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [rehypeMathjax, {
        tex: {
          packages: ['base', 'ams', 'newcommand', 'autoload', 'require', 'color', 'html', 'textcomp', 'cleveref'],
          tags: 'ams',
        }
      }]
    ],
  },
});