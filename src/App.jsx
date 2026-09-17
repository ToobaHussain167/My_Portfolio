import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import { ToastProvider } from './context/ToastContext'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/skills'
import Stats from './components/Stats'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Navbar />

        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Stats />
          <ErrorBoundary>
            <Experience />
          </ErrorBoundary>
          <ErrorBoundary>
            <Projects />
          </ErrorBoundary>
          <Contact />
        </main>

        <footer>
          <p>© 2026 Tooba Hussain. All rights reserved.</p>
        </footer>

        <BackToTop />
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
