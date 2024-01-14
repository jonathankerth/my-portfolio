import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/About', label: 'About Me' },
  { href: '/Projects', label: 'Projects' },
  { href: '/Cats', label: 'Cat Memes' },
  { href: '/Resume', label: 'Resume' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset

      if (isMobileMenuOpen) {
        closeMobileMenu()
      }

      setIsVisible(
        lastScrollPosition > currentScrollPosition || currentScrollPosition < 10
      )

      setLastScrollPosition(currentScrollPosition)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollPosition, isMobileMenuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full py-4 transition-all duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } ${theme === 'dark' ? 'text-white' : 'text-black'}`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          type="button"
          className={`${
            theme === 'dark'
              ? 'text-white hover:text-gray-300'
              : 'text-black hover:text-gray-600'
          }`}
          aria-label="toggle theme"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            type="button"
            className={`${
              theme === 'dark'
                ? 'text-white hover:text-gray-300'
                : 'text-black hover:text-gray-600'
            }`}
            aria-label="toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div
          className={`hidden md:flex space-x-6 ${
            isMobileMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          {navLinks.map(({ href, label }) => {
            const isActive = router.pathname === href
            return isActive ? null : (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 font-medium transition duration-300 ${
                  theme === 'dark'
                    ? 'text-white hover:text-gray-300'
                    : 'text-black hover:text-gray-600'
                } border rounded-full border-transparent hover:border-current`}
                onClick={closeMobileMenu}
              >
                {label}
              </Link>
            )
          })}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-12 right-0 w-full bg-gray-900/60">
          <ul className="px-8 py-4">
            {navLinks.map(({ href, label }) => {
              const isActive = router.pathname === href
              if (isActive) return null
              return (
                <li key={href} className="py-2">
                  <Link
                    href={href}
                    className={`text-lg font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-white'
                    } border rounded-full border-transparent hover:border-current`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
