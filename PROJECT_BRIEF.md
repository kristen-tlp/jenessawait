# Project Brief — Moving With God

**Source:** Figma — Jenessa Wait | Moving With God
**Figma file key:** `ANHwV7r5R56YUaTlhhzarO`
**Home frame node:** `2246:3825` (1440 × 8808)
**Framework:** Astro 7 (already scaffolded)
**Design frame width:** 1440px → `--size-container-ideal: 1440`, `--size-container-max: 1440px`

> **Extraction note:** The Figma MCP transport in this workspace truncates any single
> response over ~6.7 KB, so full-page `get_metadata` / `get_design_context` calls fail.
> Design tokens were pulled with `get_variable_defs`; all copy, layout, colors and images
> were taken from high-resolution `get_screenshot` renders of the home frame (native
> 1440 px), sliced and read section by section. Figma remains the single source of truth.

## Project

A single-page pre-order landing page for the book **"Moving with God"** by author/speaker
**Jenessa Wait** (releases **October 6**). Goals: drive book pre-orders, capture pre-order
bonus claims, and sign-ups for the free 9-day email challenge.

## Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-blue` | `#26549e` | Primary — headings accents, nav bar, group card, CTA section, retailer logos |
| `--color-terracotta` | `#b8684f` | Primary CTA buttons |
| `--color-dark` | `#393331` | Dark surfaces — hero badge, dark cards, footer |
| `--color-cream-soft` | `#fffcf4` | Main page background |
| `--color-cream` | `#f3edd9` | Secondary cream — secondary buttons, a testimonial card |
| `--color-salmon` | `#dfa897` | Press / pre-order retailer bar |
| `--color-periwinkle` | `#e0e4ec` | Light-blue sections (Inside, Giveaway, How It Works) |
| `--color-pink` | `#f5e4dd` | Light-pink cards (bonus, testimonial) |
| `--color-card-peach` | `#e3b9ae` | "Inside" icon card |
| `--color-card-blue` | `#d1d8e3` | "Inside" icon card |
| `--color-text` | `#2f2f2f` | Body text |
| `--color-white` | `#ffffff` | Text on dark/blue |

## Typography

- **Headings:** `Glamour Absolute` — Regular (400), line-height 1, letter-spacing ≈ −4%.
  Sizes seen: 24 / 32 / 40 / 64 / 72 / 80 px.
- **Body:** `Sofia Pro` — Light (300), letter-spacing ≈ −2%. Sizes: 18px/24, 20px/28.
- Both are **licensed fonts**. Free stand-ins load now: **Playfair Display** (headings)
  and **Poppins** (body). Drop the real font files in `/public/assets/fonts` and add
  `@font-face` rules to match exactly — the real names are already first in the CSS stack.

## Spacing / Radius / Shadows

- Spacing scale in `em` (see `global.css`). Desktop `--container-padding: 6.5em`,
  tablet `1.5em`, mobile `1em`.
- Border radius: small `4px` (buttons), `8–24px` (cards), pill (badges/tags).
- Shadows: minimal — the design is flat; soft card separation only.

## Page Sections (top → bottom)

1. **Announcement / Nav bar** (blue) — thumbnail, "Join the 9-day Free Challenge", CTA.
2. **Hero** (split: photo | cream) — Pre-order eyebrow, "Moving with God", value prop, CTA, dark bonus badge.
3. **Press bar** (salmon) — "pre-order now" + retailer logos.
4. **You are not sidelined** (split: cream | photo) — reassurance copy + CTA.
5. **Inside Moving with God** (periwinkle) — 4 tilted icon cards.
6. **Pre-Order Bonuses** (cream) — Individual (pink) + Group (blue) cards.
7. **Big Giveaway** (periwinkle) — two prize cards with value badges.
8. **How It Works** (periwinkle) — steps 1 & 2, retailer logo grid, form.
9. **Endorsements / Testimonials** (cream) — 4 quote cards + headshots.
10. **Free 9-Day Challenge CTA** (split: photo | blue) — email capture form.
11. **About the Author** (cream) — "Hi, I'm Jenessa." bio + family photo.
12. **Footer** (dark) — copyright, policies, credit.

## Special Interactions

None beyond static layout. The "Inside" cards are drawn at slight alternating tilts in
the design (replicated with a subtle CSS rotation). No animations, parallax, or scroll
effects are present in the design, so none are added.
