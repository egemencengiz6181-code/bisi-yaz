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
        <span className="inline-block px-4 py-1.5 bg-bisi-yellow/15 text-bisi-orange font-semibold text-sm rounded-full mb-4 font-[family-name:var(--font-display)]">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-bisi-navy leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
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
      className={`inline-flex items-center gap-2 bg-gradient-to-r from-bisi-yellow to-bisi-orange text-white font-bold rounded-full shadow-lg shadow-bisi-yellow/30 hover:shadow-xl hover:shadow-bisi-yellow/40 transition-shadow cursor-pointer ${sizes[size]} ${className}`}
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
      className={`inline-flex items-center gap-2 border-2 border-bisi-navy/20 text-bisi-navy font-semibold rounded-full px-7 py-3.5 hover:border-bisi-yellow hover:text-bisi-orange transition-colors cursor-pointer ${className}`}
    >
      {children}
    </motion.a>
  )
}

export function Container({ children, className = '' }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
