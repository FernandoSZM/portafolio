import { useEffect, useState } from 'react';
import heroPhoto from '../assets/profile.png';

const ROLE_OPTIONS = {
  en: ['Data Architect', 'Data Analyst', 'Systems Engineer'],
  es: ['Arquitecto de datos', 'Analista de datos', 'Ingeniero de sistemas'],
};

function Hero({ language }) {
  const isSpanish = language === 'es';
  const roles = ROLE_OPTIONS[language];
  const specialties = isSpanish
    ? [
        'Ingeniería de software',
        'Arquitectura de software',
        'Analítica de datos',
        'Ingeniería de datos',
        'Python',
        'SQL',
        'ETL y pipelines de datos',
        'Desarrollo de APIs',
        'Computación en la nube',
        'Desarrollo full-stack',
      ]
    : [
        'Software Engineering',
        'Software Architecture',
        'Data Analytics',
        'Data Engineering',
        'Python',
        'SQL',
        'ETL & Data Pipelines',
        'API Development',
        'Cloud Computing',
        'Full-Stack Development',
      ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? roles[0].length
      : 0,
  );
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const currentRole = roles[roleIndex];
    const isComplete = characterCount === currentRole.length;
    const delay = isDeleting ? 45 : isComplete ? 1400 : 85;

    const typingTimer = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
      } else if (isDeleting && characterCount === 0) {
        setIsDeleting(false);
        setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
      } else {
        setCharacterCount((currentCount) =>
          currentCount + (isDeleting ? -1 : 1),
        );
      }
    }, delay);

    return () => window.clearTimeout(typingTimer);
  }, [characterCount, isDeleting, roleIndex, roles]);

  const displayedRole = roles[roleIndex].slice(0, characterCount);

  return (
    <section id="hero" className="hero">
      <div className="hero-layout">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            <span>{isSpanish ? 'Disponible para oportunidades' : 'Available for opportunities'}</span>
          </div>

          <h1>
            Fernando
            <span>Sánchez Moraga</span>
          </h1>

          <div className="hero-code" aria-label={roles.join(', ')}>
            <span className="code-prompt">&gt;</span>
            <span className="typed-role" aria-hidden="true">
              {displayedRole}
              <span className="code-cursor" />
            </span>
          </div>

          <div className="hero-description">
            <p>
              {isSpanish
                ? 'Bachiller en Informática Empresarial; diseño software bien pensado y convierto datos complejos en soluciones claras y útiles.'
                : 'Business Informatics graduate designing thoughtful software and turning complex data into clear, useful solutions.'}
            </p>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              {isSpanish ? 'Ver proyectos' : 'View projects'} <span>↗</span>
            </a>

            <a href="#contact" className="button button-secondary">
              {isSpanish ? 'Contáctame' : 'Contact me'}
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-glow" />
          <div className="hero-image-frame">
            <img src={heroPhoto} alt="Fernando Sánchez Moraga" />
          </div>

          <div className="hero-image-label">
            <span>Alajuela, Costa Rica</span>
            <span>{isSpanish ? 'Software · Datos · Arquitectura' : 'Software · Data · Architecture'}</span>
          </div>
        </div>
      </div>

      <div className="hero-specialties" aria-label={isSpanish ? 'Áreas de especialidad' : 'Areas of expertise'}>
        {specialties.map((specialty) => (
          <span key={specialty}>{specialty}</span>
        ))}
      </div>
    </section>
  );
}

export default Hero;
