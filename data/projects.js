/**
 * Project configuration for portfolio.
 * Update github, live, and caseStudy URLs with your real links.
 * Use "REPLACE_WITH_..." placeholders until you have the URLs.
 */
const PROJECTS = [
  {
    id: 'data-center-energy-integration-hackathon',
    title: 'Participiatoion of Data Center in Grid Energy Stability',
    description: 'Real-time power simulation dashboard for grid import, energy ratio, CO₂ tracking, and grid instability index. Won Mentor\'s Choice for Best Technical Solution — $1,200 cash prize at UH CFE Hackathon (Energy Hackathon Fall 2025).',
    tech: ['Python', 'Reinforcement Learning', 'Data Pipelines', 'Optimization Problem', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1470&q=80',
    links: {
      github: 'https://github.com/aswinjojo/data-center-energy-integration-hackathon',
      live: '',
      caseStudy: ''
    },
    visibility: 'public',
    internalContext: null
  },
  {
    id: 'ride-sharing',
    title: 'Serverless Ride Sharing Platform (AWS)',
    description: 'Full-stack ride-sharing app built and deployed entirely on AWS. React frontend with AWS Amplify; backend API on Lambda + API Gateway; auth via Cognito (JWT); DynamoDB for persistence. Create/join rides with secure approvals and Google Maps integration.',
    tech: ['React', 'AWS Amplify', 'Lambda', 'API Gateway', 'Cognito', 'DynamoDB'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1470&q=80',
    links: {
      github: 'https://github.com/aswinjojo/serverless-ride-sharing-platform-aws',
      live: '',
      caseStudy: ''
    },
    visibility: 'public',
    internalContext: null
  },
  {
    id: 'order-eats',
    title: 'OrderEats',
    description: 'Online food ordering platform with menu browsing, cart, and checkout. MERN stack with JWT auth, Stripe payments, and a separate admin panel for managing menu items and order status. Role-based access, image uploads, and REST APIs.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Vite'],
    image: 'img/order-eats.png',
    links: {
      github: 'https://github.com/aswinjojo/OrderEats',
      live: '',
      caseStudy: ''
    },
    visibility: 'public',
    internalContext: null
  },
  {
    id: 'pbpartners',
    title: 'Pbpartners Website',
    description: 'Full-time project at Policybazaar. Agent portal (POSP) for leads, renewals, claims, and support tickets. Renewals UI/UX improvements drove +20% policy renewals; real-time contest leaderboard and ticketing/claims modules.',
    tech: ['Next.js', 'Node.js', 'MySQL', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80',
    links: {
     
      live: 'https://www.pbpartners.com/',
  
    },
    visibility: 'internal',
    internalContext: 'job'
  },
  {
    id: 'ai-whatsapp-chatbot',
    title: 'AI WhatsApp ChatBot',
    description: 'WhatsApp bot with OpenAI integration and on-prem APIs. Context-aware responses via webhook flows; automated policy mapping improved throughput by 50%.',
    tech: ['Node.js', 'Express', 'OpenAI', 'WhatsApp API'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=765&q=80',
    links: {
      github: '',
      live: '',
      caseStudy: ''
    },
    visibility: 'internal',
    internalContext: 'job'
  },
  {
    id: 'onboarding-task-manager',
    title: 'Onboarding Task Manager',
    description: 'Workforce onboarding with role-based workflows and real-time chat. Next.js + FastAPI + MySQL on AWS EC2; SSO via Microsoft Entra (Graph API); GitLab CI/CD and WebSockets.',
    tech: ['Next.js', 'FastAPI', 'MySQL', 'AWS EC2', 'GitLab CI/CD', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80',
    links: {
      github: '',
      live: '',
      caseStudy: ''
    },
    visibility: 'internal',
    internalContext: 'internship'
  },
  {
    id: 'ticketing-assistant',
    title: 'Ticketing Assistant',
    description: 'Intelligent ticket classification and routing integrated with ServiceNow. FastAPI backend on AWS EC2; Logistic Regression with feedback-driven retraining; CI/CD and monitoring.',
    tech: ['FastAPI', 'AWS EC2', 'ServiceNow', 'CI/CD', 'ML'],
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1470&q=80',
    links: {
      github: '',
      live: '',
      caseStudy: ''
    },
    visibility: 'internal',
    internalContext: 'internship'
  }
];
