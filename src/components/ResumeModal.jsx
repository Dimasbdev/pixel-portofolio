import React from 'react';
import { playClick, playCoin } from '../utils/audio';
import { PixelIcon } from './PixelIcon';
import { useTranslation } from '../context/LanguageContext';
import { triggerConfetti } from '../utils/confetti';

export const ResumeModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  const handleDownload = () => {
    playCoin();
    triggerConfetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#a900a9', '#00eefc', '#fae500']
    });
    alert('Simulating Resume PDF Download for Dimas Firmansyah (You can link your PDF file)');
  };

  return (
    <div 
      className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="filter drop-shadow-[8px_8px_0px_#a900a9] max-w-2xl w-full">
        {/* Stepped Pixel Outer Card */}
        <div className="pixel-stepped-card bg-primary p-1.5">
          <div 
            className="pixel-stepped-card bg-surface p-6 max-h-[85vh] overflow-y-auto relative flex flex-col gap-5 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="absolute top-4 right-4 filter drop-shadow-[2px_2px_0px_#000]">
              <button
                onClick={onClose}
                className="pixel-btn-arcade-danger bg-error text-white w-8 h-8 flex items-center justify-center font-pixel text-xs font-bold cursor-pointer select-none"
              >
                X
              </button>
            </div>

            {/* Profile Header */}
            <div className="border-b-4 border-primary pb-3">
              <span className="font-silkscreen text-xs font-bold text-primary flex items-center gap-1.5">
                <PixelIcon name="badge" size={14} />
                {t.resume.badge}
              </span>
              <h2 className="font-pixel text-lg sm:text-xl font-bold text-on-surface mt-1.5">
                {t.resume.title}
              </h2>
              <p className="font-code-sm text-xs text-on-surface-variant font-bold mt-1">
                {t.resume.subtitle}
              </p>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-surface-variant/90 p-4 border-2 border-primary shadow-[3px_3px_0px_#000]">
              <div>
                <span className="font-silkscreen text-[9px] text-on-surface-variant block">{t.resume.class}</span>
                <span className="font-pixel text-xs font-bold text-primary">{t.resume.classVal}</span>
              </div>
              <div>
                <span className="font-silkscreen text-[9px] text-on-surface-variant block">{t.resume.mainLang}</span>
                <span className="font-pixel text-xs font-bold text-[#006970]">{t.resume.mainLangVal}</span>
              </div>
              <div>
                <span className="font-silkscreen text-[9px] text-on-surface-variant block">{t.resume.mana}</span>
                <span className="font-pixel text-xs font-bold text-[#695f00]">{t.resume.manaVal}</span>
              </div>
              <div>
                <span className="font-silkscreen text-[9px] text-on-surface-variant block">{t.resume.alignment}</span>
                <span className="font-pixel text-xs font-bold text-primary">{t.resume.alignmentVal}</span>
              </div>
            </div>

            {/* Talents Summary */}
            <div className="flex flex-col gap-3 font-code-sm text-xs text-on-surface">
              <h3 className="font-pixel text-xs font-bold text-primary border-b-2 border-primary pb-1">
                {t.resume.talentsTitle}
              </h3>
              <p className="leading-relaxed whitespace-pre-line">
                {t.resume.talentsSummary}
              </p>
            </div>

            {/* Modal Actions */}
            <div className="flex gap-3 pt-2">
              <div className="flex-1 filter drop-shadow-[4px_4px_0px_#000]">
                <button
                  onClick={handleDownload}
                  className="w-full pixel-btn-arcade-primary bg-primary hover:bg-primary-container text-white font-pixel text-[10px] py-4 flex items-center justify-center gap-2 cursor-pointer select-none"
                >
                  <PixelIcon name="scroll" size={14} />
                  {t.resume.downloadBtn}
                </button>
              </div>
              <div className="filter drop-shadow-[3px_3px_0px_#000]">
                <button
                  onClick={onClose}
                  className="pixel-btn-arcade-dark bg-surface-variant hover:bg-surface-container text-on-surface font-pixel text-[10px] py-4 px-6 cursor-pointer select-none"
                >
                  {t.resume.closeBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
