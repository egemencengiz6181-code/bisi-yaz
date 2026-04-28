import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Clock, Calendar, Tag, CheckCircle2, Star, ChevronRight } from 'lucide-react'
import { useLang } from '../LangContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RegistrationModal from '../components/RegistrationModal'

/* ── Static (non-translatable) data ──────────────────────────────────── */

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
const weekEmojis = ['👋', '⚽', '🎨', '🔬', '🌿', '🌍', '🎭', '🏆']

const earlyBirdColors = [
  'from-[#2D5A3F] to-[#3D7A56]',
  'from-[#233256] to-[#3A5F8A]',
]

/* ── Bilingual content ────────────────────────────────────────────────── */

const content = {
  tr: {
    backLink: 'Anasayfa',
    heroSub: 'Modern tesisleri ve geniş spor alanlarıyla Avrupa yakasının en büyük kampüsü.',
    heroTags: ['Spor Tesisleri', 'Yüzme Havuzu', 'STEM Lab'],
    heroDistrict: 'Bahçeşehir, İstanbul',
    heroCta: 'Hemen Kayıt Ol',

    overviewBadge: '⭐ Program Tanıtımı',
    overviewTitle: 'Tam Gün Yaz Okulu Programı',
    overviewDesc1: 'BIS Summer School; çocukların yaz dönemini akademik, sportif ve sosyal açıdan dengeli, verimli ve keyifli geçirmeleri için tasarlanmış kapsamlı bir yaz okuludur.',
    overviewDesc2: 'Program boyunca öğrencilerimiz; İngilizce eğitim, spor aktiviteleri, yaratıcı atölyeler ve dış gezi deneyimleri ile çok yönlü gelişim fırsatı yakalar.',
    details: [
      { label: 'Yaş Aralığı',     value: '4 – 13 yaş',    sub: 'Yaş grubuna özel programlar' },
      { label: 'Program Süresi',  value: '8 Hafta',         sub: '29 Haziran – 21 Ağustos' },
      { label: 'Program Saatleri', value: '09:00 – 16:00',  sub: 'Hafta içi, her gün' },
    ],
    weeklyNote: 'Haftalık kayıt imkânı mevcuttur.',

    pricingBadge: '💳 Ücretlendirme',
    pricingTitle: 'Ücret Tablosu',
    pricing: [
      { label: '1 Hafta', price: '15.000 ₺', tag: null,       tagStyle: '' },
      { label: '2 Hafta', price: '25.000 ₺', tag: 'Önerilen', tagStyle: 'bg-[#2D5A3F]' },
    ],
    earlyBirdTitle: 'Erken Kayıt Avantajları',
    earlyBirdMonthLabel: 'Kayıt Ayı',
    earlyBirdDiscountLabel: 'İndirim',
    earlyBird: [
      { month: 'Nisan', discount: '%20' },
      { month: 'Mayıs', discount: '%10' },
    ],

    contentBadge: '📋 Program İçeriği',
    contentTitle: 'Neler Var?',
    englishTitle: 'İngilizce Eğitim',
    englishTime: '09:00 – 12:00',
    englishDesc: 'Speaking, Listening, Reading, Writing, Drama',
    englishNote: 'BIS Schools yabancı öğretmen kadrosu ile yürütülmektedir.',
    lunchTitle: 'Öğle Yemeği & Mola',
    lunchTime: '12:00 – 13:00',
    lunchDesc: 'Kahvaltı hizmeti sunulmaktadır. Öğle yemeği program kapsamında karşılanmaktadır.',
    sportsTitle: 'Spor Aktiviteleri',
    sportsTime: '13:00 – 16:00',
    sportsTags: ['Basketbol', 'Voleybol', 'Jimnastik', 'Yüzme', 'Satranç'],
    sportsNote: (
      <>
        <span className="font-semibold text-[#233256]">Hido Basketbol Akademi</span>
        {' '}ve{' '}
        <span className="font-semibold text-[#233256]">BK Voleybol Akademisi</span>
        {' '}iş birliği ile, profesyonel ve sertifikalı eğitmenler tarafından gerçekleştirilmektedir.
      </>
    ),
    tripsTitle: 'Dış Gezi Etkinlikleri',
    tripsTime: '13:00 – 16:00',
    tripsTags: ['At Biniciliği', 'Parkur Aktiviteleri', 'Müze Gezileri'],

    scheduleBadge: '📅 Örnek Günlük Program',
    scheduleTitle: 'Günlük Ders Programı',
    schedule: [
      { time: '08:30 – 09:00', activity: 'Karşılama',                              emoji: '🙋' },
      { time: '09:00 – 09:45', activity: 'Kahvaltı & Toplantı',                   emoji: '🥐' },
      { time: '09:45 – 10:45', activity: 'Yoğun İngilizce',                       emoji: '📚' },
      { time: '10:45 – 11:00', activity: 'Ara',                                   emoji: '☕' },
      { time: '11:00 – 12:00', activity: 'Yoğun İngilizce',                       emoji: '📖' },
      { time: '12:00 – 13:00', activity: 'Öğle Yemeği & Mola',                   emoji: '🍽️' },
      { time: '13:00 – 13:45', activity: 'Aktivite Zamanı',                       emoji: '🏃' },
      { time: '13:45 – 14:00', activity: 'Ara',                                   emoji: '☕' },
      { time: '14:00 – 14:45', activity: 'Aktivite Zamanı',                       emoji: '⚽' },
      { time: '14:45 – 15:15', activity: 'Atıştırmalık & Ara',                   emoji: '🍎' },
      { time: '15:15 – 16:00', activity: 'Aktivite Zamanı',                       emoji: '🌍' },
    ],

    weeklyBadge: '🗓️ Haftalık Tema Programı',
    weeklyTitle: '8 Haftalık Program',
    weeklySub: 'Her hafta farklı bir tema etrafında şekillenen zengin bir deneyim.',
    weekLabel: 'Hafta',
    weeklyThemes: [
      { theme: 'Hayatta Kalma Haftası',   content: '29 Haz – 3 Tem • Survivor yarışması, takım ruhu ve macera aktiviteleri' },
      { theme: 'Yeşile Dön Haftası',      content: '6 – 10 Tem • Doğa gezileri, çevre bilinci ve sürdürülebilirlik etkinlikleri' },
      { theme: 'Sihir Haftası',           content: '13 – 17 Tem • Sihir gösterisi, yaratıcı atölyeler ve eğlenceli deneyler' },
      { theme: 'Boya Şenliği Haftası',    content: '20 – 24 Tem • Boya splash partisi, resim ve yaratıcı sanat çalışmaları' },
      { theme: 'Harika Hayvanlar Haftası', content: '27 – 31 Tem • Akvaryum gezisi, hayvan temalı projeler ve doğa keşfi' },
      { theme: 'Uzay Haftası',            content: '3 – 7 Ağu • Uzay kampı, bilim deneyleri ve astronomi aktiviteleri' },
      { theme: 'Zaman Yolcusu Haftası',   content: '10 – 14 Ağu • Tarih yolculuğu, kültürel keşifler ve drama çalışmaları' },
      { theme: 'Kendimizi Kutluyoruz',    content: '17 – 21 Ağu • Kostüm partisi, su şenliği ve kapanış töreni' },
    ],
  },

  en: {
    backLink: 'Home',
    heroSub: 'A vibrant living space where students can discover themselves both academically and socially, surrounded by modern facilities and diverse opportunities',
    heroTags: ['Sports Facilities', 'Swimming Pool', 'STEM Lab'],
    heroDistrict: 'Bahçeşehir, Istanbul',
    heroCta: 'Register Now',

    overviewBadge: '⭐ Programme Overview',
    overviewTitle: 'Full-Day Summer School Programme',
    overviewDesc1: 'BIS Summer School is a comprehensive summer school designed to help children have a balanced, productive and enjoyable summer — academically, athletically and socially.',
    overviewDesc2: 'Throughout the programme, students benefit from English education, sports activities, creative workshops and field trip experiences for all-round development.',
    details: [
      { label: 'Age Range',       value: '4 – 13 years', sub: 'Age-specific groups' },
      { label: 'Duration',        value: '8 Weeks',       sub: '29 June – 21 August' },
      { label: 'Programme Hours', value: '09:00 – 16:00', sub: 'Mon–Fri, every day' },
    ],
    weeklyNote: 'Weekly enrolment is available.',

    pricingBadge: '💳 Pricing',
    pricingTitle: 'Fee Schedule',
    pricing: [
      { label: '1 Week', price: '15,000 ₺', tag: null,          tagStyle: '' },
      { label: '2 Weeks', price: '25,000 ₺', tag: 'Recommended', tagStyle: 'bg-[#2D5A3F]' },
    ],
    earlyBirdTitle: 'Early Enrolment Benefits',
    earlyBirdMonthLabel: 'Enrolment Month',
    earlyBirdDiscountLabel: 'Discount',
    earlyBird: [
      { month: 'April', discount: '20%' },
      { month: 'May',   discount: '10%' },
    ],

    contentBadge: '📋 Programme Content',
    contentTitle: "What's Included?",
    englishTitle: 'English Education',
    englishTime: '09:00 – 12:00',
    englishDesc: 'Speaking, Listening, Reading, Writing, Drama',
    englishNote: "Delivered by BIS Schools' foreign teacher staff.",
    lunchTitle: 'Lunch & Break Time',
    lunchTime: '12:00 – 13:00',
    lunchDesc: 'Breakfast is provided. Lunch is included in the programme.',
    sportsTitle: 'Sports Activities',
    sportsTime: '13:00 – 16:00',
    sportsTags: ['Basketball', 'Volleyball', 'Gymnastics', 'Swimming', 'Chess'],
    sportsNote: (
      <>
        Delivered in partnership with{' '}
        <span className="font-semibold text-[#233256]">Hido Basketball Academy</span>
        {' '}and{' '}
        <span className="font-semibold text-[#233256]">BK Volleyball Academy</span>
        {' '}by professional and certified coaches.
      </>
    ),
    tripsTitle: 'Field Trips',
    tripsTime: '13:00 – 16:00',
    tripsTags: ['Horse Riding', 'Parcour Activities', 'Museum Visits'],

    scheduleBadge: '📅 Sample Daily Schedule',
    scheduleTitle: 'Daily Lesson Schedule',
    schedule: [
      { time: '08:30 – 09:00', activity: 'Welcome',                                  emoji: '🙋' },
      { time: '09:00 – 09:45', activity: 'Breakfast & Assembly',                    emoji: '🥐' },
      { time: '09:45 – 10:45', activity: 'Intensive English',                       emoji: '📚' },
      { time: '10:45 – 11:00', activity: 'Break Time',                              emoji: '☕' },
      { time: '11:00 – 12:00', activity: 'Intensive English',                       emoji: '📖' },
      { time: '12:00 – 13:00', activity: 'Lunch & Break Time',                      emoji: '🍽️' },
      { time: '13:00 – 13:45', activity: 'Activity Time',                           emoji: '🏃' },
      { time: '13:45 – 14:00', activity: 'Break Time',                              emoji: '☕' },
      { time: '14:00 – 14:45', activity: 'Activity Time',                           emoji: '⚽' },
      { time: '14:45 – 15:15', activity: 'Snack & Break Time',                      emoji: '🍎' },
      { time: '15:15 – 16:00', activity: 'Activity Time',                           emoji: '🌍' },
    ],

    weeklyBadge: '🗓️ Weekly Theme Programme',
    weeklyTitle: '8-Week Programme',
    weeklySub: 'A rich experience shaped around a different theme each week.',
    weekLabel: 'Week',
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
  },
}

/* ── Animations ───────────────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
}

const detailIcons = [Calendar, Clock, Tag]

/* ── Component ────────────────────────────────────────────────────────── */

export default function BahcesehirPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const { lang } = useLang()
  const d = content[lang] ?? content.tr

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar onOpenModal={() => setModalOpen(true)} isCampusPage />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[72vh] flex items-end bg-[#0D1F16] overflow-hidden">
        {/* Background campus photo at low opacity */}
        <img
          src="/okullar/bahcesehir/bahcesehir.jpg"
          alt="Bahçeşehir Kampüsü"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D5A3F]/92 via-[#2D5A3F]/75 to-[#1a3a28]/95" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <motion.div
          className="absolute top-[-5rem] right-[-5rem] w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'rgba(255,255,255,0.05)' }}
          animate={{ scale: [1, 1.15, 1] }}
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
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-none tracking-tight mb-5 text-left">Bahçeşehir</h1>
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-4 h-4 text-white/55 flex-shrink-0" />
                <span className="text-white/65 font-medium text-sm">{d.heroDistrict}</span>
              </div>
              <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-8">{d.heroSub}</p>
              <div className="flex flex-wrap gap-2 mb-10">
                {d.heroTags.map((tag) => (
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
            <motion.div
              className="hidden lg:block flex-shrink-0 w-80 xl:w-96 pb-2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="/okullar/bahcesehir/bahcesehir.jpg"
                alt="Bahçeşehir Kampüsü"
                className="rounded-3xl object-cover w-full h-72 opacity-65 shadow-2xl shadow-black/40 ring-1 ring-white/15"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Program Overview ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#FAFAF8]">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-[#2D5A3F]/10 text-[#2D5A3F] font-semibold text-sm rounded-full mb-4">{d.overviewBadge}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#233256] mb-4">{d.overviewTitle}</h2>
            <p className="text-[#4D6359] max-w-2xl mx-auto leading-relaxed">{d.overviewDesc1}</p>
            <p className="text-[#4D6359] max-w-2xl mx-auto leading-relaxed mt-3">{d.overviewDesc2}</p>
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

      {/* ── Pricing ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#2D5A3F]/10 text-[#2D5A3F] font-semibold text-sm rounded-full mb-4">{d.pricingBadge}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#233256]">{d.pricingTitle}</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-xl mx-auto mb-10">
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
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-5">
              <Star className="w-5 h-5 text-[#2D5A3F]" />
              <h3 className="text-lg font-bold text-[#233256]">{d.earlyBirdTitle}</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {d.earlyBird.map((eb, i) => (
                <motion.div
                  key={eb.month}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`rounded-2xl p-5 bg-gradient-to-r ${earlyBirdColors[i]} flex items-center justify-between text-white`}
                >
                  <div>
                    <p className="text-white/70 text-xs font-semibold uppercase tracking-wide">{d.earlyBirdMonthLabel}</p>
                    <p className="text-xl font-black">{eb.month}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/70 text-xs font-semibold uppercase tracking-wide">{d.earlyBirdDiscountLabel}</p>
                    <p className="text-3xl font-black">{eb.discount}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-2xl mb-3">🇬🇧</div>
              <h3 className="font-bold text-[#233256] text-lg mb-1 text-left">{d.englishTitle}</h3>
              <p className="text-xs text-[#4D6359] font-semibold mb-3 tracking-wide">{d.englishTime}</p>
              <p className="text-sm text-[#4D6359] leading-relaxed mb-3">{d.englishDesc}</p>
              <p className="text-sm text-[#4D6359] leading-relaxed">{d.englishNote}</p>
            </motion.div>

            <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-2xl mb-3">🍽️</div>
              <h3 className="font-bold text-[#233256] text-lg mb-1 text-left">{d.lunchTitle}</h3>
              <p className="text-xs text-[#4D6359] font-semibold mb-3 tracking-wide">{d.lunchTime}</p>
              <p className="text-sm text-[#4D6359] leading-relaxed">{d.lunchDesc}</p>
            </motion.div>

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

            <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-2xl mb-3">🌍</div>
              <h3 className="font-bold text-[#233256] text-lg mb-1 text-left">{d.tripsTitle}</h3>
              <p className="text-xs text-[#4D6359] font-semibold mb-3 tracking-wide">{d.tripsTime}</p>
              <div className="flex flex-wrap gap-2">
                {d.tripsTags.map((s) => (
                  <span key={s} className="text-xs font-semibold px-2.5 py-1 bg-[#EEF5F0] text-[#2D5A3F] rounded-full">{s}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Daily Schedule ────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#2D5A3F]/10 text-[#2D5A3F] font-semibold text-sm rounded-full mb-4">{d.scheduleBadge}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#233256]">{d.scheduleTitle}</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-3">
            {d.schedule.map((item, i) => (
              <motion.div
                key={item.time}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="group flex items-center gap-4 bg-[#FAFAF8] rounded-2xl p-4 border border-gray-100 hover:shadow-md hover:border-[#2D5A3F]/20 transition-all"
              >
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#2D5A3F] bg-[#EEF5F0] px-2.5 py-1 rounded-full mb-1.5 tracking-wide uppercase">
                    <Clock className="w-2.5 h-2.5" />
                    {item.time}
                  </span>
                  <p className="font-semibold text-[#233256] text-sm leading-snug">{item.activity}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Weekly Themes ─────────────────────────────────────────────── */}
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
