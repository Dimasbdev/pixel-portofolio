import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { TechInventory } from './components/TechInventory';
// import { ExperienceTimeline } from './components/ExperienceTimeline'; // [UNCOMMENT TO RESTORE QUEST LOG]
import { ContactSection } from './components/ContactSection';
import { FooterTicker } from './components/FooterTicker';
import { MobileBottomNav } from './components/MobileBottomNav';
const TerminalModal = React.lazy(() => import('./components/TerminalModal'));
// import { ResumeModal } from './components/ResumeModal'; // [UNCOMMENT TO RESTORE RESUME MODAL]
import { getSoundEnabled, setSoundEnabled } from './utils/audio';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(true);
  const [crtActive, setCrtActive] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setSoundActive(getSoundEnabled());
  }, []);

  // Automatic Active Section Scrollspy
  useEffect(() => {
    // [ADD 'experience' BACK TO ARRAY WHEN UNCOMMENTING QUEST LOG]
    const sections = ['hero', 'projects', 'tech-stack', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220; // Offset for header detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundActive;
    setSoundActive(next);
    setSoundEnabled(next);
  };

  const toggleCrt = () => {
    setCrtActive(prev => !prev);
  };

  return (
    <div className={`min-h-screen flex flex-col w-full max-w-full overflow-x-hidden bg-gradient-to-b from-[#d5dbe4] via-[#c6ceda] to-[#a8b3c4] text-on-surface font-body-md ${crtActive ? 'crt-overlay' : ''}`}>
      {/* Top App Bar */}
      <Header
        activeSection={activeSection}
        onOpenTerminal={() => setTerminalOpen(true)}
        soundEnabled={soundActive}
        onToggleSound={toggleSound}
        crtEnabled={crtActive}
        onToggleCrt={toggleCrt}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-16 py-8 md:pt-24 flex flex-col gap-16">
        <Hero
          onStartGame={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />

        <Projects />

        <TechInventory />

        {/* QUEST LOG / EXPERIENCE TIMELINE - UNCOMMENT WHEN READY */}
        {/* <ExperienceTimeline /> */}

        <ContactSection />
      </main>

      {/* Footer with Marquee */}
      <FooterTicker />

      {/* Mobile Bottom Navigation with Auto Scrollspy */}
      <MobileBottomNav 
        activeSection={activeSection} 
        onOpenTerminal={() => setTerminalOpen(true)} 
      />

      {/* Modals */}
      {terminalOpen && (
        <React.Suspense fallback={
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="text-white font-pixel text-xs animate-pulse">LOADING TERMINAL...</div>
          </div>
        }>
          <TerminalModal
            isOpen={terminalOpen}
            onClose={() => setTerminalOpen(false)}
          />
        </React.Suspense>
      )}

      {/* RESUME MODAL - UNCOMMENT WHEN READY */}
      {/* 
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      /> 
      */}
    </div>
  );
}
