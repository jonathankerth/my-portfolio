import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import { useTheme } from 'next-themes'
import TechStack from '../components/TechStack'
import ImageCarousel from '../components/ImageCarousel'

export default function About() {
  const { theme } = useTheme()

  const techStack = [
    { name: 'React', url: 'https://reactjs.org/' },
    { name: 'React Native', url: 'https://reactnative.dev/' },
    { name: 'Next.js', url: 'https://nextjs.org/' },
    { name: 'Node.js', url: 'https://nodejs.org/' },
    { name: 'Angular', url: 'https://angular.io/' },
    { name: 'Express', url: 'https://expressjs.com/' },
    { name: 'MongoDB', url: 'https://www.mongodb.com/' },
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
      <div
        className={`min-h-screen ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-[#2C3E50] via-[#34495E] to-[#212F3C]'
            : 'bg-gradient-to-b from-[#D6EAF8] to-[#AED6F1]'
        } flex flex-col justify-center items-center px-4`}
      >
        <Head>
          <title>About Me</title>
          <meta
            name="description"
            content="Discover more about my experience and the technologies I utilize"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center flex-1 py-12 mt-10">
          <h1
            className={`text-2xl font-bold mb-8 ${
              theme === 'dark' ? 'text-[#ECF0F1]' : 'text-[#154360]'
            }`}
          >
            About Me
          </h1>
          <div
            className={`${
              theme === 'dark'
                ? 'bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#212F3C]'
                : 'bg-gradient-to-br from-[#EBF5FB] via-[#D6EAF8] to-[#AED6F1]'
            } rounded-lg p-4 mb-6 max-w-2xl`}
          >
            <p
              className={`text-xl leading-6 text-center mb-4 ${
                theme === 'dark' ? 'text-[#ECF0F1]' : 'text-[#154360]'
              }`}
            >
              I'm a code-slinging coffee drinker living in Portland, Oregon.
              Fueled by coffee and a relentless curiosity, I specialize in
              building beautiful and functional web applications using
              JavaScript and Python. I find joy in every step of the development
              process, whether it's designing user-friendly interfaces, tackling
              intricate back-end challenges, or creating innovative scrolling
              features like those for Oregonized Design Co.
            </p>
            <p
              className={`text-xl leading-6 text-center mb-4 ${
                theme === 'dark' ? 'text-[#ECF0F1]' : 'text-[#154360]'
              }`}
            >
              Outside the world of code I'm a 3D printer hobbyist, general nerd,
              home chef, pet parent, and traveler.
            </p>
          </div>
          <TechStack techStack={techStack} theme={theme} />
        </main>
        <div className="w-full max-w-4xl mx-auto mb-16">
          <ImageCarousel />
        </div>
      </div>
    </Layout>
  )
}
