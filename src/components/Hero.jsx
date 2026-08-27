import React, { useState } from 'react';
import { playClick, playCoin, playLaser, playPowerup } from '../utils/audio';
import { PixelIcon } from './PixelIcon';
import { useTranslation } from '../context/LanguageContext';

const HERO_IMAGE = "/hero-pixel.webp";

// Lazy trigger for confetti to remove canvas-confetti from critical initial bundle
const triggerConfetti = async (opts) => {
  try {
    const confetti = (await import('canvas-confetti')).default;
    confetti(opts);
  } catch (e) {}
};

export const Hero = ({ onStartGame, onOpenResume }) => {
  const { t } = useTranslation();
  const [clickCount, setClickCount] = useState(0);
  const [bonusText, setBonusText] = useState('');

  const handlePokeArt = (e) => {
    playPowerup();
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount % 5 === 0) {
      playCoin();
      triggerConfetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
      setBonusText(t.hero.comboText.replace('{count}', newCount));
      setTimeout(() => setBonusText(''), 2500);
    }
  };

  const handleStartGame = () => {
    playLaser();
    triggerConfetti({
      particleCount: 70,
      spread: 70,
      colors: ['#a900a9', '#00eefc', '#fae500', '#ffffff'],
    });
    onStartGame();
  };

  return (
    <section id="hero" className="flex flex-col md:flex-row items-center justify-between gap-10 pt-4 pb-2 w-full max-w-full">
      {/* Left Column: Hero Copy & Actions */}
      <div className="flex-1 flex flex-col gap-5 z-10 w-full max-w-full">
        <div className="inline-flex items-center gap-2 bg-surface-variant/90 border-2 border-black px-3 py-1.5 w-fit shadow-[3px_3px_0px_#000]">
          <span className="inline-block w-2.5 h-2.5 bg-[#00eefc] animate-ping"></span>
          <span className="font-pixel text-[10px] font-bold text-on-surface-variant">
            {t.hero.statusBadge}
          </span>
        </div>

        <h1 className="font-pixel text-2xl sm:text-4xl md:text-5xl font-bold text-primary leading-[1.3] tracking-tight drop-shadow-[3px_3px_0px_#00eefc] sm:drop-shadow-[4px_4px_0px_#00eefc] break-words">
          {t.hero.titleLine1}<br />{t.hero.titleLine2}
        </h1>

        <p className="font-code-sm text-xs sm:text-sm bg-surface-variant/90 inline-block p-3.5 border-2 border-primary w-fit text-on-surface-variant shadow-[3px_3px_0px_rgba(0,0,0,0.15)] leading-relaxed">
          {t.hero.bio}
        </p>

        {/* Action Buttons: Authentic 8-Bit Pixel Arcade Style */}
        <div className="flex flex-wrap gap-4 mt-1">
          {/* START Button */}
          <div className="filter drop-shadow-[4px_4px_0px_#000000]">
            <button 
              onClick={handleStartGame}
              className="pixel-btn-arcade-primary bg-primary hover:bg-primary-container text-white font-pixel text-[11px] px-6 py-4 flex items-center gap-2.5 cursor-pointer select-none transition-transform"
            >
              <PixelIcon name="play" size={14} />
              {t.hero.startGame}
            </button>
          </div>

          {/* RESUME Button - [UNCOMMENT WHEN CV IS READY] */}
          {/* 
          <div className="filter drop-shadow-[4px_4px_0px_#00eefc]">
            <button 
              onClick={() => onOpenResume()}
              className="pixel-btn-arcade-cyan bg-surface hover:bg-surface-variant text-primary font-pixel text-[11px] px-6 py-4 flex items-center gap-2.5 cursor-pointer select-none transition-transform"
            >
              <PixelIcon name="scroll" size={16} />
              {t.hero.resume}
            </button>
          </div>
          */}
        </div>
      </div>

      {/* Right Column: Hero Pixel Art Frame */}
      <div className="flex-1 relative flex justify-center items-center w-full max-w-lg select-none px-4 sm:px-6 py-8">
        <div className="relative w-full max-w-[290px] sm:max-w-md flex justify-center">
          {/* Floating bonus XP message */}
          {bonusText && (
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-tertiary-fixed text-on-tertiary-fixed font-pixel text-[9px] sm:text-[11px] px-3 py-1.5 border-2 border-black shadow-[3px_3px_0px_#000] animate-bounce z-40 whitespace-nowrap">
              {bonusText}
            </div>
          )}

          {/* Top-Right: 8-Bit Pixelated Yellow Sun (Fully Visible) */}
          <div className="absolute -top-7 -right-5 sm:-top-8 sm:-right-6 z-0 select-none pointer-events-none">
            <svg width="74" height="74" viewBox="0 0 20 20" shapeRendering="crispEdges">
              <path d="M6 1h8v1h2v2h2v2h1v8h-1v2h-2v2h-2v1H6v-1H4v-2H2v-2H1V6h1V4h2V2h2V1z" fill="#000000" />
              <path d="M6 3h8v1h2v2h1v8h-1v2h-2v1H6v-1H4v-2H3V6h1V4h2V3z" fill="#fae500" />
            </svg>
          </div>

          {/* Bottom-Left: Pixelated Cyan Box */}
          <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-5 w-28 sm:w-32 h-7 sm:h-8 bg-secondary-container border-2 sm:border-4 border-black shadow-[3px_3px_0px_#000] z-0 select-none pointer-events-none"></div>

          {/* Framed Pixel Art Card */}
          <div 
            onClick={handlePokeArt}
            title={t.hero.artHover}
            className="w-full bg-white p-2 sm:p-2.5 border-4 border-white rotate-2 sm:rotate-3 hover:rotate-0 hover:scale-[1.02] transition-all duration-300 z-10 relative cursor-pointer group select-none shadow-[4px_4px_0px_0px_#a900a9] sm:shadow-[6px_6px_0px_0px_#a900a9]"
          >
            <div className="overflow-hidden relative">
              <img 
                alt={t.hero.artAlt} 
                className="w-full h-auto object-cover pixelated group-hover:scale-105 transition-transform duration-500" 
                src={HERO_IMAGE}
                width={400}
                height={400}
                loading="eager"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-black/85 text-secondary-fixed font-pixel text-[9px] sm:text-[10px] px-2.5 py-1.5 border-2 border-secondary-container shadow-[2px_2px_0px_#000]">
                  {t.hero.artHover}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
