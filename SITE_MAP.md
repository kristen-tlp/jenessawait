# Site Map — Moving With God

**Figma File Key:** `ANHwV7r5R56YUaTlhhzarO`
**Source URL:** `https://www.figma.com/design/ANHwV7r5R56YUaTlhhzarO/Jenessa-Wait-%7C-Moving-With-God?node-id=2246-3825`
**Container Max-Width:** `1440px`

> **Node-ID note:** This is a single-artboard landing page. The entire page is one Figma
> frame — **home page node `2246:3825`**. The MCP transport in this workspace truncates
> responses > ~6.7 KB, so per-child `get_metadata` could not enumerate individual section
> node IDs (the full-frame metadata call fails). Every section below is therefore anchored
> to the parent frame node `2246:3825`; sections were located and read from high-resolution
> `get_screenshot` renders of that node. `fileKey` + this node are sufficient to re-render
> any region for QA.

## Pages

### Page: Home (single page)
Node ID: `2246:3825`

#### Sections

| # | Section | Node ID | Component | Background | Notes |
|---|---------|---------|-----------|------------|-------|
| 1 | Announcement Nav | `2246:3825` | `Nav` | blue `#26549e` | thumbnail + challenge CTA |
| 2 | Hero | `2246:3825` | `Hero` | split: photo / cream | book photo left, copy + CTA right, dark bonus badge |
| 3 | Press Bar | `2246:3825` | `PressBar` | salmon `#dfa897` | "pre-order now" + 9 retailer logos |
| 4 | You Are Not Sidelined | `2246:3825` | `Sidelined` | split: cream / photo | reassurance copy + CTA, walking photo right |
| 5 | Inside Moving With God | `2246:3825` | `Inside` | periwinkle `#e0e4ec` | 4 tilted icon cards |
| 6 | Pre-Order Bonuses | `2246:3825` | `Bonuses` | cream `#fffcf4` | Individual (pink) + Group (blue) cards |
| 7 | Big Giveaway | `2246:3825` | `Giveaway` | periwinkle `#e0e4ec` | 2 prize cards, value badges |
| 8 | How It Works | `2246:3825` | `HowItWorks` | periwinkle `#e0e4ec` | steps 1–2, 12-logo grid, embed form |
| 9 | Endorsements | `2246:3825` | `Testimonials` | cream `#fffcf4` | 4 quote cards + headshots |
| 10 | Challenge CTA | `2246:3825` | `ChallengeCTA` | split: photo / blue | email capture form |
| 11 | About the Author | `2246:3825` | `About` | cream `#fffcf4` | "Hi, I'm Jenessa." bio + family photo |
| 12 | Footer | `2246:3825` | `Footer` | dark `#393331` | copyright, policies, credit |

## Shared Components
| Component | Node ID | Description |
|-----------|---------|-------------|
| Button | `2246:3825` | Primary (terracotta), Secondary (cream/blue), Light — all uppercase w/ ↗ arrow |
| Badge / Tag | `2246:3825` | Pill labels: INDIVIDUAL, GROUP, $1000 VALUE, $500 VALUE |
| Asterisk mark | `2246:3825` | 8-ray sparkle logo mark (recreated as inline SVG) |

## Layout Notes
- **Full-bleed split sections** (Hero, Sidelined, Challenge CTA): a photo occupies one half
  edge-to-edge; the copy half carries its own padding.
- **Contained sections**: full-width background + inner content capped at `--size-container`
  (1440px) with `--container-padding` gutter; some text blocks use `.container--narrow`.
- No animations / parallax / scroll effects in the design.
