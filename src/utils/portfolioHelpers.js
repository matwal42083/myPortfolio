// ============================================================================
// FILE 2 OF 12: src/utils/portfolioHelpers.js
// [SDD-REQ-01 to SDD-REQ-04] Pure Domain Helper Functions
// ============================================================================

export function filterProjectsByCategory(projects, selectedCategory) {
  // Step 1: [SDD-REQ-01] Guard Clause: Check if Array.isArray(projects) is false; if so, return an empty array []
  // Step 2: Check if selectedCategory is falsy or if selectedCategory is strictly equal to 'All'; if so, return projects unchanged
  // Step 3: Return the result of calling projects.filter(), keeping each project where project.category is strictly equal to selectedCategory
}

export function normalizeProjectLinks(project = {}) {
  // Step 4: [SDD-REQ-02] Initialize a constant named cleanLiveUrl: if typeof project.liveUrl is strictly equal to 'string', call project.liveUrl.trim(), otherwise set to ''
  // Step 5: Initialize a constant named cleanRepoUrl: if typeof project.repoUrl is strictly equal to 'string', call project.repoUrl.trim(), otherwise set to ''
  // Step 6: Initialize a constant named hasLivePreview set equal to Boolean(cleanLiveUrl)
  // Step 7: Initialize a constant named hasRepo set equal to Boolean(cleanRepoUrl)
  // Step 8: Return an object with:
    // - hasLivePreview
    // - liveHref: cleanLiveUrl when hasLivePreview is true, otherwise null
    // - liveLabel: 'Launch Live Preview' when hasLivePreview is true, otherwise 'Preview Unavailable'
    // - hasRepo
    // - repoHref: cleanRepoUrl when hasRepo is true, otherwise null
    // - repoLabel: 'View Source on GitHub' when hasRepo is true, otherwise 'Repo Pending'
}

export function normalizeCredentialStatus(certification = {}, resumePdfUrl = null) {
  // Step 9: [SDD-REQ-03] Initialize cleanVerifyUrl: if typeof certification.verifyUrl is strictly equal to 'string', call certification.verifyUrl.trim(), otherwise set to ''
  // Step 10: Initialize cleanPdfUrl: if typeof resumePdfUrl is strictly equal to 'string', call resumePdfUrl.trim(), otherwise set to ''
  // Step 11: Initialize isVerified set equal to Boolean(cleanVerifyUrl) and hasResumePdf set equal to Boolean(cleanPdfUrl)
  // Step 12: Return an object with:
    // - isVerified
    // - verifyHref: cleanVerifyUrl when isVerified is true, otherwise null
    // - badgeText: 'Verified Credential' when isVerified is true, otherwise 'In Progress / Verification Pending'
    // - hasResumePdf
    // - resumeFallbackNotice: 'Download Official Resume (PDF)' when hasResumePdf is true, otherwise 'PDF Updating — View Web Resume'
}

export function validateContactForm(formValues = {}) {
  // Step 13: [SDD-REQ-04] Initialize a constant named errors set equal to {}
  // Step 14: Initialize trimmed strings for name, email, and message (defaulting to '' if not a string)
  // Step 15: If name is empty, set errors.name to 'Name is required.'
  // Step 16: Initialize emailRegex for standard email validation; if email is empty, set errors.email to 'Email is required.'; else if emailRegex.test(email) is false, set errors.email to 'Please enter a valid email address.'
  // Step 17: If message is empty, set errors.message to 'Message cannot be empty.'
  // Step 18: Return an object with isValid (set to whether Object.keys(errors).length is strictly equal to 0) and errors
}

// NEXT STEP: Run `npx jest __tests__/portfolioHelpers.test.js --watchAll=false` to verify GREEN, then open src/components/Navbar.jsx
