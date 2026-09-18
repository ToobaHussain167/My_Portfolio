import RevealOnScroll from './RevealOnScroll'

const SKILLS = [
  'JavaScript',
  'React',
  'Node.js',
  'Next.js',
  'SQL',
  'APIs',
  'n8n',
  'OpenAI',
  'Gemini',
  'Git & GitHub',
  'Supabase',
  'Vercel',
]

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-content">
        <RevealOnScroll>
          <p className="section-label">Skills</p>
          <h2>Technologies I work with.</h2>

          <div className="skills-list">
            {SKILLS.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default Skills
