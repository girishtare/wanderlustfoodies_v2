# Wanderlust Foodies — Design System

A warm, vintage-adventure design system for **Wanderlust Foodies** — a family
travel-and-food blog ("Global Adventures. Local Flavours.") and home of the
travel memoir **_The Human Migration_**, an honest account of trekking the
Garhwal Himalayas.

The system bottles the brand's character: a stamped-emblem logo, espresso ink on
warm cream paper, condensed signage type, and a slab-serif editorial voice that
is honest, sensory and a little self-deprecating.

---

## Sources

This system was reverse-engineered from the public brand. If you have access,
cross-reference these — do not assume the reader does:

- **Website:** https://www.wanderlustfoodies.com (Home, About, Blog, Recipes) — a
  Wix-built site. Pages read: `/`, `/about`, plus blog/recipe listings.
- **Logo / brand mark:** the social `og:image` is the badge emblem — saved to
  `assets/logo/wanderlust-badge.png`.
- **Imagery:** real photos pulled from the live site into `assets/img/`
  (trek map, recipe photos, the line-art couple portrait).
- **The Human Migration:** book blurb supplied in the brief (no public page yet —
  the Book UI-kit screen is a brand-consistent proposal, not a copy).

No Figma file or codebase was provided; **fonts are Google Fonts substitutes** —
see Visual Foundations → Type. Flag if the brand has licensed display fonts.

---

## Content Fundamentals

How Wanderlust Foodies writes.

- **Voice:** warm, first-person and inclusive — "**we**", "**our** kitchen",
  "join **us**". Founders Girish & Vidya (and son Devansh) are present in the copy;
  it reads like friends telling you about their trip, not a brand.
- **Honesty over polish.** The memoir voice is disarmingly candid and
  self-deprecating: _"the thermodynamic betrayal of a sub-zero bucket bath"_,
  _"what happens when a city-dwelling executive meets the unforgiving wild."_
  Lean into the hard parts; don't sand them down.
- **Sensory & specific.** Real place names (Swargarohini, Osla, Sandakphu, Shirdi),
  real dishes (Nachni Bhakri, Sabudana Khichdi, Pomfret Fry), concrete detail over
  generic adjectives.
- **Recipes get punchy, benefit-led call-outs** — often **bold inline**:
  "the ultimate **secret technique**", "**gluten-free** powerhouse of Calcium and
  Iron", "a **game-changer**". Enthusiastic, practical, a touch infomercial.
- **Casing:** Headlines and signage are **UPPERCASE** (Oswald). Body and titles use
  sentence case. Taglines use Title Case ("Global Adventures. Local Flavours.").
- **Tagline lockups:** "Exploring the world one bite at a time." ·
  "Where travel meets taste." · "Global Adventures. Local Flavours."
- **Emoji:** used very sparingly and only socially (a stray 🥾/✈️ in a CTA is fine);
  never as UI iconography or bullets. Default to none.
- **British/Indian English spellings** ("flavours", "realisation").

---

## Visual Foundations

### Color
Espresso-on-cream is the spine; three warm accents carry meaning.

- **Espresso ink `#382010`** (`--espresso-700`) — sampled straight from the logo.
  All primary text and the dark "ink" sections/footer.
- **Warm Paper `#F7F1E5`** (`--paper-100`) — the page. Never pure white as a field;
  cards step up to `--paper-50`.
- **Spice / terracotta `#C2562A`** (`--spice-500`) — **primary accent & CTAs**;
  appetite + action. Hover darkens to `--spice-600`, press to `--spice-700`.
- **Trek pine `#2C4632`** (`--pine-700`) — trails, adventure, "go"/success.
- **Turmeric gold `#E0A21A`** (`--turmeric-500`) — highlights, recipes, stars,
  the focus ring, inversions on dark.
- **Altitude sky `#6E93A6`** — a sparing cool accent (maps, info).
- Status: success = pine, warning = turmeric-600, danger = brick `#B23A2E`.
- **Blog taxonomy is colour-coded:** Travel = spice · Trek = pine · Recipe =
  turmeric · Story = sky. See `Badge`.

### Type
Three families, clear roles (all self-hosted woff2 in `assets/fonts/`):

- **Oswald** — display / signage. Condensed, **UPPERCASE**, the logo's voice. Hero
  titles, section heads, buttons, stat numbers. Tracking 0.01–0.06em.
- **Bitter** — editorial slab serif. Long-form memoir & recipe prose, article
  titles (sentence case), pull-quotes (italic). Reading size 17px, leading ~1.7.
- **Hanken Grotesk** — humanist sans. UI: labels, overlines, meta, form fields.
- _Substitution note:_ these are the closest Google Fonts to the brand's vintage
  signage + warm-serif feel. Swap in licensed fonts here if the brand has them.

### Shape, depth & motion
- **Corner radii** are soft: 8–18px on cards, **full pills** on buttons & badges
  (echoes the stamped badge edge).
- **Borders are confident hairlines** — 1.5px default, 2.5px ink for framed photos.
  The brand likes a visible outline, not borderless cards.
- **Cards:** cream `--paper-50` fill, hairline border, soft shadow; lift + image
  zoom on hover (no tilt except deliberate "polaroid" hero framing at ~-1.5°).
- **Shadows are warm brown-tinted** (`rgba(56,32,16,…)`) and soft — **never blue,
  never neon**. Elevation xs→lg.
- **Photography** is real and documentary: warm, sunlit, slightly nostalgic; food
  shot top-down and appetizing; trails shot in-situ. A secondary motif is **black-&-
  white hand-drawn line art** (the founders' portrait) and hand-drawn trail maps.
- **Motion** is grounded: gentle ease (`--ease-out`), 120–340ms fades and lifts.
  Press = subtle shrink/translate (no bounce, no spring). Hover = darker fill or
  soft wash. Respect reduced-motion.
- **Dark sections** ("ink") invert to espresso bg with cream text and turmeric
  accents — used for the footer, newsletter and the book hero.

---

## Iconography

The brand is **not icon-heavy** — it leans on type, the badge emblem and
photography. Guidance:

- **The badge / stamp is the hero device.** Reach for the `StampSeal` component
  (arced type + rings, no illustration) for seals, watermarks and dividers rather
  than inventing iconography. The master logo lives at
  `assets/logo/wanderlust-badge.png` (a vintage off-road pickup + crossed fork &
  spoon — travel meets food).
- **UI glyphs:** use a thin, rounded line set. The kit draws the few it needs
  (search, checkmarks, arrows) as inline 2.2px-stroke SVG. If you need a fuller set,
  use **Lucide** (CDN) — its rounded, even stroke matches; flag it as a substitution.
- **Social:** the live site uses small PNG social glyphs (Facebook, Instagram,
  Threads, X, YouTube, WhatsApp). They were not redistributed here — rendered as
  text chips in the footer. Swap real marks in for production.
- **Emoji:** avoid as iconography. A single travel emoji in a casual CTA is the
  ceiling. Never use emoji as bullets or status icons.
- Arrows ("→") and the "★" star are used decoratively in signage and the seal.

---

## Index / Manifest

Root files:
- `styles.css` — **the entry point** (consumers link this). `@import`s only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (radii/shadow/motion),
  `base.css` (reset + page defaults).
- `assets/fonts/` — self-hosted woff2 + `fonts.css`.
- `assets/logo/` — `wanderlust-badge.png`.
- `assets/img/` — real travel/recipe photography + line-art portrait.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `SKILL.md` — Agent-Skill manifest for downloading this system into Claude Code.

Components (`window.WanderlustFoodiesDesignSystem_288b64`):
- **core/** — `Button`, `Input`, `Avatar`
- **content/** — `Badge`, `Stat`, `ArticleCard`, `RecipeCard`
- **brand/** — `StampSeal`

Each component directory has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and a
`*.card.html` specimen.

UI kits:
- **ui_kits/website/** — interactive site recreation (Home · Blog post · Recipe ·
  Book). See its `README.md`.
