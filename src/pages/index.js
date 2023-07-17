import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1533335121856-52d185e85ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      <Head>
        <title>Software Engineer Portfolio</title>
        <meta
          name="description"
          content="A portfolio showcasing my skills and projects as a software engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full px-8 py-8 text-center bg-black bg-opacity-60 max-w-2xl">
        <h1 className="mb-4 text-3xl text-white">Welcome,</h1>

        <p className="mb-8 text-2xl text-white">I&apos;m Jonathan Kerth</p>

        <div className="grid w-full grid-cols-1 gap-4 mt-8 max-w-2xl">
          <Link
            href="/Projects"
            className="p-6 text-left text-white border-4 border-white rounded-xl transition-all duration-300 ease-in-out bg-black bg-opacity-60 hover:border-black hover:bg-black hover:bg-opacity-80 focus:border-black focus:bg-black focus:bg-opacity-80 active:border-black active:bg-black active:bg-opacity-80"
          >
            <h2>Projects &rarr;</h2>
            <p>Check out my projects!</p>
          </Link>

          <Link
            href="/Resume"
            className="p-6 text-left text-white border-4 border-white rounded-xl transition-all duration-300 ease-in-out bg-black bg-opacity-60 hover:border-black hover:bg-black hover:bg-opacity-80 focus:border-black focus:bg-black focus:bg-opacity-80 active:border-black active:bg-black active:bg-opacity-80"
          >
            <h2>Resume &rarr;</h2>
            <p>View my resume</p>
          </Link>

          <Link
            href="/About"
            className="p-6 text-left text-white border-4 border-white rounded-xl transition-all duration-300 ease-in-out bg-black bg-opacity-60 hover:border-black hover:bg-black hover:bg-opacity-80 focus:border-black focus:bg-black focus:bg-opacity-80 active:border-black active:bg-black active:bg-opacity-80"
          >
            <h2>About Me &rarr;</h2>
            <p>Learn more about my background and experience.</p>
          </Link>

          <Link
            href="/Contact"
            className="p-6 text-left text-white border-4 border-white rounded-xl transition-all duration-300 ease-in-out bg-black bg-opacity-60 hover:border-black hover:bg-black hover:bg-opacity-80 focus:border-black focus:bg-black focus:bg-opacity-80 active:border-black active:bg-black active:bg-opacity-80"
          >
            <h2>Contact &rarr;</h2>
            <p>Get in touch with me for collaborations or opportunities.</p>
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t border-white text-white">
        <a
          href="https://github.com/jonathankerth"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="h-4 ml-2">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
              width={32}
              height={32}
            />
          </span>
        </a>
      </footer>
    </div>
  )
}
