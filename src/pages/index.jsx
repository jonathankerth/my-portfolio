import Head from 'next/head'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SPALayout from '../components/SPALayout'
import ImageComponent from '../components/ImageComponent'
import ImageCarousel from '../components/ImageCarousel'
import Section from '../components/Section'
import SectionDivider from '../components/SectionDivider'
import AnimatedText from '../components/AnimatedText'
import ProjectCard from '../components/ProjectCard'
import {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaEnvelope,
  FaMedium,
} from 'react-icons/fa'
import { FaMeta, FaSquareXTwitter } from 'react-icons/fa6'

export default function Home() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedFileName, setSelectedFileName] = useState(null)
  const [uploadMessage, setUploadMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const imageUrl =
    'https://mypublicucket.s3.us-west-2.amazonaws.com/DALL%C2%B7E+2023-08-18+15.22.22.png'

  const favoriteMemes = [
    'https://memedisplay.s3.us-west-2.amazonaws.com/cat+and+kid.jpeg',
    'https://memedisplay.s3.us-west-2.amazonaws.com/cat+philosophy.jpeg',
    'https://memedisplay.s3.us-west-2.amazonaws.com/photogenic+cat.jpeg',
    'https://memedisplay.s3.us-west-2.amazonaws.com/pizza+cat.jpeg',
    'https://memedisplay.s3.us-west-2.amazonaws.com/code+cat.png',
  ]

  const projects = [
    {
      id: 1,
      title: 'Climate Cue',
      description:
        'A real-time weather application developed using Next.js and styled with Tailwind CSS. It fetches current weather data from the OpenWeather API and is deployed on Vercel for high availability.',
      link: 'https://github.com/jonathankerth/weather-app',
      link2: 'https://weather-app-woad-two.vercel.app/',
      image:
        'https://mypublicucket.s3.us-west-2.amazonaws.com/weather-home.png',
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
        'An innovative wheel spinner component, created entirely with Tailwind CSS. Seamlessly integrated into a Next.js environment, this component showcases advanced CSS techniques, and animations.',
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
  ]

  const techStack = [
    { name: 'React', url: 'https://reactjs.org/' },
    { name: 'React Native', url: 'https://reactnative.dev/' },
    { name: 'Next.js', url: 'https://nextjs.org/' },
    { name: 'Node.js', url: 'https://nodejs.org/' },
    { name: 'Angular', url: 'https://angular.io/' },
    { name: 'Express', url: 'https://expressjs.com/' },
    { name: 'MongoDB', url: 'https://www.mongodb.com/' },
    { name: 'Material UI', url: 'https://mui.com/' },
    { name: 'Bootstrap', url: 'https://getbootstrap.com/' },
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
    { name: 'Redux', url: 'https://redux.js.org/' },
    { name: 'Jest', url: 'https://jestjs.io/' },
    { name: 'Cucumber', url: 'https://cucumber.io/' },
    {
      name: 'Progressive Web Apps (PWAs)',
      url: 'https://web.dev/progressive-web-apps/',
    },
    { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'SCSS', url: 'https://sass-lang.com/' },
    {
      name: 'JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    { name: 'Figma', url: 'https://www.figma.com/' },
    {
      name: 'Google Analytics',
      url: 'https://developers.google.com/analytics',
    },
    { name: 'Firebase', url: 'https://firebase.google.com/' },
    { name: 'Python', url: 'https://www.python.org/' },
    { name: 'JSON', url: 'https://www.json.org/json-en.html' },
    { name: 'Heroku', url: 'https://www.heroku.com/' },
  ]

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
      setSelectedFileName(file.name)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const file = selectedFile
    if (!file) {
      setIsLoading(false)
      return
    }

    const { url } = await fetch(`/api/s3Url?fileType=${file.type}`).then(
      (res) => res.json()
    )

    await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': file.type,
      },
      body: file,
    })

    const imageUrl = url.split('?')[0]
    setUploadedImageUrl(imageUrl)
    setUploadMessage(
      'Your file has been uploaded, check back to see if your meme is posted!'
    )
    setIsLoading(false)
  }

  const SocialLink = ({ href, icon: Icon, label }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="text-2xl text-white group-hover:text-blue-300 transition-colors duration-300" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.a>
  )

  return (
    <SPALayout>
      <Head>
        <title>Jonathan Kerth's Portfolio</title>
        <meta
          name="description"
          content="A portfolio showcasing my skills and projects as a software engineer"
        />
        <link rel="icon" href={imageUrl} />
        <link rel="apple-touch-icon" href={imageUrl} />
        <meta name="theme-color" content="#2563eb" />
      </Head>

      {/* Hero Section */}
      <Section id="home" variant="hero">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-8"
        >
          <AnimatedText
            text="Welcome, I'm Jonathan Gallardo-Kerth"
            className="text-5xl md:text-6xl font-bold mb-8 text-white bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Full-Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <ImageComponent imageUrl={imageUrl} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
          >
            <SocialLink
              href="mailto:jonathanpkerth@gmail.com"
              icon={FaEnvelope}
              label="Email"
            />
            <SocialLink
              href="https://www.linkedin.com/in/jonathankerth"
              icon={FaLinkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="https://github.com/jonathankerth"
              icon={FaGithub}
              label="GitHub"
            />
            <SocialLink
              href="https://stackoverflow.com/users/21791075/jonathan-kerth"
              icon={FaStackOverflow}
              label="Stack Overflow"
            />
            <SocialLink
              href="https://twitter.com/jonathankerth"
              icon={FaSquareXTwitter}
              label="Twitter"
            />
            <SocialLink
              href="https://medium.com/@jonathanpkerth"
              icon={FaMedium}
              label="Medium"
            />
            <SocialLink
              href="https://www.threads.net/@jonathankerth"
              icon={FaMeta}
              label="Threads"
            />
          </motion.div>
        </motion.div>
      </Section>

      <SectionDivider variant="wave" />

      {/* About Section */}
      <Section id="about">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Tea and a relentless curiosity keep me running. I live in
                  Portland, Oregon, USA. I specialize in building web
                  applications with JavaScript and Python technologies. I love
                  to learn and try to challenge myself with an endless flow of
                  personal projects.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Outside of work, I'm a 3D printer hobbyist, husband, general
                  nerd, home chef, pet parent, and traveler.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ImageCarousel />
            </motion.div>
          </div>
        </motion.div>
      </Section>

      <SectionDivider variant="wave" />

      {/* Projects Section */}
      <Section id="projects" variant="fullWidth">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <p className="text-lg text-gray-300 leading-relaxed">
                I love building things. I'm always working on something new and
                looking to collaborate so if you want to fork any of these repos
                or work on something together please reach out!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </Section>

      <SectionDivider variant="wave" />

      {/* Tech Stack Section */}
      <Section id="tech-stack" variant="compact">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {techStack.map((tech, index) => (
              <motion.a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15"
              >
                <div className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors duration-300">
                  {tech.name}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Section>

      <SectionDivider variant="wave" />

      {/* Cats Section */}
      <Section id="cats" variant="compact">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
            Cat Memes & AWS
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I love cats, memes, and cat memes. I also wanted to show my
              knowledge of AWS S3 buckets and IAM user policies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Upload a cat meme to my S3 bucket and I'll display my favorites!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <label
                  htmlFor="imageInput"
                  className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25 border border-blue-400/20"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    {selectedFileName || 'Select Image'}
                  </span>
                  <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                {selectedFile && (
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 border border-emerald-400/20"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Uploading...
                      </span>
                    ) : (
                      'Upload'
                    )}
                  </button>
                )}
              </div>
              {uploadMessage && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg font-semibold text-green-400 bg-green-400/10 rounded-xl p-4 border border-green-400/20"
                >
                  {uploadMessage}
                </motion.p>
              )}
            </form>
            {uploadedImageUrl && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-8"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 inline-block">
                  <Image
                    src={uploadedImageUrl}
                    alt="Uploaded Image"
                    width={300}
                    height={300}
                    className="rounded-xl shadow-lg"
                    style={{
                      objectFit: 'cover',
                      width: 'auto',
                      height: 'auto',
                    }}
                  />
                </div>
              </motion.div>
            )}
          </div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {favoriteMemes.map((meme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20"
              >
                <Image
                  src={meme}
                  alt={`Cat meme ${index + 1}`}
                  width={300}
                  height={300}
                  className="rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ objectFit: 'cover', width: 'auto', height: 'auto' }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      <SectionDivider variant="wave" />

      {/* Resume Section */}
      <Section id="resume" variant="fullWidth">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl">
            <iframe
              src="https://jonathankerth.github.io/resume/"
              className="border-0 rounded-xl w-full shadow-lg"
              style={{ aspectRatio: '11/16', height: '1000px' }}
              title="Jonathan Kerth Resume"
            />
          </div>
        </motion.div>
      </Section>
    </SPALayout>
  )
}
