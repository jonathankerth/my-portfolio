import '../../globals.css'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}
