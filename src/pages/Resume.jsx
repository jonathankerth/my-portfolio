import Head from 'next/head'
import { useTheme } from 'next-themes'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Resume() {
  const { theme, setTheme } = useTheme()
  const backgroundColor = {
    light: 'bg-gradient-to-b from-[#D3E4CD] to-[#ADC2A9]',
    dark: 'bg-gradient-to-b from-[#35524A] via-[#2E4057] to-[#163172]',
  }

  return (
    <div
      className={`min-h-screen ${
        theme === 'dark' ? backgroundColor.dark : backgroundColor.light
      } text-white flex flex-col justify-center items-center px-4`}
    >
      <Head>
        <title>My Resume</title>
        <meta name="description" content="Download or view my resume here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center mt-20 mb-20">
        <div className="rounded-lg shadow-md w-3/4 mx-auto max-w-4xl">
          <iframe
            src="https://jonathankerth.github.io/resume/"
            className="border rounded-lg border-black w-full"
            style={{ aspectRatio: '11/16', height: '1000px' }}
            title="Jonathan Kerth Resume"
          ></iframe>
        </div>
      </main>

      <Footer />
    </div>
  )
}
