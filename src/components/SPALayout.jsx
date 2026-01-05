import { motion } from 'framer-motion'
import Navbar from './Navbar.jsx'
import ScrollProgress from './ScrollProgress'
import ParticleBackground from './ParticleBackground'
import ScrollToTop from './ScrollToTop'

const SPALayout = ({ children }) => {
  return (
    <div className="relative min-h-screen animated-gradient overflow-hidden">
      {/* Blurred decorative shapes */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-black/5 rounded-full blur-3xl opacity-60 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-black/5 rounded-full blur-2xl opacity-40 z-0"></div>
      <ParticleBackground />
      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <Navbar />
      </motion.div>
      <ScrollProgress />
      <main className="relative z-10">{children}</main>
      <footer className="relative z-10 w-full border-t border-black/10 px-4 py-6">
        <div className="max-w-6xl mx-auto text-center text-xs text-black/60 tracking-wide">
          © {new Date().getFullYear()} Jonathan Gallardo-Kerth
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
}

export default SPALayout
