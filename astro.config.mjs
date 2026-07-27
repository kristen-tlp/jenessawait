// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// Content pages are prerendered (static) for speed. The Keystatic admin
// (/keystatic) and its API run as on-demand Vercel functions so the client
// can edit on the live site — the adapter enables those routes.
// https://astro.build/config
export default defineConfig({
  integrations: [react(), keystatic()],
  adapter: vercel(),
  // Server output so Keystatic's admin + Cloud auth routes run on-demand.
  // Content pages opt back into static via `export const prerender = true`.
  output: 'server',
});
