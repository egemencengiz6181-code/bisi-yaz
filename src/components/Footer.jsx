import { motion } from 'framer-motion'
import { Sun, MapPin, Phone, Mail, Camera, Globe, Play, MessageCircle, ArrowRight } from 'lucide-react'
import { Container } from './UI'
import { useState } from 'react'

const socialLinks = [
  { icon: Camera, href: '#', label: 'Instagram' },
  { icon: Globe, href: '#', label: 'Facebook' },
  { icon: Play, href: '#', label: 'YouTube' },
  { icon: MessageCircle, href: '#', label: 'Twitter' },
]

const quickLinks = [
  { label: 'Hakkımızda', href: '#' },
  { label: 'Programlar', href: '#programlar' },
  { label: 'Aktiviteler', href: '#aktiviteler' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'SSS', href: '#sss' },
  { label: 'İletişim', href: '#iletisim' },
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
    <footer id="iletisim" className="bg-bisi-navy text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-bisi-yellow via-bisi-orange to-bisi-pink">
        <Container className="py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white font-[family-name:var(--font-display)]">
              Çocuğunuzun Unutulmaz Yazı Şimdi Başlasın! 🌟
            </h2>
            <p className="mt-3 text-white/80 max-w-xl mx-auto">
              Erken kayıt avantajlarını kaçırmayın. Yerimiz sınırlı!
            </p>
            <motion.a
              href="#kayit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-white text-bisi-orange font-bold rounded-full shadow-xl hover:shadow-2xl transition-shadow cursor-pointer text-lg"
            >
              Hemen Kayıt Ol <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </Container>
      </div>

      {/* Main Footer */}
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-bisi-yellow to-bisi-orange rounded-xl flex items-center justify-center">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <span className="font-extrabold text-xl font-[family-name:var(--font-display)]">
                BISI <span className="text-bisi-yellow">Camp</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              BISI Summer Camp, çocukların güvenli bir ortamda eğlenirken öğrenmelerini sağlayan, 
              İstanbul'un en kapsamlı yaz kampıdır.
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
            <h3 className="font-bold font-[family-name:var(--font-display)] text-lg mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-bisi-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold font-[family-name:var(--font-display)] text-lg mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-bisi-yellow flex-shrink-0 mt-0.5" />
                BISI Kampüsü, Beykoz, İstanbul
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-bisi-yellow flex-shrink-0" />
                +90 (212) 555 0123
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-bisi-yellow flex-shrink-0" />
                info@bisisummercamp.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-bold font-[family-name:var(--font-display)] text-lg mb-4">Bülten</h3>
            <p className="text-gray-400 text-sm mb-4">
              Kampanya ve güncellemelerden haberdar olun.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                required
                className="flex-1 min-w-0 px-4 py-2.5 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-bisi-yellow/50 transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 bg-gradient-to-r from-bisi-yellow to-bisi-orange rounded-xl text-white font-semibold text-sm whitespace-nowrap"
              >
                Gönder
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-gray-500">
          <p>© 2026 BISI Summer Camp. Tüm hakları saklıdır.</p>
          <p className="font-medium text-gray-400">
            by Renee DesignLab
          </p>
        </div>
      </Container>
    </footer>
  )
}
