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
          <a
            href="https://mypublicucket.s3.us-west-2.amazonaws.com/Jonathan's+Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md mb-6 text-dark-gray bg-soft-blue hover:bg-medium-blue focus:outline-none focus:border-medium-blue focus:ring focus:ring-soft-blue active:bg-medium-blue transition ease-in-out duration-150"
          >
            <svg
              className="mr-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 012-2h8a2 2 0 012 2v3h1a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zm0 2v12h12V8h-2V5H4zm8-1V3l4 4h-3a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Download My Resume
          </a>
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
