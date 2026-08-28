import React from 'react';

// Authentic 8-Bit Pixel Art SVGs of Official Tech Stack Logos
export const TechLogo = ({ name, size = 28, className = '' }) => {
  switch (name) {
    case 'python':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} shapeRendering="crispEdges" className={className}>
          {/* Blue Snake (Top-Left) */}
          <rect x="5" y="3" width="7" height="2" fill="#3776ab" />
          <rect x="3" y="5" width="9" height="5" fill="#3776ab" />
          <rect x="3" y="10" width="4" height="2" fill="#3776ab" />
          <rect x="5" y="12" width="2" height="2" fill="#3776ab" />
          {/* Blue Snake Eye */}
          <rect x="6" y="5" width="1" height="1" fill="#ffffff" />

          {/* Yellow Snake (Bottom-Right) */}
          <rect x="12" y="19" width="7" height="2" fill="#ffd43b" />
          <rect x="12" y="14" width="9" height="5" fill="#ffd43b" />
          <rect x="17" y="12" width="4" height="2" fill="#ffd43b" />
          <rect x="17" y="10" width="2" height="2" fill="#ffd43b" />
          {/* Yellow Snake Eye */}
          <rect x="17" y="18" width="1" height="1" fill="#ffffff" />
        </svg>
      );

    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} shapeRendering="crispEdges" className={className}>
          {/* Yellow Background */}
          <rect x="2" y="2" width="20" height="20" fill="#f7df1e" />
          {/* Letter J */}
          <rect x="6" y="13" width="2" height="2" fill="#000000" />
          <rect x="8" y="15" width="3" height="2" fill="#000000" />
          <rect x="9" y="8" width="2" height="7" fill="#000000" />
          {/* Letter S */}
          <rect x="13" y="8" width="5" height="2" fill="#000000" />
          <rect x="13" y="10" width="2" height="1" fill="#000000" />
          <rect x="13" y="11" width="5" height="2" fill="#000000" />
          <rect x="16" y="13" width="2" height="2" fill="#000000" />
          <rect x="13" y="15" width="5" height="2" fill="#000000" />
        </svg>
      );

    case 'html':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} shapeRendering="crispEdges" className={className}>
          {/* Orange Shield */}
          <path d="M4 2h16v14l-8 6-8-6V2z" fill="#e34f26" />
          <path d="M12 4h6l-1 11-5 4V4z" fill="#ef652a" />
          {/* White '5' */}
          <rect x="7" y="6" width="10" height="2" fill="#ffffff" />
          <rect x="7" y="8" width="2" height="3" fill="#ffffff" />
          <rect x="7" y="11" width="9" height="2" fill="#ffffff" />
          <rect x="14" y="13" width="2" height="2" fill="#ffffff" />
          <rect x="8" y="15" width="7" height="2" fill="#ffffff" />
        </svg>
      );

    case 'bash':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} shapeRendering="crispEdges" className={className}>
          {/* Dark Terminal Box */}
          <rect x="2" y="3" width="20" height="18" fill="#24292e" />
          {/* Top Bar */}
          <rect x="2" y="3" width="20" height="3" fill="#4eaa25" />
          {/* Green Prompt >_ */}
          <rect x="5" y="9" width="2" height="1" fill="#4eaa25" />
          <rect x="6" y="10" width="2" height="1" fill="#4eaa25" />
          <rect x="7" y="11" width="2" height="1" fill="#4eaa25" />
          <rect x="6" y="12" width="2" height="1" fill="#4eaa25" />
          <rect x="5" y="13" width="2" height="1" fill="#4eaa25" />
          <rect x="10" y="14" width="4" height="2" fill="#4eaa25" />
        </svg>
      );

    case 'php':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} shapeRendering="crispEdges" className={className}>
          {/* Purple PHP Oval Frame */}
          <rect x="2" y="5" width="20" height="14" fill="#777bb4" />
          <rect x="4" y="3" width="16" height="18" fill="#777bb4" />
          {/* PHP Letters in White */}
          {/* P1 */}
          <rect x="5" y="7" width="2" height="10" fill="#ffffff" />
          <rect x="7" y="7" width="2" height="2" fill="#ffffff" />
          <rect x="8" y="9" width="2" height="2" fill="#ffffff" />
          <rect x="7" y="11" width="2" height="2" fill="#ffffff" />
          {/* H */}
          <rect x="11" y="7" width="2" height="10" fill="#ffffff" />
          <rect x="13" y="11" width="2" height="2" fill="#ffffff" />
          <rect x="15" y="7" width="2" height="10" fill="#ffffff" />
          {/* P2 */}
          <rect x="18" y="7" width="2" height="10" fill="#ffffff" />
          <rect x="19" y="7" width="2" height="2" fill="#ffffff" />
          <rect x="20" y="9" width="2" height="2" fill="#ffffff" />
          <rect x="19" y="11" width="2" height="2" fill="#ffffff" />
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} shapeRendering="crispEdges" className={className}>
          {/* Red/Orange Git Diamond */}
          <path d="M12 2l10 10-10 10L2 12z" fill="#f05032" />
          {/* Nodes and Branching in White */}
          <circle cx="12" cy="7" r="2" fill="#ffffff" />
          <circle cx="12" cy="17" r="2" fill="#ffffff" />
          <circle cx="16" cy="13" r="2" fill="#ffffff" />
          <rect x="11" y="7" width="2" height="10" fill="#ffffff" />
          <path d="M12 11l4 2" stroke="#ffffff" strokeWidth="2" />
        </svg>
      );

    case 'database':
    case 'sql':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} shapeRendering="crispEdges" className={className}>
          {/* Top Cylinder Disc (PostgreSQL / Blue Accent) */}
          <rect x="5" y="3" width="14" height="2" fill="#000000" />
          <rect x="4" y="4" width="16" height="3" fill="#336791" />
          <rect x="6" y="4" width="12" height="1" fill="#7df4ff" />
          <rect x="5" y="7" width="14" height="1" fill="#000000" />
          <rect x="17" y="5" width="2" height="1" fill="#00ff66" />

          {/* Middle Cylinder Disc (MySQL / Teal Accent) */}
          <rect x="4" y="8" width="16" height="4" fill="#00758f" />
          <rect x="6" y="8" width="12" height="1" fill="#00eefc" />
          <rect x="5" y="12" width="14" height="1" fill="#000000" />
          <rect x="17" y="9" width="2" height="1" fill="#00ff66" />

          {/* Bottom Cylinder Disc */}
          <rect x="4" y="13" width="16" height="5" fill="#2d527c" />
          <rect x="6" y="13" width="12" height="1" fill="#58a6ff" />
          <rect x="5" y="18" width="14" height="1" fill="#000000" />
          <rect x="6" y="19" width="12" height="1" fill="#000000" />
          <rect x="17" y="14" width="2" height="1" fill="#00ff66" />

          {/* Left and Right Black Vertical Pixel Borders */}
          <rect x="3" y="4" width="1" height="14" fill="#000000" />
          <rect x="20" y="4" width="1" height="14" fill="#000000" />
        </svg>
      );

    case 'markdown':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} shapeRendering="crispEdges" className={className}>
          {/* Dark Frame */}
          <rect x="2" y="4" width="20" height="16" fill="#000000" />
          {/* White 'M' */}
          <rect x="4" y="7" width="2" height="10" fill="#ffffff" />
          <rect x="6" y="9" width="2" height="2" fill="#ffffff" />
          <rect x="8" y="11" width="2" height="2" fill="#ffffff" />
          <rect x="10" y="9" width="2" height="2" fill="#ffffff" />
          <rect x="12" y="7" width="2" height="10" fill="#ffffff" />
          {/* Down Arrow */}
          <rect x="17" y="7" width="2" height="6" fill="#ffffff" />
          <rect x="15" y="11" width="2" height="2" fill="#ffffff" />
          <rect x="19" y="11" width="2" height="2" fill="#ffffff" />
          <rect x="16" y="13" width="4" height="2" fill="#ffffff" />
        </svg>
      );

    case 'docker':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} shapeRendering="crispEdges" className={className}>
          {/* Containers */}
          <rect x="6" y="7" width="2" height="2" fill="#2496ed" />
          <rect x="9" y="7" width="2" height="2" fill="#2496ed" />
          <rect x="12" y="7" width="2" height="2" fill="#2496ed" />
          <rect x="9" y="4" width="2" height="2" fill="#2496ed" />
          {/* Whale Body */}
          <path d="M4 11h14v2h2v2h2v-2h1v4h-2v1h-3v-1H6v-1H4v-1H3v-3h1v-1z" fill="#2496ed" />
          {/* Whale Eye */}
          <rect x="16" y="13" width="1" height="1" fill="#ffffff" />
        </svg>
      );

    case 'react':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} shapeRendering="crispEdges" className={className}>
          <rect x="11" y="11" width="2" height="2" fill="#00eefc" />
          <rect x="7" y="10" width="10" height="1" fill="#00eefc" />
          <rect x="7" y="13" width="10" height="1" fill="#00eefc" />
          <rect x="5" y="11" width="2" height="2" fill="#00eefc" />
          <rect x="17" y="11" width="2" height="2" fill="#00eefc" />
        </svg>
      );

    default:
      return null;
  }
};
