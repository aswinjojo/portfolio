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
    location: 'Dallas, TX',
    bullets: [
      'Led development of a cloud-based onboarding module used by internal operations teams, designing <strong>React</strong> components and <strong>FastAPI</strong> microservices to standardize user provisioning workflows and reduce manual onboarding dependencies.',
      'Architected backend data models and versioned <strong>REST APIs</strong> for the onboarding and workflow engine, ensuring backward compatibility and enabling iterative feature releases without service disruption.',
      'Built an <strong>AI-powered ticket classification</strong> feature integrated with <strong>ServiceNow</strong> to triage support requests; implemented model evaluation and feedback loops, reducing average response time from 3 days to 1 day.',
      'Established <strong>GitLab CI/CD</strong> pipelines for <strong>AWS EC2</strong> deployments, automating build, test, and release stages to improve deployment consistency and minimize rollback scenarios.'
    ],
    keyProjects: null,
    pills: ['React', 'FastAPI', 'MySQL', 'AWS', 'Microservices', 'Redux', 'CI/CD', 'Machine Learning']
  },
  {
    title: 'Software Engineer',
    date: 'Jul 2023 – Jul 2024',
    company: 'Policybazaar.com',
    location: 'Gurgaon, India',
    bullets: [
      'Designed and delivered a <strong>Lead Management Dashboard</strong> module within a distributed architecture, optimizing query patterns and indexing strategies to efficiently manage <strong class="metric">70M+</strong> records and improve data retrieval performance.',
      'Owned the <strong>Claims Management</strong> and <strong>Renewal Portal</strong> workflows, translating business rules into backend services and frontend interfaces, reducing claims turnaround time.',
      'Engineered fault-tolerant <strong>REST APIs</strong> leveraging <strong>AWS SQS</strong> for asynchronous processing and <strong>Redis</strong> for caching, improving service reliability under peak financial transaction loads.',
      'Collaborated with product and operations stakeholders to implement analytics dashboards and leaderboard features, enhancing revenue visibility and increasing user engagement by <strong class="metric">40%</strong>.'
    ],
    keyProjects: null,
    pills: ['Node.js', 'React', 'MySQL', 'MongoDB', 'AWS SQS', 'Redis', 'REST APIs', 'Distributed Systems']
  },
  {
    title: 'Software Engineer Intern',
    date: 'Oct 2022 – Jun 2023',
    company: 'Policybazaar.com',
    location: 'Gurgaon, India',
    bullets: [
      'Developed a <strong>WhatsApp-based chatbot</strong> using the <strong>WhatsApp Business On-Premises API</strong> to automate policy queries, renewals, and claims status requests, improving customer engagement and reducing manual support dependency.',
      'Designed automated self-service workflows integrating backend validation and rule engines, reducing dependency on manual support teams for repetitive financial queries.',
      'Contributed to API integrations, testing, and structured code reviews within Agile sprints, strengthening <strong>SDLC</strong> adherence and improving release stability.'
    ],
    keyProjects: null,
    pills: ['Python', 'WhatsApp Business On-Premises API', 'Machine Learning', 'Automation', 'SDLC']
  }
];
