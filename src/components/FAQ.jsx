import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Container, SectionHeader } from './UI'

const faqs = [
  {
    q: 'What documents are required for enrolment?',
    a: "A copy of the child's ID, a health report, 2 passport-size photographs and a signed parental consent form are required. After completing the online registration form, these documents can be submitted in person.",
  },
  {
    q: 'What are the camp hours?',
    a: 'Full-day programme runs 08:30–16:00 and half-day runs 09:00–12:15. Early drop-off is available from 08:00 and late pick-up until 17:00.',
  },
  {
    q: 'Are meals and snacks included?',
    a: 'Yes! The full-day programme includes breakfast, lunch and mid-morning snacks. All meals are prepared under the supervision of a qualified dietitian and dietary requirements and allergies are fully catered for.',
  },
  {
    q: 'Who are the coaches and instructors?',
    a: 'All our instructors are qualified specialists with child development certificates and extensive experience. Our staffing ratio is 1 instructor to every 8 students.',
  },
  {
    q: 'Which age groups do you accept?',
    a: 'We welcome children aged 4–15. Programmes are tailored to age groups: Little Explorers (4–6), Young Inventors (7–9), Super Coders (10–12) and Future Leaders (13–15).',
  },
  {
    q: 'What safety measures are in place?',
    a: 'The campus is monitored 24/7 with security cameras. Entry and exit are controlled by a card system. All staff hold first-aid certificates and a health officer is present on-site at all times.',
  },
  {
    q: 'What is the cancellation and refund policy?',
    a: 'Cancellations made 15 days before the start of camp are eligible for a 100% refund; 7 days before, 50%. Cancellations supported by a medical note are not subject to any time restriction.',
  },
  {
    q: 'Is there a sibling discount?',
    a: 'Yes! A 15% discount applies for the second child and 25% for the third and subsequent children. An additional 10% early-bird discount is also available during the early registration period.',
  },
]

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
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="sss" className="py-20 md:py-28 bg-gradient-to-b from-white to-[#EEF5F0] w-full">
      <Container>
        <SectionHeader
          badge="❓ FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know. Can't find what you're looking for? Get in touch!"
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
