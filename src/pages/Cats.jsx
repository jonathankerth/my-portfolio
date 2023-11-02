import Head from 'next/head'
import Link from 'next/link'
import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTheme } from 'next-themes'

export default function Cats() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedFileName, setSelectedFileName] = useState(null)
  const [uploadMessage, setUploadMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { theme } = useTheme()
  const backgroundColorClasses = {
    light: 'bg-gradient-to-b from-blue-200 to-blue-400',
    dark: 'bg-gradient-to-b from-gray-800 via-dark-blue to-black', // Dark mode gradient background
  }

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
      className={`min-h-screen ${
        theme === 'dark'
          ? backgroundColorClasses.dark
          : backgroundColorClasses.light
      } text-white flex flex-col justify-center items-center px-4`}
    >
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 py-12 mt-10">
        <div className="bg-black/40 bg-opacity-80 rounded-lg p-4 mb-6 max-w-2xl">
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
              className="bg-black bg-opacity-40 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
            >
              <div className="relative aspect-w-1 aspect-h-1">
                <Image
                  src={meme}
                  alt={`Cat meme ${index}`}
                  width={300}
                  height={200}
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex justify-center">
                <button
                  onClick={() => window.open(meme, '_blank')}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
