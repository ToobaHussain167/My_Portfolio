import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import useOnClickOutside from '../hooks/useOnClickOutside'


function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)
  useOnClickOutside(dialogRef, onClose)

  // Close on Escape, and lock body scroll while the modal is open.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-dialog" ref={dialogRef}>
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>

        <h3 id="modal-title">{project.title}</h3>
        <p className="project-tech">{project.tech.join(' · ')}</p>
        <p className="modal-body-text">{project.details}</p>
      </div>
    </div>,
    document.body
  )
}

export default ProjectModal
