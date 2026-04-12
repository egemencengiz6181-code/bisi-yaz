import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, Users, BookOpen, Award, Sparkles } from 'lucide-react'
import { Container } from './UI'
import { useLang } from '../LangContext'

const statIcons = [BookOpen, Users, Award, Sparkles]
const statValues = ['20+', '150+', '30+', '8']
const statKeys = ['workshops', 'campers', 'coaches', 'weeks']

// Letter-by-letter animation
const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

function AnimatedWord({ word, className, baseDelay = 0 }) {
  return (
    <span className={`inline-flex ${className}`} aria-label={word}>
      {word.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i + baseDelay}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

const orbs = [
  { size: 'w-96 h-96', pos: 'top-[-8rem] right-[-8rem]', color: 'bg-[#2D5A3F]/40', blur: 'blur-3xl', delay: 0 },
  { size: 'w-72 h-72', pos: 'bottom-[-4rem] left-[-4rem]', color: 'bg-[#233256]/50', blur: 'blur-3xl', delay: 1.5 },
  { size: 'w-48 h-48', pos: 'top-1/3 left-1/3', color: 'bg-emerald-500/10', blur: 'blur-2xl', delay: 3 },
  { size: 'w-32 h-32', pos: 'bottom-1/3 right-1/4', color: 'bg-teal-400/15', blur: 'blur-2xl', delay: 0.8 },
]

const floatingBadges = [
  { emoji: '🎨', label: 'Arts & Crafts', pos: 'top-[22%] left-[5%]', delay: 0.6 },
  { emoji: '⚽', label: 'Sports', pos: 'top-[30%] right-[5%]', delay: 0.9 },
  { emoji: '🔬', label: 'STEM', pos: 'bottom-[28%] left-[6%]', delay: 1.2 },
  { emoji: '🎵', label: 'Music', pos: 'bottom-[22%] right-[6%]', delay: 1.4 },
]

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#2D5A3F] via-[#243D4A] to-[#233256]">
      {/* Mesh grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Glowing orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute ${orb.size} ${orb.pos} ${orb.color} ${orb.blur} rounded-full pointer-events-none`}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6 + i * 1.5, repeat: Infinity, delay: orb.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Floating activity badges — desktop only */}
      {floatingBadges.map((badge, i) => (
        <motion.div
          key={i}
          className={`absolute ${badge.pos} hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-semibold`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{ opacity: { delay: badge.delay, duration: 0.6 }, y: { duration: 3 + i * 0.5, repeat: Infinity, delay: badge.delay, ease: 'easeInOut' } }}
        >
          <span className="text-base">{badge.emoji}</span> {badge.label}
        </motion.div>
      ))}

      <Container className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center">

          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8"
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"
            />
            <span className="text-white/90 text-sm font-semibold tracking-wide">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* ── MAIN SLOGAN ─────────────────────────────────────────── */}
          <div className="mb-6 overflow-hidden">
            <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
              <AnimatedWord word={t.hero.title[0]} className="text-white" baseDelay={0} />
            </div>
            <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight mt-1">
              <AnimatedWord
                word={t.hero.title[1]}
                className="bg-gradient-to-r from-emerald-300 via-teal-200 to-white bg-clip-text text-transparent"
                baseDelay={8}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-4"
            >
              <span className="text-white/40 text-lg sm:text-xl font-semibold tracking-widest uppercase">
                BISI Summer Camp 2026
              </span>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="text-white/65 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
          >
            {t.hero.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <motion.a
              href="#lokasyonlar"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(45,90,63,0.6)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-9 py-4 bg-white text-[#2D5A3F] font-bold rounded-full shadow-2xl text-lg hover:bg-white/95 transition-colors cursor-pointer"
            >
              {t.hero.cta1} <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#kayit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-9 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:border-white/60 hover:bg-white/10 transition-all cursor-pointer text-lg"
            >
              {t.hero.cta2}
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {statKeys.map((key, i) => {
              const Icon = statIcons[i]
              return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9 + i * 0.12 }}
                whileHover={{ y: -5, scale: 1.06 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center cursor-default"
              >
                <Icon className="w-6 h-6 text-emerald-300 mx-auto mb-2" />
                <div className="text-2xl font-black text-white leading-none">{statValues[i]}</div>
                <div className="text-white/55 text-xs font-medium mt-1">{t.hero.stats[key]}</div>
              </motion.div>
              )
            })}
          </motion.div>
        </div>
      </Container>

      {/* Animated logo card on the right — large screens */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block"
      >
        <div className="w-52 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center">
          <img
            src="/logo/e9e0290c-6285-409c-861c-ff95e3e44a32-2.png"
            alt="The British School Istanbul"
            className="h-14 w-auto object-contain mx-auto mb-4 brightness-0 invert"
          />
          <p className="text-white/80 text-xs font-semibold leading-snug mb-3">
            The British School Istanbul
          </p>
          <div className="flex justify-center gap-2 text-2xl flex-wrap">
            {['🎨', '⚽', '🔬', '🎵', '📚'].map((e, i) => (
              <motion.span
                key={e}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {e}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/35 flex flex-col items-center gap-1"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <ArrowDown className="w-5 h-5" />
      </motion.div>
    </section>
  )
}

