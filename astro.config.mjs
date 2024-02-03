import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind()]
  // pages: {
  //   // Ustaw domyślny layout dla wszystkich stron
  //   "src/**/*.astro": {
  //     layout: "./src/layouts/Base.astro"
  //   }
  // }
});
