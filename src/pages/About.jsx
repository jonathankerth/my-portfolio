import Head from 'next/head'
import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useTheme } from 'next-themes'
import TechStack from '../components/TechStack'
import ImageCarousel from '../components/ImageCarousel'

export default function About() {
  const { theme } = useTheme()

  useEffect(() => {
    console.log(`Current theme is: ${theme}`)
  }, [theme])

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
    { name: 'Atatus', url: 'https://www.atatus.com/' },
    { name: 'Jest', url: 'https://jestjs.io/' },
    { name: 'Cucumber', url: 'https://cucumber.io/' },
    {
      name: 'Progressive Web Apps (PWAs)',
      url: 'https://web.dev/progressive-web-apps/',
    },
    { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    {
      name: 'JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    { name: 'SCSS', url: 'https://sass-lang.com/' },
    {
      name: 'Google Analytics',
      url: 'https://developers.google.com/analytics',
    },
    { name: 'Firebase', url: 'https://firebase.google.com/' },
    { name: 'Python', url: 'https://www.python.org/' },
    { name: 'Flask', url: 'https://flask.palletsprojects.com/' },
    {
      name: 'Beautiful Soup',
      url: 'https://www.crummy.com/software/BeautifulSoup/',
    },
    { name: 'Requests', url: 'https://docs.python-requests.org/en/latest/' },
    { name: 'JSON', url: 'https://www.json.org/json-en.html' },
    { name: 'Heroku', url: 'https://www.heroku.com/' },
  ]

  return (
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
          content="Discover more about my experience and the diverse technologies I utilize"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 py-12 mt-10">
        <div
          className={`${
            theme === 'dark'
              ? 'bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#212F3C]'
              : 'bg-gradient-to-br from-[#EBF5FB] via-[#D6EAF8] to-[#AED6F1]'
          } rounded-lg p-4 mb-6 max-w-2xl`}
        >
          <h1
            className={`font-bold text-xl leading-6 text-center mb-4 ${
              theme === 'dark' ? 'text-[#ECF0F1]' : 'text-[#154360]'
            }`}
          >
            About Me
          </h1>
          <p
            className={`text-xl leading-6 text-center mb-4 ${
              theme === 'dark' ? 'text-[#ECF0F1]' : 'text-[#154360]'
            }`}
          >
            I'm a dedicated and passionate software engineer specializing in
            building scalable, and efficient web applications. I love tackling
            new challenges by using the best technology for the project. I also
            belive in the importance of continuous learning in all aspects of
            life but especially software developement.
          </p>
          <p
            className={`text-xl leading-6 text-center ${
              theme === 'dark' ? 'text-[#ECF0F1]' : 'text-[#154360]'
            }`}
          >
            Outside the world of code, I'm a food enthusiast, self-proclaimed
            nerd, home chef, pet parent, and I've been to 5 out of the 7
            continents. Feel free to connect for any opportunities or questions
            about my projects. Thanks for dropping by!
          </p>
        </div>
        <TechStack techStack={techStack} theme={theme} />
      </main>
      <div className="w-full max-w-4xl mx-auto mb-16">
        <ImageCarousel />
      </div>
    </div>
  )
}
