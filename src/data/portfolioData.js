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
  bio: "Hello! I'm Matthew Walton, a web developer who has been working with computers since I was a kid. You will often see me using the online identity Matwal. When I decided to pursue web development, I took the initiative to learn HTML and CSS on my own time using platforms like SoloLearn and Mimo. I also attempted to learn JavaScript through these apps, but I quickly realized I needed a much more structured educational environment to truly advance.",
  bio_2: "To build a professional skill set, I completed a rigorous nine-month Fullstack Academy bootcamp in 2023 through the Amazon Career Choice program. That experience was a massive game-changer for my overall technical abilities. The bootcamp gave me a rock-solid foundation in navigating the command line interface and taught me exactly how to utilize local Git and remote GitHub for real-world version control and professional collaboration. While Fullstack Academy helped me significantly advance my understanding of JavaScript, the language—along with React—actually took a bit more time to fully digest. It was only after graduation, as I continued relentlessly refining my skills through freeCodeCamp and Codecademy, that both JavaScript and React truly clicked for me.",
  bio_3: "Right now, my primary focus is on frontend development. I want to build a strong foundation as a frontend developer before eventually working my way into the backend to become full-stack. I refuse to adopt a fake-it-till-you-make-it mentality. The Systems, Platforms, and Productivity card reflects the modern environments I rely on today. My current development ecosystem revolves around VS Code, WSL2, and Linux Ubuntu, and I streamline daily operations by leveraging Google Sheets, Apps Script, Microsoft Word, and Excel.",
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
        'Gemini',
        'ChatGPT',
        'Gemini Notebook',
        'Claude'
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
      'Frontend'
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
      'GitHub Copilot',
      'Gemini',
      'Codex & ChatGPT',
      'Gemini Notebook',
      'Claude' 
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
      title: 'Responsive Web Design & JavaScript Foundations',
      issuer: 'freeCodeCamp & Codecademy',
      date: '2024 - 2025',
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'Flexbox', 'CSS Grid'],
      verifyUrl: 'https://www.freecodecamp.org/certification/fcc-responsive-web-design',
    },
    {
      id: 'cert-2',
      title: 'JavaScript Algorithms, Data Structures & Intermediate JS',
      issuer: 'freeCodeCamp & Technical Labs',
      date: '2024 - 2025',
      skills: ['JavaScript (ES6+)', 'Algorithms', 'Data Structures', 'OOP', 'Functional Programming'],
      verifyUrl: 'https://www.freecodecamp.org/certification/fcc-javascript-algorithms-data-structures',
    },
    {
      id: 'cert-3',
      title: 'Full-Stack Software Engineering Diploma & React Specialization',
      issuer: 'Fullstack Academy (Amazon Career Choice)',
      date: '2023 - Present',
      skills: ['Full-Stack Development', 'React & Vite', 'Node.js', 'CLI / Terminal', 'Jest TDD'],
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
