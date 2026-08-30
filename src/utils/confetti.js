export const triggerConfetti = async (opts = {}) => {
  try {
    const confetti = (await import('canvas-confetti')).default;
    confetti({
      zIndex: 9999, // Ensure it's above all modals and backdrop-filters
      ...opts
    });
  } catch (e) {
    console.error('Failed to load confetti', e);
  }
};
