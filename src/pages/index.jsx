import Head from 'next/head'
import {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaEnvelope,
  FaMedium,
} from 'react-icons/fa'
import { FaMeta, FaSquareXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import ImageComponent from '../components/ImageComponent'

export default function Home() {
  const imageUrl =
    'https://mypublicucket.s3.us-west-2.amazonaws.com/DALL%C2%B7E+2023-08-18+15.22.22.png'

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-gradient-to-b from-[#2C3E50] via-[#34495E] to-[#212F3C] flex flex-col justify-center items-center px-4"
      >
        <Head>
          <title>Jonathan Kerth&apos;s Portfolio</title>
          <meta
            name="description"
            content="A portfolio showcasing my skills and projects as a software engineer"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-[#ECF0F1] mt-16"
        >
          Welcome, I'm Jonathan Gallardo-Kerth
        </motion.h1>
        <motion.main
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center w-full py-8 px-4 mb-12 text-center transition-transform duration-700 ease-in-out rounded-lg bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#212F3C] text-white mx-auto shadow-lg"
          style={{ maxWidth: '75%' }}
        >
          <div className="w-full text-[#ECF0F1]">
            <div className="mb-4 text-xl text-[#ECF0F1]">
              I love to solve complex problems with software and proving myself
              wrong. <br></br> When I'm not trying to see the world I'm in
              Portland, Oregon, USA.
            </div>

            <ImageComponent imageUrl={imageUrl} />

            <div className="flex flex-wrap items-center mt-8 space-x-2 sm:space-x-4 justify-center ">
              <a
                href="mailto:jonathanpkerth@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="text-[#ECF0F1] group"
              >
                <FaEnvelope className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
              </a>
              <a
                href="https://www.linkedin.com/in/jonathankerth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#ECF0F1] group"
              >
                <FaLinkedin className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
              </a>
              <a
                href="https://github.com/jonathankerth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#ECF0F1] group"
              >
                <FaGithub className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
              </a>
              <a
                href="https://stackoverflow.com/users/21791075/jonathan-kerth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stack Overflow"
                className="text-[#ECF0F1] group"
              >
                <FaStackOverflow className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
              </a>
              <a
                href="https://twitter.com/jonathankerth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-[#ECF0F1] group"
              >
                <FaSquareXTwitter className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
              </a>
              <a
                href="https://medium.com/@jonathanpkerth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
                className="text-[#ECF0F1] group"
              >
                <FaMedium className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
              </a>
              <a
                href="https://www.threads.net/@jonathankerth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                className="text-[#ECF0F1] group"
              >
                <FaMeta className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
              </a>
            </div>
          </div>
        </motion.main>
      </motion.div>
    </Layout>
  )
}
