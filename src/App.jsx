
import { useEffect, useState } from 'react';
import Header from './components/01-Header';
import Hero from './components/02-Hero';
import About from './components/03-About';
import Education from './components/05-Education';
import Skills from './components/06-Skills';
import Projects from './components/07-Projects';
import Contact from './components/08-Contact';

import './App.css';

function App() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const sections = document.querySelectorAll('main .section, .footer');
    if (!('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    sections.forEach((section) => {
      section.classList.add('reveal-on-scroll');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Header
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeChange={() =>
          setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
        }
      />

      <main>
        <Hero key={language} language={language} />
        <About language={language} />
        <Education language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>

      <footer className="footer">
        <span>© 2026 Fernando Sánchez Moraga</span>

        <span>
          NANCORE · {language === 'es' ? 'Diseñado y creado con React' : 'Designed & built with React'}
        </span>

        <a href="#hero">
          {language === 'es' ? 'Volver arriba' : 'Back to top'} ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
