import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/About.module.css'
import { useState } from 'react'
import ImageCarousel from './ImageCarousel'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/Projects', label: 'Projects' },
  { href: '/Contact', label: 'Contact' },
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
            {isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
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

export default function About() {
  const techStack = [
    'React',
    'React Native',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'Bootstrap',
    'Tailwind CSS',
    'Redux',
    'Atatus',
    'Jest',
    'Cucumber',
    'Progressive Web Apps (PWAs)',
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>About - Software Engineer | My Portfolio</title>
        <meta
          name="description"
          content="Discover more about my experience and the diverse technologies I utilize"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Who am I?</h1>
        <p className={styles.description}>
          I&apos;m a dedicated and passionate software engineer specializing in
          building scalable, efficient web applications. With expertise in
          cutting-edge technologies like React, Next.js, Node.js, Express,
          ChatGPT, and MongoDB, I&apos;m always ready to tackle new challenges
          and learn in the process.
        </p>
        <p className={styles.description}>
          Outside the world of code, I&apos;m a food enthusiast, self proclaimed
          nerd, home cook, pet parent, and traveling the globe with my partner.
          Feel free to connect for any opportunities or questions about my
          projects. Thanks for dropping by!
        </p>
        <h3 className={styles.descriptionH3}>My Tech Stack</h3>
        <div className={styles.techStack}>
          {techStack.map((tech, index) => (
            <div key={index} className={styles.techStackItem}>
              <p>{tech}</p>
            </div>
          ))}
        </div>
        <div className="slideshow mt-20">
          <ImageCarousel />
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="/">← Return to Home</Link>
      </footer>
    </div>
  )
}
