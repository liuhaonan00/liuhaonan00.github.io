(() => {
  'use strict';

  // Detect path depth to build correct relative URLs
  const depth = (() => {
    const p = window.location.pathname;
    if (p.includes('/blog/posts/')) return 2;
    if (p.includes('/blog/'))       return 1;
    return 0;
  })();

  const prefix    = depth === 0 ? '' : depth === 1 ? '../' : '../../';
  const isIndex   = depth === 0;
  const isBlog    = depth === 1;

  function postUrl(slug) {
    return `${prefix}blog/posts/${slug}.html`;
  }

  function renderCard(post) {
    return `
      <div class="card post-card fade-in" data-category="${post.categoryKey}">
        <div class="post-meta">
          <span class="category">${post.category}</span>
          <span>${post.date}</span>
        </div>
        <h3><a href="${postUrl(post.slug)}">${post.title}</a></h3>
        <p class="post-excerpt">${post.excerpt}</p>
        <div class="post-tags">
          ${post.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>`;
  }

  function observeFadeIn(container) {
    // Use a small delay so elements are in the DOM and layout is complete
    requestAnimationFrame(() => {
      const observer = new IntersectionObserver(
        entries => entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        }),
        { threshold: 0.05, rootMargin: '0px 0px 0px 0px' }
      );
      container.querySelectorAll('.fade-in').forEach(el => {
        // If already in viewport, show immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('visible');
        } else {
          observer.observe(el);
        }
      });
    });
  }

  // ---- Homepage: show latest 3 posts ----
  function renderIndex(posts) {
    const grid = document.getElementById('postsGrid');
    if (!grid) return;
    const latest = posts.slice(0, 3);
    grid.innerHTML = latest.map(renderCard).join('');
    observeFadeIn(grid);
  }

  // ---- Blog listing: show all posts + filter ----
  function renderBlog(posts) {
    const grid = document.getElementById('postsGrid');
    if (!grid) return;
    grid.innerHTML = posts.map(renderCard).join('');
    observeFadeIn(grid);

    // Wire up filter buttons
    document.querySelectorAll('.filter-tag').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        grid.querySelectorAll('.post-card').forEach(card => {
          const show = cat === 'all' || card.dataset.category === cat;
          card.style.display = show ? '' : 'none';
          if (show) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          }
        });
      });
    });
  }

  // Fetch posts.json and render
  fetch(`${prefix}posts.json`)
    .then(r => r.json())
    .then(posts => {
      if (isIndex)      renderIndex(posts);
      else if (isBlog)  renderBlog(posts);
    })
    .catch(err => console.error('Failed to load posts.json:', err));
})();
