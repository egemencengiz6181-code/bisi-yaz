// ─── BISI Summer Camp — Translation Registry ─────────────────────────────────
// Usage: import { tr, en } from './i18n'

export const tr = {
  /* Navbar */
  nav: {
    locations: 'Lokasyonlar',
    programs: 'Programlar',
    activities: 'Aktiviteler',
    faq: 'SSS',
    enrol: 'Kayıt Ol',
  },

  /* Hero */
  hero: {
    badge: '☀️ 2026 Kayıtları Açıldı, Şimdi Başvur!',
    title: ['İngilizce Odaklı', 'Yaz Okulu!'],
    sub: 'The British School Istanbul bünyesinde, çocuğunuz İngilizce öğrenirken spor yapar, sanat üretir, arkadaşlıklar kurar — unutulmaz bir yaz geçirir.',
    cta1: 'Kampüsleri Keşfet',
    cta2: 'Kayıt Ol',
    stats: {
      workshops: 'Atölye',
      campers: 'Mutlu Kampçı',
      coaches: 'Uzman Eğitmen',
      weeks: 'Eğlenceli Hafta',
    },
  },

  /* Locations */
  locations: {
    badge: '📍 Kampüslerimiz',
    title: '4 Lokasyonda Sizi Bekliyoruz',
    description: 'İstanbul\'un dört farklı noktasında, en yakın kampüste çocuğunuzla buluşuyoruz.',
    learnMore: 'Daha Fazla Bilgi',
    visitSite: 'Siteyi Ziyaret Et',
    enrol: 'Kayıt Ol',
    campuses: [
      {
        id: 'bahcesehir',
        name: 'Bahçeşehir',
        district: 'Başakşehir, İstanbul',
        description: 'Modern tesisleri ve geniş spor alanlarıyla Avrupa yakasının en büyük kampüsü.',
        tags: ['Spor Tesisleri', 'Yüzme Havuzu', 'STEM Lab'],
        color: 'from-[#2D5A3F] to-[#3D7A56]',
        emoji: '🌳',
        externalLink: null,
      },
      {
        id: 'camlica',
        name: 'Çamlıca',
        district: 'Üsküdar, İstanbul',
        description: 'Asya yakasının kalbinde, doğayla iç içe bir öğrenme ortamı.',
        tags: ['Doğa Yürüyüşü', 'Sanat Atölyesi', 'Müzik'],
        color: 'from-[#233256] to-[#3D5A8A]',
        emoji: '🌿',
        externalLink: null,
      },
      {
        id: 'alkent',
        name: 'Alkent',
        district: 'Büyükçekmece, İstanbul',
        description: 'Geniş yeşil alanlar ve özel spor kortlarıyla öne çıkan özgün kampüs.',
        tags: ['Tenis Kortu', 'Açık Sahalar', 'Kodlama'],
        color: 'from-[#2D5A3F] to-[#233256]',
        emoji: '⛳',
        externalLink: null,
      },
      {
        id: 'zekeriyakoy',
        name: 'Zekeriyaköy',
        district: 'Sarıyer, İstanbul',
        description: 'Sarıyer\'in sakin orman doğasında, İngilizce odaklı özel kamp deneyimi.',
        tags: ['Özel Program', 'Ormanlık Alan', 'Tam Pansiyon'],
        color: 'from-emerald-600 to-[#2D5A3F]',
        emoji: '🌲',
        externalLink: 'https://www.bisisummer.com',
        badge: 'Özel Lokasyon',
      },
    ],
  },

  /* Activities */
  activities: {
    badge: '🌈 Aktiviteler',
    title: 'Keşfetmeye Hazır mısın?',
    description: 'Spor, sanat, teknoloji ve doğa — her ilgi alanına göre düzinelerce aktivite!',
    items: [
      { title: 'Spor', desc: 'Futbol, basketbol, yüzme ve daha fazlası' },
      { title: 'Sanat', desc: 'Resim, heykel, seramik ve yaratıcı atölyeler' },
      { title: 'İngilizce', desc: 'Oyunlarla eğlenceli dil öğrenimi' },
      { title: 'STEM & Kodlama', desc: 'Robotik, kodlama ve bilim deneyleri' },
      { title: 'Müzik', desc: 'Enstrüman, ritim ve koro seansları' },
      { title: 'Doğa', desc: 'Bahçecilik, doğa yürüyüşü ve kamp' },
      { title: 'Medya', desc: 'Fotoğrafçılık, video ve dijital sanat' },
      { title: 'Oyun Tasarımı', desc: 'Dijital ve analog oyun geliştirme' },
      { title: 'Mini Mutfak', desc: 'Eğlenceli ve sağlıklı tarifler' },
      { title: 'Keşif Kulübü', desc: 'Astronomi, arkeoloji ve küçük maceralar' },
    ],
  },

  /* FAQ */
  faq: {
    badge: '❓ SSS',
    title: 'Sık Sorulan Sorular',
    description: 'Aklınızdaki soruların yanıtları burada. Bulamadıysanız bize ulaşın!',
    items: [
      {
        q: 'Kayıt için hangi belgeler gereklidir?',
        a: 'Kimlik fotokopisi, sağlık raporu, 2 adet vesikalık fotoğraf ve imzalı veli izin formu gerekmektedir. Online kayıt formunu doldurduktan sonra belgeler şahsen teslim edilebilir.',
      },
      {
        q: 'Kamp saatleri nelerdir?',
        a: 'Tam gün program 08:30–16:00, yarım gün program 09:00–12:15 arası düzenlenmektedir. Erken bırakma 08:00\'den, geç alım ise 17:00\'ye kadar mevcuttur.',
      },
      {
        q: 'Yemek ve atıştırmalıklar dahil mi?',
        a: 'Evet! Tam gün program kahvaltı, öğle yemeği ve sabah atıştırmalığını kapsamaktadır. Tüm yemekler uzman diyetisyen gözetiminde hazırlanmakta; diyet gereksinimleri ve alerjiler eksiksiz karşılanmaktadır.',
      },
      {
        q: 'Koç ve eğitmenler kimlerdir?',
        a: 'Tüm eğitmenlerimiz çocuk gelişimi sertifikalı ve deneyimli uzmanlardır. Öğrenci-eğitmen oranımız 8\'e 1\'dir.',
      },
      {
        q: 'Hangi yaş gruplarını kabul ediyorsunuz?',
        a: '4–15 yaş arası çocukları kabul ediyoruz. Programlar yaş grubuna göre özelleştirilmektedir: Küçük Kaşifler (4–6), Genç Mucitler (7–9), Süper Kodlayıcılar (10–12) ve Gelecekteki Liderler (13–15).',
      },
      {
        q: 'Güvenlik önlemleri nelerdir?',
        a: 'Kampüs 7/24 güvenlik kamerasıyla izlenmektedir. Giriş-çıkışlar kart sistemiyle kontrol edilmektedir. Tüm personel ilk yardım sertifikalıdır ve sahada sürekli sağlık personeli bulunmaktadır.',
      },
      {
        q: 'İptal ve iade politikası nedir?',
        a: 'Kamp başlangıcından 15 gün önce yapılan iptallerde %100, 7 gün önce %50 iade yapılmaktadır. Sağlık raporu destekli iptaller süre sınırına tabi değildir.',
      },
      {
        q: 'Kardeş indirimi var mı?',
        a: 'Evet! İkinci çocukta %15, üçüncü ve sonraki çocuklarda %25 indirim uygulanmaktadır. Erken kayıt döneminde ek %10 avantaj da mevcuttur.',
      },
    ],
  },

  /* Footer */
  footer: {
    cta: {
      title: 'Çocuğunuzun Unutulmaz Yazı Şimdi Başlasın! 🌟',
      sub: 'Erken kayıt avantajlarını kaçırmayın. Yerimiz sınırlı!',
      btn: 'Hemen Kayıt Ol',
    },
    brand: 'BISI Summer Camp, çocukların güvenli bir ortamda eğlenirken öğrenmelerini sağlayan, İstanbul\'un en kapsamlı yaz kampıdır.',
    quickLinks: 'Hızlı Bağlantılar',
    contact: 'İletişim',
    newsletter: 'Bültenimize Katılın',
    newsletterSub: 'Son dakika duyurularını ve özel fırsatları kaçırmayın.',
    emailPlaceholder: 'E-posta adresiniz',
    subscribe: 'Abone Ol',
    rights: 'Tüm hakları saklıdır.',
    links: [
      { label: 'Hakkımızda', href: '#' },
      { label: 'Programlar', href: '#programlar' },
      { label: 'Aktiviteler', href: '#aktiviteler' },
      { label: 'Galeri', href: '#galeri' },
      { label: 'SSS', href: '#sss' },
      { label: 'İletişim', href: '#iletisim' },
    ],
  },
}

export const en = {
  /* Navbar */
  nav: {
    locations: 'Locations',
    programs: 'Programmes',
    activities: 'Activities',
    faq: 'FAQ',
    enrol: 'Enrol Now',
  },

  /* Hero */
  hero: {
    badge: '☀️ 2026 Summer Enrolment — Now Open!',
    title: ['Learn English,', 'Have Fun!'],
    sub: 'At The British School Istanbul, your child learns English while playing sports, creating art, making friends — and having the best summer ever.',
    cta1: 'Explore Campuses',
    cta2: 'Enrol Now',
    stats: {
      workshops: 'Workshops',
      campers: 'Happy Campers',
      coaches: 'Expert Coaches',
      weeks: 'Fun-filled Weeks',
    },
  },

  /* Locations */
  locations: {
    badge: '📍 Our Campuses',
    title: 'We Welcome You at 4 Locations',
    description: 'Find the nearest BISI campus and give your child an unforgettable summer.',
    learnMore: 'Learn More',
    visitSite: 'Visit Site',
    enrol: 'Enrol',
    campuses: [
      {
        id: 'bahcesehir',
        name: 'Bahçeşehir',
        district: 'Başakşehir, Istanbul',
        description: 'The largest European-side campus with modern facilities and extensive sports areas.',
        tags: ['Sports Facilities', 'Swimming Pool', 'STEM Lab'],
        color: 'from-[#2D5A3F] to-[#3D7A56]',
        emoji: '🌳',
        externalLink: null,
      },
      {
        id: 'camlica',
        name: 'Çamlıca',
        district: 'Üsküdar, Istanbul',
        description: 'At the heart of the Asian side, a learning environment immersed in nature.',
        tags: ['Nature Walks', 'Art Studio', 'Music'],
        color: 'from-[#233256] to-[#3D5A8A]',
        emoji: '🌿',
        externalLink: null,
      },
      {
        id: 'alkent',
        name: 'Alkent',
        district: 'Büyükçekmece, Istanbul',
        description: 'A unique campus standing out with spacious green areas and private sports courts.',
        tags: ['Tennis Courts', 'Open Fields', 'Coding'],
        color: 'from-[#2D5A3F] to-[#233256]',
        emoji: '⛳',
        externalLink: null,
      },
      {
        id: 'zekeriyakoy',
        name: 'Zekeriyaköy',
        district: 'Sarıyer, Istanbul',
        description: 'An exclusive English-focused camp experience in the serene forests of Sarıyer.',
        tags: ['Exclusive Programme', 'Forest Setting', 'Full Board'],
        color: 'from-emerald-600 to-[#2D5A3F]',
        emoji: '🌲',
        externalLink: 'https://www.bisisummer.com',
        badge: 'Special Location',
      },
    ],
  },

  /* Activities */
  activities: {
    badge: '🌈 Activities',
    title: 'Ready to Explore?',
    description: 'Sports, arts, technology and nature – dozens of activities for every interest!',
    items: [
      { title: 'Sports', desc: 'Football, basketball, swimming and more' },
      { title: 'Arts', desc: 'Painting, sculpture, ceramics and creative workshops' },
      { title: 'English', desc: 'Fun language learning through games' },
      { title: 'STEM & Coding', desc: 'Robotics, coding and science experiments' },
      { title: 'Music', desc: 'Instruments, rhythm and choir sessions' },
      { title: 'Nature', desc: 'Gardening, nature walks and camping' },
      { title: 'Media', desc: 'Photography, video and digital art' },
      { title: 'Game Design', desc: 'Digital and analogue game development' },
      { title: 'Mini Kitchen', desc: 'Fun and healthy recipes to cook' },
      { title: 'Discovery Club', desc: 'Astronomy, archaeology and micro-adventures' },
    ],
  },

  /* FAQ */
  faq: {
    badge: '❓ FAQ',
    title: 'Frequently Asked Questions',
    description: 'Everything you need to know. Can\'t find what you\'re looking for? Get in touch!',
    items: [
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
    ],
  },

  /* Footer */
  footer: {
    cta: {
      title: "Give Your Child an Unforgettable Summer! 🌟",
      sub: "Don't miss early enrolment benefits. Limited spots available!",
      btn: 'Enrol Now',
    },
    brand: 'BISI Summer Camp is Istanbul\'s most comprehensive summer camp where children learn while having fun in a safe environment.',
    quickLinks: 'Quick Links',
    contact: 'Contact',
    newsletter: 'Join Our Newsletter',
    newsletterSub: 'Don\'t miss last-minute announcements and special offers.',
    emailPlaceholder: 'Your email address',
    subscribe: 'Subscribe',
    rights: 'All rights reserved.',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Programmes', href: '#programlar' },
      { label: 'Activities', href: '#aktiviteler' },
      { label: 'Gallery', href: '#galeri' },
      { label: 'FAQ', href: '#sss' },
      { label: 'Contact', href: '#iletisim' },
    ],
  },
}

export const translations = { tr, en }
