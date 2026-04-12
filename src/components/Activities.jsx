import { motion } from 'framer-motion'
import { 
  Dumbbell, Palette, Languages, Cpu, Music, TreePine, 
  Camera, Gamepad2, ChefHat, Telescope 
} from 'lucide-react'
import { Container, SectionHeader } from './UI'

const activities = [
  { icon: Dumbbell, title: 'Spor', desc: 'Futbol, basketbol, yüzme ve daha fazlası', color: 'from-red-400 to-orange-400', emoji: '⚽' },
  { icon: Palette, title: 'Sanat', desc: 'Resim, heykel, seramik ve yaratıcı atölyeler', color: 'from-pink-400 to-rose-400', emoji: '🎨' },
  { icon: Languages, title: 'İngilizce', desc: 'Oyunlarla eğlenceli dil öğrenimi', color: 'from-blue-400 to-indigo-400', emoji: '🌍' },
  { icon: Cpu, title: 'STEM & Kodlama', desc: 'Robotik, kodlama ve bilim deneyleri', color: 'from-violet-400 to-purple-400', emoji: '🤖' },
  { icon: Music, title: 'Müzik', desc: 'Enstrüman, ritim ve koro çalışmaları', color: 'from-amber-400 to-yellow-400', emoji: '🎵' },
  { icon: TreePine, title: 'Doğa', desc: 'Bahçecilik, doğa yürüyüşleri ve kamp', color: 'from-green-400 to-emerald-400', emoji: '🌿' },
  { icon: Camera, title: 'Medya', desc: 'Fotoğrafçılık, video ve dijital sanat', color: 'from-cyan-400 to-teal-400', emoji: '📸' },
  { icon: Gamepad2, title: 'Oyun Tasarımı', desc: 'Dijital ve analog oyun geliştirme', color: 'from-indigo-400 to-blue-400', emoji: '🎮' },
  { icon: ChefHat, title: 'Mini Mutfak', desc: 'Eğlenceli ve sağlıklı tarifler', color: 'from-orange-400 to-red-400', emoji: '👨‍🍳' },
  { icon: Telescope, title: 'Keşif Kulübü', desc: 'Astronomi, arkeoloji mikro maceralar', color: 'from-slate-400 to-gray-500', emoji: '🔭' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
}

export default function Activities() {
  return (
    <section id="aktiviteler" className="py-20 md:py-28 bg-gradient-to-b from-bisi-light to-white">
      <Container>
        <SectionHeader
          badge="🌈 Aktiviteler"
          title="Keşfetmeye Hazır mısın?"
          description="Spor, sanat, teknoloji ve doğa... Her ilgi alanına uygun onlarca aktivite!"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {activities.map((act) => (
            <motion.div
              key={act.title}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.05 }}
              className="group bg-white rounded-2xl p-5 shadow-md shadow-gray-100 border border-gray-50 hover:shadow-xl hover:border-gray-100 transition-all cursor-pointer text-center"
            >
              <div className={`w-14 h-14 mx-auto mb-3 bg-gradient-to-br ${act.color} rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow`}>
                <act.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-2xl mb-1">{act.emoji}</div>
              <h3 className="font-bold text-bisi-navy font-[family-name:var(--font-display)] text-sm md:text-base">
                {act.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed hidden sm:block">
                {act.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
