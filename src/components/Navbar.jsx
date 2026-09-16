function Navbar({ darkMode, setDarkMode }) {
   
  return (
    <nav>
      <h2>My Portfolio</h2>

      <div>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? '☀️ Light' : '🌙 Dark'}
</button>
      </div>
    </nav>
  )
}

export default Navbar