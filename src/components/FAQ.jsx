import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Container, SectionHeader } from './UI'

const faqs = [
  {
    q: 'Kayıt için gerekli belgeler nelerdir?',
    a: 'Kimlik fotokopisi, sağlık raporu, 2 adet vesikalık fotoğraf ve imzalı veli izin belgesi gerekmektedir. Online kayıt formunu doldurduktan sonra bu belgeleri elden teslim edebilirsiniz.',
  },
  {
    q: 'Kamp saatleri nedir?',
    a: 'Tam gün program 08:30-16:00, yarım gün program 09:00-12:15 saatleri arasında gerçekleşmektedir. Sabah 08:00\'den itibaren erken bırakma, 17:00\'ye kadar geç alma seçeneği de mevcuttur.',
  },
  {
    q: 'Yemek ve atıştırmalıklar dahil mi?',
    a: 'Evet! Tam gün programa sabah kahvaltısı, öğle yemeği ve ara atıştırmalıklar dahildir. Tüm yiyecekler uzman diyetisyen denetiminde hazırlanır. Alerji ve diyet gereksinimleri dikkate alınır.',
  },
  {
    q: 'Eğitmenler kimlerdir?',
    a: 'Tüm eğitmenlerimiz alanında uzman, çocuk gelişimi sertifikalı ve deneyimli profesyonellerdir. Her 8 öğrenciye 1 eğitmen düşecek şekilde kadromuz oluşturulmuştur.',
  },
  {
    q: 'Hangi yaş gruplarını kabul ediyorsunuz?',
    a: '4-15 yaş arası çocuklarımızı kabul ediyoruz. Programlar yaş gruplarına göre özelleştirilmiştir: Mini Kaşifler (4-6), Genç Mucitler (7-9), Süper Kodcular (10-12) ve Gelecek Liderleri (13-15).',
  },
  {
    q: 'Güvenlik önlemleriniz nelerdir?',
    a: 'Kampüsümüz 7/24 güvenlik kamerası ile izlenmektedir. Giriş-çıkışlar kartlı sistem ile kontrol edilir. Tüm personelimiz ilk yardım sertifikalıdır ve sahada sürekli bir sağlık görevlisi bulunmaktadır.',
  },
  {
    q: 'İptal ve iade politikası nasıl?',
    a: 'Kamp başlangıcından 15 gün öncesine kadar yapılan iptallerde %100, 7 gün öncesine kadar %50 iade yapılmaktadır. Sağlık raporu ile iptal durumunda süre kısıtlaması uygulanmaz.',
  },
  {
    q: 'Kardeş indirimi var mı?',
    a: 'Evet! İkinci çocuk için %15, üçüncü ve sonraki çocuklar için %25 kardeş indirimi uygulanmaktadır. Ayrıca erken kayıt döneminde ekstra %10 indirim fırsatı sunulmaktadır.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-gray-100 rounded-2xl overflow-hidden hover:border-bisi-yellow/50 transition-colors"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
      >
        <span className="font-semibold text-bisi-navy font-[family-name:var(--font-display)] pr-4 group-hover:text-bisi-orange transition-colors">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-bisi-yellow/10 flex items-center justify-center"
        >
          <ChevronDown className="w-5 h-5 text-bisi-orange" />
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
            <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
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
    <section id="sss" className="py-20 md:py-28 bg-gradient-to-b from-white to-bisi-light">
      <Container>
        <SectionHeader
          badge="❓ SSS"
          title="Sıkça Sorulan Sorular"
          description="Merak ettiğiniz her şeyin cevabı burada. Aradığınızı bulamadıysanız bize ulaşın!"
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
