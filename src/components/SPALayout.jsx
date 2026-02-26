import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Navbar from './Navbar.jsx'
import ScrollProgress from './ScrollProgress'
import ScrollToTop from './ScrollToTop'

// Dynamically import heavy THREE.js particle background to reduce initial bundle
const ParticleBackground = dynamic(() => import('./ParticleBackground'), {
  ssr: false,
  loading: () => null,
})

const SPALayout = ({ children }) => {
  return (
    <div className="relative min-h-screen animated-gradient overflow-hidden">
      {/* Skip navigation link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>
      {/* Blurred decorative shapes */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-black/5 rounded-full blur-3xl opacity-60 z-0" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-black/5 rounded-full blur-2xl opacity-40 z-0" aria-hidden="true"></div>
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
      <main id="main-content" className="relative z-10">{children}</main>
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
