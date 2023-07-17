import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/Contact', label: 'Contact' },
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

const projects = [
  {
    id: 1,
    title: 'Nicolas Cage Fan Page - Front-end',
    description:
      'A fan page for Nicolas Cage movies built with React and Bootstrap. Hosted on Netflify. Built to display a backend API I built: NicCage API. Deployed here: https://niccagecllient.netlify.app/login',
    link: 'https://github.com/jonathankerth/nicCage-client',
  },
  {
    id: 2,
    title: 'NicCage API',
    description:
      'A RESTful API built with Node.js, Express.js, MongoDB, and hosted on Heroku.',
    link: 'https://github.com/jonathankerth/Nicolas-Cage-API',
  },
  {
    id: 3,
    title: 'Pokedex',
    description:
      'A Pokedex to display traits, pictures and size of Pokemon. Utilizing the pokeapi.co Built with Javascript.',
    link: 'https://github.com/jonathankerth/pokemon-js',
  },
  {
    id: 4,
    title: 'KitchenGPT',
    description:
      'A GPT-3 powered kitchen assitant. Built with React, Node.js, Express.js, backend hosted on Heroku and Vercel for front-end. Deployed here: https://kitchen-gpt.vercel.app/',
    link: 'https://github.com/jonathankerth/KitchenGPT',
  },
  {
    id: 5,
    title: 'Weather-App',
    description:
      'Built on Next.js using Tailwind.CSS to display real-time data from the OpenWeather API. Deployed here using Vercel: https://weather-app-woad-two.vercel.app/',
    link: 'https://github.com/jonathankerth/weather-app',
  },
  {
    id: 6,
    title: 'Meet App',
    description:
      'A serverless, PWA built with React/Node.js using TDD. It fetches upcoming tech events by utilizing the Google Calendar API and authentications using Oauth2. Hosted on gh-pages: https://jonathankerth.github.io/meet/',
    link: 'https://github.com/jonathankerth/meet',
  },
  {
    id: 7,
    title: 'React Native Chat App',
    description:
      'This project involves building a mobile chat application using React Native. The app provides users with a chat interface and options to share images and their location.',
    link: 'https://github.com/jonathankerth/chat-app',
  },
]

export default function Projects() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-fixed min-h-screen py-0.5"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1533335121856-52d185e85ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      <Head>
        <title>Projects - Software Engineer Portfolio</title>
        <meta
          name="description"
          content="A showcase of my software engineering projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container mt-16 mx-auto px-4 md:px-8">
        <h1 className="text-4xl  font-bold text-white text-center my-8">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-container transition-transform duration-300 hover:scale-105 bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-bold mb-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-900 hover:text-green-400"
                >
                  {project.title}
                </a>
              </h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer text-white text-center py-4 mt-8">
        <Link href="/">Back to home</Link>
      </footer>
    </div>
  )
}
