import { motion } from 'framer-motion'
import { Palette, Blocks, Rocket, GraduationCap, ArrowRight } from 'lucide-react'
import { Container, SectionHeader } from './UI'

const programs = [
  {
    age: 'Ages 4–6',
    title: 'Little Explorers',
    emoji: '🧸',
    description: 'Play-based learning, creative arts, story time, and foundational motor skills.',
    color: 'from-emerald-400 to-teal-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    icon: Palette,
    features: ['Creative Play', 'Story Time', 'Music & Dance', 'Arts & Crafts'],
  },
  {
    age: 'Ages 7–9',
    title: 'Young Inventors',
    emoji: '🔧',
    description: 'STEM projects, team sports, English workshops and nature exploration.',
    color: 'from-[#3D7A56] to-[#2D5A3F]',
    bgColor: 'bg-[#EEF5F0]',
    borderColor: 'border-[#B8DECA]',
    icon: Blocks,
    features: ['STEM Projects', 'Team Sports', 'English', 'Nature Exploration'],
  },
  {
    age: 'Ages 10–12',
    title: 'Super Coders',
    emoji: '💻',
    description: 'Coding, robotics, entrepreneurship and leadership skills.',
    color: 'from-[#233256] to-[#3A5F8A]',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200',
    icon: Rocket,
    features: ['Coding', 'Robotics', 'Entrepreneurship', 'Leadership'],
  },
  {
    age: 'Ages 13–15',
    title: 'Future Leaders',
    emoji: '🎓',
    description: 'Advanced projects, foreign languages, debate club and career exploration.',
    color: 'from-[#2D5A3F] to-[#233256]',
    bgColor: 'bg-[#EEF5F0]',
    borderColor: 'border-[#B8DECA]',
    icon: GraduationCap,
    features: ['Advanced Projects', 'Foreign Language', 'Debate Club', 'Career Exploration'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Programs() {
  return (
    <section id="programlar" className="py-20 md:py-28 bg-white w-full">
      <Container>
        <SectionHeader
          badge="🎯 Age-Specific Programmes"
          title="A Programme for Every Age"
          description="Specially designed programmes tailored to your child's age and interests."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programs.map((prog) => (
            <motion.div
              key={prog.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative group rounded-3xl ${prog.bgColor} border ${prog.borderColor} p-6 cursor-pointer transition-shadow hover:shadow-xl`}
            >
              <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r ${prog.color} text-white text-xs font-bold shadow-sm mb-4`}>
                {prog.age}
              </div>
              <div className="text-4xl mb-3 text-center">{prog.emoji}</div>
              <h3 className="text-xl font-extrabold text-bisi-navy font-[family-name:var(--font-display)] mb-2 text-center">
                {prog.title}
              </h3>
              <p className="text-sm text-bisi-gray leading-relaxed mb-4 text-center">
                {prog.description}
              </p>
              <div className="space-y-2 mb-4">
                {prog.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-bisi-gray justify-center">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${prog.color} flex-shrink-0`} />
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-1 text-sm font-semibold text-bisi-navy group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
