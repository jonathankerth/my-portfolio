import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { useState, useEffect, useCallback } from 'react'
import { useTheme } from 'next-themes' // Import the useTheme hook
import {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaEnvelope,
  FaMedium,
} from 'react-icons/fa'
import { FaMeta, FaSquareXTwitter } from 'react-icons/fa6'
import Image from 'next/image'
import Navbar from '../components/Navbar'

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  const handleFooterVisibility = useCallback(() => {
    const bottomReached =
      window.innerHeight + window.scrollY >= document.body.scrollHeight
    const notAtTop = window.pageYOffset > 0

    setIsFooterVisible(bottomReached || notAtTop)
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

  // Use the useTheme hook to get the theme
  const { theme } = useTheme()

  return (
    <footer
      className={`fixed inset-x-0 bottom-0 flex items-center justify-between bg-gray-900/20 text-white p-4 z-50 ${
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
            height={42}
            width={180}
            className="cursor-pointer"
          />
        </Link>
      </div>
    </footer>
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

  const { theme } = useTheme()

  const backgroundColors = {
    light: 'bg-gradient-to-b from-blue-200 to-blue-400',
    dark: 'bg-gradient-to-b from-gray-800 via-gray-900 to-gray-1000',
  }
  const mainBackgroundColors = {
    light: 'bg-gradient-to-b from-blue-300 via-blue-350 to-blue-450', // Complementing light mode gradient
    dark: 'bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900', // Complementing dark mode gradient
  }

  const textColors = {
    light: 'text-black',
    dark: 'text-white',
  }

  return (
    <div
      className={`min-h-screen ${
        theme === 'dark' ? backgroundColors.dark : backgroundColors.light
      } text-white flex flex-col justify-center items-center px-4`}
    >
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
        className={`flex flex-col items-center justify-center w-full mt-16 py-8 px-4 text-center transition-transform duration-700 ease-in-out ${
          isFlipped ? 'transform rotate-180' : ''
        } ${
          theme === 'dark'
            ? mainBackgroundColors.dark
            : mainBackgroundColors.light
        } text-white mx-auto shadow-lg`}
        style={{ maxWidth: '75%' }} // 75% of the viewport width for larger screens
      >
        <div
          className={`w-full ${
            theme === 'dark' ? textColors.dark : textColors.light
          }`}
        >
          <p
            className={`font-bold mb-4 text-2xl ${
              theme === 'dark' ? textColors.dark : textColors.light
            }`}
          >
            Hi, I&apos;m Jonathan Gallardo-Kerth
          </p>
          <div
            className={`mb-4 text-xl ${
              theme === 'dark' ? textColors.dark : textColors.light
            }`}
          >
            As a Software Engineer, I specialize in javascript technologies to
            build cutting edge web experiences. Here, you&apos;ll find a
            showcase of my recent work, and a glimpse of who I am both behind
            the code.
          </div>

          <div
            className={` ${
              theme === 'dark' ? textColors.dark : textColors.light
            }  pr-8 mb-4 text-xl`}
          >
            Looking to collaborate or connect? Feel free to reach out through
            any of the sites below. Thank you for stopping by!
          </div>
          <div className="flex flex-wrap items-center mt-8 space-x-2 sm:space-x-4 justify-center">
            <a
              href="mailto:jonathanpkerth@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className={` ${
                theme === 'dark' ? textColors.dark : textColors.light
              }  group`}
            >
              <FaEnvelope className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
            </a>
            <a
              href="https://www.linkedin.com/in/jonathankerth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={` ${
                theme === 'dark' ? textColors.dark : textColors.light
              }  group`}
            >
              <FaLinkedin className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
            </a>
            <a
              href="https://github.com/jonathankerth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={` ${
                theme === 'dark' ? textColors.dark : textColors.light
              }  group`}
            >
              <FaGithub className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
            </a>
            <a
              href="https://stackoverflow.com/users/21791075/jonathan-kerth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Stack Overflow"
              className={` ${
                theme === 'dark' ? textColors.dark : textColors.light
              }  group`}
            >
              <FaStackOverflow className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
            </a>
            <a
              href="https://twitter.com/jonathankerth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className={` ${
                theme === 'dark' ? textColors.dark : textColors.light
              }  group`}
            >
              <FaSquareXTwitter className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
            </a>
            <a
              href="https://medium.com/@jonathanpkerth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
              className={` ${
                theme === 'dark' ? textColors.dark : textColors.light
              }  group`}
            >
              <FaMedium className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
            </a>
            <a
              href="https://www.threads.net/@jonathankerth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
              className={` ${
                theme === 'dark' ? textColors.dark : textColors.light
              }  group`}
            >
              <FaMeta className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
            </a>
          </div>
        </div>
        <div
          className={`relative w-full mb-4 mt-4 transition-transform duration-700 ease-in-out z-10 ${
            isZoomed ? 'transform scale-150' : ''
          }`}
          onClick={handleImageClick}
        >
          <Image
            src={imageUrl}
            alt="Jonathan Kerth"
            width={300}
            height={300}
            className="rounded-full cursor-pointer mx-auto"
            priority
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
