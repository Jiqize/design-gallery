# Fashion Monitor Design Direction

- Status: Approved v1.0, implementation baseline
- Date: 2026-07-30
- Source of truth: `docs/specs/fashion-trend-intelligence-platform-spec.md`
- Direction: Vogue-inspired high-fashion editorial design, without copying Vogue's logo, masthead, layouts, or protected brand assets

## 1. Design thesis

### The world as a fashion issue

Fashion Monitor should feel like a global fashion magazine that happens to be live, searchable, and data-aware.

The homepage is not a conventional analytics dashboard. It opens as an editorial world atlas: cities appear like cover lines, active signals read like headlines, and the movement of a trend between cities becomes the visual narrative of the page.

The design combines three qualities:

- Editorial authority: disciplined typography, strong hierarchy, sharp writing, visible sources.
- Fashion emotion: large photography, asymmetry, cinematic cropping, generous white space.
- Intelligence clarity: time windows, confidence, coverage, evidence and geographic relationships remain readable.

The page's single job is to help a fashion professional answer:

> Where is fashion moving now, and what evidence makes that movement worth my attention?

## 2. Brand position

Fashion Monitor is an independent fashion intelligence product, not a Vogue replica or extension.

The visual direction may borrow the grammar of high-fashion editorial publishing:

- High-contrast serif headlines
- Black, paper white and a restrained editorial red
- Image-led storytelling
- Hairline rules and precise captions
- Dramatic scale changes
- Confident negative space

It must not copy:

- The VOGUE masthead or a confusingly similar wordmark
- Vogue-specific page compositions or branded section names
- Proprietary photography, cover art or editorial assets
- A layout that could be mistaken for an official Vogue digital product

Fashion Monitor uses its own name, wordmark proportions and product vocabulary.

## 3. Signature design element

### The Red Thread

A single editorial red line connects a trend's movement between cities.

On the map, it traces propagation from origin or early evidence to later discussion and commercial response. In the trend detail, the same line becomes the timeline spine. In city comparison, it connects shared signals across columns.

The line represents observed sequence and relationship, not guaranteed causality.

This is the one expressive flourish in the system. Other decoration stays quiet.

### City cover lines

Important city names are typeset on the map like fashion cover lines rather than generic map pins:

- PARIS
- SEOUL
- TOKYO
- SHANGHAI
- NEW YORK
- LONDON
- MILAN

Type scale, weight and annotation express importance, trend stage and data confidence. Color alone never carries meaning.

When a city is selected, its name expands into a large editorial title and opens a City Issue panel over the map.

## 4. Visual principles

### 4.1 Editorial, not ornamental

Typography, rules, captions and numbering must communicate hierarchy, source, date or sequence. Decorative lines and labels without meaning should be removed.

### 4.2 Photography is evidence

Images are not generic atmosphere. Every trend image should represent a specific signal and retain source, date, place and relationship to the trend.

### 4.3 A paper atlas, not a cyber command center

The default map is light, flat and typographic. Avoid neon glows, sci-fi grids, glass panels, dark 3D globes and military visual language.

### 4.4 Drama through scale

The design earns its fashion character through the contrast between:

- Very large city and trend headlines
- Small, precise metadata
- Full-bleed photography
- Large fields of empty space

It does not rely on rounded cards, gradients or excessive animation.

### 4.5 Data remains sober

Trend scores, confidence and coverage are displayed quietly and precisely. They should never look like engagement bait or speculative market trading indicators.

## 5. Color system

### 5.1 Core palette

| Token | Value | Role |
| --- | --- | --- |
| Ink | `#0A0A0A` | Primary text, map labels, rules |
| Paper | `#F5F4F0` | Main editorial surface |
| Pure White | `#FFFFFF` | Photography frames, overlays, focus areas |
| Newsprint | `#D8D6CF` | Borders, inactive geography, separators |
| Caption Grey | `#676560` | Metadata and secondary copy |
| Editorial Red | `#9D1028` | Selected city, Red Thread, urgent editorial emphasis |
| Coverage Blue | `#395C78` | Data coverage and system availability only |

### 5.2 Usage rules

- Ink and Paper carry most of the interface.
- Editorial Red should occupy less than 8% of a normal screen.
- Coverage Blue is reserved for coverage and source-health semantics.
- Trend categories are primarily distinguished through labels, symbols and patterns, not a rainbow palette.
- Photography supplies seasonal color. The surrounding interface should not compete with it.
- Large surfaces do not use gradients.

### 5.3 Status semantics

- Emerging: outlined marker plus upward editorial arrow
- Rising: Editorial Red line or underline
- Spreading: linked multi-city marker
- Mainstream: solid Ink marker
- Stable: horizontal rule
- Cooling: grey descending marker
- Low coverage: blue hatch
- Source interruption: broken blue rule

Every state has a non-color cue.

## 6. Typography

### 6.1 Font roles

| Role | Preferred family | Use |
| --- | --- | --- |
| Latin display | Bodoni Moda | City names, feature headlines, large trend titles |
| Chinese display | Noto Serif SC / Source Han Serif SC | Chinese feature headlines and city editions |
| Editorial body | Noto Serif SC with Latin serif fallback | Analysis, briefs, long-form explanations |
| Interface | Helvetica Neue / Arial / PingFang SC | Navigation, filters, controls |
| Data | IBM Plex Mono | Dates, scores, source counts, coordinates |

Production use must verify font licensing and loading performance. Bodoni Moda and Noto families are the default accessible direction; licensed alternatives may replace them without changing the typographic roles.

### 6.2 Type scale

| Style | Desktop | Mobile | Notes |
| --- | --- | --- | --- |
| Atlas title | 96-144 px | 52-72 px | Tight leading, display serif |
| Feature headline | 64-88 px | 40-56 px | Maximum 2-3 lines |
| Section headline | 40-56 px | 30-40 px | Editorial serif |
| Story headline | 24-36 px | 22-30 px | Serif |
| Standfirst | 20-26 px | 18-22 px | Relaxed leading |
| Body | 17-19 px | 16-18 px | 1.55-1.7 line height |
| UI label | 12-14 px | 12-14 px | Sans serif |
| Caption | 11-12 px | 11-12 px | Sans or mono |

### 6.3 Typesetting rules

- English display headlines may use tight tracking between `-0.03em` and `-0.01em`.
- Uppercase is reserved for city names, short section labels and metadata.
- Chinese headlines use normal tracking and generous line height; do not force Latin-style letter spacing.
- Mixed Chinese and English headings establish one dominant script rather than alternating weight every word.
- Body copy never uses all caps or ultra-light weights.
- Metadata uses tabular numerals where available.
- Headlines should break by meaning, not merely fill a rectangle.

## 7. Layout system

### 7.1 Grid

- Desktop: 12 columns, 32 px gutters, 48-64 px page margins.
- Wide desktop: content max width 1680 px; the map may extend edge to edge.
- Tablet: 8 columns, 24 px gutters, 24-32 px margins.
- Mobile: 4 columns, 16 px gutters and margins.
- Baseline spacing unit: 4 px.
- Major editorial spacing: 48, 72, 96 and 144 px.

### 7.2 Shape language

- Default corner radius: 0.
- Interactive image controls: 2 px maximum.
- Circular controls only for map zoom, location and play/pause actions.
- Borders are 1 px hairlines.
- Shadows are avoided; overlays separate from the map through solid Paper or White surfaces and crisp rules.
- Pill controls are limited to compact filter chips where wrapping behavior requires them.

### 7.3 Density

The map can be information-dense. The editorial content below it must breathe.

Avoid showing every metric at once. Each section should have:

- One dominant headline or image
- One primary explanation
- One compact evidence layer
- Secondary detail available on demand

## 8. Homepage composition

### 8.1 Desktop

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ FASHION MONITOR     WORLD / 7 DAYS       SEARCH     SAVED     30 JUL 2026  │
├───────────────┬──────────────────────────────────────────────────────────────┤
│ SIGNAL        │                                                              │
│ All           │      LONDON             PARIS                                │
│ Runway        │                          ╲                                   │
│ Brand         │        NEW YORK ─────────╲──── MILAN                         │
│ Culture       │                           ╲                                  │
│ Retail        │                   SEOUL ─── TOKYO                            │
│ Material      │                        SHANGHAI                              │
│               │                                                              │
│ TIME          │                 GLOBAL FASHION ATLAS                         │
│ 24H  7D  30D  │                                                              │
│ SEASON        │                                      Coverage 82%            │
├───────────────┴──────────────────────────────────────────────────────────────┤
│ THE TOKYO EDIT / 7 DAYS                                                     │
│ ┌───────────────────────────────┐  Liquid shine moves from nightlife to     │
│ │                               │  commercial collections                   │
│ │         HERO IMAGE            │  Three rising signals / 42 sources        │
│ │                               │  [Explore the Tokyo issue]                │
│ └───────────────────────────────┘                                            │
├──────────────────────────────────────────────────────────────────────────────┤
│ RISING NOW            MOODBOARD             BRAND MOVES        RED THREAD    │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 8.2 Map behavior

- The map occupies approximately 65-75% of the initial desktop viewport below the masthead.
- The left editorial rail controls signal type and time window.
- A compact legend explains stage, confidence and coverage.
- Selected city content opens from the right as a solid editorial sheet occupying no more than 38% of the viewport.
- The map remains visible behind the sheet so geographic context is never lost.
- Scrolling past the atlas transitions into the selected city's editorial issue.

### 8.3 Default state

The default state shows:

- Current time window and data recency
- 8-12 editorially prioritized city labels
- Emerging-market markers with less visual weight
- One to three Red Thread relationships when evidence supports them
- A coverage summary
- A short headline describing the strongest global movement

The map should not show dozens of competing animated points.

## 9. City Issue

Selecting a city creates a temporary magazine edition for that place.

### 9.1 Header

- Large city name
- Country or market
- Time window
- One-sentence editorial standfirst
- Trend strength, confidence and coverage
- Save city and compare actions

Example:

```text
TOKYO
THE 7-DAY ISSUE

Reflective surfaces move from club culture
into accessories and commercial outerwear.

RISING / CONFIDENCE 78 / COVERAGE 84
```

### 9.2 Content order

1. Hero trend and representative image
2. Rising trend index
3. City Moodboard
4. Brand and designer movements
5. Color, material, silhouette and item edit
6. Red Thread propagation timeline
7. Evidence and source ledger

The city page reads like an editorial feature, not a grid of equal dashboard cards.

## 10. Trend detail

### 10.1 Opening spread

The opening spread pairs:

- A full-height or large landscape image
- A feature headline
- One-sentence definition
- Trend stage and geographic reach
- A concise evidence statement

### 10.2 Evidence rhythm

Evidence alternates between:

- Photography
- Short editorial analysis
- Source quotations or paraphrases
- Brand and retail confirmations
- Geographic movement
- Time-based changes

A compact source ledger remains available without interrupting the editorial reading flow.

### 10.3 Trend score

Do not present a single giant score as the hero.

Show the score as a quiet folio with its components:

- Momentum
- Source diversity
- Visual consistency
- Geographic spread
- Commercial confirmation
- Coverage quality

The explanation matters more than the number.

## 11. Moodboard

Moodboards should feel art-directed rather than mechanically tiled.

### 11.1 Composition

- Use an asymmetric editorial grid.
- Mix 4:5 portrait, 3:2 landscape, 1:1 detail and occasional full-width images.
- Preserve image focus and avoid aggressive center-cropping.
- Create clear visual pauses between image groups.
- Allow a selected image to expand into an evidence view.

### 11.2 Image metadata

Every evidence image includes:

- Source and credit
- Date
- Location
- Brand or creator when known
- Related trend and design elements
- Rights or display status when relevant

Metadata appears on focus, selection or immediately below important images. It is never hidden permanently behind hover.

### 11.3 Missing imagery

When no lawful or relevant image is available, use:

- A typographic headline
- A material or color swatch if supported by evidence
- A factual empty-state explanation

Do not use generic AI fashion imagery as evidence.

## 12. City comparison

City comparison resembles a fashion feature spread:

```text
┌──────────────────────┬──────────────────────┬──────────────────────┐
│ TOKYO                │ SEOUL                │ SHANGHAI             │
│ Quiet technical      │ Polished pop         │ Expressive utility   │
│ [hero image]         │ [hero image]         │ [hero image]         │
├──────────────────────┴──────────┬───────────┴──────────────────────┤
│ SHARED SIGNALS                  │ LOCAL DIFFERENCE                  │
│ Red Thread timeline             │ Evidence and coverage            │
└─────────────────────────────────┴───────────────────────────────────┘
```

- Each city retains equal visual status.
- Shared trends align horizontally for comparison.
- Local-only signals stay in the city's column.
- Coverage differences appear before conclusions.
- The layout avoids winner rankings unless the data explicitly measures a comparable rank.

## 13. Components

### Masthead

Thin, stable and typographic. It contains product identity, current geography, time window, search, saved work and date. It does not behave like a SaaS navbar full of buttons.

### Editorial rail

Vertical map controls grouped by meaning: Signal, Time, Geography and Coverage. Labels stay visible; icons never replace unfamiliar concepts.

### City label

A typographic map object with city name, stage marker and optional trend count. Hover or focus reveals a short trend line; selection opens the City Issue.

### Trend marker

Uses shape, stroke and label to express stage. Marker area reflects uncertainty as well as activity, so large circles do not imply false precision.

### City Issue panel

A solid editorial overlay with large typography, one lead image, three prioritized signals and clear Explore, Save and Compare actions.

### Trend story

An image-and-headline composition with a visible city, stage, date and evidence count. It avoids generic card chrome.

### Evidence strip

A horizontally readable sequence of sources, images and dates. Each item opens its provenance.

### Coverage note

States whether evidence is strong, partial, delayed or interrupted. It uses Coverage Blue and a pattern, never a warning-red treatment.

### Empty state

Explains what is missing and why:

> Coverage is limited in this market for the selected period. View available sources or widen the date range.

## 14. Data visualization

- Default charts use Ink, Caption Grey and Editorial Red.
- Coverage overlays use Coverage Blue with hatching.
- Use direct labels instead of legends where space permits.
- Timelines run on a thin Red Thread with city names set as editorial labels.
- Small multiples are preferred for city comparison.
- Avoid 3D charts, gradient area charts, glowing heatmaps and speedometer gauges.
- Large figures appear as pull quotes only when the number is meaningful and well-defined.
- All charts include time range, unit, source count and coverage.

## 15. Motion

Motion should feel like turning a page or moving an editorial crop, not operating a game interface.

### Primary sequence

On first load:

1. The masthead and atlas frame appear immediately.
2. City names resolve in a short sequence.
3. One supported Red Thread draws across the map.
4. The current global headline fades in.

Total orchestrated duration should remain under 900 ms after data is ready.

### Interactions

- City selection: 400-550 ms map focus and City Issue reveal.
- Panel reveal: firm horizontal editorial wipe, not springy motion.
- Image focus: subtle crop expansion and caption reveal.
- Trend timeline: line draws only when entering the viewport.
- Filter changes: update labels and marks without resetting the entire page.

Reduced-motion mode removes line drawing, camera travel and editorial wipes. Content remains immediately available.

## 16. Responsive behavior

### Desktop, 1280 px and above

- Full atlas composition
- Persistent editorial rail
- Right-side City Issue
- Multi-column editorial layouts

### Tablet, 768-1279 px

- Map remains the first view at approximately 60% viewport height
- Filters move into a compact top rail
- City Issue becomes a bottom sheet
- Editorial content uses an 8-column layout

### Mobile, below 768 px

- Map remains the first content block at approximately 52% viewport height
- A horizontal city index supplements direct map selection
- Filters open as a full-height sheet
- City Issue rises from the bottom and can expand to full screen
- Moodboard uses two columns with occasional full-width images
- City comparison becomes vertically stacked with shared trends pinned above
- Propagation timeline becomes vertical

The mobile experience must not require precise tapping on small map points.

## 17. Interaction and copy

### Controls

Use direct labels:

- Explore Tokyo
- Compare cities
- Save trend
- Add to moodboard
- View evidence
- Show coverage
- Widen date range

Avoid abstract labels such as Submit, Insights Engine or AI Analysis when a specific action is available.

### Editorial voice

- Precise, observant and restrained
- Specific about place, time and evidence
- Fashion-literate without being cryptic
- Confident without overstating certainty

Preferred:

> Silvered leather is rising across Tokyo and Seoul, supported by runway, nightlife and accessories signals over the last 30 days.

Avoid:

> Metallics are taking over the world.

### Language

- City names may remain in internationally recognized Latin spelling with local-language context.
- Chinese is the primary explanatory language for the first edition unless the product Spec changes.
- Established brand and designer names retain official spelling.
- Machine-translated content must be identifiable.

## 18. Accessibility

- Text and functional graphics meet WCAG AA contrast.
- Body text is at least 16 px on mobile.
- Keyboard users can reach every map city through an equivalent city index.
- Focus states use a 2 px Ink outline with clear offset.
- Status never relies on color alone.
- Images have meaningful alt text; decorative images use empty alt text.
- Map relationships and timelines have readable text alternatives.
- Tap targets are at least 44 by 44 px.
- Zoom and text enlargement do not hide evidence or controls.
- Reduced motion is respected.

## 19. Design anti-patterns

Do not use:

- A dark neon geopolitical command-center theme
- A generic SaaS dashboard made of equal rounded cards
- Glassmorphism, glowing borders or gradient KPI tiles
- A 3D globe as the default atlas
- Rainbow heatmaps without clear semantics
- Excessive badges and pills
- AI-generated fashion imagery presented as trend evidence
- Hidden provenance
- Tiny grey captions that make evidence unreadable
- Fashion photography as decoration without analytical purpose
- The Vogue logo or a confusingly similar masthead

## 20. Design tradeoffs

### Chosen: light editorial map

Rejected: dark real-time command-center map.

Reason: the light atlas integrates naturally with high-fashion editorial content and keeps photography dominant. It sacrifices some conventional “intelligence terminal” drama in exchange for a more ownable fashion identity.

### Chosen: map plus editorial issue

Rejected: map as a hero followed by an unrelated dashboard grid.

Reason: the selected geography must continue into the content hierarchy so the map remains a real navigation model.

### Chosen: restrained status color

Rejected: one color for every trend category.

Reason: photography already carries substantial color. Labels, line styles and symbols produce a calmer and more accessible system.

### Chosen: 2D atlas by default

Rejected: 3D globe as the primary experience.

Reason: a 2D atlas offers faster comparison, better label composition and a closer relationship to magazine cartography. A globe can exist later as an optional exploratory view.

## 21. Design acceptance criteria

The design is ready for implementation planning when:

- The map is unmistakably the homepage's primary entry point.
- The first viewport communicates current geography, time window, trend activity and coverage.
- Selecting a city preserves map context and opens a clear City Issue.
- Scrolling from the map into content feels like entering the selected city's magazine edition.
- Typography has a deliberate high-fashion editorial hierarchy in Chinese and English.
- The product does not visually resemble a generic SaaS dashboard or military intelligence terminal.
- The product has its own identity and does not reproduce Vogue branding.
- Trend state, confidence and coverage are distinguishable without relying only on color.
- Photography retains source, date and analytical context.
- Desktop, tablet and mobile preserve the map-first information architecture.
- Keyboard, reduced-motion and non-map alternatives are specified.
- The Red Thread works consistently across map, trend timeline and comparison views.
