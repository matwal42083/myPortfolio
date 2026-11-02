// ============================================================================
// FILE 6 OF 12: src/pages/Home.jsx
// [SDD-REQ-06] Portfolio Hero View & Quick Recruiter CTAs
// ============================================================================

import React from "react";
// Step 0a (Vite Graphic & Counter Integration): Import { useState } from "react", and import heroImg from "../assets/hero.png", reactLogo from "../assets/react.svg", and viteLogo from "../assets/vite.svg"
import { Link } from "react-router-dom";
import {
  profileData,
  projectsData,
  credentialsData,
} from "../data/portfolioData";

export default function Home() {
  // Step 0b (Interactive Counter): Initialize const [count, setCount] = useState(0) inside Home()
  return (
    // Render a <section> element with className="page-section home-page"
    // Inside <section>, render a <div> with className="hero-banner"
    // Step 0c (3D React + Vite Hero Emblem): Place the <div className="hero"> block (with heroImg, reactLogo, and viteLogo) from App.jsx right at the top of <div className="hero-banner">!
    // Step 0d (Interactive Counter Pill): Place the <button type="button" className="counter" onClick={...}> inside <div className="hero-banner"> (e.g., as a "Recruiter Kudos / Endorsements: {count}" counter or right inside .highlights-strip)!
    // Render a <p className="hero-role"> displaying profileData.role
    // Step 4: Render an <h1> tag containing your full name as text (or {profileData.name} once portfolioData.js is filled out)
    // Step 5: Render a <p className="hero-tagline"> tag containing a 1-sentence pitch about what you build (or {profileData.tagline})
    // Step 6: Render a <div className="hero-cta-group"> containing two <Link> tags:
    // - First link: <Link to="/projects" className="btn-primary"> with the exact text "Explore Project Gallery" inside the tags
    // - Second link: <Link to="/credentials" className="btn-secondary"> with the exact text "View Resume & Credentials" inside the tags
    // Step 7: Render a <div className="highlights-strip"> containing two <div className="highlight-stat"> boxes:
    //- Box 1: Render <strong>2+</strong> and <span>Showcased Projects & GitHub Repos</span>
    // - Box 2: Render <strong>3</strong> and <span>Development Certifications</span>
    <section className="page-section home-page">
      <div className="hero-banner">
        <p className="hero-role">{profileData.role}</p>
        <h1>{profileData.name}</h1>
        <p className="hero-tagline">{profileData.tagline}</p>
        <div className="hero-cta-group">
          <Link to="/projects">Explore Project Gallery</Link>
          <Link to="/credentials">View Resume & Credentials</Link>
        </div>
        <div className="highlights-strip">
          <div className="highlights-stat">
            <strong>
              <span>Showcased Projects</span>
            </strong>
            <strong>
              <span>GitHub Repos</span>
            </strong>
          </div>
          <div className="highlights-stat">
            <strong>
              <span>Development Certifications</span>
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

// LIVE HMR CHECK: Mount <Home /> (or <Route path="/" element={<Home />} />) inside src/App.jsx to verify the Hero Banner and CTAs render live!
// NEXT STEP: Once Home renders cleanly on screen, open src/pages/About.jsx
