import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun } from 'lucide-react'
import { PrimaryButton, Container } from './UI'

const navLinks = [
  { label: 'Program', href: '#programlar' },
  { label: 'Aktiviteler', href: '#aktiviteler' },
  { label: 'Günlük Plan', href: '#gunluk-plan' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'SSS', href: '#sss' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-bisi-yellow to-bisi-orange rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <span className="font-extrabold text-xl font-[family-name:var(--font-display)]">
              <span className="text-bisi-navy">BISI</span>
              <span className="text-bisi-orange"> Camp</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-bisi-orange transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bisi-yellow rounded-full group-hover:w-full transition-all" />
              </a>
            ))}
            <PrimaryButton size="sm">
              Hemen Kaydol 🎉
            </PrimaryButton>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-gray-700 font-medium hover:text-bisi-orange transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <PrimaryButton size="sm" className="w-full justify-center mt-2">
                Hemen Kaydol 🎉
              </PrimaryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
