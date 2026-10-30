/* Navigation and equation overflow indicators. No content is generated here. */
(() => {
  'use strict';
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('.site-nav');
  const closeMenu = () => {
    nav?.classList.remove('is-open');
    button?.setAttribute('aria-expanded', 'false');
    button?.setAttribute('aria-label', 'Open navigation menu');
  };
  button?.addEventListener('click', () => {
    const open = nav?.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(Boolean(open)));
    button.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', event => {
    if (!nav?.contains(event.target) && !button?.contains(event.target)) closeMenu();
  });

  // Long equations stay on one line. Only genuinely overflowing rows get a
  // focusable scroll area and a subtle bottom rule. Never shrink the whole page.
  const rows = [...document.querySelectorAll('.math-display')];
  const updateOverflow = () => {
    rows.forEach(row => {
      const overflow = row.scrollWidth > row.clientWidth + 2;
      row.dataset.overflow = String(overflow);
      if (overflow) {
        row.setAttribute('tabindex', '0');
        row.setAttribute('title', 'Scroll horizontally to read the full equation');
      } else {
        row.removeAttribute('tabindex');
        row.removeAttribute('title');
      }
    });
  };
  let frame;
  const scheduleUpdate = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(updateOverflow);
  };
  window.addEventListener('mathjax-ready', scheduleUpdate);
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate);
  document.fonts?.ready.then(scheduleUpdate);
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(scheduleUpdate);
    rows.forEach(row => observer.observe(row));
  }
  scheduleUpdate();

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  const count = document.querySelector('.pub-details .details-meta');
  const preprints = document.querySelectorAll('.pub-details .publication').length;
  if (count?.firstChild?.nodeType === Node.TEXT_NODE) {
    count.firstChild.textContent = `${preprints} papers `;
  }
})();
