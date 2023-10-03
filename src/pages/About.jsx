import Head from 'next/head'
import Link from 'next/link'
import { React, useState, useEffect, useCallback } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/Projects', label: 'Projects' },
  { href: '/Resume', label: 'Resume' },
  { href: '/Cats', label: 'Cat Memes' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Handling navbar visibility while scrolling
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
      className={`fixed top-0 left-0 z-50 w-full py-4 bg-gray-900/50 transition-all duration-200 ${
        visible ? 'visible' : 'invisible'
      }`}
    >
      <div className="max-w-screen-lg mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="px-6 py-3 font-semibold text-md bg-white text-black rounded-full shadow-md hover:bg-gray-900/90 hover:text-white transition duration-300"
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
        <div className="md:hidden absolute top-12 right-0 w-full bg-gray-900/50">
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
const ImageCarousel = () => {
  const aspectRatio = 4 / 3 // 4:3 aspect ratio
  const commonWidth = 200 // You can adjust this as needed
  const commonHeight = commonWidth / aspectRatio // Calculated based on the aspect ratio

  const images = [
    // Add your images here
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/IMG_6217.jpeg',
      alt: 'Image 1',
    },
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/IMG_6050.jpeg',
      alt: 'Image 2',
    },
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/IMG_4902.jpeg',
      alt: 'Image 3',
    },
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/IMG_4068.jpeg',
      alt: 'Image 4',
    },
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/sid+and+J+selfie.jpeg',
      alt: 'Image 5',
    },
  ]

  const carouselProps = {
    infiniteLoop: true,
    showStatus: false,
    showIndicators: true,
    showThumbs: false,
    autoPlay: true,
    interval: 3000,
    stopOnHover: false,
    transitionTime: 500,
  }
  return (
    <div className="flex justify-center items-center w-full h-full p-4 rounded-lg bg-white bg-opacity-40">
      <Carousel {...carouselProps}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="relative rounded-lg shadow-md max-h-full">
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                objectFit="contain"
                width={1} // These values are used in combination with layout="responsive"
                height={1} // to maintain the original aspect ratio of the image
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default function About() {
  const techStack = [
    { name: 'React', url: 'https://reactjs.org/' },
    { name: 'React Native', url: 'https://reactnative.dev/' },
    { name: 'Next.js', url: 'https://nextjs.org/' },
    { name: 'Node.js', url: 'https://nodejs.org/' },
    { name: 'Angular', url: 'https://angular.io/' },
    { name: 'Express', url: 'https://expressjs.com/' },
    { name: 'MongoDB', url: 'https://www.mongodb.com/' },
    { name: 'Bootstrap', url: 'https://getbootstrap.com/' },
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
    { name: 'Redux', url: 'https://redux.js.org/' },
    { name: 'Atatus', url: 'https://www.atatus.com/' },
    { name: 'Jest', url: 'https://jestjs.io/' },
    { name: 'Cucumber', url: 'https://cucumber.io/' },
    {
      name: 'Progressive Web Apps (PWAs)',
      url: 'https://web.dev/progressive-web-apps/',
    },
    { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    {
      name: 'JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    { name: 'SCSS', url: 'https://sass-lang.com/' },
    {
      name: 'Google Analytics',
      url: 'https://developers.google.com/analytics',
    },
    { name: 'Firebase', url: 'https://firebase.google.com/' },
  ]
  return (
    <div
      className="min-h-screen bg-center bg-cover flex flex-col justify-center items-center px-2"
      style={{
        backgroundImage:
          "url('https://mypublicucket.s3.us-west-2.amazonaws.com/portfolio+bg.avif')",
      }}
    >
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="Discover more about my experience and the diverse technologies I utilize"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-1 py-12 mt-10">
        <div className="bg-black bg-opacity-70 rounded-lg p-4 mb-6 max-w-2xl">
          <h1 className="text-2xl font-bold text-white text-center mb-4">
            About Me
          </h1>
          <p className="text-white text-xl leading-6 text-center max-w-full mb-4">
            I&apos;m a dedicated and passionate software engineer specializing
            in building scalable, and efficient web applications. I primarily
            use cutting-edge technologies like React, Next.js, Node.js, Express,
            Redux, Javascript, ChatGPT, and MongoDB, I love tackling new
            challenges and continous learning.
          </p>
          <p className="text-white text-xl leading-6 text-center max-w-full">
            Outside the world of code, I&apos;m a food enthusiast, self
            proclaimed nerd, home chef, pet parent, and I&apos;ve been to 5 out
            of the 7 continents. Feel free to connect for any opportunities or
            questions about my projects. Thanks for dropping by!
          </p>
          <p className="text-white text-xl leading-6 text-center max-w-full mt-4">
            A few technologies I&apos;ve been working with recently:
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center w-3/4 mx-auto mt-4">
          {techStack.map((tech, index) => (
            <a
              key={index}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 m-1 shadow-md hover:bg-gray-500 transition-colors duration-300"
            >
              {tech.name}
            </a>
          ))}
        </div>
      </main>

      <div className="max-w-xl">
        <ImageCarousel />
      </div>
      <footer className="flex items-center justify-center w-full h-24 text-white bg-gray-900/50">
        <Link href="/">
          <button className="px-6 py-3 font-semibold text-lg bg-white text-black rounded-full shadow-md hover:bg-gray-900/90 hover:text-white transition duration-300">
            ← Back to home
          </button>
        </Link>
      </footer>
    </div>
  )
}
