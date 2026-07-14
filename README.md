# montessori-la-source.github.io

Static site for École Montessori La Source, published via GitHub Pages.

## Run locally

```
python3 -m http.server 8000
```

Open http://localhost:8000/index.html.

## Structure

- `*.html` — page content
- `assets/css/style.css` — shared styles
- `assets/js/layout.js` — shared header/footer, implemented as `<site-header>`/`<site-footer>` Web Components (no build step, no duplicated markup)
- `assets/images/` — site images
- `reference-shots/` — reference screenshots, not part of the deployed site

See [AGENT.md](./AGENT.md) for conventions when editing this repo with an AI coding agent.
