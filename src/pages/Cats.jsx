import Head from 'next/head'
import Link from 'next/link'
import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/Resume', label: 'Resume' },
  { href: '/About', label: 'About Me' },
  { href: '/Projects', label: 'Projects' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Handling navbar visibility while scrolling
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset
    const isVisible = prevScrollPos > currentScrollPos

    setPrevScrollPos(currentScrollPos)
    setVisible(isVisible)
  }, [prevScrollPos])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full py-4 bg-gray-900/50 transition-all duration-200 ${
        visible ? 'visible' : 'invisible'
      }`}
    >
      <div className="max-w-screen-lg mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="px-6 py-3 font-semibold text-lg bg-white text-black rounded-full shadow-md hover:bg-gray-900/90 hover:text-white transition duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
            aria-label="toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-12 right-0 w-full bg-gray-900/50">
          <ul className="px-8 py-4">
            {navLinks.map(({ href, label }) => (
              <li key={href} className="py-2">
                <Link
                  href={href}
                  className="text-white hover:text-gray-200 text-xl font-bold"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default function Cats() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedFileName, setSelectedFileName] = useState(null)
  const [uploadMessage, setUploadMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const favoriteMemes = [
    'https://memedisplay.s3.us-west-2.amazonaws.com/cat+and+kid.jpeg',
    'https://memedisplay.s3.us-west-2.amazonaws.com/cat+philosophy.jpeg',
    'https://memedisplay.s3.us-west-2.amazonaws.com/photogenic+cat.jpeg',
    'https://memedisplay.s3.us-west-2.amazonaws.com/pizza+cat.jpeg',
    'https://memedisplay.s3.us-west-2.amazonaws.com/code+cat.png',
  ]

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
      setSelectedFileName(file.name)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true) // Set loading state to true

    const file = selectedFile
    if (!file) {
      setIsLoading(false) // Reset loading state if no file selected
      return
    }

    const { url } = await fetch(`/api/s3Url?fileType=${file.type}`).then(
      (res) => res.json()
    )

    await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': file.type,
      },
      body: file,
    })

    const imageUrl = url.split('?')[0]
    setUploadedImageUrl(imageUrl)
    setUploadMessage(
      'Your file has been uploaded, check back to see if your meme is posted!'
    )
    setIsLoading(false)
  }

  return (
    <div
      className="min-h-screen bg-center bg-cover flex flex-col justify-center items-center px-2"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1806&q=80')",
      }}
    >
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 py-12 mt-10">
        <div className="bg-black bg-opacity-40 rounded-lg p-4 mb-6 max-w-2xl">
          <h1 className="text-2xl font-bold text-white text-center mb-4">
            Send Me Your Cat Memes!
          </h1>
          <h2 className="text-xl text-white text-center mb-2">
            This page was built because I love cats, memes, and cat memes. I
            also wanted to show my knowledge of AWS S3 buckets and IAM user
            policies.{' '}
          </h2>
          <h2 className="text-xl text-white text-center mb-2">
            Upload a cat meme to my S3 bucket and I&apos;ll display my
            favorites!{' '}
          </h2>
          <form
            id="imageForm"
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center mb-6 space-y-4"
          >
            <label
              htmlFor="imageInput"
              className="flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg shadow-sm cursor-pointer hover:bg-blue-100"
            >
              <span>{selectedFileName || 'Select Image'}</span>
              <input
                id="imageInput"
                name="imageInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {uploadMessage && (
              <p className="text-md font-bold text-white text-center">
                {uploadMessage}
              </p>
            )}
            <button
              type="submit"
              className={`px-6 py-2 text-white rounded-lg shadow-md hover:bg-blue-600 focus:bg-blue-700 focus:outline-none transition duration-300 ease-in-out ${
                isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500'
              }`}
              disabled={isLoading} // Disable the button during loading
            >
              {isLoading ? 'Uploading...' : 'Upload'}{' '}
              {/* Change button text based on loading state */}
            </button>
          </form>

          {uploadedImageUrl && (
            <div className="mb-6 text-center">
              <p className="text-md font-bold text-white">
                Last uploaded image
              </p>
              <Image
                src={uploadedImageUrl}
                alt="Uploaded preview"
                width={128}
                height={128}
                className="inline-block"
              />
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteMemes.map((meme, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-40 rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative aspect-w-1 aspect-h-1">
                <Image
                  src={meme}
                  alt={`Cat meme ${index}`}
                  width={300} // Set the desired width
                  height={200} // Set the desired height
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 text-white bg-gray-900/50">
        <Link href="/">
          <button className="px-6 py-3 font-semibold text-lg bg-white text-black rounded-full shadow-md hover:bg-gray-900/90 hover:text-white transition duration-300">
            ← Back to home
          </button>
        </Link>
      </footer>
    </div>
  )
}
