import { motion } from 'framer-motion'
import { 
  Dumbbell, Palette, Languages, Cpu, Music, TreePine, 
  Camera, Gamepad2, ChefHat, Telescope 
} from 'lucide-react'
import { Container, SectionHeader } from './UI'
import { useLang } from '../LangContext'

const activityIcons = [Dumbbell, Palette, Languages, Cpu, Music, TreePine, Camera, Gamepad2, ChefHat, Telescope]
const activityColors = [
  'from-red-400 to-orange-400',
  'from-pink-400 to-rose-400',
  'from-[#233256] to-[#3D7A56]',
  'from-violet-400 to-purple-400',
  'from-amber-400 to-yellow-400',
  'from-green-400 to-emerald-400',
  'from-cyan-400 to-teal-400',
  'from-indigo-400 to-blue-400',
  'from-orange-400 to-red-400',
  'from-slate-400 to-gray-500',
]
const activityEmojis = ['⚽','🎨','🌍','🤖','🎵','🌿','📸','🎮','👨‍🍳','🔭']

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
}

export default function Activities() {
  const { t } = useLang()
  const act = t.activities

  return (
    <section id="aktiviteler" className="py-20 md:py-28 bg-gradient-to-b from-[#EEF5F0] to-white w-full">
      <Container>
        <SectionHeader
          badge={act.badge}
          title={act.title}
          description={act.description}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {act.items.map((item, i) => {
            const Icon = activityIcons[i]
            return (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.05 }}
              className="group bg-white rounded-2xl p-5 shadow-md shadow-[#2D5A3F]/5 border border-gray-50 hover:shadow-xl hover:border-[#D5EDE0] transition-all cursor-pointer text-center"
            >
              <div className={`w-14 h-14 mx-auto mb-3 bg-gradient-to-br ${activityColors[i]} rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-2xl mb-1">{activityEmojis[i]}</div>
              <h3 className="font-bold text-bisi-navy font-[family-name:var(--font-display)] text-sm md:text-base text-center">
                {item.title}
              </h3>
              <p className="text-xs text-bisi-gray mt-1 leading-relaxed hidden sm:block text-center">
                {item.desc}
              </p>
            </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
