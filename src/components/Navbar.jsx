import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaCat } from 'react-icons/fa'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#projects', label: 'Projects' },
  { href: '#tech-stack', label: 'Tech Stack' },
  { href: '#cats', label: 'Cat Memes' },
  { href: '#resume', label: 'Resume' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }

      const sections = navLinks.map((link) => link.href.substring(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileMenuOpen])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    const offset = 80
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })

    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white/80 px-4 py-2 md:px-8 border-b border-black/10 shadow-xl backdrop-blur-lg transition-colors duration-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <FaCat className="text-3xl text-black/90 drop-shadow-lg animate-bounce" />
          <span className="text-xl font-extrabold text-black tracking-wide drop-shadow-lg hidden sm:inline">
            Jonathan Gallardo-Kerth
          </span>
        </div>
        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl text-black" />
            ) : (
              <FaBars className="text-2xl text-black" />
            )}
          </button>
        </div>
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => scrollToSection(e, href)}
                className={`relative px-4 py-2 font-semibold text-black transition-all duration-300 rounded-lg group
                  ${
                    activeSection === href.substring(1)
                      ? 'bg-black/5 shadow-sm'
                      : 'hover:bg-black/5'
                  }
                `}
              >
                <span className="relative z-10">{label}</span>
                <span
                  className={`absolute left-0 bottom-0 w-full h-1 rounded-b-lg transition-all duration-300
                    ${
                      activeSection === href.substring(1)
                        ? 'bg-black/40'
                        : 'bg-transparent group-hover:bg-black/20'
                    }
                  `}
                ></span>
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Links */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col absolute top-full left-0 right-0 bg-white/90 mt-2 p-4 rounded-b-xl shadow-lg items-center space-y-2 md:hidden border border-black/10"
            >
              {navLinks.map(({ href, label }) => (
                <motion.li
                  key={href}
                  whileHover={{ scale: 1.13, color: '#fff' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full"
                >
                  <a
                    href={href}
                    onClick={(e) => scrollToSection(e, href)}
                    className={`relative px-4 py-2 font-semibold text-black transition-all duration-300 rounded-lg group
                      ${
                        activeSection === href.substring(1)
                          ? 'bg-black/5 shadow-sm'
                          : 'hover:bg-black/5'
                      }
                    `}
                  >
                    <span className="relative z-10">{label}</span>
                    <span
                      className={`absolute left-0 bottom-0 w-full h-1 rounded-b-lg transition-all duration-300
                        ${
                          activeSection === href.substring(1)
                            ? 'bg-black/40'
                            : 'bg-transparent group-hover:bg-black/20'
                        }
                      `}
                    ></span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
