// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentLayer: true
  },
  integrations: [tailwind(), preact()],
  output: 'static',
  adapter: vercel(),
});