// ============================================================================
// FILE 5 OF 12: src/components/ProjectCard.jsx
// [SDD-REQ-02 / SDD-REQ-08] Side-by-Side Live Preview & GitHub Repository Card
// ============================================================================

// Step 1a: Import React from 'react'
// Step 1b: Import { normalizeProjectLinks } from '../utils/portfolioHelpers'

// Step 2: Declare and export default function ProjectCard destructuring property { project }
// Step 3: Inside the function, initialize a const with linkState equal to calling normalizeProjectLinks(project)

// Return these following JSX elements:
// Step 4: Render an <article> element with className="project-card" and data-testid template string `project-card-${project.id}`
// Step 5: Inside <article>, render a <div> container with className="project-card-header"
// Step 6: Render a <span> badge with className="project-category-badge" displaying variable project.category
// Step 7: Render an <h3> heading displaying variable project.title
// Step 8: Render a <p> description displaying variable project.summary
// Step 9: Render a <ul> list with className="tech-stack-list" and aria-label template string `${project.title} Tech Stack`
// Step 10: Inside <ul>, map over project.techStack: for each item tech, render an <li> with key={tech} and className="tech-tag" displaying {tech}

// Step 11: Render a <div> split-container with className="project-showcase-split"
// Step 12: Inside split-container, render a <section> with className="showcase-pane preview-pane" and aria-label="Live Application Preview"
// Step 13: Inside preview-pane, render an <h4> heading displaying text 'Live App Preview'
// Step 14: Use a ternary evaluating condition linkState.hasLivePreview:
//   - If true: render an <a> anchor with href={linkState.liveHref}, target="_blank", rel="noopener noreferrer", className="btn-preview", displaying text {linkState.liveLabel}
//   - If false: render a <span className="fallback-badge" role="status"> displaying text {linkState.liveLabel}

// Step 15: Render a second <section> with className="showcase-pane repo-pane" and aria-label="GitHub Repository Showcase"
// Step 16: Inside repo-pane, render an <h4> heading displaying text 'GitHub Repository'
// Step 17: Render a <p className="repo-meta"> displaying template string `${project.repoBranch} • ${project.primaryLanguage}`
// Step 18: Use a ternary evaluating condition linkState.hasRepo:
//   - If true: render an <a> anchor with href={linkState.repoHref}, target="_blank", rel="noopener noreferrer", className="btn-repo", displaying text {linkState.repoLabel}
//   - If false: render a <span className="fallback-badge" role="status"> displaying text {linkState.repoLabel}

// LIVE HMR CHECK: Import ProjectCard and projectsData in src/App.jsx to visually preview your side-by-side cards!
// NEXT STEP: Once ProjectCard is implemented, open src/pages/Home.jsx
