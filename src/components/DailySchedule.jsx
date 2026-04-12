import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Sun, Coffee, Sunset, Moon } from 'lucide-react'
import { Container, SectionHeader } from './UI'

const tabs = [
  { id: 'tam', label: 'Tam Gün', emoji: '☀️' },
  { id: 'yarim', label: 'Yarım Gün', emoji: '🌤️' },
]

const schedules = {
  tam: [
    { time: '08:30 - 09:00', title: 'Karşılama & Kahvaltı', desc: 'Sıcak bir karşılama ve sağlıklı kahvaltı ile güne başlıyoruz.', icon: Coffee, emoji: '🥐', color: 'bg-amber-100 text-amber-700' },
    { time: '09:00 - 10:30', title: 'Sabah Atölyesi', desc: 'STEM, kodlama veya sanat atölyelerinde yaratıcılık zamanı.', icon: Sun, emoji: '🔬', color: 'bg-sky-100 text-sky-700' },
    { time: '10:30 - 10:45', title: 'Mola & Atıştırma', desc: 'Meyve ve sağlıklı atıştırmalıklar ile enerji dolumu.', icon: Coffee, emoji: '🍎', color: 'bg-green-100 text-green-700' },
    { time: '10:45 - 12:15', title: 'Spor & Hareket', desc: 'Takım sporları, yüzme veya dans aktiviteleri.', icon: Sun, emoji: '🏃', color: 'bg-orange-100 text-orange-700' },
    { time: '12:15 - 13:00', title: 'Öğle Yemeği', desc: 'Besleyici ve lezzetli öğle yemeği menüsü.', icon: Coffee, emoji: '🍽️', color: 'bg-red-100 text-red-700' },
    { time: '13:00 - 14:30', title: 'Yaratıcı Projeler', desc: 'Müzik, drama ve el sanatları ile kendini ifade et.', icon: Sunset, emoji: '🎭', color: 'bg-purple-100 text-purple-700' },
    { time: '14:30 - 15:30', title: 'Keşif Zamanı', desc: 'Doğa gezisi, bahçe veya bilim deneyleri.', icon: Sunset, emoji: '🌿', color: 'bg-emerald-100 text-emerald-700' },
    { time: '15:30 - 16:00', title: 'Veda & Çıkış', desc: 'Günün özeti, paylaşım zamanı ve ailelerle buluşma.', icon: Moon, emoji: '👋', color: 'bg-indigo-100 text-indigo-700' },
  ],
  yarim: [
    { time: '09:00 - 09:15', title: 'Karşılama', desc: 'Enerjik bir başlangıç ile güne merhaba!', icon: Coffee, emoji: '👋', color: 'bg-amber-100 text-amber-700' },
    { time: '09:15 - 10:30', title: 'Ana Atölye', desc: 'Yaş grubuna özel ana aktivite ve proje çalışması.', icon: Sun, emoji: '🎯', color: 'bg-sky-100 text-sky-700' },
    { time: '10:30 - 10:45', title: 'Mola', desc: 'Atıştırmalık ve serbest oyun zamanı.', icon: Coffee, emoji: '🧃', color: 'bg-green-100 text-green-700' },
    { time: '10:45 - 12:00', title: 'Spor / Sanat', desc: 'Hareket ve yaratıcılığı birleştiren eğlenceli aktiviteler.', icon: Sun, emoji: '⚽', color: 'bg-orange-100 text-orange-700' },
    { time: '12:00 - 12:15', title: 'Veda & Çıkış', desc: 'Günün paylaşımı ve neşeli bir vedalaşma.', icon: Moon, emoji: '🌟', color: 'bg-indigo-100 text-indigo-700' },
  ],
}

export default function DailySchedule() {
  const [activeTab, setActiveTab] = useState('tam')

  return (
    <section id="gunluk-plan" className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeader
          badge="📅 Günlük Program"
          title="Bir Gün Nasıl Geçiyor?"
          description="Özenle planlanmış, eğlence ve öğrenmeyi harmanlayan günlük program."
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
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-bisi-yellow to-bisi-orange rounded-xl"
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
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-bisi-yellow via-bisi-orange to-bisi-pink" />

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
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-4 border-bisi-yellow flex items-center justify-center text-lg shadow-sm">
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
                      <h3 className="font-bold text-bisi-navy font-[family-name:var(--font-display)]">{item.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
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
