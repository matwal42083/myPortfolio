// ============================================================================
// FILE 8 OF 12: src/pages/Credentials.jsx
// [SDD-REQ-03 / SDD-REQ-07] Integrated Resume/Cover Letter Hub, Certifications & Education
// ============================================================================

import React, { useState } from 'react';
import { profileData, credentialsData } from '../data/portfolioData';
import { normalizeCredentialStatus } from '../utils/portfolioHelpers';

export default function Credentials({ resumePdfOverride }) {
  // Step 1: Initialize state using useState('resume') and destructure into [activeDocTab, setActiveDocTab]
  // Step 2: Initialize a constant named effectivePdfUrl: if resumePdfOverride is not strictly equal to undefined, use resumePdfOverride, otherwise use profileData.resumePdfUrl
  // Step 3: Initialize a constant named resumeStatus set equal to calling normalizeCredentialStatus({}, effectivePdfUrl)

  // Step 4: Return a <section> element with className="page-section credentials-page"
    // Step 5: Render an <h1> displaying "Education, Certifications & Resume"

    // Step 6: Render a <section className="resume-cover-hub" aria-label="Resume and Cover Letter Hub">
      // Step 7: Render a <div className="hub-controls">
        // Step 8: Render a <div className="tab-buttons" role="tablist"> containing two <button type="button" role="tab"> elements:
          // - Button 1: aria-selected={activeDocTab === 'resume'}, onClick={() => setActiveDocTab('resume')}, displaying "Web Resume"
          // - Button 2: aria-selected={activeDocTab === 'cover-letter'}, onClick={() => setActiveDocTab('cover-letter')}, displaying "Cover Letter"
        // Step 9: Use a ternary evaluating resumeStatus.hasResumePdf:
          // - If true: render an <a href={effectivePdfUrl} target="_blank" rel="noopener noreferrer" className="btn-download-pdf"> displaying resumeStatus.resumeFallbackNotice
          // - If false (Edge Case 3): render a <span className="pdf-fallback-badge" role="status"> displaying resumeStatus.resumeFallbackNotice

      // Step 10: Use a ternary evaluating whether activeDocTab is strictly equal to 'resume':
        // - If true: render a <div className="doc-panel resume-panel" data-testid="resume-panel"> containing an <h2> ("Structured Resume Summary") and mapping over profileData.resumeSummary.experience to display each exp.title, exp.organization, exp.period, and exp.highlights list
        // - If false: render a <div className="doc-panel cover-letter-panel" data-testid="cover-letter-panel"> containing an <h2> ("Candidate Cover Letter"), profileData.coverLetter.greeting, mapped paragraphs from profileData.coverLetter.bodyParagraphs, and profileData.coverLetter.signOff

    // Step 11: Render a <section className="certifications-section" aria-label="Development Certifications">
      // Step 12: Render an <h2> displaying "Development Certifications" and a <div className="certifications-grid">
      // Step 13: Map over credentialsData.certifications:
        // - Initialize status set equal to normalizeCredentialStatus(cert, effectivePdfUrl)
        // - Render an <article key={cert.id} className="cert-card"> displaying <h3>{cert.title}</h3>, <p>{cert.issuer} ({cert.date})</p>, <span className="cert-badge">{status.badgeText}</span>, and (when status.isVerified is true) <a href={status.verifyHref} target="_blank" rel="noopener noreferrer">Verify Credential</a>

    // Step 14: Render a <section className="education-section" aria-label="Education Timeline">
      // Step 15: Render an <h2> displaying "Education & Coursework" and map over credentialsData.education to render an <article key={edu.id} className="education-card"> displaying edu.program, edu.institution, edu.period, and edu.focus
}

// LIVE HMR CHECK: Add <Route path="/credentials" element={<Credentials />} /> in src/App.jsx and click "Credentials & Resume" in the Navbar to test the tab toggle live!
// NEXT STEP: Once Credentials renders cleanly on screen, open src/pages/Projects.jsx
