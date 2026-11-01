# Artifact 2: Project Walkthrough

## 1. GitHub & Version Control Foundation

> [!NOTE]
> Establish the repository state before scaffolding logic.

- **`.gitignore` Standard:**
  - `node_modules/`
  - `dist/`
  - `dist-ssr/`
  - `*.local`
  - `.env`
  - `.env.*`
  - `.DS_Store`
  - `coverage/`
- **Remote Origin:** `https://github.com/matwal42083/myPortfolio.git`

## 2. Dependencies & Packages

> [!NOTE]
> The following tools are required for this build.

- **Core Environment:** Node.js (v18+ LTS), Vite (`^5.0.0`), React (`^18.3.0`), React DOM (`^18.3.0`)
- **Testing Suite:** Jest (`^29.7.0`), `jest-environment-jsdom` (`^29.7.0`), `@testing-library/react` (`^16.0.0`), `@testing-library/jest-dom` (`^6.4.0`), `@testing-library/user-event` (`^14.5.0`), `@babel/core` (`^7.24.0`), `@babel/preset-env` (`^7.24.0`), `@babel/preset-react` (`^7.24.0`), `babel-jest` (`^29.7.0`), `identity-obj-proxy` (`^3.0.0`)
- **Additional Libraries:** `react-router-dom` (`^6.26.0`)

## 3. Terminal Execution Commands

Run the following commands in the WSL terminal to initialize the environment:

```bash
# 1. Initialize Version Control
git init
# (Create .gitignore here)
git add .
git commit -m "chore: initial project scaffolding"
git branch -M main
git remote add origin https://github.com/matwal42083/myPortfolio.git
git push -u origin main
```

### 2. Initialize project & install testing dependencies

```bash
# 2. Scaffold React + Vite Starter in a temporary staging folder to preserve ./artifacts/
npm create vite@latest temp-vite -- --template react
cp -r temp-vite/* .
cp temp-vite/.gitignore .
rm -rf temp-vite

# 3. Install Core Runtime Dependencies (React Router)
npm install react-router-dom --no-audit

# 4. Install Jest & React Testing Library Suite (Mandatory TDD Stack)
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @babel/core @babel/preset-env @babel/preset-react babel-jest identity-obj-proxy --no-audit

# 5. Create Core Directory & File Skeleton
mkdir -p src/components src/pages src/data src/utils __tests__
touch babel.config.cjs jest.config.cjs jest.setup.js
touch src/data/portfolioData.js
touch src/utils/portfolioHelpers.js
touch src/components/Navbar.jsx src/components/Footer.jsx src/components/ProjectCard.jsx
touch src/pages/Home.jsx src/pages/About.jsx src/pages/Credentials.jsx src/pages/Projects.jsx src/pages/Contact.jsx src/pages/NotFound.jsx
touch __tests__/portfolioHelpers.test.js __tests__/App.test.jsx
```

## 4. Scaffolding Order

> [!IMPORTANT]
> Execute these setup steps in this exact sequence to prevent configuration conflicts.

- Initialize Git repository and `.gitignore`.
- Run Vite React template initialization and merge baseline files alongside `./artifacts/`.
- Install `react-router-dom` and Jest/React Testing Library dependencies via Terminal commands above.
- Scaffold core directory structure (`src/components`, `src/pages`, `src/data`, `src/utils`, `__tests__`) and Jest/Babel configuration files.
- Commit clean environment to GitHub.

## 5. 8-Pillar Governance & Dignity Audit Clearance

> [!IMPORTANT]
> **Governance Status:** `Dignity & Privacy Cleared`

- **Data Vectors:**
  - **Public Static Portfolio Metadata (`src/data/portfolioData.js`):** Developer profile, project showcase records (titles, tech stack tags, public GitHub URLs, live demo URLs), education history, development certifications, and public resume/cover letter text. Contains zero third-party PII or secret credentials.
  - **Transient Visitor Contact Input (`src/pages/Contact.jsx`):** Visitor-entered `name`, `email`, and `message` strings inside local React component state (`useState`).
- **Security & Privacy Mechanics:**
  - **Zero Unauthorized Persistence or Exposure:** Visitor contact inputs are validated strictly in-memory on the client, trimmed of leading/trailing whitespace, never written to `localStorage`/`sessionStorage`/cookies, and never logged in plain text to the browser console.
  - **Safe External Link Isolation:** All external links to GitHub repositories, live project previews, and certification verification portals enforce `target="_blank"` paired with `rel="noopener noreferrer"` to prevent reverse tabnabbing and window-opener state leakage.
  - **Environment Secret Isolation:** `.gitignore` strictly excludes `.env` and `.env.*` files so no API keys or private tokens can ever be committed to version control.

