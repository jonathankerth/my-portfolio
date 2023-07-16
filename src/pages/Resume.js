import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Resume.module.css'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/Contact', label: 'Contact' },
  { href: '/About', label: 'About' },
  { href: '/Projects', label: 'Projects' },
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

export default function Resume() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resume - Software Engineer Portfolio</title>
        <meta
          name="description"
          content="My resume as a software engineer showcasing my skills, experience, and education."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.resumeImage}></div>
        <div
          className={`${styles.download} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`}
        >
          <a href="/resume-image.png" download>
            Download My Resume
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="/">← Back to home</Link>
      </footer>
    </div>
  )
}
