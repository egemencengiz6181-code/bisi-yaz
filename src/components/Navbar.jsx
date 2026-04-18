import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Container } from './UI'
import { useLang } from '../LangContext'

/* Campus dropdown items — shared across desktop + mobile */
const campusLinks = [
  { label: 'Bahçeşehir', path: '/bahcesehir', external: false },
  { label: 'Çamlıca',    path: '/camlica',    external: false },
  { label: 'Alkent',     path: '/alkent',     external: false },
  { label: 'Zekeriyaköy', path: 'https://www.bisisummer.com', external: true },
]

export default function Navbar({ onOpenModal, isCampusPage = false }) {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)                // mobile menu
  const [desktopDropOpen, setDesktopDropOpen] = useState(false) // desktop hover dropdown
  const [mobileCampusOpen, setMobileCampusOpen] = useState(false) // mobile sub-list
  const dropRef = useRef(null)
  const location = useLocation()

  const mainNavLinks = [
    { label: t.nav.locations,  href: '#lokasyonlar' },
    { label: t.nav.activities, href: '#aktiviteler' },
    { label: t.nav.faq,        href: '#sss' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close desktop dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDesktopDropOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const linkColor = scrolled
    ? 'text-[#233256] hover:text-[#2D5A3F]'
    : 'text-white/85 hover:text-white'
  const underlineColor = scrolled ? 'bg-[#2D5A3F]' : 'bg-white'

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-[#2D5A3F]/10'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo/e9e0290c-6285-409c-861c-ff95e3e44a32-2.png"
              alt="The British School Istanbul"
              className={`h-10 md:h-12 w-auto object-contain transition-all duration-400 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </Link>

          {/* ── Desktop navigation ── */}
          <div className="hidden md:flex items-center gap-6">

            {/* Anasayfa (campus pages only) */}
            {isCampusPage && (
              <Link
                to="/"
                className={`text-sm font-semibold transition-colors relative group ${linkColor}`}
              >
                {t.nav.home}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all ${underlineColor}`} />
              </Link>
            )}

            {/* Standard page links (main page only) */}
            {!isCampusPage && mainNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors relative group ${linkColor}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all ${underlineColor}`} />
              </a>
            ))}

            {/* Kurumlarımız dropdown */}
            <div
              ref={dropRef}
              className="relative"
              onMouseEnter={() => setDesktopDropOpen(true)}
              onMouseLeave={() => setDesktopDropOpen(false)}
            >
              <button
                onClick={() => setDesktopDropOpen((v) => !v)}
                className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors ${linkColor}`}
              >
                {t.nav.campuses}
                <motion.span
                  animate={{ rotate: desktopDropOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.span>
              </button>

              <AnimatePresence>
                {desktopDropOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white rounded-2xl shadow-xl shadow-[#2D5A3F]/12 border border-gray-100 overflow-hidden"
                  >
                    {campusLinks.map((cl) => (
                      cl.external ? (
                        <a
                          key={cl.path}
                          href={cl.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setDesktopDropOpen(false)}
                          className="flex items-center gap-1.5 px-5 py-3 text-sm font-semibold text-[#233256] hover:bg-[#EEF5F0] hover:text-[#2D5A3F] transition-colors"
                        >
                          {cl.label}
                          <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      ) : (
                        <Link
                          key={cl.path}
                          to={cl.path}
                          onClick={() => setDesktopDropOpen(false)}
                          className={`block px-5 py-3 text-sm font-semibold transition-colors ${
                            location.pathname === cl.path
                              ? 'bg-[#EEF5F0] text-[#2D5A3F]'
                              : 'text-[#233256] hover:bg-[#EEF5F0] hover:text-[#2D5A3F]'
                          }`}
                        >
                          {cl.label}
                        </Link>
                      )
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Language switcher */}
            <div className={`flex items-center rounded-full p-0.5 text-xs font-bold border transition-all ${
              scrolled ? 'border-[#2D5A3F]/30 bg-[#EEF5F0]' : 'border-white/30 bg-white/10'
            }`}>
              {['tr', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full transition-all uppercase ${
                    lang === l
                      ? 'bg-[#2D5A3F] text-white shadow-sm'
                      : scrolled ? 'text-[#233256] hover:text-[#2D5A3F]' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Enroll button */}
            <motion.button
              onClick={onOpenModal}
              whileHover={{ scale: 1.05, boxShadow: scrolled ? '0 12px 32px rgba(45,90,63,0.35)' : '0 12px 32px rgba(255,255,255,0.25)' }}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-full shadow-lg transition-all cursor-pointer tracking-wide ${
                scrolled
                  ? 'bg-gradient-to-r from-[#2D5A3F] to-[#233256] text-white shadow-[#2D5A3F]/20'
                  : 'bg-white text-[#2D5A3F] hover:bg-white/95'
              }`}
            >
              HEMEN KAYIT FORMUNU DOLDUR
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </motion.button>
          </div>

          {/* ── Mobile: lang + hamburger ── */}
          <div className="md:hidden flex items-center gap-2">
            <div className={`flex items-center rounded-full p-0.5 text-xs font-bold border ${
              scrolled ? 'border-[#2D5A3F]/30 bg-[#EEF5F0]' : 'border-white/30 bg-white/10'
            }`}>
              {['tr', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded-full transition-all uppercase ${
                    lang === l
                      ? 'bg-[#2D5A3F] text-white shadow-sm'
                      : scrolled ? 'text-[#233256]' : 'text-white/70'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={() => setOpen(!open)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? 'hover:bg-[#EEF5F0]' : 'hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {open
                ? <X className={`w-6 h-6 ${scrolled ? 'text-[#233256]' : 'text-white'}`} />
                : <Menu className={`w-6 h-6 ${scrolled ? 'text-[#233256]' : 'text-white'}`} />
              }
            </button>
          </div>
        </div>
      </Container>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">

              {/* Anasayfa (campus pages) */}
              {isCampusPage && (
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-[#233256] font-semibold hover:text-[#2D5A3F] transition-colors"
                >
                  {t.nav.home}
                </Link>
              )}

              {/* Main nav links (main page) */}
              {!isCampusPage && mainNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-[#233256] font-semibold hover:text-[#2D5A3F] transition-colors"
                >
                  {link.label}
                </a>
              ))}

              {/* Kurumlarımız expandable */}
              <div>
                <button
                  onClick={() => setMobileCampusOpen((v) => !v)}
                  className="flex items-center justify-between w-full py-2.5 text-[#233256] font-semibold hover:text-[#2D5A3F] transition-colors"
                >
                  {t.nav.campuses}
                  <motion.span
                    animate={{ rotate: mobileCampusOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {mobileCampusOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 mb-1 space-y-0.5 border-l-2 border-[#EEF5F0] ml-1">
                        {campusLinks.map((cl) => (
                          cl.external ? (
                            <a
                              key={cl.path}
                              href={cl.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => { setOpen(false); setMobileCampusOpen(false) }}
                              className="flex items-center gap-1.5 py-2 text-sm font-medium text-[#4D6359] hover:text-[#2D5A3F] transition-colors"
                            >
                              {cl.label}
                              <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                          ) : (
                            <Link
                              key={cl.path}
                              to={cl.path}
                              onClick={() => { setOpen(false); setMobileCampusOpen(false) }}
                              className={`block py-2 text-sm font-medium transition-colors ${
                                location.pathname === cl.path
                                  ? 'text-[#2D5A3F] font-bold'
                                  : 'text-[#4D6359] hover:text-[#2D5A3F]'
                              }`}
                            >
                              {cl.label}
                            </Link>
                          )
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Enroll button */}
              <motion.button
                onClick={() => { setOpen(false); onOpenModal() }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 mt-2 bg-gradient-to-r from-[#2D5A3F] to-[#233256] text-white font-bold rounded-full text-xs cursor-pointer tracking-wide"
              >
                HEMEN KAYIT FORMUNU DOLDUR
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
