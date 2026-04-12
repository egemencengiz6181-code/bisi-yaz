import { motion } from 'framer-motion'
import { Container, SectionHeader } from './UI'

/* Unsplash stock images — summer camp activities */
const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=600&q=80',
    title: 'Arts & Crafts',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1551958219-acbc6e10a13c?w=600&q=80',
    title: 'Football',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1532094349884-543290ece2bd?w=600&q=80',
    title: 'Science Lab',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
    title: 'Music',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=900&q=80',
    title: 'Swimming Pool',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=600&q=80',
    title: 'Outdoor Activities',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
    title: 'Coding Lab',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=600&q=80',
    title: 'Drama Stage',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    title: 'Mini Kitchen',
    span: 'col-span-1 row-span-1',
  },
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
    <section id="galeri" className="py-20 md:py-28 bg-white w-full">
      <Container>
        <SectionHeader
          badge="📸 Gallery"
          title="Life at Camp"
          description="Take a look at the energetic and colourful world of the English Summer Camp."
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
              className={`${img.span} relative group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bisi-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-bold text-white font-[family-name:var(--font-display)] text-sm md:text-base text-left">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
