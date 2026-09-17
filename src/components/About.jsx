import RevealOnScroll from './RevealOnScroll'

function About() {
  return (
    <section id="about" className="section">
      <div className="section-content">
        <RevealOnScroll>
          <p className="section-label">About Me</p>

          <h2>Building with curiosity and purpose.</h2>

          <p className="hero-description">
            I am a Computer Science student with hands-on experience in AI
            automation and web development — building chatbots and agent
            workflows using n8n, Postman, and open APIs, and developing
            frontend projects through a web development internship. My
            growing focus lies in AI/ML, Backend Development, and DevOps areas in which I am
            actively deepening my technical foundation.
          </p>

          <p>
            I have hands-on experience with technologies such as React,
            JavaScript, Node.js, Next.js, SQL,Git/GitHub, n8n, and AI APIs including
            OpenAI and Gemini. Through internships and personal projects, I
            am continuously refining my development skills and building a
            strong technical foundation for my career in technology.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default About
