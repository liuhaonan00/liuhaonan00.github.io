(() => {
  'use strict';

  const translations = {
  "nav.home": {
    "zh": "首页",
    "en": "Home"
  },
  "nav.cv": {
    "zh": "简历",
    "en": "Resume"
  },
  "nav.blog": {
    "zh": "技术分享",
    "en": "Blog"
  },
  "skills.title": {
    "zh": "技术栈",
    "en": "Tech Stack"
  },
  "skills.desc": {
    "zh": "我日常使用和擅长的技术领域",
    "en": "Technologies I work with daily"
  },
  "skills.backend": {
    "zh": "后端开发",
    "en": "Backend"
  },
  "skills.backend.desc": {
    "zh": "Go, Python, gRPC, Microservices",
    "en": "Go, Python, gRPC, Microservices"
  },
  "skills.cloud": {
    "zh": "云 & 基础设施",
    "en": "Cloud & Infra"
  },
  "skills.cloud.desc": {
    "zh": "AWS, GCP, Docker, K8s, CI/CD",
    "en": "AWS, GCP, Docker, K8s, CI/CD"
  },
  "skills.data": {
    "zh": "数据 & 消息",
    "en": "Data & Messaging"
  },
  "skills.data.desc": {
    "zh": "MySQL, Redis, DynamoDB, Elasticsearch, Kafka, Amazon SQS",
    "en": "MySQL, Redis, DynamoDB, Elasticsearch, Kafka, Amazon SQS"
  },
  "skills.ai": {
    "zh": "AI 辅助工程",
    "en": "AI-Assisted Engineering"
  },
  "skills.ai.desc": {
    "zh": "Coding agents、LLM 辅助开发",
    "en": "Coding agents, LLM-assisted development"
  },
  "posts.title": {
    "zh": "最新文章",
    "en": "Latest Posts"
  },
  "posts.desc": {
    "zh": "技术探索与实践经验分享",
    "en": "Exploring technology and sharing practical experience"
  },
  "posts.viewall": {
    "zh": "查看全部文章 →",
    "en": "View All Posts →"
  },
  "blog.title": {
    "zh": "技术分享",
    "en": "Blog"
  },
  "blog.desc": {
    "zh": "记录学习与实践中的思考，涵盖系统设计、前端、后端、DevOps 等领域",
    "en": "Thoughts from learning and practice, covering system design, frontend, backend, DevOps and more"
  },
  "cv.experience": {
    "zh": "工作经历",
    "en": "Experience"
  },
  "cv.exp1.time": {
    "zh": "2025.01 - 2026.01",
    "en": "Jan 2025 – Jan 2026"
  },
  "cv.exp1.role": {
    "zh": "软件工程师",
    "en": "Software Engineer"
  },
  "cv.exp1.d1": {
    "zh": "开发加密货币基差套利和资金费率套利机器人，集成 LLM 能力辅助交易分析与策略开发。",
    "en": "Developed cryptocurrency arbitrage bots for basis and funding-rate strategies, integrating LLM capabilities to support trading analysis and strategy development."
  },
  "cv.exp1.d2": {
    "zh": "开发交易框架的策略生成、回测与分析组件，支持 LLM 辅助工作流、沙盒测试和实盘交易；设计模块化接口，支持可复现评估与迭代优化。",
    "en": "Developed strategy generation, backtesting, and analysis components for a trading framework supporting LLM-assisted workflows, sandbox testing, and live trading. Designed modular interfaces to support reproducible evaluation and iterative refinement."
  },
  "cv.exp1.d3": {
    "zh": "在 Aster \"Human vs AI\" 交易大赛中取得 AI 组第 3 名的最高名次",
    "en": "Reached a peak rank of #3 in the Aster \"Human vs AI\" Trading Competition (AI Team)"
  },
  "cv.exp3.time": {
    "zh": "2021.08 - 2024.09",
    "en": "2021.08 - 2024.09"
  },
  "cv.exp3.role": {
    "zh": "高级后端工程师",
    "en": "Senior Backend Engineer"
  },
  "cv.exp3.d1": {
    "zh": "主导 Grab Express 和 GrabFood 的 Go 微服务端到端设计与交付，使用 gRPC 进行服务间通信、Kafka 进行事件流处理；支撑日均 50 万+ 订单量，SLA 达 99.99%",
    "en": "Led end-to-end design and delivery of Go microservices for Grab Express and GrabFood, using gRPC for inter-service RPC and Kafka for event streaming; supported 500K+ daily orders with 99.99% SLA"
  },
  "cv.exp3.d2": {
    "zh": "通过 payload 压缩、gRPC 连接池与 keepalive 调优、Redis Cluster 缓存，将 P99 延迟降低 40%，支撑 8K QPS 峰值吞吐。",
    "en": "Reduced P99 latency by 40% through payload compression, gRPC connection pooling and keepalive tuning, and Redis Cluster caching; supported peak throughput of 8K QPS."
  },
  "cv.exp4.time": {
    "zh": "2019.01 - 2021.07",
    "en": "2019.01 - 2021.07"
  },
  "cv.exp4.role": {
    "zh": "后端工程师",
    "en": "Backend Engineer"
  },
  "cv.exp4.d1": {
    "zh": "设计并实现 IBM Cloud Monitoring 可扩展阈值管理系统（Java/Go），通过动态阈值减少 25% 误报；部署于 Kubernetes，服务可用性达 99.98%",
    "en": "Designed and implemented a scalable threshold management system for IBM Cloud Monitoring using Java/Go, reducing false alerts by 25%; deployed on Kubernetes with 99.98% availability"
  },
  "cv.exp4.d2": {
    "zh": "使用 Docker 和 Kubernetes 容器化 15+ 遗留服务，通过自动扩缩策略优化资源分配，年省服务器成本 $120K，资源利用率提升 35%",
    "en": "Containerized 15+ legacy services using Docker and Kubernetes, optimizing resource allocation via auto-scaling; cut server costs by $120K/year and improved utilization by 35%"
  },
  "cv.exp4.d3": {
    "zh": "使用 Go 重构实时指标评估引擎，为云监控实现多租户架构与分布式规则处理。",
    "en": "Redesigned a real-time metrics evaluation engine in Go, implementing a multi-tenant architecture and distributed rule processing for cloud monitoring."
  },
  "cv.exp5.time": {
    "zh": "2017.07 - 2019.01",
    "en": "2017.07 - 2019.01"
  },
  "cv.exp5.role": {
    "zh": "后端工程师",
    "en": "Backend Engineer"
  },
  "cv.exp5.org": {
    "zh": "美团点评",
    "en": "Meituan-Dianping"
  },
  "cv.exp5.d1": {
    "zh": "开发外卖商家排序推荐服务，支撑日均 2000 万+ 订单量，通过 Redis 和多线程处理将 API 延迟降低 40%",
    "en": "Developed the Waimai merchant ranking and recommendation service handling 20M+ daily orders, reducing API latency 40% with Redis and multi-threaded processing"
  },
  "cv.exp5.d2": {
    "zh": "构建 Scala/Spark 训练流水线，特征处理效率提升 67%，支持 40+ 特征",
    "en": "Built Scala/Spark-based training pipeline, accelerating feature processing by 67% and supporting 40+ features"
  },
  "cv.education": {
    "zh": "教育经历",
    "en": "Education"
  },
  "cv.edu1.time": {
    "zh": "2016.02 - 2017.01",
    "en": "2016.02 - 2017.01"
  },
  "cv.edu1.degree": {
    "zh": "信息技术硕士 (Master of IT)",
    "en": "Master of Information Technology"
  },
  "cv.edu1.org": {
    "zh": "新南威尔士大学 (UNSW)",
    "en": "The University of New South Wales (UNSW)"
  },
  "cv.edu2.time": {
    "zh": "2010.08 - 2015.06",
    "en": "2010.08 - 2015.06"
  },
  "cv.edu2.degree": {
    "zh": "软件工程学士 (B.Eng.)",
    "en": "B.Eng., Software Engineering"
  },
  "cv.edu2.org": {
    "zh": "北京理工大学",
    "en": "Beijing Institute of Technology"
  },
  "cv.edu2.exchange": {
    "zh": "交换项目：澳大利亚国立大学 (ANU)，2013.02 - 2014.12",
    "en": "Exchange program: The Australian National University (ANU), 2013.02 - 2014.12"
  },
  "cv.skills": {
    "zh": "技术技能",
    "en": "Technical Skills"
  },
  "cv.skills.lang": {
    "zh": "编程语言",
    "en": "Programming Languages"
  },
  "cv.skills.cloud": {
    "zh": "云 & 基础设施",
    "en": "Cloud & Infrastructure"
  },
  "cv.skills.data": {
    "zh": "数据库 & 搜索",
    "en": "Databases & Search"
  },
  "cv.skills.ai": {
    "zh": "AI 辅助工程",
    "en": "AI-Assisted Engineering"
  },
  "cv.cert": {
    "zh": "认证",
    "en": "Certification"
  },
  "post.back": {
    "zh": "← 返回文章列表",
    "en": "← Back to Posts"
  },
  "footer.text": {
    "zh": "© 2026 Haonan Liu. Built with ❤️ and hosted on <a href=\"https://pages.github.com\" target=\"_blank\">GitHub Pages</a>.",
    "en": "© 2026 Haonan Liu. Built with ❤️ and hosted on <a href=\"https://pages.github.com\" target=\"_blank\">GitHub Pages</a>."
  },
  "cv.aisa.time": {
    "zh": "2026.01 - 至今",
    "en": "Jan 2026 – Present"
  },
  "cv.aisa.role": {
    "zh": "创始工程师",
    "en": "Founding Engineer"
  },
  "cv.aisa.d1": {
    "zh": "主导 AISA 平台的重新设计与开发，涵盖后端服务、数据库架构、前端应用及内部管理工具。",
    "en": "Led the redesign and development of AISA’s platform, spanning backend services, database architecture, frontend applications, and internal administration tools."
  },
  "cv.aisa.d2": {
    "zh": "构建统一 API 平台，通过标准化接口为外部开发者和内部 AI Agent 集成多个 LLM 供应商及第三方服务；实现 API 转发、上游账号池、请求路由、负载均衡及供应商监控。",
    "en": "Built a unified API platform integrating multiple LLM providers and third-party services through standardized interfaces for external developers and internal AI agents. Implemented API relay, upstream account pooling, request routing, load balancing, and provider monitoring."
  },
  "cv.aisa.d3": {
    "zh": "构建 AI 服务用量计量、余额管理与成本控制，支持微支付及按量计费；集成 x402、MPP 实现 Agent 自动支付，并接入 Stripe 和 FOMO Pay 进行账户充值。",
    "en": "Built usage metering, balance management, and cost controls for AI services, supporting micropayments and usage-based billing. Integrated x402 and MPP for automated agent payments, and Stripe and FOMO Pay for account top-ups."
  },
  "cv.aisa.d4": {
    "zh": "负责从架构设计、实现到部署、生产监控与故障响应的后端交付，与产品及业务团队协作。",
    "en": "Owned backend delivery from architecture and implementation through deployment, production monitoring, and incident response, collaborating with product and business teams."
  },
  "cv.exp1.repo": {
    "zh": "GitHub 开源仓库",
    "en": "GitHub Repository"
  },
  "cv.exp1.d4": {
    "zh": "参与随后开源的 LLM 交易框架，支持策略生成 → 回测 → 分析 → 迭代进化的完整流程。",
    "en": "Contributed to the subsequent open-source release of an LLM-powered trading framework supporting an iterative strategy lifecycle: Generate → Backtest → Analyze → Evolve."
  },
  "cv.exp3.d3": {
    "zh": "通过动态资源调优每年节省 $85K 云计算成本；参与 on-call 值班和生产事故响应。",
    "en": "Saved $85K annually in cloud compute costs through dynamic resource tuning. Participated in on-call rotations and production incident response."
  },
  "cv.exp3.d4": {
    "zh": "主导 GrabExpress 预约配送开发，包括时段管理和配送调度，平衡高峰时段供需。",
    "en": "Led development of GrabExpress scheduled delivery, including time-slot management and delivery scheduling to balance peak-hour demand and supply."
  },
  "cv.exp3.d5": {
    "zh": "开发覆盖 Express、Food、Mart 的跨平台配送能力，将遗留调度组件迁移至事件驱动微服务，构建基于 Kafka 的实时运力规划流水线。",
    "en": "Developed cross-platform delivery capabilities spanning Express, Food, and Mart. Migrated legacy dispatch components to event-driven microservices and built a Kafka-based real-time capacity planning pipeline."
  },
  "cv.exp4.d4": {
    "zh": "主导企业客户技术问题排查，处理生产事故，并制定 SLA 合规报告。",
    "en": "Led technical troubleshooting for enterprise clients, resolved production incidents, and developed SLA compliance reports."
  },
  "cv.skills.backend": {
    "zh": "后端 & 消息",
    "en": "Backend & Messaging"
  },
  "profile.name": {
    "zh": "Haonan Liu",
    "en": "Haonan Liu"
  },
  "profile.role": {
    "zh": "Software Engineer | AI Engineer",
    "en": "Software Engineer | AI Engineer"
  },
  "profile.summary": {
    "zh": "近 10 年软件开发经验，专注 Go、Python、分布式系统与云基础设施。目前在 AISA 担任创始工程师，拥有 LLM 服务集成、Agent 支付和加密货币交易系统的实践经验。曾就职于 Grab、IBM 和美团，能够负责从架构设计、实现到部署及生产运维的完整交付。",
    "en": "Software Engineer with nearly 10 years of experience in Go, Python, distributed systems, and cloud infrastructure. Currently a Founding Engineer at AISA, with hands-on experience in LLM service integration, agent payments, and cryptocurrency trading systems. Previously at Grab, IBM, and Meituan, with end-to-end ownership from architecture and implementation to deployment and production operations."
  },
  "profile.contact": {
    "zh": "联系我",
    "en": "Contact"
  }
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
