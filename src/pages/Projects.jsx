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

const projects = [
  {
    id: 1,
    title: 'Nicolas Cage Fan Page - Front-end',
    description:
      'A fan page for Nicolas Cage movies built with React and Bootstrap. Hosted on Netlify. Built to display a backend API I built: NicCage API. ',
    link: 'https://github.com/jonathankerth/nicCage-client',
    link2: 'https://niccagecllient.netlify.app/',
    image: '/nicCageHome.png',
  },
  {
    id: 2,
    title: 'Meet App',
    description:
      'A serverless, PWA built with React/Node.js using TDD. It fetches upcoming tech events by utilizing the Google Calendar API and authentications using OAuth2. ',
    link: 'https://github.com/jonathankerth/meet',
    link2: 'https://jonathankerth.github.io/meet/',
    image: '/meet-home.png',
  },
  {
    id: 3,
    title: 'Pokedex',
    description:
      'A Pokedex to display traits, pictures, and size of Pokemon. Utilizing the PokeAPI.co. Built with JavaScript.',
    link: 'https://github.com/jonathankerth/pokemon-js',
    link2: 'https://pokemon-js-omega.vercel.app/#',
    image: '/pokedex-home.png',
  },
  {
    id: 4,
    title: 'KitchenGPT',
    description:
      'A GPT-3 powered kitchen assistant. Built with React, Node.js, Express.js. Backend hosted on Heroku and front-end deployed on Vercel. ',
    link: 'https://github.com/jonathankerth/KitchenGPT',
    link2: 'https://kitchen-gpt.vercel.app/',
    image: '/kitchen-gpt-home.png',
  },
  {
    id: 5,
    title: 'Weather App',
    description:
      'Built on Next.js using Tailwind CSS to display real-time weather data from the OpenWeather API. Deployed here using Vercel: https://weather-app-woad-two.vercel.app/',
    link: 'https://github.com/jonathankerth/weather-app',
    link2: 'https://weather-app-woad-two.vercel.app/',
    image: '/weather-home.png',
  },
  {
    id: 6,
    title: 'NicCage API',
    description:
      'A RESTful API built with Node.js, Express.js, MongoDB, and hosted on Heroku.',
    link: 'https://github.com/jonathankerth/Nicolas-Cage-API',
    link2: 'https://niccage.herokuapp.com/',
    image:
      'https://storagebucket-730.s3.us-west-2.amazonaws.com/Screen%20Shot%202023-07-25%20at%208.39.41%20PM.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZ0%2FLSpHoimn5M2XsXfCG6Tj7qpCkHW4dJNlGPKiHzSAiEAy14xmdGHdo7rKQ4wqsgrD7Dwgh25prceZtkLX7Melx4q6AIIPRAAGgw1Nzc5Njk1OTIzOTIiDECjQJkpi6AIIbKIRCrFAr2X45zJMn4CdieBIZZC2ibSVcQ5kpU%2BuRcEQkLotPq3oG%2F%2FHt%2BES9fSchIM%2FtvOq0FQoNuq%2FU%2F7l5SrLY134zV2QEolPBUHyNkN3D5cvWmRaAwoh4zwPn%2BRddX9vi6cSCxiP2bDWUs0kJ49RBFoDX34LkaQnvQeQjln7JpNZBsFDjnXkfR9xj0r4yfkVcZLheDH2rE7eKTq8nhJ5PE1nbY4TIscBbYmCAsyJfGtEEFnK%2FgUwY%2BpW9ILdPnaMlvmh7jxpQbZbcfFvw56eH%2BKHMdiPvpOegixqQpnY5tS6JE5EIjTjtzJCosG6%2FuFoyoKl%2BLRYxwdaBN1UUEaGIHt6pkkyjSiEmNvCbWluRK7Kp1%2F5IEUDSjwsQBe62PhK%2Byh5APk7WOhPFcZ7Xw%2BBTTwHUFN2ozHDIYFrRFVdFr%2FdZK04l7Zz3Aww6uCpgY6swJtPwR%2BOP8a46V6iRvFceK6LJVWhETiRX8%2BQ64d%2FBTggUYf6DH1uZZJAzS%2F5cVE2Kfm%2FUEPOt4WUJSeGxJfDks4uqw0%2Bi%2FPTnAVZv%2FJMInQ8rcuvfEZuAckfQmZtBWaXJ0DGLEJxPOX0CAb4xqJ1iIqL8qLnrqRadew%2BpbpSrv1oXy%2Bbd3fZhUl51Xf5zXOUNM1fBWiA2qXQ7u%2FpGitTyIuUWG4mHJjS3TIvGtJMCT%2F%2FIR7E00Ik9UC4%2Fbb24JR%2F4MjzAQ367Bj7gt9%2FuIRDhWaGBTCGgDfL8Ki%2FSf3V2zJ%2F59OonlnXdxTtLnuBqnp9chKx1ESOwh6zm30wDgM7YjvSnuf9OKY28Lv3uGWvGRnEahhILDclMrlv54GVEvaPQi6nQytlsvgHZvRCRsj5cf%2BdP8j&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230726T034137Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYNENMDBEOM7SRHPR%2F20230726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=8cc1168b1be4dbf159aee64e3253a29da366af1aeaf3c19857522303558140aa',
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
          "url('https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1806&q=80')",
      }}
    >
      <Head>
        <title>A Selection of My Projects</title>
        <meta
          name="description"
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
              className="project-container transition-transform duration-300 hover:scale-105 bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-bold mb-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-grey-900 hover:text-blue-400"
                >
                  {project.title}
                </a>
              </h3>
              {project.image && (
                <a
                  href={project.link2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto mb-4"
                  />
                </a>
              )}
              <p className="text-gray-700 mb-4">{project.description}</p>
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
