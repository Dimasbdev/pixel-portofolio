import React, { useState } from 'react';
import { playClick, playPowerup } from '../utils/audio';
import { PixelIcon } from './PixelIcon';
import { TechLogo } from './TechLogos';
import { useTranslation } from '../context/LanguageContext';

const INVENTORY_RAW_ITEMS = [
  {
    id: 'python',
    logoId: 'python',
    name: 'Python',
    progressVal: 36.02,
    tools: ['Django', 'FastAPI', 'Flask', 'Requests', 'Pandas', 'PyTest', 'Selenium', 'Automation'],
  },
  {
    id: 'markdown',
    logoId: 'markdown',
    name: 'Markdown',
    progressVal: 24.59,
    tools: ['Technical RFCs', 'GitHub Readmes', 'API Specs', 'Docstrings', 'Obsidian'],
  },
  {
    id: 'javascript',
    logoId: 'javascript',
    name: 'JavaScript',
    progressVal: 9.46,
    tools: ['React', 'ES6+ Standards', 'Node.js', 'Vite', 'Async/Await', 'Zustand', 'Web APIs'],
  },
  {
    id: 'html',
    logoId: 'html',
    name: 'HTML & CSS',
    progressVal: 6.87,
    tools: ['HTML5 Semantics', 'Tailwind CSS', 'Flexbox & Grid', 'Responsive UI', 'Pixel Art Layouts'],
  },
  {
    id: 'bash',
    logoId: 'bash',
    name: 'Bash / Shell',
    progressVal: 4.15,
    tools: ['Linux CLI', 'Shell Scripting', 'Cron Jobs', 'SSH', 'POSIX Utilities', 'Pipelines'],
  },
  {
    id: 'php',
    logoId: 'php',
    name: 'PHP / Blade',
    progressVal: 1.96,
    tools: ['Laravel', 'Blade Engine', 'Composer', 'MVC Patterns', 'PDO / MySQL'],
  },
  {
    id: 'git',
    logoId: 'git',
    name: 'Git Versioning',
    progressVal: 88,
    tools: ['Git CLI', 'GitHub Actions', 'Branching Flow', 'Rebase & Merge', 'Semantic Tags'],
  },
  {
    id: 'docker',
    logoId: 'docker',
    name: 'Docker',
    progressVal: 65,
    tools: ['Dockerfile', 'Docker Compose', 'Multi-Stage Builds', 'Volume Mounts', 'Networks'],
  }
];

export const TechInventory = () => {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState('python');

  const inventoryItems = INVENTORY_RAW_ITEMS.map((raw) => {
    const localized = t.inventory.items[raw.id] || {};
    return {
      ...raw,
      ...localized,
    };
  });

  const selectedItem = inventoryItems.find((item) => item.id === selectedId) || inventoryItems[0];

  const handleSelectItem = (item) => {
    playPowerup();
    setSelectedId(item.id);
  };

  return (
    <section id="inventory" className="flex flex-col gap-8 py-8 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-4 border-primary pb-3">
        <div className="flex items-center gap-3">
          <span className="text-primary animate-bounce">
            <PixelIcon name="backpack" size={28} />
          </span>
          <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl font-bold text-on-surface drop-shadow-[2px_2px_0px_#efdee9] tracking-tight">
            {t.inventory.title}
          </h2>
        </div>
        
        {/* WakaTime Stepped Badge */}
        <div className="filter drop-shadow-[3px_3px_0px_#000] w-fit">
          <div className="pixel-stepped-sm bg-surface-variant px-3 py-1.5 font-silkscreen text-[10px] flex items-center gap-2 border border-black shadow-inner whitespace-nowrap">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00ff66] animate-pulse"></span>
            <span className="font-bold text-on-surface">{t.inventory.wakatimeBadge}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Inventory Bag Grid (Left) */}
        <div className="lg:col-span-7 filter drop-shadow-[6px_6px_0px_#a900a9]">
          <div className="pixel-stepped-card bg-primary p-1">
            <div className="pixel-stepped-card bg-surface p-6 flex flex-col gap-5">
              <div className="flex justify-between items-center border-b-2 border-dashed border-primary pb-3">
                <span className="font-pixel text-[11px] font-bold text-primary flex items-center gap-2">
                  <PixelIcon name="backpack" size={16} />
                  {t.inventory.bagTitle}
                </span>
                <div className="filter drop-shadow-[2px_2px_0px_#000]">
                  <span className="pixel-stepped-sm bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 font-pixel text-[9px] font-bold border border-black inline-block whitespace-nowrap">
                    {t.inventory.topBadge}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {inventoryItems.map((item) => {
                  const isSelected = selectedItem.id === item.id;
                  return (
                    <div key={item.id} className="filter drop-shadow-[3px_3px_0px_#000]">
                      <button
                        onClick={() => handleSelectItem(item)}
                        className={`w-full flex flex-col items-center justify-center p-3 select-none cursor-pointer transition-transform ${
                          isSelected
                            ? 'pixel-btn-arcade-cyan bg-secondary-container text-black scale-[1.03]'
                            : 'pixel-btn-arcade-dark bg-surface-variant text-on-surface hover:bg-surface-container'
                        }`}
                      >
                        <div className={`w-12 h-12 flex items-center justify-center mb-1.5 border-2 ${
                          isSelected ? 'bg-black/90 border-black' : 'bg-surface border-primary/40'
                        }`}>
                          <TechLogo name={item.logoId} size={28} />
                        </div>
                        <span className="font-silkscreen text-[11px] font-bold text-center line-clamp-1">
                          {item.name}
                        </span>
                        <span className="font-pixel text-[8px] opacity-85 font-bold mt-0.5 whitespace-nowrap">
                          {item.wakatimePct}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>

              <p className="font-code-sm text-xs text-on-surface-variant italic bg-surface-container-low p-2.5 border border-primary/40">
                {t.inventory.clickTip}
              </p>
            </div>
          </div>
        </div>

        {/* Selected Item Inspector (Right) with Stepped Pixel Internal Elements */}
        <div className="lg:col-span-5 filter drop-shadow-[6px_6px_0px_#00eefc]">
          <div className="pixel-stepped-card bg-secondary-container p-1">
            <div className="pixel-stepped-card bg-inverse-surface text-surface p-6 flex flex-col gap-4">
              {/* Header Row (Responsive & Collision Free) */}
              <div className="flex items-center justify-between gap-2.5 border-b-2 border-dotted border-secondary-container pb-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-black border-2 border-secondary-container flex items-center justify-center shadow-[2px_2px_0px_#000] flex-shrink-0">
                    <TechLogo name={selectedItem.logoId} size={26} />
                  </div>
                  <div className="min-w-0 flex flex-col gap-1">
                    <h3 className="font-pixel text-sm sm:text-base font-bold text-secondary-fixed truncate leading-none">
                      {selectedItem.name}
                    </h3>
                    <div className="filter drop-shadow-[2px_2px_0px_#000]">
                      <span className="pixel-stepped-sm bg-primary text-white px-2 py-0.5 font-silkscreen text-[8px] sm:text-[9px] font-bold tracking-wider border border-white inline-block whitespace-nowrap">
                        {selectedItem.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="filter drop-shadow-[3px_3px_0px_#000] flex-shrink-0">
                  <span className="pixel-stepped-sm bg-surface-variant text-on-surface-variant font-pixel text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1.5 border border-black inline-block whitespace-nowrap">
                    {selectedItem.wakatimePct}
                  </span>
                </div>
              </div>

              {/* Stepped Pixel WakaTime Share Bar */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between font-silkscreen text-[10px] text-surface-variant">
                  <span>{t.inventory.usageLevel}</span>
                  <span className="text-secondary-container font-bold whitespace-nowrap">{selectedItem.wakatimePct}</span>
                </div>
                <div className="filter drop-shadow-[2px_2px_0px_#000]">
                  <div className="pixel-stepped-sm w-full bg-black/80 h-4 border-2 border-secondary-container overflow-hidden p-0.5">
                    <div 
                      className="bg-gradient-to-r from-[#00eefc] via-[#fae500] to-[#00ff66] h-full transition-all duration-500" 
                      style={{ width: `${Math.max(15, Math.min(100, selectedItem.progressVal * 2.5))}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Stepped Pixel Toolkit Badges */}
              <div className="flex flex-col gap-2 pt-1">
                <span className="font-pixel text-[10px] text-tertiary-fixed font-bold flex items-center gap-1.5">
                  <span className="text-secondary-container font-bold text-xs">►</span>
                  {t.inventory.toolkitTitle}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedItem.tools.map((tool) => (
                    <div key={tool} className="filter drop-shadow-[1px_1px_0px_#000]">
                      <span className="pixel-stepped-sm bg-black/85 text-secondary-fixed border border-secondary-container font-silkscreen text-[9px] px-2 py-1 inline-block whitespace-nowrap">
                        {tool}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stepped Pixel Primary Use Cases Box */}
              <div className="filter drop-shadow-[3px_3px_0px_#000]">
                <div className="pixel-stepped-sm bg-black/70 border-2 border-secondary-container p-3.5 flex flex-col gap-1.5">
                  <span className="font-pixel text-[10px] text-primary-fixed-dim font-bold flex items-center gap-1.5">
                    <span className="text-secondary-container font-bold text-xs">►</span>
                    {t.inventory.useCasesTitle}
                  </span>
                  <p className="font-code-sm text-xs text-surface leading-relaxed">
                    {selectedItem.useCases}
                  </p>
                </div>
              </div>

              {/* Lore Description */}
              <p className="font-code-sm text-xs text-surface-variant/80 italic leading-relaxed border-t border-dashed border-secondary-container/40 pt-2">
                "{selectedItem.description}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
