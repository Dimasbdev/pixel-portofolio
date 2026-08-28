import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { playClick, playCoin, playPowerup } from '../utils/audio';
import { PixelIcon } from './PixelIcon';
import { useTranslation } from '../context/LanguageContext';

const PROJECT_IMAGES = {
  'mythosnote': {
    image: '/projects/mythosnote.webp',
    imageAlt: 'MythosNote AI-Powered Note Taking System Dashboard',
    demoUrl: null,
    githubUrl: 'https://github.com/Dimasbdev/MythosNote',
  },
  'liminal-pdf': {
    image: '/projects/liminal-pdf.webp',
    imageAlt: 'Liminal PDF Document Processing Web App',
    demoUrl: 'https://witty-cliff-0c6c41900.7.azurestaticapps.net/',
    githubUrl: 'https://github.com/Dimasbdev/Liminal-PDF',
  },
  'financial-tracker': {
    image: '/projects/financial-tracker.webp',
    imageAlt: 'Financial Tracker Analytics & Transaction Dashboard',
    demoUrl: null,
    githubUrl: 'https://github.com/Dimasbdev/sistem-pencatatan-keuangan',
  }
};

export const Projects = () => {
  const { t } = useTranslation();
  const [selectedCategoryKey, setSelectedCategoryKey] = useState('all');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const categories = [
    { key: 'all', label: t.projects.categories.all },
    { key: 'web', label: t.projects.categories.web },
    { key: 'tools', label: t.projects.categories.tools },
  ];

  const projectItems = t.projects.items.map((p) => ({
    ...p,
    ...PROJECT_IMAGES[p.id],
  }));

  const filteredProjects = selectedCategoryKey === 'all'
    ? projectItems
    : projectItems.filter(p => {
        if (selectedCategoryKey === 'web') return p.category === t.projects.categories.web;
        if (selectedCategoryKey === 'tools') return p.category === t.projects.categories.tools;
        return true;
      });

  const selectedProject = projectItems.find((p) => p.id === selectedProjectId);

  const handleSelectCategory = (key) => {
    playClick();
    setSelectedCategoryKey(key);
  };

  const handleOpenProject = (project) => {
    playPowerup();
    setSelectedProjectId(project.id);
  };

  const handleCloseModal = () => {
    playClick();
    setSelectedProjectId(null);
  };

  return (
    <section id="projects" className="flex flex-col gap-8 py-8 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-4 border-primary pb-3">
        <div className="flex items-center gap-3">
          <span className="text-primary animate-pulse">
            <PixelIcon name="rocket" size={28} />
          </span>
          <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl font-bold text-on-surface drop-shadow-[2px_2px_0px_#efdee9] tracking-tight">
            {t.projects.title}
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <div key={cat.key} className="filter drop-shadow-[3px_3px_0px_#000]">
              <button
                onClick={() => handleSelectCategory(cat.key)}
                className={`font-code-sm text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 cursor-pointer select-none transition-transform ${
                  selectedCategoryKey === cat.key
                    ? 'pixel-btn-arcade-primary bg-primary text-white'
                    : 'pixel-btn-arcade-dark bg-surface-variant text-on-surface hover:bg-surface-container'
                }`}
              >
                {cat.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Grid with Uniform Height */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenProject(project)}
            className="filter drop-shadow-[5px_5px_0px_#a900a9] hover:drop-shadow-[7px_7px_0px_#00eefc] hover:-translate-y-2 transition-all duration-300 cursor-pointer select-none group h-full flex flex-col"
          >
            <div className="pixel-stepped-card bg-primary p-1 h-full flex flex-col flex-1">
              <article className="pixel-stepped-card bg-surface flex flex-col overflow-hidden h-full flex-1">
                {/* Project Thumbnail with Real Screenshot */}
                <div className="h-48 sm:h-52 bg-surface-variant border-b-4 border-dotted border-primary flex justify-center items-center relative overflow-hidden flex-shrink-0">
                  <img
                    alt={project.imageAlt}
                    src={project.image}
                    width={400}
                    height={208}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                    <span className="bg-black/85 text-secondary-container font-code-sm font-bold text-[11px] uppercase tracking-wider px-3 py-1.5 border-2 border-secondary-container shadow-[2px_2px_0px_#000]">
                      {t.projects.inspect}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1 justify-between bg-surface">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-pixel text-sm sm:text-base leading-snug font-bold text-on-surface group-hover:text-primary transition-colors min-h-[44px] sm:min-h-[50px] flex items-center">
                      {project.title}
                    </h3>
                    <p className="font-code-sm text-xs text-on-surface-variant line-clamp-2 leading-relaxed min-h-[36px]">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t-2 border-dashed border-primary/30 mt-auto min-h-[58px] content-start">
                    {project.tags.map((tag) => (
                      <div key={tag} className="filter drop-shadow-[1.5px_1.5px_0px_#000000]">
                        <span className="pixel-stepped-sm bg-tertiary-fixed text-on-tertiary-fixed font-code-sm text-[9px] sm:text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 border border-black inline-block">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal mounted via React Portal to document.body */}
      {selectedProject && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={handleCloseModal}
        >
          <div className="filter drop-shadow-[4px_4px_0px_#00eefc] sm:drop-shadow-[8px_8px_0px_#00eefc] max-w-lg w-full max-h-[88vh] overflow-y-auto my-auto">
            <div className="pixel-stepped-card bg-primary p-1 sm:p-1.5">
              <div 
                className="pixel-stepped-card bg-surface p-4 sm:p-6 relative flex flex-col gap-3.5 sm:gap-4 animate-in fade-in zoom-in-95 duration-150"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 filter drop-shadow-[2px_2px_0px_#000]">
                  <button
                    onClick={handleCloseModal}
                    className="pixel-btn-arcade-danger bg-error text-white w-8 h-8 flex items-center justify-center font-bold font-pixel text-xs cursor-pointer select-none"
                  >
                    {t.projects.close}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-primary font-code-sm text-xs font-bold uppercase tracking-wider pr-10">
                  <span className="text-primary-container">►</span>
                  <span>{selectedProject.category}</span>
                </div>

                <h3 className="font-pixel text-base sm:text-lg md:text-xl font-bold text-on-surface">
                  {selectedProject.title}
                </h3>

                <div className="h-44 sm:h-52 bg-surface-variant border-2 border-dotted border-primary flex items-center justify-center overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <p className="font-code-sm text-xs sm:text-sm text-on-surface leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="bg-surface-variant/80 p-3 border-2 border-primary">
                  <span className="font-code-sm text-[11px] font-bold text-primary uppercase tracking-wider block mb-1">
                    {t.projects.summaryTitle}
                  </span>
                  <p className="font-code-sm text-xs text-on-surface-variant leading-relaxed">
                    {selectedProject.details}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <div key={tag} className="filter drop-shadow-[2px_2px_0px_#000000]">
                      <span className="pixel-stepped-sm bg-tertiary-fixed text-on-tertiary-fixed font-code-sm text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 border border-black inline-block">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Modal Action Buttons */}
                <div className="flex gap-2.5 sm:gap-3 pt-2">
                  {selectedProject.demoUrl && (
                    <div className="flex-1 filter drop-shadow-[3px_3px_0px_#000]">
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => playCoin()}
                        className="w-full block pixel-btn-arcade-primary bg-primary text-white text-center font-code-sm text-xs font-bold uppercase tracking-wider py-2.5 sm:py-3 select-none hover:bg-primary-container transition-colors"
                      >
                        {t.projects.openDemo}
                      </a>
                    </div>
                  )}
                  <div className="flex-1 filter drop-shadow-[3px_3px_0px_#000]">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => playClick()}
                      className="w-full block pixel-btn-arcade-dark bg-white hover:bg-secondary-container hover:text-black text-black text-center font-code-sm text-xs font-bold uppercase tracking-wider py-2.5 sm:py-3 select-none border-2 border-black transition-colors"
                    >
                      {t.projects.viewCode}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};
