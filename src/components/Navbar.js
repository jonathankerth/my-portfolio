import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router' // Import useRouter to get the current route

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
  const router = useRouter() // Get the current route using useRouter()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleScroll = useCallback(() => {
    // Add your custom scroll handling logic here if needed
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full py-4 transition-all duration-200 ${
        isMobileMenuOpen || theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          type="button"
          className={
            theme === 'dark'
              ? 'text-white hover:text-gray-300'
              : 'text-black hover:text-gray-600'
          }
          aria-label="toggle theme"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>

        <div className="hidden md:block">
          <ul className="flex space-x-6">
            {/* Conditionally render the "Home" link based on the current route */}
            {navLinks.map(({ href, label }) =>
              // Check if the current route matches the href
              router.pathname === href ? null : (
                <li key={href}>
                  <Link
                    href={href}
                    className={`px-4 py-2 font-medium transition duration-300 ${
                      isMobileMenuOpen || theme === 'dark'
                        ? 'text-white hover:text-gray-300'
                        : 'text-black hover:text-gray-600'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            type="button"
            className={
              theme === 'dark'
                ? 'text-white hover:text-gray-300'
                : 'text-black hover:text-gray-600'
            }
            aria-label="toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-12 right-0 w-full bg-gray-900/90">
          <ul className="px-8 py-4">
            {navLinks.map(({ href, label }) =>
              // Check if the current route matches the href
              router.pathname === href ? null : (
                <li key={href} className="py-2">
                  <Link
                    href={href}
                    className={`text-lg font-semibold ${
                      theme === 'dark'
                        ? 'text-white hover:text-gray-300'
                        : 'text-black hover:text-gray-600'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
