# Xinzhao Wang — academic homepage

Personal academic website: https://wxzsan.github.io/

A static HTML, CSS, and JavaScript site hosted on GitHub Pages. No build step is required.

## Files

- `index.html` — biography, research, publications, talks, and LaTeX equations
- `styles.css` — typography and responsive layout
- `mathjax-config.js` — MathJax configuration
- `script.js` — navigation and equation overflow handling
- `language.js` — language selection and preference persistence
- `Xinzhao_Wang_CV.pdf` — curriculum vitae
- `assets/` — portrait and site icon
- `robots.txt` and `sitemap.xml` — search engine discovery

## Maintenance

English and Chinese text are paired in `index.html` using `data-language` spans. Update both when changing content. The site defaults to English and remembers a visitor’s selection when browser storage is available.

Edit `index.html` to update content and replace `Xinzhao_Wang_CV.pdf` to update the CV. Equations use `\[...\]` and `\(...\)` with MathJax loaded from a CDN; the text fonts also load from a CDN.

GitHub Pages publishes the root of the `main` branch. Commit and push changes to update the website. `.nojekyll` disables Jekyll processing.
