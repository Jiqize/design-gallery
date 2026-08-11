---
version: 1.0.0
name: Brutalism
name_zh: 粗野主义
slug: g-brutalism
description: "Exposed structure, thick borders, giant type, direct interfaces, and unapologetic utility."
canvas: 1920x1080 fixed stage
scheme: light
density: high
formality: medium
---

# Brutalism · 粗野主义

## Frontend Slides Fixed-Stage Contract

Generate a single self-contained HTML presentation. Include the complete upstream `viewport-base.css`. Author every slide at 1920×1080 inside `.deck-stage`, then scale the stage uniformly to the viewport. Mobile views retain the same 16:9 composition. Use `.active` and `.visible` for slide switching. Support keyboard, wheel, touch, reduced motion, page count, and inline editing unless the user requests a locked file.

Read `guizang-style-pack/shared/implementation-contract.md`, `layout-grammar.md`, and `qa-checklist.md` with this file. This document is the selected design recipe. Do not mix it with another style's decorative grammar.

## Visual Thesis

A visibly constructed slide system with thick borders, exposed grid, giant type, raw screenshots, square modules, direct labels, and no cosmetic smoothing. Utility and hierarchy are the aesthetic.

## Identity Test

A deck belongs to this style only when all of the following are visible:
- 4–8px borders and exposed layout structure
- giant black display type
- electric blue or warning red as one active signal
- raw screenshots, code, specs, and interface fragments

## Palette

```css
:root {
  --slide-bg: #F5F5F2;
  --surface: #DCDCDC;
  --ink: #080808;
  --muted: #444444;
  --accent: #2448FF;
  --accent-2: #FF2B2B;
  --on-accent: #FFFFFF;
  --slide-pad-x: 120px;
  --slide-pad-y: 88px;
  --title-size: 132px;
  --body-size: 28px;
  --meta-size: 18px;
}
```

### Palette variants

- Use the default palette. Small tonal adjustments are allowed only when they preserve the style identity and contrast.

Keep one coherent palette per deck. Accent color identifies meaning and hierarchy. Decorative color cannot reduce text contrast.

## Typography

- Display: **Archivo Black / Noto Sans SC**
- Body: **Archivo + Noto Sans SC**
- Metadata: **IBM Plex Mono**
- Google Fonts query: `https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..125,300..900&family=Archivo+Black&family=IBM+Plex+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@300;400;500;600;700;900&display=swap`

Ultra-bold display at 104–176px, short phrases only. Body remains 24–30px. Do not shrink body to pack a slide.

Body copy uses 24–32px at 1920×1080. Captions and metadata use 17–22px. Chinese, Japanese, and Korean text uses an explicit Noto CJK family, neutral tracking, and slightly looser line-height. Rewrite long Chinese titles before reducing display size.

## Grid and Space

12 columns with visible 2px baseline grid and 32px gutters. Panels share borders to form a structural skeleton.

Use the upstream safe-area discipline. Decorative elements may escape the content grid but never the 1920×1080 stage. Reserve a clear bottom band for page numbering and captions.

## Layout Grammar

Recommended families: **G01, G02, G04, G05, G06, G07, G08, G10, G11, G12**.

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

Raw screenshots, code, hardware, materials, field notes, and production evidence. Use straight borders and preserve detail.

Use stable aspect ratios and intentional crops. Add alt text. Generated images contain image content only and never include the final slide title, captions, fake UI, or decorative frame.

## Data and Diagrams

Specs, KPI ledgers, matrices, scorecards, code metrics, and comparisons. Large labels and direct units work well.

Use direct labels whenever possible. One slide answers one chart question. Keep units, sources, and time periods visible.

## Motion

Fast 160–280ms direct translation. No easing that feels soft or luxurious.

All animation uses transform and opacity where possible. Reduced-motion mode must preserve hierarchy and reading order.

## CJK Rules

- Use the specified Noto CJK family for Chinese display or body roles.
- Keep Chinese letter-spacing between `-0.01em` and `0.04em`, depending on weight and title size.
- Do not uppercase CJK runs.
- Use semantic line breaks. Avoid one-character orphan lines.
- Minimum Chinese body size is 24px; caption and metadata minimum is 18px.
- English decorative treatments such as wide tracking, outline text, or condensed display should not be transferred mechanically to Chinese glyphs.

## Anti-Patterns

- rounded corners
- soft shadows
- decorative serif type
- glass gradients
- using roughness as an excuse for misalignment or overflow

## Final QA

Verify fixed-stage behavior, text overflow, panel overlap, image loading, contrast, reduced motion, keyboard navigation, touch navigation, and inline editing. Render a 1920×1080 screenshot for every slide and a 1280×720 contact sheet. Test one phone viewport; the stage should letterbox or pillarbox without reflow.
