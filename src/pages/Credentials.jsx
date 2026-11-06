import React, { useState } from 'react';
import { profileData, credentialsData } from '../data/portfolioData';
import { normalizeCredentialStatus } from '../utils/portfolioHelpers';

import responsiveWebCert from '../assets/images/Copy of Responsive-Web-Design.jpg';
import jsCert from '../assets/images/Copy of JavaScriptCertification.png';
import jsAlgorithmsCert from '../assets/images/Copy of JavaScriptAlgorithms_DataStructures.png';
import jsIntermediateCert from '../assets/images/Copy of javaScript_intermediate.png';
import fullstackDiploma from '../assets/images/Copy of matthew-walton-fullstackDiploma.jpg';

/**
 * Maps certification IDs to their official certificate images and metadata.
 */
const certImagesMap = {
  'cert-1': [
    {
      src: responsiveWebCert,
      alt: 'freeCodeCamp Responsive Web Design Certification',
      caption: 'freeCodeCamp — Responsive Web Design Certification',
    },
    {
      src: jsCert,
      alt: 'JavaScript Certification',
      caption: 'JavaScript Foundations & Interactive Web Certification',
    },
  ],
  'cert-2': [
    {
      src: jsAlgorithmsCert,
      alt: 'freeCodeCamp JavaScript Algorithms and Data Structures Certification',
      caption: 'freeCodeCamp — JavaScript Algorithms & Data Structures',
    },
    {
      src: jsIntermediateCert,
      alt: 'JavaScript Intermediate Certificate',
      caption: 'JavaScript Intermediate Scope, Closures & Async',
    },
  ],
  'cert-3': [
    {
      src: fullstackDiploma,
      alt: 'Fullstack Academy Software Engineering Diploma',
      caption: 'Fullstack Academy — 9-Month Fullstack Software Engineering Diploma',
    },
  ],
};

/**
 * Interactive Certificate Image Carousel with navigation arrows, dots, and fullscreen preview.
 */
function CertCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentImg = images[currentIndex];

  return (
    <div className="cert-carousel">
      <div className="carousel-slide">
        <img
          src={currentImg.src}
          alt={currentImg.alt || title}
          className="carousel-image"
          title="Click to view full certificate in a new tab"
          onClick={() => window.open(currentImg.src, '_blank')}
        />
        {images.length > 1 && (
          <>
            <button
              type="button"
              className="carousel-btn prev-btn"
              onClick={prevSlide}
              aria-label="Previous certificate"
            >
              &#10094;
            </button>
            <button
              type="button"
              className="carousel-btn next-btn"
              onClick={nextSlide}
              aria-label="Next certificate"
            >
              &#10095;
            </button>
          </>
        )}
      </div>

      <div className="carousel-footer">
        {images.length > 1 && (
          <div className="carousel-controls">
            <div className="carousel-dots">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
            <span className="carousel-counter">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        )}
        <p className="carousel-caption">{currentImg.caption}</p>
      </div>
    </div>
  );
}

/**
 * Credentials, resume/cover letter hub, certifications showcase, and education timeline.
 * Complies with [SDD-REQ-03 / SDD-REQ-07] supporting interactive tab switching,
 * fallback badges, verified credential links, and optional PDF overrides.
 *
 * @param {Object} props
 * @param {string} [props.resumePdfOverride] Optional PDF URL override for testing fallbacks.
 */
export default function Credentials({ resumePdfOverride }) {
  const [activeDocTab, setActiveDocTab] = useState('resume');
  const effectivePdfUrl =
    resumePdfOverride !== undefined ? resumePdfOverride : profileData.resumePdfUrl;
  const resumeStatus = normalizeCredentialStatus({}, effectivePdfUrl);

  return (
    <section className="page-section credentials-page">
      <h1>Education, Certifications & Resume</h1>

      {/* Interactive Resume and Cover Letter Hub */}
      <section className="resume-cover-hub" aria-label="Resume and Cover Letter Hub">
        <div className="hub-controls">
          <div className="tab-buttons" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeDocTab === 'resume'}
              className={activeDocTab === 'resume' ? 'tab-btn active' : 'tab-btn'}
              onClick={() => setActiveDocTab('resume')}
            >
              Web Resume
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeDocTab === 'cover-letter'}
              className={activeDocTab === 'cover-letter' ? 'tab-btn active' : 'tab-btn'}
              onClick={() => setActiveDocTab('cover-letter')}
            >
              Cover Letter
            </button>
          </div>

          {resumeStatus.hasResumePdf ? (
            <a
              href={effectivePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-download-pdf"
            >
              {resumeStatus.resumeFallbackNotice}
            </a>
          ) : (
            <span className="pdf-fallback-badge" role="status">
              {resumeStatus.resumeFallbackNotice}
            </span>
          )}
        </div>

        {/* Dynamic Document Panel */}
        {activeDocTab === 'resume' ? (
          <div className="doc-panel resume-panel" data-testid="resume-panel">
            <h2>Structured Resume Summary</h2>
            {profileData.resumeSummary.experience.map((exp) => (
              <div key={exp.id} className="resume-item">
                <h3>{exp.title} — {exp.organization}</h3>
                <p>{exp.period}</p>
                <ul>
                  {exp.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="doc-panel cover-letter-panel" data-testid="cover-letter-panel">
            <h2>Candidate Cover Letter</h2>
            <p>{profileData.coverLetter.greeting}</p>
            {profileData.coverLetter.bodyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p><strong>{profileData.coverLetter.signOff}</strong></p>
          </div>
        )}
      </section>

      {/* Certifications Grid with Carousels */}
      <section className="certifications-section" aria-label="Development Certifications">
        <h2>Development Certifications</h2>
        <div className="certifications-grid">
          {credentialsData.certifications.map((cert) => {
            const status = normalizeCredentialStatus(cert, effectivePdfUrl);
            return (
              <article key={cert.id} className="cert-card">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer} ({cert.date})</p>

                {/* Certificate Image Carousel */}
                <CertCarousel images={certImagesMap[cert.id]} title={cert.title} />

                {cert.skills && (
                  <div className="cert-skills">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="cert-skill-tag">{skill}</span>
                    ))}
                  </div>
                )}

                <div className="cert-card-footer">
                  <span className="cert-badge">{status.badgeText}</span>
                  {status.isVerified && (
                    <a
                      href={status.verifyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="verify-link"
                    >
                      Verify Credential
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Education Timeline */}
      <section className="education-section" aria-label="Education Timeline">
        <h2>Education & Coursework</h2>
        {credentialsData.education.map((edu) => (
          <article key={edu.id} className="education-card">
            <h3>{edu.program}</h3>
            <p>{edu.institution} ({edu.period})</p>
            <p>{edu.focus}</p>
          </article>
        ))}
      </section>
    </section>
  );
}
