function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-intro">Hello, I'm</p>

        <h1>Tooba Hussain</h1>

        <h2>Computer Science Student | AI Automation & Web Development</h2>

        <p className="hero-description">
           I am a Computer Science student with internship experience in AI
  automation and web development. My AI automation internship involved
  building chatbots and agent workflows using n8n, Postman, and open
  APIs, while my web development internship focused on building
  frontend projects. I am continuously strengthening my foundation in computer science and exploring new technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero