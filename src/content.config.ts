import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Reads the JSON entries that Keystatic writes to src/content/days/*.json
const days = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/days' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    description: z.string(),
    key: z.string(),
    youtubeId: z.string(),
  }),
});

export const collections = { days };
