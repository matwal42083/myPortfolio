import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  );
}

export default App;

// ============================================================================
// FILE 12 OF 12: src/App.jsx
// [SDD-REQ-05 to SDD-REQ-09] AppRoutes & BrowserRouter Integration
//
// HOW TO INCREMENTALLY MOUNT COMPONENTS ON THE LIVE WELCOME SCREEN AS YOU BUILD:
// 1. Keep the working Vite welcome screen in `function App()` as your live test harness.
// 2. As you complete each component (`Navbar`, `Footer`, `ProjectCard`) and each page
//    (`Home`, `About`, `Credentials`, `Projects`, `Contact`, `NotFound`), import and mount
//    it inside `<BrowserRouter>` in `App.jsx` so you can visually verify it right away via
//    Vite HMR while keeping a known-good working baseline!
// 3. Once every component/page is verified live on screen, remove the temporary Vite
//    welcome elements so `AppRoutes()` and `App()` match Steps 4-11 below.
// ============================================================================

// Step 1: At the top of src/App.jsx, import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Step 2: Import your layout components: Navbar from './components/Navbar' and Footer from './components/Footer'
// Step 3: Import your 6 page components: Home from './pages/Home', About from './pages/About', Credentials from './pages/Credentials', Projects from './pages/Projects', Contact from './pages/Contact', and NotFound from './pages/NotFound'

//export function AppRoutes() {
//return (
// Step 4: Render a <div className="app-shell">
// Step 5: Render <Navbar />
// Step 6: Render a <main className="main-content"> containing a <Routes> wrapper
// Step 7: Inside <Routes>, declare the 5 core <Route> elements:
// - <Route path="/" element={<Home />} />
// - <Route path="/about" element={<About />} />
// - <Route path="/credentials" element={<Credentials />} />
// - <Route path="/projects" element={<Projects />} />
// - <Route path="/contact" element={<Contact />} />
// Step 8: Inside <Routes>, declare the catch-all 404 <Route> element:
// - <Route path="*" element={<NotFound />} />
// Step 9: Below </main>, render <Footer />
// );
//}

// Step 10: (FINAL CUTOVER STEP) When all tests pass in `npx jest --watchAll=false` and you are ready to replace the Vite welcome screen in the browser, update `export default function App()` above to return `<BrowserRouter><AppRoutes /></BrowserRouter>`

// NEXT STEP: Run `npx jest --watchAll=false` to verify all 9 tests across both suites are GREEN!
