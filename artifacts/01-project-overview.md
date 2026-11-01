# Artifact 1: Project Overview & Scope

## 1. The Core Problem

A legacy multi-page developer portfolio built with vanilla HTML, CSS, and JavaScript became difficult to maintain, lacked component isolation, and made debugging rendering failures slow and error-prone. Technical recruiters, hiring managers, and engineering peers visiting the portfolio need a fast, cohesive, and reliable way to evaluate practical development projects (both live previews and GitHub source repositories), formal education, development certifications, resume/cover letter credentials, and technical skills—while the developer needs a rock-solid React + Vite starter architecture to rigorously execute and validate the Antivibe Code (SDD, TDD, LDD) engineering workflow.

## 2. The Proposed Solution

Build a modular, multi-page client-side application using **React 18**, **Vite**, and **React Router (`react-router-dom`)** that always initializes from a clean, working baseline so rendering issues are isolated and immediately diagnosable. The application wraps five core views and a catch-all 404 fallback inside a persistent layout (`Navbar` + `Footer`):

1. **Home (`/`)**: Hero introduction tailored for technical recruiters and hiring managers, core value proposition, featured project/credential highlights, and quick-action CTAs to inspect the Project Gallery or view/download the Resume.
2. **About & Skills (`/about`)**: Developer biography, engineering philosophy (including the Antivibe SDD/TDD/LDD methodology), and a categorized technical skills matrix (Frontend, Backend/Tools, Testing & Workflow).
3. **Credentials — Education, Certifications & Resume (`/credentials`)**:
   - **Integrated Resume & Cover Letter Hub**: Interactive view toggle allowing recruiters to switch between the structured Web Resume Summary and the Cover Letter pitch directly on the page, paired with a downloadable PDF Resume action.
   - **Development Certifications Gallery**: Structured cards displaying Certificate Title, Issuing Organization, Issue Date, Skills Validated, and direct verification links.
   - **Education Timeline**: Academic history, bootcamps, and structured coursework milestones.
4. **Project Gallery & GitHub Showcase (`/projects`)**:
   - Filterable catalog (`All`, `Practice`, `Frontend`, `Full-Stack`) supporting both current practice builds and future production projects.
   - **Side-by-Side Showcase**: Displays each project's interactive live preview/snapshot directly alongside its GitHub Repository metadata and source code link so reviewers can audit both UI execution and code quality simultaneously.
5. **Contact (`/contact`)**: Controlled contact form with synchronous client-side validation (`name`, `email`, `message`), submission confirmation state, quick resume access, and direct professional links (GitHub, LinkedIn, Email).
6. **Not Found (`*`)**: Dedicated `404` catch-all route for invalid URLs with a clear recovery link back to `/`.

## 3. Use Cases & Edge Cases

> [!CAUTION]
> The system must account for these exact failure states during the TDD pre-flight.

| Scenario | Expected Behavior | System/UI Fallback |
| :--- | :--- | :--- |
| **Unmatched Route / Broken URL** | Visitor navigates to an unmapped URL path (e.g., `/unknown-route`). | React Router catches `*` and renders the `NotFound` (`404`) view with an accessible `"Return Home"` link pointing to `/`. |
| **Missing Project Preview or GitHub Repo URL** | A practice or work-in-progress project entry in `projectsData` has a missing/empty `liveUrl` or `repoUrl`. | Component remains crash-free, disables the unavailable action button, and renders a `"Preview Unavailable"` or `"Repo Pending"` fallback badge. |
| **Empty Category Filter or Missing Certification/Resume Link** | Visitor selects a project category with zero matches, or a certification/resume entry lacks an external verification or PDF URL. | Gallery renders `"No projects found in this category"` with a `"Reset Filter"` button; Credentials view renders an `"In Progress / Verification Pending"` badge or falls back to the inline Web Resume/Cover Letter tab without throwing errors. |
| **Invalid Contact Form Input** | Visitor submits the contact form with empty required fields (`name`, `message`) or a malformed `email` string. | Form prevents default submission, preserves existing valid inputs, and renders explicit field-level error alerts (`role="alert"`). |
