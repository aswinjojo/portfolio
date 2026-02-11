/**
 * Project configuration for portfolio.
 * Update github, live, and caseStudy URLs with your real links.
 * Use "REPLACE_WITH_..." placeholders until you have the URLs.
 */
const PROJECTS = [
  {
    id: 'ride-sharing',
    title: 'Ride Sharing Platform',
    description: 'Serverless app enabling users to create/join rides with secure auth and approvals. Auth via Amazon Cognito (JWT), AWS Lambda + API Gateway + DynamoDB, optimized for concurrent load.',
    tech: ['React', 'Node.js', 'AWS', 'DynamoDB', 'Cognito', 'Lambda'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1470&q=80',
    links: {
      github: 'REPLACE_WITH_RIDE_SHARING_REPO',
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
