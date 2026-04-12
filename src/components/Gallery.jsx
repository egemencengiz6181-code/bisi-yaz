import { motion } from 'framer-motion'
import { Container, SectionHeader } from './UI'

const images = [
  { id: 1, emoji: '🎨', title: 'Sanat Atölyesi', color: 'from-pink-200 to-rose-100', span: 'col-span-1 row-span-1' },
  { id: 2, emoji: '⚽', title: 'Spor Sahanız', color: 'from-green-200 to-emerald-100', span: 'col-span-1 row-span-2' },
  { id: 3, emoji: '🔬', title: 'Bilim Laboratuvarı', color: 'from-blue-200 to-sky-100', span: 'col-span-1 row-span-1' },
  { id: 4, emoji: '🎵', title: 'Müzik Odası', color: 'from-purple-200 to-violet-100', span: 'col-span-1 row-span-1' },
  { id: 5, emoji: '🏊', title: 'Yüzme Havuzu', color: 'from-cyan-200 to-teal-100', span: 'col-span-2 row-span-1' },
  { id: 6, emoji: '🌳', title: 'Açık Alan Aktiviteleri', color: 'from-lime-200 to-green-100', span: 'col-span-1 row-span-1' },
  { id: 7, emoji: '💻', title: 'Kodlama Lab', color: 'from-indigo-200 to-blue-100', span: 'col-span-1 row-span-1' },
  { id: 8, emoji: '🎭', title: 'Drama Sahnesi', color: 'from-amber-200 to-yellow-100', span: 'col-span-1 row-span-1' },
  { id: 9, emoji: '🍳', title: 'Mini Mutfak', color: 'from-orange-200 to-red-100', span: 'col-span-1 row-span-1' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export default function Gallery() {
  return (
    <section id="galeri" className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeader
          badge="📸 Galeri"
          title="Kampımızdan Kareler"
          description="BISI Summer Camp'in enerjik ve renkli dünyasına bir göz atın."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]"
        >
          {images.map((img) => (
            <motion.div
              key={img.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className={`${img.span} relative group rounded-2xl bg-gradient-to-br ${img.color} overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <motion.span
                  className="text-5xl md:text-6xl"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {img.emoji}
                </motion.span>
                <h3 className="mt-3 font-bold text-gray-700 font-[family-name:var(--font-display)] text-sm md:text-base">
                  {img.title}
                </h3>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
