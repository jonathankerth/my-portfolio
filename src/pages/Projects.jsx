import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import ProjectModal from '../components/ProjectModal.js'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/About', label: 'About' },
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
const projects = [
  {
    id: 1,
    title: 'Nicolas Cage Movie Repository',
    description:
      'A comprehensive repository dedicated to Nicolas Cage movies, built using React and styled with Bootstrap. The project is integrated with a custom-built RESTful API, NicCage API, to fetch and display movie data. Hosted on Netlify for seamless user experience.',
    link: 'https://github.com/jonathankerth/nicCage-client',
    link2: 'https://niccagecllient.netlify.app/',
    image: 'https://mypublicucket.s3.us-west-2.amazonaws.com/nicCageHome.png',
  },
  {
    id: 2,
    title: 'Weather App',
    description:
      'A real-time weather application developed using Next.js and styled with Tailwind CSS. It fetches current weather data from the OpenWeather API and is deployed on Vercel for high availability.',
    link: 'https://github.com/jonathankerth/weather-app',
    link2: 'https://weather-app-woad-two.vercel.app/',
    image: 'https://mypublicucket.s3.us-west-2.amazonaws.com/weather-home.png',
  },
  {
    id: 3,
    title: 'KitchenGPT',
    description:
      'A cutting-edge kitchen assistant powered by GPT-3. The front-end is built with React, while the back-end utilizes Node.js and Express.js. The application is hosted on Heroku and Vercel for robust scalability.',
    link: 'https://github.com/jonathankerth/KitchenGPT',
    link2: 'https://kitchen-gpt.vercel.app/',
    image:
      'https://mypublicucket.s3.us-west-2.amazonaws.com/kitchen-gpt-home.png',
  },
  {
    id: 4,
    title: 'Oregonized Design Co Shopify Frontend (WIP)',
    description:
      "A custom e-commerce frontend built on top of Shopify's headless API. Developed using Next.js and Tailwind CSS, this project is a collaboration between Jonathan Kerth and Sidney Gallardo. The platform specializes in custom-designed clothing and accessories for Bachelorette Parties and is hosted on Vercel.",
    link: 'https://github.com/jonathankerth/oregonized-design',
    link2: 'https://oregonizeddesign.com/',
    image: 'https://mypublicucket.s3.us-west-2.amazonaws.com/designHome.png',
  },
  {
    id: 5,
    title: 'Meet App',
    description:
      'A serverless Progressive Web App (PWA) built using React and Node.js. Developed with a Test-Driven Development (TDD) approach, the app fetches upcoming tech events from Google Calendar API and features OAuth2 authentication.',
    link: 'https://github.com/jonathankerth/meet',
    link2: 'https://jonathankerth.github.io/meet/',
    image: 'https://mypublicucket.s3.us-west-2.amazonaws.com/meet-home.png',
  },
  {
    id: 7,
    title: 'Magic Wheel Component',
    description:
      'An innovative wheel spinner component, created entirely with Tailwind CSS. Seamlessly integrated into a Next.js environment, this component showcases advanced CSS techniques, and animations',
    link: 'https://github.com/jonathankerth/magic-wheel',
    link2: 'https://magic-wheel-rosy.vercel.app/',
    image: 'https://mypublicucket.s3.us-west-2.amazonaws.com/wheel.png',
  },
  {
    id: 8,
    title: 'Pokedex',
    description:
      'An interactive Pokedex application that displays detailed information about various Pokemon. Built using vanilla JavaScript and fetches data from PokeAPI.co for an authentic experience.',
    link: 'https://github.com/jonathankerth/pokemon-js',
    link2: 'https://pokemon-js-omega.vercel.app/#',
    image: 'https://mypublicucket.s3.us-west-2.amazonaws.com/pokedex-home.png',
  },
  {
    id: 6,
    title: 'NicCage API',
    description:
      'A custom-built RESTful API that serves as a comprehensive database for Nicolas Cage movies. Developed using Node.js, Express.js, and MongoDB, the API is hosted on Heroku for easy access and high availability.',
    link: 'https://github.com/jonathankerth/Nicolas-Cage-API',
    link2: 'https://niccage.herokuapp.com/',
    image: 'https://mypublicucket.s3.us-west-2.amazonaws.com/nicCage-API.png',
  },
  {
    id: 9,
    title: 'React Native Chat App',
    description:
      'A mobile-friendly chat application built using React Native and Expo. The app features a real-time chat interface, image sharing, and location sharing capabilities, all backed by Firebase for data storage and user authentication.',
    link: 'https://github.com/jonathankerth/chat-app',
    image: 'https://mypublicucket.s3.us-west-2.amazonaws.com/chatExample.png',
    link3: 'https://github.com/jonathankerth/chat-app',
  },
]

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(null)

  const openModal = (project) => {
    setCurrentProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div
      className="bg-cover bg-no-repeat bg-fixed min-h-screen py-0.5"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1806&q=80')",
      }}
    >
      <Head>
        <title>Projects</title>
        <meta
          name="Projects"
          content="A showcase of my software engineering projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="container mt-24 mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold text-black text-center ">
          A Few of My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-container transition-transform duration-300 hover:scale-105 bg-white rounded-lg shadow-md flex flex-col p-6"
              style={{ minHeight: '400px' }} // You can adjust this based on your content
            >
              <h3 className="text-xl font-bold mb-2 flex-shrink-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-400 underline flex items-center"
                >
                  {project.title}{' '}
                </a>
              </h3>
              {project.image && (
                <a
                  href={project.link2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-top w-full h-64 mb-4"
                    width={500}
                    height={500}
                  />
                </a>
              )}
              <p className="text-gray-700 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex-shrink-0">
                {project.title === 'Nicolas Cage Movie Repository' ? (
                  <button
                    onClick={() => openModal(project)}
                    className="inline-block px-4 py-2 mr-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    View Case Study
                  </button>
                ) : null}
                {project.link2 && (
                  <a
                    href={project.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 border-2 border-blue-500 bg-blue-500 text-white hover:bg-blue-600 hover:border-blue-600 hover:text-white rounded transition duration-300 ease-in-out"
                  >
                    Live Site
                  </a>
                )}
                {project.link3 && (
                  <a
                    href={project.link3}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 border-2 border-blue-500 bg-blue-500 text-white hover:bg-blue-600 hover:border-blue-600 hover:text-white rounded transition duration-300 ease-in-out"
                  >
                    Codebase
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="flex items-center justify-center w-full h-24 text-white bg-gray-900/50">
        <Link href="/">
          <button className="px-6 py-3 font-semibold text-lg bg-white text-black rounded-full shadow-md hover:bg-gray-900/90 hover:text-white transition duration-300">
            ← Back to home
          </button>
        </Link>
      </footer>
      {isModalOpen && (
        <ProjectModal project={currentProject} closeModal={closeModal} />
      )}
    </div>
  )
}
