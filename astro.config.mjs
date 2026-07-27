// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// The Keystatic admin UI (/keystatic) is React-based and only runs during
// `astro dev` in local-storage mode. For production editing, switch storage to
// GitHub mode and add a server adapter (see keystatic.config.ts notes).
const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  integrations: [react(), ...(isDev ? [keystatic()] : [])],
});
