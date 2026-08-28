// English (EN) Localization Dictionary
// Strictly ZERO EMOJIS

export const en = {
  nav: {
    home: 'HOME',
    projects: 'PROJECTS',
    inventory: 'TECH STACK',
    experience: 'QUEST_LOG',
    contact: 'CONTACT',
    cli: 'CLI',
  },
  header: {
    toggleSound: 'Toggle 8-Bit Audio',
    toggleCrt: 'Toggle CRT Scanlines',
    openTerminal: 'Open Arcade Terminal',
    langSwitch: 'SWITCH LANGUAGE (EN/ID)',
  },
  hero: {
    statusBadge: 'BACKEND DEVELOPER',
    titleLine1: 'DIMAS',
    titleLine2: 'FIRMANSYAH',
    bio: 'Backend Developer specializing in high-performance Python APIs, automated pipelines, scalable database architecture, and robust server systems.',
    startGame: 'START',
    resume: 'RESUME',
    artAlt: 'Retro sunset palm tree pixel art',
    artHover: 'CLICK TO INTERACT',
    comboText: 'COMBO x{count}! +1000 XP',
  },
  projects: {
    title: 'PROJECTS',
    categories: {
      all: 'ALL',
      web: 'Web Apps',
      tools: 'Tools & API',
    },
    inspect: 'VIEW DETAILS',
    summaryTitle: 'PROJECT SUMMARY:',
    openDemo: 'LAUNCH DEMO',
    viewCode: 'VIEW CODE',
    close: 'X',
    items: [
      {
        id: 'mythosnote',
        title: 'MYTHOSNOTE',
        category: 'Web Apps',
        description: 'AI-powered note-taking workspace that ingests text, markdown, and PDF documents to generate structured insights.',
        tags: ['PYTHON', 'DJANGO', 'POSTGRESQL', 'REDIS', 'DOCKER', 'TAILWIND'],
        details: 'Transforms documents into structured mind maps, summaries, quizzes, and concept tables powered by DeepSeek AI with isolated workspace contexts.'
      },
      {
        id: 'liminal-pdf',
        title: 'LIMINAL PDF',
        category: 'Tools & API',
        description: 'High-performance document processing platform for seamless PDF conversions, splitting, merging, and compression.',
        tags: ['PYTHON', 'FASTAPI', 'REACT', 'DOCKER', 'TAILWIND'],
        details: 'Built with FastAPI and React, providing private server-side processing for Word-to-PDF, PDF-to-Word, merging, and compression pipelines.'
      },
      {
        id: 'financial-tracker',
        title: 'FINANCIAL TRACKER',
        category: 'Web Apps',
        description: 'Full-featured financial tracking dashboard with automated income/expense analytics, 1-year trends, and transaction history.',
        tags: ['PYTHON', 'FLASK', 'MYSQL', 'TAILWIND'],
        details: 'Engineered with Python Flask and MySQL, featuring dynamic cashflow charts, balance calculations, categorized logs, and full transaction management.'
      }
    ]
  },
  inventory: {
    title: 'TECH STACK',
    bagTitle: 'BAG (SLOTS: 8/16)',
    clickTip: 'Click any inventory slot to inspect toolkit, libraries, and real-world use-cases.',
    toolkitTitle: 'FREQUENTLY USED TOOLKIT:',
    useCasesTitle: 'PRIMARY USE CASES:',
    items: {
      python: {
        category: 'PRIMARY STACK',
        status: 'CORE DAILY DRIVER',
        wakatimePct: '36.02%',
        rarity: 'PRIMARY',
        useCases: 'Backend APIs, Web Automation & Scrapers, Data Processing, CLI Utilities',
        description: 'Forged as the core powerhouse. Wielded for high-performance automation, data processing, backend services, and clean script orchestration.'
      },
      database: {
        category: 'DATA ARCHITECTURE',
        status: 'RELATIONAL STORAGE',
        wakatimePct: 'SQL',
        rarity: 'DATABASE',
        useCases: 'PostgreSQL, MySQL, SQLite, Complex Queries, Schema Design, Indexing & Transactions',
        description: 'Engineered relational data architectures, optimized ACID transactions, indexing strategies, and reliable schema migrations across PostgreSQL, MySQL, and SQLite databases.'
      },
      javascript: {
        category: 'CLIENT SCRIPT',
        status: 'DYNAMIC WEB ENGINE',
        wakatimePct: '9.46%',
        rarity: 'FRONTEND',
        useCases: 'Interactive User Interfaces, Dynamic Browser Scripting, REST Integrations',
        description: 'Interactive web client scripting, state management, and seamless backend API consumption.'
      },
      html: {
        category: 'WEB INTERFACE',
        status: 'SEMANTIC STYLING',
        wakatimePct: '6.87%',
        rarity: 'UI & STYLING',
        useCases: 'Accessible Semantic Document Structures, Responsive Cross-Device Styling',
        description: 'Accessible semantic structures and responsive styling shielding web applications from layout shifts.'
      },
      bash: {
        category: 'SYSTEM UTILITY',
        status: 'SYSTEM AUTOMATION',
        wakatimePct: '4.15%',
        rarity: 'AUTOMATION',
        useCases: 'Server Administration, Automated Deployment Scripts, Scheduled Batch Tasks',
        description: 'Direct interface with the operating system kernel for shell scripting, workflow automation, and server management.'
      },
      php: {
        category: 'MVC WEB BACKEND',
        status: 'SERVER-SIDE ARCHITECTURE',
        wakatimePct: '1.96%',
        rarity: 'BACKEND',
        useCases: 'Server-Side Rendered Web Apps, Template Modularization, Dynamic CMS Portals',
        description: 'Server-side scripting and templating engine powering robust web backends and CMS workflows.'
      },
      git: {
        name: 'Git',
        category: 'SOURCE CONTROL',
        status: 'VERSION CONTROL',
        wakatimePct: 'VERSION CONTROL',
        rarity: 'DEVOPS',
        useCases: 'Codebase Version History, Team Collaboration, Release Engineering & CI/CD',
        description: 'Immutable commit history tracking every code evolution across repositories with precision.'
      },
      docker: {
        name: 'Docker',
        category: 'CONTAINERIZATION',
        status: 'CONTAINERIZATION',
        wakatimePct: 'DEVOPS',
        rarity: 'INFRASTRUCTURE',
        useCases: 'Isolated Development Environments, Containerized Microservices & Deployments',
        description: 'Encloses application runtimes in isolated container environments that execute identically anywhere.'
      }
    }
  },
  contact: {
    title: 'CONTACT',
    formTitle: 'LET\'S WORK TOGETHER',
    formSubtitle: 'Have a backend project in mind, a job opportunity, or an automation challenge? Send me a message and let\'s discuss how we can collaborate.',
    nameLabel: 'YOUR NAME *',
    namePlaceholder: 'e.g. Sarah Connor',
    emailLabel: 'EMAIL ADDRESS *',
    emailPlaceholder: 'sarah@example.com',
    messageLabel: 'MESSAGE / PROJECT BRIEF *',
    messagePlaceholder: 'Tell me about your project, timeline, role, or requirements...',
    submitButton: 'SEND MESSAGE',
    successTitle: 'MESSAGE SENT SUCCESSFULLY!',
    successSubtitle: 'Thank you for reaching out. Your message has been delivered and I will reply within 24 hours.',
    infoTitle: 'CONTACT INFORMATION',
    emailInbox: 'PRIMARY EMAIL',
    timezoneTitle: 'LOCATION',
    timezoneVal: 'Samarinda, Indonesia',
    latencyTitle: 'RESPONSE TIME',
    latencyVal: '< 24 Hours',
    socialTitle: 'PROFILES & SOCIALS',
  },
  resume: {
    badge: 'CHARACTER PROFILE SHEET',
    title: 'DIMAS FIRMANSYAH // DF.DEV',
    subtitle: 'Python & Backend Engineer // Automation Specialist',
    class: 'CLASS',
    classVal: 'BACKEND',
    mainLang: 'MAIN LANG',
    mainLangVal: 'PYTHON 3',
    mana: 'MANA',
    manaVal: '100% RECHARGED',
    downloadBtn: 'DOWNLOAD CHARACTER SHEET (PDF)',
    closeBtn: 'CLOSE WINDOW',
    sections: {
      summary: 'CLASS SUMMARY',
      summaryText: 'Specialized Backend Engineer focused on architecting resilient Python backends, high-throughput REST APIs, automated processing engines, and high-performance server architectures.',
      stats: 'CORE ATTRIBUTES (WAKATIME TELEMETRY)',
      experience: 'CHRONICLES & CAMPAIGNS',
      featuredQuests: 'NOTABLE QUESTS (HIGHLIGHTS)'
    }
  },
  terminal: {
    title: 'DF.DEV VIRTUAL TERMINAL (BASH)',
    welcome: [
      'DF.DEV Virtual Console v2.5.0 (x86_64-retro-linux)',
      'Type "help" to list available commands or "matrix" for digital rain.'
    ],
    prompt: 'guest@df-dev:~$',
    commands: {
      help: 'help',
      about: 'about',
      projects: 'projects',
      skills: 'skills',
      contact: 'contact',
      matrix: 'matrix',
      clear: 'clear',
      exit: 'exit'
    },
    responses: {
      help: [
        'AVAILABLE PROTOCOLS:',
        '  help       - Display list of supported console commands',
        '  about      - Display backend engineer character dossier',
        '  projects   - Output high-priority completed quests',
        '  skills     - Query real-time WakaTime inventory statistics',
        '  contact    - Print direct transmission coordinates',
        '  matrix     - Run authentic Matrix digital rain (cmatrix)',
        '  clear      - Clear terminal screen buffer',
        '  exit       - Close terminal window'
      ],
      about: [
        '== PLAYER PROFILE ==',
        'Name: DIMAS FIRMANSYAH (DF.DEV)',
        'Class: Python & Backend Engineer',
        'Specialty: High-performance Python, Scalable APIs, Automation Pipelines, Server Systems',
        'Passion: Architecting robust server-side systems and efficient data workflows.'
      ],
      projects: [
        '== FEATURED PROJECTS ==',
        '1. MYTHOSNOTE        -> [Python, Django, PostgreSQL, Redis, Docker] AI-Powered Note Taking System',
        '2. LIMINAL PDF       -> [Python, FastAPI, React, Docker] High-Speed Document Processing Platform',
        '3. FINANCIAL TRACKER -> [Python, Flask, MySQL, Tailwind] Comprehensive Financial Analytics & Logging'
      ],
      skills: [
        '== EQUIPPED INVENTORY (WAKATIME) ==',
        '► [PYTHON 3]       36.02% | Primary Core & Automation',
        '► [MARKDOWN]       24.59% | Documentation & Specs',
        '► [JAVASCRIPT]     9.46%  | Interactive Web Engine',
        '► [HTML / CSS]     6.87%  | Semantic Structure & Styling',
        '► [BASH / SHELL]   4.15%  | Linux CLI Automation',
        '► [PHP / BLADE]    1.96%  | Server-Side Web Rendering',
        '► [GIT / DOCKER]   DAILY  | Versioning & Containerization'
      ],
      contact: [
        '== TRANSMISSION CHANNELS ==',
        'Email:     dimasfirmandev@gmail.com',
        'GitHub:    https://github.com/Dimasbdev',
        'Instagram: https://www.instagram.com/dimmm.f?igsi=MXdqOTZ6OWNxMmtrcQ=='
      ],
      matrix: [
        '01000111 01001100 01010011 01010100 01000011 01001000',
        '01010000 01001001 01011000 01000101 01001100 01010011',
        'WAKE UP, CYBERPUNK... THE SYSTEM IS READY.'
      ],
      cleared: 'Screen cleared. Type "help" for options.',
      notFound: 'Command not found: "{cmd}". Type "help" for available commands.'
    }
  },
  footer: {
    tickerItems: [
      '>> SYSTEM STATUS: READY & OPTIMAL...',
      '>> INSERT COIN TO PLAY',
      '>> RETRO PIXEL AESTHETICS ACTIVATED',
      '>> 100% LIGHTHOUSE READY',
      '>> PYTHON & BACKEND DEVELOPER // ONLINE'
    ],
    online: 'Status: ONLINE',
    backToTop: 'Back to Top',
    craftedWith: 'Crafted with React & Tailwind',
  }
};
