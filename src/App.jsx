import { Routes, Route, useLocation, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Credentials from "./pages/Credentials";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import "./App.css";

export function AppRoutes() {
  const location = useLocation();

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
              <li>
                <a href="#hero">Overview</a>
              </li>
              <li>
                <a href="#highlights">Key Highlights</a>
              </li>
              <li>
                <a href="#skills">Skills Matrix</a>
              </li>
              <li>
                <a href="#projects">Showcased Projects</a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* RIGHT COLUMN: Breadcrumbs + Main Content */}
        <main className="content-pane">
         <nav className="breadcrumbNav">
           <ul className="breadcrumbList">
             <li className="crumb">
               <Link to="/" className="crumbLink">Home</Link>
               <span className="crumbSeparator">||</span>
               <span className="crumbCurrent">Developer Portfolio</span>
             </li>

             {(location.pathname === "/about" ||
               location.pathname === "/credentials" ||
               location.pathname === "/projects" ||
               location.pathname === "/contact") && (
               <li className="crumb">
                 <Link to="/about" className="crumbLink">About</Link>
                 <span className="crumbSeparator">||</span>
                 <span className="crumbCurrent">Developer Skills</span>
               </li>
             )}

             {(location.pathname === "/credentials" ||
               location.pathname === "/projects" ||
               location.pathname === "/contact") && (
               <li className="crumb">
                 <Link to="/credentials" className="crumbLink">Credentials</Link>
                 <span className="crumbSeparator">||</span>
                 <span className="crumbCurrent">Education & Resume</span>
               </li>
             )}

             {(location.pathname === "/projects" ||
               location.pathname === "/contact") && (
               <li className="crumb">
                 <Link to="/projects" className="crumbLink">Projects</Link>
                 <span className="crumbSeparator">||</span>
                 <span className="crumbCurrent">Project Gallery</span>
               </li>
             )}

             {location.pathname === "/contact" && (
               <li className="crumb">
                 <Link to="/contact" className="crumbLink">Contact</Link>
                 <span className="crumbSeparator">||</span>
                 <span className="crumbCurrent">Get In Touch</span>
               </li>
             )}
           </ul>
         </nav>

          {/* Dynamic views switch here */}
          <div className="contentView">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/credentials" element={<Credentials />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AppRoutes;
