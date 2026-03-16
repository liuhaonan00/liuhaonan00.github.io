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

## Structure

```
├── index.html              # Home
├── cv.html                 # Resume
├── blog/
│   ├── index.html          # Blog listing
│   └── posts/              # Blog posts
└── assets/
    ├── css/style.css
    ├── img/
    └── js/
        ├── navbar.js       # Shared navbar
        ├── footer.js       # Shared footer
        ├── i18n.js         # Translations
        ├── main.js         # Theme, animations
        └── comments.js     # Giscus comments
```
