import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Clock, Calendar, Tag, CheckCircle2, ChevronRight } from 'lucide-react'
import { useLang } from '../LangContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RegistrationModal from '../components/RegistrationModal'

/* ── Animations ───────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
}

const weekColors = [
  'from-emerald-400 to-teal-500',
  'from-orange-400 to-amber-500',
  'from-purple-400 to-violet-500',
  'from-sky-400 to-blue-500',
  'from-[#2D5A3F] to-[#3D7A56]',
  'from-rose-400 to-pink-500',
  'from-indigo-400 to-[#233256]',
  'from-amber-400 to-orange-500',
]
const weekEmojis = ['🗡️', '🌿', '✨', '🎨', '🐾', '🚀', '⏳', '🎉']

/* ── Bilingual page content ───────────────────────────────────────────── */
const pageContent = {
  tr: {
    backLink: 'Anasayfa',
    overviewBadge: '⭐ Program Tanıtımı',
    overviewTitle: 'BIS Summer School Yaz Okulu Programı',
    overviewDesc1: 'BIS Okulları tarafından düzenlenen Summer School (Yaz Okulu) programı; öğrencilerimizin yaz dönemini akademik, sosyal ve kültürel açıdan verimli bir şekilde değerlendirmelerini sağlamak amacıyla, İngilizce odaklı bir eğitim yaklaşımıyla hazırlanmıştır.',
    overviewDesc2: 'Tüm gün İngilizce iletişimin aktif olarak kullanıldığı bu programda öğrencilerimiz, dili doğal bir ortamda deneyimleyerek öğrenme fırsatı bulmaktadır.',
    overviewDesc3: 'British International School İstanbul\'un kurucusu olduğu BIS Okulları bünyesinde gerçekleştirilen yaz okulumuz; uluslararası eğitim anlayışı doğrultusunda, öğrencilerimizin farklı kültürleri tanımalarını, çok kültürlü ortamlarda etkin iletişim kurabilmelerini ve sosyal gelişimlerini desteklemeyi hedeflemektedir.',
    details: [
      { label: 'Yaş Aralığı',     value: '4 – 13 yaş',    sub: 'Yaş grubuna özel programlar' },
      { label: 'Program Süresi',  value: '8 Hafta',         sub: '29 Haziran – 21 Ağustos' },
      { label: 'Program Saatleri', value: '09:00 – 16:00',  sub: 'Hafta içi, her gün' },
    ],
    weeklyNote: 'Haftalık kayıt imkânı mevcuttur.',

    scheduleBadge: '📅 Günlük Program Akışı',
    scheduleTitle: 'Haftalık Ders Programı',
    scheduleSub: 'İngilizce dersleri ve atölyeler haftalar arasında rotasyonlu olarak uygulanmaktadır.',
    timeHeader: 'SAATLER',
    weekHeaders: ['1. HAFTA\n29 Haz–3 Tem', '2. HAFTA\n6–10 Tem', '3. HAFTA\n13–17 Tem', '4. HAFTA\n20–24 Tem'],
    scheduleRows: [
      { type: 'fixed',       time: '09:00–09:30', activity: 'Karşılama ve Sabah Sporu',         emoji: '🏃' },
      { type: 'fixed',       time: '09:30–09:45', activity: 'Sabah Kahvaltısı',                  emoji: '🥐' },
      { type: 'alternating', time: '09:45–11:00', weeks: [
          { label: 'İngilizce (Speaking & Craft)', sub: 'Sınıfta' },
          { label: 'İngilizce (Story Telling)',    sub: 'Koruda' },
          { label: 'İngilizce (Speaking & Craft)', sub: 'Sınıfta' },
          { label: 'İngilizce (Story Telling)',    sub: 'Koruda' },
      ]},
      { type: 'fixed',       time: '11:00–11:15', activity: 'Ara',                               emoji: '☕' },
      { type: 'fixed',       time: '11:15–12:15', activity: 'Yüzme',                             emoji: '🏊' },
      { type: 'fixed',       time: '12:15–13:00', activity: 'Öğle Yemeği & Mola',                emoji: '🍽️' },
      { type: 'alternating', time: '13:00–14:00', weeks: [
          { label: 'İngilizce (Drama)',      sub: 'Konferans Salonu' },
          { label: 'İngilizce (Experiment)', sub: 'Sınıfta' },
          { label: 'İngilizce (Drama)',      sub: 'Konferans Salonu' },
          { label: 'İngilizce (Experiment)', sub: 'Sınıfta' },
      ]},
      { type: 'fixed',       time: '14:00–14:10', activity: 'Ara',                               emoji: '☕' },
      { type: 'alternating', time: '14:10–15:00', weeks: [
          { label: 'Modern Dans',        sub: null },
          { label: 'Yaratıcı Atölye',    sub: null },
          { label: 'Minik Şefler',       sub: null },
          { label: 'Bahçe Etkinlikleri', sub: null },
      ]},
      { type: 'fixed',       time: '15:00–15:15', activity: 'İkindi Kahvaltısı (Snack)',         emoji: '🍎' },
      { type: 'fixed',       time: '15:15–16:00', activity: 'Spor Aktivitesi',                   emoji: '🏆' },
      { type: 'fixed',       time: '16:00–16:15', activity: 'Çıkış / Servislerin Hareketi',      emoji: '🚌' },
    ],

    contentBadge: '📋 Program İçeriği',
    contentTitle: 'Neler Var?',
    englishTitle: 'Intensive English',
    englishTime: '09:45 – 12:00',
    englishDesc: 'Speaking, Listening, Reading, Writing, Drama',
    englishNote: 'Yabancı öğretmenler eşliğinde yürütüLmektedir.',
    sportsTitle: 'Spor Aktiviteleri',
    sportsTime: '13:00 – 16:00',
    sportsTags: ['Basketbol', 'Cimnastik', 'Yüzme', 'Tenis', 'Futsal'],
    sportsNote: 'Profesyonel ve sertifikalı eğitmenler tarafından gerçekleştirilmektedir.',
    chessTitle: 'Satranç & Yaratıcı Atölyeler',
    chessTime: '14:10 – 15:00',
    chessTags: ['Satranç', 'Modern Dans', 'Yaratıcı Atölye', 'Minik Şefler', 'Bahçe Etkinlikleri'],
    swimmingTitle: 'Yüzme Dersi',
    swimmingTime: '11:15 – 12:15',
    swimmingDesc: 'Her gün düzenli yüzme dersi programa dahildir.',

    pricingBadge: '💳 Ücretlendirme',
    pricingTitle: 'Ücret Tablosu',
    pricing: [
      { label: '1 Hafta',  price: '18.000 ₺', note: '+KDV', tag: null,       tagStyle: '' },
      { label: '3 Hafta',  price: '45.000 ₺', note: '+KDV', tag: 'Önerilen', tagStyle: 'bg-[#2D5A3F]' },
    ],
    siblingDiscount: '%5 Kardeş indirimi uygulanmaktadır.',

    weeklyBadge: '🗓️ Haftalık Tema Programı',
    weeklyTitle: '8 Haftalık Program',
    weekLabel: 'Hafta',
    weeklySub: 'Program, 8 hafta boyunca farklı temalarla planlanmış olup öğrencilerimizin her hafta farklı bir deneyim yaşamaları hedeflenmektedir.',
    weeklyThemes: [
      { theme: 'Hayatta Kalma Haftası',    content: '29 Haz – 3 Tem • Survivor yarışması, takım ruhu ve macera aktiviteleri' },
      { theme: 'Yeşile Dön Haftası',       content: '6 – 10 Tem • Doğa gezileri, çevre bilinci ve sürdürülebilirlik etkinlikleri' },
      { theme: 'Sihir Haftası',            content: '13 – 17 Tem • Sihir gösterisi, yaratıcı atölyeler ve eğlenceli deneyler' },
      { theme: 'Boya Şenliği Haftası',     content: '20 – 24 Tem • Boya splash partisi, resim ve yaratıcı sanat çalışmaları' },
      { theme: 'Harika Hayvanlar Haftası', content: '27 – 31 Tem • Akvaryum gezisi, hayvan temalı projeler ve doğa keşfi' },
      { theme: 'Uzay Haftası',             content: '3 – 7 Ağu • Uzay kampı, bilim deneyleri ve astronomi aktiviteleri' },
      { theme: 'Zaman Yolcusu Haftası',    content: '10 – 14 Ağu • Tarih yolculuğu, kültürel keşifler ve drama çalışmaları' },
      { theme: 'Kendimizi Kutluyoruz',     content: '17 – 21 Ağu • Kostüm partisi, su şenliği ve kapanış töreni' },
    ],

    instaBadge: '📸 Bizi Takip Edin',
    instaTitle: 'Yaz Okulu Atmosferini Keşfet',
    instaDesc: 'Yaz okulu atmosferimizi incelemek için Instagram\'daki paylaşımlarımıza göz atın.',
    instaBtn: 'Instagram\'da İzle',
    instaUrl: 'https://www.instagram.com/reel/DWUSxyFCNB4/?igsh=MTl4MTEzcHExY3gwcA==',

    heroCta: 'Hemen Kayıt Ol',
  },

  en: {
    backLink: 'Home',
    overviewBadge: '⭐ Programme Overview',
    overviewTitle: 'BIS Summer School Programme',
    overviewDesc1: 'The Summer School programme organised by BIS Schools is designed to help students spend their summer productively — academically, socially and culturally — through an English-focused educational approach.',
    overviewDesc2: 'With English active throughout the entire day, students have the opportunity to experience the language in a natural environment.',
    overviewDesc3: 'Run under BIS Schools, founded by the British International School Istanbul, the summer school aims — in line with an international education philosophy — to help students discover different cultures, communicate effectively in multicultural environments and support their social development.',
    details: [
      { label: 'Age Range',       value: '4 – 13 years', sub: 'Age-specific groups' },
      { label: 'Duration',        value: '8 Weeks',       sub: '29 June – 21 August' },
      { label: 'Programme Hours', value: '09:00 – 16:00', sub: 'Mon–Fri, every day' },
    ],
    weeklyNote: 'Weekly enrolment is available.',

    scheduleBadge: '📅 Daily Schedule',
    scheduleTitle: 'Weekly Lesson Schedule',
    scheduleSub: 'English lessons and workshops rotate between alternating weeks.',
    timeHeader: 'TIME',
    weekHeaders: ['WEEK 1\n29 Jun–3 Jul', 'WEEK 2\n6–10 Jul', 'WEEK 3\n13–17 Jul', 'WEEK 4\n20–24 Jul'],
    scheduleRows: [
      { type: 'fixed',       time: '09:00–09:30', activity: 'Welcome & Morning Sport',           emoji: '🏃' },
      { type: 'fixed',       time: '09:30–09:45', activity: 'Breakfast',                          emoji: '🥐' },
      { type: 'alternating', time: '09:45–11:00', weeks: [
          { label: 'English (Speaking & Craft)', sub: 'Classroom' },
          { label: 'English (Story Telling)',    sub: 'Grove' },
          { label: 'English (Speaking & Craft)', sub: 'Classroom' },
          { label: 'English (Story Telling)',    sub: 'Grove' },
      ]},
      { type: 'fixed',       time: '11:00–11:15', activity: 'Break',                              emoji: '☕' },
      { type: 'fixed',       time: '11:15–12:15', activity: 'Swimming',                           emoji: '🏊' },
      { type: 'fixed',       time: '12:15–13:00', activity: 'Lunch & Break Time',                emoji: '🍽️' },
      { type: 'alternating', time: '13:00–14:00', weeks: [
          { label: 'English (Drama)',      sub: 'Conference Hall' },
          { label: 'English (Experiment)', sub: 'Classroom' },
          { label: 'English (Drama)',      sub: 'Conference Hall' },
          { label: 'English (Experiment)', sub: 'Classroom' },
      ]},
      { type: 'fixed',       time: '14:00–14:10', activity: 'Break',                              emoji: '☕' },
      { type: 'alternating', time: '14:10–15:00', weeks: [
          { label: 'Modern Dance',     sub: null },
          { label: 'Creative Workshop', sub: null },
          { label: 'Little Chefs',     sub: null },
          { label: 'Garden Activities', sub: null },
      ]},
      { type: 'fixed',       time: '15:00–15:15', activity: 'Afternoon Snack',                    emoji: '🍎' },
      { type: 'fixed',       time: '15:15–16:00', activity: 'Sports Activity',                    emoji: '🏆' },
      { type: 'fixed',       time: '16:00–16:15', activity: 'Dismissal / Bus Departure',          emoji: '🚌' },
    ],

    contentBadge: '📋 Programme Content',
    contentTitle: "What's Included?",
    englishTitle: 'Intensive English',
    englishTime: '09:45 – 12:00',
    englishDesc: 'Speaking, Listening, Reading, Writing, Drama',
    englishNote: 'Delivered by foreign teachers.',
    sportsTitle: 'Sports Activities',
    sportsTime: '13:00 – 16:00',
    sportsTags: ['Basketball', 'Gymnastics', 'Swimming', 'Tennis', 'Futsal'],
    sportsNote: 'Delivered by professional and certified coaches.',
    chessTitle: 'Chess & Creative Workshops',
    chessTime: '14:10 – 15:00',
    chessTags: ['Chess', 'Modern Dance', 'Creative Workshop', 'Little Chefs', 'Garden Activities'],
    swimmingTitle: 'Swimming Lesson',
    swimmingTime: '11:15 – 12:15',
    swimmingDesc: 'Daily swimming lesson is included in the programme.',

    pricingBadge: '💳 Pricing',
    pricingTitle: 'Fee Schedule',
    pricing: [
      { label: '1 Week',  price: '18,000 ₺', note: '+VAT', tag: null,          tagStyle: '' },
      { label: '3 Weeks', price: '45,000 ₺', note: '+VAT', tag: 'Recommended', tagStyle: 'bg-[#2D5A3F]' },
    ],
    siblingDiscount: '5% sibling discount applies.',

    weeklyBadge: '🗓️ Weekly Theme Programme',
    weeklyTitle: '8-Week Programme',
    weekLabel: 'Week',
    weeklySub: 'Each week is shaped around a different theme, giving students a new and exciting experience every week.',
    weeklyThemes: [
      { theme: 'Survival Week',            content: '29 Jun – 3 Jul • Survivor competition, team spirit and adventure activities' },
      { theme: 'Go Green Week',            content: '6 – 10 Jul • Nature trips, environmental awareness and sustainability' },
      { theme: 'Magic Week',               content: '13 – 17 Jul • Magic show, creative workshops and fun experiments' },
      { theme: 'Paint Splash Week',        content: '20 – 24 Jul • Paint splash party, art and creative workshops' },
      { theme: 'Amazing Animals Week',     content: '27 – 31 Jul • Aquarium trip, animal-themed projects and nature discovery' },
      { theme: 'Space Week',               content: '3 – 7 Aug • Space camp, science experiments and astronomy activities' },
      { theme: "Time Traveller's Week",    content: '10 – 14 Aug • Historical journey, cultural discoveries and drama workshops' },
      { theme: 'Celebrating Ourselves',    content: '17 – 21 Aug • Costume party, water splash party and closing ceremony' },
    ],

    instaBadge: '📸 Follow Us',
    instaTitle: 'Discover the Summer School Atmosphere',
    instaDesc: 'Check out our Instagram posts to see the summer school in action.',
    instaBtn: 'Watch on Instagram',
    instaUrl: 'https://www.instagram.com/reel/DWUSxyFCNB4/?igsh=MTl4MTEzcHExY3gwcA==',

    heroCta: 'Register Now',
  },
}

const detailIcons = [Calendar, Clock, Tag]

/* ── Component ────────────────────────────────────────────────────────── */
export default function CampusPage({ campusId }) {
  const { t, lang } = useLang()
  const [modalOpen, setModalOpen] = useState(false)
  const d = pageContent[lang] ?? pageContent.tr

  const campus = t.locations.campuses.find((c) => c.id === campusId)

  if (!campus) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#233256] font-bold text-xl">Campus not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar onOpenModal={() => setModalOpen(true)} isCampusPage />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[72vh] flex items-end bg-[#0D1822] overflow-hidden">
        {/* Background campus photo at low opacity */}
        {campus.image && (
          <img
            src={campus.image}
            alt={campus.name}
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        )}
        {/* Dark gradient overlay for text readability */}
        <div className={`absolute inset-0 bg-gradient-to-br ${campus.color} opacity-85`} />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <motion.div
          className="absolute top-[-5rem] right-[-5rem] w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'rgba(255,255,255,0.06)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 pt-36 w-full">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} className="mb-10">
            <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {d.backLink}
            </Link>
          </motion.div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:gap-16">
            {/* Left: text content */}
            <motion.div className="flex-1" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <p className="text-white/45 text-xs tracking-[0.25em] uppercase font-semibold mb-3">BISI Summer School 2026</p>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-none tracking-tight mb-5 text-left">{campus.name}</h1>
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-4 h-4 text-white/55 flex-shrink-0" />
                <span className="text-white/65 font-medium text-sm">{campus.district}</span>
              </div>
              <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-8">{campus.description}</p>
              <div className="flex flex-wrap gap-2 mb-10">
                {campus.tags.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-white/12 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm">{tag}</span>
                ))}
              </div>
              <motion.button
                onClick={() => setModalOpen(true)}
                whileHover={{ scale: 1.04, boxShadow: '0 20px 48px rgba(0,0,0,0.25)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2D5A3F] font-bold rounded-full shadow-2xl text-sm tracking-wide cursor-pointer"
              >
                {d.heroCta} <ChevronRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Right: campus image — visible on large screens */}
            {campus.image && (
              <motion.div
                className="hidden lg:block flex-shrink-0 w-80 xl:w-96 pb-2"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={campus.image}
                  alt={campus.name}
                  className="rounded-3xl object-cover w-full h-72 opacity-65 shadow-2xl shadow-black/40 ring-1 ring-white/15"
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── Program Overview ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-[#2D5A3F]/10 text-[#2D5A3F] font-semibold text-sm rounded-full mb-4">{d.overviewBadge}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#233256] mb-6">{d.overviewTitle}</h2>
            <div className="space-y-3 text-[#4D6359] max-w-3xl mx-auto leading-relaxed text-left">
              <p>{d.overviewDesc1}</p>
              <p>{d.overviewDesc2}</p>
              <p>{d.overviewDesc3}</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {d.details.map((item, i) => {
              const Icon = detailIcons[i]
              return (
                <motion.div
                  key={item.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EEF5F0] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#2D5A3F]" />
                  </div>
                  <p className="text-xs text-[#4D6359] font-semibold uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-xl font-black text-[#233256]">{item.value}</p>
                  <p className="text-xs text-[#4D6359] mt-1">{item.sub}</p>
                </motion.div>
              )
            })}
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl px-6 py-4 border border-gray-100 shadow-sm text-sm text-[#4D6359] flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-[#2D5A3F] flex-shrink-0" />
            <span>{d.weeklyNote}</span>
          </motion.div>
        </div>
      </section>

      {/* ── Weekly Schedule Table ─────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-[#2D5A3F]/10 text-[#2D5A3F] font-semibold text-sm rounded-full mb-4">{d.scheduleBadge}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#233256]">{d.scheduleTitle}</h2>
            <p className="text-[#4D6359] mt-3 text-sm max-w-lg mx-auto">{d.scheduleSub}</p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="min-w-full text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#2D5A3F] text-white">
                  <th className="px-4 py-3 font-bold text-left whitespace-nowrap border-r border-white/20">{d.timeHeader}</th>
                  {d.weekHeaders.map((w, i) => (
                    <th key={i} className="px-4 py-3 font-bold text-center border-r border-white/20 last:border-r-0">
                      {w.split('\n').map((line, li) => (
                        <span key={li} className={`block ${li > 0 ? 'font-normal text-white/70 text-[10px]' : ''}`}>{line}</span>
                      ))}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.scheduleRows.map((row, ri) => (
                  <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}>
                    <td className="px-4 py-3 font-bold text-[#2D5A3F] text-left whitespace-nowrap border-r border-gray-100 text-xs">
                      {row.time}
                    </td>
                    {row.type === 'fixed' ? (
                      <td colSpan={4} className="px-4 py-3 font-semibold text-[#233256] text-center bg-[#EEF5F0]/60">
                        <span className="mr-1.5">{row.emoji}</span>{row.activity}
                      </td>
                    ) : (
                      row.weeks.map((w, wi) => (
                        <td
                          key={wi}
                          className={`px-3 py-3 text-center border-r border-gray-100 last:border-r-0 ${wi % 2 === 0 ? 'bg-sky-50/50' : 'bg-amber-50/50'}`}
                        >
                          <p className="font-semibold text-[#233256] text-xs leading-snug">{w.label}</p>
                          {w.sub && <p className="text-[10px] text-[#4D6359] mt-0.5 font-medium">{w.sub}</p>}
                        </td>
                      ))
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── Program Content ───────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-[#FAFAF8]">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#2D5A3F]/10 text-[#2D5A3F] font-semibold text-sm rounded-full mb-4">{d.contentBadge}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#233256]">{d.contentTitle}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* English */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-2xl mb-3">🇬🇧</div>
              <h3 className="font-bold text-[#233256] text-lg mb-1 text-left">{d.englishTitle}</h3>
              <p className="text-xs text-[#4D6359] font-semibold mb-3 tracking-wide">{d.englishTime}</p>
              <p className="text-sm text-[#4D6359] leading-relaxed mb-3">{d.englishDesc}</p>
              <p className="text-sm text-[#4D6359] leading-relaxed">{d.englishNote}</p>
            </motion.div>

            {/* Swimming */}
            <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-2xl mb-3">🏊</div>
              <h3 className="font-bold text-[#233256] text-lg mb-1 text-left">{d.swimmingTitle}</h3>
              <p className="text-xs text-[#4D6359] font-semibold mb-3 tracking-wide">{d.swimmingTime}</p>
              <p className="text-sm text-[#4D6359] leading-relaxed">{d.swimmingDesc}</p>
            </motion.div>

            {/* Sports */}
            <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-2xl mb-3">🏆</div>
              <h3 className="font-bold text-[#233256] text-lg mb-1 text-left">{d.sportsTitle}</h3>
              <p className="text-xs text-[#4D6359] font-semibold mb-3 tracking-wide">{d.sportsTime}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {d.sportsTags.map((s) => (
                  <span key={s} className="text-xs font-semibold px-2.5 py-1 bg-[#EEF5F0] text-[#2D5A3F] rounded-full">{s}</span>
                ))}
              </div>
              <p className="text-xs text-[#4D6359] leading-relaxed">{d.sportsNote}</p>
            </motion.div>

            {/* Chess & Workshops */}
            <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-2xl mb-3">♟️</div>
              <h3 className="font-bold text-[#233256] text-lg mb-1 text-left">{d.chessTitle}</h3>
              <p className="text-xs text-[#4D6359] font-semibold mb-3 tracking-wide">{d.chessTime}</p>
              <div className="flex flex-wrap gap-2">
                {d.chessTags.map((s) => (
                  <span key={s} className="text-xs font-semibold px-2.5 py-1 bg-[#EEF5F0] text-[#2D5A3F] rounded-full">{s}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Instagram CTA ────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-[#233256] to-[#2D5A3F]">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 bg-white/15 text-white font-semibold text-sm rounded-full mb-4">{d.instaBadge}</span>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">{d.instaTitle}</h2>
            <p className="text-white/65 mb-7 text-sm max-w-md mx-auto">{d.instaDesc}</p>
            <motion.a
              href={d.instaUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: '0 20px 48px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#233256] font-bold rounded-full shadow-xl text-sm tracking-wide"
            >
              {d.instaBtn} <ChevronRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#2D5A3F]/10 text-[#2D5A3F] font-semibold text-sm rounded-full mb-4">{d.pricingBadge}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#233256]">{d.pricingTitle}</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-xl mx-auto mb-6">
            {d.pricing.map((p, i) => (
              <motion.div
                key={p.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative rounded-2xl p-6 border text-center ${p.tag ? 'border-[#2D5A3F] shadow-lg shadow-[#2D5A3F]/10 bg-[#EEF5F0]' : 'border-gray-100 bg-white shadow-sm'}`}
              >
                {p.tag && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 ${p.tagStyle} text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide`}>{p.tag}</span>
                )}
                <p className="text-xs text-[#4D6359] font-semibold uppercase tracking-wide mb-2">{p.label}</p>
                <p className="text-3xl font-black text-[#233256]">{p.price}</p>
                <p className="text-xs text-[#4D6359] mt-1">{p.note}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl mx-auto bg-[#EEF5F0] rounded-2xl px-6 py-4 flex items-center gap-2 text-sm text-[#2D5A3F] font-semibold"
          >
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            {d.siblingDiscount}
          </motion.div>
        </div>
      </section>

      {/* ── 8-Week Themes ─────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-[#FAFAF8]">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#2D5A3F]/10 text-[#2D5A3F] font-semibold text-sm rounded-full mb-4">{d.weeklyBadge}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#233256]">{d.weeklyTitle}</h2>
            <p className="text-[#4D6359] mt-3 max-w-xl mx-auto text-sm">{d.weeklySub}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {d.weeklyThemes.map((w, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.18 } }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-[#2D5A3F]/8 transition-shadow"
              >
                <div className={`h-1.5 bg-gradient-to-r ${weekColors[i]}`} />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{weekEmojis[i]}</span>
                    <span className="text-xs font-black text-white bg-gradient-to-r from-[#2D5A3F] to-[#233256] px-2.5 py-1 rounded-full">
                      {i + 1}. {d.weekLabel}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#233256] text-sm leading-snug mb-2 text-left">{w.theme}</h3>
                  <p className="text-xs text-[#4D6359] leading-relaxed text-left">{w.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer onOpenModal={() => setModalOpen(true)} />
      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
