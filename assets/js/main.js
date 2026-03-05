(() => {
  'use strict';

  // --- Theme Toggle ---
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const icon = themeToggle?.querySelector('i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    // Sync Giscus theme
    const giscusFrame = document.querySelector('iframe.giscus-frame');
    if (giscusFrame) {
      giscusFrame.contentWindow.postMessage(
        { giscus: { setConfig: { theme: theme === 'dark' ? 'dark_protanopia' : 'light_protanopia' } } },
        'https://giscus.app'
      );
    }
  }

  const saved = localStorage.getItem('theme');
  if (saved) {
    setTheme(saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  }

  themeToggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // --- Mobile Menu ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  mobileMenuBtn?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const icon = mobileMenuBtn.querySelector('i');
    icon.className = navLinks.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
  });

  document.addEventListener('click', (e) => {
    if (navLinks?.classList.contains('open') &&
        !navLinks.contains(e.target) &&
        !mobileMenuBtn.contains(e.target)) {
      navLinks.classList.remove('open');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    }
  });

  // --- Scroll Fade-in Animation ---
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

  // --- Navbar shadow on scroll ---
  const navbar = document.querySelector('.navbar');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 10) {
          navbar?.style.setProperty('box-shadow', '0 1px 12px var(--color-shadow)');
        } else {
          navbar?.style.setProperty('box-shadow', 'none');
        }
        ticking = false;
      });
      ticking = true;
    }
  });
})();
