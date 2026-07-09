// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/i18n/ui.js';

export default defineConfig({
  site: SITE_URL,
  srcDir: './src',
  publicDir: './public',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
