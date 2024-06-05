import { useTheme } from 'next-themes'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button onClick={toggleTheme} className="p-1 rounded-full">
      {theme === 'dark' ? (
        <FaSun className="text-yellow-300" />
      ) : (
        <FaMoon className="text-gray-700" />
      )}
    </button>
  )
}

export default ThemeToggle
