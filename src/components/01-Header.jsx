
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

function Header({ language, onLanguageChange, theme, activeSection, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinksRef = useRef(null);
  const navIndicatorRef = useRef(null);
  const isSpanish = language === 'es';
  const isDark = theme === 'dark';
  const navItems = [
    { section: 'hero', label: isSpanish ? 'Inicio' : 'Home' },
    { section: 'projects', label: isSpanish ? 'Proyectos' : 'Projects' },
    { section: 'about', label: isSpanish ? 'Sobre mí' : 'About' },
    { section: 'education', label: isSpanish ? 'Educación' : 'Education' },
    { section: 'skills', label: isSpanish ? 'Habilidades' : 'Skills' },
    { section: 'contact', label: isSpanish ? 'Hablemos' : "Let's talk" },
  ];

  const closeMenu = () => setMenuOpen(false);

  useLayoutEffect(() => {
    const navLinks = navLinksRef.current;
    const indicator = navIndicatorRef.current;
    const activeLink = navLinks?.querySelector(`[data-section="${activeSection}"]`);
    if (!navLinks || !indicator || !activeLink) return undefined;

    const updateIndicator = () => {
      if (!navLinks.getClientRects().length) return;

      const navBounds = navLinks.getBoundingClientRect();
      const linkBounds = activeLink.getBoundingClientRect();
      indicator.style.setProperty('--indicator-x', `${linkBounds.left - navBounds.left}px`);
      indicator.style.setProperty('--indicator-y', `${linkBounds.top - navBounds.top}px`);
      indicator.style.setProperty('--indicator-width', `${linkBounds.width}px`);
      indicator.style.setProperty('--indicator-height', `${linkBounds.height}px`);
    };

    updateIndicator();
    const resizeObserver = new ResizeObserver(updateIndicator);
    resizeObserver.observe(navLinks);
    window.addEventListener('resize', updateIndicator);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeSection, isSpanish, menuOpen]);

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
          <a
            href="#hero"
            className={`nav-logo ${activeSection === 'hero' ? 'is-active' : ''}`}
            aria-current={activeSection === 'hero' ? 'page' : undefined}
            onClick={closeMenu}
          >
            <img
              src={isDark ? '/nancore-wordmark-dark.png' : '/nancore-wordmark-light.png'}
              alt="NANCORE"
            />
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
          ref={navLinksRef}
          className={`nav-links ${menuOpen ? 'open' : ''}`}
        >
          <span className="nav-indicator" ref={navIndicatorRef} aria-hidden="true" />
          {navItems.map(({ section, label }) => {
            const isActive = activeSection === section;
            return (
              <a
                key={section}
                href={`#${section}`}
                data-section={section}
                className={`${section === 'contact' ? 'nav-contact' : ''} ${isActive ? 'is-active' : ''}`.trim()}
                aria-current={isActive ? (section === 'hero' ? 'page' : 'location') : undefined}
                onClick={closeMenu}
              >
                {label}{section === 'contact' ? <> <span>↗</span></> : null}
              </a>
            );
          })}

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
