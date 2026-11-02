// ============================================================================
// FILE 1 OF 12: src/data/portfolioData.js
// [SDD-REQ-05 / SDD-REQ-06 / SDD-REQ-07 / SDD-REQ-08] Static Portfolio Datasets
// ============================================================================

export const profileData = {
  // Step 1: Set the property name to 'Alex Morgan' (or a string containing 'Alex Morgan' so App.test.jsx matches the hero heading)
  // Step 2: Set the property role to 'Full-Stack & React Frontend Developer'
  // Step 3: Set the property tagline to a string describing your React, Vite, and Spec-Driven Development focus
  // Step 4: Set the property bio to a string describing your specialization in modular, test-driven React applications
  // Step 5: Set the property resumePdfUrl to '/resume-alex-morgan.pdf'
  // Step 6: Set the property resumeSummary to an object containing:
    // - experience: an array of objects, each with id ('exp-1'), title, organization, period, and highlights (an array of strings)
    // - coreCompetencies: an array of skill summary strings
  // Step 7: Set the property coverLetter to an object containing:
    // - greeting: 'Dear Hiring Manager & Technical Recruiting Team,'
    // - bodyParagraphs: an array of two paragraph strings pitching your engineering portfolio
    // - signOff: 'Sincerely, Alex Morgan'
  // Step 8: Set the property socialLinks to an object containing github, linkedin, and email URL strings
};

export const skillsData = [
  // Step 9: Add first category object: { category: 'Frontend Engineering', items: ['React 18', 'React Router v6', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / Responsive Design'] }
  // Step 10: Add second category object: { category: 'Testing & Quality Assurance', items: ['Jest', 'React Testing Library', 'TDD Red-Green-Refactor', 'Edge-Case Validation'] }
  // Step 11: Add third category object: { category: 'Build Tools & Workflow', items: ['Vite', 'Git & GitHub', 'WSL 2 Ubuntu', 'Antivibe SDD/TDD/LDD'] }
];

export const credentialsData = {
  // Step 12: Set certifications to an array of three certification objects:
    // - Object 1: id ('cert-1'), title ('Front-End Development Libraries Certification'), issuer ('freeCodeCamp'), date ('2025'), skills (array of strings), and verifyUrl (a non-empty HTTPS URL string so certifications[0] is verified)
    // - Object 2: id ('cert-2'), title ('JavaScript Algorithms and Data Structures'), issuer ('freeCodeCamp'), date ('2025'), skills (array of strings), and verifyUrl (a non-empty HTTPS URL string)
    // - Object 3 (Edge Case 3): id ('cert-3'), title ('Full-Stack Testing & Architecture Specialization'), issuer ('Antivibe Engineering Academy'), date ('2026'), skills (array of strings), and verifyUrl set to null so 'In Progress / Verification Pending' is tested
  // Step 13: Set education to an array containing at least one object with id ('edu-1'), institution, program, period, and focus strings
};

export const projectsData = [
  // Step 14: Add first project object:
    // - id: 'proj-1', title: 'React Vite Multi-Page Portfolio', category: 'Frontend', summary: string, techStack: array of strings, liveUrl: 'https://example-portfolio-demo.vercel.app', repoUrl: 'https://github.com/example-developer/myPortfolio', repoBranch: 'main', primaryLanguage: 'JavaScript (JSX)'
  // Step 15: Add second project object (Edge Case 2 - missing liveUrl; leave 'Full-Stack' category with 0 items for Edge Case 3):
    // - id: 'proj-2', title: 'Algorithmic Task Matrix Sandbox', category: 'Practice', summary: string, techStack: array of strings, liveUrl: null (triggers 'Preview Unavailable' badge), repoUrl: 'https://github.com/example-developer/task-matrix-sandbox', repoBranch: 'main', primaryLanguage: 'JavaScript'
];

// NEXT STEP: When you have implemented src/data/portfolioData.js, open src/utils/portfolioHelpers.js
