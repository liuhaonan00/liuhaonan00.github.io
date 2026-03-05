(() => {
  'use strict';

  const footer = document.getElementById('footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="container">
      <p data-i18n="footer.text" data-i18n-html>&copy; 2026 Haonan Liu. Built with ❤️ and hosted on <a href="https://pages.github.com" target="_blank">GitHub Pages</a>.</p>
    </div>`;
})();
