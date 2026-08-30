import React from 'react';

// Handcrafted 8-Bit Pixel Art SVG Icons with clean silhouettes and crisp pixel grid rendering
export const PixelIcon = React.memo(({ name, size = 20, className = '' }) => {
  const renderPath = () => {
    switch (name) {
      case 'home':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M7 1h2v2h2v2h2v2h2v2h-2v6H3V9H1V7h2V5h2V3h2V1zm-2 8v4h6V9H5zm2 1h2v3H7v-3zM11 2h2v3h-2V2z" />
          </svg>
        );

      case 'gamepad':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M2 3h12v1H2V3zm-1 1h14v7H1V4zm1 7h3v2H2v-2zm9 0h3v2h-3v-2zM4 6h1v1h1v1H5v1H4V8H3V7h1V6zm7 0h2v2h-2V6zm1 2h2v2h-2V8z" />
          </svg>
        );

      case 'controller':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M3 4h10v1H3V4zm-2 1h14v6H1V5zm1 1v4h12V6H2zm2 1h1v1H4V7zm1 1h1v1H5V8zm-1 1h1v1H4V9zm-1-1h1v1H3V8zm8-1h1v1h-1V7zm2 0h1v1h-1V7zm-1 1h1v1h-1V8zm-1 1h1v1h-1V9zM2 11h3v2H2v-2zm9 0h3v2h-3v-2z" />
          </svg>
        );

      case 'play':
      case 'start':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M4 2h2v1H4V2zm0 1h4v1H4V3zm0 1h6v1H4V4zm0 1h8v1H4V5zm0 1h8v2H4V6zm0 2h8v1H4V8zm0 1h6v1H4V9zm0 1h4v1H4v-1zm0 1h2v1H4v-1z" />
          </svg>
        );

      case 'rocket':
      case 'quests':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M7 0h2v2h2v2h1v4h-1v2h-1v2h-1v2H7v-2H6v-2H5V8H4V4h1V2h2V0zM6 9h4v1H6V9zm1 5h2v2H7v-2zM3 8h1v4H3v1H1v-2h1V9h1V8zm10 0h-1v4h1v1h2v-2h-1V9h-1V8z" />
          </svg>
        );

      case 'backpack':
      case 'bag':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M5 1h6v2H5V1zm-3 3h12v11H2V4zm2 2v3h8V6H4zm0 5v3h8v-3H4z" />
          </svg>
        );

      case 'terminal':
      case 'computer':
      case 'cli':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M1 1h14v10H1V1zm2 2v6h10V3H3zm3 9h4v2H6v-2zm-3 2h10v2H3v-2zm2-9h2v1H5V5zm1 1h2v1H6V6zm-1 1h2v1H5V7zm3 1h3v1H8V8z" />
          </svg>
        );

      case 'mail':
      case 'msg':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M0 3h16v10H0V3zm2 2v1l6 4 6-4V5H2zm0 2v4h12V7l-6 4-6-4z" />
          </svg>
        );

      case 'sound-on':
      case 'volume':
      case 'sound':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M1 5h3v6H1V5zm3 0h2v-2h2v10H6v-2H4V5zm6-1h1v1h-1V4zm1 1h1v2h-1V5zm1 2h1v2h-1V7zm-1 2h1v2h-1V9zm-1 2h1v1h-1v-1zm3-9h1v2h-1V2zm1 2h1v3h-1V4zm1 3h1v2h-1V7zm-1 2h1v3h-1V9zm-1 3h1v2h-1v-2z" />
          </svg>
        );

      case 'sound-off':
      case 'volume-x':
      case 'mute':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M1 5h3v6H1V5zm3 0h2v-2h2v10H6v-2H4V5zm6 0h2v2h-2V5zm4 0h2v2h-2V5zm-2 2h2v2h-2V7zm-2 2h2v2h-2V9zm4 0h2v2h-2V9z" />
          </svg>
        );

      case 'tv':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M4 0h1v2H4V0zm7 0h1v2h-1V0zm-6 2h6v1H5V2zM1 3h14v10H1V3zm2 2v6h7V5H3zm9 1h1v1h-1V6zm0 3h1v1h-1V9zM2 13h2v2H2v-2zm10 0h2v2h-2v-2z" />
          </svg>
        );

      case 'sword':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M13 0h3v3h-2V2h-1V1h-1V0h1zm-1 2h2v2h-1V3h-1V2zm-1 1h2v2h-1V4h-1V3zm-1 1h2v2h-1V5h-1V4zm-1 1h2v2h-1V6h-1V5zm-1 1h2v2H9V7H8V6zm-1 1h2v2H8V8H7V7zm-1 1h2v2H7V9H6V8zm-1 1h2v2H6v-1H5V9zm-1 1h2v1h1v2H7v-1H6v-1H4v-1zm-1 1h2v2H3v-2zm-2 2h2v2H1v-2z" />
          </svg>
        );

      case 'scroll':
      case 'history':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M2 1h10v2H2V1zm10 2h2v10h-2V3zM2 3h9v9H2V3zm0 10h10v2H2v-2zm-1-2h1v1H1v-1zm0-6h1v1H1V5zm4-1h5v1H5V4zm0 2h5v1H5V6zm0 2h3v1H5V8z" />
          </svg>
        );

      case 'flag':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M2 1h2v14H2V1zm2 1h9v6H4V2zm2 1v4h5V3H6z" />
          </svg>
        );

      case 'heart':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M2 3h3v2H2V3zm7 0h3v2H9V3zm-6 2h10v4H3V5zm2 4h6v2H5V9zm2 2h2v2H7v-2z" />
          </svg>
        );

      case 'coin':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M4 2h8v1H4V2zm-2 2h12v8H2V4zm2 8h8v1H4v-1zm3-6h2v4H7V6zm-1 1h4v2H6V7z" />
          </svg>
        );

      case 'badge':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M4 1h8v8H4V1zm2 2v4h4V3H6zm-3 8h10v2H3v-2zm2 2h6v2H5v-2z" />
          </svg>
        );

      case 'radar':
      case 'id-card':
      case 'info':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M0 2h16v12H0V2zm2 2v8h12V4H2zm2 2h3v3H4V6zm5 0h5v1H9V6zm0 2h4v1H9V8zm-5 2h9v1H4v-1z" />
          </svg>
        );

      case 'clock':
      case 'time':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M5 0h6v1H5V0zM3 1h2v1H3V1zm8 0h2v1h-2V1zM1 3h2v2H1V3zm13 0h2v2h-2V3zM0 5h1v6H0V5zm15 0h1v6h-1V5zM1 11h2v2H1v-2zm13 0h2v2h-2v-2zM3 14h2v1H3v-1zm8 0h2v1h-2v-1zM5 15h6v1H5v-1zM7 3h2v4h3v2H7V3z" />
          </svg>
        );

      case 'bolt':
      case 'lightning':
      case 'speed':
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M8 0h6v6h-3l4 10-11-8h4L8 0z" />
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" shapeRendering="crispEdges" className={className}>
            <path d="M2 2h12v12H2V2zm2 2v8h8V4H4z" />
          </svg>
        );
    }
  };

  return <span className="inline-flex items-center justify-center select-none flex-shrink-0">{renderPath()}</span>;
});
