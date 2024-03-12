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
        <main
          className={`flex flex-col items-center justify-center w-full mt-16 py-8 px-4 mb-12 text-center transition-transform duration-700 ease-in-out rounded-lg ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-[#2C3E50] via-[#34495E] to-[#212F3C]'
              : 'bg-gradient-to-br from-[#EBF5FB] via-[#D6EAF8] to-[#AED6F1]'
          } text-white mx-auto shadow-lg`}
          style={{ maxWidth: '75%' }}
        >
          <div className={`w-full ${textColors[theme]}`}>
            <p
              className={`font-bold mb-4 text-2xl ${
                theme === 'dark' ? textColors.dark : textColors.light
              }`}
            >
              Welcome, I&apos;m Jonathan Gallardo-Kerth
            </p>
            <div
              className={`mb-4 text-xl ${
                theme === 'dark' ? textColors.dark : textColors.light
              }`}
            >
              After 4 years of experience as a recruiter, I am now a software
              engineer with a passion for creating and building software that
              improves the lives of others. I am a full-stack developer with a
              focus on front-end technologies.
            </div>

            <ImageComponent imageUrl={imageUrl} />

            <div className="flex flex-wrap items-center mt-8 space-x-2 sm:space-x-4 justify-center mb-12">
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

            <div
              className={`${
                theme === 'dark' ? textColors.dark : textColors.light
              } pr-8 mb-4 text-xl`}
            >
              Looking to collaborate or connect? Please reach out through any of
              the sites above or by email, which you can find on my {''}
              <a
                href="https://www.jonathankerth.com/Resume"
                rel="noopener noreferrer"
                className="underline"
              >
                resume
              </a>
              . Thank you for stopping by my portfolio!
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
