import { useEffect, useState } from 'react';
import heroPhoto from '../assets/profile.png';

const roles = ['Data Architect', 'Data Analyst', 'Systems Engineer'];
const specialties = [
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

function Hero() {
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
  }, [characterCount, isDeleting, roleIndex]);

  const displayedRole = roles[roleIndex].slice(0, characterCount);

  return (
    <section id="hero" className="hero">
      <div className="hero-layout">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            <span>Available for opportunities</span>
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
              Business Informatics graduate designing thoughtful software and turning
              complex data into clear, useful solutions.
            </p>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View projects <span>↗</span>
            </a>

            <a href="#contact" className="button button-secondary">
              Contact me
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
            <span>Software · Data · Architecture</span>
          </div>
        </div>
      </div>

      <div className="hero-specialties" aria-label="Areas of expertise">
        {specialties.map((specialty) => (
          <span key={specialty}>{specialty}</span>
        ))}
      </div>
    </section>
  );
}

export default Hero;
