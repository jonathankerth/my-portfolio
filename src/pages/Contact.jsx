import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaEnvelope,
  FaMedium,
} from 'react-icons/fa'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/Projects', label: 'Projects' },
  { href: '/About', label: 'About' },
  { href: '/Resume', label: 'Resume' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 z-50 w-full py-4 bg-green-900/40">
      <div className="max-w-screen-lg mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-white hover:text-gray-200 text-xl md:text-2xl font-bold"
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
        <div className="md:hidden absolute top-16 right-0 w-full bg-gray-800">
          <ul className="px-8 py-4">
            {navLinks.map(({ href, label }) => (
              <li key={href} className="py-2">
                <Link
                  href={href}
                  className="text-white hover:text-gray-200 text-xl font-bold"
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

export default function Contact() {
  return (
    <div
      className="flex flex-col  justify-center min-h-screen p-4 bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1533335121856-52d185e85ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Head>
          <title>Contact Me</title>
          <meta
            name="description"
            content="Get in touch with me for collaborations or opportunities"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar className="navBar" />
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold text-white">Contact me here!</h1>
          <div className="flex items-center mt-8 space-x-4">
            <a
              href="mailto:jonathanpkerth@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="group text-white"
            >
              <FaEnvelope className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
            </a>
            <a
              href="https://www.linkedin.com/in/jonathankerth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group text-white"
            >
              <FaLinkedin className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
            </a>
            <a
              href="https://github.com/jonathankerth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group text-white"
            >
              <FaGithub className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
            </a>
            <a
              href="https://stackoverflow.com/users/21791075/jonathan-kerth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Stack Overflow"
              className="group text-white"
            >
              <FaStackOverflow className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
            </a>
            <a
              href="https://twitter.com/jonathankerth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="group text-white"
            >
              <FaTwitter className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
            </a>
            <a
              href="https://medium.com/@jonathanpkerth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
              className="group text-white"
            >
              <FaMedium className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
            </a>
          </div>
        </main>
        <footer className="flex items-center justify-center w-full h-24 border-t text-white">
          <Link href="/">Back to home</Link>
        </footer>
      </div>
    </div>
  )
}
