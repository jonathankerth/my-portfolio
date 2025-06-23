import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaCat } from 'react-icons/fa'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#projects', label: 'Projects' },
  { href: '#cats', label: 'Cat Memes' },
  { href: '#resume', label: 'Resume' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset

      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }

      setIsVisible(
        lastScrollPosition > currentScrollPosition || currentScrollPosition < 10
      )
      setLastScrollPosition(currentScrollPosition)

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
  }, [lastScrollPosition, isMobileMenuOpen])

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
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-200 ease-in-out ${
        isVisible
          ? 'bg-opacity-80 shadow-xl backdrop-blur-lg'
          : 'opacity-0 pointer-events-none'
      } bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-900 px-4 py-2 md:px-8`}
      style={{
        borderBottom: '1.5px solid rgba(255,255,255,0.08)',
        boxShadow: '0 4px 32px 0 rgba(80,80,255,0.10)',
      }}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <FaCat className="text-3xl text-white drop-shadow-lg animate-bounce" />
          <span className="text-xl font-extrabold text-white tracking-wide drop-shadow-lg hidden sm:inline">
            Jonathan Kerth
          </span>
        </div>
        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl text-white" />
            ) : (
              <FaBars className="text-2xl text-white" />
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
                className={`relative px-4 py-2 font-semibold text-white transition-all duration-300 rounded-lg group
                  ${
                    activeSection === href.substring(1)
                      ? 'bg-white/20 shadow-md'
                      : 'hover:bg-white/10'
                  }
                `}
              >
                <span className="relative z-10">{label}</span>
                <span
                  className={`absolute left-0 bottom-0 w-full h-1 rounded-b-lg transition-all duration-300
                    ${
                      activeSection === href.substring(1)
                        ? 'bg-blue-400'
                        : 'bg-transparent group-hover:bg-purple-400/60'
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
              className="flex flex-col absolute top-full left-0 right-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-900 mt-2 p-4 rounded-b-xl shadow-lg items-center space-y-2 md:hidden"
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
                    className={`relative px-4 py-2 font-semibold text-white transition-all duration-300 rounded-lg group
                      ${
                        activeSection === href.substring(1)
                          ? 'bg-white/20 shadow-md'
                          : 'hover:bg-white/10'
                      }
                    `}
                  >
                    <span className="relative z-10">{label}</span>
                    <span
                      className={`absolute left-0 bottom-0 w-full h-1 rounded-b-lg transition-all duration-300
                        ${
                          activeSection === href.substring(1)
                            ? 'bg-blue-400'
                            : 'bg-transparent group-hover:bg-purple-400/60'
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
