# Artifact 3: Implementation Plan

> [!CAUTION]
> This document dictates the engineering logic. It contains conceptual instructions, not executable code.

## 1. Spec-Driven Development (SDD)

*The blueprint for the implementation logic.*

- **Data Structures:**
  - **`portfolioData` (`src/data/portfolioData.js`):** Exports immutable structured datasets:
    - `profileData`: Object containing `name` (string), `role` (string), `tagline` (string), `bio` (string), `resumePdfUrl` (string | null), `resumeSummary` (object with `experience` array and `coreCompetencies` array), `coverLetter` (object with `greeting`, `bodyParagraphs` array, and `signOff`), and `socialLinks` (object with `github`, `linkedin`, `email`).
    - `skillsData`: Array of category objects `{ category: string, items: string[] }` covering Frontend, Testing & Tooling, and Architecture & Workflow.
    - `credentialsData`: Object containing `certifications` (array of `{ id: string, title: string, issuer: string, date: string, skills: string[], verifyUrl: string | null }`) and `education` (array of `{ id: string, institution: string, program: string, period: string, focus: string }`).
    - `projectsData`: Array of project objects `{ id: string, title: string, category: 'Practice' | 'Frontend' | 'Full-Stack', summary: string, techStack: string[], liveUrl: string | null, repoUrl: string | null, repoBranch: string, primaryLanguage: string }`.
  - **Requirement Specifications:**
    - **`[SDD-REQ-01]` `filterProjectsByCategory` (`src/utils/portfolioHelpers.js`):**
      - *Inputs:* `projects` (`Array<Object>`), `selectedCategory` (`string`).
      - *Outputs:* `Array<Object>` (filtered subset or full array when `selectedCategory` is `'All'` or falsy; returns empty array `[]` if `projects` is not a valid array).
      - *Side Effects:* None (pure function).
    - **`[SDD-REQ-02]` `normalizeProjectLinks` (`src/utils/portfolioHelpers.js`):**
      - *Inputs:* `project` (`Object`).
      - *Outputs:* `Object` with `{ hasLivePreview: boolean, liveHref: string | null, liveLabel: string, hasRepo: boolean, repoHref: string | null, repoLabel: string }`.
      - *Side Effects:* None (pure function).
    - **`[SDD-REQ-03]` `normalizeCredentialStatus` (`src/utils/portfolioHelpers.js`):**
      - *Inputs:* `certification` (`Object`), `resumePdfUrl` (`string | null`).
      - *Outputs:* `Object` with `{ isVerified: boolean, verifyHref: string | null, badgeText: string, hasResumePdf: boolean, resumeFallbackNotice: string }`.
      - *Side Effects:* None (pure function).
    - **`[SDD-REQ-04]` `validateContactForm` (`src/utils/portfolioHelpers.js`):**
      - *Inputs:* `formValues` (`{ name: string, email: string, message: string }`).
      - *Outputs:* `{ isValid: boolean, errors: { name?: string, email?: string, message?: string } }`.
      - *Side Effects:* None (pure function).
    - **`[SDD-REQ-05]` Layout & Navigation (`src/components/Navbar.jsx`, `src/components/Footer.jsx`, `src/App.jsx`):**
      - *Inputs:* Current router location via React Router `NavLink` and `Routes`/`Route`.
      - *Outputs:* Persistent navigation header with links to `/`, `/about`, `/credentials`, `/projects`, and `/contact`, active route aria/class styling, main view outlet, and footer with external social links (`rel="noopener noreferrer"`).
      - *Side Effects:* Updates browser history/route view without full page reload.
    - **`[SDD-REQ-06]` Home & About Views (`src/pages/Home.jsx`, `src/pages/About.jsx`):**
      - *Inputs:* `profileData`, `skillsData`, `projectsData` from `src/data/portfolioData.js`.
      - *Outputs:* Semantic hero banner with recruiter value pitch, featured statistics, quick CTAs to `/projects` and `/credentials`, developer biography, Antivibe SDD/TDD/LDD engineering philosophy, and categorized skills matrix.
      - *Side Effects:* None.
    - **`[SDD-REQ-07]` Credentials, Certifications & Integrated Resume/Cover Letter Hub (`src/pages/Credentials.jsx`):**
      - *Inputs:* `profileData`, `credentialsData`, and helper `normalizeCredentialStatus`.
      - *Outputs:* Interactive document switcher (`activeDocTab` state toggling `'resume'` vs `'cover-letter'`), PDF download action (or inline fallback notice when `resumePdfUrl` is absent), certifications grid with verification badges/links, and education timeline.
      - *Side Effects:* Local React state mutation (`setActiveDocTab`).
    - **`[SDD-REQ-08]` Project Gallery & Side-by-Side GitHub Showcase (`src/components/ProjectCard.jsx`, `src/pages/Projects.jsx`):**
      - *Inputs:* `projectsData`, `filterProjectsByCategory`, `normalizeProjectLinks`.
      - *Outputs:* Category filter bar (`All`, `Practice`, `Frontend`, `Full-Stack`), project count indicator, side-by-side Live Preview panel and GitHub Repository metadata card per project, or an empty-state panel with a `"Reset Filter"` button when zero projects match.
      - *Side Effects:* Local React state mutation (`setSelectedCategory`).
    - **`[SDD-REQ-09]` Contact Form View (`src/pages/Contact.jsx`) & 404 Fallback (`src/pages/NotFound.jsx`):**
      - *Inputs:* User form events (`onChange`, `onSubmit`), `validateContactForm`, and unmatched route URLs (`*`).
      - *Outputs:* Controlled form inputs, accessible error alerts (`role="alert"`) on invalid submission, confirmation banner on valid submission, and a `404 Page Not Found` view with a `"Return Home"` link to `/`.
      - *Side Effects:* Local React state mutations (`setFormData`, `setErrors`, `setIsSubmitted`).

- **State Mutations:**
  - **Route State (`App.jsx`):** Managed declaratively by `react-router-dom` across `/`, `/about`, `/credentials`, `/projects`, `/contact`, and `*`.
  - **Document Reader State (`Credentials.jsx`):** `activeDocTab` (`'resume' | 'cover-letter'`) transitions when the visitor clicks the `"Web Resume"` or `"Cover Letter"` toggle buttons.
  - **Gallery Category State (`Projects.jsx`):** `selectedCategory` (`'All' | 'Practice' | 'Frontend' | 'Full-Stack'`) updates on filter button click and resets to `'All'` via the empty-state reset button.
  - **Contact Form State (`Contact.jsx`):** `formData` (`{ name, email, message }`), `errors` (`{}`), and `isSubmitted` (`boolean`) mutate cleanly on user input and form submission.

- **Core Logic:**
  - Pure utility functions in `src/utils/portfolioHelpers.js` isolate all filtering, URL fallback normalization, and form validation logic from DOM rendering so both unit tests and React components share a single deterministic source of truth.
  - View components consume `portfolioData` and invoke the pure helpers to render resilient UI states that never crash on missing optional URLs or empty category filters.

## 2. Test-Driven Development (TDD)

*The validation criteria that must pass before the SDD logic is considered complete.*

- **Success Conditions:**
  - `portfolioHelpers.test.js` verifies that `filterProjectsByCategory` returns all projects for `'All'` and exact matches for specific categories; `normalizeProjectLinks` and `normalizeCredentialStatus` return enabled metadata when valid URLs exist; and `validateContactForm` returns `{ isValid: true, errors: {} }` for valid name, email, and message payloads.
  - `App.test.jsx` (using **Jest** and **React Testing Library** with `MemoryRouter`) verifies that:
    1. The `Home` route (`/`) renders the developer hero heading and navigation links.
    2. Navigating to `/about` renders the developer biography and categorized skills matrix.
    3. Navigating to `/credentials` renders the Education & Certifications lists, toggles between the `"Web Resume"` and `"Cover Letter"` views, and handles the PDF fallback state.
    4. Navigating to `/projects` renders the side-by-side Live Preview and GitHub Repository showcase cards, filters projects by category, and recovers from an empty category filter.
    5. Navigating to `/contact` renders the contact form and submits successfully when valid input is entered.

- **Failure Conditions & Edge Cases:**
  - **Edge Case 1 (Unmatched Route `404`):** Rendering `App` at `/unknown-route` via `MemoryRouter` must display the `404` heading and a `"Return Home"` link pointing to `/`.
  - **Edge Case 2 (Missing Project Live Preview or GitHub Repo Link):** Passing a project with `liveUrl: null` or `repoUrl: ""` into `normalizeProjectLinks` and `ProjectCard` must render `"Preview Unavailable"` or `"Repo Pending"` badges and disable the missing link rather than rendering a broken anchor tag.
  - **Edge Case 3 (Empty Category Filter & Missing Certification/Resume URL):** Filtering `Projects` by a category with zero items renders `"No projects found in this category"` and a working `"Reset Filter"` button; `Credentials` renders `"In Progress / Verification Pending"` for unlinked certifications and `"PDF Updating — View Web Resume"` when `resumePdfUrl` is empty.
  - **Edge Case 4 (Invalid Contact Form Submission):** Submitting empty fields or a malformed email (e.g., `"invalid-email"`) in `Contact.jsx` prevents submission, preserves typed inputs, and renders explicit `role="alert"` validation messages.

- **Test Suite Routing:**
  - `__tests__/portfolioHelpers.test.js` → Tests `[SDD-REQ-01]`, `[SDD-REQ-02]`, `[SDD-REQ-03]`, and `[SDD-REQ-04]` in `src/utils/portfolioHelpers.js` and dataset integrity in `src/data/portfolioData.js`.
  - `__tests__/App.test.jsx` → Tests `[SDD-REQ-05]`, `[SDD-REQ-06]`, `[SDD-REQ-07]`, `[SDD-REQ-08]`, and `[SDD-REQ-09]` across `src/App.jsx`, `src/components/*`, and `src/pages/*`.

## 3. Learn-Driven Development (LDD)

*The underlying computer science principles and architectural reasoning.*

- **The "Why":**
  - **Separation of Pure Domain Logic from UI Components:** Extracting filtering, link normalization, and form validation into `src/utils/portfolioHelpers.js` keeps time complexity linear $O(n)$ over the project list and constant $O(1)$ for validation/normalization, while making unit testing deterministic before mounting the React DOM tree.
  - **Decoupled Router Configuration:** Separating `AppRoutes` (pure `<Routes>` layout) from the top-level `<BrowserRouter>` wrapper in `src/App.jsx` allows Jest and React Testing Library to inject `<MemoryRouter initialEntries={[...]}>` during testing without browser history collisions, while the live Vite app uses `<BrowserRouter>` seamlessly.

- **Instructional Guidance:**
  - `// Step 1: [SDD-REQ-01] Implement filterProjectsByCategory(projects, selectedCategory) in src/utils/portfolioHelpers.js using Array.isArray guard and Array.prototype.filter to return all items for 'All' or matching category items; verified by __tests__/portfolioHelpers.test.js.`
  - `// Step 2: [SDD-REQ-02] Implement normalizeProjectLinks(project) in src/utils/portfolioHelpers.js by trimming liveUrl and repoUrl strings and returning boolean availability flags and fallback labels ('Preview Unavailable', 'Repo Pending'); verified by __tests__/portfolioHelpers.test.js.`
  - `// Step 3: [SDD-REQ-03] Implement normalizeCredentialStatus(certification, resumePdfUrl) in src/utils/portfolioHelpers.js to derive verification badge status ('Verified Credential' vs 'In Progress / Verification Pending') and PDF availability notice; verified by __tests__/portfolioHelpers.test.js.`
  - `// Step 4: [SDD-REQ-04] Implement validateContactForm(formValues) in src/utils/portfolioHelpers.js to validate non-empty trimmed name/message and regex email format (/^[^\s@]+@[^\s@]+\.[^\s@]+$/), returning { isValid, errors }; verified by __tests__/portfolioHelpers.test.js.`
  - `// Step 5: [SDD-REQ-05] Implement structured portfolio datasets (profileData, skillsData, credentialsData, projectsData) in src/data/portfolioData.js covering practice and full-stack projects, certifications, education, and resume/cover letter content; verified by __tests__/portfolioHelpers.test.js.`
  - `// Step 6: [SDD-REQ-05] Implement Navbar.jsx and Footer.jsx in src/components/ using React Router NavLink for active route semantics and safe external link attributes (rel="noopener noreferrer"); verified by __tests__/App.test.jsx.`
  - `// Step 7: [SDD-REQ-06] Implement Home.jsx and About.jsx in src/pages/ to render the hero pitch, quick navigation CTAs to /projects and /credentials, developer biography, and categorized skills matrix; verified by __tests__/App.test.jsx.`
  - `// Step 8: [SDD-REQ-07] Implement Credentials.jsx in src/pages/ with useState('resume') tab switching between the Web Resume Summary and Cover Letter, PDF status handling via normalizeCredentialStatus, Certifications grid, and Education timeline; verified by __tests__/App.test.jsx.`
  - `// Step 9: [SDD-REQ-08] Implement ProjectCard.jsx and Projects.jsx using filterProjectsByCategory and normalizeProjectLinks to render side-by-side Live Preview and GitHub Repository cards, category filter buttons, and the empty-state reset button; verified by __tests__/App.test.jsx.`
  - `// Step 10: [SDD-REQ-09] Implement Contact.jsx (controlled form with validateContactForm error alerts and submission banner), NotFound.jsx (404 fallback with Link to '/'), and wire all routes in App.jsx; verified by __tests__/App.test.jsx.`

- **Pipeline Handoff:** Conclude cleanly so `av-plan-orchestra` proceeds to Artifact 4 (`04-architectural-diagram.md`).
