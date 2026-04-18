import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LangProvider } from './LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Locations from './components/Locations'
import Features from './components/Features'
import Activities from './components/Activities'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import RegistrationModal from './components/RegistrationModal'
import CampusPage from './pages/CampusPage'
import BahcesehirPage from './pages/BahcesehirPage'

function MainPage() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <Hero onOpenModal={() => setModalOpen(true)} />
      {/* Mobile-only promo video */}
      <div className="block md:hidden w-full bg-black">
        <video
          src="/video/bis anasayfa.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full object-cover"
        />
      </div>
      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Locations />
      <Features />
      <Activities />
      <Gallery />
      <FAQ />
      <Footer onOpenModal={() => setModalOpen(true)} />
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bahcesehir" element={<BahcesehirPage />} />
        <Route path="/camlica" element={<CampusPage campusId="camlica" />} />
        <Route path="/alkent" element={<CampusPage campusId="alkent" />} />
      </Routes>
    </LangProvider>
  )
}
