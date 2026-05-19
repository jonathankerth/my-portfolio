import Head from 'next/head'
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import SPALayout from '../components/SPALayout'
import Section from '../components/Section'
import SectionDivider from '../components/SectionDivider'
import AnimatedText from '../components/AnimatedText'
import ProjectCard from '../components/ProjectCard'
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
} from 'react-icons/fa'
import { FaMeta, FaSquareXTwitter } from 'react-icons/fa6'

const ImageCarousel = dynamic(() => import('../components/ImageCarousel'), {
  ssr: false,
  loading: () => (
    <div
      className="w-full bg-white/40 rounded-lg border border-black/10"
      style={{ aspectRatio: '4 / 3' }}
      aria-label="Loading photo carousel"
      role="status"
    />
  ),
})

export default function Home() {
  const projectsContainerRef = useRef(null)
  const railProgressRef = useRef(null)

  const scrollProjects = (direction) => {
    const container = projectsContainerRef.current
    if (!container) return
    const cardWidth = 380 + 32
    const newScroll = container.scrollLeft + direction * cardWidth
    container.scrollTo({ left: newScroll, behavior: 'smooth' })
  }

  useEffect(() => {
    const container = projectsContainerRef.current
    const bar = railProgressRef.current
    if (!container || !bar) return
    let rafId = null
    const update = () => {
      rafId = null
      const max = container.scrollWidth - container.clientWidth
      const ratio = max > 0 ? container.scrollLeft / max : 0
      bar.style.transform = `scaleX(${Math.max(0.08, ratio)})`
    }
    const schedule = () => {
      if (rafId != null) return
      rafId = requestAnimationFrame(update)
    }
    update()
    container.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      container.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (rafId != null) cancelAnimationFrame(rafId)
    }
  }, [])

  const catIconPath = '/white_cat_favicon.png'

  const projects = [
    {
      id: 15,
      title: 'Toffee Links',
      description:
        'An Everton F.C. transfer rumour tracker that ingests tweets from a curated reporter list, enriches each player with SportMonks v3 data (bio, season stats, preferred foot), and surfaces an admin approval queue before rumours go public. Built with Next.js 15 (App Router), TypeScript, Tailwind, Firebase/Firestore, and Stripe, with a Python scanner backend and Anthropic-powered enrichment fallbacks. Deployed on Vercel.',
      link2: 'https://www.toffeelinks.app/',
      iframe: 'https://www.toffeelinks.app/',
    },
    {
      id: 0,
      title: 'The Name Nursery',
      description:
        'An AI-powered baby name discovery platform built with Next.js 15 and TypeScript. Features Firebase authentication, Google Cloud integration, openAI API, Google AdSense, and comprehensive SEO optimization with structured data markup. Includes a mobile-first wheel-based interface for exploring culturally diverse names with personalized recommendations based on origins, personality traits, and inspirational themes.',
      link: 'https://github.com/jonathankerth/the-name-nursery',
      link2: 'https://www.thenamenursery.com/',
      iframe: 'https://www.thenamenursery.com/',
    },
    {
      id: 1,
      title: 'Climate Cue',
      description:
        'A real-time weather application developed using Next.js and styled with Tailwind CSS. It fetches current weather data from the OpenWeather API and is deployed on Vercel for high availability.',
      link: 'https://github.com/jonathankerth/weather-app',
      link2: 'https://weather-app-woad-two.vercel.app/',
      image:
        'https://mypublicucket.s3.us-west-2.amazonaws.com/weather-home.png',
    },
    {
      id: 2,
      title: 'Oregonized Design Co.',
      description: `
        Developed an immersive parallax single-page application (SPA) for Oregonized Design Co. The SPA showcases dynamic, smooth scrolling interactions, enhancing user engagement.
        Engineered with Vue.js for reactive UI components, styled with Tailwind CSS for a responsive and modern aesthetic.
        Built with Vue.js and Tailwind CSS. Deployed on Vercel.
      `,
      link: 'https://github.com/jonathankerth/freelance-site',
      link2: 'https://oregonized-freelance-site.vercel.app/',
      image:
        'https://mypublicucket.s3.us-west-2.amazonaws.com/freelance+site.png',
    },
    {
      id: 3,
      title: 'Discord & Spotify Song Saver',
      description:
        'A Python bot developed to capture and compile Spotify song links from Discord into an ever-updating playlist. This project showcases my skills with Discord and Spotify APIs and Python, enhancing our music-sharing experience while broadening my technical expertise.',
      link: 'https://github.com/jonathankerth/discord-spotify-song-saver',
      link3: 'https://github.com/jonathankerth/discord-spotify-song-saver',
      image:
        'https://mypublicucket.s3.us-west-2.amazonaws.com/spotifybot+endpoints.png',
    },
    {
      id: 14,
      title: 'SnippetSyncBackend',
      description: `
        An ASP.NET Core web API for managing code snippets, providing RESTful endpoints for CRUD operations and tag management. 
        Uses Entity Framework Core with a SQLite database and is containerized using Docker. Deployed on Google Cloud Platform using Google App Engine.
      `,
      link3: 'https://github.com/jonathankerth/SnippetSyncBackend',
      image: 'https://mypublicucket.s3.us-west-2.amazonaws.com/Snippet-UI.png',
    },
  ]

  const techStackSections = [
    {
      title: 'Frontend',
      items: [
        { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
        {
          name: 'JavaScript',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        { name: 'React', url: 'https://react.dev/' },
        { name: 'Next.js', url: 'https://nextjs.org/' },
        { name: 'Angular', url: 'https://angular.io/' },
        { name: 'React Native', url: 'https://reactnative.dev/' },
        { name: 'Vite', url: 'https://vitejs.dev/' },
        { name: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
        { name: 'Material UI', url: 'https://mui.com/' },
        { name: 'Figma', url: 'https://www.figma.com/' },
      ],
    },
    {
      title: 'Backend & APIs',
      items: [
        { name: 'Node.js', url: 'https://nodejs.org/' },
        { name: 'Express', url: 'https://expressjs.com/' },
        { name: 'Python', url: 'https://www.python.org/' },
        { name: 'Flask', url: 'https://flask.palletsprojects.com/' },
        { name: 'Firebase', url: 'https://firebase.google.com/' },
        { name: 'OAuth', url: 'https://oauth.net/2/' },
        { name: 'Stripe', url: 'https://stripe.com/docs' },
        {
          name: 'Spotify API',
          url: 'https://developer.spotify.com/documentation/web-api',
        },
        {
          name: 'Discord API',
          url: 'https://discord.com/developers/docs/intro',
        },
      ],
    },
    {
      title: 'Cloud & Data',
      items: [
        { name: 'AWS', url: 'https://aws.amazon.com/' },
        { name: 'GCP', url: 'https://cloud.google.com/' },
        { name: 'AWS Lambda', url: 'https://aws.amazon.com/lambda/' },
        { name: 'API Gateway', url: 'https://aws.amazon.com/api-gateway/' },
        { name: 'S3', url: 'https://aws.amazon.com/s3/' },
        { name: 'DynamoDB', url: 'https://aws.amazon.com/dynamodb/' },
        { name: 'RDS', url: 'https://aws.amazon.com/rds/' },
        {
          name: 'SQL',
          url: 'https://www.postgresql.org/docs/current/sql.html',
        },
        { name: 'MongoDB', url: 'https://www.mongodb.com/' },
        { name: 'Snowflake', url: 'https://www.snowflake.com/' },
        { name: 'Docker', url: 'https://www.docker.com/' },
        { name: 'Kubernetes', url: 'https://kubernetes.io/' },
        { name: 'Terraform', url: 'https://www.terraform.io/' },
      ],
    },
    {
      title: 'DevOps & Tooling',
      items: [
        { name: 'Vercel', url: 'https://vercel.com/' },
        { name: 'Jenkins', url: 'https://www.jenkins.io/' },
        { name: 'Jest', url: 'https://jestjs.io/' },
        { name: 'Cucumber', url: 'https://cucumber.io/' },
        { name: 'Jira', url: 'https://www.atlassian.com/software/jira' },
      ],
    },
  ]

  const SocialLink = ({ href, icon: Icon, label }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative p-3 rounded-full bg-white/70 dark:bg-white/[0.06] backdrop-blur-sm border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="text-2xl text-black/80 dark:text-white/80 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" aria-hidden="true" />
      <div className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
    </motion.a>
  )

  return (
    <SPALayout>
      <Head>
        <title>Jonathan Gallardo-Kerth | Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Full-Stack Developer based in Portland, Oregon. Specializing in React, Next.js, Python, and AWS. View my projects, tech stack, and resume."
        />
        <link rel="icon" href={catIconPath} />
        <link rel="apple-touch-icon" href={catIconPath} />
        <meta name="theme-color" content="#000000" />

        {/* SEO: Canonical URL */}
        <link rel="canonical" href="https://jonathankerth.com" />

        {/* SEO: Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jonathan Gallardo-Kerth | Full-Stack Developer" />
        <meta property="og:description" content="Full-Stack Developer based in Portland, Oregon. Specializing in React, Next.js, Python, and AWS." />
        <meta property="og:url" content="https://jonathankerth.com" />
        <meta property="og:site_name" content="Jonathan Gallardo-Kerth Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* SEO: Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jonathan Gallardo-Kerth | Full-Stack Developer" />
        <meta name="twitter:description" content="Full-Stack Developer based in Portland, Oregon. Specializing in React, Next.js, Python, and AWS." />
        <meta name="twitter:creator" content="@jonathankerth" />

        {/* SEO: Additional meta */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Jonathan Gallardo-Kerth" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Jonathan Gallardo-Kerth',
              url: 'https://jonathankerth.com',
              jobTitle: 'Full-Stack Developer',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Portland',
                addressRegion: 'OR',
                addressCountry: 'US',
              },
              sameAs: [
                'https://www.linkedin.com/in/jonathankerth',
                'https://github.com/jonathankerth',
                'https://twitter.com/jonathankerth',
              ],
            }),
          }}
        />
      </Head>

      {/* Hero Section */}
      <Section id="home" variant="hero">
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h1 className="sr-only">Jonathan Gallardo-Kerth - Full-Stack Developer Portfolio</h1>
          <AnimatedText
            text="Welcome, I'm Jonathan Gallardo-Kerth"
            className="text-5xl md:text-6xl font-bold mb-8 text-black dark:text-white"
          />
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-black/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Full-Stack Builder
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-sm md:text-base text-black/60 dark:text-white/60 max-w-3xl mx-auto tracking-wide"
          >
            Portland, Oregon, USA
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
          >
            <SocialLink
              href="mailto:jonathanpkerth@gmail.com"
              icon={FaEnvelope}
              label="Email"
            />
            <SocialLink
              href="https://www.linkedin.com/in/jonathankerth"
              icon={FaLinkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="https://github.com/jonathankerth"
              icon={FaGithub}
              label="GitHub"
            />
            <SocialLink
              href="https://twitter.com/jonathankerth"
              icon={FaSquareXTwitter}
              label="Twitter"
            />
            <SocialLink
              href="https://www.threads.net/@jonathankerth"
              icon={FaMeta}
              label="Threads"
            />
          </motion.div>
        </motion.div>
      </Section>

      <SectionDivider variant="wave" />

      {/* About Section */}
      <Section id="about">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-8">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white/70 dark:bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 border border-black/10 dark:border-white/10">
                <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed">
                  Tea and a relentless curiosity keep me running. I live in
                  Portland, Oregon, USA. I specialize in building web
                  applications with JavaScript and Python technologies. I love
                  to learn and try to challenge myself with an endless flow of
                  personal projects.
                </p>
              </div>
              <div className="bg-white/70 dark:bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 border border-black/10 dark:border-white/10">
                <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed">
                  Outside of work, I&apos;m a 3D printer hobbyist, husband,
                  general nerd, home chef, pet parent, and traveler.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ImageCarousel />
            </motion.div>
          </div>
        </motion.div>
      </Section>

      <SectionDivider variant="wave" />

      {/* Resume Section */}
      <Section id="resume" variant="fullWidth">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white text-center">
              Resume
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://mypublicucket.s3.us-west-2.amazonaws.com/Jonathan+GK+Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-black/85 dark:hover:bg-white/90 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                download
                aria-label="Download Jonathan Gallardo-Kerth's resume as PDF"
              >
                <FaDownload className="text-sm" aria-hidden="true" />
                <span>Download (PDF)</span>
              </a>
              {/* Mobile-only inline view link — iframe is too cramped on phones */}
              <a
                href="https://mypublicucket.s3.us-west-2.amazonaws.com/Jonathan+GK+Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white/70 dark:bg-white/[0.06] border border-black/10 dark:border-white/10 text-sm font-medium text-black dark:text-white transition-all duration-300 hover:bg-white dark:hover:bg-white/[0.12]"
                aria-label="Open résumé in a new tab"
              >
                <span>View Resume</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          {/* Inline résumé — desktop/tablet only. Mobile gets the View Résumé link above. */}
          <div className="hidden md:block bg-white/70 dark:bg-white/[0.04] backdrop-blur-sm rounded-2xl p-4 border border-black/10 dark:border-white/10 shadow-lg max-w-4xl mx-auto relative">
            <iframe
              src="https://jonathankerth.github.io/resume_plain/"
              className="border-0 rounded-xl w-full shadow-lg relative z-10"
              style={{ aspectRatio: '8.5 / 11', width: '100%' }}
              title="Jonathan Gallardo-Kerth's Resume"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            />
            {/* Fallback: shown only when the iframe never paints over it. */}
            <div
              className="absolute inset-4 flex flex-col items-center justify-center text-center p-8 pointer-events-none"
              aria-hidden="true"
            >
              <p className="text-sm text-black/50 dark:text-white/50 mb-3">
                If the resume doesn&apos;t load,
              </p>
              <span className="text-sm font-semibold text-black dark:text-white">
                use the Download Resume button above.
              </span>
            </div>
          </div>
        </motion.div>
      </Section>

      <SectionDivider variant="wave" />

      {/* Projects Section — full-bleed rail */}
      <section id="projects" className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
              Featured Projects
            </h2>
            <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed max-w-2xl mx-auto">
              I love building things. I&apos;m always working on something new
              and looking to collaborate — fork any of these or reach out to
              build together.
            </p>
          </div>

          <div className="relative">
            <div
              ref={projectsContainerRef}
              className="projects-rail scrollbar-hide"
            >
              <div className="projects-rail-row flex gap-6 md:gap-8 px-6 md:px-12 pb-2 pt-1" style={{ width: 'max-content' }}>
                {projects.map((project, index) => (
                  <div key={project.id} className="w-[320px] md:w-[380px] flex-shrink-0">
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-20 rail-fade-left"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-20 rail-fade-right"
              aria-hidden="true"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-4">
            <div className="flex-1 h-px bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
              <div
                ref={railProgressRef}
                className="h-full bg-black/50 dark:bg-white/50 rounded-full origin-left"
                style={{ transform: 'scaleX(0.08)' }}
                aria-hidden="true"
              />
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scrollProjects(-1)}
                aria-label="Scroll projects left"
                className="w-9 h-9 rounded-full flex items-center justify-center text-black/60 hover:text-black hover:bg-black/5 dark:text-white/60 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollProjects(1)}
                aria-label="Scroll projects right"
                className="w-9 h-9 rounded-full flex items-center justify-center text-black/60 hover:text-black hover:bg-black/5 dark:text-white/60 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDivider variant="wave" />

      {/* Tech Stack Section */}
      <Section id="tech-stack" variant="compact">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-8">
            Tech Stack
          </h2>
          <div className="space-y-8">
            {techStackSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              >
                <h3 className="text-sm font-semibold tracking-widest uppercase text-black/60 dark:text-white/60 text-left">
                  {section.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {section.items.map((tech) => (
                    <a
                      key={`${section.title}-${tech.name}`}
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/70 dark:bg-white/[0.04] backdrop-blur-sm rounded-xl px-4 py-3 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 hover:bg-white dark:hover:bg-white/[0.08] hover:scale-[1.03] hover:-translate-y-0.5 h-16 flex items-center justify-center"
                    >
                      <div className="text-black/80 dark:text-white/80 font-medium text-sm group-hover:text-black dark:group-hover:text-white transition-colors duration-300 text-center leading-snug">
                        {tech.name}
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

    </SPALayout>
  )
}
