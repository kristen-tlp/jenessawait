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
    challenge: singleton({
      label: 'Challenge Page',
      path: 'src/content/challenge/',
      format: { data: 'json' },
      schema: {
        hero: fields.object(
          {
            eyebrow: fields.text({ label: 'Eyebrow' }),
            titleAccent: fields.text({ label: 'Title — highlighted part' }),
            titleRest: fields.text({ label: 'Title — rest' }),
            lede: fields.text({ label: 'Intro paragraph', multiline: true }),
            reassure: fields.text({ label: 'Reassurance line under the form' }),
            image: imageField('Hero image'),
          },
          { label: 'Hero' },
        ),
        empathy: fields.object(
          {
            statementBefore: fields.text({ label: 'Statement — before the underlined word' }),
            statementWord: fields.text({ label: 'Statement — underlined word' }),
            statementAfter: fields.text({ label: 'Statement — after the underlined word' }),
            intro: fields.text({ label: 'Intro paragraph', multiline: true }),
            close: fields.text({ label: 'Closing paragraph', multiline: true }),
            lines: fields.array(fields.text({ label: 'Line', multiline: true }), {
              label: '"Maybe you…" lines',
              itemLabel: (p) => p.value?.slice(0, 50) || 'Line',
            }),
          },
          { label: 'Empathy section' },
        ),
        steps: fields.object(
          {
            eyebrow: fields.text({ label: 'Eyebrow' }),
            heading: fields.text({ label: 'Heading' }),
            items: fields.array(
              fields.object({
                n: fields.text({ label: 'Number' }),
                title: fields.text({ label: 'Title' }),
                body: fields.text({ label: 'Body', multiline: true }),
              }),
              { label: 'Steps', itemLabel: (p) => p.fields.title.value || 'Step' },
            ),
          },
          { label: 'How It Works' },
        ),
        receive: fields.object(
          {
            eyebrow: fields.text({ label: 'Eyebrow' }),
            heading: fields.text({ label: 'Heading' }),
            items: fields.array(
              fields.object({
                title: fields.text({ label: 'Title' }),
                body: fields.text({ label: 'Body', multiline: true }),
              }),
              { label: 'Items', itemLabel: (p) => p.fields.title.value || 'Item' },
            ),
          },
          { label: "What You'll Receive" },
        ),
        journey: fields.object(
          {
            eyebrow: fields.text({ label: 'Eyebrow' }),
            heading: fields.text({ label: 'Heading' }),
            note: fields.text({ label: 'Note under the heading', multiline: true }),
            items: fields.array(
              fields.object({
                day: fields.text({ label: 'Day label' }),
                title: fields.text({ label: 'Title' }),
                body: fields.text({ label: 'Body', multiline: true }),
              }),
              { label: 'Days', itemLabel: (p) => p.fields.title.value || 'Day' },
            ),
          },
          { label: 'The 9-Day Journey' },
        ),
        about: fields.object(
          {
            eyebrow: fields.text({ label: 'Eyebrow' }),
            title: fields.text({ label: 'Title' }),
            body1: fields.text({ label: 'Paragraph 1', multiline: true }),
            body2: fields.text({ label: 'Paragraph 2', multiline: true }),
            ctaLabel: fields.text({ label: 'Button label' }),
            image: imageField('About image'),
          },
          { label: 'About Jenessa' },
        ),
        endorsements: fields.object(
          {
            eyebrow: fields.text({ label: 'Eyebrow' }),
            heading: fields.text({ label: 'Heading — plain part' }),
            headingAccent: fields.text({ label: 'Heading — book title part' }),
            items: fields.array(
              fields.object({
                theme: fields.select({
                  label: 'Card color',
                  defaultValue: 'cream',
                  options: [
                    { label: 'Pink', value: 'pink' },
                    { label: 'Dark', value: 'dark' },
                    { label: 'Periwinkle', value: 'periwinkle' },
                    { label: 'Cream', value: 'cream' },
                  ],
                }),
                heading: fields.text({ label: 'Pull quote', multiline: true }),
                quote: fields.text({ label: 'Full quote', multiline: true }),
                name: fields.text({ label: 'Name' }),
                role: fields.text({ label: 'Role' }),
                img: imageField('Headshot'),
              }),
              { label: 'Endorsements', itemLabel: (p) => p.fields.name.value || 'Endorsement' },
            ),
          },
          { label: 'Endorsements' },
        ),
        book: fields.object(
          {
            eyebrow: fields.text({ label: 'Eyebrow' }),
            titleLine1: fields.text({ label: 'Title — line 1' }),
            titleLine2: fields.text({ label: 'Title — line 2' }),
            body: fields.text({ label: 'Body', multiline: true }),
            meta: fields.text({ label: 'Meta line (release date)' }),
            ctaLabel: fields.text({ label: 'Button label' }),
            ctaUrl: fields.text({ label: 'Button URL' }),
            image: imageField('Book image'),
          },
          { label: 'Book Companion' },
        ),
        faq: fields.object(
          {
            eyebrow: fields.text({ label: 'Eyebrow' }),
            heading: fields.text({ label: 'Heading' }),
            items: fields.array(
              fields.object({
                q: fields.text({ label: 'Question' }),
                a: fields.text({ label: 'Answer', multiline: true }),
              }),
              { label: 'Questions', itemLabel: (p) => p.fields.q.value || 'Question' },
            ),
          },
          { label: 'FAQ' },
        ),
        finalCta: fields.object(
          {
            title: fields.text({ label: 'Title' }),
            body: fields.text({ label: 'Body', multiline: true }),
            ctaLabel: fields.text({ label: 'Button label' }),
            reassure: fields.text({ label: 'Reassurance line' }),
            image: imageField('Image'),
          },
          { label: 'Final CTA' },
        ),
      },
    }),
    home: singleton({
      label: 'Home / Pre-order Page',
      path: 'src/content/home/',
      format: { data: 'json' },
      schema: {
        hero: fields.object(
          {
            eyebrow: fields.text({ label: 'Eyebrow' }),
            title: fields.text({ label: 'Title' }),
            lede: fields.text({ label: 'Lede (large italic line)', multiline: true }),
            body: fields.text({ label: 'Body', multiline: true }),
            ctaLabel: fields.text({ label: 'Button label' }),
            ctaHref: fields.text({ label: 'Button link' }),
            badge: fields.text({ label: 'Badge text (tilted dark box)', multiline: true }),
            image: imageField('Hero image'),
          },
          { label: 'Hero' },
        ),
        sidelined: fields.object(
          {
            titleBefore: fields.text({ label: 'Title — before underlined word' }),
            titleWord: fields.text({ label: 'Title — underlined word' }),
            titleAfter: fields.text({ label: 'Title — after underlined word' }),
            body: fields.text({ label: 'Body', multiline: true }),
            lede: fields.text({ label: 'Emphasis line (line breaks preserved)', multiline: true }),
            ctaLabel: fields.text({ label: 'Button label' }),
            ctaHref: fields.text({ label: 'Button link' }),
            image: imageField('Image'),
          },
          { label: '"Not Sidelined" section' },
        ),
        inside: fields.object(
          {
            eyebrow: fields.text({ label: 'Eyebrow' }),
            title: fields.text({ label: 'Title' }),
            intro: fields.text({ label: 'Intro paragraph', multiline: true }),
            cards: fields.array(
              fields.object({
                icon: imageField('Icon'),
                alt: fields.text({ label: 'Icon alt text' }),
                text: fields.text({ label: 'Text', multiline: true }),
                theme: fields.select({
                  label: 'Card color',
                  defaultValue: 'dark',
                  options: [
                    { label: 'Dark', value: 'dark' },
                    { label: 'Peach', value: 'peach' },
                    { label: 'Blue', value: 'blue' },
                    { label: 'Cream', value: 'cream' },
                  ],
                }),
              }),
              { label: 'Cards', itemLabel: (p) => p.fields.text.value?.slice(0, 40) || 'Card' },
            ),
          },
          { label: 'Inside the Book' },
        ),
        bonuses: fields.object(
          {
            title: fields.text({ label: 'Title' }),
            cards: fields.array(
              fields.object({
                tag: fields.text({ label: 'Tag (Individual / Group)' }),
                image: imageField('Book image'),
                imageAlt: fields.text({ label: 'Image alt text' }),
                heading: fields.text({ label: 'Heading (line breaks preserved)', multiline: true }),
                variant: fields.select({
                  label: 'Button style',
                  defaultValue: 'primary',
                  options: [
                    { label: 'Primary', value: 'primary' },
                    { label: 'Secondary', value: 'secondary' },
                  ],
                }),
                ctaLabel: fields.text({ label: 'Button label' }),
                ctaHref: fields.text({ label: 'Button link' }),
                items: fields.array(
                  fields.object({
                    lead: fields.text({ label: 'Bold lead' }),
                    body: fields.text({ label: 'Description', multiline: true }),
                  }),
                  { label: 'Bonus items', itemLabel: (p) => p.fields.lead.value || 'Item' },
                ),
              }),
              { label: 'Pricing cards', itemLabel: (p) => p.fields.tag.value || 'Card' },
            ),
          },
          { label: 'Pre-Order Bonuses' },
        ),
        giveaway: fields.object(
          {
            titleWord: fields.text({ label: 'Title — underlined word' }),
            titleAfter: fields.text({ label: 'Title — rest' }),
            prizes: fields.array(
              fields.object({
                badge: fields.text({ label: 'Value badge' }),
                title: fields.text({ label: 'Prize title' }),
                sub: fields.text({ label: 'Prize description', multiline: true }),
                image: imageField('Prize image'),
                alt: fields.text({ label: 'Image alt text' }),
              }),
              { label: 'Prizes', itemLabel: (p) => p.fields.title.value || 'Prize' },
            ),
          },
          { label: 'Giveaway' },
        ),
        howItWorks: fields.object(
          {
            heading: fields.text({ label: 'Heading' }),
            step1: fields.text({ label: 'Step 1 text', multiline: true }),
            step2: fields.text({ label: 'Step 2 text', multiline: true }),
          },
          { label: 'How It Works' },
        ),
        testimonials: fields.object(
          {
            eyebrow: fields.text({ label: 'Eyebrow' }),
            titleBefore: fields.text({ label: 'Title — plain part' }),
            titleAccent: fields.text({ label: 'Title — book title part' }),
            cards: fields.array(
              fields.object({
                theme: fields.select({
                  label: 'Card color',
                  defaultValue: 'cream',
                  options: [
                    { label: 'Pink', value: 'pink' },
                    { label: 'Dark', value: 'dark' },
                    { label: 'Periwinkle', value: 'periwinkle' },
                    { label: 'Cream', value: 'cream' },
                  ],
                }),
                heading: fields.text({ label: 'Pull quote', multiline: true }),
                quote: fields.text({ label: 'Full quote', multiline: true }),
                name: fields.text({ label: 'Name' }),
                role: fields.text({ label: 'Role' }),
                img: imageField('Headshot'),
              }),
              { label: 'Endorsements', itemLabel: (p) => p.fields.name.value || 'Endorsement' },
            ),
          },
          { label: 'Endorsements' },
        ),
        challengeCta: fields.object(
          {
            eyebrow: fields.text({ label: 'Eyebrow' }),
            titleAccent: fields.text({ label: 'Title — highlighted part' }),
            titleRest: fields.text({ label: 'Title — rest' }),
            lead: fields.text({ label: 'Lead line', multiline: true }),
            body1: fields.text({ label: 'Body paragraph 1', multiline: true }),
            body2: fields.text({ label: 'Body paragraph 2 (line breaks preserved)', multiline: true }),
            image: imageField('Image'),
          },
          { label: 'Challenge CTA' },
        ),
        about: fields.object(
          {
            eyebrow: fields.text({ label: 'Eyebrow' }),
            titleTop: fields.text({ label: 'Title — top line' }),
            titleAccent: fields.text({ label: 'Title — accent line' }),
            body1: fields.text({ label: 'Paragraph 1', multiline: true }),
            pull: fields.text({ label: 'Emphasis paragraph', multiline: true }),
            body2: fields.text({ label: 'Paragraph 2', multiline: true }),
            ctaLabel: fields.text({ label: 'Button label' }),
            ctaHref: fields.text({ label: 'Button link' }),
            image: imageField('Family photo'),
          },
          { label: 'About the Author' },
        ),
      },
    }),
  },
});
