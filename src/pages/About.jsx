import Head from 'next/head'
import Link from 'next/link'
import { React, useState } from 'react'
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
                  className="px-6 py-3 font-semibold text-lg bg-white text-black rounded-full shadow-md hover:bg-gray-900/90 hover:text-white transition duration-300"
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
  const commonWidth = 300
  const commonHeight = 200

  return (
    <div className="flex justify-center items-center w-full h-full">
      <Carousel
        infiniteLoop={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={false}
        transitionTime={500}
      >
        <div>
          <Image
            src="/images/IMG_0318.jpeg"
            alt="Image 1"
            width={commonWidth}
            height={commonHeight}
          />
        </div>
        <div>
          <Image
            src="/images/IMG_4068.jpeg"
            alt="Image 2"
            width={commonWidth}
            height={commonHeight}
          />
        </div>
        <div>
          <Image
            src="/images/IMG_4902.jpeg"
            alt="Image 3"
            width={commonWidth}
            height={commonHeight}
          />
        </div>
        <div>
          <Image
            src="/images/IMG_6050.jpeg"
            alt="Image 4"
            width={commonWidth}
            height={commonHeight}
          />
        </div>
        <div>
          <Image
            src="/images/IMG_6217.jpeg"
            alt="Image 5"
            width={commonWidth}
            height={commonHeight}
          />
        </div>
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
  ]
  return (
    <div
      className="min-h-screen bg-center bg-cover flex flex-col justify-center items-center px-2"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1806&q=80')",
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
        <div className="bg-black bg-opacity-40 rounded-lg p-4 mb-6 max-w-2xl">
          <p className="text-white text-md leading-6 text-center max-w-full mb-4">
            I&apos;m a dedicated and passionate software engineer specializing
            in building scalable, efficient web applications. With expertise in
            cutting-edge technologies like React, Next.js, Node.js, Express,
            ChatGPT, and MongoDB, I&apos;m always ready to tackle new challenges
            and learn in the process.
          </p>
          <p className="text-white text-md leading-6 text-center max-w-full">
            Outside the world of code, I&apos;m a food enthusiast, self
            proclaimed nerd, home cook, pet parent, and traveling the globe with
            my partner. Feel free to connect for any opportunities or questions
            about my projects. Thanks for dropping by!
          </p>
        </div>
        <h3 className="bg-black bg-opacity-40 text-white text-center text-xl p-4 rounded-lg">
          A few technologies I&apos;ve been working with recently:
        </h3>
        <div className="flex flex-wrap justify-center items-center mt-4">
          {techStack.map((tech, index) => (
            <a
              key={index}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 m-1 shadow-md hover:bg-red-500 transition-colors duration-300"
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
