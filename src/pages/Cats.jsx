import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import { useTheme } from 'next-themes'

export default function Cats() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedFileName, setSelectedFileName] = useState(null)
  const [uploadMessage, setUploadMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { theme } = useTheme()

  const backgroundColors = {
    light: 'bg-gradient-to-b from-[#D6EAF8] to-[#AED6F1]',
    dark: 'bg-gradient-to-b from-[#2C3E50] via-[#34495E] to-[#212F3C]',
  }

  const textBoxBackground = {
    light: 'bg-gradient-to-br from-[#EBF5FB] via-[#D6EAF8] to-[#AED6F1]',
    dark: 'bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#212F3C]',
  }

  const textColors = {
    light: 'text-[#154360]',
    dark: 'text-[#ECF0F1]',
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
    setIsLoading(true)

    const file = selectedFile
    if (!file) {
      setIsLoading(false)
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
    <Layout>
      <div
        className={`min-h-screen ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-[#2C3E50] via-[#34495E] to-[#212F3C]'
            : 'bg-gradient-to-b from-[#D6EAF8] to-[#AED6F1]'
        } flex flex-col justify-center items-center px-4`}
      >
        <Head>
          <title>Cat Memes</title>
          <meta
            name="description"
            content="A fun page for sharing cat memes."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center justify-center flex-1 py-12 mt-10">
          <div
            className={`${
              theme === 'dark'
                ? 'bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#212F3C]'
                : 'bg-gradient-to-br from-[#EBF5FB] via-[#D6EAF8] to-[#AED6F1]'
            } rounded-lg p-8 mb-8 max-w-4xl mx-auto text-center shadow-lg`}
          >
            <h1
              className={`${
                theme === 'dark' ? 'text-[#ECF0F1]' : 'text-[#154360]'
              } font-bold text-2xl mb-6`}
            >
              Send Me Your Cat Memes!
            </h1>
            <p
              className={`${
                theme === 'dark' ? 'text-[#ECF0F1]' : 'text-[#154360]'
              } text-lg mb-4`}
            >
              This page was built because I love cats, memes, and cat memes. I
              also wanted to show my knowledge of AWS S3 buckets and IAM user
              policies.
            </p>
            <p
              className={`${
                theme === 'dark' ? 'text-[#ECF0F1]' : 'text-[#154360]'
              } text-lg mb-4`}
            >
              Upload a cat meme to my S3 bucket and I'll display my favorites!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="flex justify-center items-center gap-4">
                <label
                  htmlFor="imageInput"
                  className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
                >
                  <span>{selectedFileName || 'Select Image'}</span>
                  <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 shadow transition-colors duration-200 ease-in-out"
                >
                  {isLoading ? 'Uploading...' : 'Upload'}
                </button>
              </div>
              {uploadMessage && (
                <p className="text-md font-semibold mt-4">{uploadMessage}</p>
              )}
            </form>
            {uploadedImageUrl && (
              <div className="text-center mt-4">
                <Image
                  src={uploadedImageUrl}
                  alt="Uploaded Image"
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {favoriteMemes.map((meme, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={meme}
                  alt={`Cat meme ${index + 1}`}
                  width={300}
                  height={300}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  )
}
