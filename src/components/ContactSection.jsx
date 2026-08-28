import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { playClick, playCoin, playError } from '../utils/audio';
import { PixelIcon } from './PixelIcon';
import { useTranslation } from '../context/LanguageContext';

export const ContactSection = React.memo(() => {
  const { t, lang } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [fieldErrors, setFieldErrors] = useState({ name: false, email: false, message: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, type: 'success', title: '', message: '' });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !validateEmail(formData.email),
      message: !formData.message.trim(),
    };

    if (errors.name || errors.email || errors.message) {
      setFieldErrors(errors);
      playError();

      let errorMessage = '';
      if (errors.name && errors.email && errors.message) {
        errorMessage = lang === 'id' ? 'Mohon lengkapi semua kolom formulir.' : 'Please fill in all required fields.';
      } else if (errors.email && formData.email.trim()) {
        errorMessage = lang === 'id' ? 'Format email tidak valid.' : 'Invalid email address format.';
      } else {
        errorMessage = lang === 'id' ? 'Ada kolom wajib yang masih kosong.' : 'Some required fields are missing.';
      }

      setToast({
        show: true,
        type: 'error',
        title: lang === 'id' ? 'VALIDASI GAGAL!' : 'VALIDATION ERROR!',
        message: errorMessage
      });

      // Clear shake animation after 400ms
      setTimeout(() => {
        setFieldErrors({ name: false, email: false, message: false });
      }, 500);

      // Auto dismiss warning toast after 3.5s
      setTimeout(() => {
        setToast((prev) => (prev.type === 'error' ? { ...prev, show: false } : prev));
      }, 3500);

      return;
    }

    // Start Real Submission via Web3Forms API
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'DF.DEV Portfolio Contact',
          subject: `New Message from ${formData.name} - DF.DEV`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormData({ name: '', email: '', message: '' });
        setFieldErrors({ name: false, email: false, message: false });

        setToast({
          show: true,
          type: 'success',
          title: lang === 'id' ? 'TRANSMISI BERHASIL!' : 'TRANSMISSION SENT!',
          message: lang === 'id' ? 'Pesan telah dikirim ke inbox Dimas.' : "Message delivered to Dimas's inbox."
        });

        playCoin();
        try {
          const confetti = (await import('canvas-confetti')).default;
          confetti({
            particleCount: 90,
            spread: 75,
            origin: { y: 0.7 }
          });
        } catch (e) {}
      } else {
        playError();
        setToast({
          show: true,
          type: 'error',
          title: lang === 'id' ? 'PENGIRIMAN GAGAL' : 'TRANSMISSION FAILED',
          message: result.message || (lang === 'id' ? 'Terjadi kesalahan jaringan.' : 'Network error occurred.')
        });
      }
    } catch (err) {
      playError();
      setToast({
        show: true,
        type: 'error',
        title: lang === 'id' ? 'KONEKSI GAGAL' : 'CONNECTION ERROR',
        message: lang === 'id' ? 'Gagal terhubung ke server transmisi.' : 'Could not reach transmission gateway.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setToast((prev) => (prev.type === 'success' ? { ...prev, show: false } : prev));
      }, 4500);
    }
  };

  return (
    <section id="contact" className="flex flex-col gap-8 py-8 scroll-mt-24 relative">
      {/* 8-Bit Floating Retro Toast Notification (Bilingual Error / Success) Portal */}
      {toast.show && typeof document !== 'undefined' && createPortal(
        <div className="fixed top-5 md:top-6 left-4 right-4 sm:left-auto sm:right-6 md:right-8 z-[99999] max-w-sm sm:max-w-md w-[calc(100%-2rem)] sm:w-auto mx-auto sm:mx-0 filter drop-shadow-[5px_5px_0px_#000000] pointer-events-auto select-none transition-all">
          <div className={`pixel-stepped-card p-1 ${toast.type === 'error' ? 'bg-error' : 'bg-primary'}`}>
            <div className="pixel-stepped-card bg-surface p-4 flex items-center justify-between gap-3 border-2 border-black">
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-9 h-9 border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000] flex-shrink-0 ${
                  toast.type === 'error' ? 'bg-error text-white' : 'bg-secondary-container'
                }`}>
                  {toast.type === 'error' ? (
                    <span className="font-pixel text-xs font-bold">!</span>
                  ) : (
                    <span className="inline-block w-2.5 h-2.5 bg-[#00ff66] rounded-full animate-ping"></span>
                  )}
                </div>
                <div className="min-w-0">
                  <h4 className={`font-pixel text-[10px] sm:text-[11px] font-bold truncate leading-tight ${
                    toast.type === 'error' ? 'text-error' : 'text-primary'
                  }`}>
                    {toast.title}
                  </h4>
                  <p className="font-code-sm text-[11px] text-on-surface-variant truncate mt-0.5">
                    {toast.message}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setToast({ ...toast, show: false })}
                className="w-7 h-7 pixel-btn-arcade-dark bg-surface-variant hover:bg-error hover:text-white text-on-surface flex items-center justify-center font-pixel text-[10px] border border-black cursor-pointer select-none flex-shrink-0"
              >
                ✕
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Section Header */}
      <div className="flex items-center gap-3 border-b-4 border-primary pb-3">
        <span className="text-primary animate-pulse">
          <PixelIcon name="mail" size={28} />
        </span>
        <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl font-bold text-on-surface drop-shadow-[2px_2px_0px_#efdee9] tracking-tight">
          {t.contact.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Form with Clean Crisp White Pixel Inputs */}
        <div className="lg:col-span-7 filter drop-shadow-[6px_6px_0px_#a900a9]">
          <div className="pixel-stepped-card bg-primary p-1">
            <div className="pixel-stepped-card bg-surface p-6 md:p-8">
              <h3 className="font-pixel text-base sm:text-lg font-bold text-on-surface mb-2">
                {t.contact.formTitle}
              </h3>
              <p className="font-code-sm text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
                {t.contact.formSubtitle}
              </p>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div>
                  <label className="font-code-sm text-xs font-bold text-on-surface uppercase tracking-wider block mb-1.5">
                    {t.contact.nameLabel}
                  </label>
                  <div className="filter drop-shadow-[2px_2px_0px_#000]">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: false });
                      }}
                      placeholder={t.contact.namePlaceholder}
                      className={`pixel-input w-full bg-white p-3.5 font-code-sm text-sm text-black placeholder:text-gray-400 border-2 transition-all ${
                        fieldErrors.name ? 'border-error animate-shake bg-error-container/30' : 'border-black'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-code-sm text-xs font-bold text-on-surface uppercase tracking-wider block mb-1.5">
                    {t.contact.emailLabel}
                  </label>
                  <div className="filter drop-shadow-[2px_2px_0px_#000]">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: false });
                      }}
                      placeholder={t.contact.emailPlaceholder}
                      className={`pixel-input w-full bg-white p-3.5 font-code-sm text-sm text-black placeholder:text-gray-400 border-2 transition-all ${
                        fieldErrors.email ? 'border-error animate-shake bg-error-container/30' : 'border-black'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-code-sm text-xs font-bold text-on-surface uppercase tracking-wider block mb-1.5">
                    {t.contact.messageLabel}
                  </label>
                  <div className="filter drop-shadow-[2px_2px_0px_#000]">
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: false });
                      }}
                      placeholder={t.contact.messagePlaceholder}
                      className={`pixel-input w-full bg-white p-3.5 font-code-sm text-sm text-black placeholder:text-gray-400 border-2 resize-none transition-all ${
                        fieldErrors.message ? 'border-error animate-shake bg-error-container/30' : 'border-black'
                      }`}
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button with Live Feedback State */}
                <div className="filter drop-shadow-[4px_4px_0px_#000] mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto font-code-sm font-bold uppercase tracking-wider text-xs py-4 px-8 flex items-center justify-center gap-2.5 cursor-pointer select-none transition-all ${
                      toast.show && toast.type === 'success'
                        ? 'pixel-btn-arcade-cyan bg-secondary-container text-black border-2 border-black'
                        : 'pixel-btn-arcade-primary bg-primary hover:bg-primary-container text-white'
                    }`}
                  >
                    <PixelIcon name="mail" size={16} />
                    {isSubmitting
                      ? (lang === 'id' ? 'MENGIRIM...' : 'TRANSMITTING...')
                      : toast.show && toast.type === 'success'
                      ? (lang === 'id' ? 'TERKIRIM! ✓' : 'TRANSMITTED! ✓')
                      : t.contact.submitButton}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Right Column: Unified Contact Info & Socials Card (Real Profiles & Links) */}
        <div className="lg:col-span-5 filter drop-shadow-[6px_6px_0px_#a900a9]">
          <div className="pixel-stepped-card bg-primary p-1">
            <div className="pixel-stepped-card bg-surface p-6 md:p-8 flex flex-col gap-6">
              {/* Direct Info Section */}
              <div className="flex flex-col gap-4">
                <h4 className="font-code-sm text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-2 border-b-2 border-dashed border-primary/30 pb-2">
                  <PixelIcon name="radar" size={16} />
                  {t.contact.infoTitle}
                </h4>

                {/* 3 Stepped Pixel Contact Info Items */}
                <div className="flex flex-col gap-3.5 font-code-sm text-xs">
                  {/* Email Row */}
                  <div className="filter drop-shadow-[3px_3px_0px_#000]">
                    <div className="pixel-stepped-sm bg-white hover:bg-surface-variant p-3.5 border-2 border-black flex items-center gap-3 transition-colors">
                      <span className="text-primary flex-shrink-0">
                        <PixelIcon name="mail" size={18} />
                      </span>
                      <div className="overflow-hidden">
                        <span className="text-[11px] text-gray-600 font-code-sm font-bold uppercase tracking-wider block">
                          {t.contact.emailInbox}
                        </span>
                        <a href="mailto:dimasfirmandev@gmail.com" className="font-bold text-black hover:text-primary transition-colors truncate block text-xs sm:text-sm">
                          dimasfirmandev@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Timezone Row */}
                  <div className="filter drop-shadow-[3px_3px_0px_#000]">
                    <div className="pixel-stepped-sm bg-white hover:bg-surface-variant p-3.5 border-2 border-black flex items-center gap-3 transition-colors">
                      <span className="text-[#006970] flex-shrink-0">
                        <PixelIcon name="clock" size={18} />
                      </span>
                      <div>
                        <span className="text-[11px] text-gray-600 font-code-sm font-bold uppercase tracking-wider block">
                          {t.contact.timezoneTitle}
                        </span>
                        <span className="font-bold text-black text-xs sm:text-sm">
                          {t.contact.timezoneVal}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Response Time Row */}
                  <div className="filter drop-shadow-[3px_3px_0px_#000]">
                    <div className="pixel-stepped-sm bg-white hover:bg-surface-variant p-3.5 border-2 border-black flex items-center gap-3 transition-colors">
                      <span className="text-[#695f00] flex-shrink-0">
                        <PixelIcon name="bolt" size={18} />
                      </span>
                      <div>
                        <span className="text-[11px] text-gray-600 font-code-sm font-bold uppercase tracking-wider block">
                          {t.contact.latencyTitle}
                        </span>
                        <span className="font-bold text-black text-xs sm:text-sm">
                          {t.contact.latencyVal}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles Section (Real Direct GitHub & Instagram Links) */}
              <div className="flex flex-col gap-3.5 pt-2 border-t-2 border-dashed border-primary/30">
                <h4 className="font-code-sm text-xs font-bold text-primary uppercase tracking-wider">
                  {t.contact.socialTitle}
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'GITHUB', url: 'https://github.com/Dimasbdev' },
                    { label: 'INSTAGRAM', url: 'https://www.instagram.com/dimmm.f?igsi=MXdqOTZ6OWNxMmtrcQ==' },
                  ].map((s) => (
                    <div key={s.label} className="filter drop-shadow-[3px_3px_0px_#000]">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => playClick()}
                        className="w-full block pixel-btn-arcade-dark bg-white hover:bg-secondary-container hover:text-black text-black p-3.5 font-code-sm text-xs font-bold uppercase tracking-wider text-center select-none border-2 border-black transition-colors"
                      >
                        {s.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
