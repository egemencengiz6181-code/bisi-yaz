import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Container } from './UI'
import { useLang } from '../LangContext'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const navLinks = [
    { label: t.nav.locations, href: '#lokasyonlar' },
    { label: t.nav.programs, href: '#programlar' },
    { label: t.nav.activities, href: '#aktiviteler' },
    { label: t.nav.faq, href: '#sss' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo/e9e0290c-6285-409c-861c-ff95e3e44a32-2.png"
              alt="The British School Istanbul"
              className={`h-10 md:h-12 w-auto object-contain transition-all duration-400 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors relative group ${
                  scrolled
                    ? 'text-[#233256] hover:text-[#2D5A3F]'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all ${
                  scrolled ? 'bg-[#2D5A3F]' : 'bg-white'
                }`} />
              </a>
            ))}

            {/* Language Switcher */}
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

            <motion.a
              href="#kayit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold rounded-full shadow-lg transition-all cursor-pointer ${
                scrolled
                  ? 'bg-gradient-to-r from-[#2D5A3F] to-[#233256] text-white shadow-[#2D5A3F]/20 hover:shadow-[#2D5A3F]/40'
                  : 'bg-white text-[#2D5A3F] hover:bg-white/90'
              }`}
            >
              {t.nav.enrol}
            </motion.a>
          </div>

          {/* Mobile: lang toggle + hamburger */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-[#233256] font-semibold hover:text-[#2D5A3F] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <motion.a
                href="#kayit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block text-center py-3 mt-2 bg-gradient-to-r from-[#2D5A3F] to-[#233256] text-white font-bold rounded-full text-sm cursor-pointer"
              >
                {t.nav.enrol}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
