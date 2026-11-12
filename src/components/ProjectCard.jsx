import React, { useState } from 'react';
import { normalizeProjectLinks } from '../utils/portfolioHelpers';

/**
 * Side-by-Side Live Preview & GitHub Repository Card
 * Complies with [SDD-REQ-02 / SDD-REQ-08].
 */
export default function ProjectCard({ project }) {
  const linkState = normalizeProjectLinks(project);
  const [showInlinePreview, setShowInlinePreview] = useState(false);

  const isLocalStaticDemo =
    linkState.hasLivePreview && linkState.liveHref.startsWith('/demos/');

  return (
    <article
      className={showInlinePreview ? 'project-card is-expanded' : 'project-card'}
      data-testid={`project-card-${project.id}`}
    >
      <div className="project-card-header">
        <span className="project-category-badge">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="tech-stack-list" aria-label={`${project.title} Tech Stack`}>
          {project.techStack.map((tech) => (
            <li key={tech} className="tech-tag">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {isLocalStaticDemo && showInlinePreview && (
        <div className="project-iframe-wrapper">
          <div className="project-iframe-toolbar">
            <span className="iframe-url-pill">{linkState.liveHref}</span>
            <a
              href={linkState.liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="iframe-open-link"
            >
              Open Fullscreen ↗
            </a>
          </div>
          <iframe
            src={linkState.liveHref}
            title={`${project.title} Live Preview`}
            className="project-live-iframe"
            loading="lazy"
          />
        </div>
      )}

      <div className="project-showcase-split">
        <section className="showcase-pane preview-pane" aria-label="Live Application Preview">
          <h4>Live App Preview</h4>
          <p className="repo-meta">
            {isLocalStaticDemo
              ? 'Static Build • Hosted Demo'
              : linkState.hasLivePreview
              ? 'Production • Live Link'
              : 'Status • Local Build'}
          </p>
          <div className="preview-actions-stack">
            {linkState.hasLivePreview ? (
              <>
                <a
                  href={linkState.liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-preview"
                >
                  {linkState.liveLabel}
                </a>
                {isLocalStaticDemo && (
                  <button
                    type="button"
                    className="btn-inline-preview"
                    onClick={() => setShowInlinePreview((prev) => !prev)}
                  >
                    {showInlinePreview ? 'Hide Inline Preview' : 'Preview Inside Card'}
                  </button>
                )}
              </>
            ) : (
              <span className="fallback-badge" role="status">
                {linkState.liveLabel}
              </span>
            )}
          </div>
        </section>

        <section className="showcase-pane repo-pane" aria-label="GitHub Repository Showcase">
          <h4>GitHub Repository</h4>
          <p className="repo-meta">
            {`${project.repoBranch} • ${project.primaryLanguage}`}
          </p>
          <div className="preview-actions-stack">
            {linkState.hasRepo ? (
              <a
                href={linkState.repoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-repo"
              >
                {linkState.repoLabel}
              </a>
            ) : (
              <span className="fallback-badge" role="status">
                {linkState.repoLabel}
              </span>
            )}
          </div>
        </section>
      </div>
    </article>
  );
}
