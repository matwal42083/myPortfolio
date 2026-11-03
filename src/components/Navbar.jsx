// ============================================================================
// FILE 3 OF 12: src/components/Navbar.jsx
// [SDD-REQ-05] Persistent Primary Navigation Header
// ============================================================================

// import useState; example here
// import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

// export default Navbar; example here
   export default function Navbar() {
// Initialize a constant named navItems set equal to an array of 5 route objects:
// - { to: '/', label: 'Home' }
// - { to: '/about', label: 'About & Skills' }
// - { to: '/credentials', label: 'Credentials & Resume' }
// - { to: '/projects', label: 'Project Gallery' }
// - { to: '/contact', label: 'Contact' }
   const [navItems, setNavItems] = useState([
     { to: '/', label: 'Home' },
     { to: '/about', label: 'About & Skills' },
     { to: '/credentials', label: 'Credentials & Resume' },
     { to: '/projects', label: 'Project Gallery' },
     { to: '/contact', label: 'Contact' },
   ]);
// Step 1b (Dark/Light Mode Toggle):
// - Initialize state [theme, setTheme] using useState('light dark') (or 'dark' / 'light')
      const [theme, setTheme] = useState('light', 'dark');
// - Declare a toggleTheme function that switches between 'dark' and 'light' and updates document.querySelector('meta[name="color-scheme"]').content (and document.documentElement.dataset.theme)
        const toggleTheme = () => {
          const newTheme = theme === 'light' ? 'dark' : 'light';
          setTheme(newTheme);
          document.querySelector('meta[name=["color-scheme"]').content = newTheme;
          document.documentElement.dataset.theme = newTheme;
        }
// return these following JSX elements:
// Step 2: Render a <header> element with className="site-header"
// Step 3: Inside <header>, render a <nav> element with aria-label="Primary Navigation" and className="navbar"
// Step 4: Render a <span> with className="brand-title" displaying "Matthew Walton (Matwal) | Portfolio"
      return(

      <header>
        <nav aria-label="Primary Navigation" className="navbar">
         <span className="brand-title">Matthew Walton (Matwal) | Portfolio</span>
         <ul>
            <NavLink to={item.to} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>item.label</NavLink>
            <button type="button" className="theme-toggle-btn" onClick={toggleTheme}>theme.label</button>
         </ul>
        </nav>
      </header>

// Step 5: Render a <ul> with className="nav-list"
// Step 6: Map over navItems; for each item, render an <li> with key={item.to}
// Step 7: Inside <li>, render a <NavLink> with to={item.to}, className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}, displaying {item.label}
// Step 8 (Theme Toggle Button): Inside <nav>, render a <button type="button" className="theme-toggle-btn" onClick={toggleTheme}> displaying the current mode label (e.g., "Dark / Light Mode")
   );
}

// LIVE HMR CHECK: Import BrowserRouter and Navbar in src/App.jsx and mount <BrowserRouter><Navbar /></BrowserRouter> above the welcome screen to verify Navbar renders live!
// NEXT STEP: Once Navbar renders cleanly on screen, open src/components/Footer.jsx
