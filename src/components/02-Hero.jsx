import { useEffect, useState } from 'react';

function Hero({ language }) {
  const isSpanish = language === 'es';
  const description = isSpanish
    ? 'Desarrollo de software, datos y soluciones digitales bien pensadas.'
    : 'Software development, data and thoughtful digital solutions.';
  const [visibleCharacters, setVisibleCharacters] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? description.length
      : 0,
  );

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const isComplete = visibleCharacters === description.length;
    const delay = isComplete ? 2200 : visibleCharacters === 0 ? 500 : 42;
    const timer = window.setTimeout(() => {
      setVisibleCharacters((current) =>
        isComplete ? 0 : current + 1,
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [description, visibleCharacters]);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-name">
          {isSpanish ? 'Software · Datos · Soluciones digitales' : 'Software · Data · Thoughtful digital solutions'}
        </p>

        <h1 aria-label="Fernando Sánchez Moraga">
          <span>Fernando</span>
          <span>Sánchez Moraga</span>
        </h1>

        <p className="hero-manifesto">
          {isSpanish ? 'Transformar la complejidad en claridad.' : 'Turning complexity into clarity.'}
        </p>

        <p className="hero-description" aria-label={description}>
          <span aria-hidden="true">{description.slice(0, visibleCharacters)}</span>
          <span className="hero-caret" aria-hidden="true" />
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-project-link">
            {isSpanish ? 'Explorar proyectos' : 'Explore projects'} <span aria-hidden="true">↗</span>
          </a>

          <a href="#contact" className="hero-contact-link">
            {isSpanish ? 'Hablemos' : "Let's talk"}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
