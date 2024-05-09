import Head from 'next/head'
import Script from 'next/script'
import { useTheme } from 'next-themes'
import {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaEnvelope,
  FaMedium,
} from 'react-icons/fa'
import { FaMeta, FaSquareXTwitter } from 'react-icons/fa6'

import Layout from '../components/Layout'
import ImageComponent from '../components/ImageComponent'

export default function Home() {
  const imageUrl =
    'https://mypublicucket.s3.us-west-2.amazonaws.com/DALL%C2%B7E+2023-08-18+15.22.22.png'
  const { theme } = useTheme()

  const textColors = {
    light: 'text-[#154360]',
    dark: 'text-[#ECF0F1]',
  }

  return (
    <Layout>
      <div
        className={`min-h-screen ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-[#2C3E50] via-[#34495E] to-[#212F3C]'
            : 'bg-gradient-to-b from-[#D6EAF8] to-[#AED6F1]'
        } flex flex-col justify-center items-center px-4`}
      >
        <Head>
          <title>Jonathan Kerth&apos;s Portfolio</title>
          <meta
            name="description"
            content="A portfolio showcasing my skills and projects as a software engineer"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1
          className={`text-4xl font-bold mb-8 ${
            theme === 'dark' ? 'text-[#ECF0F1]' : 'text-[#154360]'
          } mt-16`}
        >
          Welcome, I'm Jonathan Gallardo-Kerth
        </h1>
        <main
          className={`flex flex-col items-center justify-center w-full py-8 px-4 mb-12 text-center transition-transform duration-700 ease-in-out rounded-lg ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-[#2C3E50] via-[#34495E] to-[#212F3C]'
              : 'bg-gradient-to-br from-[#EBF5FB] via-[#D6EAF8] to-[#AED6F1]'
          } text-white mx-auto shadow-lg`}
          style={{ maxWidth: '75%' }}
        >
          <div className={`w-full ${textColors[theme]}`}>
            <div
              className={`mb-4 text-xl ${
                theme === 'dark' ? textColors.dark : textColors.light
              }`}
            >
              I live for the feeling of solving a really hard problem and
              proving myself wrong. <br></br> When I'm not exploring the world
              I'm in Portland, Oregon, USA.
            </div>

            <ImageComponent imageUrl={imageUrl} />

            <div className="flex flex-wrap items-center mt-8 space-x-2 sm:space-x-4 justify-center ">
              <a
                href="mailto:jonathanpkerth@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className={` ${
                  theme === 'dark' ? textColors.dark : textColors.light
                }  group`}
              >
                <FaEnvelope className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
              </a>
              <a
                href="https://www.linkedin.com/in/jonathankerth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={` ${
                  theme === 'dark' ? textColors.dark : textColors.light
                }  group`}
              >
                <FaLinkedin className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
              </a>
              <a
                href="https://github.com/jonathankerth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={` ${
                  theme === 'dark' ? textColors.dark : textColors.light
                }  group`}
              >
                <FaGithub className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
              </a>
              <a
                href="https://stackoverflow.com/users/21791075/jonathan-kerth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stack Overflow"
                className={` ${
                  theme === 'dark' ? textColors.dark : textColors.light
                }  group`}
              >
                <FaStackOverflow className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
              </a>
              <a
                href="https://twitter.com/jonathankerth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className={` ${
                  theme === 'dark' ? textColors.dark : textColors.light
                }  group`}
              >
                <FaSquareXTwitter className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
              </a>
              <a
                href="https://medium.com/@jonathanpkerth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
                className={` ${
                  theme === 'dark' ? textColors.dark : textColors.light
                }  group`}
              >
                <FaMedium className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
              </a>
              <a
                href="https://www.threads.net/@jonathankerth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                className={` ${
                  theme === 'dark' ? textColors.dark : textColors.light
                }  group`}
              >
                <FaMeta className="text-4xl hover:text-5xl transition-all duration-300 transform group-hover:scale-125" />
              </a>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
