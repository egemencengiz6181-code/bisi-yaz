import { motion } from 'framer-motion'
import { Shield, Globe, Heart, Trophy, Clock, Users } from 'lucide-react'
import { Container, SectionHeader } from './UI'

const features = [
  {
    icon: Shield,
    title: 'Safe & Secure Campus',
    description: '24/7 security, card-controlled entry, CCTV monitoring and first-aid certified staff at all times.',
    gradient: 'from-[#2D5A3F] to-[#3D7A56]',
    bg: 'bg-[#EEF5F0]',
  },
  {
    icon: Globe,
    title: 'British Curriculum',
    description: 'Programmes designed around The British School Istanbul\'s proven educational philosophy.',
    gradient: 'from-[#233256] to-[#3A5F8A]',
    bg: 'bg-slate-50',
  },
  {
    icon: Heart,
    title: 'Wellbeing First',
    description: 'Nutritionist-approved meals, rest time, and emotional wellbeing activities every day.',
    gradient: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Trophy,
    title: 'Expert Instructors',
    description: '30+ qualified coaches and specialist teachers with 1:8 staff-to-child ratios.',
    gradient: 'from-[#2D5A3F] to-[#233256]',
    bg: 'bg-[#EEF5F0]',
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Half-day or full-day options. Early drop-off from 08:00, late pick-up until 17:00.',
    gradient: 'from-teal-500 to-[#2D5A3F]',
    bg: 'bg-teal-50',
  },
  {
    icon: Users,
    title: 'Age-Specific Groups',
    description: 'Four carefully tailored age groups ensure every child thrives at their own level.',
    gradient: 'from-[#233256] to-[#2D5A3F]',
    bg: 'bg-slate-50',
  },
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
  return (
    <section id="ozellikler" className="py-20 md:py-28 bg-white w-full">
      <Container>
        <SectionHeader
          badge="⭐ Why Choose Us"
          title="Everything Your Child Needs"
          description="From safety to learning, every detail is thoughtfully crafted for an unforgettable summer experience."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative ${feature.bg} rounded-3xl p-7 border border-white hover:border-[#D5EDE0] transition-all cursor-default hover:shadow-xl hover:shadow-[#2D5A3F]/8`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg transition-shadow`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Subtle gradient accent line at top */}
              <div className={`absolute top-0 left-7 right-7 h-0.5 bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />

              <h3 className="text-lg font-extrabold text-[#233256] mb-2 font-[family-name:var(--font-display)] text-left">
                {feature.title}
              </h3>
              <p className="text-[#4D6359] text-sm leading-relaxed text-left">
                {feature.description}
              </p>
            </motion.div>
          ))}
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
            Trusted by families across Istanbul
          </p>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            Over 150 happy campers every summer since 2019
          </h3>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {['🇬🇧 British Curriculum', '✅ CCTV & Security', '🍽️ Dietitian-Approved Meals', '🏆 Award-Winning Teachers'].map((item) => (
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
