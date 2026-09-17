const projects = [
  {
    id: 'electricfix-ai',
    title: 'ElectricFix AI',
    tags: ['AI'],
    tech: ['NestJS', 'OpenAI', 'Supabase', 'Prisma', 'Resend', 'Swagger'],
    summary:
      'An AI-powered lead rescue system designed to engage and recover potential customers through an automated chatbot.',
    details:
      'ElectricFix AI automatically re-engages leads who go cold after an initial enquiry. A NestJS backend exposes a Swagger-documented API, Prisma models the leads and conversation history in a Supabase Postgres database, OpenAI drives the conversational replies, and Resend sends the resulting follow-up emails — all without manual outreach from the sales team.',
  },
  {
    id: 'trackpilot',
    title: 'TrackPilot',
    tags: ['Web'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git', 'GitHub'],
    summary:
      'A web-based project focused on building a clean and responsive interface while applying practical frontend development and Git-based workflows.',
    details:
      'TrackPilot is a client-onboarding tracking dashboard built with vanilla JavaScript and Bootstrap. The focus was on a clean, responsive layout and disciplined Git workflows (feature branches, descriptive commits) rather than a framework — a good contrast to the React work elsewhere in this portfolio.',
  },
  {
    id: 'medidesk-ai',
    title: 'MediDesk AI',
    tags: ['AI'],
    tech: ['Next.js', 'n8n', 'Gemini', 'AI Automation'],
    summary:
      'An AI-powered virtual clinic receptionist concept designed to handle conversations and provide useful summaries to clinic staff through an automated workflow.',
    details:
      'MediDesk AI prototypes a virtual receptionist for a small clinic: it holds a conversation with a patient, then hands clinic staff a short structured summary instead of a raw transcript. The conversational flow is orchestrated in n8n and powered by Gemini, with a Next.js front end for staff to review summaries.',
  },
  {
    id: 'ecommerce-db',
    title: 'E-Commerce Database System',
    tags: ['Database'],
    tech: ['SQL', 'Database Design'],
    summary:
      'A database project designed to manage an e-commerce system, including products, customers, orders, and related data while applying database design and SQL concepts.',
    details:
      'A normalized relational schema for an e-commerce platform covering products, customers, orders, and order line items, with SQL queries and constraints written to keep the data consistent — the coursework project this portfolio\u2019s backend thinking is built on.',
  },
  {
    id: 'escape-room',
    title: 'Escape Room Puzzle Game',
    tags: ['Systems'],
    tech: ['C++', 'Data Structures', 'Algorithms'],
    summary:
      'A C++ based puzzle game where players solve a series of challenges and clues to progress through an escape room experience.',
    details:
      'A console-based escape room game in C++, using core data structures to track room state, inventory, and puzzle dependencies as the player moves between rooms and solves clues in sequence.',
  },
]

export default projects
