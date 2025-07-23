'use client'

import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  // Set theme on mount based on localStorage
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (theme === 'dark' || (!theme && prefersDark)) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    localStorage.setItem('theme', newTheme)

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-20 right-0 z-50 m-2 p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}
