(() => {
  'use strict';

  const depth = (() => {
    const path = window.location.pathname;
    if (path.includes('/blog/posts/')) return 2;
    if (path.includes('/blog/') || path.endsWith('/blog')) return 1;
    return 0;
  })();

  const prefix = depth === 0 ? '' : depth === 1 ? '../' : '../../';

  const page = (() => {
    const path = window.location.pathname;
    if (path.includes('/blog')) return 'blog';
    if (path.includes('cv.html')) return 'cv';
    return 'home';
  })();

  const navLinks = [
    { key: 'home', href: `${prefix}index.html`, i18n: 'nav.home', text: '首页' },
    { key: 'cv',   href: `${prefix}cv.html`,    i18n: 'nav.cv',   text: '简历' },
    { key: 'blog', href: `${prefix}blog/`,      i18n: 'nav.blog', text: '技术分享' },
  ];

  const linksHtml = navLinks
    .map(l => `<li><a href="${l.href}"${l.key === page ? ' class="active"' : ''} data-i18n="${l.i18n}">${l.text}</a></li>`)
    .join('\n        ');

  const html = `
    <div class="container">
      <a href="${prefix}index.html" class="logo">&lt;<span>H</span>&gt;</a>
      <ul class="nav-links" id="navLinks">
        ${linksHtml}
      </ul>
      <div style="display:flex;align-items:center;gap:0.5rem;">
        <button class="lang-toggle" id="langToggle" onclick="toggleLanguage()" aria-label="Switch Language">
          <i class="fas fa-globe"></i><span class="lang-label">EN</span>
        </button>
        <button class="theme-toggle" id="themeToggle" aria-label="切换主题">
          <i class="fas fa-moon"></i>
        </button>
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="菜单">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>`;

  const nav = document.getElementById('navbar');
  if (nav) nav.innerHTML = html;
})();
