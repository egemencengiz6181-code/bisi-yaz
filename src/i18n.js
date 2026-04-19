// ─── BISI Summer Camp — Translation Registry ─────────────────────────────────
// Usage: import { tr, en } from './i18n'

export const tr = {
  /* Navbar */
  nav: {
    home: 'Anasayfa',
    locations: 'Lokasyonlar',
    programs: 'Programlar',
    activities: 'Aktiviteler',
    faq: 'SSS',
    enrol: 'Kayıt Ol',
    campuses: 'Kurumlarımız',
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
        image: '/okullar/bahcesehir/bahcesehir.jpg',
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
        image: '/okullar/camlica/camlica.jpg',
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
        image: '/okullar/alkent/alkent.jpg',
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
        image: '/okullar/zekeriyakoy/zekeriyakoy.jpg',
        externalLink: 'https://www.bisisummer.com',
        badge: 'Özel Lokasyon',
      },
    ],
  },

  /* Activities */
  activities: {
    badge: '🌈 Aktiviteler',
    title: 'Keşfetmeye Hazır mısın?',
    description: 'Spor, sanat, İngilizce ve daha fazlası — her ilgi alanına göre zengin aktiviteler!',
    items: [
      { title: 'Spor', desc: 'Basketbol, voleybol, yüzme, tenis, futsal' },
      { title: 'Sanat', desc: 'Yaratıcı atölyeler ve el sanatları' },
      { title: 'İngilizce', desc: 'Speaking, Listening, Drama ve daha fazlası' },
      { title: 'Satranç', desc: 'Strateji ve zihin geliştirici satranç seansları' },
      { title: 'Dans', desc: 'Modern dans ve ritim çalışmaları' },
      { title: 'Minik Şefler', desc: 'Eğlenceli ve sağlıklı mutfak etkinlikleri' },
      { title: 'Bahçe', desc: 'Bahçe etkinlikleri ve doğa ile buluşma' },
      { title: 'Yüzme', desc: 'Profesyonel eğitmenler eşliğinde yüzme dersi' },
      { title: 'Deney', desc: 'İngilizce Experiment dersleri' },
      { title: 'Hikaye', desc: 'Story Telling ile yaratıcı İngilizce' },
    ],
  },

  /* Features */
  features: {
    badge: '⭐ Neden Bizi Seçmelisiniz?',
    title: 'Çocuğunuzun İhtiyacı Olan Her Şey',
    description: 'Güvenlikten öğrenmeye, her detay unutulmaz bir yaz deneyimi için özenle tasarlanmıştır.',
    items: [
      { title: 'Güvenli Kampüs', description: '7/24 güvenlik, kameralar ve ilk yardım sertifikalı personel.' },
      { title: 'İngilizce Odaklı Program', description: 'Yabancı öğretmenler eşliğinde, Speaking, Listening, Drama ve daha fazlası.' },
      { title: 'Sağlıklı Beslenme', description: 'Kahvaltı, öğle yemeği ve ikindi kahvaltısı programa dahildir.' },
      { title: 'Uzman Eğitmenler', description: 'Hido Basketbol Akademi ve BK Voleybol Akademisi iş birliğiyle profesyonel eğitmenler.' },
      { title: 'Tam Gün Program', description: '09:00–16:00 tam gün program; haftalık kayıt imkânı mevcuttur.' },
      { title: 'Yaş Grubuna Özel', description: '4–13 yaş arası çocuklar için yaş grubuna özel hazırlanmış programlar.' },
    ],
    trust: {
      sub: 'İstanbul\'daki ailelerin güvendiği okul',
      title: 'Her yaz 150\'den fazla mutlu öğrencimiz BIS\'de yaz okulunu deneyimliyor',
      badges: [
        '🇬🇧 İngilizce Odaklı Program',
        '✅ CCTV & Güvenlik',
        '🍽️ Kahvaltı & Öğle Yemeği Dahil',
        '🏆 Profesyonel Eğitmenler',
      ],
    },
  },

  /* Gallery */
  gallery: {
    badge: '📸 Galeri',
    title: 'Kampta Hayat',
    description: 'İngilizce Yaz Okulu\'nun enerjik ve renkli dünyasına bir bakış atın.',
  },

  /* FAQ */
  faq: {
    badge: '❓ SSS',
    title: 'Sık Sorulan Sorular',
    description: 'Aklınızdaki soruların yanıtları burada. Bulamadıysanız bize ulaşın!',
    items: [
      {
        q: 'Program kaç yaş grubuna uygundur?',
        a: '4 ile 13 yaş arasındaki çocuklarımızı kabul ediyoruz. Program, her yaş grubuna uygun aktiviteler ve İngilizce eğitimle hazırlanmıştır.',
      },
      {
        q: 'Program saatleri nelerdir?',
        a: 'Program hafta içi her gün 09:00–16:00 saatleri arasında uygulanmaktadır. Servis ve bireysel bırakma seçenekleri mevcuttur.',
      },
      {
        q: 'Yemekler programa dahil mi?',
        a: 'Evet! Sabah kahvaltısı ve öğle yemeği programa dahildir. Ayrıca ikindi kahvaltısı (snack) da sağlanmaktadır.',
      },
      {
        q: 'İngilizce eğitim nasıl işliyor?',
        a: 'BIS Schools yabancı öğretmen kadrosu tarafından yürütülen Intensive English programımızda Speaking, Listening, Reading, Writing ve Drama gibi yetkinlikler doğal bir ortamda geliştirilmektedir. Derslerin bir kısmı sınıfta, bir kısmı ise koruda veya farklı mekânlarda gerçekleştirilmektedir.',
      },
      {
        q: 'Hangi spor aktiviteleri sunulmaktadır?',
        a: 'Basketbol, voleybol (Hido Basketbol Akademi ve BK Voleybol Akademisi iş birliğiyle), cimnastik, yüzme, tenis ve futsal gibi sporlar profesyonel ve sertifikalı eğitmenler tarafından sunulmaktadır.',
      },
      {
        q: 'Yüzme dersi programa dahil mi?',
        a: 'Evet, her gün 11:15–12:15 saatleri arasında düzenli yüzme dersi programa dahildir.',
      },
      {
        q: 'Haftalık kayıt yapılabilir mi?',
        a: 'Evet, haftalık kayıt imkânı mevcuttur. 1 haftalık kayıt 18.000 ₺+KDV, 3 haftalık kayıt ise 45.000 ₺+KDV\'dir.',
      },
      {
        q: 'Kardeş indirimi var mı?',
        a: 'Evet, %5 kardeş indirimi uygulanmaktadır.',
      },
      {
        q: '8 haftalık program nasıl planlanmıştır?',
        a: 'Program, 8 hafta boyunca farklı temalarla planlanmıştır. Her hafta öğrencilerimiz farklı bir gelişim alanını deneyimlemekte; atölye ve etkinlikler haftalar arasında rotasyonlu olarak değişmektedir.',
      },
    ],
  },

  /* Registration Modal */
  registration: {
    badge: 'BISI Summer Camp 2026',
    title: 'Kayıt Formu',
    subtitle: 'Alanları doldurun, size ulaşalım.',
    fields: {
      name:        { label: 'İsim Soyisim',      placeholder: 'Adınız ve soyadınız' },
      email:       { label: 'E-posta',            placeholder: 'ornek@email.com' },
      phone:       { label: 'Telefon Numarası',   placeholder: '+90 5XX XXX XX XX' },
      institution: { label: 'Kurum Seçimi',       placeholder: 'Kurumunuzu seçin' },
    },
    institutions: ['Bahçeşehir', 'Çamlıca', 'Alkent', 'Zekeriyaköy'],
    submit: 'Formu Gönder',
    success: {
      title:   'Formunuz Alındı!',
      message: 'Teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.',
      close:   'Kapat',
    },
  },

  /* Footer */
  footer: {
    cta: {
      title: 'Çocuğunuzun Unutulmaz Yazı Şimdi Başlasın! 🌟',
      sub: 'Erken kayıt avantajlarını kaçırmayın. Yerimiz sınırlı!',
      btn: 'Hemen Kayıt Ol',
    },
    brand: 'BISI Summer School, çocukların güvenli bir ortamda İngilizce öğrenirken eğlenmelerini sağlayan BIS Okulları bünyesindeki kapsamlı yaz okuludur.',
    quickLinks: 'Hızlı Bağlantılar',
    campusesTitle: 'Kurumlarımız',
    newsletter: 'Bültenimize Katılın',
    newsletterSub: 'Son dakika duyurularını ve özel fırsatları kaçırmayın.',
    emailPlaceholder: 'E-posta adresiniz',
    subscribe: 'Abone Ol',
    rights: 'Tüm hakları saklıdır.',
    links: [
      { label: 'Anasayfa',    href: '/' },
      { label: 'Aktiviteler', href: '#aktiviteler' },
      { label: 'Galeri',      href: '#galeri' },
      { label: 'SSS',         href: '#sss' },
    ],
    campusLinks: [
      { label: 'Bahçeşehir',  href: '/bahcesehir',               external: false },
      { label: 'Çamlıca',     href: '/camlica',                  external: false },
      { label: 'Alkent',      href: '/alkent',                   external: false },
      { label: 'Zekeriyaköy', href: 'https://www.bisisummer.com', external: true  },
    ],
  },
}

export const en = {
  /* Navbar */
  nav: {
    home: 'Home',
    locations: 'Locations',
    programs: 'Programmes',
    activities: 'Activities',
    faq: 'FAQ',
    enrol: 'Enrol Now',
    campuses: 'Our Campuses',
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
        image: '/okullar/bahcesehir/bahcesehir.jpg',
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
        image: '/okullar/camlica/camlica.jpg',
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
        image: '/okullar/alkent/alkent.jpg',
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
        image: '/okullar/zekeriyakoy/zekeriyakoy.jpg',
        externalLink: 'https://www.bisisummer.com',
        badge: 'Special Location',
      },
    ],
  },

  /* Activities */
  activities: {
    badge: '🌈 Activities',
    title: 'Ready to Explore?',
    description: 'Sports, arts, English and more — a rich range of activities for every interest!',
    items: [
      { title: 'Sports', desc: 'Basketball, volleyball, swimming, tennis, futsal' },
      { title: 'Arts', desc: 'Creative workshops and crafts' },
      { title: 'English', desc: 'Speaking, Listening, Drama and more' },
      { title: 'Chess', desc: 'Strategy and mind-building chess sessions' },
      { title: 'Dance', desc: 'Modern dance and rhythm workshops' },
      { title: 'Little Chefs', desc: 'Fun and healthy kitchen activities' },
      { title: 'Garden', desc: 'Garden activities and connecting with nature' },
      { title: 'Swimming', desc: 'Daily swimming lessons with certified coaches' },
      { title: 'Experiment', desc: 'English Experiment lessons' },
      { title: 'Story Telling', desc: 'Creative English through story telling' },
    ],
  },

  /* Features */
  features: {
    badge: '⭐ Why Choose Us',
    title: 'Everything Your Child Needs',
    description: 'From safety to learning, every detail is thoughtfully crafted for an unforgettable summer experience.',
    items: [
      { title: 'Safe & Secure Campus', description: '24/7 security, CCTV monitoring and first-aid certified staff at all times.' },
      { title: 'English-Focused Programme', description: 'Speaking, Listening, Drama and more delivered by foreign teachers.' },
      { title: 'Meals Included', description: 'Breakfast, lunch and afternoon snacks are all included in the programme.' },
      { title: 'Expert Instructors', description: 'Professional coaches in partnership with Hido Basketball Academy and BK Volleyball Academy.' },
      { title: 'Full-Day Programme', description: '09:00–16:00 full-day programme; weekly enrolment available.' },
      { title: 'Age-Specific Groups', description: 'Specially tailored programmes for children aged 4–13.' },
    ],
    trust: {
      sub: 'Trusted by families across Istanbul',
      title: 'Over 150 happy students experience BIS Summer School every summer',
      badges: [
        '🇬🇧 English-Focused Programme',
        '✅ CCTV & Security',
        '🍽️ Breakfast & Lunch Included',
        '🏆 Professional Instructors',
      ],
    },
  },

  /* Gallery */
  gallery: {
    badge: '📸 Gallery',
    title: 'Life at Camp',
    description: 'Take a look at the energetic and colourful world of the English Summer Camp.',
  },

  /* FAQ */
  faq: {
    badge: '❓ FAQ',
    title: 'Frequently Asked Questions',
    description: "Everything you need to know. Can't find what you're looking for? Get in touch!",
    items: [
      {
        q: 'What age groups is the programme suitable for?',
        a: 'We welcome children aged 4 to 13. The programme is designed with activities and English education tailored to each age group.',
      },
      {
        q: 'What are the programme hours?',
        a: 'The programme runs Monday to Friday, 09:00–16:00. Transport and individual drop-off options are available.',
      },
      {
        q: 'Are meals included?',
        a: 'Yes! Breakfast and lunch are included. An afternoon snack is also provided.',
      },
      {
        q: 'How does the English education work?',
        a: 'Our Intensive English programme is delivered by BIS Schools foreign teachers, developing Speaking, Listening, Reading, Writing and Drama skills in a natural environment. Some lessons take place in the classroom while others are held in the grove or other outdoor spaces.',
      },
      {
        q: 'What sports activities are available?',
        a: 'Basketball, volleyball (in partnership with Hido Basketball Academy and BK Volleyball Academy), gymnastics, swimming, tennis and futsal are all delivered by professional, certified coaches.',
      },
      {
        q: 'Is swimming included in the programme?',
        a: 'Yes, a daily swimming lesson is included from 11:15–12:15.',
      },
      {
        q: 'Can I enrol on a weekly basis?',
        a: 'Yes, weekly enrolment is available. 1 week is 18,000 ₺+VAT and 3 weeks is 45,000 ₺+VAT.',
      },
      {
        q: 'Is there a sibling discount?',
        a: 'Yes, a 5% sibling discount applies.',
      },
      {
        q: 'How is the 8-week programme structured?',
        a: 'The programme is planned around different themes across 8 weeks. Each week, students experience a different area of development; workshops and activities rotate between weeks.',
      },
    ],
  },

  /* Registration Modal */
  registration: {
    badge: 'BISI Summer Camp 2026',
    title: 'Registration Form',
    subtitle: 'Fill in the fields and we\'ll get back to you.',
    fields: {
      name:        { label: 'Full Name',        placeholder: 'Your first and last name' },
      email:       { label: 'Email',            placeholder: 'example@email.com' },
      phone:       { label: 'Phone Number',     placeholder: '+90 5XX XXX XX XX' },
      institution: { label: 'Campus Selection', placeholder: 'Select your campus' },
    },
    institutions: ['Bahçeşehir', 'Çamlıca', 'Alkent', 'Zekeriyaköy'],
    submit: 'Submit Form',
    success: {
      title:   'Form Received!',
      message: 'Thank you! We\'ll get in touch with you shortly.',
      close:   'Close',
    },
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
    campusesTitle: 'Our Campuses',
    newsletter: 'Join Our Newsletter',
    newsletterSub: 'Don\'t miss last-minute announcements and special offers.',
    emailPlaceholder: 'Your email address',
    subscribe: 'Subscribe',
    rights: 'All rights reserved.',
    links: [
      { label: 'Home', href: '#' },
      { label: 'Activities', href: '#aktiviteler' },
      { label: 'Gallery', href: '#galeri' },
      { label: 'FAQ', href: '#sss' },
    ],
    campusLinks: [
      { label: 'Bahçeşehir Campus', href: '/bahcesehir', external: false },
      { label: 'Çamlıca Campus', href: '/camlica', external: false },
      { label: 'Alkent Campus', href: '/alkent', external: false },
      { label: 'Zekeriyaköy Campus', href: '#', external: false },
    ],
  },
}

export const translations = { tr, en }
