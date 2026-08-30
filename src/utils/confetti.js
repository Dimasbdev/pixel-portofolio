import confetti from 'canvas-confetti';

// Create a custom cannon without worker to prevent CSP blob worker block
const confettiCannon = typeof window !== 'undefined' 
  ? confetti.create(null, { resize: true, useWorker: false }) 
  : confetti;

export const triggerConfetti = (opts = {}) => {
  try {
    confettiCannon({
      zIndex: 9999,
      disableForReducedMotion: false,
      ...opts,
    });
  } catch (e) {
    console.error('Confetti error:', e);
  }
};
