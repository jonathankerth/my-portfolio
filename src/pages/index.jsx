import Head from 'next/head'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SPALayout from '../components/SPALayout'
import ImageComponent from '../components/ImageComponent'
import ImageCarousel from '../components/ImageCarousel'
import Section from '../components/Section'
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
      className="text-[#ECF0F1] group"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon className="text-4xl transition-all duration-300" />
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
      </Head>

      {/* Hero Section */}
      <Section id="home">
        <AnimatedText
          text="Welcome, I'm Jonathan Gallardo-Kerth"
          className="text-4xl font-bold mb-8 text-[#ECF0F1]"
        />
        <ImageComponent imageUrl={imageUrl} />
        <motion.div className="flex flex-wrap items-center mt-8 space-x-4 justify-center">
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
      </Section>

      {/* About Section */}
      <Section id="about">
        <motion.div className="rounded-lg p-4 mb-6 max-w-2xl w-5/6 bg-white/10 backdrop-blur-md text-white shadow-lg mx-auto">
          <p className="text-lg md:text-xl leading-6 text-center mb-4">
            Tea and a relentless curiosity keep me running. I live in Portland,
            Oregon, USA. I specialize in building web applications with
            JavaScript and Python technologies. I love to learn and try to
            challenge myself with an endless flow of personal projects.
          </p>
          <p className="text-lg md:text-xl leading-6 text-center mb-4">
            Outside of work, I'm a 3D printer hobbyist, husband, general nerd,
            home chef, pet parent, and traveler.
          </p>
        </motion.div>
        <ImageCarousel />
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <motion.div className="rounded-lg p-4 mb-6 max-w-2xl w-5/6 bg-white/10 backdrop-blur-md text-white shadow-lg mx-auto">
          <p className="text-lg md:text-xl leading-6 text-center mb-4">
            I love building things. I'm always working on something new and
            looking to colaborate so if you want to fork any of these repos or
            work on something together please reach out!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Cats Section */}
      <Section id="cats">
        <div className="flex flex-col items-center justify-center w-full py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg p-8 mb-8 max-w-4xl w-5/6 bg-white/10 backdrop-blur-md text-white shadow-lg mx-auto text-center"
          >
            <p className="text-lg md:text-xl leading-6 text-center mb-4">
              I love cats, memes, and cat memes. I also wanted to show my
              knowledge of AWS S3 buckets and IAM user policies.
            </p>
            <p className="text-lg md:text-xl leading-6 text-center mb-4">
              Upload a cat meme to my S3 bucket and I'll display my favorites!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="flex justify-center items-center gap-4">
                <label
                  htmlFor="imageInput"
                  className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
                >
                  <span>{selectedFileName || 'Select Image'}</span>
                  <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 shadow transition-colors duration-200 ease-in-out"
                >
                  {isLoading ? 'Uploading...' : 'Upload'}
                </button>
              </div>
              {uploadMessage && (
                <p className="text-md font-semibold mt-4 text-white">
                  {uploadMessage}
                </p>
              )}
            </form>
            {uploadedImageUrl && (
              <div className="text-center mt-4">
                <Image
                  src={uploadedImageUrl}
                  alt="Uploaded Image"
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                  style={{ objectFit: 'cover', width: 'auto', height: 'auto' }}
                />
              </div>
            )}
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          >
            {favoriteMemes.map((meme, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={meme}
                  alt={`Cat meme ${index + 1}`}
                  width={300}
                  height={300}
                  className="rounded-lg"
                  style={{ objectFit: 'cover', width: 'auto', height: 'auto' }}
                  priority
                />
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Resume Section */}
      <Section id="resume">
        <iframe
          src="https://jonathankerth.github.io/resume/"
          className="border rounded-lg border-transparent w-full"
          style={{ aspectRatio: '11/16', height: '1000px' }}
          title="Jonathan Kerth Resume"
        />
      </Section>
    </SPALayout>
  )
}
