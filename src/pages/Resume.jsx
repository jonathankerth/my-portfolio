import Head from 'next/head'
import { useTheme } from 'next-themes'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Resume() {
  const { theme, setTheme } = useTheme()
  const backgroundColorClasses = {
    light: 'bg-gradient-to-b from-blue-200 to-blue-400',
    dark: 'bg-gradient-to-b from-gray-800 via-dark-blue to-black',
  }

  return (
    <div
      className={`min-h-screen ${
        theme === 'dark'
          ? backgroundColorClasses.dark
          : backgroundColorClasses.light
      } text-white flex flex-col justify-center items-center px-4`}
    >
      <Head>
        <title>My Resume</title>
        <meta name="description" content="Download or view my resume here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center mt-20 mb-20">
        <div className="rounded-lg shadow-md">
          <iframe
            src="https://jonathankerth.github.io/resume/"
            className="border rounded-lg border-black w-full"
            style={{ aspectRatio: '11/16', height: 'calc(100vw * 11 / 16)' }}
            title="Jonathan Kerth Resume"
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  )
}
