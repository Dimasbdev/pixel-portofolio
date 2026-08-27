import React from 'react';
import { playClick } from '../utils/audio';
import { PixelIcon } from './PixelIcon';

const ADVENTURES = [
  {
    period: '2024 — SEKARANG',
    role: 'Senior Python & Fullstack Engineer',
    guild: 'CyberTech Global',
    status: 'AKTIF',
    iconName: 'badge',
    highlights: [
      'Merancang pipeline otomatisasi Python terdistribusi dan layanan mikro FastAPI asinkron',
      'Mengoptimalkan throughput pemrosesan data real-time hingga meningkat 50%',
      'Membimbing tim pengembang dalam penerapan arsitektur bersih, type safety, dan pengujian otomatis'
    ]
  },
  {
    period: '2022 — 2024',
    role: 'Fullstack Web Engineer',
    guild: 'PixelWave Studios',
    status: 'SELESAI',
    iconName: 'sword',
    highlights: [
      'Membangun aplikasi web berperforma tinggi dan alat internal menggunakan Python, JavaScript, dan Tailwind',
      'Mengembangkan web scraper otomatis, skrip ekstraksi data, dan API RESTful backend',
      'Mendesain sistem desain UI responsif dengan latensi render sub-50ms'
    ]
  },
  {
    period: '2020 — 2022',
    role: 'Software Developer',
    guild: 'NeonLab Interactive',
    status: 'SELESAI',
    iconName: 'shield',
    highlights: [
      'Membangun dan mengelola layanan backend, skema database, dan portal klien',
      'Menulis alur kerja deployment Linux bash otomatis dan kontainerisasi Docker',
      'Mencapai skor 100/100 Google Lighthouse dan Core Web Vitals pada aplikasi utama'
    ]
  },
  {
    period: '2018 — 2020',
    role: 'Junior Creative Dev',
    guild: 'RetroByte Labs',
    status: 'SELESAI',
    iconName: 'scroll',
    highlights: [
      'Menulis skrip otomatisasi, utilitas command line, dan komponen interaktif',
      'Berkolaborasi dalam dokumentasi open source dan refaktor skrip legasi ke standar modern'
    ]
  }
];

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className="flex flex-col gap-8 py-8 scroll-mt-24">
      {/* Header */}
      <div className="flex items-center gap-3 border-b-4 border-primary pb-3">
        <span className="text-primary">
          <PixelIcon name="scroll" size={28} />
        </span>
        <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl font-bold text-on-surface drop-shadow-[2px_2px_0px_#efdee9] tracking-tight">
          PENGALAMAN &amp; KARIER
        </h2>
      </div>

      {/* Daftar Timeline */}
      <div className="relative flex flex-col gap-8 pl-4 md:pl-8 border-l-4 border-primary border-dashed ml-2 md:ml-4">
        {ADVENTURES.map((quest, index) => (
          <div 
            key={index}
            className="relative filter drop-shadow-[5px_5px_0px_#a900a9] hover:drop-shadow-[7px_7px_0px_#00eefc] hover:-translate-y-1 transition-all duration-200"
          >
            {/* Kartu Stepped Pixel */}
            <div className="pixel-stepped-card bg-primary p-1">
              <div className="pixel-stepped-card bg-surface p-6">
                {/* Penanda Titik Timeline */}
                <div className="absolute -left-[27px] md:-left-[43px] top-6 w-8 h-8 bg-secondary-container border-4 border-black flex items-center justify-center shadow-[3px_3px_0px_#000]">
                  <PixelIcon name={quest.iconName} size={16} />
                </div>

                {/* Header Petualangan */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b-2 border-dashed border-primary pb-3">
                  <div>
                    <span className="font-silkscreen text-xs font-bold text-primary block">
                      {quest.period}
                    </span>
                    <h3 className="font-pixel text-sm sm:text-base font-bold text-on-surface mt-1">
                      {quest.role} <span className="text-[#006970]">@ {quest.guild}</span>
                    </h3>
                  </div>
                  <span className="font-silkscreen text-[10px] bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 border-2 border-secondary-container font-bold w-fit shadow-[2px_2px_0px_#000]">
                    {quest.status}
                  </span>
                </div>

                {/* Daftar Pencapaian */}
                <ul className="mt-4 flex flex-col gap-2">
                  {quest.highlights.map((item, i) => (
                    <li key={i} className="font-code-sm text-xs sm:text-sm text-on-surface-variant flex items-start gap-2">
                      <span className="text-primary font-bold">►</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
