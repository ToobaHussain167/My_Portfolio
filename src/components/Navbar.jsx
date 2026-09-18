import { useCallback, useRef, useState } from 'react'
import useScrollSpy from '../hooks/useScrollSpy'
import useScrollProgress from '../hooks/useScrollProgress'
import useOnClickOutside from '../hooks/useOnClickOutside'
import ThemeToggle from './ThemeToggle'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const SECTION_IDS = SECTIONS.map((s) => s.id)

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  // Custom hook: highlights whichever section is currently in the viewport.
  const activeId = useScrollSpy(SECTION_IDS)

  // Custom hook: drives the scroll-progress bar under the navbar.
  const { progress } = useScrollProgress()

  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  // Custom hook: closes the mobile menu on an outside click/tap.
  useOnClickOutside(menuRef, closeMenu, isMenuOpen)

  return (
    <nav ref={menuRef}>
      <div className="nav-top">
        <h2>My Portfolio</h2>

        <div className="nav-controls">
          <ThemeToggle />
          <button
            type="button"
            className="nav-toggle"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
        {SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeId === id ? 'nav-link-active' : ''}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
      </div>

      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </nav>
  )
}

export default Navbar
