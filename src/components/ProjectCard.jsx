import { memo } from 'react'

function ProjectCard({ project, onSelect }) {
  return (
    <article className="project-item">
      <h3>{project.title}</h3>

      <p>{project.summary}</p>

      <p className="project-tech">{project.tech.join(' · ')}</p>

      <button
        type="button"
        className="btn btn-secondary project-details-btn"
        onClick={() => onSelect(project.id)}
      >
        View details
      </button>
    </article>
  )
}

// React.memo: skip re-rendering a card when neither its project data
// nor the onSelect callback identity has changed (onSelect is kept
// stable in the parent via useCallback).
export default memo(ProjectCard)
