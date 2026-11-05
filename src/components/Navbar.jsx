import { useState } from "react";
import { NavLink } from "react-router-dom";

/**
 * Primary navigation header with route links and dynamic dark/light theme toggle.
 * Complies with [SDD-REQ-05] utilizing accessible semantic <nav> and NavLink active indicators.
 */
export default function Navbar() {
  const [navItems] = useState([
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/credentials", label: "Credentials" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ]);

  const [theme, setTheme] = useState("light");

  /**
   * Toggles color scheme and synchronizes with document root and color-scheme meta.
   */
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    const metaTheme = document.querySelector('meta[name="color-scheme"]');
    if (metaTheme) metaTheme.content = newTheme;
    document.documentElement.dataset.theme = newTheme;
  };

  return (
    <header className="site-header">
      <nav aria-label="Primary Navigation" className="navbar">
        <span className="brand-title">Matthew Walton (Matwal) | Portfolio</span>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
            >
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
