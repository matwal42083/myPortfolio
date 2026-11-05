import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import "./App.css";

export function AppRoutes() {
  return (
    <div className="app-shell">
      {/* TOP: Main Header */}
      <Navbar />

      {/* TWO-COLUMN BODY */}
      <div className="app-body">
        {/* LEFT COLUMN: Sidebar Table of Contents */}
        <aside className="sidebar-toc" aria-label="Table of Contents">
          <h3>Quick Navigation</h3>
          <nav>
            <ul>
              <li><a href="#hero">Overview</a></li>
              <li><a href="#highlights">Key Highlights</a></li>
              <li><a href="#skills">Skills Matrix</a></li>
              <li><a href="#projects">Showcased Projects</a></li>
            </ul>
          </nav>
        </aside>

        {/* RIGHT COLUMN: Breadcrumbs + Main Content */}
        <main className="content-pane">
          <nav className="breadcrumbs" aria-label="Breadcrumbs">
            <span className="breadcrumbs-link">Home</span>
            <span className="separator">||</span>
            <span className="current">Developer Portfolio</span>
            <span className="breadcrumbs-link">About</span>
            <span className="separator">||</span>
            <span className="current">Developer Skills</span>
          </nav>

          {/* Dynamic views switch here */}
          <div className="contentView">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AppRoutes;
// Step 1: Import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Step 2: Import layout components: Navbar from './components/Navbar' and Footer from './components/Footer'
// Step 3: Import page components:
//   - Home from './pages/Home'
//   - About from './pages/About'
//   - Credentials from './pages/Credentials'
//   - Projects from './pages/Projects'
//   - Contact from './pages/Contact'
//   - NotFound from './pages/NotFound'

// Step 4: Declare and export function AppRoutes()

// Return these following JSX elements:
// Step 5: Render a <div className="app-shell">
// Step 6: Inside the shell, render <Navbar />
// Step 7: Render a <main className="main-content"> container wrapping <Routes>
// Step 8: Inside <Routes>, declare 6 <Route> elements:
//   - <Route path="/" element={<Home />} />
//   - <Route path="/about" element={<About />} />
//   - <Route path="/credentials" element={<Credentials />} />
//   - <Route path="/projects" element={<Projects />} />
//   - <Route path="/contact" element={<Contact />} />
//   - <Route path="*" element={<NotFound />} />
// Step 9: Render <Footer /> below </main>

// Step 10: In export default function App(), return //<BrowserRouter><AppRoutes /></BrowserRouter>

// NEXT STEP: Run `npx jest --watchAll=false` to verify all 9 tests across both suites are GREEN!
