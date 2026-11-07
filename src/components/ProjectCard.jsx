import React from 'react';
import { normalizeProjectLinks } from '../utils/portfolioHelpers';

/**
 * Side-by-Side Live Preview & GitHub Repository Card
 * Complies with [SDD-REQ-02 / SDD-REQ-08].
 */
export default function ProjectCard({ project }) {
  const linkState = normalizeProjectLinks(project);

  return (
    <article className="project-card" data-testid={`project-card-${project.id}`}>
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

      <div className="project-showcase-split">
        <section className="showcase-pane preview-pane" aria-label="Live Application Preview">
          <h4>Live App Preview</h4>
          {linkState.hasLivePreview ? (
            <a
              href={linkState.liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-preview"
            >
              {linkState.liveLabel}
            </a>
          ) : (
            <span className="fallback-badge" role="status">
              {linkState.liveLabel}
            </span>
          )}
        </section>

        <section className="showcase-pane repo-pane" aria-label="GitHub Repository Showcase">
          <h4>GitHub Repository</h4>
          <p className="repo-meta">
            {`${project.repoBranch} • ${project.primaryLanguage}`}
          </p>
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
        </section>
      </div>
    </article>
  );
}
