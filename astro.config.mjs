// @ts-check
import markdoc from '@astrojs/markdoc';
import mdx from '@astrojs/mdx';
import { rehypeD2 } from '@beoe/rehype-d2';
import { rehypeGnuplot } from '@beoe/rehype-gnuplot';
import { rehypeGraphviz } from '@beoe/rehype-graphviz';
import { rehypeMermaid } from '@beoe/rehype-mermaid';
import { rehypeVizdom } from '@beoe/rehype-vizdom';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';
import icon from 'astro-icon';
import pagefind from 'astro-pagefind';
import relativeLinks from 'astro-relative-links';
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import remarkGithubAlerts from 'remark-github-alerts';

export default defineConfig({
  compressHTML: false,
  output: 'static',
  build: { format: 'directory' },
  site: 'https://cocktails.qtzar.com',
  integrations: [markdoc(), icon(), pagefind(), relativeLinks(), expressiveCode(), mdx()],
  vite: {
    plugins: [tailwindcss()],
    resolve: { alias: [{ find: '@', replacement: 'src' }] },
  },
  markdown: {
    remarkPlugins: [remarkGfm, remarkGithubAlerts],
    rehypePlugins: [
      [rehypeMermaid, { strategy: 'inline', darkScheme: 'class', class: 'not-content' }],
      [rehypeGnuplot, { strategy: 'inline', darkScheme: 'class', class: 'not-content' }],
      [rehypeGraphviz, { strategy: 'inline', darkScheme: 'class', class: 'not-content' }],
      [rehypeD2, { strategy: 'inline', darkScheme: 'class', class: 'not-content' }],
      [rehypeVizdom, { strategy: 'inline', darkScheme: 'class', class: 'not-content' }],
    ],
  },
});
