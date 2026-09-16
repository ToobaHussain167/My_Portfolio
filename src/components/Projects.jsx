function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-content">
        <p className="section-label">Projects</p>

        <h2>Things I have built.</h2>

        <div className="projects-list">
          <article className="project-item">
            <h3>ElectricFix AI</h3>

            <p>
              An AI-powered lead rescue system designed to engage and recover
              potential customers through an automated chatbot.
            </p>

            <p className="project-tech">
              NestJS · OpenAI · Supabase · Prisma · Resend · Swagger
            </p>

            <a
              href="https://github.com/ToobaHussain167/ElectricFix_AI"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </article>

          <article className="project-item">
            <h3>TrackPilot</h3>

            <p>
              A web-based project focused on building a clean and responsive
              interface while applying practical frontend development and
              Git-based workflows.
            </p>

            <p className="project-tech">
              HTML · CSS · JavaScript · Bootstrap · Git · GitHub
            </p>

            <a
              href="https://github.com/ToobaHussain167/Track_Pilot"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </article>

          <article className="project-item">
            <h3>MediDesk AI</h3>

            <p>
              An AI-powered virtual clinic receptionist concept designed to
              handle conversations and provide useful summaries to clinic
              staff through an automated workflow.
            </p>

            <p className="project-tech">
              Next.js · n8n · Gemini · AI Automation
            </p>

            <a
              href="https://github.com/ToobaHussain167/Medidesk-Ai"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </article>

          <article className="project-item">
            <h3>E-Commerce Database System</h3>

            <p>
              A database project designed to manage an e-commerce system,
              including products, customers, orders, and related data while
              applying database design and SQL concepts.
            </p>

            <p className="project-tech">
              SQL · Database Design
            </p>
          </article>

          <article className="project-item">
            <h3>Escape Room Puzzle Game</h3>

            <p>
              A C++ based puzzle game where players solve a series of
              challenges and clues to progress through an escape room
              experience.
            </p>

            <p className="project-tech">
              C++ · Object-Oriented Programming · Data Structures
            </p>

            <a
              href="https://github.com/ToobaHussain167/Escape-Puzzle-Game-DSA"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects