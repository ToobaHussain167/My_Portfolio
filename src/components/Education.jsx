import RevealOnScroll from './RevealOnScroll'

function Education() {
  return (
    <section id="education" className="section">
      <div className="section-content">
        <RevealOnScroll>
          <p className="section-label">Education</p>
          <h2>My academic journey.</h2>
        </RevealOnScroll>

        <RevealOnScroll as="div" className="education-item" delay={80}>
          <h3>Bachelor of Science in Computer Science</h3>

          <p className="education-institution">
            University of Central Punjab (UCP)
          </p>

          <p className="education-duration">2024 – Present · 5th Semester</p>

          <p className="education-description">
            Currently pursuing a BS in Computer Science, building a strong
            foundation in programming, data structures and algorithms,
            databases, artificial intelligence, operating systems, and
            information security.
          </p>
        </RevealOnScroll>

        <RevealOnScroll as="div" className="education-item" delay={160}>
          <h3>Intermediate in Computer Science (ICS) with Physics</h3>

          <p className="education-institution">
            PakTurk Maarif International School & Colleges, Lahore
          </p>

          <p className="education-duration">2022 – 2024</p>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default Education
