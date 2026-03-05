(() => {
  'use strict';

  const translations = {
    // ===== Navbar =====
    'nav.home': { zh: '首页', en: 'Home' },
    'nav.cv': { zh: '简历', en: 'Resume' },
    'nav.blog': { zh: '技术分享', en: 'Blog' },

    // ===== Index - Hero =====
    'hero.greeting': { zh: '你好，我是 Haonan 👋', en: 'Hi, I\'m Haonan 👋' },
    'hero.subtitle': { zh: 'Backend Engineer (Python & Go) | Web3 & LLM', en: 'Backend Engineer (Python & Go) | Web3 & LLM' },
    'hero.bio': {
      zh: '8 年后端开发经验，专注高并发分布式系统与微服务架构。VibeTrading 联合创始人，构建 LLM 驱动的开源交易框架。曾就职于 Grab、IBM、美团等公司。',
      en: '8 years of backend experience building high-traffic distributed systems and production microservices. Co-founded VibeTrading, an open-source LLM-powered trading framework. Previously at Grab, IBM, and Meituan.'
    },

    // ===== Index - Skills =====
    'skills.title': { zh: '技术栈', en: 'Tech Stack' },
    'skills.desc': { zh: '我日常使用和擅长的技术领域', en: 'Technologies I work with daily' },
    'skills.backend': { zh: '后端开发', en: 'Backend' },
    'skills.backend.desc': { zh: 'Go, Python, gRPC, Microservices', en: 'Go, Python, gRPC, Microservices' },
    'skills.cloud': { zh: '云 & 基础设施', en: 'Cloud & Infra' },
    'skills.cloud.desc': { zh: 'AWS, GCP, Docker, K8s, CI/CD', en: 'AWS, GCP, Docker, K8s, CI/CD' },
    'skills.data': { zh: '数据 & 消息', en: 'Data & Messaging' },
    'skills.data.desc': { zh: 'MySQL, Redis, DynamoDB, ElasticSearch, Kafka', en: 'MySQL, Redis, DynamoDB, ElasticSearch, Kafka' },
    'skills.ai': { zh: 'AI / LLM', en: 'AI / LLM' },
    'skills.ai.desc': { zh: 'LLM 辅助开发, RAG, VibeTrading', en: 'LLM-assisted Dev, RAG, VibeTrading' },

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
    'cv.subtitle': { zh: 'Backend Engineer (Python & Go) | Web3 & LLM', en: 'Backend Engineer (Python & Go) | Web3 & LLM' },
    'cv.download': { zh: '下载 PDF', en: 'Download PDF' },
    'cv.contact': { zh: '联系我', en: 'Contact Me' },

    'cv.summary': { zh: '个人概述', en: 'Summary' },
    'cv.summary.text': {
      zh: '8 年后端开发经验，擅长构建高并发分布式系统与生产级微服务。VibeTrading 联合创始人：一个开源的 LLM 驱动交易框架，支持策略生成、回测、分析和迭代进化。精通 Python & Go，善于利用 LLM 辅助开发快速迭代并保持生产质量。',
      en: 'Backend engineer with 8 years of experience building high-traffic distributed systems and production microservices. Co-founded VibeTrading: an open-source LLM-powered trading framework for strategy generation, backtesting, analysis, and iterative evolution. Strong in Python & Go, with experience using LLM-assisted development to iterate fast while maintaining production quality.'
    },

    'cv.experience': { zh: '工作经历', en: 'Experience' },
    'cv.exp1.time': { zh: '2025.03 - 至今（2025.12 起全职）', en: '2025.03 - Present (FT since 2025.12)' },
    'cv.exp1.role': { zh: '联合创始人', en: 'Co-Founder' },
    'cv.exp1.d1': { zh: '构建开源 LLM 驱动交易框架，实现策略生成 → 回测 → LLM 分析 → 迭代进化的统一闭环', en: 'Built an open-source LLM-powered trading framework enabling a unified loop: strategy generation → backtesting → LLM analysis → iterative evolution' },
    'cv.exp1.d2': { zh: '设计并实现模块化流水线组件（策略层、回测引擎、分析层），注重可复现性与快速迭代', en: 'Designed and implemented modular pipeline components (strategy layer, backtest engine, analysis layer), focusing on reproducibility and fast iteration' },
    'cv.exp1.d3': { zh: '在 Aster "Human vs AI" 交易大赛中取得 AI 组第 3 名的最高名次', en: 'Reached a peak rank of #3 in the Aster "Human vs AI" Trading Competition (AI Team)' },

    'cv.exp2.time': { zh: '2024.12 - 2025.12', en: '2024.12 - 2025.12' },
    'cv.exp2.role': { zh: '高级后端工程师', en: 'Senior Backend Engineer' },
    'cv.exp2.org': { zh: '牡丹（BEHC）', en: 'Mudan (BEHC)' },
    'cv.exp2.d1': { zh: '主导政企客户 IT 转型项目的后端交付，推动需求对齐与端到端执行', en: 'Led backend delivery for IT transformation initiatives across government and enterprise clients, driving requirements alignment and end-to-end execution' },
    'cv.exp2.d2': { zh: '设计并构建基于 RAG 的 AI 问答助手（文档摄取、索引、检索与回答生成），提升内部知识访问效率', en: 'Designed and built an AI Q&A assistant with a RAG-based document system (document ingestion, indexing, retrieval, and answer generation)' },
    'cv.exp2.d3': { zh: '牡丹商城核心服务现代化改造，包括 API 重构与集成，提升可维护性与交付速度', en: 'Modernized core services for Mudan Mall including API refactoring and integration work, improving maintainability and delivery velocity' },

    'cv.exp3.time': { zh: '2021.08 - 2024.09', en: '2021.08 - 2024.09' },
    'cv.exp3.role': { zh: '高级后端工程师', en: 'Senior Backend Engineer' },
    'cv.exp3.d1': { zh: '主导 Grab Express 和 GrabFood 的 Go 微服务端到端设计与交付，使用 gRPC 进行服务间通信、Kafka 进行事件流处理；支撑日均 50 万+ 订单量，SLA 达 99.99%', en: 'Led end-to-end design and delivery of Go microservices for Grab Express and GrabFood, using gRPC for inter-service RPC and Kafka for event streaming; supported 500K+ daily orders with 99.99% SLA' },
    'cv.exp3.d2': { zh: '关键路径性能与成本优化：通过 payload 压缩、gRPC 连接池/keepalive 调优、Redis Cluster 缓存，P99 延迟降低 40%，峰值 QPS 达 8K；通过动态资源调优年省 $85K', en: 'Improved P99 latency by 40% via payload compression, gRPC connection pooling/keepalive tuning, Redis Cluster caching; reached 8K QPS peak and saved $85K/year through dynamic resource tuning' },

    'cv.exp4.time': { zh: '2019.01 - 2021.07', en: '2019.01 - 2021.07' },
    'cv.exp4.role': { zh: '后端工程师', en: 'Backend Engineer' },
    'cv.exp4.d1': { zh: '设计并实现 IBM Cloud Monitoring 可扩展阈值管理系统（Java/Go），通过动态阈值减少 25% 误报；部署于 Kubernetes，服务可用性达 99.98%', en: 'Designed and implemented a scalable threshold management system for IBM Cloud Monitoring using Java/Go, reducing false alerts by 25%; deployed on Kubernetes with 99.98% availability' },
    'cv.exp4.d2': { zh: '使用 Docker 和 Kubernetes 容器化 15+ 遗留服务，通过自动扩缩策略优化资源分配，年省服务器成本 $120K，资源利用率提升 35%', en: 'Containerized 15+ legacy services using Docker and Kubernetes, optimizing resource allocation via auto-scaling; cut server costs by $120K/year and improved utilization by 35%' },
    'cv.exp4.d3': { zh: '主导世界 500 强客户（中国银行、沃尔玛等）技术问题排查，关键事件 MTTR <15 分钟', en: 'Led technical troubleshooting for Fortune 500 clients (Bank of China, Walmart), resolving critical incidents with <15-min MTTR' },

    'cv.exp5.time': { zh: '2017.07 - 2019.01', en: '2017.07 - 2019.01' },
    'cv.exp5.role': { zh: '后端工程师', en: 'Backend Engineer' },
    'cv.exp5.org': { zh: '美团点评', en: 'Meituan-Dianping' },
    'cv.exp5.d1': { zh: '开发外卖商家排序推荐服务，支撑日均 2000 万+ 订单量，通过 Redis 和多线程处理将 API 延迟降低 40%', en: 'Developed the Waimai merchant ranking and recommendation service handling 20M+ daily orders, reducing API latency 40% with Redis and multi-threaded processing' },
    'cv.exp5.d2': { zh: '构建 Scala/Spark 训练流水线，特征处理效率提升 67%，支持 40+ 特征', en: 'Built Scala/Spark-based training pipeline, accelerating feature processing by 67% and supporting 40+ features' },

    'cv.education': { zh: '教育经历', en: 'Education' },
    'cv.edu1.time': { zh: '2016.02 - 2017.01', en: '2016.02 - 2017.01' },
    'cv.edu1.degree': { zh: '信息技术硕士 (Master of IT)', en: 'Master of Information Technology' },
    'cv.edu1.org': { zh: '新南威尔士大学 (UNSW)', en: 'The University of New South Wales (UNSW)' },
    'cv.edu2.time': { zh: '2010.08 - 2015.06', en: '2010.08 - 2015.06' },
    'cv.edu2.degree': { zh: '软件工程学士 (B.Eng.)', en: 'B.Eng., Software Engineering' },
    'cv.edu2.org': { zh: '北京理工大学', en: 'Beijing Institute of Technology' },
    'cv.edu2.exchange': { zh: '交换项目：澳大利亚国立大学 (ANU)，2013.02 - 2014.12', en: 'Exchange program: The Australian National University (ANU), 2013.02 - 2014.12' },

    'cv.skills': { zh: '技术技能', en: 'Technical Skills' },
    'cv.skills.lang': { zh: '编程语言', en: 'Programming Languages' },
    'cv.skills.cloud': { zh: '云 & 基础设施', en: 'Cloud & Infrastructure' },
    'cv.skills.data': { zh: '数据 & 消息', en: 'Data & Messaging' },
    'cv.skills.ai': { zh: 'AI / LLM', en: 'AI / LLM' },
    'cv.cert': { zh: '认证', en: 'Certification' },

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
