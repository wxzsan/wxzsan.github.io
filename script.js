/* Navigation, publication count, and equation overflow indicators. */
(() => {
  'use strict';
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('.site-nav');
  const isChinese = () => document.documentElement.lang === 'zh-CN';
  const updateMenuLabel = () => {
    const open = nav?.classList.contains('is-open');
    button?.setAttribute('aria-label', isChinese()
      ? (open ? '关闭导航菜单' : '打开导航菜单')
      : (open ? 'Close navigation menu' : 'Open navigation menu'));
  };
  const closeMenu = () => {
    nav?.classList.remove('is-open');
    button?.setAttribute('aria-expanded', 'false');
    updateMenuLabel();
  };
  button?.addEventListener('click', () => {
    const open = nav?.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(Boolean(open)));
    updateMenuLabel();
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
        row.setAttribute('title', isChinese() ? '横向滚动以查看完整公式' : 'Scroll horizontally to read the full equation');
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
  const count = document.querySelector('[data-preprint-count]');
  const preprints = document.querySelectorAll('.pub-details .publication').length;
  const updateCount = () => {
    if (count) count.textContent = isChinese() ? `${preprints} 篇论文` : `${preprints} papers`;
  };
  window.addEventListener('languagechange', () => {
    updateMenuLabel();
    updateCount();
    scheduleUpdate();
  });
  updateMenuLabel();
  updateCount();
})();
