// @ts-check
import markdoc from '@astrojs/markdoc';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import pagefind from 'astro-pagefind';
import relativeLinks from 'astro-relative-links';
import { defineConfig } from 'astro/config';


export default defineConfig({
  compressHTML: false,
  output: 'static',
  build: { format: 'directory' },
  site: 'https://cocktails.qtzar.com',
  integrations: [markdoc(), icon(), pagefind(), relativeLinks(), mdx()],
  vite: {
    plugins: [tailwindcss()],
    resolve: { alias: [{ find: '@', replacement: 'src' }] },
  },

});
