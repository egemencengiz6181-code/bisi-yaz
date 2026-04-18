import { motion } from 'framer-motion'
import { Camera, Globe, Play, MessageCircle, ArrowRight } from 'lucide-react'
import { Container } from './UI'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../LangContext'

const socialLinks = [
  { icon: Camera, href: '#', label: 'Instagram' },
  { icon: Globe, href: '#', label: 'Facebook' },
  { icon: Play, href: '#', label: 'YouTube' },
  { icon: MessageCircle, href: '#', label: 'Twitter' },
]

export default function Footer({ onOpenModal }) {
  const { t } = useLang()
  const footer = t.footer
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setEmail('')
  }

  return (
    <footer id="iletisim" className="bg-bisi-navy text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#2D5A3F] to-[#233256]">
        <Container className="py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white font-[family-name:var(--font-display)]">
              {footer.cta.title}
            </h2>
            <p className="mt-3 text-white/70 max-w-xl mx-auto">
              {footer.cta.sub}
            </p>
            <motion.button
              onClick={onOpenModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-white text-[#2D5A3F] font-bold rounded-full shadow-xl hover:shadow-2xl transition-shadow cursor-pointer text-lg"
            >
              {footer.cta.btn} <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </Container>
      </div>

      {/* Main Footer */}
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <img
                src="/logo/e9e0290c-6285-409c-861c-ff95e3e44a32-2.png"
                alt="The British School Istanbul"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {footer.brand}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-bisi-yellow/20 hover:text-bisi-yellow transition-colors"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold font-[family-name:var(--font-display)] text-lg mb-4 text-left">{footer.quickLinks}</h3>
            <ul className="space-y-2.5">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Campuses */}
          <div>
            <h3 className="font-bold font-[family-name:var(--font-display)] text-lg mb-4 text-left">{footer.campusesTitle}</h3>
            <ul className="space-y-2.5">
              {footer.campusLinks.map((link) =>
                link.external ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : link.href.startsWith('#') ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-bold font-[family-name:var(--font-display)] text-lg mb-4 text-left">{footer.newsletter}</h3>
            <p className="text-gray-400 text-sm mb-4">
              {footer.newsletterSub}
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={footer.emailPlaceholder}
                required
                className="flex-1 min-w-0 px-4 py-2.5 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400/50 transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 bg-gradient-to-r from-[#2D5A3F] to-[#233256] rounded-xl text-white font-semibold text-sm whitespace-nowrap"
              >
                {footer.subscribe}
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-gray-500">
          <p>© 2026 BISI Summer Camp. {footer.rights}</p>
          <p className="font-medium text-gray-400">
            by Renee DesignLab
          </p>
        </div>
      </Container>
    </footer>
  )
}
