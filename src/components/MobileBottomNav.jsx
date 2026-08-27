import React from 'react';
import { playClick, playLaser } from '../utils/audio';
import { PixelIcon } from './PixelIcon';
import { useTranslation } from '../context/LanguageContext';

export const MobileBottomNav = ({ activeSection = 'hero', onOpenTerminal }) => {
  const { t } = useTranslation();

  const handleNav = () => {
    playClick();
  };

  const navItems = [
    { id: 'hero', label: t.nav.home, icon: 'home', href: '#hero' },
    { id: 'projects', label: t.nav.projects, icon: 'rocket', href: '#projects' },
    { id: 'tech-stack', label: t.nav.inventory, icon: 'backpack', href: '#tech-stack' },
    { id: 'cli', label: t.nav.cli, icon: 'terminal', isAction: true },
    { id: 'contact', label: t.nav.contact, icon: 'mail', href: '#contact' },
  ];

  return (
    <nav className="md:hidden bg-surface-container-highest/95 backdrop-blur-lg fixed bottom-0 left-0 w-full z-40 border-t-4 border-black shadow-[0px_-4px_0px_0px_#a900a9] px-2 py-2 flex items-center justify-center">
      <div className="grid grid-cols-5 gap-1.5 w-full max-w-md mx-auto items-stretch">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          
          if (item.isAction) {
            return (
              <div key={item.id} className="filter drop-shadow-[2px_2px_0px_#000] flex">
                <button
                  onClick={() => {
                    playLaser();
                    onOpenTerminal();
                  }}
                  className="w-full h-14 pixel-btn-arcade-dark bg-surface-variant hover:bg-surface-container text-on-surface flex flex-col items-center justify-center p-1 transition-transform select-none cursor-pointer"
                >
                  <PixelIcon name={item.icon} size={16} />
                  <span className="font-code-sm text-[8px] sm:text-[9px] font-bold uppercase tracking-tight truncate mt-1 text-center w-full">
                    {item.label}
                  </span>
                </button>
              </div>
            );
          }

          return (
            <div key={item.id} className="filter drop-shadow-[2px_2px_0px_#000] flex">
              <a
                href={item.href}
                onClick={handleNav}
                className={`w-full h-14 flex flex-col items-center justify-center p-1 transition-transform select-none cursor-pointer ${
                  isActive
                    ? 'pixel-btn-arcade-primary bg-primary text-white font-bold'
                    : 'pixel-btn-arcade-dark bg-surface-variant text-on-surface hover:bg-surface-container'
                }`}
              >
                <PixelIcon name={item.icon} size={16} />
                <span className="font-code-sm text-[8px] sm:text-[9px] font-bold uppercase tracking-tight truncate mt-1 text-center w-full">
                  {item.label}
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
};
