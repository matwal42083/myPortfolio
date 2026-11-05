/**
 * Static Portfolio Dataset
 * Central source of truth for developer profile, competencies, credentials, and showcased projects.
 * Complies with [SDD-REQ-05 / SDD-REQ-06 / SDD-REQ-07 / SDD-REQ-08].
 */

export const profileData = {
  name: 'Matthew Walton',
  role: 'Fullstack & Frontend Developer with AI',
  techStack: ['React', 'HTML', 'CSS', 'JavaScript'],
  tagline:
    'Building modular, test-driven web applications with React, Vite, and the Antivibe (SDD/TDD/LDD) AI engineering workflow.',
  bio: "Hello! I'm Matthew Walton a.k.a Matwal, this is more of a screen name for myself to keep it unique. I'm a FullStack Developer and have been coding for almost about 5 years now. I started out teaching myself and utilizing online platforms for coding curriculum from Mimo. Until it felt a bit juvenile of a platform for me. Then I found freeCodeCamp and Codecademy. I also attended a 9 month Fullstack coding bootcamp from FullStack Academy X Amazon Career Choice program.",
  resumePdfUrl: '/resume-matthew-walton.pdf',
  resumeSummary: {
    skills: {
      hardSkills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'WSL2',
        'AI Agentic',
        'VS Code',
        'Antigravity 2.0',
        'Antigravity CLI',
      ],
      softSkills: [
        'MS Windows',
        'Google Workspace',
        'Linux Distro Ubuntu',
        'MS & Google Docs/Word',
        'MS Excel',
        'Google Sheets',
        'Apps Script',
      ],
    },
    experience: [
      {
        id: 'exp-1',
        title: 'Independent AI & Full-Stack Developer (Career Launch Portfolio)',
        organization: 'Self-Directed Engineering & Antivibe Framework',
        period: '2025 - Present',
        highlights: [
          'Designed and built the Antivibe 50/50 AI/BI engineering workflow combining Spec-Driven, Test-Driven, and Learn-Driven Development.',
          'Engineered modular multi-page React + Vite web applications verified with automated Jest and React Testing Library suites.',
          'Developed custom WSL2 Linux automation hooks, CLI workflows, and side-by-side GitHub showcase interfaces.',
        ],
      },
    ],
    coreCompetencies: [
      'React & React Router Multi-Page Architecture',
      'Jest & React Testing Library Red-to-Green Workflows',
      'HTML5, Modern CSS3, and ES6+ JavaScript',
      'WSL2 Ubuntu, Git/GitHub Flow, and AI-Assisted Engineering',
    ],
  },
  coverLetter: {
    greeting: 'Dear Hiring Manager & Technical Recruiting Team,',
    bodyParagraphs: [
      'Thank you for visiting my developer portfolio. As an emerging Fullstack & Frontend Developer ready to launch my professional engineering career, I focus on building clean, testable, and maintainable web applications rather than relying on copy-paste shortcuts.',
      'To accelerate my growth and code quality, I created my own Antivibe (SDD/TDD/LDD) methodology inside WSL2 Ubuntu and React + Vite. Every project showcased here pairs a live interactive view with its underlying GitHub repository so you can inspect my code, tests, and commit history firsthand.',
    ],
    signOff: 'Sincerely, Matthew Walton (Matwal)',
  },
  socialLinks: {
    github: 'https://github.com/matwal42083',
    linkedin: 'https://linkedin.com/in/matwal',
    email: 'mailto:matwal42083@gmail.com',
  },
};

export const skillsData = [
  {
    category: 'Hard Skills & Frontend Engineering',
    items: [
      'HTML',
      'CSS',
      'JavaScript (ES6+)',
      'React',
      'React Router',
      'Vite',
    ],
  },
  {
    category: 'AI & Testing Workflow',
    items: [
      'AI Agentic Development',
      'Antigravity 2.0',
      'Antigravity CLI',
      'Antivibe SDD/TDD/LDD',
      'Jest & React Testing Library',
    ],
  },
  {
    category: 'Systems, Platforms & Productivity',
    items: [
      'WSL2 & Linux Ubuntu',
      'VS Code',
      'Git & GitHub Flow',
      'MS Windows',
      'Google Sheets & Apps Script',
      'MS Word & Excel',
    ],
  },
];

export const credentialsData = {
  certifications: [
    {
      id: 'cert-1',
      title: 'Front-End Web Development & JavaScript Foundations',
      issuer: 'Self-Directed Curriculum & Online Labs',
      date: '2025',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      verifyUrl: 'https://github.com/matwal42083',
    },
    {
      id: 'cert-2',
      title: 'AI Agentic Workflow & Antivibe Engineering Architecture',
      issuer: 'Independent R&D Project',
      date: '2026',
      skills: ['WSL2', 'Antigravity 2.0', 'Antigravity CLI', 'Bash Hooks'],
      verifyUrl: 'https://github.com/matwal42083/myPortfolio',
    },
    {
      id: 'cert-3',
      title: 'Full-Stack React & Automated TDD Specialization',
      issuer: 'In Progress — Career Launch Track',
      date: '2026',
      skills: ['React', 'Jest', 'React Testing Library', 'Vite'],
      verifyUrl: null,
    },
  ],
  education: [
    {
      id: 'edu-1',
      institution: 'Independent Software Engineering & AI Development Track',
      program: 'Frontend & Full-Stack Web Development',
      period: '2025 - Present',
      focus:
        'Hands-on mastery of HTML, CSS, JavaScript, React, Linux WSL2 Ubuntu, Git/GitHub worktrees, and Test-Driven Development.',
    },
  ],
};

export const projectsData = [
  {
    id: 'proj-1',
    title: 'Matwal React + Vite Developer Portfolio',
    category: 'Frontend',
    summary:
      'Modular multi-page portfolio built with React, Vite, and React Router featuring an integrated Resume/Cover Letter hub and side-by-side GitHub repository showcase.',
    techStack: ['React', 'Vite', 'React Router', 'Jest', 'CSS'],
    liveUrl: 'https://github.com/matwal42083/myPortfolio',
    repoUrl: 'https://github.com/matwal42083/myPortfolio',
    repoBranch: 'main',
    primaryLanguage: 'JavaScript (JSX)',
  },
  {
    id: 'proj-2',
    title: 'Antivibe TDD & JavaScript Practice Sandbox',
    category: 'Practice',
    summary:
      'Hands-on practice builds demonstrating pure JavaScript state logic, array filtering, form validation, and automated unit testing.',
    techStack: ['JavaScript', 'HTML', 'CSS', 'Jest', 'WSL2'],
    liveUrl: null,
    repoUrl: 'https://github.com/matwal42083',
    repoBranch: 'main',
    primaryLanguage: 'JavaScript',
  },
];
