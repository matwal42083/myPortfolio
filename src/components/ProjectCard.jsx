// ============================================================================
// FILE 5 OF 12: src/components/ProjectCard.jsx
// [SDD-REQ-02 / SDD-REQ-08] Side-by-Side Live Preview & GitHub Repository Card
// ============================================================================

// import React from 'react';
// import { normalizeProjectLinks } from '../utils/portfolioHelpers';

// export default function ProjectCard({ project }) {
// Step 1: Initialize a constant named linkState set equal to calling normalizeProjectLinks(project)

//return (
// Step 2: Render an <article> element with className="project-card" and data-testid={`project-card-${project.id}`}
// Step 3: Render a <div> with className="project-card-header"
// Step 4: Render a <span> with className="project-category-badge" displaying project.category
// Step 5: Render an <h3> displaying project.title
// Step 6: Render a <p> displaying project.summary
// Step 7: Render a <ul> with className="tech-stack-list" and aria-label={`${project.title} Tech Stack`}, mapping over project.techStack to render <li key={tech} className="tech-tag">{tech}</li>

// Step 8: Render a <div> with className="project-showcase-split" for the side-by-side layout
// Step 9: Render the first <section> with className="showcase-pane preview-pane" and aria-label="Live Application Preview"
// Step 10: Render an <h4> displaying "Live App Preview"
// Step 11: Use a ternary evaluating linkState.hasLivePreview:
// - If true: render an <a> with href={linkState.liveHref}, target="_blank", rel="noopener noreferrer", className="btn-preview", displaying linkState.liveLabel
// - If false (Edge Case 2): render a <span className="fallback-badge" role="status"> displaying linkState.liveLabel ('Preview Unavailable')

// Step 12: Render the second <section> with className="showcase-pane repo-pane" and aria-label="GitHub Repository Showcase"
// Step 13: Render an <h4> displaying "GitHub Repository"
// Step 14: Render a <p className="repo-meta"> displaying project.repoBranch and project.primaryLanguage
// Step 15: Use a ternary evaluating linkState.hasRepo:
// - If true: render an <a> with href={linkState.repoHref}, target="_blank", rel="noopener noreferrer", className="btn-repo", displaying linkState.repoLabel
// - If false (Edge Case 2): render a <span className="fallback-badge" role="status"> displaying linkState.repoLabel ('Repo Pending')
// );
//}

// LIVE HMR CHECK: Import ProjectCard and projectsData in src/App.jsx and render <ProjectCard project={projectsData[0]} /> inside the welcome screen to verify the side-by-side card layout!
// NEXT STEP: Once ProjectCard renders cleanly on screen, open src/pages/Home.jsx
