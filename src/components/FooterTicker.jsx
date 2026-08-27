import React from 'react';
import { playClick } from '../utils/audio';
import { useTranslation } from '../context/LanguageContext';

const CURRENT_YEAR = new Date().getFullYear();

export const FooterTicker = React.memo(() => {
  const { t } = useTranslation();

  const handleBackToTop = (e) => {
    e.preventDefault();
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-inverse-surface text-white border-t-4 border-black w-full pt-6 pb-28 md:pb-6 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-16 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        {/* Copyright - Responsive Wrap for Small Mobile Screens */}
        <div className="text-secondary-fixed font-pixel text-[9px] sm:text-xs leading-relaxed max-w-full">
          <div>(C) {CURRENT_YEAR} DIMAS FIRMANSYAH</div>
        </div>

        {/* Back to Top Action */}
        <div className="filter drop-shadow-[2px_2px_0px_#000]">
          <a
            href="#hero"
            onClick={handleBackToTop}
            className="pixel-btn-arcade-dark bg-surface-variant hover:bg-secondary-container hover:text-black text-on-surface font-silkscreen text-xs font-bold px-4 py-2 flex items-center gap-2 select-none transition-colors border-2 border-black"
          >
            <span>▲</span>
            <span>{t.footer.backToTop}</span>
          </a>
        </div>
      </div>
    </footer>
  );
});
