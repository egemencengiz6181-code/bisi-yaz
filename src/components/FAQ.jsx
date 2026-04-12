import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Container, SectionHeader } from './UI'
import { useLang } from '../LangContext'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-gray-100 rounded-2xl overflow-hidden hover:border-[#2D5A3F]/30 transition-colors"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
      >
        <span className="font-semibold text-[#233256] font-[family-name:var(--font-display)] pr-4 group-hover:text-[#2D5A3F] transition-colors">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2D5A3F]/10 flex items-center justify-center"
        >
          <ChevronDown className="w-5 h-5 text-[#2D5A3F]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 text-bisi-gray leading-relaxed border-t border-gray-50 pt-4 text-left">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const { t } = useLang()
  const [openIndex, setOpenIndex] = useState(null)
  const faq = t.faq

  return (
    <section id="sss" className="py-20 md:py-28 bg-gradient-to-b from-white to-[#EEF5F0] w-full">
      <Container>
        <SectionHeader
          badge={faq.badge}
          title={faq.title}
          description={faq.description}
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {faq.items.map((item, i) => (
            <FAQItem
              key={i}
              faq={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
