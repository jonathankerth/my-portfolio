import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import {
  FaBars,
  FaTimes,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaEnvelope,
  FaMedium,
} from 'react-icons/fa'
import { FaMeta } from 'react-icons/fa6'
const navLinks = [
  { href: '/Resume', label: 'Resume' },
  { href: '/About', label: 'About' },
  { href: '/Projects', label: 'Projects' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 z-50 w-full py-4 bg-gray-900/50">
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

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1806&q=80')",
      }}
    >
      <Head>
        <title>Jonathan Kerth&apos;s Portfolio</title>
        <meta
          name="description"
          content="A portfolio showcasing my skills and projects as a software engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full px-8 py-8 mt-6 text-center bg-black bg-opacity-60 max-w-2xl">
        <h1 className="mb-4 text-3xl text-white">Welcome,</h1>

        <p className="mb-8 text-2xl text-white">I&apos;m Jonathan Kerth</p>

        <div className="text-xl text-white">
          Welcome to my website! Here, I showcase my work as a web developer and
          provide insights into who I am. If you&apos;re interested in getting
          in touch, you can connect with me through any of the following
          platforms:
        </div>
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
          <a
            href="https://www.threads.net/@jonathankerth"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
            className="group text-white"
          >
            <FaMeta className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
          </a>
        </div>
      </main>

      <footer className="fixed left-0 bottom-0 w-full bg-gray-900/50 text-white">
        <div className="flex items-center justify-center h-24">
          <a
            href="https://github.com/jonathankerth"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-gray-200"
          >
            <span className="h-6">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub Logo"
                width={24}
                height={24}
              />
            </span>
            <span>Powered by GitHub</span>
          </a>
        </div>
      </footer>
    </div>
  )
}
