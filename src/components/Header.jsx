
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="nav">
        <a href="#hero" className="nav-logo" onClick={closeMenu}>
          FSM<span>.</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={closeMenu}>
            <span>01</span> About
          </a>

          <a href="#skills" onClick={closeMenu}>
            <span>02</span> Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            <span>03</span> Projects
          </a>

          <a href="#contact" className="nav-contact" onClick={closeMenu}>
            Let's talk <span>↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;

