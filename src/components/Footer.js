import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const Footer = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true) // set initial state to true

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset
    const isVisible = prevScrollPos > currentScrollPos
    const isBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight

    setPrevScrollPos(currentScrollPos)
    setVisible(isVisible || isBottom)
  }, [prevScrollPos])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <footer
      className={`fixed bottom-0 left-0 z-50 w-full py-2 bg-gray-900/40 transition-all duration-200 ${
        visible ? '' : 'translate-y-full'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/">
          <button className="px-4 py-2 font-medium text-white hover:text-gray-200 transition duration-300">
            ← Back to home
          </button>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
