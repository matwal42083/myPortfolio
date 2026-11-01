# Artifact 5: Logic & State Flowcharts

## 1. Master System Router & State Machine Topology

```mermaid
stateDiagram-v2
    direction LR
    [*] --> APP_INIT: Vite Mount (src/main.jsx)

    state "AppShell & Router (src/App.jsx [SDD-REQ-05])" as APP_INIT {
        [*] --> RouteMatcher
        RouteMatcher --> HOME_VIEW: path = "/"
        RouteMatcher --> ABOUT_VIEW: path = "/about"
        RouteMatcher --> CREDENTIALS_HUB: path = "/credentials"
        RouteMatcher --> PROJECT_GALLERY: path = "/projects"
        RouteMatcher --> CONTACT_FORM: path = "/contact"
        RouteMatcher --> NOT_FOUND_404: path = "*" (Unmatched)
    }

    HOME_VIEW --> PROJECT_GALLERY: CTA Click ("/projects")
    HOME_VIEW --> CREDENTIALS_HUB: CTA Click ("/credentials")
    NOT_FOUND_404 --> HOME_VIEW: Recovery Link ("Return Home")

    state "Credentials & Resume State Machine [SDD-REQ-03 / 07]" as CREDENTIALS_HUB {
        [*] --> ResumeTabActive: activeDocTab = "resume"
        ResumeTabActive --> CoverLetterTabActive: setActiveDocTab("cover-letter")
        CoverLetterTabActive --> ResumeTabActive: setActiveDocTab("resume")
    }

    state "Project Gallery & Filter State Machine [SDD-REQ-01 / 02 / 08]" as PROJECT_GALLERY {
        [*] --> CategoryAll: selectedCategory = "All"
        CategoryAll --> FilteredResults: Filter Click (Matches > 0)
        CategoryAll --> EmptyCategoryFallback: Filter Click (Matches == 0)
        FilteredResults --> EmptyCategoryFallback: Filter Click (Matches == 0)
        EmptyCategoryFallback --> CategoryAll: Click "Reset Filter"
    }

    state "Contact Validation State Machine [SDD-REQ-04 / 09]" as CONTACT_FORM {
        [*] --> FormEditing: formData = {name, email, message}
        FormEditing --> ValidationCheck: onSubmit(event)
        ValidationCheck --> FormErrorAlerts: isValid == false (errors != {})
        ValidationCheck --> FormSubmittedSuccess: isValid == true (isSubmitted = true)
        FormErrorAlerts --> FormEditing: onChange(event)
    }
```

## 2. Core Logic & State Transitions (`av-logic-mapper` Tracker)

```mermaid
flowchart LR
    %% Antivibe State Tracker Styling
    classDef stateNode fill:#18181b,stroke:#3f3f46,stroke-width:1px,color:#f4f4f5,rx:30,ry:30
    classDef decisionNode fill:#1e3a8a,stroke:#60a5fa,stroke-width:2px,color:#eff6ff
    classDef biCursor fill:#3b82f6,stroke:none,color:#ffffff,rx:15,ry:15
    classDef default color:#a1a1aa

    %% 1. Router & View Resolution (src/App.jsx)
    A(["APP_INIT<br/>BrowserRouter Ready<br/>src/App.jsx"]):::stateNode
    B{"AppRoutes Match<br/>[SDD-REQ-05]<br/>src/App.jsx"}:::decisionNode
    C(["HOME_ABOUT_READY<br/>Static Profile Rendered<br/>Home.jsx | About.jsx"]):::stateNode
    D(["NOT_FOUND_404<br/>Fallback View<br/>src/pages/NotFound.jsx"]):::stateNode

    %% 2. Credentials & Resume Hub Flow (src/pages/Credentials.jsx)
    E{"normalizeCredentialStatus()<br/>[SDD-REQ-03]<br/>activeDocTab: 'resume'"}:::decisionNode
    F(["CREDENTIALS_HUB<br/>setActiveDocTab('resume' | 'cover-letter')<br/>PDF Link Active"]):::stateNode
    G(["CREDENTIAL_FALLBACK<br/>Badge: 'In Progress / Verification Pending'<br/>PDF: 'PDF Updating — View Web Resume'"]):::stateNode

    %% 3. Project Gallery & GitHub Showcase Flow (src/pages/Projects.jsx & ProjectCard.jsx)
    H{"filterProjectsByCategory()<br/>[SDD-REQ-01]<br/>selectedCategory: 'All'"}:::decisionNode
    I{"normalizeProjectLinks()<br/>[SDD-REQ-02]<br/>src/components/ProjectCard.jsx"}:::decisionNode
    J(["GALLERY_SHOWCASE<br/>hasLivePreview & hasRepo<br/>Live Preview + GitHub Repo"]):::stateNode
    K(["EMPTY_CATEGORY_STATE<br/>visibleProjects.length === 0<br/>setSelectedCategory('All')"]):::stateNode

    %% 4. Contact Validation Flow (src/pages/Contact.jsx)
    L{"validateContactForm()<br/>[SDD-REQ-04]<br/>formData: {name, email, message}"}:::decisionNode
    M(["CONTACT_SUBMITTED<br/>isSubmitted: true<br/>errors: {}"]):::stateNode
    N(["CONTACT_ERROR_STATE<br/>isSubmitted: false<br/>errors: {name, email, message}"]):::stateNode

    %% Transition Paths
    A -. "NAVIGATE" .-> B
    B -. "/ or /about [SDD-REQ-06]" .-> C
    B -. "UNMATCHED * [SDD-REQ-09]" .-> D
    D -. "Link to='/'" .-> C

    B -. "/credentials [SDD-REQ-07]" .-> E
    E -. "isVerified: true & hasResumePdf: true" .-> F
    E -. "verifyUrl: null | resumePdfUrl: ''" .-> G
    G -. "setActiveDocTab('cover-letter')" .-> F

    B -. "/projects [SDD-REQ-08]" .-> H
    H -. "visibleProjects.length > 0" .-> I
    H -. "visibleProjects.length === 0" .-> K
    K -. "Reset Filter Click -> 'All'" .-> H
    I -. "Render ProjectCard" .-> J

    B -. "/contact [SDD-REQ-09]" .-> L
    L -. "isValid: true" .-> M
    L -. "isValid: false" .-> N
    N -. "onChange + onSubmit" .-> L
```

## 3. Unidirectional Data Flow & Prop Pipeline (`portfolioData` → Helpers → Views)

```mermaid
flowchart TD
    subgraph DataLayer["1. Immutable Data Layer (src/data/portfolioData.js)"]
        PD["profileData<br/>{ name, role, bio, resumePdfUrl, resumeSummary, coverLetter, socialLinks }"]
        SD["skillsData<br/>[ { category, items[] } ]"]
        CD["credentialsData<br/>{ certifications[], education[] }"]
        PRJ["projectsData<br/>[ { id, title, category, summary, techStack[], liveUrl, repoUrl, repoBranch, primaryLanguage } ]"]
    end

    subgraph HelperLayer["2. Pure Domain Helpers (src/utils/portfolioHelpers.js)"]
        F1["filterProjectsByCategory(projects, selectedCategory)<br/>[SDD-REQ-01] -> Array&lt;Project&gt;"]
        F2["normalizeProjectLinks(project)<br/>[SDD-REQ-02] -> { hasLivePreview, liveHref, liveLabel, hasRepo, repoHref, repoLabel }"]
        F3["normalizeCredentialStatus(cert, resumePdfUrl)<br/>[SDD-REQ-03] -> { isVerified, verifyHref, badgeText, hasResumePdf, resumeFallbackNotice }"]
        F4["validateContactForm(formValues)<br/>[SDD-REQ-04] -> { isValid, errors }"]
    end

    subgraph ViewLayer["3. React Router Views & Stateful Components (src/pages/* & src/components/*)"]
        VHome["Home.jsx & About.jsx<br/>Stateless Presentation"]
        VCred["Credentials.jsx<br/>State: activeDocTab ('resume' | 'cover-letter')"]
        VProj["Projects.jsx<br/>State: selectedCategory ('All' | 'Practice' | 'Frontend' | 'Full-Stack')"]
        VCard["ProjectCard.jsx<br/>Side-by-Side Live Preview + GitHub Repo Split"]
        VContact["Contact.jsx<br/>State: formData, errors, isSubmitted"]
    end

    PD --> VHome
    SD --> VHome
    PD --> VCred
    CD --> VCred
    VCred --> F3
    F3 -->|"Renders Verified Link or Pending Badge"| VCred

    PRJ --> VProj
    VProj --> F1
    F1 -->|"visibleProjects.length > 0"| VCard
    F1 -->|"visibleProjects.length === 0"| EmptyUI["Empty State + Reset Filter Button"]
    VCard --> F2
    F2 -->|"Renders Live/Repo Links or Fallback Badges"| VCard

    VContact -->|"onSubmit(formData)"| F4
    F4 -->|"isValid ? setIsSubmitted(true) : setErrors(errors)"| VContact
```

## 4. Deterministic Agent State-Transition Matrix (CLI & IDE Ingestion Map)

> [!IMPORTANT]
> Downstream agents (`av-cli-conductor`, `av-workflow-ide`, `av-instructional-scaffolder`, and `av-workflow-tdd`) must map every Flowchart Node (`A` through `N`) directly to the exact React state hooks, pure helper return contracts, and Jest/RTL assertions below:

| Flowchart Node(s) | SDD Requirement | Physical File Target | State Variable / Helper Signature | Trigger / Guard Condition | Resulting UI / DOM State & Test Assertion |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`A` → `B` → `C`** | `[SDD-REQ-05]`<br/>`[SDD-REQ-06]` | `src/App.jsx`<br/>`src/components/Navbar.jsx`<br/>`src/pages/Home.jsx`<br/>`src/pages/About.jsx` | `<BrowserRouter>` wrapping `AppRoutes()` with `<Routes>` and `<NavLink>` | Route matches `'/'` or `'/about'` | Renders `Home` hero (`<h1>{profileData.name}</h1>`) or `About` skills grid; active `<NavLink>` receives `'nav-link active'`. |
| **`B` → `D` → `C`** | `[SDD-REQ-09]`<br/>*(Edge Case 1)* | `src/App.jsx`<br/>`src/pages/NotFound.jsx` | `<Route path="*" element={<NotFound />} />` | URL does not match `/`, `/about`, `/credentials`, `/projects`, or `/contact` | Renders `404 - Page Not Found` heading and `<Link to="/">Return Home</Link>` to transition back to `C`. |
| **`B` → `E` → `F` / `G`** | `[SDD-REQ-03]`<br/>`[SDD-REQ-07]`<br/>*(Edge Case 3)* | `src/utils/portfolioHelpers.js`<br/>`src/pages/Credentials.jsx` | `const [activeDocTab, setActiveDocTab] = useState('resume')`<br/>`normalizeCredentialStatus(cert, effectivePdfUrl)` | Tab button click toggles `'resume'` (`data-testid="resume-panel"`) vs `'cover-letter'` (`data-testid="cover-letter-panel"`). Helper checks trimmed `verifyUrl` and `resumePdfUrl`. | When URLs exist (`F`): renders `Verified Credential` and PDF download link. When missing (`G`): renders `'In Progress / Verification Pending'` badge and `'PDF Updating — View Web Resume'` status. |
| **`B` → `H` → `K` → `H`** | `[SDD-REQ-01]`<br/>`[SDD-REQ-08]`<br/>*(Edge Case 3)* | `src/utils/portfolioHelpers.js`<br/>`src/pages/Projects.jsx` | `const [selectedCategory, setSelectedCategory] = useState('All')`<br/>`filterProjectsByCategory(customProjects, selectedCategory)` | Category button click sets `'All'`, `'Practice'`, `'Frontend'`, or `'Full-Stack'`. | If `visibleProjects.length === 0` (`K`), renders `'No projects found in this category'` and `'Reset Filter'` button calling `setSelectedCategory('All')`. |
| **`H` → `I` → `J`** | `[SDD-REQ-02]`<br/>`[SDD-REQ-08]`<br/>*(Edge Case 2)* | `src/utils/portfolioHelpers.js`<br/>`src/components/ProjectCard.jsx` | `normalizeProjectLinks(project)` returning `{ hasLivePreview, liveHref, liveLabel, hasRepo, repoHref, repoLabel }` | Evaluates trimmed `project.liveUrl` and `project.repoUrl` per card in `visibleProjects`. | Renders side-by-side Live App Preview and GitHub Repository panes. Missing `liveUrl` renders `<span role="status">Preview Unavailable</span>`; missing `repoUrl` renders `<span role="status">Repo Pending</span>`. |
| **`B` → `L` → `M` / `N`** | `[SDD-REQ-04]`<br/>`[SDD-REQ-09]`<br/>*(Edge Case 4)* | `src/utils/portfolioHelpers.js`<br/>`src/pages/Contact.jsx` | `const [formData, setFormData] = useState({ name: '', email: '', message: '' })`<br/>`const [errors, setErrors] = useState({})`<br/>`const [isSubmitted, setIsSubmitted] = useState(false)`<br/>`validateContactForm(formData)` | `handleChange` updates `formData[name]`; `handleSubmit` prevents default and evaluates `validateContactForm(formData)`. | If `isValid === false` (`N`): `setErrors(validation.errors)`, `setIsSubmitted(false)`, renders `<p role="alert">` per invalid field. If `isValid === true` (`M`): `setErrors({})`, `setIsSubmitted(true)`, renders confirmation banner. |
