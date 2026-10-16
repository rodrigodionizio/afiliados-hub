// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL: troque pelo domínio definitivo quando ele for comprado
// (ou defina a variável de ambiente SITE_URL na Vercel).
const site = process.env.SITE_URL || 'https://healthy-notebook.vercel.app';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  // mantém os espaços entre texto e tags em linha (<em>, <mark>, <a>)
  compressHTML: false,
  integrations: [
    sitemap({
      // páginas de redirecionamento não entram no sitemap
      filter: (page) => !page.includes('/go/'),
    }),
  ],
});
