// ============================================================================
// FILE 9 OF 12: src/pages/Projects.jsx
// [SDD-REQ-01 / SDD-REQ-08] Filterable Project Gallery & Empty-Category Recovery
// ============================================================================

import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { filterProjectsByCategory } from '../utils/portfolioHelpers';
import ProjectCard from '../components/ProjectCard';

export default function Projects({ customProjects = projectsData }) {
  // Step 1: Initialize a constant named categories set equal to ['All', 'Practice', 'Frontend', 'Full-Stack']
  // Step 2: Initialize state using useState('All') and destructure into [selectedCategory, setSelectedCategory]
  // Step 3: Initialize a constant named visibleProjects set equal to calling filterProjectsByCategory(customProjects, selectedCategory)

  // Step 4: Return a <section> element with className="page-section projects-page"
    // Step 5: Render an <h1> displaying "Project Gallery & GitHub Showcase" and a <p> subtitle
    // Step 6: Render a <div className="filter-bar" role="group" aria-label="Project Category Filter">
      // Step 7: Map over categories; for each category string, render a <button key={category} type="button"> with className={selectedCategory === category ? 'filter-btn active' : 'filter-btn'} and onClick={() => setSelectedCategory(category)} displaying {category}

    // Step 8: Use a ternary checking if visibleProjects.length is greater than 0:
      // - If true: render a <div className="project-gallery-grid"> and map over visibleProjects to render <ProjectCard key={project.id} project={project} />
      // - If false (Edge Case 3 - Empty Category Filter): render a <div className="empty-gallery-state" role="status"> containing:
        // - A <p> displaying "No projects found in this category"
        // - A <button type="button" onClick={() => setSelectedCategory('All')} className="btn-reset-filter"> displaying "Reset Filter"
}

// LIVE HMR CHECK: Add <Route path="/projects" element={<Projects />} /> in src/App.jsx and click "Project Gallery" in the Navbar to test the category filters live!
// NEXT STEP: Once Projects renders cleanly on screen, open src/pages/Contact.jsx
