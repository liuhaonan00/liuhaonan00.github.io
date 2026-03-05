(() => {
  'use strict';

  const container = document.querySelector('.giscus-container');
  if (!container) return;

  const theme = document.documentElement.getAttribute('data-theme') === 'dark'
    ? 'dark_protanopia' : 'light_protanopia';

  const script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.setAttribute('data-repo', 'liuhaonan00/liuhaonan00.github.io');
  script.setAttribute('data-repo-id', 'R_kgDOReysSg');
  script.setAttribute('data-category', 'General');
  script.setAttribute('data-category-id', 'DIC_kwDOReysSs4C3ueE');
  script.setAttribute('data-mapping', 'pathname');
  script.setAttribute('data-strict', '0');
  script.setAttribute('data-reactions-enabled', '1');
  script.setAttribute('data-emit-metadata', '0');
  script.setAttribute('data-input-position', 'bottom');
  script.setAttribute('data-theme', theme);
  script.setAttribute('data-lang', 'en');
  script.setAttribute('data-loading', 'lazy');
  script.crossOrigin = 'anonymous';
  script.async = true;

  container.appendChild(script);
})();
