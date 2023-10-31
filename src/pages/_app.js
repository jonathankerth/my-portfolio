import '../../globals.css'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes' // Import the ThemeProvider

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      {' '}
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}
