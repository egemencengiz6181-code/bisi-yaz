import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'
import { useLang } from '../LangContext'

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const panelVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 0.95, y: 16, transition: { duration: 0.2 } },
}

export default function RegistrationModal({ isOpen, onClose }) {
  const { t } = useLang()
  const r = t.registration
  const [form, setForm] = useState({ name: '', email: '', phone: '', institution: '' })
  const [submitted, setSubmitted] = useState(false)
  const firstInputRef = useRef(null)

  /* Close on Esc */
  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  /* Lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  /* Focus first input when modal opens */
  useEffect(() => {
    if (isOpen) setTimeout(() => firstInputRef.current?.focus(), 100)
  }, [isOpen])

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setForm({ name: '', email: '', phone: '', institution: '' })
    setSubmitted(false)
    onClose()
  }

  /* Click-outside to close */
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        /* ── Overlay ── */
        <motion.div
          key="overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(26,46,35,0.65)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
          aria-modal="true"
          role="dialog"
          aria-label="Kayıt Formu"
        >
          {/* ── Panel ── */}
          <motion.div
            key="panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-md rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              boxShadow: '0 32px 80px rgba(26,46,35,0.55)',
            }}
          >
            {/* Subtle gradient header accent */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
              style={{ background: 'linear-gradient(90deg, #2D5A3F, #6BAE8A, #233256)' }}
            />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="px-8 pt-10 pb-8">
              {!submitted ? (
                <>
                  {/* Header */}
                  <div className="mb-8 text-center">
                    <p className="text-white/40 text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                      BISI Summer Camp 2026
                    </p>
                    <h2 className="text-2xl font-black text-white leading-tight">
                      Kayıt Formu
                    </h2>
                    <p className="text-white/50 text-sm mt-2">
                      Alanları doldurun, size ulaşalım.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* İsim Soyisim */}
                    <div>
                      <label className="block text-white/60 text-xs font-semibold mb-1.5 tracking-wide uppercase">
                        {r.fields.name.label}
                      </label>
                      <input
                        ref={firstInputRef}
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder={r.fields.name.placeholder}
                        className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder:text-white/25 outline-none transition-all"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.12)',
                        }}
                        onFocus={(e) => (e.target.style.border = '1px solid rgba(107,174,138,0.6)')}
                        onBlur={(e) => (e.target.style.border = '1px solid rgba(255,255,255,0.12)')}
                      />
                    </div>

                    {/* E-posta */}
                    <div>
                      <label className="block text-white/60 text-xs font-semibold mb-1.5 tracking-wide uppercase">
                        {r.fields.email.label}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder={r.fields.email.placeholder}
                        className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder:text-white/25 outline-none transition-all"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.12)',
                        }}
                        onFocus={(e) => (e.target.style.border = '1px solid rgba(107,174,138,0.6)')}
                        onBlur={(e) => (e.target.style.border = '1px solid rgba(255,255,255,0.12)')}
                      />
                    </div>

                    {/* Telefon */}
                    <div>
                      <label className="block text-white/60 text-xs font-semibold mb-1.5 tracking-wide uppercase">
                        {r.fields.phone.label}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder={r.fields.phone.placeholder}
                        className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder:text-white/25 outline-none transition-all"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.12)',
                        }}
                        onFocus={(e) => (e.target.style.border = '1px solid rgba(107,174,138,0.6)')}
                        onBlur={(e) => (e.target.style.border = '1px solid rgba(255,255,255,0.12)')}
                      />
                    </div>

                    {/* Kurum Seçimi */}
                    <div>
                      <label className="block text-white/60 text-xs font-semibold mb-1.5 tracking-wide uppercase">
                        {r.fields.institution.label}
                      </label>
                      <select
                        name="institution"
                        value={form.institution}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none cursor-pointer"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          color: form.institution ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.25)',
                        }}
                        onFocus={(e) => (e.target.style.border = '1px solid rgba(107,174,138,0.6)')}
                        onBlur={(e) => (e.target.style.border = '1px solid rgba(255,255,255,0.12)')}
                      >
                        <option value="" disabled style={{ background: '#1A2E23' }}>
                          {r.fields.institution.placeholder}
                        </option>
                        {r.institutions.map((inst) => (
                          <option key={inst} value={inst} style={{ background: '#1A2E23', color: '#fff' }}>
                            {inst}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03, boxShadow: '0 16px 40px rgba(45,90,63,0.55)' }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all"
                      style={{ background: 'linear-gradient(135deg, #2D5A3F 0%, #3D7A56 50%, #233256 100%)', color: '#fff' }}
                    >
                      <Send className="w-4 h-4" />
                      {r.submit}
                    </motion.button>
                  </form>
                </>
              ) : (
                /* ── Success state ── */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center py-6"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(107,174,138,0.15)', border: '1px solid rgba(107,174,138,0.3)' }}>
                    <svg className="w-8 h-8 text-[#6BAE8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">{r.success.title}</h3>
                  <p className="text-white/50 text-sm mb-8 leading-relaxed">
                    {r.success.message}
                  </p>
                  <motion.button
                    onClick={handleReset}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-3 rounded-full font-bold text-sm text-white transition-all"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                  >
                    {r.success.close}
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
