import { motion } from 'framer-motion'
import { ArrowRight, Users, BookOpen, Award, Sparkles } from 'lucide-react'
import { Container, PrimaryButton, SecondaryButton } from './UI'

const stats = [
  { icon: BookOpen, value: '20+', label: 'Atölye Çalışması' },
  { icon: Users, value: '150+', label: 'Mutlu Öğrenci' },
  { icon: Award, value: '30+', label: 'Uzman Eğitmen' },
  { icon: Sparkles, value: '8', label: 'Hafta Macera' },
]

const floatingShapes = [
  { className: 'w-20 h-20 bg-bisi-yellow/20 rounded-full top-20 left-10', delay: 0 },
  { className: 'w-14 h-14 bg-bisi-sky/20 rounded-2xl top-40 right-20', delay: 0.5 },
  { className: 'w-10 h-10 bg-bisi-pink/20 rounded-full bottom-32 left-20', delay: 1 },
  { className: 'w-16 h-16 bg-bisi-green/15 rounded-3xl bottom-20 right-10', delay: 1.5 },
  { className: 'w-12 h-12 bg-bisi-purple/15 rounded-full top-60 left-1/2', delay: 0.8 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12 bg-gradient-to-br from-white via-bisi-light to-bisi-yellow/5">
      {/* Floating decorations */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.className} hidden md:block`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-bisi-yellow/10 rounded-full mb-6"
            >
              <span className="text-2xl">☀️</span>
              <span className="text-sm font-semibold text-bisi-orange font-[family-name:var(--font-display)]">
                2026 Yaz Kampı Kayıtları Açık!
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight">
              <span className="text-bisi-navy">Unutulmaz Bir</span>
              <br />
              <span className="bg-gradient-to-r from-bisi-yellow via-bisi-orange to-bisi-pink bg-clip-text text-transparent">
                Yaz Macerası
              </span>
              <br />
              <span className="text-bisi-navy">Başlıyor! 🚀</span>
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg">
              BISI Summer Camp'te çocuğunuz eğlenceli atölyeler, spor aktiviteleri 
              ve yaratıcı projelerle dolu unutulmaz bir yaz geçirecek.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton size="lg" href="#kayit">
                Hemen Kaydol <ArrowRight className="w-5 h-5" />
              </PrimaryButton>
              <SecondaryButton href="#programlar">
                Programları Keşfet
              </SecondaryButton>
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-bisi-yellow/30 via-bisi-orange/20 to-bisi-pink/20 rounded-[3rem] rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-tr from-bisi-sky/20 via-bisi-green/10 to-bisi-purple/15 rounded-[3rem] -rotate-3" />
              
              {/* Main content area */}
              <div className="relative z-10 w-full h-full rounded-[2.5rem] bg-gradient-to-br from-bisi-yellow to-bisi-orange p-1">
                <div className="w-full h-full rounded-[2.3rem] bg-white flex flex-col items-center justify-center gap-6 p-8">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="text-8xl"
                  >
                    🌞
                  </motion.div>
                  <div className="text-center">
                    <p className="text-5xl font-black font-[family-name:var(--font-display)] text-bisi-navy">BISI</p>
                    <p className="text-2xl font-bold font-[family-name:var(--font-display)] text-bisi-orange">Summer Camp</p>
                    <p className="text-sm text-gray-400 mt-2 font-medium">Haziran - Ağustos 2026</p>
                  </div>
                  <div className="flex gap-3 text-3xl">
                    <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }}>🎨</motion.span>
                    <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>⚽</motion.span>
                    <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>🔬</motion.span>
                    <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}>🎵</motion.span>
                    <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}>📚</motion.span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-5 shadow-lg shadow-gray-100 border border-gray-50 text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-bisi-yellow/20 to-bisi-orange/10 rounded-xl flex items-center justify-center group-hover:from-bisi-yellow/30 group-hover:to-bisi-orange/20 transition-colors">
                <stat.icon className="w-6 h-6 text-bisi-orange" />
              </div>
              <div className="text-2xl md:text-3xl font-black text-bisi-navy font-[family-name:var(--font-display)]">{stat.value}</div>
              <div className="text-sm text-gray-400 font-medium mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
