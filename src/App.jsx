import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Programs from './components/Programs'
import Activities from './components/Activities'
import DailySchedule from './components/DailySchedule'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Programs />
      <Activities />
      <DailySchedule />
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  )
}
