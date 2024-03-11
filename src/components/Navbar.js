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

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
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
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollPosition, isMobileMenuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-200 ease-in-out ${
        isVisible
          ? 'bg-opacity-95 shadow-lg backdrop-filter backdrop-blur-sm'
          : 'opacity-0 pointer-events-none'
      } ${
        theme === 'dark' ? 'bg-[#34495E]' : 'bg-[#D6EAF8]'
      } px-4 py-2 md:px-8`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-1 rounded-full">
            {theme === 'dark' ? (
              <FaSun className="text-yellow-300" />
            ) : (
              <FaMoon className="text-gray-700" />
            )}
          </button>

          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="p-1 rounded-md">
              {isMobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>

        <ul
          className={`${
            isMobileMenuOpen ? 'flex' : 'hidden'
          } md:flex items-center space-x-4 md:space-x-8`}
        >
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <span
                  className={`transition-colors duration-300 cursor-pointer ${
                    router.pathname === href ? 'font-bold' : ''
                  } ${
                    theme === 'dark'
                      ? 'text-white hover:text-gray-300'
                      : 'text-gray-900 hover:text-gray-600'
                  }`}
                >
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
