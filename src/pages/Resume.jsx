import Head from 'next/head'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'

export default function Resume() {
  const { theme } = useTheme()

  return (
    <div
      className={`min-h-screen ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#2C3E50] via-[#34495E] to-[#212F3C]'
          : 'bg-gradient-to-b from-[#D6EAF8] to-[#AED6F1]'
      } flex flex-col justify-center items-center px-4`}
    >
      <Head>
        <title>My Resume</title>
        <meta name="description" content="Download or view my resume here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center mt-20 mb-20">
        <div className="rounded-lg shadow-md w-5/6 mx-auto">
          <iframe
            src="https://jonathankerth.github.io/resume/"
            className="border rounded-lg border-transparent w-full"
            style={{ aspectRatio: '11/16', height: '1000px' }}
            title="Jonathan Kerth Resume"
          ></iframe>
        </div>
      </main>
    </div>
  )
}
