import { memo } from 'react'
import useInView from '../hooks/useInView'

/**
 * RevealOnScroll
 * Thin wrapper that adds a "revealed" class once its children have
 * scrolled into view. Wrapped in React.memo since it only depends on
 * its own props and shouldn't re-render when unrelated parent state changes.
 */
function RevealOnScroll({ children, as: Tag = 'div', className = '', delay = 0 }) {
  const [ref, isInView] = useInView({ threshold: 0.15 })

  return (
    <Tag
      ref={ref}
      className={`reveal ${isInView ? 'reveal-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

export default memo(RevealOnScroll)
