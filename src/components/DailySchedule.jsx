import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock } from 'lucide-react'
import { Container, SectionHeader } from './UI'

const tabs = [
  { id: 'tam', label: 'Full Day', emoji: '☀️' },
  { id: 'yarim', label: 'Half Day', emoji: '🌤️' },
]

const schedules = {
  tam: [
    { time: '08:30 – 09:00', title: 'Welcome & Breakfast', desc: 'A warm welcome and a healthy breakfast to start the day.', emoji: '🥐', accent: 'from-amber-400 to-orange-400' },
    { time: '09:00 – 10:30', title: 'Morning Workshop', desc: 'Creativity time in STEM, coding or art workshops.', emoji: '🔬', accent: 'from-sky-400 to-blue-500' },
    { time: '10:30 – 10:45', title: 'Break & Snack', desc: 'Fruit and healthy snacks to recharge.', emoji: '🍎', accent: 'from-emerald-400 to-green-500' },
    { time: '10:45 – 12:15', title: 'Sports & Movement', desc: 'Team sports, swimming or dance activities.', emoji: '🏃', accent: 'from-orange-400 to-red-400' },
    { time: '12:15 – 13:00', title: 'Lunch', desc: 'A nutritious and delicious midday meal.', emoji: '🍽️', accent: 'from-rose-400 to-pink-500' },
    { time: '13:00 – 14:30', title: 'Creative Projects', desc: 'Express yourself through music, drama and crafts.', emoji: '🎭', accent: 'from-purple-400 to-violet-500' },
    { time: '14:30 – 15:30', title: 'Discovery Time', desc: 'Nature walks, garden activities or science experiments.', emoji: '🌿', accent: 'from-[#2D5A3F] to-[#3D7A56]' },
    { time: '15:30 – 16:00', title: 'Farewell & Pick-up', desc: 'Day review, sharing time and meeting parents.', emoji: '👋', accent: 'from-[#233256] to-[#3A5F8A]' },
  ],
  yarim: [
    { time: '09:00 – 09:15', title: 'Welcome', desc: 'An energetic start – hello to the day!', emoji: '👋', accent: 'from-amber-400 to-orange-400' },
    { time: '09:15 – 10:30', title: 'Main Workshop', desc: 'Age-specific main activity and project work.', emoji: '🎯', accent: 'from-sky-400 to-blue-500' },
    { time: '10:30 – 10:45', title: 'Break', desc: 'Snack and free-play time.', emoji: '🧃', accent: 'from-emerald-400 to-green-500' },
    { time: '10:45 – 12:00', title: 'Sports / Arts', desc: 'Fun activities combining movement and creativity.', emoji: '⚽', accent: 'from-orange-400 to-red-400' },
    { time: '12:00 – 12:15', title: 'Farewell & Pick-up', desc: "Sharing the day's highlights and a cheerful goodbye.", emoji: '🌟', accent: 'from-[#233256] to-[#3A5F8A]' },
  ],
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] } }),
}

export default function DailySchedule() {
  const [activeTab, setActiveTab] = useState('tam')

  return (
    <section id="gunluk-plan" className="py-24 md:py-32 bg-[#FAFAF8] w-full">
      <Container>
        <SectionHeader
          badge="📅 Daily Schedule"
          title="A Day at Camp"
          description="A carefully planned day that blends fun and learning throughout."
        />

        {/* Elegant tab switcher */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex bg-white border border-gray-200/80 shadow-sm rounded-2xl p-1.5 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === tab.id ? 'text-white' : 'text-[#4D6359] hover:text-[#2D5A3F]'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabSchedule"
                    className="absolute inset-0 bg-gradient-to-r from-[#2D5A3F] to-[#233256] rounded-xl shadow-md shadow-[#2D5A3F]/25"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.emoji} {tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto"
          >
            {schedules[activeTab].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
                className="group relative bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#2D5A3F]/7 transition-shadow duration-300 overflow-hidden flex gap-4"
              >
                {/* Left accent strip */}
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl bg-gradient-to-b ${item.accent}`} />

                {/* Emoji */}
                <span className="text-3xl flex-shrink-0 leading-none mt-0.5">{item.emoji}</span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Time badge */}
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#2D5A3F] bg-[#EEF5F0] px-2.5 py-1 rounded-full mb-2 tracking-wide uppercase">
                    <Clock className="w-2.5 h-2.5" />
                    {item.time}
                  </span>
                  <h3 className="font-bold text-[#233256] text-sm leading-snug mb-1">{item.title}</h3>
                  <p className="text-xs text-[#4D6359] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}

