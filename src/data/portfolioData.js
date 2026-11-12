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
    name: 'Matthew Walton',
    title: 'Fullstack and Frontend Developer',
    email: 'matwal42083@gmail.com',
    phone: '(417) 401-8145',
    location: '3832 W San Fernando St, Springfield, MO 65803',
    city: 'Springfield, MO',
    githubUrl: 'https://github.com/matwal42083',
    githubLabel: 'GitHub: matwal42083',
    linkedinUrl: 'https://linkedin.com/in/matwal42083',
    linkedinLabel: 'LinkedIn: matwal42083',
    professionalSummary:
      'Certified Fullstack Developer strategically targeting Frontend engineering roles to establish a strong professional foothold and master client-side architecture before scaling into comprehensive backend and fullstack positions. Began coding journey through rigorous self-study in HTML and CSS before graduating from Fullstack Academy in 2023. Driven by a desire to push beyond standard bootcamp curriculum, independently advanced into AI development and architected the Antivibe Code Agentic AI Workflow—championing a strict Specification-Driven (SDD) and Test-Driven Development (TDD) approach. Leverages 18.5 years of patient-focused healthcare and 6 years of strict, metric-driven logistics to bring process-discipline, analytical problem-solving, and cross-functional empathy to software development teams.',
    technicalSkills: [
      {
        category: 'Frontend',
        items: ['JavaScript (ES6+)', 'React', 'HTML5', 'CSS3', 'Vite'],
      },
      {
        category: 'Backend & Database',
        items: ['Node.js', 'Express.js', 'PostgreSQL (3rd Normal Form)'],
      },
      {
        category: 'Testing & Environment',
        items: ['Jest', 'React Testing Library', 'WSL 2 Ubuntu Linux', 'Git', 'GitHub Flow'],
      },
      {
        category: 'Methodologies',
        items: [
          'Specification-Driven Development (SDD)',
          'Test-Driven Development (TDD)',
          'Learn-Driven Development (LDD)',
          'Agentic AI Workflows',
        ],
      },
    ],
    skills: {
      hardSkills: [
        'JavaScript (ES6+)',
        'React',
        'HTML5',
        'CSS3',
        'Vite',
        'Node.js',
        'Express.js',
        'PostgreSQL (3rd Normal Form)',
      ],
      softSkills: [
        'Jest',
        'React Testing Library',
        'WSL 2 Ubuntu Linux',
        'Git',
        'GitHub Flow',
        'Specification-Driven Development (SDD)',
        'Test-Driven Development (TDD)',
        'Learn-Driven Development (LDD)',
        'Agentic AI Workflows',
      ],
    },
    technicalProjects: [
      {
        id: 'proj-arch-1',
        title: 'Antivibe Code Agentic AI Workflow',
        organization: 'Agentic AI & Software Engineering Architecture',
        period: '2025 - Present',
        highlights: [
          'Designed a scalable Biological/Artificial Intelligence workflow, seamlessly transitioning between a foundational 50/50 collaborative partnership and a high-velocity 75/25 autonomous configuration (where the AI scaffolds all function components for increased speed), while retaining core directing, reviewing, and decision-making authority over the AI.',
          'Pioneered "hyper typing" methodologies within the IDE, leveraging AI-driven auto-suggestion and autopilot triggers to rapidly complete syntax (tab-completion) after manually initiating logic, drastically optimizing development velocity.',
          'Implemented a strict "Zero Code Generation" mandate for autonomous agents, forcing AI to generate build specifications, test suites, and line-by-line instructional comments while BI executes final implementation.',
          'Structured a highly organized seven-stage Master Build Artifact pipeline across CLI and IDE surfaces to enforce quality control, architectural integrity, and strict SDD/TDD loops.',
          'Maintained complete transparency and control over code logic by manually driving implementation and rigorously reviewing all AI suggestions, providing the flexibility to scale AI autonomy up or down based on speed requirements.',
        ],
      },
      {
        id: 'proj-arch-2',
        title: 'Developer Portfolio Application',
        organization: 'React, Vite & Jest TDD Architecture',
        period: 'Present',
        highlights: [
          'Building a responsive multi-page web application using React, Vite, and modern CSS practices.',
          'Implementing comprehensive unit and integration testing using Jest and React Testing Library to ensure component reliability.',
        ],
      },
    ],
    experience: [
      {
        id: 'exp-1',
        title: 'Fulfillment Associate',
        organization: 'Amazon STL3, Springfield, MO',
        period: '6 Years',
        highlights: [
          'Executed high-precision logistics and inventory management, consistently adapting to rigorous, metric-driven operational environments.',
          'Operated complex machinery (Order Pickers) in Single and Very Narrow Aisle paths while troubleshooting workflow bottlenecks in real-time.',
        ],
      },
      {
        id: 'exp-2',
        title: 'Certified Nursing Assistant / Behavioral Health Tech',
        organization: 'Lakeland Behavioral Health System & Healthcare Sector',
        period: '18.5 Years',
        highlights: [
          'Delivered direct patient care, consultation, and behavioral support over an 18.5-year career.',
          'Honed advanced communication and de-escalation skills, actively listening to diverse individuals to accurately assess and meet their specific needs.',
          'Maintained strict adherence to protocols, compliance standards, and documentation requirements.',
        ],
      },
    ],
    education: [
      {
        id: 'res-edu-1',
        program: 'Independent AI & Fullstack Development Study',
        institution: 'freeCodeCamp, Codecademy & Agentic AI Research',
        period: 'Present',
        focus:
          'Continuously expanding beyond standard curriculum to master agentic AI development, LLM orchestration, and advanced JavaScript/React paradigms using platforms like freeCodeCamp and Codecademy.',
      },
      {
        id: 'res-edu-2',
        program: 'Fullstack Web Development Certificate',
        institution: 'Fullstack Academy',
        period: 'Feb 2023 – Oct 2023',
        focus:
          'Completed intensive software engineering bootcamp through the Amazon Career Choice program.',
      },
      {
        id: 'res-edu-3',
        program: 'Foundational Web Development',
        institution: 'Self-Directed Study',
        period: 'Prior to 2023',
        focus:
          'Initiated coding journey by independently teaching myself HTML and CSS foundations prior to formal bootcamp enrollment.',
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
    senderName: 'Matthew Walton',
    senderTitle: 'Fullstack & Frontend Developer',
    senderEmail: 'matwal42083@gmail.com',
    senderPhone: '(417) 401-8145',
    senderLocation: '3832 W San Fernando St, Springfield, MO 65803',
    senderCity: 'Springfield, MO',
    senderGithubUrl: 'https://github.com/matwal42083',
    senderGithubLabel: 'github.com/matwal42083',
    senderLinkedinUrl: 'https://linkedin.com/in/matwal42083',
    senderLinkedinLabel: 'linkedin.com/in/matwal42083',
    date: 'November 2026',
    recipientName: 'Hiring Manager',
    recipientTitle: 'Technical Recruiting & Engineering Leadership',
    companyName: 'Prospective Engineering Team',
    subject: 'Fullstack & Frontend Developer Position',
    greeting: 'Dear Hiring Manager,',
    bodyParagraphs: [
      'As a certified Software Engineer and the creator of the Antivibe Code framework, I am writing to apply for the Fullstack & Frontend Developer position. Since graduating from Fullstack Academy’s software development program, I have focused heavily on building robust, responsive, and test-driven user interfaces, specializing in Vanilla ES6+ JavaScript, React, Vite, CSS Modules, and Jest within a WSL 2 Ubuntu environment.',
      'I bring a highly disciplined, process-oriented approach to front-end and full-stack development, shaped by my background in high-volume logistics and behavioral healthcare. Over the past year, I have engineered the Antivibe Code framework—a development methodology built around a 50/50 collaborative partnership between Biological Intelligence (BI) and Artificial Intelligence (AI). Under this framework, I enforce a strict "Zero Code Generation Mandate" for AI, utilizing it strictly for Specification-Driven Development, architectural scaffolding, and failing test suites, while I personally write and execute all application implementation code. This ensures I maintain complete architectural control and a deep, fundamental understanding of the codebase.',
      'Currently, I am developing a responsive, multi-page developer portfolio application that demonstrates my capabilities in modern React architecture and Test-Driven Development. While my long-term trajectory is focused on full-stack engineering, I am currently dedicated to mastering the front-end, aiming to deliver accessible, highly performant, and flawless user experiences.',
      'I am looking for a team that values rigorous engineering standards, continuous learning, and innovative workflows. I would welcome the opportunity to discuss how my technical stack and my unique methodology for human-AI collaborative development can add immediate value to your engineering team.',
    ],
    closing: 'Sincerely,',
    signatureName: 'Matthew Walton',
    signatureTitle: 'Fullstack & Frontend Developer',
    signOff: 'Sincerely, Matthew Walton',
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
      institution: 'Fullstack Academy (Amazon Career Choice)',
      program: 'Full-Stack Software Engineering Bootcamp',
      period: 'Feb 2023 - Oct 2023',
      focus:
        'Completed rigorous 9-month immersive program covering full-stack web development, foundational JavaScript, React, Node.js, CLI navigation, and Git/GitHub collaboration—mastered through core software engineering principles without AI shortcuts.',
    },
    {
      id: 'edu-2',
      institution: 'Codecademy',
      program: 'Frontend & Full-Stack Career Curriculum',
      period: '2024 - Present',
      focus:
        'Continuous self-directed technical training focusing on modern JavaScript (ES6+), React component architecture, and structured full-stack engineering paths.',
    },
    {
      id: 'edu-3',
      institution: 'freeCodeCamp',
      program: 'Verified Developer Certifications & Interactive Labs',
      period: '2024 - Present',
      focus:
        'Extensive hands-on coding curriculum and project verification across Responsive Web Design, JavaScript Algorithms & Data Structures, and modern frontend styling.',
    },
  ],
};

export const projectsData = [
  {
    id: 'proj-cozy-tea',
    title: 'Tea Cozy — Responsive Storefront',
    category: 'Frontend',
    summary:
      'Responsive recreation of Codecademy’s Tea Cozy wireframe project featuring semantic HTML5, CSS Flexbox navigation, a flexible Tea of the Month gallery, and location cards.',
    techStack: ['HTML5', 'CSS3', 'Flexbox', 'Responsive Design'],
    liveUrl: '/demos/cozy-tea/index.html',
    repoUrl: 'https://github.com/matwal42083/tea-cozy-responsive-design',
    repoBranch: 'main',
    primaryLanguage: 'HTML / CSS',
  },
  {
    id: 'proj-paint-store',
    title: 'House Store — Interactive Paint Color Guide',
    category: 'Frontend',
    summary:
      'Responsive color-guide storefront built with semantic HTML5 and CSS media queries showcasing interactive HSL color swatches (Hue, Saturation, and Lightness) for red, green, and blue palettes.',
    techStack: ['HTML5', 'CSS3', 'HSL Color Swatches', 'Media Queries'],
    liveUrl: '/demos/paint-store/index.html',
    repoUrl: 'https://github.com/matwal42083/paint-store',
    repoBranch: 'main',
    primaryLanguage: 'HTML / CSS',
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
