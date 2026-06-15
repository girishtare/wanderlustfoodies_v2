---
name: wanderlust-foodies-design
description: Use this skill to generate well-branded interfaces and assets for Wanderlust Foodies — a family travel-and-food blog ("Global Adventures. Local Flavours.") and home of the travel memoir The Human Migration — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, real assets, and UI-kit components for prototyping in the brand's warm, vintage-adventure style.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets
out and create static HTML files for the user to view. If working on production code,
copy assets and read the rules here to become an expert in designing with this brand.

Quick orientation:
- `styles.css` is the single entry point — link it and you get fonts + all tokens.
- Tokens live in `tokens/` (colors, typography, spacing/shadow/motion, base).
- Real brand assets are in `assets/` (logo badge, self-hosted fonts, photography).
- Reusable React components are under `components/` — each has a `.prompt.md` with
  usage. They are bundled to `window.WanderlustFoodiesDesignSystem_288b64`.
- `ui_kits/website/` is a full interactive recreation of the marketing site to learn
  layout patterns from.
- `guidelines/*.card.html` are visual specimens for colors, type and spacing.

Brand in one breath: espresso ink on warm cream paper; Oswald UPPERCASE signage +
Bitter slab-serif editorial voice + Hanken Grotesk UI; spice-terracotta CTAs, trek-
pine and turmeric-gold accents; pill buttons, confident hairlines, warm brown shadows;
honest, sensory, first-person copy. The stamp badge is the hero device.

If the user invokes this skill without other guidance, ask what they want to build or
design, ask a few clarifying questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.
