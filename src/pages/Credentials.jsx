// ============================================================================
// FILE 8 OF 12: src/pages/Credentials.jsx
// [SDD-REQ-03 / SDD-REQ-07] Integrated Resume/Cover Letter Hub, Certifications & Education
// ============================================================================

// Step 1a: Import React, { useState } from 'react'
// Step 1b: Import { profileData, credentialsData } from '../data/portfolioData'
// Step 1c: Import { normalizeCredentialStatus } from '../utils/portfolioHelpers'

// Step 2: Declare and export default function Credentials({ resumePdfOverride })
// Step 3a: Initialize a const with [activeDocTab, setActiveDocTab] equal to calling useState('resume')
// Step 3b: Initialize a const with effectivePdfUrl equal to condition resumePdfOverride not strictly equal to undefined (resumePdfOverride !== undefined), ternary operator resumePdfOverride or profileData.resumePdfUrl
// Step 3c: Initialize a const with resumeStatus equal to calling normalizeCredentialStatus({}, effectivePdfUrl)

// Return these following JSX elements:
// Step 4: Render a <section> element with className="page-section credentials-page"
// Step 5: Inside <section>, render an <h1> heading displaying text 'Education, Certifications & Resume'

// Step 6: Render a <section> hub with className="resume-cover-hub" and aria-label="Resume and Cover Letter Hub"
// Step 7: Inside the hub, render a <div> container with className="hub-controls"
// Step 8: Render a <div> with className="tab-buttons" and role="tablist" containing two <button type="button" role="tab"> elements:
//   - Tab 1: aria-selected={activeDocTab === 'resume'}, onClick={() => setActiveDocTab('resume')}, displaying text 'Web Resume'
//   - Tab 2: aria-selected={activeDocTab === 'cover-letter'}, onClick={() => setActiveDocTab('cover-letter')}, displaying text 'Cover Letter'
// Step 9: Use a ternary evaluating condition resumeStatus.hasResumePdf:
//   - If true: render an <a> anchor with href={effectivePdfUrl}, target="_blank", rel="noopener noreferrer", className="btn-download-pdf", displaying text {resumeStatus.resumeFallbackNotice}
//   - If false: render a <span className="pdf-fallback-badge" role="status"> displaying text {resumeStatus.resumeFallbackNotice}

// Step 10: Use a ternary evaluating condition activeDocTab strictly equal to 'resume' (activeDocTab === 'resume'):
//   - If true: render a <div className="doc-panel resume-panel" data-testid="resume-panel"> containing an <h2> 'Structured Resume Summary' and displaying profileData.resumeSummary details
//   - If false: render a <div className="doc-panel cover-letter-panel" data-testid="cover-letter-panel"> containing an <h2> 'Candidate Cover Letter', <p> {profileData.coverLetter.greeting}, mapped paragraphs from profileData.coverLetter.bodyParagraphs, and <p> {profileData.coverLetter.signOff}

// Step 11: Render a <section> with className="certifications-section" and aria-label="Development Certifications"
// Step 12: Inside, render an <h2> heading displaying text 'Development Certifications' and a <div> with className="certifications-grid"
// Step 13: Map over credentialsData.certifications: for each item cert, initialize a const with status equal to calling normalizeCredentialStatus(cert, effectivePdfUrl), rendering an <article key={cert.id} className="cert-card"> with:
//   - <h3>{cert.title}</h3>
//   - <p>{cert.issuer} ({cert.date})</p>
//   - <span className="cert-badge">{status.badgeText}</span>
//   - If status.isVerified is true: render an <a> anchor with href={status.verifyHref}, target="_blank", rel="noopener noreferrer" displaying text 'Verify Credential'

// Step 14: Render a <section> with className="education-section" and aria-label="Education Timeline"
// Step 15: Inside, render an <h2> heading displaying text 'Education & Coursework' and map over credentialsData.education: for each item edu, render an <article key={edu.id} className="education-card"> displaying edu.program, edu.institution, edu.period, and edu.focus

// LIVE HMR CHECK: Click "Credentials & Resume" in the Navbar to test the tab toggle live!
// NEXT STEP: Once Credentials renders cleanly on screen, open src/pages/Projects.jsx
