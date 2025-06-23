import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar.jsx'
import ScrollProgress from './ScrollProgress'
import ParticleBackground from './ParticleBackground'
import ScrollToTop from './ScrollToTop'

const SPALayout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className="relative min-h-screen animated-gradient overflow-hidden">
      {/* Blurred decorative shapes */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl opacity-30 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400 rounded-full blur-2xl opacity-20 z-0"></div>
      <ParticleBackground />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50"
          >
            <Navbar />
          </motion.div>
        )}
      </AnimatePresence>
      <ScrollProgress />
      <main className="relative z-10">{children}</main>
      <ScrollToTop />
    </div>
  )
}

export default SPALayout
