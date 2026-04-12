import { motion } from 'framer-motion'
import { Palette, Blocks, Rocket, GraduationCap, ArrowRight } from 'lucide-react'
import { Container, SectionHeader } from './UI'

const programs = [
  {
    age: '4-6 Yaş',
    title: 'Mini Kaşifler',
    emoji: '🧸',
    description: 'Oyun temelli öğrenme, yaratıcı sanat, hikâye zamanı ve temel motor beceriler.',
    color: 'from-pink-400 to-rose-400',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    icon: Palette,
    features: ['Yaratıcı Oyunlar', 'Hikâye Zamanı', 'Müzik & Dans', 'El Becerileri'],
  },
  {
    age: '7-9 Yaş',
    title: 'Genç Mucitler',
    emoji: '🔧',
    description: 'STEM projeleri, takım sporları, İngilizce atölyeleri ve doğa keşfi.',
    color: 'from-bisi-sky to-blue-500',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
    icon: Blocks,
    features: ['STEM Projeleri', 'Takım Sporları', 'İngilizce', 'Doğa Keşfi'],
  },
  {
    age: '10-12 Yaş',
    title: 'Süper Kodcular',
    emoji: '💻',
    description: 'Kodlama, robotik, girişimcilik ve liderlik becerileri.',
    color: 'from-bisi-purple to-violet-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    icon: Rocket,
    features: ['Kodlama', 'Robotik', 'Girişimcilik', 'Liderlik'],
  },
  {
    age: '13-15 Yaş',
    title: 'Gelecek Liderleri',
    emoji: '🎓',
    description: 'İleri düzey projeler, yabancı dil, münazara ve kariyer keşfi.',
    color: 'from-bisi-green to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    icon: GraduationCap,
    features: ['İleri Projeler', 'Yabancı Dil', 'Münazara', 'Kariyer Keşfi'],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Programs() {
  return (
    <section id="programlar" className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeader
          badge="🎯 Yaş Gruplarına Özel"
          title="Her Yaşa Uygun Programlar"
          description="Çocuğunuzun yaşına ve ilgi alanlarına göre özel olarak tasarlanmış programlarımız."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programs.map((prog) => (
            <motion.div
              key={prog.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative group rounded-3xl ${prog.bgColor} border ${prog.borderColor} p-6 cursor-pointer transition-shadow hover:shadow-xl`}
            >
              {/* Age badge */}
              <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r ${prog.color} text-white text-xs font-bold shadow-sm mb-4`}>
                {prog.age}
              </div>

              {/* Emoji + Title */}
              <div className="text-4xl mb-3">{prog.emoji}</div>
              <h3 className="text-xl font-extrabold text-bisi-navy font-[family-name:var(--font-display)] mb-2">
                {prog.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {prog.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-4">
                {prog.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${prog.color}`} />
                    {f}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-1 text-sm font-semibold text-bisi-orange group-hover:gap-2 transition-all">
                Detayları Gör <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
