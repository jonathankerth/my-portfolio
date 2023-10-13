import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/About', label: 'About Me' },
  { href: '/Projects', label: 'Projects' },
  { href: '/Cats', label: 'Cat Memes' },
]

const Footer = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(false)

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset
    const isVisible = prevScrollPos < currentScrollPos

    setPrevScrollPos(currentScrollPos)
    setVisible(isVisible)
  }, [prevScrollPos])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <footer
      className={`fixed bottom-0 left-0 z-50 w-full py-4 bg-gray-900/80 transition-all duration-200 ${
        visible ? 'visible' : 'invisible'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/">
          <button className="px-4 py-2 font-medium text-white hover:text-gray-200 transition duration-300">
            ← Back to home
          </button>
        </Link>
      </div>
    </footer>
  )
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset
    const isVisible = prevScrollPos > currentScrollPos

    setPrevScrollPos(currentScrollPos)
    setVisible(isVisible)
  }, [prevScrollPos])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full py-4 bg-gradient-to-b from-gray-800 to-black transition-all duration-200 ${
        visible ? 'visible' : 'invisible'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="px-4 py-2 font-medium text-white hover:text-gray-200 transition duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
            aria-label="toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-12 right-0 w-full bg-gray-900/90">
          <ul className="px-8 py-4">
            {navLinks.map(({ href, label }) => (
              <li key={href} className="py-2">
                <Link
                  href={href}
                  className="text-white hover:text-gray-200 text-lg font-semibold"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-dark-blue to-black text-white flex flex-col justify-center items-center px-4">
      <Head>
        <title>My Resume</title>
        <meta name="description" content="Download or view my resume here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mt-20 mb-20">
        <div className=" rounded-lg shadow-md">
          <a
            href="https://mypublicucket.s3.us-west-2.amazonaws.com/JGK+Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md mb-6 text-dark-gray bg-soft-blue hover:bg-medium-blue focus:outline-none focus:border-medium-blue focus:ring focus:ring-soft-blue active:bg-medium-blue transition ease-in-out duration-150"
          >
            <svg
              className="mr-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 012-2h8a2 2 0 012 2v3h1a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zm0 2v12h12V8h-2V5H4zm8-1V3l4 4h-3a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Download My Resume
          </a>
          <Image
            src="https://mypublicucket.s3.us-west-2.amazonaws.com/JGK-Resume.webp"
            priority={true}
            alt="Jonathan Kerth Resume"
            width={750}
            height={500}
            className="border rounded-lg border-black"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
