---
version: 1.0.0
name: Guizang Editorial
name_zh: 电子杂志 × 电子墨水
slug: g-editorial
description: "Warm paper, editorial serif hierarchy, documentary evidence, and restrained e-ink atmosphere."
canvas: 1920x1080 fixed stage
scheme: mixed
density: medium
formality: high
---

# Guizang Editorial · 电子杂志 × 电子墨水

## Frontend Slides Fixed-Stage Contract

Generate a single self-contained HTML presentation. Include the complete upstream `viewport-base.css`. Author every slide at 1920×1080 inside `.deck-stage`, then scale the stage uniformly to the viewport. Mobile views retain the same 16:9 composition. Use `.active` and `.visible` for slide switching. Support keyboard, wheel, touch, reduced motion, page count, and inline editing unless the user requests a locked file.

Read `guizang-style-pack/shared/implementation-contract.md`, `layout-grammar.md`, and `qa-checklist.md` with this file. This document is the selected design recipe. Do not mix it with another style's decorative grammar.

## Visual Thesis

A feature-magazine system built from warm paper, deep ink, serif display type, quiet sans annotations, fine rules, issue labels, image captions, and a subtle grain or contour field. The atmosphere supports the story and never competes with it.

## Identity Test

A deck belongs to this style only when all of the following are visible:
- paper grain plus a low-contrast contour or ink-wash layer
- serif title paired with restrained sans body and mono metadata
- documentary image wells with field-note captions
- issue strip, folio, and thin editorial rules

## Palette

```css
:root {
  --slide-bg: #F1EFEA;
  --surface: #E8E5DE;
  --ink: #0A0A0B;
  --muted: #6A665F;
  --accent: #8A3D2E;
  --accent-2: #243B53;
  --on-accent: #FFFFFF;
  --slide-pad-x: 120px;
  --slide-pad-y: 88px;
  --title-size: 132px;
  --body-size: 28px;
  --meta-size: 18px;
}
```

### Palette variants

- Ink Classic: warm paper + near-black ink
- Indigo Porcelain: cool white + deep indigo
- Forest Ink: ivory + forest green
- Kraft Paper: kraft beige + deep brown
- Dune: sand + charcoal
- Midnight Ink: sanctioned dark variant for night photography and cinematic subjects

Keep one coherent palette per deck. Accent color identifies meaning and hierarchy. Decorative color cannot reduce text contrast.

## Typography

- Display: **Playfair Display / Noto Serif SC**
- Body: **Noto Serif SC + Noto Sans SC**
- Metadata: **IBM Plex Mono**
- Google Fonts query: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Serif+SC:wght@300;400;500;600;700;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap`

Display titles use serif at 104–168px, weight 500–700, slightly positive or neutral tracking. Chinese display uses Noto Serif SC with line-height 1.06 and tracking 0.

Body copy uses 24–32px at 1920×1080. Captions and metadata use 17–22px. Chinese, Japanese, and Korean text uses an explicit Noto CJK family, neutral tracking, and slightly looser line-height. Rewrite long Chinese titles before reducing display size.

## Grid and Space

12-column editorial grid with a 2-column marginalia rail. Use 120px side margins, 88px top and bottom, and 32px gutters.

Use the upstream safe-area discipline. Decorative elements may escape the content grid but never the 1920×1080 stage. Reserve a clear bottom band for page numbering and captions.

## Layout Grammar

Recommended families: **G01, G02, G03, G04, G06, G09, G10, G12**.

- **G01 Cover:** express the visual thesis with one focal title composition.
- **G02 Chapter:** use a section number, short statement, and one signature device.
- **G03 Statement / Quote:** preserve a single dominant sentence and source line.
- **G04 Split Evidence:** pair a claim with one photograph, screenshot, or document fragment.
- **G05 KPI Hero:** use one decisive figure plus supporting interpretation.
- **G06 Comparison:** create two parallel systems with consistent labels.
- **G07 Process / Timeline:** show 3–7 steps on a clear directional axis.
- **G08 Matrix / Cards:** keep modules consistent; style enters through borders, type, spacing, and decoration.
- **G09 Image Hero:** document the subject safe zone and keep text away from faces, products, and important detail.
- **G10 Reading Grid / Table:** use for high-density decks without shrinking text.
- **G11 System Diagram:** use HTML labels and geometric SVG only.
- **G12 Closing:** repeat the deck's strongest motif and end with one takeaway or action set.

## Density Modes

**Low density / speaker-led:** one idea, one focal visual, up to three bullets. Favor G01, G02, G03, G05, G09, and G12.

**High density / reading-first:** use G04, G06, G07, G08, G10, and G11 when they fit the style. Keep body text at 24px or above. Split content when a table exceeds eight rows or a diagram exceeds nine labeled nodes.

## Images

Documentary photography, books, objects, material details, people in context. Prefer one dominant image or a disciplined contact sheet. Preserve captions and provenance.

Use stable aspect ratios and intentional crops. Add alt text. Generated images contain image content only and never include the final slide title, captions, fake UI, or decorative frame.

## Data and Diagrams

Use ledgers, annotated evidence blocks, serif pull quotes, and one or two large figures. Dense bar charts should move to Swiss or New Typography.

Use direct labels whenever possible. One slide answers one chart question. Keep units, sources, and time periods visible.

## Motion

Staggered editorial reveals. Headlines rise 20px over 650ms, images fade after the title, rules draw horizontally. Avoid bounce and looping motion.

All animation uses transform and opacity where possible. Reduced-motion mode must preserve hierarchy and reading order.

## CJK Rules

- Use the specified Noto CJK family for Chinese display or body roles.
- Keep Chinese letter-spacing between `-0.01em` and `0.04em`, depending on weight and title size.
- Do not uppercase CJK runs.
- Use semantic line breaks. Avoid one-character orphan lines.
- Minimum Chinese body size is 24px; caption and metadata minimum is 18px.
- English decorative treatments such as wide tracking, outline text, or condensed display should not be transferred mechanically to Chinese glyphs.

## Anti-Patterns

- flat cream fill with no atmosphere layer
- mono labels on every single element
- heavy 900-weight serif titles
- generic rounded SaaS cards
- decorative images without evidentiary or atmospheric purpose

## Final QA

Verify fixed-stage behavior, text overflow, panel overlap, image loading, contrast, reduced motion, keyboard navigation, touch navigation, and inline editing. Render a 1920×1080 screenshot for every slide and a 1280×720 contact sheet. Test one phone viewport; the stage should letterbox or pillarbox without reflow.
