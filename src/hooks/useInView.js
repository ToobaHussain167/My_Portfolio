import { useEffect, useRef, useState } from 'react'

/**
 * useInView
 * Wraps IntersectionObserver in a hook: returns a ref to attach to an
 * element and a boolean for whether that element has entered the
 * viewport. Used to trigger scroll-reveal animations and to only
 * start the animated stat counters once they're actually visible.
 */
function useInView({ threshold = 0.2, once = true } = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, isInView]
}

export default useInView
