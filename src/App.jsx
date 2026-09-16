import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() { 
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero />
        <About />
         <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Tooba Hussain. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App