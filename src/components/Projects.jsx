import { lazy, Suspense, useCallback, useMemo, useState, useTransition } from 'react'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import ErrorBoundary from './ErrorBoundary'

// Code-splitting: the modal's code is only fetched when a project is
// actually opened, not as part of the main bundle.
const ProjectModal = lazy(() => import('./ProjectModal'))

const FILTERS = ['All', 'AI', 'Web', 'Database', 'Systems']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedId, setSelectedId] = useState(null)

  // useTransition: mark the filter switch as non-urgent so the click
  // itself stays responsive even while the grid re-renders.
  const [isPending, startTransition] = useTransition()

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.tags.includes(activeFilter))
  }, [activeFilter])

  const handleFilterChange = useCallback((filter) => {
    startTransition(() => setActiveFilter(filter))
  }, [])

  // useCallback: keeps a stable function identity so memoized
  // ProjectCards don't re-render just because Projects re-rendered.
  const handleSelect = useCallback((id) => setSelectedId(id), [])
  const handleClose = useCallback(() => setSelectedId(null), [])

  const selectedProject = projects.find((p) => p.id === selectedId) ?? null

  return (
    <section id="projects" className="section">
      <div className="section-content">
        <p className="section-label">Projects</p>
        <h2>Things I have built.</h2>

        <div className="filter-bar" role="group" aria-label="Filter projects by category">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-btn ${activeFilter === filter ? 'filter-btn-active' : ''}`}
              onClick={() => handleFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={`projects-list ${isPending ? 'projects-list-pending' : ''}`}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={handleSelect} />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ErrorBoundary>
          <Suspense fallback={<div className="modal-loading">Loading details…</div>}>
            <ProjectModal project={selectedProject} onClose={handleClose} />
          </Suspense>
        </ErrorBoundary>
      )}
    </section>
  )
}

export default Projects
