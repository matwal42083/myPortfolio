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

  return {
    // Step 8: Set hasLivePreview
    // Step 9: Set liveHref to cleanLiveUrl when hasLivePreview is true, otherwise null
    // Step 10: Set liveLabel to 'Launch Live Preview' when hasLivePreview is true, otherwise 'Preview Unavailable'
    // Step 11: Set hasRepo
    // Step 12: Set repoHref to cleanRepoUrl when hasRepo is true, otherwise null
    // Step 13: Set repoLabel to 'View Source on GitHub' when hasRepo is true, otherwise 'Repo Pending'
  };
}

export function normalizeCredentialStatus(certification = {}, resumePdfUrl = null) {
  // Step 14: [SDD-REQ-03] Initialize cleanVerifyUrl: if typeof certification.verifyUrl is strictly equal to 'string', call certification.verifyUrl.trim(), otherwise set to ''
  // Step 15: Initialize cleanPdfUrl: if typeof resumePdfUrl is strictly equal to 'string', call resumePdfUrl.trim(), otherwise set to ''
  // Step 16: Initialize isVerified set equal to Boolean(cleanVerifyUrl) and hasResumePdf set equal to Boolean(cleanPdfUrl)

  return {
    // Step 17: Set isVerified
    // Step 18: Set verifyHref to cleanVerifyUrl when isVerified is true, otherwise null
    // Step 19: Set badgeText to 'Verified Credential' when isVerified is true, otherwise 'In Progress / Verification Pending'
    // Step 20: Set hasResumePdf
    // Step 21: Set resumeFallbackNotice to 'Download Official Resume (PDF)' when hasResumePdf is true, otherwise 'PDF Updating — View Web Resume'
  };
}

export function validateContactForm(formValues = {}) {
  // Step 22: [SDD-REQ-04] Initialize a constant named errors set equal to {}
  // Step 23: Initialize trimmed strings for name, email, and message (defaulting to '' if not a string)
  // Step 24: If name is empty, set errors.name to 'Name is required.'
  // Step 25: Initialize emailRegex for standard email validation; if email is empty, set errors.email to 'Email is required.'; else if emailRegex.test(email) is false, set errors.email to 'Please enter a valid email address.'
  // Step 26: If message is empty, set errors.message to 'Message cannot be empty.'

  return {
    // Step 27: Set isValid to whether Object.keys(errors).length is strictly equal to 0
    // Step 28: Set errors
  };
}

// NEXT STEP: Run `npx jest __tests__/portfolioHelpers.test.js --watchAll=false` to verify GREEN, then open src/components/Navbar.jsx
