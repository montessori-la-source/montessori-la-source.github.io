# Agent instructions

Static site for École Montessori La Source, deployed via GitHub Pages. Plain HTML/CSS/JS, no build step, no framework, no package manager.

## Structure

- `*.html` — one file per page (`index.html`, `projet-pedagogique.html`, `equipe.html`, `vie-scolaire.html`, `inscriptions.html`, `contact.html`)
- `assets/css/style.css` — shared styles
- `assets/js/layout.js` — `<site-header>` / `<site-footer>` custom elements (Web Components) that render the shared nav and footer markup, so it isn't duplicated across pages. `<site-header current="PAGE_KEY">` sets the underlined active nav link; `PAGE_KEY` is the filename without `.html` (e.g. `index`, `projet-pedagogique`).
- `assets/images/` — site images. Some are licensed stock/AI-generated assets (hero watercolor background, two images on the "Projet pédagogique" page) — confirm licensing before replacing or reusing them elsewhere.
- `reference-shots/` — screenshots kept for visual comparison against the original site; not part of the deployed site.

## Conventions

- No build tooling. Every page is a self-contained static HTML file that links `assets/css/style.css` and `assets/js/layout.js` directly.
- To add a page: copy an existing page's `<head>`/`<site-header>`/`<site-footer>`/script-tag skeleton, add its nav entry to `NAV_LINKS` in `assets/js/layout.js`, and set the matching `current` attribute.
- Keep content changes confined to the `<main>` block of each page.

## Local dev

```
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html`. A plain `file://` open also works since `layout.js` doesn't use `fetch`.

## Formatting

Formatted with [oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) via `npx` — no `package.json`/lockfile in this repo on purpose.

```
npx --yes oxfmt .          # format
npx --yes oxfmt --check .  # check only, used in CI (.github/workflows/format.yml)
```
