let customConfetti = null;

export const triggerConfetti = async (opts = {}) => {
  try {
    const canvasConfetti = (await import('canvas-confetti')).default;

    if (!customConfetti) {
      const canvas = document.createElement('canvas');
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '2147483647'; // Maximum possible z-index
      document.body.appendChild(canvas);

      customConfetti = canvasConfetti.create(canvas, {
        resize: true,
        useWorker: true,
      });
    }

    customConfetti({
      disableForReducedMotion: false,
      ...opts,
    });
  } catch (e) {
    console.error('Failed to load confetti', e);
  }
};
