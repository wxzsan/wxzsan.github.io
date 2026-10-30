# Xinzhao Wang — academic homepage

Personal academic website: https://wxzsan.github.io/

A static HTML, CSS, and JavaScript site hosted on GitHub Pages. No build step is required.

## Files

- `index.html` — biography, research, publications, talks, and LaTeX equations
- `styles.css` — typography and responsive layout
- `mathjax-config.js` — MathJax configuration
- `script.js` — navigation and equation overflow handling
- `Xinzhao_Wang_CV.pdf` — curriculum vitae
- `assets/` — portrait and site icon
- `robots.txt` and `sitemap.xml` — search engine discovery

## Maintenance

Edit `index.html` to update content and replace `Xinzhao_Wang_CV.pdf` to update the CV. Equations use `\[...\]` and `\(...\)` with MathJax loaded from a CDN; the text fonts also load from a CDN.

GitHub Pages publishes the root of the `main` branch. Commit and push changes to update the website. `.nojekyll` disables Jekyll processing.
