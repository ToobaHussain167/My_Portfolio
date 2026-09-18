import { useEffect, useRef, useState } from 'react'

/**
 * useCountUp
 * Animates a number from 0 up to `target` over `duration` ms, but only
 * once `start` becomes true (paired with useInView so it plays when the
 * stats section scrolls into view, not on every mount).
 */
function useCountUp(target, { duration = 1400, start = true } = {}) {
  const [value, setValue] = useState(0)
  const frameRef = useRef(null)
  const startTimeRef = useRef(null)

  useEffect(() => {
    if (!start) return

    const step = (timestamp) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      // ease-out for a slightly snappier finish
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(eased * target))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step)
      }
    }

    frameRef.current = requestAnimationFrame(step)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      startTimeRef.current = null
    }
  }, [target, duration, start])

  return value
}

export default useCountUp
