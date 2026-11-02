# Developer Portfolio — React + Vite Multi-Page Application

A modular, multi-page developer portfolio engineered with **React**, **Vite**, and **React Router**, built under the **Antivibe Code v3.8.0** framework (**SDD → TDD → LDD**).

## 1. Project Overview & Architecture

Designed for technical recruiters, hiring managers, and engineering peers, this portfolio isolates every view and pure domain helper for immediate diagnostics and zero-crash resilience:

- **Home (`/`)**: Hero introduction, core engineering value proposition, portfolio highlights, and direct CTAs to the Project Gallery and Credentials Hub.
- **About & Skills (`/about`)**: Developer biography, Antivibe SDD/TDD/LDD engineering philosophy, and categorized technical skills matrix.
- **Credentials — Education, Certifications & Resume (`/credentials`)**:
  - **Integrated Resume & Cover Letter Hub**: Interactive tab switcher (`Web Resume` vs. `Cover Letter`) with PDF download or automatic fallback notice.
  - **Development Certifications Gallery**: Verified credential links and fallback badges (`In Progress / Verification Pending`).
  - **Education Timeline**: Structured academic and bootcamp milestones.
- **Project Gallery & Side-by-Side GitHub Showcase (`/projects`)**:
  - Category filtering (`All`, `Practice`, `Frontend`, `Full-Stack`) with empty-category recovery (`Reset Filter`).
  - Side-by-side Live Application Preview and GitHub Repository metadata cards with resilient URL fallbacks (`Preview Unavailable`, `Repo Pending`).
- **Contact (`/contact`)**: Controlled contact form with synchronous validation (`name`, `email`, `message`), accessible `role="alert"` error states, and submission confirmation.
- **Not Found (`*`)**: Catch-all `404` fallback route with recovery link to `/`.

### Physical Directory Structure

```text
myPortfolio/
├── artifacts/                  # 7 Master Build Artifacts (SDD/TDD/LDD Source of Truth)
├── __tests__/                  # Automated Jest & React Testing Library Suites
│   ├── portfolioHelpers.test.js
│   └── App.test.jsx
├── src/
│   ├── components/             # Persistent Layout & UI Cards (Navbar, Footer, ProjectCard)
│   ├── pages/                  # Route Views (Home, About, Credentials, Projects, Contact, NotFound)
│   ├── data/                   # Immutable Static Portfolio Datasets (portfolioData.js)
│   ├── utils/                  # Pure Domain Helpers (portfolioHelpers.js)
│   ├── App.jsx                 # AppRoutes & BrowserRouter Shell
│   └── main.jsx                # Vite React DOM Entry Point
├── babel.config.cjs            # Babel Transpilation Config for Jest
├── jest.config.cjs             # Jest + JSDOM Configuration
├── jest.setup.js               # Testing Library DOM Matchers Setup
└── package.json
```

## 2. Setup & Execution Commands

```bash
# Install dependencies
npm install --no-audit

# Start the Vite development server
npm run dev

# Build for production
npm run build
```

## 3. Test-Driven Development (TDD) Commands

```bash
# Run the full Jest & React Testing Library suite (non-blocking)
npx jest --watchAll=false

# Run pure domain helper unit tests ([SDD-REQ-01] to [SDD-REQ-04])
npx jest __tests__/portfolioHelpers.test.js --watchAll=false

# Run multi-route integration tests ([SDD-REQ-05] to [SDD-REQ-09])
npx jest __tests__/App.test.jsx --watchAll=false
```

## 4. Security & 8-Pillar Governance

- **Zero Unauthorized Persistence:** Visitor contact inputs are validated strictly in-memory on the client and never persisted to browser storage or logged in plain text.
- **Safe External Link Isolation:** External links enforce `target="_blank"` paired with `rel="noopener noreferrer"`.
- **Environment Isolation:** `.gitignore` excludes `.env` and `.env.*` files.
