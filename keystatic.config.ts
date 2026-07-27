import { config, fields, collection } from '@keystatic/core';

// Keystatic CMS — Git-backed (content lives in this repo as JSON), with
// Keystatic Cloud handling authentication so editors can log in by email
// (no GitHub account needed — up to 3 free editors).
//
// SETUP: create a free project at https://keystatic.cloud, connect this repo
// (kristen-tlp/jenessawait), then replace the `project` value below with the
// "team/project" slug from your Cloud project's settings page.

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'jenessa-wait/moving-with-god',
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
