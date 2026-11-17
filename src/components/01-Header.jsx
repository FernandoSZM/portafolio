
import { useEffect, useState } from 'react';

function Header({ language, onLanguageChange, theme, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isSpanish = language === 'es';
  const isDark = theme === 'dark';

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
        <div className="nav-brand">
          <a href="#hero" className="nav-logo" onClick={closeMenu}>
            NANCORE<span>.</span>
          </a>
        </div>

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
            {isSpanish ? 'Sobre mí' : 'About'}
          </a>

          <a href="#education" onClick={closeMenu}>
            {isSpanish ? 'Educación' : 'Education'}
          </a>

          <a href="#projects" onClick={closeMenu}>
            {isSpanish ? 'Proyectos' : 'Projects'}
          </a>

          <a href="#contact" className="nav-contact" onClick={closeMenu}>
            {isSpanish ? 'Hablemos' : "Let's talk"} <span>↗</span>
          </a>

          <div className="nav-utilities nav-utilities-mobile">
            <LanguageToggle
              isSpanish={isSpanish}
              onLanguageChange={onLanguageChange}
            />
            <ThemeToggle
              isSpanish={isSpanish}
              isDark={isDark}
              onThemeChange={onThemeChange}
            />
          </div>

          <p className="nav-menu-note">
            Alajuela, Costa Rica · {isSpanish ? 'Software y datos' : 'Software & data'}
          </p>
        </div>

        <div className="nav-utilities nav-utilities-desktop">
          <LanguageToggle
            isSpanish={isSpanish}
            onLanguageChange={onLanguageChange}
          />
          <ThemeToggle
            isSpanish={isSpanish}
            isDark={isDark}
            onThemeChange={onThemeChange}
          />
        </div>
      </nav>
    </header>
  );
}

function LanguageToggle({ isSpanish, onLanguageChange }) {
  return (
    <button
      className="language-toggle"
      type="button"
      onClick={() => onLanguageChange(isSpanish ? 'en' : 'es')}
      aria-label={isSpanish ? 'Switch language to English' : 'Cambiar idioma a español'}
      title={isSpanish ? 'Switch language to English' : 'Cambiar idioma a español'}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h11M9.5 3v2m4.2 0c-.5 4-3.1 7.4-7.2 9" />
        <path d="M6.5 8c1.6 2.4 3.8 4.3 6.4 5.5M14 20l4-9 4 9m-6.7-3h5.4" />
      </svg>
    </button>
  );
}

function ThemeToggle({ isSpanish, isDark, onThemeChange }) {
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onThemeChange}
      aria-label={
        isDark
          ? (isSpanish ? 'Cambiar a modo claro' : 'Switch to light mode')
          : (isSpanish ? 'Cambiar a modo oscuro' : 'Switch to dark mode')
      }
      title={
        isDark
          ? (isSpanish ? 'Cambiar a modo claro' : 'Switch to light mode')
          : (isSpanish ? 'Cambiar a modo oscuro' : 'Switch to dark mode')
      }
      aria-pressed={isDark}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.9 13A8.5 8.5 0 0 1 11 3.1 8.5 8.5 0 1 0 20.9 13Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      )}
    </button>
  );
}

export default Header;
