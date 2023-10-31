import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else {
      // Detect user's preferred theme using `window.matchMedia`
      const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      setIsDarkMode(prefersDarkMode)
      localStorage.setItem('theme', prefersDarkMode ? 'dark' : 'light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark'
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default ThemeToggle
