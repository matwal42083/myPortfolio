// ============================================================================
// FILE 7 OF 12: src/pages/About.jsx
// [SDD-REQ-06] Developer Biography & Categorized Skills Matrix
// ============================================================================

import React from 'react';
import { profileData, skillsData } from '../data/portfolioData';

export default function About() {
  // Step 1: Return a <section> element with className="page-section about-page"
    // Step 2: Render an <h1> displaying "About & Technical Skills"
    // Step 3: Render a <p className="about-bio"> displaying profileData.bio
    // Step 4: Render a <div className="skills-grid">
      // Step 5: Map over skillsData; for each group object, render an <article key={group.category} className="skill-card">
        // Step 6: Inside <article>, render an <h2> displaying group.category
        // Step 7: Render a <ul> containing mapped <li key={skill}>{skill}</li> elements for each skill in group.items
}

// LIVE HMR CHECK: Add <Route path="/about" element={<About />} /> in src/App.jsx and click "About & Skills" in the Navbar to verify About renders live!
// NEXT STEP: Once About renders cleanly on screen, open src/pages/Credentials.jsx
