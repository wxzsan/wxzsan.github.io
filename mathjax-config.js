/* MathJax 3.2.1. Edit mathematical content in index.html.
   SVG output keeps TeX glyph outlines and rules at their natural vector weight.
   It is generated in the browser, not a set of separately maintained images.
   Wait for the text fonts before measuring ex units to prevent layout shifts. */
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']],
    processEscapes: true,
    packages: {'[+]': ['ams']}
  },
  svg: {
    scale: 1,
    fontCache: 'local',
    mtextInheritFont: false,
    merrorInheritFont: false,
    displayAlign: 'center',
    displayIndent: '0'
  },
  options: { enableMenu: false },
  startup: {
    ready() {
      MathJax.startup.defaultReady();
      MathJax.startup.promise.then(() => {
        document.documentElement.classList.add('math-ready');
        window.dispatchEvent(new Event('mathjax-ready'));
      });
    },
    pageReady() {
      // A failed CDN request must not block equations forever.
      const fontsReady = document.fonts ? Promise.all([
        document.fonts.load('17px "Latin Modern Roman"'),
        document.fonts.load('14px "Latin Modern Sans"')
      ]).catch(() => {}) : Promise.resolve();
      return Promise.race([
        fontsReady,
        new Promise(resolve => setTimeout(resolve, 1800))
      ]).then(() => MathJax.startup.defaultPageReady());
    }
  }
};
