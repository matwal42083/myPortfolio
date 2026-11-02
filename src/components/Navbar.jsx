// ============================================================================
// FILE 3 OF 12: src/components/Navbar.jsx
// [SDD-REQ-05] Persistent Primary Navigation Header
// ============================================================================

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  // Step 1: Initialize a constant named navItems set equal to an array of 5 route objects:
    // - { to: '/', label: 'Home' }
    // - { to: '/about', label: 'About & Skills' }
    // - { to: '/credentials', label: 'Credentials & Resume' }
    // - { to: '/projects', label: 'Project Gallery' }
    // - { to: '/contact', label: 'Contact' }

  // Step 2: Return a <header> element with className="site-header"
    // Step 3: Inside <header>, render a <nav> element with aria-label="Primary Navigation" and className="navbar"
      // Step 4: Render a <span> with className="brand-title" displaying "Alex Morgan | Portfolio"
      // Step 5: Render a <ul> with className="nav-list"
        // Step 6: Map over navItems; for each item, render an <li> with key={item.to}
          // Step 7: Inside <li>, render a <NavLink> with to={item.to}, className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}, displaying {item.label}
}

// LIVE HMR CHECK: Import BrowserRouter and Navbar in src/App.jsx and mount <BrowserRouter><Navbar /></BrowserRouter> above the welcome screen to verify Navbar renders live!
// NEXT STEP: Once Navbar renders cleanly on screen, open src/components/Footer.jsx
