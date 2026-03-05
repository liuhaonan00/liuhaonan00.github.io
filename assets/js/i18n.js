(() => {
  'use strict';

  const translations = {
    // ===== Navbar =====
    'nav.home': { zh: '首页', en: 'Home' },
    'nav.cv': { zh: '简历', en: 'Resume' },
    'nav.blog': { zh: '技术分享', en: 'Blog' },

    // ===== Index - Hero =====
    'hero.greeting': { zh: '你好，我是 Haonan 👋', en: 'Hi, I\'m Haonan 👋' },
    'hero.subtitle': { zh: 'Software Engineer / 技术爱好者', en: 'Software Engineer / Tech Enthusiast' },
    'hero.bio': {
      zh: '热爱技术，专注于全栈开发与系统设计。喜欢探索新技术，并通过写作分享学习心得与项目经验。欢迎来到我的个人空间！',
      en: 'Passionate about technology, focused on full-stack development and system design. I love exploring new technologies and sharing my learnings through writing. Welcome to my personal space!'
    },

    // ===== Index - Skills =====
    'skills.title': { zh: '技术栈', en: 'Tech Stack' },
    'skills.desc': { zh: '我日常使用和擅长的技术领域', en: 'Technologies I work with daily' },
    'skills.frontend': { zh: '前端开发', en: 'Frontend' },
    'skills.frontend.desc': { zh: 'React, Vue, TypeScript, HTML/CSS, Tailwind', en: 'React, Vue, TypeScript, HTML/CSS, Tailwind' },
    'skills.backend': { zh: '后端开发', en: 'Backend' },
    'skills.backend.desc': { zh: 'Python, Java, Node.js, Go, RESTful API', en: 'Python, Java, Node.js, Go, RESTful API' },
    'skills.data': { zh: '数据与基础设施', en: 'Data & Infrastructure' },
    'skills.data.desc': { zh: 'MySQL, PostgreSQL, Redis, Docker, K8s', en: 'MySQL, PostgreSQL, Redis, Docker, K8s' },
    'skills.ai': { zh: 'AI & 机器学习', en: 'AI & Machine Learning' },
    'skills.ai.desc': { zh: 'PyTorch, TensorFlow, NLP, LLM 应用', en: 'PyTorch, TensorFlow, NLP, LLM Applications' },

    // ===== Index - Recent Posts =====
    'posts.title': { zh: '最新文章', en: 'Latest Posts' },
    'posts.desc': { zh: '技术探索与实践经验分享', en: 'Exploring technology and sharing practical experience' },
    'posts.viewall': { zh: '查看全部文章 →', en: 'View All Posts →' },

    // ===== Blog listing page (UI only) =====
    'blog.title': { zh: '技术分享', en: 'Blog' },
    'blog.desc': {
      zh: '记录学习与实践中的思考，涵盖系统设计、前端、后端、DevOps 等领域',
      en: 'Thoughts from learning and practice, covering system design, frontend, backend, DevOps and more'
    },

    // ===== CV page =====
    'cv.title': { zh: '个人简历', en: 'Resume' },
    'cv.subtitle': { zh: 'Education & Experience & Skills', en: 'Education & Experience & Skills' },
    'cv.download': { zh: '下载 PDF', en: 'Download PDF' },
    'cv.contact': { zh: '联系我', en: 'Contact Me' },
    'cv.education': { zh: '教育经历', en: 'Education' },
    'cv.edu.time': { zh: '2022.09 - 2026.06（预计）', en: '2022.09 - 2026.06 (Expected)' },
    'cv.edu.degree': { zh: '计算机科学与技术 · 本科', en: 'B.S. in Computer Science' },
    'cv.edu.org': { zh: 'XX 大学', en: 'XX University' },
    'cv.edu.courses': { zh: '主修课程：数据结构与算法、操作系统、计算机网络、数据库系统、机器学习', en: 'Core courses: Data Structures & Algorithms, OS, Computer Networks, Database Systems, Machine Learning' },
    'cv.edu.gpa': { zh: 'GPA：3.8 / 4.0', en: 'GPA: 3.8 / 4.0' },
    'cv.edu.award': { zh: '获得 XX 奖学金', en: 'Received XX Scholarship' },

    'cv.experience': { zh: '工作 / 实习经历', en: 'Work Experience' },
    'cv.exp1.time': { zh: '2025.06 - 2025.09', en: '2025.06 - 2025.09' },
    'cv.exp1.role': { zh: '软件开发实习生', en: 'Software Development Intern' },
    'cv.exp1.org': { zh: 'XX 科技公司', en: 'XX Tech Company' },
    'cv.exp1.d1': { zh: '参与核心业务后端系统的开发与维护，使用 Java / Spring Boot', en: 'Developed and maintained core backend systems with Java / Spring Boot' },
    'cv.exp1.d2': { zh: '设计并实现 RESTful API，支撑前端多个业务模块', en: 'Designed and implemented RESTful APIs supporting multiple frontend modules' },
    'cv.exp1.d3': { zh: '优化数据库查询性能，关键接口响应时间降低 40%', en: 'Optimized database query performance, reducing key API response time by 40%' },
    'cv.exp1.d4': { zh: '编写单元测试与集成测试，覆盖率达 85%', en: 'Wrote unit and integration tests, achieving 85% code coverage' },

    'cv.exp2.time': { zh: '2024.12 - 2025.03', en: '2024.12 - 2025.03' },
    'cv.exp2.role': { zh: '前端开发实习生', en: 'Frontend Development Intern' },
    'cv.exp2.org': { zh: 'XX 互联网公司', en: 'XX Internet Company' },
    'cv.exp2.d1': { zh: '使用 React + TypeScript 开发企业级管理后台', en: 'Built enterprise admin dashboard with React + TypeScript' },
    'cv.exp2.d2': { zh: '实现复杂表单、数据可视化等交互组件', en: 'Implemented complex forms, data visualization, and interactive components' },
    'cv.exp2.d3': { zh: '与设计和产品团队紧密协作，完成多个迭代交付', en: 'Collaborated closely with design and product teams across multiple sprints' },

    'cv.projects': { zh: '项目经历', en: 'Projects' },
    'cv.proj1.time': { zh: '2025.09 - 至今', en: '2025.09 - Present' },
    'cv.proj1.name': { zh: '个人技术博客', en: 'Personal Tech Blog' },
    'cv.proj1.org': { zh: '个人项目', en: 'Personal Project' },
    'cv.proj1.d1': { zh: '基于 GitHub Pages 搭建的静态博客，支持暗色模式和响应式设计', en: 'Static blog on GitHub Pages with dark mode and responsive design' },
    'cv.proj1.d2': { zh: '撰写系统设计、前端性能优化、容器化部署等技术文章', en: 'Writing articles on system design, frontend performance, and containerized deployments' },

    'cv.proj2.time': { zh: '2025.03 - 2025.06', en: '2025.03 - 2025.06' },
    'cv.proj2.name': { zh: '智能问答系统', en: 'Intelligent Q&A System' },
    'cv.proj2.org': { zh: '课程项目', en: 'Course Project' },
    'cv.proj2.d1': { zh: '基于 LLM 构建的智能问答系统，支持多轮对话与知识库检索', en: 'LLM-based Q&A system supporting multi-turn conversations and knowledge base retrieval' },
    'cv.proj2.d2': { zh: '使用 RAG（Retrieval-Augmented Generation）架构提升回答准确性', en: 'Used RAG (Retrieval-Augmented Generation) architecture to improve answer accuracy' },
    'cv.proj2.d3': { zh: '后端使用 Python FastAPI，前端使用 React', en: 'Backend: Python FastAPI, Frontend: React' },

    'cv.skills': { zh: '技术技能', en: 'Technical Skills' },
    'cv.skills.lang': { zh: '编程语言', en: 'Programming Languages' },
    'cv.skills.framework': { zh: '框架与工具', en: 'Frameworks & Tools' },
    'cv.skills.db': { zh: '数据库与中间件', en: 'Databases & Middleware' },

    // ===== Blog post pages (UI only) =====
    'post.back': { zh: '← 返回文章列表', en: '← Back to Posts' },

    // ===== Footer =====
    'footer.text': {
      zh: '© 2026 Haonan Liu. Built with ❤️ and hosted on <a href="https://pages.github.com" target="_blank">GitHub Pages</a>.',
      en: '© 2026 Haonan Liu. Built with ❤️ and hosted on <a href="https://pages.github.com" target="_blank">GitHub Pages</a>.'
    },
  };

  function detectLanguage() {
    const saved = localStorage.getItem('lang');
    if (saved) return saved;
    const browserLang = navigator.language || navigator.userLanguage || 'zh';
    return browserLang.startsWith('zh') ? 'zh' : 'en';
  }

  function applyTranslations(lang) {
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const t = translations[key];
      if (!t) return;
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = t[lang] || t['zh'];
      } else {
        el.textContent = t[lang] || t['zh'];
      }
    });

    const toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
      toggle.setAttribute('title', lang === 'zh' ? 'Switch to English' : '切换到中文');
      const label = toggle.querySelector('.lang-label');
      if (label) label.textContent = lang === 'zh' ? 'EN' : '中';
    }
  }

  function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    applyTranslations(lang);
  }

  function toggleLanguage() {
    const current = localStorage.getItem('lang') || detectLanguage();
    setLanguage(current === 'zh' ? 'en' : 'zh');
  }

  // Initialize on DOM ready
  const lang = detectLanguage();
  localStorage.setItem('lang', lang);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => applyTranslations(lang));
  } else {
    applyTranslations(lang);
  }

  // Expose toggle globally
  window.toggleLanguage = toggleLanguage;
  window.i18n = { setLanguage, applyTranslations, detectLanguage };
})();
