import '../../globals.css'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Component {...pageProps} />
      {process.env.NEXT_PUBLIC_VERCEL_URL && <Analytics />}
    </>
  )
}
