import { useEffect } from 'react'

/**
 * useOnClickOutside
 * Attaches a document-level listener and calls `handler` when a
 * click/tap happens outside the element referenced by `ref`.
 * Used to close the mobile nav menu and the project modal.
 */
function useOnClickOutside(ref, handler, active = true) {
  useEffect(() => {
    if (!active) return

    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler, active])
}

export default useOnClickOutside
