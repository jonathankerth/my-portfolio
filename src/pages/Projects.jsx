import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import ProjectModal from '../components/ProjectModal.js'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTheme } from 'next-themes'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/About', label: 'About' },
  { href: '/Resume', label: 'Resume' },
  { href: '/Cats', label: 'Cat Memes' },
]

const projects = [
  {
    id: 1,
    title: 'Climate Cue',
    description:
      'A real-time weather application developed using Next.js and styled with Tailwind CSS. It fetches current weather data from the OpenWeather API and is deployed on Vercel for high availability.',
    link: 'https://github.com/jonathankerth/weather-app',
    link2: 'https://www.climatecue.com/',
    image: 'https://mypublicucket.s3.us-west-2.amazonaws.com/weather-home.png',
  },
  {
    id: 2,
    title: 'Oregonized Design Co.',
    description: `
      Developed an immersive parallax single-page application (SPA) for Oregonized Design Co. The SPA showcases dynamic, smooth scrolling interactions, enhancing user engagement.
      Engineered with Vue.js for reactive UI components, styled with Tailwind CSS for a responsive and modern aesthetic.
      Built with Vue.js and Tailwind CSS. Deployed on Vercel.
    `,
    link: 'https://github.com/jonathankerth/freelance-site',
    link2: 'https://freelance-site-kappa.vercel.app/',
    image:
      'https://mypublicucket.s3.us-west-2.amazonaws.com/freelance+site.png',
  },

  {
    id: 3,
    title: 'Discord & Spotify Song Saver',
    description:
      'A Python bot developed to capture and compile Spotify song links from Discord into an ever-updating playlist. This project showcases my skills with Discord and Spotify APIs and Python, enhancing our music-sharing experience while broadening my technical expertise.',
    link: 'https://github.com/jonathankerth/discord-spotify-song-saver',
    link3: 'https://github.com/jonathankerth/discord-spotify-song-saver',
    image:
      'https://mypublicucket.s3.us-west-2.amazonaws.com/spotifybot+endpoints.png',
  },
  {
    id: 4,
    title: 'Todo-List',
    description:
      'A real-time Todo List application developed using React and WebSockets. Authentication using Firebase. The application keeps tasks in sync across multiple devices. Styled using Bootstrap, the app offers a clean and intuitive user interface. The WebSocket server handles real-time updates, and the entire app is hosted on Vercel.',
    link: 'https://github.com/jonathankerth/todo-list',
    link2: 'https://todo-list-liard-seven.vercel.app/',
    image: 'https://mypublicucket.s3.us-west-2.amazonaws.com/todo-list.png',
  },
  {
    id: 5,
    title: 'KitchenGPT',
    description:
      'A cutting-edge kitchen assistant powered by GPT-3. The front-end is built with React, while the back-end utilizes Node.js and Express.js. The application is hosted on Heroku and Vercel for robust scalability.',
    link: 'https://github.com/jonathankerth/KitchenGPT',
    link2: 'https://kitchen-gpt.vercel.app/',
    image:
      'https://mypublicucket.s3.us-west-2.amazonaws.com/kitchen-gpt-home.png',
  },
  {
    id: 6,
    title: 'Meet App',
    description:
      'A serverless Progressive Web App (PWA) built using React and Node.js. Developed with a Test-Driven Development (TDD) approach, the app fetches upcoming tech events from Google Calendar API and features OAuth2 authentication.',
    link: 'https://github.com/jonathankerth/meet',
    link2: 'https://jonathankerth.github.io/meet/',
    image: 'https://mypublicucket.s3.us-west-2.amazonaws.com/meetHome.png',
  },

  {
    id: 7,
    title: 'Nicolas Cage Movie Repository',
    description:
      'A comprehensive repository dedicated to Nicolas Cage movies, built using React and styled with Bootstrap. The project is integrated with a custom-built RESTful API, NicCage API, to fetch and display movie data. Hosted on Netlify for seamless user experience.',
    link: 'https://github.com/jonathankerth/nicCage-client',
    link2: 'https://niccagecllient.netlify.app/',
    image: 'https://mypublicucket.s3.us-west-2.amazonaws.com/nicCageHome.png',
  },

  {
    id: 8,
    title: 'Magic Wheel Component',
    description:
      'An innovative wheel spinner component, created entirely with Tailwind CSS. Seamlessly integrated into a Next.js environment, this component showcases advanced CSS techniques, and animations. This is displayed in an Iframe while others are displayed from an AWS S3 bucket.',
    link: 'https://github.com/jonathankerth/magic-wheel',
    link2: 'https://magic-wheel-rosy.vercel.app/',
    iframe: 'https://magic-wheel-rosy.vercel.app/',
  },
  {
    id: 9,
    title: 'NicCage API',
    description:
      'A custom-built RESTful API that serves as a comprehensive database for Nicolas Cage movies. Developed using Node.js, Express.js, and MongoDB, the API is hosted on Heroku for easy access and high availability.',
    link: 'https://github.com/jonathankerth/Nicolas-Cage-API',
    link2: 'https://niccage.herokuapp.com/',
    image: 'https://mypublicucket.s3.us-west-2.amazonaws.com/nicCage-API.png',
  },
  {
    id: 10,
    title: 'Filament Scraper Python App',
    description:
      "A Python app built using Flask to scrape filament data from eSUN's website. The scraped data is exposed via an API endpoint. This is the only Python app in the portfolio, showcasing skills in web scraping and API creation.",
    link: 'https://github.com/jonathankerth/filament_scraper',
    link2: 'https://filament-scraper.herokuapp.com/',
    image:
      'https://mypublicucket.s3.us-west-2.amazonaws.com/PythonScrapper.png',
  },

  {
    id: 11,
    title: 'React Native Chat App',
    description:
      'A mobile-friendly chat application built using React Native and Expo. The app features a real-time chat interface, image sharing, and location sharing capabilities, all backed by Firebase for data storage and user authentication.',
    link: 'https://github.com/jonathankerth/chat-app',
    image:
      'https://mypublicucket.s3.us-west-2.amazonaws.com/small+chat+example.png',
    link3: 'https://github.com/jonathankerth/chat-app',
  },

  {
    id: 12,
    title: 'Pokedex',
    description:
      'An interactive Pokedex application that displays detailed information about various Pokemon. Built using vanilla JavaScript and fetches data from PokeAPI.co for an authentic experience.',
    link: 'https://github.com/jonathankerth/pokemon-js',
    link2: 'https://pokemon-js-omega.vercel.app/#',
    image: 'https://mypublicucket.s3.us-west-2.amazonaws.com/pokemon.png',
  },

  {
    id: 13,
    title: 'WebSocket Todo-List Backend',
    description:
      'The backend infrastructure for a Todo List application, built using Node.js and the WebSocket API to handle real-time task synchronization across multiple devices. Hosted on Heroku for high availability.',
    link: 'https://github.com/jonathankerth/todo-websocket',
    link2: 'https://get-it-done-6f00422d8b4b.herokuapp.com/',
    image: 'https://mypublicucket.s3.us-west-2.amazonaws.com/websocket.png',
  },
]

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(null)
  const { theme } = useTheme()
  const backgroundColorClasses = {
    light: 'bg-gradient-to-b from-blue-200 to-blue-400',
    dark: 'bg-gradient-to-b from-gray-800 via-dark-blue to-black', // Dark mode gradient background
  }
  const openModal = (project) => {
    setCurrentProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const backgroundColors = {
    light: 'bg-gradient-to-b from-[#D6EAF8] to-[#AED6F1]',
    dark: 'bg-gradient-to-b from-[#2C3E50] via-[#34495E] to-[#212F3C]',
  }

  const textBoxBackground = {
    light: 'bg-gradient-to-br from-[#EBF5FB] via-[#D6EAF8] to-[#AED6F1]',
    dark: 'bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#212F3C]',
  }

  const textColors = {
    light: 'text-[#154360]',
    dark: 'text-[#ECF0F1]',
  }

  return (
    <div
      className={`min-h-screen ${
        theme === 'dark' ? backgroundColors.dark : backgroundColors.light
      } flex flex-col justify-center items-center px-4`}
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

      <main className="flex flex-col items-center justify-center flex-1 py-12 mt-10">
        <div
          className={`${
            theme === 'dark' ? textBoxBackground.dark : textBoxBackground.light
          } rounded-lg p-4 mb-6 max-w-2xl`}
        >
          <h1
            className={`${
              theme === 'dark' ? textColors.dark : textColors.light
            } font-bold text-xl text-center max-w-full `}
          >
            A Few of My Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9 mb-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-container transition-transform duration-300 hover:scale-105 bg-white rounded-lg shadow-md flex flex-col p-6"
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
              {project.title === 'Magic Wheel Component' ? (
                <iframe
                  src={project.iframe}
                  className="object-top w-full h-full mb-4 flex-grow-0"
                ></iframe>
              ) : (
                project.image && (
                  <a
                    href={project.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-top w-full h-full mb-4 flex-grow-0"
                      width={500}
                      height={500}
                    />
                  </a>
                )
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
      </main>

      <Footer />
      {isModalOpen && (
        <ProjectModal project={currentProject} closeModal={closeModal} />
      )}
    </div>
  )
}
