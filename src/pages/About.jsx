import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import TechStack from '../components/TechStack'
import ImageCarousel from '../components/ImageCarousel'
import { motion } from 'framer-motion'

export default function About() {
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

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-gradient-to-b from-[#2C3E50] via-[#34495E] to-[#212F3C] flex flex-col justify-center items-center px-4"
      >
        <Head>
          <title>About Me</title>
          <meta
            name="description"
            content="Discover more about my experience and the technologies I utilize"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <motion.main
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center w-full flex-1 text-center mt-20 mb-20"
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold mb-8 text-white"
          >
            About Me
          </motion.h1>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg p-4 mb-6 max-w-2xl w-5/6 bg-[#2C3E50] text-white"
          >
            <p className="text-lg md:text-xl leading-6 text-center mb-4">
              Tea and a relentless curiosity keep me running. I live in
              Portland, Oregon, USA. I specialize in building web applications
              with JavaScript and Python technologies. I love to learn and try
              to challenge myself with an endless flow of personal projects.
            </p>
            <p className="text-lg md:text-xl leading-6 text-center mb-4">
              Outside of work, I'm a 3D printer hobbyist, husband, general nerd,
              home chef, pet parent, and traveler.
            </p>
          </motion.div>
          <TechStack techStack={techStack} />
        </motion.main>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl mx-auto mb-16 px-4"
        >
          <ImageCarousel />
        </motion.div>
      </motion.div>
    </Layout>
  )
}
