# Website UI Kit — Wanderlust Foodies

Interactive, high-fidelity recreation of the Wanderlust Foodies marketing site
(`wanderlustfoodies.com`), rebuilt on the design-system primitives.

## Run
Open `index.html`. A top nav switches between four screens (client-side, no router lib):

| Route | File | What it shows |
|-------|------|---------------|
| Home | `HomePage.jsx` | Hero, travel-tales grid, recipe grid, stats, newsletter |
| Blogs | `BlogPostPage.jsx` | Full travel-story article (Sandakphu trek) + related |
| Recipes | `RecipePage.jsx` | Recipe layout with tickable ingredients + numbered method |
| The Book | `BookPage.jsx` | "The Human Migration" memoir landing |

`Header.jsx` / `Footer.jsx` are shared chrome.

## How it's wired
- `index.html` loads React + Babel + the compiled `_ds_bundle.js`, then each screen
  via `<script type="text/babel" src="…">`. Each file ends with `window.X = X` so the
  files can see each other (Babel scripts don't share scope otherwise).
- Primitives come from `window.WanderlustFoodiesDesignSystem_288b64`
  (`Button`, `Badge`, `ArticleCard`, `RecipeCard`, `Stat`, `Avatar`, `Input`, `StampSeal`).
- Imagery is real, pulled from the live site into `/assets/img/`.

## Fidelity notes
- The live site is a Wix build; exact section order/copy is approximated from the
  public pages, not pixel-traced. Social icons are rendered as text chips (the brand
  uses small PNG social glyphs we did not redistribute).
- "The Book" page is a new surface implied by the brief (the memoir *The Human
  Migration*); it follows the brand system rather than copying an existing page.
