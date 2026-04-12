import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Camera, Globe, Play, MessageCircle, ArrowRight } from 'lucide-react'
import { Container } from './UI'
import { useState } from 'react'

const socialLinks = [
  { icon: Camera, href: '#', label: 'Instagram' },
  { icon: Globe, href: '#', label: 'Facebook' },
  { icon: Play, href: '#', label: 'YouTube' },
  { icon: MessageCircle, href: '#', label: 'Twitter' },
]

const quickLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Programmes', href: '#programlar' },
  { label: 'Activities', href: '#aktiviteler' },
  { label: 'Gallery', href: '#galeri' },
  { label: 'FAQ', href: '#sss' },
  { label: 'Contact', href: '#iletisim' },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setEmail('')
    }
  }

  return (
    <footer id="iletisim" className="bg-[#233256] text-white w-full">
      {/* CTA Banner */}
      <div className="bg-gradient-to-br from-[#2D5A3F] via-[#243D4A] to-[#233256]">
        <Container className="py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white font-[family-name:var(--font-display)] text-center">
              Start Your Child's Unforgettable Summer Now!
            </h2>
            <p className="mt-3 text-white/80 max-w-xl mx-auto text-center">
              Don't miss early enrolment benefits. Places are limited!
            </p>
            <motion.a
              href="#kayit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-white text-bisi-navy font-bold rounded-full shadow-xl hover:shadow-2xl transition-shadow cursor-pointer text-lg"
            >
              Enrol Now <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </Container>
      </div>

      {/* Main Footer */}
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo/e9e0290c-6285-409c-861c-ff95e3e44a32-2.png"
                alt="The British School Istanbul"
                className="h-12 w-auto object-contain bg-white rounded-lg p-1"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 text-left">
              The British School Istanbul English Summer Camp offers children a safe, inspiring environment to learn, grow and make unforgettable memories in Istanbul.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#2D5A3F]/60 hover:text-white transition-colors"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold font-[family-name:var(--font-display)] text-lg mb-4 text-left">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-start"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold font-[family-name:var(--font-display)] text-lg mb-4 text-left">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-[#6BAE8A] flex-shrink-0 mt-0.5" />
                <span className="text-left">The British School Istanbul, Beykoz, İstanbul</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-[#6BAE8A] flex-shrink-0" />
                +90 (212) 555 0123
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-[#6BAE8A] flex-shrink-0" />
                summercamp@britishschool.istanbul
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-bold font-[family-name:var(--font-display)] text-lg mb-4 text-left">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4 text-left">
              Stay informed about offers and updates.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 min-w-0 px-4 py-2.5 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#6BAE8A]/50 transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 bg-gradient-to-r from-[#2D5A3F] to-[#233256] rounded-xl text-white font-semibold text-sm whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500 text-center">
          <p className="text-center sm:text-left">© 2026 The British School Istanbul — English Summer Camp. All rights reserved.</p>
          <p className="font-medium text-gray-400 text-center sm:text-right">
            britishschool.istanbul
          </p>
        </div>
      </Container>
    </footer>
  )
}
