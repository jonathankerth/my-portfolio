import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { useState, useEffect, useCallback } from 'react'
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
import { FaMeta, FaSquareXTwitter } from 'react-icons/fa6'
import Image from 'next/image'

const navLinks = [
  { href: '/Resume', label: 'Resume' },
  { href: '/About', label: 'About Me' },
  { href: '/Projects', label: 'Projects' },
  { href: '/Cats', label: 'Cat Memes' },
]
const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  const handleFooterVisibility = useCallback(() => {
    const bottomReached =
      window.innerHeight + window.scrollY >= document.body.scrollHeight
    const notAtTop = window.pageYOffset > 0
    setIsFooterVisible(bottomReached && notAtTop)
  }, [])

  useEffect(() => {
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleFooterVisibility)
    return () => {
      window.removeEventListener('scroll', handleFooterVisibility)
    }
  }, [handleFooterVisibility])

  return (
    <footer
      className={`fixed inset-x-0 bottom-0 flex items-center justify-between bg-gray-900/90 text-white p-4 z-50 ${
        isFooterVisible || !isMobile ? 'visible' : 'invisible'
      }`}
    >
      <div className="flex items-center">
        <Link
          href="https://api.checklyhq.com/v1/badges/checks/319f6d4d-8c0d-4ae2-ae10-d0eaf4d8fbad?style=for-the-badge&theme=dark"
          passHref
          target="_blank"
        >
          <Image
            src="https://api.checklyhq.com/v1/badges/checks/319f6d4d-8c0d-4ae2-ae10-d0eaf4d8fbad?style=for-the-badge&theme=dark"
            alt="Checkly"
            height={28}
            width={120}
            className="cursor-pointer"
          />
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

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false)
  const handleFlipClick = () => {
    setIsFlipped(!isFlipped)
  }

  const [isZoomed, setIsZoomed] = useState(false)
  const imageUrl =
    'https://mypublicucket.s3.us-west-2.amazonaws.com/DALL%C2%B7E+2023-08-18+15.22.22.png'
  const handleImageClick = () => {
    setIsZoomed(!isZoomed)
  }

  const [isFooterVisible, setIsFooterVisible] = useState(true)
  const handleFooterVisibility = useCallback(() => {
    const bottomReached =
      window.innerHeight + window.scrollY >= document.body.scrollHeight
    setIsFooterVisible(bottomReached)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleFooterVisibility)
    return () => {
      window.removeEventListener('scroll', handleFooterVisibility)
    }
  }, [handleFooterVisibility])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-dark-blue to-black text-white flex flex-col justify-center items-center px-4">
      <Head>
        <title>Jonathan Kerth&apos;s Portfolio</title>
        <meta
          name="description"
          content="A portfolio showcasing my skills and projects as a software engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-8LGP2ZRQYQ" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8LGP2ZRQYQ');
        `}
      </Script>
      <Navbar />
      <main
        className={`flex flex-col md:flex-row items-center justify-center w-full px-4 mt-16 sm:px-8 py-8 text-center bg-black bg-opacity-80 max-w-5xl transition-transform duration-700 ease-in-out ${
          isFlipped ? 'transform rotate-180' : ''
        }`}
      >
        <div className="text-white md:w-2/3 pr-8">
          <h1 className="mb-4 text-4xl">Welcome,</h1>
          <p className="mb-8 text-2xl text-gray-300">
            I&apos;m Jonathan Gallardo-Kerth
          </p>
          <div className="text-xl text-gray-300 mb-4">
            As a Software Engineer, I specialize in crafting engaging online
            experiences. On my website, you&apos;ll find a showcase of my recent
            work, and a glimpse of who I am both behind the code.
          </div>
          <div className="text-xl text-gray-300">
            Looking to collaborate or connect? Feel free to reach out through
            any of the sites below. Thank you for stopping by!
          </div>
          <div className="flex flex-wrap items-center mt-8 space-x-2 sm:space-x-4 justify-center">
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
              <FaSquareXTwitter className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
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
        </div>
        <div
          className={`relative md:w-1/3 mb-4 md:mt-12 md:mb-2 md:mr-8 float-right transition-transform duration-700 ease-in-out z-10 ${
            isZoomed ? 'transform scale-150' : ''
          }`}
          onClick={handleImageClick}
          style={{ width: '150px', height: '150px' }}
        >
          <Image
            src={imageUrl}
            alt="Jonathan Kerth"
            width={150}
            height={150}
            className="rounded-full cursor-pointer"
          />
        </div>
      </main>
      <div className="flex mt-6 mb-12">
        <button
          onClick={handleFlipClick}
          className={`text-lg px-4 py-2 rounded-full ${
            isFlipped
              ? 'bg-gray-200/80 text-black'
              : 'bg-gray-200/80 text-black'
          } hover:bg-gray-300/80 hover:text-white transition duration-300`}
        >
          {isFlipped ? 'Less Fun' : 'Press for Fun'}
        </button>
      </div>
      <Footer />
    </div>
  )
}
