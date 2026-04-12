import { motion } from 'framer-motion'

export function SectionHeader({ badge, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 md:mb-16"
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-[#2D5A3F]/10 text-[#2D5A3F] font-semibold text-sm rounded-full mb-4 font-[family-name:var(--font-display)]">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-bisi-navy leading-tight text-center">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-bisi-gray max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-center">
          {description}
        </p>
      )}
    </motion.div>
  )
}

export function PrimaryButton({ children, href = '#kayit', size = 'md', className = '' }) {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  }

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 bg-gradient-to-r from-[#2D5A3F] to-[#233256] text-white font-bold rounded-full shadow-lg shadow-[#2D5A3F]/20 hover:shadow-xl hover:shadow-[#2D5A3F]/30 transition-shadow cursor-pointer ${sizes[size]} ${className}`}
    >
      {children}
    </motion.a>
  )
}

export function SecondaryButton({ children, href = '#', className = '' }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 border-2 border-[#2D5A3F]/40 text-[#2D5A3F] font-semibold rounded-full px-7 py-3.5 hover:border-[#233256] hover:text-[#233256] transition-colors cursor-pointer ${className}`}
    >
      {children}
    </motion.a>
  )
}

export function Container({ children, className = '' }) {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
