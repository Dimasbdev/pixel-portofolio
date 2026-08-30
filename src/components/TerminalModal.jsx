import React, { useState, useEffect, useRef } from 'react';
import { playClick, playLaser, playCoin } from '../utils/audio';
import { useTranslation } from '../context/LanguageContext';

export const TerminalModal = ({ isOpen, onClose }) => {
  const { lang, t } = useTranslation();
  const [logs, setLogs] = useState(() => t.terminal.welcome);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMatrixActive, setIsMatrixActive] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    setLogs(t.terminal.welcome);
  }, [t]);

  useEffect(() => {
    if (isOpen) {
      setInput('');
      // Only auto-focus on desktop to prevent mobile keyboard from popping up and hiding confetti
      if (window.innerWidth > 768) {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }
    } else {
      setInput('');
      setIsMatrixActive(false);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // CMATRIX Live Animated Canvas Engine
  useEffect(() => {
    if (!isMatrixActive) return;

    const timer = setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      const characters = 'ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ1234567890ABCDEF@#$%&*+-=<>{}[]';
      const fontSize = 14;

      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width || 600;
      canvas.height = rect.height || 420;

      const columns = Math.floor(canvas.width / fontSize);
      const drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -30));

      // Initial solid fill
      ctx.fillStyle = '#0a0610';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      let lastFrameTime = 0;
      const frameInterval = 1000 / 30; // 30 FPS cap

      const draw = (timestamp) => {
        if (timestamp - lastFrameTime >= frameInterval) {
          // Semi-transparent overlay creates smooth fading phosphor rain
          ctx.fillStyle = 'rgba(10, 6, 16, 0.1)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

          for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            // Leading character is bright white, tail is matrix phosphor green
            if (Math.random() > 0.85) {
              ctx.fillStyle = '#ffffff';
              ctx.shadowColor = '#00ff66';
              ctx.shadowBlur = 8;
            } else {
              ctx.fillStyle = '#00ff41';
              ctx.shadowColor = 'transparent';
              ctx.shadowBlur = 0;
            }

            ctx.fillText(text, x, y);

            if (y > canvas.height && Math.random() > 0.975) {
              drops[i] = 0;
            }

            drops[i]++;
          }

          lastFrameTime = timestamp;
        }

        animationFrameRef.current = requestAnimationFrame(draw);
      };

      animationFrameRef.current = requestAnimationFrame(draw);
    }, 20);

    // Cooldown prevents initial Enter key from immediately exiting matrix
    const mountTime = Date.now();
    const handleKeyDown = (e) => {
      if (Date.now() - mountTime < 300) return;

      if (e.key === 'q' || e.key === 'Q' || e.key === 'Escape' || e.key === 'Enter' || e.key === ' ' || (e.ctrlKey && e.key === 'c')) {
        e.preventDefault();
        exitMatrix();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMatrixActive]);

  if (!isOpen) return null;

  const exitMatrix = () => {
    playClick();
    setIsMatrixActive(false);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmed = input.trim().toLowerCase();
      if (!trimmed) return;

      playClick();
      setHistory(prev => [...prev, input]);
      setHistoryIndex(-1);

      const newLogs = [...logs, `> ${input}`];

      switch (trimmed) {
        case 'help':
        case 'bantuan':
          newLogs.push(...t.terminal.responses.help);
          break;
        case 'about':
        case 'tentang':
          newLogs.push(...t.terminal.responses.about);
          break;
        case 'quests':
        case 'projects':
        case 'proyek':
          newLogs.push(...t.terminal.responses.projects);
          break;
        case 'skills':
        case 'skill':
          newLogs.push(...t.terminal.responses.skills);
          break;
        case 'contact':
        case 'kontak':
          playCoin();
          newLogs.push(...t.terminal.responses.contact);
          break;
        case 'matrix':
        case 'cmatrix':
          playLaser();
          setIsMatrixActive(true);
          setInput('');
          return;
        case 'clear':
        case 'cls':
          setLogs([t.terminal.responses.cleared]);
          setInput('');
          return;
        case 'exit':
        case 'quit':
        case 'keluar':
          setInput('');
          onClose();
          return;
        default:
          newLogs.push(t.terminal.responses.notFound.replace('{cmd}', trimmed));
          break;
      }

      setLogs(newLogs);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0) {
        const nextIdx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(history[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= history.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(nextIdx);
          setInput(history[nextIdx]);
        }
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="filter drop-shadow-[8px_8px_0px_#00eefc] w-full max-w-2xl">
        <div className="pixel-stepped-card bg-secondary-container p-1">
          <div 
            className="pixel-stepped-card bg-[#120e18] overflow-hidden flex flex-col h-[520px] font-code-sm relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Header */}
            <div className="bg-[#221921] border-b-2 border-secondary-container px-4 py-2 flex justify-between items-center select-none z-10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-error inline-block border border-black"></span>
                <span className="w-3 h-3 bg-tertiary-fixed inline-block border border-black"></span>
                <span className="w-3 h-3 bg-secondary-container inline-block border border-black"></span>
                <span className="font-pixel text-[9px] text-secondary-fixed ml-2">
                  dimas@df.dev:~
                </span>
              </div>
              <button 
                onClick={onClose}
                className="pixel-btn-arcade-danger bg-error text-white font-pixel text-xs px-2 py-0.5"
              >
                X
              </button>
            </div>

            {/* CMATRIX LIVE ANIMATED CANVAS VIEW (TOUCH & MOBILE FRIENDLY) */}
            {isMatrixActive ? (
              <div 
                onClick={exitMatrix}
                className="flex-1 relative cursor-pointer overflow-hidden flex flex-col justify-between items-center p-4 select-none bg-[#0a0610]"
                title="Tap anywhere or click Exit button to stop cmatrix"
              >
                <canvas 
                  ref={canvasRef} 
                  className="absolute inset-0 w-full h-full block"
                />
                
                {/* Top Hint Bar */}
                <div className="relative z-10 bg-black/85 text-[#00ff66] font-silkscreen text-[10px] sm:text-[11px] px-3.5 py-1.5 border-2 border-[#00ff66] shadow-[3px_3px_0px_#000] animate-pulse text-center">
                  {lang === 'id' ? '[ SENTUH LAYAR UNTUK KELUAR ]' : '[ TAP SCREEN TO EXIT ]'}
                </div>

                {/* Dedicated Touch Button for Mobile */}
                <div className="relative z-10 filter drop-shadow-[3px_3px_0px_#000]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      exitMatrix();
                    }}
                    className="pixel-btn-arcade-danger bg-error hover:bg-error-container text-white font-pixel text-[10px] sm:text-xs py-2.5 px-5 flex items-center gap-2 cursor-pointer select-none"
                  >
                    <span>X</span>
                    <span>{lang === 'id' ? 'KELUAR MATRIX' : 'EXIT CMATRIX'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Terminal Output Buffer */}
                <div className="flex-1 p-4 overflow-y-auto text-xs md:text-sm text-secondary-fixed flex flex-col gap-1 select-text">
                  {logs.map((log, index) => (
                    <div 
                      key={index}
                      className={`leading-relaxed ${
                        log.startsWith('>') 
                          ? 'text-tertiary-fixed font-bold' 
                          : log.startsWith('==') 
                          ? 'text-primary-fixed-dim font-bold mt-1' 
                          : log.startsWith('ACCESS') || log.startsWith('AKSES')
                          ? 'text-[#00ff66] font-bold'
                          : 'text-surface-variant'
                      }`}
                    >
                      {log}
                    </div>
                  ))}
                  <div ref={bottomRef} />
                </div>

                {/* Terminal Input Line */}
                <div className="bg-[#0b080f] border-t-2 border-secondary-container/50 p-3 flex items-center gap-2">
                  <span className="text-primary-fixed-dim font-bold text-xs select-none">dimas@df.dev:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    placeholder={t.terminal.inputPrompt}
                    className="flex-1 bg-transparent text-secondary-container outline-none border-none font-code-sm text-xs md:text-sm"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalModal;
