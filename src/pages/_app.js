import '../../globals.css'
import { Analytics } from '@vercel/analytics/react'
import { AnimatePresence, motion } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Analytics />
    </>
  )
}
