import { useEffect, useState } from 'react'

/**
 * useScrollSpy
 * Watches a list of section ids with IntersectionObserver and returns
 * whichever one is currently most visible in the viewport. Used to
 * highlight the matching link in the Navbar as the user scrolls.
 */
function useScrollSpy(sectionIds, options = { rootMargin: '-45% 0px -50% 0px' }) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? null)

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }, options)

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(',')])

  return activeId
}

export default useScrollSpy
