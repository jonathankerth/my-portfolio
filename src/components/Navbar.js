import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
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
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)

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
      } bg-[#34495E] px-4 py-2 md:px-8`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-4">
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
            isMobileMenuOpen ? 'flex flex-col md:flex-row' : 'hidden md:flex'
          } items-center space-y-2 md:space-y-0 md:space-x-4`}
        >
          {navLinks
            .filter(({ href }) => href !== router.pathname)
            .map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-colors duration-300 hover:underline text-white hover:text-gray-300"
                >
                  {label}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
