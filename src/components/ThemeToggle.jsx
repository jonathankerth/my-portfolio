import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from './useTheme'

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggle, mounted } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full text-black/70 hover:text-black hover:bg-black/5 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30 ${className}`}
    >
      {mounted ? (
        isDark ? (
          <FaSun className="text-base" aria-hidden="true" />
        ) : (
          <FaMoon className="text-base" aria-hidden="true" />
        )
      ) : (
        <span className="block w-4 h-4" aria-hidden="true" />
      )}
    </button>
  )
}

export default ThemeToggle
