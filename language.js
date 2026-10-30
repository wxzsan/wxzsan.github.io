/* Language preference and labels; bilingual content lives in index.html. */
(() => {
  'use strict';
  const preferenceKey = 'homepage-language';
  let language = 'en';
  try {
    if (localStorage.getItem(preferenceKey) === 'zh') language = 'zh';
  } catch { /* English remains available when storage is disabled. */ }
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';

  const labels = {
    'Xinzhao Wang, home': '王昕兆，首页',
    'Main navigation': '主导航',
    'Language': '语言',
    'Contact and academic profiles': '联系方式与学术资料',
    'Portrait of Xinzhao Wang': '王昕兆的照片',
    'Other papers in this research area': '该研究方向的其他论文',
    'Alphabetical author order': '作者按字母顺序排列',
    'Optimal query complexity for time-dependent Hamiltonian simulation': '含时哈密顿量模拟的最优查询复杂度',
    'Optimal time-dependent Hamiltonian simulation query bound': '含时哈密顿量模拟的最优查询界',
    'Finite-order BCH truncation bound for Lindbladian channels': 'Lindbladian 信道的有限阶 BCH 截断界',
    'BCH truncation bound in diamond norm': 'diamond 范数下的 BCH 截断界',
    'Optimal T-count bounds for sparse state preparation and block encoding': '稀疏量子态制备与块编码的最优 T 门数量界',
    'Optimal T count for sparse state preparation': '稀疏量子态制备的最优 T 门数量',
    'Optimal T count for sparse matrix block encoding': '稀疏矩阵块编码的最优 T 门数量',
    'One-sided Jensen trace inequality for Laplace-mixture potentials': 'Laplace 混合势函数的单侧 Jensen 迹不等式',
    'One-sided Jensen trace inequality': '单侧 Jensen 迹不等式'
  };

  document.addEventListener('DOMContentLoaded', () => {
    const controls = document.querySelector('.language-switcher');
    const buttons = document.querySelectorAll('[data-language-option]');
    const translatedLabels = [];
    document.querySelectorAll('[aria-label], img[alt]').forEach(element => {
      const attribute = element.hasAttribute('aria-label') ? 'aria-label' : 'alt';
      const english = element.getAttribute(attribute);
      if (labels[english]) translatedLabels.push({ element, attribute, english });
    });
    const description = document.querySelector('meta[name="description"]');
    const englishDescription = description?.content;
    const applyLanguage = (nextLanguage, remember) => {
      language = nextLanguage;
      document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
      document.title = language === 'zh' ? '王昕兆 · Xinzhao Wang' : 'Xinzhao Wang · 王昕兆';
      buttons.forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.languageOption === language));
      });
      translatedLabels.forEach(({ element, attribute, english }) => {
        element.setAttribute(attribute, language === 'zh' ? labels[english] : english);
      });
      if (description) description.content = language === 'zh'
        ? '王昕兆，北京大学博士研究生，研究量子算法、量子模拟与计算复杂性。'
        : englishDescription;
      if (remember) {
        try { localStorage.setItem(preferenceKey, language); } catch { /* Switching still works. */ }
      }
      window.dispatchEvent(new Event('languagechange'));
    };
    buttons.forEach(button => button.addEventListener('click', () => {
      applyLanguage(button.dataset.languageOption, true);
    }));
    applyLanguage(language, false);
    if (controls) controls.hidden = false;
  });
})();
