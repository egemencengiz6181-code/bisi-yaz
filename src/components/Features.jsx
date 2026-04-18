import { motion } from 'framer-motion'
import { Shield, Globe, Heart, Trophy, Clock, Users } from 'lucide-react'
import { Container, SectionHeader } from './UI'
import { useLang } from '../LangContext'

const featureIcons = [Shield, Globe, Heart, Trophy, Clock, Users]
const featureStyles = [
  { gradient: 'from-[#2D5A3F] to-[#3D7A56]',  bg: 'bg-[#EEF5F0]' },
  { gradient: 'from-[#233256] to-[#3A5F8A]',  bg: 'bg-slate-50' },
  { gradient: 'from-emerald-500 to-teal-600',  bg: 'bg-emerald-50' },
  { gradient: 'from-[#2D5A3F] to-[#233256]',  bg: 'bg-[#EEF5F0]' },
  { gradient: 'from-teal-500 to-[#2D5A3F]',   bg: 'bg-teal-50' },
  { gradient: 'from-[#233256] to-[#2D5A3F]',  bg: 'bg-slate-50' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Features() {
  const { t } = useLang()
  const feat = t.features

  return (
    <section id="ozellikler" className="py-20 md:py-28 bg-white w-full">
      <Container>
        <SectionHeader
          badge={feat.badge}
          title={feat.title}
          description={feat.description}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {feat.items.map((feature, i) => {
            const Icon = featureIcons[i]
            const style = featureStyles[i]
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`group relative ${style.bg} rounded-3xl p-7 border border-white hover:border-[#D5EDE0] transition-all cursor-default hover:shadow-xl hover:shadow-[#2D5A3F]/8`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${style.gradient} flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg transition-shadow`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className={`absolute top-0 left-7 right-7 h-0.5 bg-gradient-to-r ${style.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                <h3 className="text-lg font-extrabold text-[#233256] mb-2 font-[family-name:var(--font-display)] text-left">
                  {feature.title}
                </h3>
                <p className="text-[#4D6359] text-sm leading-relaxed text-left">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-3xl bg-gradient-to-br from-[#2D5A3F] via-[#243D4A] to-[#233256] p-8 md:p-10 text-center"
        >
          <p className="text-white/80 text-sm uppercase tracking-widest font-semibold mb-3">
            {feat.trust.sub}
          </p>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            {feat.trust.title}
          </h3>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {feat.trust.badges.map((item) => (
              <span key={item} className="text-white/80 text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
