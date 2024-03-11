import '../../globals.css'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'
import { PageTransition } from 'next-page-transitions'

export default function App({ Component, pageProps, router }) {
  return (
    <PageTransition timeout={300} classNames="page-transition">
      <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </PageTransition>
  )
}
