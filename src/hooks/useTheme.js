import { useEffect, useState } from 'react'

const THEME_KEY = 'manoj-portfolio-theme'

export default function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  return { theme, toggleTheme: () => setTheme(current => current === 'dark' ? 'light' : 'dark') }
}
