import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/Projects', label: 'Projects' },

  { href: '/Resume', label: 'Resume' },
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
            {isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 w-full bg-gray-800">
          <ul className="px-8 py-4">
            {navLinks.map(({ href, label }) => (
              <li key={href} className="py-2">
                <Link href={href}>
                  <a className="text-white hover:text-gray-200 text-xl font-bold">
                    {label}
                  </a>
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
            width={300}
            height={200}
          />
        </div>
        <div>
          <Image
            src="/images/IMG_4068.jpeg"
            alt="Image 2"
            width={300}
            height={200}
          />
        </div>
        <div>
          <Image
            src="/images/IMG_4902.jpeg"
            alt="Image 3"
            width={600}
            height={400}
          />
        </div>
        <div>
          <Image
            src="/images/IMG_6050.jpeg"
            alt="Image 4"
            width={300}
            height={200}
          />
        </div>
        <div>
          <Image
            src="/images/IMG_6217.jpeg"
            alt="Image 5"
            width={300}
            height={200}
          />
        </div>
      </Carousel>
    </div>
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
        <div className="bg-black bg-opacity-40 rounded-lg p-6 mb-6">
          <p className="text-white text-2xl leading-7 text-center max-w-full mb-6">
            I&apos;m a dedicated and passionate software engineer specializing
            in building scalable, efficient web applications. With expertise in
            cutting-edge technologies like React, Next.js, Node.js, Express,
            ChatGPT, and MongoDB, I&apos;m always ready to tackle new challenges
            and learn in the process.
          </p>
          <p className="text-white text-2xl leading-7 text-center max-w-full mb-12">
            Outside the world of code, I&apos;m a food enthusiast, self
            proclaimed nerd, home cook, pet parent, and traveling the globe with
            my partner. Feel free to connect for any opportunities or questions
            about my projects. Thanks for dropping by!
          </p>
        </div>
        <h3 className="bg-black bg-opacity-40 text-white font-bold text-center text-2xl p-6 rounded-lg mb-6">
          A few technologies I&apos;ve been working with recently:
        </h3>
        <div className="flex flex-wrap justify-center items-center mt-6">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-red-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-800 m-2 shadow-md hover:bg-red-500 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </main>

      <ImageCarousel />
      <footer className="flex items-center justify-center w-full h-24  text-white  bg-gray-900/50">
        <Link href="/">← Back to home</Link>
      </footer>
    </div>
  )
}
