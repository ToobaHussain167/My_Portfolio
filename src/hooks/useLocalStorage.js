import { useState, useEffect, useCallback } from 'react'

/**
 * useLocalStorage
 * A generic custom hook that behaves like useState but persists
 * the value to localStorage and keeps it in sync across tabs.
 */
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`useLocalStorage: failed to read key "${key}"`, error)
      return initialValue
    }
  })

  const setValue = useCallback(
    (value) => {
      try {
        setStoredValue((prev) => {
          const valueToStore = value instanceof Function ? value(prev) : value
          window.localStorage.setItem(key, JSON.stringify(valueToStore))
          return valueToStore
        })
      } catch (error) {
        console.warn(`useLocalStorage: failed to set key "${key}"`, error)
      }
    },
    [key]
  )

  // Keep this hook's state in sync if the value changes in another tab/window.
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key && event.newValue !== null) {
        try {
          setStoredValue(JSON.parse(event.newValue))
        } catch {
          // ignore malformed values from other tabs
        }
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [key])

  return [storedValue, setValue]
}

export default useLocalStorage
