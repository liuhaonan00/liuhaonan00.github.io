# liuhaonan00.github.io

Personal website of **Haonan Liu** — Backend Engineer (Python & Go) | Web3 & LLM.

🌐 **Live site**: [liuhaonan00.github.io](https://liuhaonan00.github.io)

## Pages

| Page | Description |
|------|-------------|
| `/` | Home & About |
| `/cv.html` | Resume (中/EN) |
| `/blog/` | Tech Blog |

## Features

- Light / Dark mode
- Chinese / English i18n (auto-detects browser language)
- Blog comments via [Giscus](https://giscus.app) (GitHub Discussions)
- Responsive design

## Local Development

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Adding a New Blog Post

1. Create `blog/posts/<slug>.html`
2. Add one entry to **`posts.json`** — the homepage and blog listing update automatically:

```json
{
  "slug": "my-new-post",
  "title": "文章标题",
  "date": "2026-04-01",
  "category": "系统设计",
  "categoryKey": "system-design",
  "excerpt": "文章摘要...",
  "tags": ["tag1", "tag2"]
}
```

Available `categoryKey` values: `system-design` · `frontend` · `devops` · `ai`

## Structure

```
├── index.html              # Home
├── cv.html                 # Resume
├── blog/
│   ├── index.html          # Blog listing
│   └── posts/              # Blog posts
├── posts.json              # ← Add new posts here
└── assets/
    ├── css/style.css
    ├── img/
    └── js/
        ├── navbar.js       # Shared navbar
        ├── footer.js       # Shared footer
        ├── i18n.js         # Translations
        ├── main.js         # Theme, animations
        ├── posts.js        # Dynamic post renderer
        └── comments.js     # Giscus comments
```
