import confetti from 'canvas-confetti';

export const triggerConfetti = (opts = {}) => {
  try {
    confetti({
      zIndex: 9999,
      disableForReducedMotion: false,
      ...opts,
    });
  } catch (e) {
    console.error('Confetti error:', e);
  }
};
