import { useEffect, useState } from 'react'

/**
 * useScrollProgress
 * Returns two things derived from window scroll position:
 *  - progress: 0-100, how far down the page the user has scrolled
 *  - passedThreshold: whether the user has scrolled past `threshold` px
 * Used for the top progress bar and the "back to top" button visibility.
 */
function useScrollProgress(threshold = 400) {
  const [progress, setProgress] = useState(0)
  const [passedThreshold, setPassedThreshold] = useState(false)

  useEffect(() => {
    let frame = null

    const handleScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        const scrollTop = window.scrollY
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

        setProgress(Math.min(100, Math.max(0, pct)))
        setPassedThreshold(scrollTop > threshold)
        frame = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [threshold])

  return { progress, passedThreshold }
}

export default useScrollProgress
