import '../../globals.css'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes' // Import the ThemeProvider
import Navbar from '../../src/components/Navbar' // Import your Navbar component

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      {' '}
      {/* Wrap your app with ThemeProvider */}
      <Navbar /> {/* Include your Navbar component */}
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}
