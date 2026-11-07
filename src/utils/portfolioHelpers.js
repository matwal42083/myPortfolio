/**
 * Pure domain helper functions for the portfolio application.
 * Covers project category filtering, URL normalization, credential verification,
 * and client-side contact form validation.
 * Complies with specifications [SDD-REQ-01] through [SDD-REQ-04].
 */

/**
 * Filters an array of projects by a specified category.
 * Returns all projects if category is 'All' or falsy.
 *
 * @param {Array<Object>} projects - List of project objects.
 * @param {string} selectedCategory - Category string to filter by.
 * @returns {Array<Object>} Filtered list of projects.
 */
export function filterProjectsByCategory(projects, selectedCategory) {
  if (!Array.isArray(projects)) {
    return [];
  }

  if (!selectedCategory || selectedCategory === 'All') {
    return projects;
  }

  return projects.filter((project) => project.category === selectedCategory);
}

/**
 * Normalizes live preview and repository URLs for project showcase cards.
 * Computes availability flags and UI labels.
 *
 * @param {Object} project - Project data object.
 * @returns {Object} Normalized link state object.
 */
export function normalizeProjectLinks(project = {}) {
  const cleanLiveUrl =
    typeof project.liveUrl === 'string' ? project.liveUrl.trim() : '';
  const cleanRepoUrl =
    typeof project.repoUrl === 'string' ? project.repoUrl.trim() : '';

  const hasLivePreview = Boolean(cleanLiveUrl);
  const hasRepo = Boolean(cleanRepoUrl);

  return {
    hasLivePreview,
    liveHref: hasLivePreview ? cleanLiveUrl : null,
    liveLabel: hasLivePreview ? 'Launch Live Preview' : 'Preview Unavailable',
    hasRepo,
    repoHref: hasRepo ? cleanRepoUrl : null,
    repoLabel: hasRepo ? 'View Source on GitHub' : 'Repo Pending',
  };
}

/**
 * Evaluates certification verification and official resume PDF status.
 * Provides fallback UI labels for unverified credentials or pending PDFs.
 *
 * @param {Object} certification - Certification credential object.
 * @param {string|null} resumePdfUrl - Path or URL to official resume PDF.
 * @returns {Object} Normalized credential status object.
 */
export function normalizeCredentialStatus(certification = {}, resumePdfUrl = null) {
  const cleanVerifyUrl =
    typeof certification.verifyUrl === 'string'
      ? certification.verifyUrl.trim()
      : '';
  const cleanPdfUrl =
    typeof resumePdfUrl === 'string' ? resumePdfUrl.trim() : '';

  const isVerified = Boolean(cleanVerifyUrl);
  const hasResumePdf = Boolean(cleanPdfUrl);

  return {
    isVerified,
    verifyHref: isVerified ? cleanVerifyUrl : null,
    badgeText: isVerified
      ? 'Verified Credential'
      : 'In Progress / Verification Pending',
    hasResumePdf,
    resumeFallbackNotice: hasResumePdf
      ? 'Download Official Resume (PDF)'
      : 'PDF Updating — View Web Resume',
  };
}

/**
 * Synchronously validates contact form input values.
 *
 * @param {Object} formValues - Form values object containing name, email, and message.
 * @returns {{ isValid: boolean, errors: Object }} Validation result and error map.
 */
export function validateContactForm(formValues = {}) {
  const errors = {};

  const name = typeof formValues.name === 'string' ? formValues.name.trim() : '';
  const email = typeof formValues.email === 'string' ? formValues.email.trim() : '';
  const message = typeof formValues.message === 'string' ? formValues.message.trim() : '';

  if (!name) {
    errors.name = 'Name is required.';
  } else if (name.length < 3) {
    errors.name = 'Name must be at least 3 characters long.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = 'Email is required.';
  } else if (email.length < 3 || !emailRegex.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!message) {
    errors.message = 'Message cannot be empty.';
  } else if (message.length < 3) {
    errors.message = 'Message must be at least 3 characters long.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
