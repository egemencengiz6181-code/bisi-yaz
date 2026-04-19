import { motion } from 'framer-motion'
import { MapPin, ArrowRight, ExternalLink, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Container, SectionHeader } from './UI'
import { useLang } from '../LangContext'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function CampusCard({ campus, labels }) {
  const isExternal = Boolean(campus.externalLink)
  const navigate = useNavigate()
  const internalPath = `/${campus.id}`

  const handleCardClick = () => {
    if (isExternal) {
      window.open(campus.externalLink, '_blank', 'noopener,noreferrer')
    } else {
      navigate(internalPath)
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={handleCardClick}
      className="relative group bg-white rounded-3xl overflow-hidden shadow-lg shadow-[#2D5A3F]/8 border border-gray-100 hover:shadow-2xl hover:shadow-[#2D5A3F]/15 transition-all duration-400 cursor-pointer"
    >
      {/* Image header */}
      <div className="relative h-48 overflow-hidden">
        {/* Campus photo */}
        <img
          src={campus.image}
          alt={campus.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Color gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${campus.color} opacity-40`} />
        {/* Bottom fade for smooth transition into card body */}
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white/90 to-transparent" />

        {/* Special badge for Zekeriyaköy */}
        {campus.badge && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full">
            <Star className="w-3 h-3 fill-current" />
            {campus.badge}
          </div>
        )}

        {/* External link indicator */}
        {isExternal && (
          <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full p-1.5">
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-black text-[#233256] text-left leading-tight">
            {campus.name}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 mb-3">
          <MapPin className="w-3.5 h-3.5 text-[#2D5A3F] flex-shrink-0" />
          <span className="text-sm text-[#4D6359] font-medium">{campus.district}</span>
        </div>

        <p className="text-sm text-[#4D6359] leading-relaxed mb-4 text-left">
          {campus.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {campus.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-2.5 py-1 bg-[#EEF5F0] text-[#2D5A3F] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        {isExternal ? (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => { e.stopPropagation(); handleCardClick() }}
            className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-emerald-600 to-[#2D5A3F] text-white font-bold rounded-2xl text-sm shadow-md hover:shadow-lg transition-shadow"
          >
            <ExternalLink className="w-4 h-4" />
            {labels.visitSite}
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => { e.stopPropagation(); navigate(internalPath) }}
            className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#2D5A3F] to-[#233256] text-white font-bold rounded-2xl text-sm shadow-md hover:shadow-lg transition-shadow"
          >
            {labels.learnMore} <ArrowRight className="w-4 h-4" />
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}

export default function Locations() {
  const { t } = useLang()
  const loc = t.locations

  return (
    <section id="lokasyonlar" className="py-20 md:py-28 bg-white w-full">
      <Container>
        <SectionHeader
          badge={loc.badge}
          title={loc.title}
          description={loc.description}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {loc.campuses.map((campus) => (
            <CampusCard key={campus.id} campus={campus} labels={loc} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
