
import { useEffect, useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="header">
      <nav className="nav">
        <a href="#hero" className="nav-logo" onClick={closeMenu}>
          NANCORE<span>.</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'open' : ''}`}
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" className="nav-contact" onClick={closeMenu}>
            Let&apos;s talk <span>↗</span>
          </a>

          <p className="nav-menu-note">Costa Rica · Software &amp; data</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
