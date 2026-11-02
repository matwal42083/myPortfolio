// ============================================================================
// FILE 6 OF 12: src/pages/Home.jsx
// [SDD-REQ-06] Portfolio Hero View & Quick Recruiter CTAs
// ============================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import { profileData, projectsData, credentialsData } from '../data/portfolioData';

export default function Home() {
  // Step 1: Return a <section> element with className="page-section home-page"
    // Step 2: Inside <section>, render a <div> with className="hero-banner"
      // Step 3: Render a <p className="hero-role"> displaying profileData.role
      // Step 4: Render an <h1> displaying profileData.name (asserted by App.test.jsx)
      // Step 5: Render a <p className="hero-tagline"> displaying profileData.tagline
      // Step 6: Render a <div className="hero-cta-group"> containing:
        // - A <Link to="/projects" className="btn-primary"> displaying "Explore Project Gallery" (asserted by App.test.jsx)
        // - A <Link to="/credentials" className="btn-secondary"> displaying "View Resume & Credentials"

    // Step 7: Render a <div className="highlights-strip"> containing two <div className="highlight-stat"> blocks:
      // - First block: <strong>{projectsData.length}+</strong> and <span>Showcased Projects & GitHub Repos</span>
      // - Second block: <strong>{credentialsData.certifications.length}</strong> and <span>Development Certifications</span>
}

// LIVE HMR CHECK: Mount <Home /> (or <Route path="/" element={<Home />} />) inside src/App.jsx to verify the Hero Banner and CTAs render live!
// NEXT STEP: Once Home renders cleanly on screen, open src/pages/About.jsx
