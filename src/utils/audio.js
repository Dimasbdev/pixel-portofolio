// Lightweight Web Audio API 8-Bit Retro Sound Synthesizer
// Zero external assets needed, ultra-fast and lightweight

let audioCtx = null;
let soundEnabled = true;

const getAudioContext = () => {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  return audioCtx;
};

// --- iOS / Mobile Web Audio API Unlocker ---
let isUnlocked = false;

const unlockAudio = () => {
  if (isUnlocked) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === 'suspended') {
    ctx.resume().catch(() => {});
  }

  try {
    // Play a silent buffer to forcefully unlock audio on iOS
    const buffer = ctx.createBuffer(1, 1, 22050);
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.start(0);
  } catch (e) {}

  isUnlocked = true;

  const events = ['touchstart', 'touchend', 'mousedown', 'keydown'];
  events.forEach(event => document.removeEventListener(event, unlockAudio, true));
};

if (typeof document !== 'undefined') {
  const events = ['touchstart', 'touchend', 'mousedown', 'keydown'];
  events.forEach(event => document.addEventListener(event, unlockAudio, { once: true, capture: true, passive: true }));
}
// -------------------------------------------

export const setSoundEnabled = (enabled) => {
  soundEnabled = enabled;
  if (typeof window !== 'undefined') {
    localStorage.setItem('pixel_sound_enabled', enabled ? '1' : '0');
  }
};

export const getSoundEnabled = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('pixel_sound_enabled');
    if (saved !== null) {
      soundEnabled = saved === '1';
      return soundEnabled;
    }
  }
  return soundEnabled;
};

const ensureContextRunning = async (ctx) => {
  if (ctx.state === 'suspended') {
    try {
      await ctx.resume();
    } catch (e) {
      // Ignore resume errors
    }
  }
};

// Play a short retro UI click / blip
export const playClick = async () => {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  await ensureContextRunning(ctx);

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const t = ctx.currentTime;
    
    osc.type = 'square';
    osc.frequency.setValueAtTime(440, t);
    osc.frequency.exponentialRampToValueAtTime(880, t + 0.05);

    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(t);
    osc.stop(t + 0.05);
  } catch (e) {
    // Ignore audio error
  }
};

// Play a retro coin / quest complete sound
export const playCoin = async () => {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  await ensureContextRunning(ctx);

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const t = ctx.currentTime;

    osc.type = 'square';
    osc.frequency.setValueAtTime(987.77, t); // B5
    osc.frequency.setValueAtTime(1318.51, t + 0.08); // E6

    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(t);
    osc.stop(t + 0.35);
  } catch (e) {}
};

// Play retro powerup sound
export const playPowerup = async () => {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  await ensureContextRunning(ctx);

  try {
    const notes = [330, 392, 659, 523, 587, 784];
    const baseTime = ctx.currentTime;
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = baseTime + i * 0.04;

      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.15, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.08);
    });
  } catch (e) {}
};

// Play laser / start game sound
export const playLaser = async () => {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  await ensureContextRunning(ctx);

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const t = ctx.currentTime;

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(880, t);
    osc.frequency.exponentialRampToValueAtTime(110, t + 0.15);

    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(t);
    osc.stop(t + 0.15);
  } catch (e) {}
};

// Play retro error / buzzer sound
export const playError = async () => {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  await ensureContextRunning(ctx);

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const t = ctx.currentTime;

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, t);
    osc.frequency.setValueAtTime(110, t + 0.1);

    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(t);
    osc.stop(t + 0.2);
  } catch (e) {}
};
