'use client'

import Cookies from 'js-cookie'
import React from 'react'

interface ThemeContextType {
  theme: boolean
  handleSwitchTheme: () => void
}

export const ThemeContext = React.createContext<ThemeContextType>({} as ThemeContextType)

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState(true)

  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() + 365)

  React.useEffect(() => {
    setTheme(Cookies.get('_theme') === 'dark')
  }, [])

  React.useEffect(() => {
    Cookies.set('_theme', theme ? 'dark' : '', { expires: currentDate })
  }, [theme])

  const handleSwitchTheme = () => {
    setTheme((stateTheme) => !stateTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, handleSwitchTheme }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  return React.useContext(ThemeContext)
}
