import { useState } from "react";

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="GOURAV, home">
            <span className="brand-mark">G<span> </span></span>
            <span className="brand-name">GOURAV/Quality Analyst</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close navigation" : "Open navigation"}</span>
            <span />
            <span />
          </button>
          <div className={`nav-links${menuOpen ? " is-open" : ""}`} id="nav-links">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#approach" onClick={closeMenu}>Approach</a>
            <a className="nav-resume" href="resume.html" onClick={closeMenu}>
              Resume <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default SiteHeader;
