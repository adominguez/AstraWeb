// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentLayer: true
  },
  integrations: [tailwind(), preact()],
  // output: "server",
  output: 'hybrid',
  adapter: vercel({
    edgeMiddleware: true,
  }),
});