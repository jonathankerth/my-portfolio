import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme({ detectSystemTheme: true })

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default ThemeToggle
