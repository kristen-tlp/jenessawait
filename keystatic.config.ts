import { config, fields, collection, singleton } from '@keystatic/core';

// Reusable image field pointing at the site's public image folder, so uploads
// are served directly (plain <img src="/assets/images/...">).
const imageField = (label: string) =>
  fields.image({ label, directory: 'public/assets/images', publicPath: '/assets/images/' });

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
  singletons: {
    thankYou: singleton({
      label: 'Thank-You Page',
      path: 'src/content/thank-you/',
      format: { data: 'json' },
      schema: {
        eyebrow: fields.text({ label: 'Eyebrow' }),
        heading: fields.text({ label: 'Heading' }),
        lede: fields.text({ label: 'Intro line', multiline: true }),
        photo: imageField('Photo'),
        steps: fields.array(
          fields.object({
            text: fields.text({ label: 'Step text', multiline: true }),
            linkLabel: fields.text({ label: 'Link text (optional)' }),
            linkUrl: fields.text({ label: 'Link URL (optional)' }),
            linkDownload: fields.checkbox({ label: 'Link downloads a file (e.g. calendar)', defaultValue: false }),
          }),
          { label: 'Next steps', itemLabel: (p) => p.fields.text.value?.slice(0, 45) || 'Step' },
        ),
        bookImage: imageField('Book image'),
        bookText: fields.text({ label: 'Book blurb', multiline: true }),
        bookLinkLabel: fields.text({ label: 'Book link text' }),
        bookLinkUrl: fields.text({ label: 'Book link URL' }),
      },
    }),
  },
});
