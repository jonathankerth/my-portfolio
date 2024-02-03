import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTheme } from 'next-themes'

const ImageCarousel = () => {
  const images = [
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/IMG_6217.jpeg',
      alt: 'Image 1',
    },
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/IMG_6050.jpeg',
      alt: 'Image 2',
    },
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/IMG_4902.jpeg',
      alt: 'Image 3',
    },
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/IMG_4068.jpeg',
      alt: 'Image 4',
    },
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/sid+and+J+selfie.jpeg',
      alt: 'Image 5',
    },
  ]

  const carouselProps = {
    infiniteLoop: true,
    showStatus: false,
    showIndicators: true,
    showThumbs: false,
    autoPlay: true,
    interval: 3000,
    stopOnHover: false,
    transitionTime: 500,
  }

  return (
    <div className="flex justify-center items-center w-full h-full p-4 rounded-lg bg-white bg-opacity-40">
      <Carousel {...carouselProps}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="relative rounded-lg shadow-md max-h-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={375}
                className="rounded-lg"
                objectFit="contain"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

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
            I&apos;m a dedicated and passionate software engineer specializing
            in building scalable, and efficient web applications. Using
            cutting-edge technologies, I love tackling new challenges and
            continuous learning.
          </p>
          <p
            className={`text-xl leading-6 text-center ${
              theme === 'dark' ? 'text-[#ECF0F1]' : 'text-[#154360]'
            }`}
          >
            Outside the world of code, I&apos;m a food enthusiast,
            self-proclaimed nerd, home chef, pet parent, and I&apos;ve been to 5
            out of the 7 continents. Feel free to connect for any opportunities
            or questions about my projects. Thanks for dropping by!
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center w-full">
          {techStack.map((tech, index) => (
            <a
              key={index}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {tech.name}
            </a>
          ))}
        </div>
      </main>
      <div className="w-full max-w-4xl mx-auto mb-12">
        <ImageCarousel />
      </div>
      <Footer />
    </div>
  )
}
