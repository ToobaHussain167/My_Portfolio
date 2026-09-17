import { memo } from 'react'
import useScrollProgress from '../hooks/useScrollProgress'

function BackToTop() {
  const { passedThreshold } = useScrollProgress(400)

  if (!passedThreshold) return null

  return (
    <button
      type="button"
      className="back-to-top"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  )
}

export default memo(BackToTop)
