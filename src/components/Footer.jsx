import React from "react";
import { profileData } from "../data/portfolioData";

/**
 * Footer component displaying current copyright year and external social links.
 * Complies with [SDD-REQ-05] using secure target="_blank" and rel="noopener noreferrer".
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        {`${currentYear} - ${profileData.name} - Built with React, Vite & Antivibe TDD.`}
      </p>
      <div className="footer-links">
        <a
          href={profileData.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile
        </a>
        <a
          href={profileData.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>
      </div>
    </footer>
  );
}
