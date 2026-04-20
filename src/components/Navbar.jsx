import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaCat } from 'react-icons/fa'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#resume', label: 'Resume' },
  { href: '#projects', label: 'Projects' },
  { href: '#tech-stack', label: 'Tech' },
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
    if (!element) return
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
      className="fixed top-0 left-0 z-50 w-full bg-white/80 px-4 py-2.5 md:px-8 border-b border-black/10 shadow-sm backdrop-blur-lg"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo — left aligned */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-2 shrink-0"
        >
          <FaCat className="text-xl text-black/80" aria-hidden="true" />
          <span className="text-base font-bold text-black tracking-tight hidden sm:inline">
            JGK
          </span>
        </a>

        {/* Desktop Links — right aligned, consistent sizing */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href.substring(1)
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => scrollToSection(e, href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`block px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200
                    ${isActive
                      ? 'text-black bg-black/5'
                      : 'text-black/60 hover:text-black hover:bg-black/5'
                    }
                  `}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Hamburger — mobile only */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-xl text-black" aria-hidden="true" />
            ) : (
              <FaBars className="text-xl text-black" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Links */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.ul
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg mt-0 py-3 px-4 shadow-lg border-b border-black/10 flex flex-col gap-1 md:hidden"
            >
              {navLinks.map(({ href, label }) => {
                const isActive = activeSection === href.substring(1)
                return (
                  <li key={href} className="list-none">
                    <a
                      href={href}
                      onClick={(e) => scrollToSection(e, href)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                        ${isActive
                          ? 'text-black bg-black/5'
                          : 'text-black/60 hover:text-black hover:bg-black/5'
                        }
                      `}
                    >
                      {label}
                    </a>
                  </li>
                )
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
