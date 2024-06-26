import Head from 'next/head'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-gradient-to-b from-[#2C3E50] via-[#34495E] to-[#212F3C] flex flex-col justify-center items-center px-4"
      >
        <Head>
          <title>My Resume</title>
          <meta name="description" content="Download or view my resume here." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <motion.main
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center w-full flex-1 text-center mt-20 mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg shadow-md w-5/6 mx-auto"
          >
            <iframe
              src="https://jonathankerth.github.io/resume/"
              className="border rounded-lg border-transparent w-full"
              style={{ aspectRatio: '11/16', height: '1000px' }}
              title="Jonathan Kerth Resume"
            ></iframe>
          </motion.div>
        </motion.main>
      </motion.div>
    </Layout>
  )
}
