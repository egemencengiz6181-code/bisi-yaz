import { motion } from 'framer-motion'
import { Container, SectionHeader } from './UI'
import { useLang } from '../LangContext'

/* Local gallery images from public/galeri/ — heic and double-extension files excluded */
const images = [
  { id: 1,  src: '/galeri/2.png' },
  { id: 2,  src: '/galeri/3.png' },
  { id: 3,  src: '/galeri/5.png' },
  { id: 4,  src: '/galeri/7.png' },
  { id: 5,  src: '/galeri/8.png' },
  { id: 6,  src: '/galeri/9.png' },
  { id: 7,  src: '/galeri/11.png' },
  { id: 8,  src: '/galeri/12.png' },
  { id: 9,  src: '/galeri/13.png' },
  { id: 10, src: '/galeri/14.png' },
  { id: 11, src: '/galeri/28.png' },
  { id: 12, src: '/galeri/20250901_103835.jpg' },
  { id: 13, src: '/galeri/20250901_110016.jpg' },
  { id: 14, src: '/galeri/20251103_113450.jpg' },
  { id: 15, src: '/galeri/20251104_111341.jpg' },
  { id: 16, src: '/galeri/20251104_113557.jpg' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.93, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Gallery() {
  const { t } = useLang()
  const gal = t.gallery

  return (
    <section id="galeri" className="py-20 md:py-28 bg-[#FAFAF8] w-full">
      <Container>
        <SectionHeader
          badge={gal.badge}
          title={gal.title}
          description={gal.description}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {images.map((img) => (
            <motion.div
              key={img.id}
              variants={itemVariants}
              className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 aspect-[4/3] cursor-pointer"
            >
              <img
                src={img.src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover brightness overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#233256]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
