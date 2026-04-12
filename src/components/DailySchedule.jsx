import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Sun, Coffee, Sunset, Moon } from 'lucide-react'
import { Container, SectionHeader } from './UI'

const tabs = [
  { id: 'tam', label: 'Full Day', emoji: '☀️' },
  { id: 'yarim', label: 'Half Day', emoji: '🌤️' },
]

const schedules = {
  tam: [
    { time: '08:30 – 09:00', title: 'Welcome & Breakfast', desc: 'A warm welcome and a healthy breakfast to start the day.', icon: Coffee, emoji: '🥐', color: 'bg-amber-100 text-amber-700' },
    { time: '09:00 – 10:30', title: 'Morning Workshop', desc: 'Creativity time in STEM, coding or art workshops.', icon: Sun, emoji: '🔬', color: 'bg-sky-100 text-sky-700' },
    { time: '10:30 – 10:45', title: 'Break & Snack', desc: 'Fruit and healthy snacks to recharge.', icon: Coffee, emoji: '🍎', color: 'bg-green-100 text-green-700' },
    { time: '10:45 – 12:15', title: 'Sports & Movement', desc: 'Team sports, swimming or dance activities.', icon: Sun, emoji: '🏃', color: 'bg-orange-100 text-orange-700' },
    { time: '12:15 – 13:00', title: 'Lunch', desc: 'A nutritious and delicious midday meal.', icon: Coffee, emoji: '🍽️', color: 'bg-red-100 text-red-700' },
    { time: '13:00 – 14:30', title: 'Creative Projects', desc: 'Express yourself through music, drama and crafts.', icon: Sunset, emoji: '🎭', color: 'bg-purple-100 text-purple-700' },
    { time: '14:30 – 15:30', title: 'Discovery Time', desc: 'Nature walks, garden activities or science experiments.', icon: Sunset, emoji: '🌿', color: 'bg-emerald-100 text-emerald-700' },
    { time: '15:30 – 16:00', title: 'Farewell & Pick-up', desc: 'Day review, sharing time and meeting parents.', icon: Moon, emoji: '👋', color: 'bg-indigo-100 text-indigo-700' },
  ],
  yarim: [
    { time: '09:00 – 09:15', title: 'Welcome', desc: 'An energetic start – hello to the day!', icon: Coffee, emoji: '👋', color: 'bg-amber-100 text-amber-700' },
    { time: '09:15 – 10:30', title: 'Main Workshop', desc: 'Age-specific main activity and project work.', icon: Sun, emoji: '🎯', color: 'bg-sky-100 text-sky-700' },
    { time: '10:30 – 10:45', title: 'Break', desc: 'Snack and free-play time.', icon: Coffee, emoji: '🧃', color: 'bg-green-100 text-green-700' },
    { time: '10:45 – 12:00', title: 'Sports / Arts', desc: 'Fun activities combining movement and creativity.', icon: Sun, emoji: '⚽', color: 'bg-orange-100 text-orange-700' },
    { time: '12:00 – 12:15', title: 'Farewell & Pick-up', desc: "Sharing the day's highlights and a cheerful goodbye.", icon: Moon, emoji: '🌟', color: 'bg-indigo-100 text-indigo-700' },
  ],
}

export default function DailySchedule() {
  const [activeTab, setActiveTab] = useState('tam')

  return (
    <section id="gunluk-plan" className="py-20 md:py-28 bg-white w-full">
      <Container>
        <SectionHeader
          badge="📅 Daily Schedule"
          title="A Day at Camp"
          description="A carefully planned day that blends fun and learning throughout."
        />

        {/* Tab selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-2xl p-1.5 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-bisi-gray hover:text-bisi-navy'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#2D5A3F] to-[#233256] rounded-xl"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.emoji} {tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2D5A3F] via-[#3D7A56] to-[#233256]" />

              <div className="space-y-4">
                {schedules[activeTab].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="relative flex gap-4 md:gap-6 pl-2"
                  >
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-4 border-[#2D5A3F] flex items-center justify-center text-lg shadow-sm">
                      {item.emoji}
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-white rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow mb-2">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${item.color}`}>
                          <Clock className="w-3 h-3" />
                          {item.time}
                        </span>
                      </div>
                      <h3 className="font-bold text-bisi-navy font-[family-name:var(--font-display)] text-left">{item.title}</h3>
                      <p className="text-sm text-bisi-gray mt-1 text-left">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}

