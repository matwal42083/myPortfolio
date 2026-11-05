// ============================================================================
// FILE 9 OF 12: src/pages/Projects.jsx
// [SDD-REQ-01 / SDD-REQ-08] Filterable Project Gallery & Empty-Category Recovery
// ============================================================================

// Step 1a: Import React, { useState } from 'react'
// Step 1b: Import { projectsData } from '../data/portfolioData'
// Step 1c: Import { filterProjectsByCategory } from '../utils/portfolioHelpers'
// Step 1d: Import ProjectCard from '../components/ProjectCard'

// Step 2: Declare and export default function Projects({ customProjects = projectsData })
// Step 3a: Initialize a const with categories equal to array literal ['All', 'Practice', 'Frontend', 'Full-Stack']
// Step 3b: Initialize a const with [selectedCategory, setSelectedCategory] equal to calling useState('All')
// Step 3c: Initialize a const with visibleProjects equal to calling filterProjectsByCategory(customProjects, selectedCategory)

// Return these following JSX elements:
// Step 4: Render a <section> element with className="page-section projects-page"
// Step 5: Inside <section>, render an <h1> heading displaying text 'Project Gallery & GitHub Showcase'
// Step 6: Render a <div> filter bar with className="filter-bar", role="group", and aria-label="Project Category Filter"
// Step 7: Inside <div className="filter-bar">, map over categories: for each item category, render a <button type="button" key={category}> with:
//   - className equal to condition selectedCategory strictly equal to category (selectedCategory === category), ternary operator 'filter-btn active' or 'filter-btn'
//   - onClick equal to arrow function calling setSelectedCategory(category)
//   - text displaying {category}

// Step 8: Use a ternary evaluating condition visibleProjects.length greater than 0 (visibleProjects.length > 0):
//   - If true: render a <div> with className="project-gallery-grid" mapping over visibleProjects to render <ProjectCard key={project.id} project={project} />
//   - If false: render an empty-state <div> with className="empty-gallery-state" and role="status" containing:
//       - A <p> paragraph displaying text 'No projects found in this category'
//       - A <button type="button" className="btn-reset-filter" onClick={() => setSelectedCategory('All')}> displaying text 'Reset Filter'

// LIVE HMR CHECK: Click "Project Gallery" in the Navbar to test category filtering live!
// NEXT STEP: Once Projects renders cleanly on screen, open src/pages/Contact.jsx
