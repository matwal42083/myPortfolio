// ============================================================================
// FILE 9 OF 12: src/pages/Projects.jsx
// [SDD-REQ-01 / SDD-REQ-08] Filterable Project Gallery & Empty-Category Recovery
// ============================================================================

import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/portfolioData';
import { filterProjectsByCategory } from '../utils/portfolioHelpers';
import ProjectCard from '../components/ProjectCard';

const GITHUB_USERNAME = 'matwal42083';
const GITHUB_REPOS_API = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`;

/**
 * Filterable Project Gallery, Hosted Projects & Live GitHub API Repository Cards
 * Complies with [SDD-REQ-01 / SDD-REQ-08].
 */
export default function Projects({ customProjects = projectsData }) {
  const categories = ['All', 'Practice', 'Frontend', 'Full-Stack'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [githubRepos, setGithubRepos] = useState([]);
  const [reposLoading, setReposLoading] = useState(false);
  const [reposError, setReposError] = useState(null);

  const visibleProjects = filterProjectsByCategory(customProjects, selectedCategory);

  useEffect(() => {
    // Skip live network fetch inside automated Jest environment to prevent unmocked network warnings
    if (
      typeof process !== 'undefined' &&
      process.env &&
      process.env.NODE_ENV === 'test' &&
      typeof fetch === 'function' &&
      !fetch._isMockFunction
    ) {
      return;
    }
    if (typeof fetch !== 'function') return;

    let isMounted = true;
    setReposLoading(true);
    setReposError(null);

    fetch(GITHUB_REPOS_API)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`GitHub API responded with status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (isMounted && Array.isArray(data)) {
          const nonForks = data.filter((repo) => !repo.fork);
          setGithubRepos(nonForks.length > 0 ? nonForks : data);
          setReposLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setReposError(err.message || 'Unable to load GitHub repositories.');
          setReposLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="page-section projects-page">
      <h1>Project Gallery & GitHub Showcase</h1>

      {/* SECTION 1: Hosted & Showcased Projects with Category Filter */}
      <div className="projects-showcase-block">
        <div className="projects-section-header">
          <div>
            <h2>Hosted Projects & Interactive Previews</h2>
            <p className="projects-section-sub">
              Filter showcased builds and launch live hosted applications side-by-side with source metadata.
            </p>
          </div>
          <div className="filter-bar" role="group" aria-label="Project Category Filter">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={selectedCategory === category ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {visibleProjects.length > 0 ? (
          <div className="project-gallery-grid">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="empty-gallery-state" role="status">
            <p>No projects found in this category</p>
            <button
              type="button"
              className="btn-reset-filter"
              onClick={() => setSelectedCategory('All')}
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      {/* SECTION 2: Live GitHub API Repository Cards */}
      <div className="github-repos-section" aria-label="Live GitHub Repositories">
        <div className="projects-section-header">
          <div>
            <h2>Live GitHub Repositories (@{GITHUB_USERNAME})</h2>
            <p className="projects-section-sub">
              Fetched directly from the GitHub REST API — displaying real-time repositories, branches, and languages.
            </p>
          </div>
          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github-profile"
          >
            View All on GitHub ↗
          </a>
        </div>

        {reposLoading && (
          <div className="repos-status-box" role="status">
            <p>Fetching live repositories from GitHub API (@{GITHUB_USERNAME})...</p>
          </div>
        )}

        {reposError && (
          <div className="repos-status-box repos-error-box" role="alert">
            <p>{reposError}</p>
          </div>
        )}

        {!reposLoading && !reposError && githubRepos.length > 0 && (
          <div className="github-repos-grid">
            {githubRepos.map((repo) => (
              <article key={repo.id} className="github-repo-card">
                <div className="repo-card-top">
                  <div className="repo-title-row">
                    <h3 className="repo-card-name">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                      </a>
                    </h3>
                    <span className="repo-visibility-badge">
                      {repo.private ? 'Private' : 'Public'}
                    </span>
                  </div>
                  <p className="repo-card-desc">
                    {repo.description ||
                      'Source repository maintained in the Matwal software engineering workspace.'}
                  </p>
                </div>

                <div className="repo-card-bottom">
                  <div className="repo-meta-row">
                    {repo.language && (
                      <span className="repo-lang-badge">
                        <span className="lang-dot" aria-hidden="true" />
                        {repo.language}
                      </span>
                    )}
                    <span className="repo-branch-tag">
                      ⎇ {repo.default_branch || 'main'}
                    </span>
                    {repo.stargazers_count > 0 && (
                      <span className="repo-stat-tag">★ {repo.stargazers_count}</span>
                    )}
                    {repo.updated_at && (
                      <span className="repo-updated-tag">
                        Updated {new Date(repo.updated_at).toLocaleDateString()}
                      </span>
                    )}
                  </div>

                  <div className="repo-card-actions">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-repo-card"
                    >
                      Open Repository
                    </a>
                    {repo.homepage && repo.homepage.trim() !== '' && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-repo-live"
                      >
                        Live Hosted App ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
