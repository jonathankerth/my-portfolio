import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import ProjectModal from '../components/ProjectModal.js'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'

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
    id: 12,
    title: 'ReX: AI Career Coach',
    description: `
      As a Software Developer at RadicalX, I am leveraging technologies such as OpenAI, Firebase, Node.js, React, Material UI, and Next.js to develop new components and improve existing features for ReX, an AI career coach. 
    `,
    link: 'https://github.com/radicalxdev',
    link2: 'https://lab.radicalai.app/',
    iframe: 'https://lab.radicalai.app/',
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
    link2: 'https://oregonized-freelance-site.vercel.app/',
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
    id: 14,
    title: 'SnippetSyncBackend',
    description: `
      An ASP.NET Core web API for managing code snippets, providing RESTful endpoints for CRUD operations and tag management. 
      Uses Entity Framework Core with a SQLite database and is containerized using Docker. Deployed on Google Cloud Platform using Google App Engine.
    `,
    link3: 'https://github.com/jonathankerth/SnippetSyncBackend',
    image: 'https://mypublicucket.s3.us-west-2.amazonaws.com/Snippet-UI.png',
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
  const [currentProject, setCurrentProject] = useState({})

  const openModal = (project) => {
    setCurrentProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-gradient-to-b from-[#2C3E50] via-[#34495E] to-[#212F3C] flex flex-col justify-center items-center px-4"
      >
        <Head>
          <title>Projects</title>
          <meta
            name="description"
            content="A showcase of my software engineering projects"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <motion.main
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center justify-center text-center mt-10 mb-20"
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold mb-8 mt-8 text-[#ECF0F1]"
          >
            <a
              href="https://github.com/jonathankerth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold mb-8 mt-8 text-[#ECF0F1]"
            >
              A Few of My Projects
            </a>
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-xl"
                style={{
                  backgroundColor: '#2D3748',
                  color: '#F0F4F8',
                }}
              >
                <a
                  href={project.link2 || project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-2xl font-bold mb-2 mt-4 px-5 text-white hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex justify-center items-center h-64 w-full overflow-hidden rounded-lg">
                    {project.title === 'Magic Wheel Component' ||
                    project.title === 'ReX: AI Career Coach' ? (
                      <iframe
                        src={project.iframe || project.link2}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '8px',
                        }}
                        title={project.title}
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className="relative h-full w-11/12">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="rounded-lg"
                          priority={
                            project.image ===
                              'https://mypublicucket.s3.us-west-2.amazonaws.com/weather-home.png' ||
                            project.image ===
                              'https://mypublicucket.s3.us-west-2.amazonaws.com/freelance+site.png'
                          }
                        />
                      </div>
                    )}
                  </div>
                </a>
                <div className="p-5 flex flex-col flex-grow">
                  <p className="flex-grow text-md mb-4 text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex justify-center gap-2 mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 ease-in-out"
                    >
                      GitHub
                    </a>
                    {project.link2 && (
                      <a
                        href={project.link2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 ease-in-out"
                      >
                        Live Site
                      </a>
                    )}
                    {project.title === 'Nicolas Cage Movie Repository' && (
                      <button
                        onClick={() => openModal(project)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 mr-2 rounded transition duration-300 ease-in-out"
                      >
                        View Case Study
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.main>
        {isModalOpen && (
          <ProjectModal project={currentProject} closeModal={closeModal} />
        )}
      </motion.div>
    </Layout>
  )
}
