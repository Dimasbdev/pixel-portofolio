import React, { useState, useEffect, useRef } from 'react';
import { playClick, playLaser } from '../utils/audio';
import { PixelIcon } from './PixelIcon';
import { useTranslation } from '../context/LanguageContext';

export const Header = ({ activeSection = 'hero', onOpenTerminal, soundEnabled, onToggleSound, crtEnabled, onToggleCrt }) => {
  const { lang, toggleLang, t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show when near the top
      if (currentScrollY < 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        // Scrolling DOWN -> Hide Header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling UP -> Show Header
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: t.nav.home, href: '#hero' },
    { id: 'projects', label: t.nav.projects, href: '#projects' },
    { id: 'tech-stack', label: t.nav.inventory, href: '#tech-stack' },
    // { id: 'experience', label: t.nav.experience, href: '#experience' }, // [UNCOMMENT TO RESTORE QUEST LOG LINK]
    { id: 'contact', label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className={`bg-surface/90 backdrop-blur-md relative md:fixed md:top-0 md:left-0 md:right-0 z-40 w-full border-b-4 border-black shadow-[0px_4px_0px_0px_#a900a9] px-4 md:px-16 py-3 transition-transform duration-300 ease-in-out ${
      isVisible ? 'md:translate-y-0' : 'md:-translate-y-full'
    }`}>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#"
          onClick={() => playClick()}
          className="font-pixel text-lg md:text-2xl font-bold text-primary hover:scale-105 transition-transform drop-shadow-[3px_3px_0px_#00eefc] tracking-tight cursor-pointer select-none"
        >
          DF.DEV
        </a>

        {/* Desktop Navigation with Active Scroll Highlight */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => playClick()}
                className={`font-pixel text-[11px] transition-all uppercase tracking-wider ${
                  isActive
                    ? 'text-primary font-bold border-b-2 border-primary drop-shadow-[2px_2px_0px_#00eefc] -translate-y-0.5'
                    : 'text-on-surface-variant hover:text-primary hover:-translate-y-0.5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: 8-Bit Pixel Arcade Style */}
        <div className="flex gap-2.5 items-center">
          {/* Language Toggle Button (EN / ID) */}
          <div className="filter drop-shadow-[3px_3px_0px_#000]">
            <button
              onClick={toggleLang}
              title={t.header.langSwitch}
              aria-label="Toggle Language"
              className="pixel-btn-arcade-cyan bg-secondary-container text-black font-silkscreen font-bold text-[11px] h-10 px-3 flex items-center justify-center cursor-pointer select-none transition-transform"
            >
              {lang === 'en' ? 'EN / ID' : 'ID / EN'}
            </button>
          </div>

          {/* Sound Toggle */}
          <div className="filter drop-shadow-[3px_3px_0px_#000]">
            <button
              onClick={() => {
                onToggleSound();
                playClick();
              }}
              title={t.header.toggleSound}
              aria-label="Toggle Sound Effects"
              className={`pixel-btn-arcade-dark h-10 w-10 flex items-center justify-center cursor-pointer select-none transition-transform ${
                soundEnabled 
                  ? 'bg-surface-variant text-on-surface' 
                  : 'bg-surface-container-high text-on-surface-variant/50 line-through opacity-60'
              }`}
            >
              <PixelIcon name={soundEnabled ? 'volume' : 'volume-x'} size={18} />
            </button>
          </div>

          {/* CRT Scanline Toggle */}
          <div className="filter drop-shadow-[3px_3px_0px_#000]">
            <button
              onClick={() => {
                onToggleCrt();
                playClick();
              }}
              title={t.header.toggleCrt}
              aria-label="Toggle CRT Scanline Effect"
              className={`pixel-btn-arcade-dark h-10 w-10 flex items-center justify-center cursor-pointer select-none transition-transform ${
                crtEnabled 
                  ? 'bg-secondary-container text-black font-bold' 
                  : 'bg-surface-variant text-on-surface'
              }`}
            >
              <PixelIcon name="tv" size={18} />
            </button>
          </div>

          {/* Terminal CLI Button */}
          <div className="filter drop-shadow-[3px_3px_0px_#000]">
            <button
              onClick={() => {
                playLaser();
                onOpenTerminal();
              }}
              title={t.header.openTerminal}
              aria-label="Open Terminal CLI"
              className="pixel-btn-arcade-primary bg-primary hover:bg-primary-container text-white font-pixel text-xs h-10 px-3 flex items-center gap-2 cursor-pointer select-none transition-transform"
            >
              <PixelIcon name="terminal" size={16} />
              <span className="hidden lg:inline">{t.nav.cli}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
