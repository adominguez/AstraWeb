// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
import lottie from "astro-integration-lottie";

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentLayer: true
  },
  site: 'https://astrahub.dev',
  integrations: [tailwind(), lottie(), sitemap({
    serialize(item) {
      const lastCharacter = item.url.slice(-1);
      if (lastCharacter === "/") {
        item.url = item.url.slice(0, -1);
      }
      return item;
    }
  }), preact(), expressiveCode({
    themes: ['dracula'],
  })],
  output: 'server',
  adapter: vercel({
    edgeMiddleware: true,
  }),
});