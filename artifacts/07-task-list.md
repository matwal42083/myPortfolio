# Artifact 7: Task List

> [!TIP]
> **Biological Intelligence (BI) Instructions:**
> Execute these tasks sequentially. Do not move to the next phase until the current phase passes the TDD pre-flight.

## Phase 1: Environment & Scaffolding

- [ ] Run terminal command: `git init` and create `.gitignore` (`node_modules/`, `dist/`, `.env`, `.env.*`, `coverage/`) per Artifact 2 (`02-walkthrough.md`).
- [ ] Scaffold the React + Vite baseline template (`npm create vite@latest temp-vite -- --template react`) and merge files into the project root while preserving `./artifacts/`.
- [ ] Install runtime router dependency: `npm install react-router-dom --no-audit`.
- [ ] Install Jest & React Testing Library TDD suite: `npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @babel/core @babel/preset-env @babel/preset-react babel-jest identity-obj-proxy --no-audit`.
- [ ] Scaffold core directory tree (`src/components`, `src/pages`, `src/data`, `src/utils`, `__tests__`) and create configuration files (`babel.config.cjs`, `jest.config.cjs`, `jest.setup.js`) based on Artifact 4 (`04-architectural-diagram.md`).

## Phase 2: Logic & State (Artifact 5 Alignment)

- [ ] Map state machine nodes from Artifact 5 (`05-logic-flowcharts.md`) to physical files: pure helpers in `src/utils/portfolioHelpers.js`, static datasets in `src/data/portfolioData.js`, and route views in `src/pages/`.
- [ ] Define local component state boundaries: `activeDocTab` (`'resume' | 'cover-letter'`) in `src/pages/Credentials.jsx`, `selectedCategory` (`'All' | 'Practice' | 'Frontend' | 'Full-Stack'`) in `src/pages/Projects.jsx`, and `formData`/`errors`/`isSubmitted` in `src/pages/Contact.jsx`.

## Phase 3: TDD & Code Diffs (Artifact 6 Alignment)

- [ ] Write failing Jest unit test suite in `__tests__/portfolioHelpers.test.js` covering `[SDD-REQ-01]` (`filterProjectsByCategory`), `[SDD-REQ-02]` (`normalizeProjectLinks`), `[SDD-REQ-03]` (`normalizeCredentialStatus`), and `[SDD-REQ-04]` (`validateContactForm`), and run `npx jest __tests__/portfolioHelpers.test.js --watchAll=false` to confirm RED state.
- [ ] Add instructional scaffolding comments (`// Step 1` through `// Step 5`) and implement `src/data/portfolioData.js` and `src/utils/portfolioHelpers.js` per Artifact 6 (`06-code-diff-specs.diff`) to turn `__tests__/portfolioHelpers.test.js` GREEN.
- [ ] Write failing React Testing Library integration test suite in `__tests__/App.test.jsx` covering `[SDD-REQ-05]` through `[SDD-REQ-09]` and all 4 edge cases (404 fallback, missing preview/repo URLs, empty category filter & credential/PDF fallbacks, and contact form validation alerts), and run `npx jest __tests__/App.test.jsx --watchAll=false` to confirm RED state.
- [ ] Add instructional scaffolding comments (`// Step 6` and `// Step 7`) and implement layout & static views (`src/components/Navbar.jsx`, `src/components/Footer.jsx`, `src/pages/Home.jsx`, `src/pages/About.jsx`) per Artifact 6 diff.
- [ ] Add instructional scaffolding comments (`// Step 8`) and implement `src/pages/Credentials.jsx` (Resume/Cover Letter tab switcher, PDF status fallback, Certifications grid, and Education timeline) per Artifact 6 diff.
- [ ] Add instructional scaffolding comments (`// Step 9`) and implement `src/components/ProjectCard.jsx` and `src/pages/Projects.jsx` (side-by-side Live Preview and GitHub Repository showcase cards, category filter buttons, and empty-state reset button) per Artifact 6 diff.
- [ ] Add instructional scaffolding comments (`// Step 10`) and implement `src/pages/Contact.jsx`, `src/pages/NotFound.jsx`, and `src/App.jsx` (`AppRoutes` and `BrowserRouter`) per Artifact 6 diff to turn `__tests__/App.test.jsx` GREEN.

## Phase 4: Final Review & Integration

- [ ] Run the full Jest & React Testing Library test suite (`npx jest --watchAll=false`) to verify all unit and multi-route integration tests pass in the GREEN state.
- [ ] Execute `/sweep` (`av-cleanup-sweeper`) to strip fulfilled `// Step <N>:` instructional comments and re-verify a clean GREEN test run and Vite build.
