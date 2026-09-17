import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ThemeContext = createContext(undefined)

const THEME_ACTIONS = {
  SET: 'SET',
  TOGGLE: 'TOGGLE',
}

function themeReducer(state, action) {
  switch (action.type) {
    case THEME_ACTIONS.SET:
      return action.payload
    case THEME_ACTIONS.TOGGLE:
      return state === 'dark' ? 'light' : 'dark'
    default:
      return state
  }
}

function getSystemTheme() {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

/**
 * ThemeProvider
 * Wraps the app in the Context API's Provider so any component
 * can read/toggle the theme via useTheme() without prop drilling.
 * The chosen theme is persisted to localStorage (useLocalStorage),
 * and falls back to the OS preference on first visit.
 */
export function ThemeProvider({ children }) {
  const [savedTheme, setSavedTheme] = useLocalStorage('portfolio-theme', null)
  const [theme, dispatch] = useReducer(
    themeReducer,
    savedTheme ?? getSystemTheme()
  )

  // Reflect the current theme on <html data-theme="..."> so CSS can react to it,
  // and persist every change to localStorage.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    setSavedTheme(theme)
  }, [theme, setSavedTheme])

  // If the user never explicitly chose a theme, keep following the OS setting.
  useEffect(() => {
    if (savedTheme !== null) return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event) =>
      dispatch({ type: THEME_ACTIONS.SET, payload: event.matches ? 'dark' : 'light' })
    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [savedTheme])

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === 'dark',
      toggleTheme: () => dispatch({ type: THEME_ACTIONS.TOGGLE }),
      setTheme: (next) => dispatch({ type: THEME_ACTIONS.SET, payload: next }),
    }),
    [theme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

/**
 * useTheme
 * Custom hook that reads the ThemeContext. Throws a helpful error
 * if used outside the provider, which is a common "advanced React" pattern.
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
