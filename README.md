# Xinzhao Wang — academic homepage

This is a static HTML/CSS site. There is no build step. Unzip the entire project and open `index.html`, or deploy all files to your GitHub Pages repository. Do not open a copy of `index.html` on its own without the accompanying files.

## GitHub Pages deployment

The production URL is `https://wxzsan.github.io/`, published from the `main` branch root of `wxzsan/wxzsan.github.io`. Push changes to `main` to update the homepage. `.nojekyll` preserves the static files without Jekyll processing. `robots.txt` and `sitemap.xml` allow crawler discovery; search indexing still depends on each search engine.

The local `.sites-deploy/` folder contains the previous Sites deployment and is excluded from GitHub.

## Files

- `index.html` — academic text, paper list, author-order marks, and editable LaTeX equations
- `styles.css` — typography, colors, spacing, and responsive layout
- `mathjax-config.js` — MathJax TeX-to-SVG settings
- `script.js` — mobile navigation, preprint count, and horizontal formula overflow
- `Xinzhao_Wang_CV.pdf` — unchanged from v21
- `assets/` — portrait and Jirachi icon

MathJax and Latin Modern webfonts are loaded from version-pinned CDNs; internet access is needed for full typography and live equations. No font files are included in this project.

## Featured mathematical results (v24)

The four representative papers each have a subtle, **fully outlined** result
excerpt, with **no background tint or extra "Selected result" heading**. The
border itself makes clear that the equations are a self-contained highlight,
not a derivation from the previous paragraph. All four excerpts share the same
style; their internal mathematical content varies naturally.

```html
<figure class="selected-result" aria-label="Optimal query complexity">
  <div class="result-excerpt-body">
    <div class="math-display">
      \[ q = O(\cdots) \]
    </div>
    <p class="result-note">Explain only the notation needed to read the bound.</p>
  </div>
</figure>
```

Edit `styles.css` (`.selected-result`, `.math-display`, and `.result-note`) to
change the outline, equation size, or spacing. Edit the original LaTeX inside
`index.html` to change an expression. Long equations scroll inside their own
row on narrow screens. Keep the formula as TeX rather than an image.

The *QSVT without block encodings* paper is intentionally listed under two
research themes. Its first appearance has `id="qsvt-product-formulas"`, and
the second appearance says **Also listed under Product-Formula Methods** and
links to the first. It is still only one paper in the full Publications list.

## Editing content

Search a paper title in `index.html`. Change the content of the appropriate paragraph or math display directly. For equations, use `\[...\]` and `\(...\)` as in LaTeX; use `\lt` instead of a raw `<` character inside HTML.

Author markers follow the CV: `†` after Xinzhao Wang means alphabetical author order, and `*` after each relevant author's name indicates equal contribution. Keep the existing `order-mark` class when copying author rows. The full bibliography is separate from the selected research descriptions, so adding a research item does not automatically add a bibliography entry.

The Preprints section is expanded by default but remains collapsible.

## Checks

The page content, all six displayed TeX equations, the CSS syntax, and local asset paths were checked while preparing this revision. The changes from v22 alter the formatting of the four selected-result excerpts while preserving the rest of the site. Since a live Chromium rendering was not accessible in this session, the final CSS should be checked in your browser after downloading or publishing, particularly at mobile widths. No PDF or image assets in the published site have been changed.

## v25: Self-contained result excerpts

Each outlined result should read as a complete mathematical statement even if the preceding paper description is skipped. The sentence immediately above the display defines its input object and assumptions. The equation completes that sentence, with punctuation inside the display.

- Time-dependent simulation: the bound specifies the Hamiltonian, time interval, norm bound, precision, and oracle-query measure.
- BCH truncation: the display identifies the formal BCH terms and channel product; the note defines the doubly right-nested commutator structure and convergence claim.
- Sparse T-count: the two results specify the quantum state and matrix inputs separately, including the precision and normalization.
- One-sided Jensen: the nonnegative Laplace-mixture condition is a hypothesis of the inequality, not an afterthought.

MathJax formulas remain ordinary editable LaTeX in `index.html`. The rest of the website and supplied CV are unchanged from v24.
