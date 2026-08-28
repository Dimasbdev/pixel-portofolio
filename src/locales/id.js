// Indonesian (ID) Localization Dictionary
// Strictly ZERO EMOJIS

export const id = {
  nav: {
    home: 'BERANDA',
    projects: 'PROYEK',
    inventory: 'TECH STACK',
    experience: 'PENGALAMAN',
    contact: 'KONTAK',
    cli: 'CLI',
  },
  header: {
    toggleSound: 'Pengaturan Suara 8-Bit',
    toggleCrt: 'Filter Garis Pindai CRT',
    openTerminal: 'Buka Terminal Arcade',
    langSwitch: 'GANTI BAHASA (EN/ID)',
  },
  hero: {
    statusBadge: 'BACKEND DEVELOPER',
    titleLine1: 'DIMAS',
    titleLine2: 'FIRMANSYAH',
    bio: 'Backend Developer yang berfokus pada arsitektur API Python berkinerja tinggi, pipeline otomatisasi, struktur database yang scalable, dan sistem server tangguh.',
    startGame: 'MULAI',
    resume: 'LIHAT RESUME',
    artAlt: 'Seni pixel pemandangan pohon kelapa retrowave',
    artHover: 'KLIK UNTUK INTERAKSI',
    comboText: 'COMBO x{count}! +1000 XP',
  },
  projects: {
    title: 'PROYEK',
    categories: {
      all: 'SEMUA',
      web: 'Web Apps',
      tools: 'Tools & API',
    },
    inspect: 'LIHAT DETAIL',
    summaryTitle: 'RINGKASAN PROYEK:',
    openDemo: 'BUKA DEMO',
    viewCode: 'LIHAT KODE',
    close: 'X',
    items: [
      {
        id: 'mythosnote',
        title: 'MYTHOSNOTE',
        category: 'Web Apps',
        description: 'Sistem AI-powered note-taking yang memungkinkan pengguna mengelola workspace, mengunggah dokumen, dan berinteraksi dengan AI berdasarkan konteks dokumen.',
        tags: ['PYTHON', 'DJANGO', 'POSTGRESQL', 'REDIS', 'DOCKER', 'TAILWIND'],
        details: 'Mengubah dokumen teks, markdown, dan PDF menjadi ringkasan, peta pikiran, kuis, serta tabel konsep terstruktur yang ditenagai oleh DeepSeek AI secara aman dan terisolasi.'
      },
      {
        id: 'liminal-pdf',
        title: 'LIMINAL PDF',
        category: 'Tools & API',
        description: 'Platform konversi dan manipulasi PDF cepat untuk ubah format Word, gabung/pisah PDF, konversi gambar, dan kompresi dokumen secara aman.',
        tags: ['PYTHON', 'FASTAPI', 'REACT', 'DOCKER', 'TAILWIND'],
        details: 'Dibangun dengan FastAPI dan React untuk pemrosesan dokumen di sisi server secara aman, mendukung konversi Word ke PDF, pemisahan, penggabungan, dan kompresi.'
      },
      {
        id: 'financial-tracker',
        title: 'SISTEM PENCATATAN KEUANGAN',
        category: 'Web Apps',
        description: 'Dashboard pencatatan keuangan komprehensif dengan analitik pendapatan/pengeluaran otomatis, grafik tren 1 tahun, dan riwayat transaksi terstruktur.',
        tags: ['PYTHON', 'FLASK', 'MYSQL', 'TAILWIND'],
        details: 'Dikembangkan menggunakan Python Flask dan database MySQL, dilengkapi visualisasi grafik arus kas, kalkulasi saldo otomatis, dan manajemen riwayat transaksi terstruktur.'
      }
    ]
  },
  inventory: {
    title: 'TECH STACK',
    bagTitle: 'TAS (SLOT: 8/16)',
    clickTip: 'Klik salah satu slot inventaris untuk melihat toolkit, library, dan implementasi produksinya.',
    toolkitTitle: 'TOOLKIT & LIBRARY SERING DIGUNAKAN:',
    useCasesTitle: 'PENGGUNAAN UTAMA:',
    items: {
      python: {
        category: 'STACK UTAMA',
        status: 'BAHASA HARIAN UTAMA',
        wakatimePct: '36.02%',
        rarity: 'UTAMA',
        useCases: 'Backend API, Otomatisasi Web & Scraper, Pemrosesan Data, Utilitas CLI',
        description: 'Pilar utama dalam pengembangan backend, automasi tugas berulang, pengolahan data terstruktur, dan orkestrasi skrip berkinerja tinggi.'
      },
      database: {
        category: 'ARSITEKTUR DATA',
        status: 'DATABASE RELASIONAL',
        wakatimePct: 'SQL',
        rarity: 'DATABASE',
        useCases: 'PostgreSQL, MySQL, SQLite, Query Kompleks, Desain Skema, Indeksasi & Transaksi',
        description: 'Perancangan arsitektur basis data relasional, optimasi query dan transaksi ACID, strategi indeksasi, serta migrasi skema yang andal pada PostgreSQL, MySQL, dan SQLite.'
      },
      javascript: {
        category: 'SKRIP CLIENT',
        status: 'ANTARMUKA DINAMIS',
        wakatimePct: '9.46%',
        rarity: 'FRONTEND',
        useCases: 'Antarmuka Pengguna Interaktif, Skrip Browser Dinamis, Integrasi REST API',
        description: 'Pengembangan logika interaktif pada browser, manajemen state aplikasi web, dan integrasi API frontend.'
      },
      html: {
        category: 'TAMPILAN WEB',
        status: 'GAYA SEMANTIK',
        wakatimePct: '6.87%',
        rarity: 'UI & STYLING',
        useCases: 'Struktur Dokumen Aksesibel, Desain Tata Letak Responsif Lintas Perangkat',
        description: 'Fondasi struktural dan penataan visual antarmuka web yang rapi, semantik, dan bebas dari pergeseran tata letak.'
      },
      bash: {
        category: 'UTILITAS SISTEM',
        status: 'SKRIP TERMINAL',
        wakatimePct: '4.15%',
        rarity: 'OTOMASI',
        useCases: 'Administrasi Server, Skrip Deployment Otomatis, Tugas Pemrosesan Batch',
        description: 'Interaksi langsung dengan kernel sistem operasi untuk otomatisasi alur kerja terminal, deployment, dan manajemen server Linux.'
      },
      php: {
        category: 'BACKEND MVC & SSR',
        status: 'RENDER SISI SERVER',
        wakatimePct: '1.96%',
        rarity: 'BACKEND',
        useCases: 'Aplikasi Web Sisi Server, Modularisasi Template, Portal CMS Dinamis',
        description: 'Pengembangan backend berbasis server-side rendering dan integrasi arsitektur MVC yang terstruktur.'
      },
      git: {
        name: 'Git',
        category: 'KONTROL VERSI',
        status: 'ALAT UTAMA',
        wakatimePct: 'KONTROL VERSI',
        rarity: 'DEVOPS',
        useCases: 'Pelacakan Riwayat Kode, Kolaborasi Tim, Otomatisasi CI/CD & Rilis',
        description: 'Pencatatan riwayat perubahan kode yang terorganisir untuk menjaga integritas dan stabilitas basis kode proyek.'
      },
      docker: {
        name: 'Docker',
        category: 'KONTAINERISASI',
        status: 'DEVOPS & DEPLOYMENT',
        wakatimePct: 'DEVOPS',
        rarity: 'INFRASTRUKTUR',
        useCases: 'Isolasi Lingkungan Pengembangan, Deployment Berbasis Kontainer Mikroservis',
        description: 'Menjalankan aplikasi dalam lingkungan kontainer terisolasi yang konsisten di semua tahap pengembangan dan produksi.'
      }
    }
  },
  contact: {
    title: 'KONTAK',
    formTitle: 'DISKUSI & KERJASAMA PROYEK',
    formSubtitle: 'Memiliki proyek backend, tawaran peran, atau kebutuhan sistem otomatisasi? Kirimkan pesan dan mari diskusikan bagaimana kita dapat berkolaborasi.',
    nameLabel: 'NAMA LENGKAP *',
    namePlaceholder: 'Contoh: Sarah Connor',
    emailLabel: 'ALAMAT EMAIL *',
    emailPlaceholder: 'nama@emailanda.com',
    messageLabel: 'PESAN / DETAIL PROYEK *',
    messagePlaceholder: 'Tuliskan rincian kebutuhan proyek, tenggat waktu, atau pertanyaan Anda...',
    submitButton: 'KIRIM PESAN',
    successTitle: 'PESAN BERHASIL DIKIRIM!',
    successSubtitle: 'Terima kasih telah menghubungi. Pesan Anda telah diterima dan saya akan membalasnya dalam waktu 24 jam.',
    infoTitle: 'INFORMASI KONTAK',
    emailInbox: 'EMAIL UTAMA',
    timezoneTitle: 'LOKASI',
    timezoneVal: 'Samarinda, Indonesia',
    latencyTitle: 'WAKTU RESPON',
    latencyVal: '< 24 Jam',
    socialTitle: 'PROFIL & MEDIA SOSIAL',
  },
  resume: {
    badge: 'LEMBAR PROFIL KARAKTER',
    title: 'DIMAS FIRMANSYAH // DF.DEV',
    subtitle: 'Pengembang Python & Backend // Spesialis Otomatisasi',
    class: 'KELAS',
    classVal: 'BACKEND',
    mainLang: 'BAHASA UTAMA',
    mainLangVal: 'PYTHON 3',
    mana: 'MANA',
    manaVal: 'UNLIMITED',
    alignment: 'FOKUS',
    alignmentVal: 'BACKEND DEV',
    talentsTitle: 'KEAHLIAN INTI & TECH STACK (WAKATIME)',
    talentsSummary: '- Bahasa Utama: Python 3 (36.0% rekaman coding) - Otomatisasi, API Backend, Data Pipelines.\n- Web & Skrip: JavaScript (ES6+), HTML5 & CSS, Bash / Shell Scripting, PHP / Blade.\n- Tooling & Infrastruktur: Git Version Control, Docker Containers, Dokumentasi Markdown, Linux OS.',
    downloadBtn: 'UNDUH CV (PDF)',
    closeBtn: 'TUTUP',
  },
  terminal: {
    title: 'DF.DEV VIRTUAL TERMINAL (BASH)',
    welcome: [
      'PIXEL_OS v2.4.0 (x86_64-arcade-linux)',
      'Hak Cipta (C) 1994-2024 GLITCH HORIZON Systems.',
      'Ketik "help" atau "bantuan" untuk melihat daftar perintah.',
      '---------------------------------------------------'
    ],
    prompt: 'tamu@df-dev:~$',
    commands: {
      help: 'bantuan',
      about: 'tentang',
      projects: 'proyek',
      skills: 'skill',
      contact: 'kontak',
      matrix: 'matrix',
      clear: 'clear',
      exit: 'exit'
    },
    responses: {
      help: [
        'DAFTAR PERINTAH SISTEM:',
        '  tentang    - Profil dan ringkasan latar belakang pengembang',
        '  proyek     - Daftar proyek dan karya unggulan',
        '  skill      - Inventaris keahlian & data WakaTime',
        '  kontak     - Informasi kontak dan saluran komunikasi',
        '  matrix     - Jalankan efek hujan kode Matrix (cmatrix)',
        '  clear      - Bersihkan layar terminal',
        '  exit       - Tutup jendela terminal'
      ],
      about: [
        '== PROFIL PENGEMBANG ==',
        'Nama: DIMAS FIRMANSYAH (DF.DEV)',
        'Peran: Pengembang Python & Backend Developer',
        'Keahlian: Python Performa Tinggi, API Scalable, Pipeline Otomatisasi, Arsitektur Server',
        'Fokus: Membangun arsitektur server tangguh, API berkinerja tinggi, dan alur kerja data otomatis.'
      ],
      projects: [
        '== DAFTAR PROYEK UNGGULAN ==',
        '1. MYTHOSNOTE        -> [Python, Django, PostgreSQL, Redis, Docker] Sistem Catatan Berbasis AI',
        '2. LIMINAL PDF       -> [Python, FastAPI, React, Docker] Platform Pemrosesan & Konversi PDF',
        '3. FINANCIAL TRACKER -> [Python, Flask, MySQL, Tailwind] Sistem Analitik & Pencatatan Keuangan'
      ],
      skills: [
        '== STATISTIK KEAHLIAN (WAKATIME) ==',
        '► [PYTHON 3]       36.02% | Senjata Utama & Otomatisasi',
        '► [MARKDOWN]       24.59% | Dokumentasi & Arsitektur',
        '► [JAVASCRIPT]     9.46%  | Mesin Antarmuka Web Dinamis',
        '► [HTML / CSS]     6.87%  | Struktur Dokumen & Desain Semantik',
        '► [BASH / SHELL]   4.15%  | Otomatisasi CLI & Server Linux',
        '► [PHP / BLADE]    1.96%  | Server-Side Web Rendering',
        '► [GIT / DOCKER]   HARIAN | Kontrol Versi & Kontainerisasi'
      ],
      contact: [
        '== SALURAN KOMUNIKASI ==',
        'Email:     dimasfirmandev@gmail.com',
        'GitHub:    https://github.com/Dimasbdev',
        'Instagram: https://www.instagram.com/dimmm.f?igsi=MXdqOTZ6OWNxMmtrcQ=='
      ],
      matrix: [
        '01000111 01001100 01010011 01010100 01000011 01001000',
        '01010000 01001001 01011000 01000101 01001100 01010011',
        'SISTEM CYBER SIAP DIGUNAKAN.'
      ],
      cleared: 'Layar telah dibersihkan. Ketik "help" atau "bantuan" untuk opsi.',
      notFound: 'Perintah tidak ditemukan: "{cmd}". Ketik "help" untuk bantuan.'
    }
  },
  footer: {
    tickerItems: [
      '>> STATUS SISTEM: SIAP & OPTIMAL...',
      '>> MASUKKAN KOIN UNTUK MEMULAI',
      '>> ESTETIKA RETRO PIXEL AKTIF',
      '>> PERFORMA 100% LIGHTHOUSE READY',
      '>> PENGEMBANG PYTHON & BACKEND // ONLINE'
    ],
    online: 'Status: ONLINE',
    backToTop: 'Kembali ke Atas',
    craftedWith: 'Dibangun dengan React & Tailwind',
  }
};
