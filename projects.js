const PROJECTS = [
  {
    id: 'cosmo8',
    title: 'COSMO8 — In-Store AI Skin Curator Platform',
    period: '07/2026 – Present',
    customer: 'MTS Corporation VN',
    role: 'AI-Native Software Engineer (Core Backend)',
    teamSize: '4 (1 KR Manager, 1 PM/BA, 1 AI-Native BE, 1 Flutter/FE)',
    category: 'ai-retail',
    categoryLabel: 'AI & Retail Tech',
    flagship: true,
    summary:
      'Advisor-led in-store AI Skin Curator platform for K-beauty retail comprising 9 Go microservices and 4 client apps (Curator Tablet, Customer App, Admin Portal, 3D Landing). Powers sub-5s P95 6-axis skin diagnostics, grounded Top-5 in-stock SKU recommendations, bilingual (KO/VI) scripts, digital signage casting, and SmartPOS integration.',
    highlights: [
      'Architected and built a 9-microservice Go monorepo from scratch (gateway, auth, curation, catalog, customer, promotion, integration, admin, alert-relay) using PostgreSQL 16 (7 isolated DBs), Redis, and Apache Kafka (Azure Event Hubs).',
      'Engineered a 7-state AI Skin Curation & Hybrid RAG pipeline combining GPT-4o Vision (6-axis analysis), text-embedding-3-large (1536-d), and Azure AI Search with active-ingredient grounding, deterministic Top-5 SKU scoring, and KO/VI scripts.',
      'Implemented VN PDPD privacy-by-design compliance (Law 91/2025 & Decree 356/2025): anonymous sessions by default, zero facial-embedding storage, automated 24-month photo TTL purge, and consent-withdrawal hard deletion.',
      'Built the cosmo-integration Anti-Corruption Layer isolating 5 SmartPOS adapters via canonical DTOs, HMAC webhook inbox, transactional outbox, loyalty earn-poller watermarks, and QR voucher/promotion reconciliation.',
      'Delivered opaque Redis session auth, AES-256-GCM encrypted TOTP 2FA with step-up enforcement, 5-role Portal RBAC, Twilio/Zalo OTP onboarding, AKS + Helm + ArgoCD GitOps CI/CD, and a multi-agent AI harness (.claude/.agents) with 80+ ADRs and RED-GREEN TDD workflows.'
    ],
    techGroups: {
      Backend: ['Golang', 'Gin', 'GORM', 'Goose', 'Microservices', 'Anti-Corruption Layer'],
      'AI & RAG': ['Azure OpenAI', 'GPT-4o Vision', 'text-embedding-3-large', 'Azure AI Search', 'RAG', 'Multi-Agent Harness'],
      'Data & Events': ['PostgreSQL 16', 'Redis', 'Apache Kafka', 'Azure Event Hubs'],
      'Cloud & Web': ['Microsoft Azure', 'Kubernetes', 'ArgoCD', 'Helm', 'Docker', 'GitHub Actions', 'Flutter Web', 'Three.js']
    },
    quickTags: ['Golang', 'LLM / RAG', 'PostgreSQL', 'Kafka', 'Kubernetes', 'Azure']
  },
  {
    id: 'rmn',
    title: 'RMN — Retail Media Network Platform',
    period: '01/2026 – Present',
    customer: 'MTS Corporation VN',
    role: 'AI-Native Software Engineer (Core Backend)',
    teamSize: '4 (1 KR Manager, 1 PM/BA, 1 AI-Native BE, 1 Flutter/Mobile)',
    category: 'ai-retail',
    categoryLabel: 'AI & Retail Tech',
    flagship: true,
    summary:
      'End-to-end Retail Media Network managing digital signage advertising across retail chains. Spans 17 Go microservices, a Node.js Revideo/FFmpeg rendering worker, a 4-portal Flutter Web suite (Admin, Supplier, Advertiser, Landing), and a 24/7 Android TV player app.',
    highlights: [
      'Developed core Go 1.26 microservices across a 17-service workspace (gateway, auth with PASETO/JWT, campaign, cms, device, device-control, workflow DAG engine, supplier, business, user, role, audit-log) using Gin, GORM, Google Wire, CockroachDB/PostgreSQL, Redis, and Kafka.',
      'Built and hardened the AI Studio subsystem (studio-ai-service, ai-provider-gateway, storyboard-worker, render-worker-revideo) with multi-provider LLM & image failover across Gemini, OpenAI, Groq, MiniMax-M3, and Cloudflare Workers AI (FLUX), rendering up to 90s ad videos via Revideo + FFmpeg on Azure Blob/CDN.',
      'Engineered real-time TV signage orchestration (device-control-service) with WebSocket/HTTP device pairing locks, multi-zone split-screen playlist resolution, parallel video playback, and Kafka-backed proof-of-play impression telemetry.',
      'Built multi-tier GitHub Actions CI/CD (gateway route parity smoke tests, PostgreSQL 16 integration & migration lanes), Helm pre-upgrade MIGRATE_ONLY jobs across 13 DB services, Grafana/Loki observability, and ArgoCD GitOps deployments.',
      'Evolved the multi-agent AI engineering harness (.claude / .agents) with knowledge-graph indexing (graphify), cross-model automated code review gates, quota failover, and adaptive effort routing.'
    ],
    techGroups: {
      Backend: ['Golang 1.26', 'Gin', 'GORM', 'Google Wire', 'Goose', 'Node.js 20', 'Revideo', 'FFmpeg'],
      AI: ['Gemini', 'OpenAI', 'Groq', 'MiniMax', 'Cloudflare FLUX', 'Multi-Agent Harness'],
      'Data & Events': ['CockroachDB', 'PostgreSQL 16', 'Redis', 'Apache Kafka', 'Azure Event Hubs'],
      'Cloud & TV': ['Microsoft Azure', 'AWS', 'Kubernetes', 'ArgoCD', 'Helm', 'Docker', 'Grafana', 'Loki', 'Flutter Web', 'Android TV']
    },
    quickTags: ['Golang', 'Node.js / NestJS', 'LLM / RAG', 'PostgreSQL', 'Kafka', 'Kubernetes', 'Azure']
  },
  {
    id: 'giaphuoc-express',
    title: 'GiaPhuoc-Express — Freight & Debt Reconciliation',
    period: '06/2025 – 03/2026',
    customer: 'Gia Phuoc Express',
    role: 'Backend Developer (Freelance)',
    teamSize: '7 (1 PM, 1 Tech Lead, 3 Frontend, 2 Backend)',
    category: 'logistics',
    categoryLabel: 'Logistics & Supply Chain',
    flagship: true,
    summary:
      'Nationwide inter-station express freight, parcel tracking, and cash-remittance platform. Digitizes end-to-end station operations including inbound/return handling, COD collection, automated daily inter-route debt reconciliation, accounting exports, and Zalo ZNS/SMS customer alerts.',
    highlights: [
      'Architected the automated daily inter-station debt reconciliation engine and PM2 scheduled cronjobs—mapping fromRoute-to-toRoute pairs, enforcing Vietnam-to-UTC (17:00 UTC) timezone boundaries, idempotent CronLog execution locks, and atomic MongoDB bulkWrite transactions.',
      'Built Debt Management (inter-route payment/receipt vouchers), MongoDB aggregation-based DebtReport pipelines, itemized debt breakdown APIs, and station-level accounting export endpoints.',
      'Engineered inbound/return parcel workflows (ReturnDeliveriesService), inter-branch cash transfers (NORMAL) and COD/collect-on-behalf (COLLECT) remittances, inventory vs. home-delivery tracking, and soft-delete recovery flows.',
      'Implemented Multer proof-of-delivery and recipient ID image upload/rotation pipelines (versioned static URLs), customer bank/QR configuration, and Zalo ZNS/SMS notifications via YourSales API.',
      'Enforced strict TypeScript Controller-Service architecture (zero-any rules), Zod request validation, 4-tier JWT RBAC, full Swagger/OpenAPI docs, Jest + Supertest + mongodb-memory-server integration tests, and GitHub Actions CI/CD to Linux VPS with PM2.'
    ],
    techGroups: {
      Backend: ['Node.js 20', 'TypeScript', 'Express.js', 'Zod', 'JWT & RBAC', 'Multer', 'QRCode', 'Winston'],
      'Data & Testing': ['MongoDB', 'Mongoose', 'Jest', 'Supertest', 'mongodb-memory-server', 'Swagger / OpenAPI'],
      'Infra & Integrations': ['PM2', 'GitHub Actions', 'Linux VPS', 'Zalo ZNS & SMS', 'ReactJS']
    },
    quickTags: ['Node.js / NestJS', 'TypeScript', 'MongoDB', 'GitHub Actions']
  },
  {
    id: 'pulseim',
    title: 'Pulseim & Pulse-SDMS — Enterprise Chat & Deployment',
    period: '04/2025 – 08/2025',
    customer: 'Link Technology Crossborder',
    role: 'Backend Developer',
    teamSize: '15 (2 PMs, 1 Tech Lead, 3 Testers, 3 FE, 4 BE, 2 Flutter)',
    category: 'enterprise-iot',
    categoryLabel: 'Enterprise & IoT',
    flagship: false,
    summary:
      'Enterprise B2B messaging ecosystem spanning Super-Admin, Merchant Admin, Mobile App (Flutter), Web Chat (React), and PC Desktop (Electron Vue), paired with Pulse-SDMS—an internal deployment and release-version orchestration server built from scratch in Golang.',
    highlights: [
      'Designed and built Pulse-SDMS from scratch using Golang (Gin) and MySQL, covering database design and server-side backend orchestration for release versioning and server deployments across company projects.',
      'Maintained and enhanced distributed microservices across the Pulseim messaging suite (gateway-server, im-server, chat-server), resolving merchant account management errors, friend/group-chat member retrieval issues, and profile workflows.',
      'Implemented updated login authentication logic in gateway-server to satisfy evolving cross-client business requirements.',
      'Diagnosed and resolved staging/dev deployment issues across containerized AWS (EC2, S3) and Docker environments within a 15-member cross-border engineering team.'
    ],
    techGroups: {
      Backend: ['Golang', 'Gin', 'Microservices'],
      Data: ['MySQL', 'MongoDB'],
      'Cloud & Clients': ['AWS (EC2, S3)', 'Docker', 'React', 'Flutter', 'Electron Vue']
    },
    quickTags: ['Golang', 'MySQL', 'MongoDB', 'AWS', 'Docker']
  },
  {
    id: 'busk',
    title: 'Busk — E-Commerce & Warehouse Logistics Platform',
    period: '08/2024 – 12/2024',
    customer: 'Busk Client (Korea)',
    role: 'Backend Developer',
    teamSize: '8 (1 KR PM, 1 Tech Lead, 1 Tester, 3 FE, 2 BE)',
    category: 'logistics',
    categoryLabel: 'Logistics & Supply Chain',
    flagship: true,
    summary:
      '4-application logistics management platform (Admin, Warehouse, Seller, User) for a Korean logistics operator, enabling warehouse-seller import negotiations, stock tracking, and real-time Shopee marketplace order & inventory synchronization.',
    highlights: [
      'Refactored backend modules and relational data flows using NestJS and MySQL (TypeORM) to match evolving logistics specifications.',
      'Optimized high-traffic database retrieval queries and indexing strategies, reducing overall API response latency by 20%.',
      'Integrated Shopee Open APIs end-to-end—processing real-time order placement and cancellation webhooks while maintaining multi-warehouse inventory synchronization.'
    ],
    techGroups: {
      Backend: ['Node.js', 'NestJS', 'TypeScript', 'Shopee Open API'],
      Data: ['MySQL', 'TypeORM'],
      'Cloud & Web': ['AWS (EC2, S3)', 'Docker', 'GitLab CI/CD', 'React']
    },
    quickTags: ['Node.js / NestJS', 'TypeScript', 'MySQL', 'AWS', 'Docker']
  },
  {
    id: 'search-class',
    title: 'Search Class — K-12 EdTech Platform',
    period: '11/2023 – 06/2024',
    customer: '91do (91do.co.kr)',
    role: 'Backend Developer',
    teamSize: '9 (1 KR PM, 1 Tech Lead, 1 Tester, 4 FE, 2 BE)',
    category: 'media-edtech',
    categoryLabel: 'Media, EdTech & Marketplace',
    flagship: false,
    summary:
      'Comprehensive K-12 education management platform spanning 3 React web applications (Landing Page, Student Web App, and Admin Portal) for course distribution, student learning workflows, and curriculum administration.',
    highlights: [
      'Architected the NestJS backend repository structure from inception and designed MySQL (TypeORM) schemas based on client UX/UI wireframes.',
      'Developed RESTful APIs and CRUD workflows enabling seamless data synchronization across Landing, Student, and Admin portals.',
      'Implemented OAuth2 social login integrations for KakaoTalk, Google, and Naver accounts.',
      'Configured GitLab CI/CD deployment pipelines targeting Docker containers on AWS (EC2, S3, RDS) and Linux servers.'
    ],
    techGroups: {
      Backend: ['Node.js', 'NestJS', 'TypeScript', 'OAuth2 (Kakao/Google/Naver)'],
      Data: ['MySQL', 'TypeORM'],
      'Cloud & Web': ['AWS (EC2, S3, RDS)', 'Docker', 'GitLab CI/CD', 'Linux', 'React']
    },
    quickTags: ['Node.js / NestJS', 'TypeScript', 'MySQL', 'AWS', 'Docker']
  },
  {
    id: 'chocolat-pc',
    title: 'Chocolat PC — Commercial IoT Control Desktop',
    period: '10/2023 – 12/2024',
    customer: 'Kumho Electronic',
    role: 'Backend Developer',
    teamSize: '8 (1 KR PM, 1 Tech Lead, 1 Tester, 3 FE, 2 BE)',
    category: 'enterprise-iot',
    categoryLabel: 'Enterprise & IoT',
    flagship: false,
    summary:
      'Desktop remote-control system (React + Electron + Ant Design) empowering commercial building security teams to monitor and operate connected Light, Gateway, Smart Switch, and Smart Sensor devices in real time via Azure IoT Hub.',
    highlights: [
      'Engineered NestJS RESTful APIs and MySQL (TypeORM) models backed by SHA-512 payload encryption and role-based login permission enforcement.',
      'Built real-time Azure IoT Hub event listeners to ingest hardware state changes and synchronize telemetry across connected third-party device services.',
      'Integrated Azure Blob Storage for building documents and partnered with the frontend team on interactive building floor-plan zone mapping.'
    ],
    techGroups: {
      Backend: ['Node.js', 'NestJS', 'TypeScript', 'SHA-512 Encryption'],
      Data: ['MySQL', 'TypeORM'],
      'Azure & Clients': ['Azure IoT Hub', 'Azure VM', 'Azure Blob Storage', 'Docker', 'GitLab', 'React', 'Electron']
    },
    quickTags: ['Node.js / NestJS', 'TypeScript', 'MySQL', 'Azure', 'Docker']
  },
  {
    id: 'chocolat',
    title: 'Chocolat — Smart Building IoT Management Suite',
    period: '07/2022 – 12/2024',
    customer: 'Kumho Electronic',
    role: 'Backend Developer',
    teamSize: '11 (1 KR PM, 1 Tech Lead, 1 Tester, 2 FE, 4 Android, 3 BE)',
    category: 'enterprise-iot',
    categoryLabel: 'Enterprise & IoT',
    flagship: true,
    summary:
      'Multi-client commercial building IoT ecosystem comprising a Kotlin Android BLE provisioning app and React Web Admin portal for managing multi-building device hierarchies, permissions, telemetry, and energy analytics.',
    highlights: [
      'Refactored and extended the existing NestJS + MySQL (TypeORM) codebase into a modular architecture supporting multi-building organization, account permissions, and full device CRUD.',
      'Implemented scheduled cron jobs aggregating IoT device power consumption across weekly, monthly, and annual analytics intervals.',
      'Connected Azure IoT Hub and Azure Blob Storage to manage device telemetry streams, document uploads, and synchronized building/device state across Android and Web Admin clients.'
    ],
    techGroups: {
      Backend: ['Node.js', 'NestJS', 'TypeScript', 'Cron Jobs'],
      Data: ['MySQL', 'TypeORM'],
      'Azure & Clients': ['Azure IoT Hub', 'Azure VM', 'Azure Blob Storage', 'Docker', 'Kotlin (Android)', 'React']
    },
    quickTags: ['Node.js / NestJS', 'TypeScript', 'MySQL', 'Azure', 'Docker']
  },
  {
    id: 'terafty',
    title: 'Terafty — Series Streaming & Community Funding',
    period: '01/2022 – 06/2022',
    customer: 'Terafty Client',
    role: 'Backend Developer',
    teamSize: '8 (1 KR PM, 1 Tech Lead, 1 Tester, 3 FE, 1 BE)',
    category: 'media-edtech',
    categoryLabel: 'Media, EdTech & Marketplace',
    flagship: false,
    summary:
      'Interactive long-form series streaming and community crowdfunding platform featuring Admin and User portals where audiences watch episodes, answer creator Q&A prompts, and fund upcoming film productions.',
    highlights: [
      'Sole Backend Engineer designing the Express.js project structure and MongoDB (Mongoose) data schemas from the ground up.',
      'Built RESTful APIs supporting episode publishing, audience Q&A feedback, community film-funding campaigns, and third-party data integrations.',
      'Implemented KakaoTalk and Google social authentication alongside containerized deployments on AWS (EC2, S3, Lambda) and Docker.'
    ],
    techGroups: {
      Backend: ['Node.js', 'Express.js', 'OAuth2 (Kakao/Google)'],
      Data: ['MongoDB', 'Mongoose'],
      'Cloud & Web': ['AWS (EC2, S3, Lambda)', 'Docker', 'GitLab', 'React', 'Ant Design']
    },
    quickTags: ['Node.js / NestJS', 'MongoDB', 'AWS', 'Docker']
  },
  {
    id: 'omn',
    title: 'OMN — Multi-Platform Movie Streaming Suite',
    period: '08/2020 – 12/2021',
    customer: 'OMN Media',
    role: 'Backend Developer',
    teamSize: '15 (2 PMs, 1 Tech Lead, 1 Tester, 6 FE, 3 BE, 2 Mobile)',
    category: 'media-edtech',
    categoryLabel: 'Media, EdTech & Marketplace',
    flagship: false,
    summary:
      'Netflix-style video streaming ecosystem spanning 3 Angular web applications (Online, Offline creator studio, Admin moderation) and native iOS/Android apps supporting creator uploads, daily showtimes, viewership analytics, and profit tracking.',
    highlights: [
      'Designed Express.js backend modules and MongoDB (Mongoose) + Redis schemas powering streaming catalogs, creator uploads, and moderation workflows across 5 client apps.',
      'Implemented asynchronous RabbitMQ message queues for background video/task processing and system-wide user notifications.',
      'Integrated AWS S3 for media/file storage and deployed services using Docker and AWS Lambda/EC2 across bi-weekly Agile sprints.'
    ],
    techGroups: {
      Backend: ['Node.js', 'Express.js', 'RabbitMQ'],
      Data: ['MongoDB', 'Mongoose', 'Redis'],
      'Cloud & Clients': ['AWS (EC2, S3, Lambda)', 'Docker', 'GitLab', 'Angular', 'iOS & Android']
    },
    quickTags: ['Node.js / NestJS', 'MongoDB', 'Redis', 'AWS', 'Docker']
  },
  {
    id: 'sc-road',
    title: 'SC Road — Used-Car Auction Marketplace',
    period: '07/2020 – 10/2021',
    customer: 'Korean Client',
    role: 'Backend Developer',
    teamSize: '6 (1 KR PM, 1 Tech Lead, 1 Tester, 2 FE, 1 BE)',
    category: 'media-edtech',
    categoryLabel: 'Media, EdTech & Marketplace',
    flagship: false,
    summary:
      'Cross-platform Ionic Angular mobile auction marketplace connecting car dealers, private sellers, and administrators across Dealer Bidding App, Seller Listing App, and Admin Portal.',
    highlights: [
      'Sole Backend Engineer designing the MVC Express.js server architecture and connecting Firebase real-time database workflows.',
      'Built bidding, vehicle listing, dealer-seller transaction management, and in-app advertisement APIs hosted on AWS (EC2, S3).'
    ],
    techGroups: {
      Backend: ['Node.js', 'Express.js', 'MVC Architecture'],
      Data: ['Firebase'],
      'Cloud & Web': ['AWS (EC2, S3)', 'GitLab', 'Ionic Angular']
    },
    quickTags: ['Node.js / NestJS', 'AWS']
  },
  {
    id: 'viettel-sip-trunk',
    title: 'Viettel SIP Trunk — Enterprise Telecom Platform',
    period: '11/2019 – 06/2020',
    customer: 'Viettel Group',
    role: 'Fullstack Developer',
    teamSize: '8 (1 PM, 1 Tech Lead, 1 System Engineer, 1 Tester, 4 Dev)',
    category: 'telecom',
    categoryLabel: 'Telecom & Carrier Billing',
    flagship: false,
    summary:
      'Enterprise hotline and telecom package management portal for Viettel Group enabling Vietnamese SMBs to register/manage hotline extensions and subscribe to or cancel carrier SIP Trunk packages.',
    highlights: [
      'Developed fullstack web features and APIs using React, PHP, MariaDB, Redis, Elasticsearch, and Docker.',
      'Integrated directly with Viettel carrier billing servers for real-time subscription synchronization upon package registration.',
      'Engineered automated monthly and annual package renewal workflows and optimized high-volume telecom data processing.'
    ],
    techGroups: {
      Backend: ['PHP', 'Carrier Billing Integration', 'Cron Renewals'],
      Data: ['MariaDB', 'Redis', 'Elasticsearch'],
      'Frontend & Infra': ['React', 'Docker', 'Bitbucket']
    },
    quickTags: ['MySQL', 'Redis', 'Docker']
  },
  {
    id: 'mobifone-sip-trunk',
    title: 'Mobifone SIP Trunk — Enterprise Telecom Platform',
    period: '11/2019 – 06/2020',
    customer: 'Mobifone',
    role: 'Fullstack Developer',
    teamSize: '8 (1 PM, 1 Tech Lead, 1 System Engineer, 1 Tester, 4 Dev)',
    category: 'telecom',
    categoryLabel: 'Telecom & Carrier Billing',
    flagship: false,
    summary:
      'Enterprise hotline and telecom subscription platform for Mobifone empowering SMBs across Vietnam to provision hotline numbers, extensions, and carrier network packages.',
    highlights: [
      'Built fullstack web modules and backend business logic using React, PHP, MariaDB, Redis, Elasticsearch, and Docker.',
      'Integrated with Mobifone carrier billing servers for real-time subscription synchronization and automated monthly/annual package renewals.',
      'Tuned backend response performance and high-volume telecom data processing while resolving UI and system issues.'
    ],
    techGroups: {
      Backend: ['PHP', 'Carrier Billing Integration', 'Cron Renewals'],
      Data: ['MariaDB', 'Redis', 'Elasticsearch'],
      'Frontend & Infra': ['React', 'Docker', 'Bitbucket']
    },
    quickTags: ['MySQL', 'Redis', 'Docker']
  }
];

const QUICK_TECHS = [
  'Golang',
  'Node.js / NestJS',
  'TypeScript',
  'LLM / RAG',
  'PostgreSQL',
  'MongoDB',
  'MySQL',
  'Redis',
  'Kafka',
  'Kubernetes',
  'Azure',
  'AWS',
  'Docker'
];

const state = {
  category: 'all',
  tech: null,
  search: ''
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getAllTags(project) {
  return Object.values(project.techGroups).flat();
}

function matchesFilters(project) {
  if (state.category !== 'all' && project.category !== state.category) {
    return false;
  }

  if (state.tech && !project.quickTags.includes(state.tech)) {
    const flattened = getAllTags(project).map((t) => t.toLowerCase());
    if (!flattened.some((t) => t.includes(state.tech.toLowerCase()))) {
      return false;
    }
  }

  if (state.search.trim() !== '') {
    const q = state.search.trim().toLowerCase();
    const haystack = [
      project.title,
      project.customer,
      project.role,
      project.summary,
      project.categoryLabel,
      ...project.highlights,
      ...getAllTags(project)
    ]
      .join(' ')
      .toLowerCase();
    if (!haystack.includes(q)) {
      return false;
    }
  }

  return true;
}

function renderQuickTechs() {
  const container = document.getElementById('quickTechBar');
  const clearBtn = state.tech
    ? '<button type="button" class="tech-filter-btn" data-tech-clear="1">Clear tech filter</button>'
    : '';

  container.innerHTML =
    '<span>Quick stack filter:</span>' +
    QUICK_TECHS.map((tech) => {
      const activeClass = state.tech === tech ? 'active' : '';
      return `<button type="button" class="tech-filter-btn ${activeClass}" data-tech="${escapeHtml(tech)}">${escapeHtml(tech)}</button>`;
    }).join('') +
    clearBtn;
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  const meta = document.getElementById('resultsMeta');
  const filtered = PROJECTS.filter(matchesFilters);

  const activeFilters = [];
  if (state.category !== 'all') {
    const activePill = document.querySelector(`.pill[data-category="${state.category}"]`);
    if (activePill) activeFilters.push(activePill.textContent.trim());
  }
  if (state.tech) activeFilters.push(`Stack: ${state.tech}`);
  if (state.search.trim()) activeFilters.push(`Search: "${state.search.trim()}"`);

  meta.textContent =
    activeFilters.length > 0
      ? `Showing ${filtered.length} of ${PROJECTS.length} projects (${activeFilters.join(' • ')})`
      : `Showing all ${PROJECTS.length} production systems across AI/Retail, Logistics, IoT, Media/EdTech & Telecom`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p style="font-size: 15px; color: #e2e8f0; margin-bottom: 10px;">No projects matched your current filters.</p>
        <button type="button" class="btn btn-sm" id="resetFiltersBtn">Reset all filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('resetFiltersBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', resetAllFilters);
    }
    return;
  }

  grid.innerHTML = filtered
    .map((p) => {
      const tags = getAllTags(p).slice(0, 8);
      const flagshipBadge = p.flagship
        ? '<span class="badge badge-flagship">CV Flagship</span>'
        : '';

      return `
        <article class="project-card ${p.flagship ? 'flagship' : ''}">
          <div class="card-top">
            <div class="badge-row">
              <span class="badge badge-cat">${escapeHtml(p.categoryLabel)}</span>
              ${flagshipBadge}
            </div>
            <span class="period">${escapeHtml(p.period)}</span>
          </div>

          <div>
            <h3 class="project-title">${escapeHtml(p.title)}</h3>
            <div class="project-meta">
              <span><strong>Client:</strong> ${escapeHtml(p.customer)}</span>
              <span><strong>Role:</strong> ${escapeHtml(p.role)}</span>
            </div>
          </div>

          <p class="project-summary">${escapeHtml(p.summary)}</p>

          <ul class="highlight-list">
            ${p.highlights
              .slice(0, 2)
              .map((h) => `<li>${escapeHtml(h)}</li>`)
              .join('')}
          </ul>

          <div class="tags-wrap">
            ${tags
              .map(
                (t) =>
                  `<button type="button" class="tag" data-inline-tag="${escapeHtml(t)}" title="Filter by ${escapeHtml(t)}">${escapeHtml(t)}</button>`
              )
              .join('')}
          </div>

          <div class="card-footer">
            <span class="team-label">Team: ${escapeHtml(p.teamSize)}</span>
            <button type="button" class="btn btn-sm btn-primary" data-open-modal="${escapeHtml(p.id)}">
              Architecture &amp; Details &rarr;
            </button>
          </div>
        </article>
      `;
    })
    .join('');
}

function openProjectModal(projectId) {
  const project = PROJECTS.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const body = document.getElementById('modalBody');

  const techGroupHtml = Object.entries(project.techGroups)
    .map(
      ([group, items]) => `
      <div style="margin-bottom: 10px;">
        <div style="font-size: 12px; font-weight: 700; color: #94a3b8; margin-bottom: 5px;">${escapeHtml(group)}</div>
        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
          ${items
            .map((item) => `<span class="tag" style="cursor: default;">${escapeHtml(item)}</span>`)
            .join('')}
        </div>
      </div>
    `
    )
    .join('');

  body.innerHTML = `
    <div class="modal-header">
      <div>
        <div class="badge-row" style="margin-bottom: 8px;">
          <span class="badge badge-cat">${escapeHtml(project.categoryLabel)}</span>
          ${project.flagship ? '<span class="badge badge-flagship">CV Flagship</span>' : ''}
          <span class="period">${escapeHtml(project.period)}</span>
        </div>
        <h2 style="font-size: 22px; line-height: 1.25; color: #ffffff;">${escapeHtml(project.title)}</h2>
        <div class="project-meta" style="margin-top: 6px;">
          <span><strong>Customer:</strong> ${escapeHtml(project.customer)}</span>
          <span><strong>Position:</strong> ${escapeHtml(project.role)}</span>
          <span><strong>Team Size:</strong> ${escapeHtml(project.teamSize)}</span>
        </div>
      </div>
      <button type="button" class="modal-close" id="modalCloseBtn" aria-label="Close modal">&times;</button>
    </div>

    <div class="modal-section">
      <h4>System Overview</h4>
      <p style="font-size: 14.2px; color: #cbd5e1; line-height: 1.65;">${escapeHtml(project.summary)}</p>
    </div>

    <div class="modal-section">
      <h4>Architecture &amp; Engineering Contributions</h4>
      <ul class="highlight-list">
        ${project.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section">
      <h4>Technology Stack</h4>
      ${techGroupHtml}
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  document.getElementById('modalCloseBtn').addEventListener('click', closeProjectModal);
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function resetAllFilters() {
  state.category = 'all';
  state.tech = null;
  state.search = '';
  document.getElementById('projectSearch').value = '';
  document.getElementById('searchClear').classList.remove('visible');
  document.querySelectorAll('.pill[data-category]').forEach((el) => {
    el.classList.toggle('active', el.dataset.category === 'all');
  });
  renderQuickTechs();
  renderProjects();
}

document.addEventListener('DOMContentLoaded', () => {
  renderQuickTechs();
  renderProjects();

  // Category filter pills
  document.getElementById('categoryPills').addEventListener('click', (e) => {
    const btn = e.target.closest('.pill[data-category]');
    if (!btn) return;
    state.category = btn.dataset.category;
    document.querySelectorAll('.pill[data-category]').forEach((el) => {
      el.classList.toggle('active', el === btn);
    });
    renderProjects();
  });

  // Quick tech filter bar
  document.getElementById('quickTechBar').addEventListener('click', (e) => {
    const clearBtn = e.target.closest('[data-tech-clear]');
    if (clearBtn) {
      state.tech = null;
      renderQuickTechs();
      renderProjects();
      return;
    }

    const techBtn = e.target.closest('.tech-filter-btn[data-tech]');
    if (!techBtn) return;
    const picked = techBtn.dataset.tech;
    state.tech = state.tech === picked ? null : picked;
    renderQuickTechs();
    renderProjects();
  });

  // Search box
  const searchInput = document.getElementById('projectSearch');
  const searchClear = document.getElementById('searchClear');

  searchInput.addEventListener('input', (e) => {
    state.search = e.target.value;
    searchClear.classList.toggle('visible', state.search.length > 0);
    renderProjects();
  });

  searchClear.addEventListener('click', () => {
    state.search = '';
    searchInput.value = '';
    searchClear.classList.remove('visible');
    renderProjects();
    searchInput.focus();
  });

  // Project card interactions (modal open or inline tag search)
  document.getElementById('projectsGrid').addEventListener('click', (e) => {
    const modalBtn = e.target.closest('[data-open-modal]');
    if (modalBtn) {
      openProjectModal(modalBtn.dataset.openModal);
      return;
    }

    const tagBtn = e.target.closest('[data-inline-tag]');
    if (tagBtn) {
      const tag = tagBtn.dataset.inlineTag;
      state.search = tag;
      searchInput.value = tag;
      searchClear.classList.add('visible');
      renderProjects();
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Modal backdrop + ESC key
  const modal = document.getElementById('projectModal');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProjectModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeProjectModal();
    }
  });
});
