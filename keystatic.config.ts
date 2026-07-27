import { config, fields, collection } from '@keystatic/core';

// Keystatic CMS — Git-backed, no database.
// Local mode writes to the filesystem (great for dev). To let the client edit
// on the live site, switch `storage` to GitHub mode:
//
//   storage: { kind: 'github', repo: 'kristen-tlp/jenessawait' }
//
// then visit /keystatic and click "Connect to GitHub" (creates a GitHub App and
// writes the KEYSTATIC_* env vars), add those env vars to Vercel, and add a
// server adapter + `output: 'server'` so the admin route runs in production.

export default config({
  storage: {
    kind: 'github',
    repo: 'kristen-tlp/jenessawait',
  },
  ui: {
    brand: { name: 'Moving With God' },
  },
  collections: {
    days: collection({
      label: 'Challenge Days',
      slugField: 'slug',
      path: 'src/content/days/*',
      format: 'json',
      columns: ['order', 'title'],
      schema: {
        slug: fields.slug({
          name: { label: 'URL slug (e.g. day-1)' },
          slug: { label: 'File name' },
        }),
        order: fields.integer({
          label: 'Day number',
          description: 'Controls the URL (/day/1) and the order.',
          validation: { min: 1, max: 99 },
        }),
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Short description', multiline: true }),
        key: fields.text({ label: 'Key takeaway (the quote box)', multiline: true }),
        youtubeId: fields.text({
          label: 'YouTube video ID',
          description: "Just the ID from the video URL — e.g. for youtu.be/PwVxaH8NBA0 enter PwVxaH8NBA0",
        }),
      },
    }),
  },
});
