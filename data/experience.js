/**
 * Work experience configuration for portfolio.
 * Edit entries to update the Experience section.
 */
const EXPERIENCE = [
  {
    title: 'Research & Instructional Assistant',
    date: 'Aug 2025 – Present',
    company: 'University of Houston',
    location: 'Houston, Texas',
    bullets: [
      'Built scalable <strong>Python data pipelines</strong> to ingest, clean, and integrate multi-source datasets (green space index, census migration, housing prices, economic indicators), enabling structured neighborhood-level analysis.',
      'Engineered <strong>geospatial and demographic features</strong> (park proximity, green density, walkability, income distribution) to quantify relationships between green infrastructure and residential movement trends.',
      'Trained supervised <strong>ML models</strong> (Random Forest, Gradient Boosting) to predict neighborhood population inflow and housing price appreciation from green index and socio-economic variables.',
      'Developed <strong>unsupervised clustering</strong> to segment neighborhoods by environmental quality and growth trajectory, identifying high-potential micro-markets for investment and marketing.',
      'Created interactive <strong>Tableau dashboards</strong> and performance reports translating model outputs into actionable insights for real estate and marketing stakeholders, supporting data-driven pricing and location-based campaign decisions.'
    ],
    keyProjects: null,
    pills: ['Python', 'ML', 'Tableau', 'Geospatial', 'Clustering']
  },
  {
    title: 'Junior Engineering Intern',
    date: 'Jun 2025 – Aug 2025',
    company: 'Resolve Tech Solutions',
    location: 'Dallas, Texas',
    bullets: [
      'Built a cloud-based onboarding platform with <strong>React</strong>, <strong>FastAPI microservices</strong>, and <strong>MySQL</strong> under Agile sprints, conducting code reviews and backlog grooming.',
      'Designed reusable UI components with <strong>Redux-based state management</strong>, streamlining frontend delivery and simplifying feature releases.',
      'Implemented an <strong>AI-powered ticket classification assistant</strong> integrated with <strong>ServiceNow</strong>, improving accuracy and cutting response time by <strong class="metric">55%</strong>.',
      'Owned backend data models, API versioning, and <strong>GitLab CI/CD pipelines</strong> for <strong>AWS EC2</strong> deployments, enabling robust releases.'
    ],
    keyProjects: [
      { name: 'Onboarding Task Manager', description: ' — Role-based workflows, real-time chat, Next.js + FastAPI on AWS; SSO via Microsoft Entra, GitLab CI/CD.' },
      { name: 'Ticketing Assistant', description: ' — ML-based ticket classification and routing with ServiceNow; FastAPI on AWS EC2, feedback-driven retraining.' }
    ],
    pills: ['React', 'FastAPI', 'MySQL', 'AWS', 'Microservices', 'Redux', 'CI/CD', 'Machine Learning']
  },
  {
    title: 'Software Engineer',
    date: 'Jul 2023 – Jul 2024',
    company: 'Policybazaar.com',
    location: 'Gurugram, India',
    bullets: [
      'Engineered a <strong>Lead Management Dashboard</strong> managing <strong class="metric">70M+</strong> records in a distributed, cloud-based architecture, improving scalability and data access speed.',
      'Owned end-to-end delivery of <strong>Claims Management</strong> and <strong>Renewal Portal</strong> systems, reducing claims turnaround by <strong class="metric">15%</strong> via workflow automation.',
      'Designed and deployed low-latency, fault-tolerant <strong>APIs</strong> integrating <strong>AWS SQS</strong> and <strong>Redis caching</strong>, ensuring reliability and operational excellence.',
      'Collaborated cross-functionally on system enhancements (leaderboards, dashboards), driving <strong class="metric">40%</strong> higher engagement and revenue visibility.'
    ],
    keyProjects: [
      { name: 'Pbpartners', url: 'https://www.pbpartners.com/', description: ' — Agent portal (POSP) for leads, renewals, claims; renewals UI/UX improvements drove +20% policy renewals.' },
      { name: 'AI WhatsApp ChatBot', description: ' — Context-aware bot with OpenAI and on-prem APIs; automated policy mapping improved throughput by 50%.' }
    ],
    pills: ['Node.js', 'React', 'MySQL', 'MongoDB', 'AWS SQS', 'Redis', 'REST APIs', 'Distributed Systems']
  },
  {
    title: 'Software Engineer Intern',
    date: 'Oct 2022 – Jun 2023',
    company: 'Policybazaar.com',
    location: 'Gurugram, India',
    bullets: [
      'Created an <strong>AI chatbot</strong> using the <strong>WhatsApp Business On-Premises API</strong> for policy queries, renewals, and claims, boosting customer engagement by <strong class="metric">30%</strong>.',
      'Built end-to-end automated self-service workflows, improving accessibility and reducing manual support overhead.',
      'Participated in collaborative Agile development, including version control, testing, and code reviews to strengthen SDLC fundamentals.'
    ],
    keyProjects: null,
    pills: ['WhatsApp Business API', 'Python', 'ML', 'Chatbots', 'Automation', 'SDLC']
  }
];
