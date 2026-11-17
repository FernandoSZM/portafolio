
function About({ language }) {
  const isSpanish = language === 'es';
  return (
    <section id="about" className="section about">
      <div className="section-label">
        <p>{isSpanish ? 'Sobre mí' : 'About me'}</p>
      </div>

      <div className="about-content">
        <h2>
          {isSpanish ? 'Convierto problemas complejos en' : 'I turn complex problems into'}
          <em>{isSpanish ? ' software simple y útil.' : ' simple, useful software.'}</em>
        </h2>

        <div className="about-grid">
          <p className="about-lead">
            {isSpanish
              ? 'Soy Fernando, bachiller en Informática Empresarial de Costa Rica, con gran interés en desarrollo de software, datos y tecnologías en la nube.'
              : "I'm Fernando, a Business Informatics graduate from Costa Rica with a strong interest in software development, data, and cloud technologies."}
          </p>

          <div className="about-details">
            <p>
              {isSpanish
                ? 'Combino la resolución de problemas técnicos con el enfoque en crear aplicaciones limpias, fáciles de mantener y realmente útiles.'
                : 'My approach combines technical problem-solving with a focus on building applications that are clean, maintainable, and genuinely useful.'}
            </p>

            <p>
              {isSpanish
                ? 'Disfruto trabajar en distintas capas: desde bases de datos y servicios backend hasta interfaces modernas e infraestructura en la nube.'
                : 'I enjoy working across the stack — from databases and backend services to modern interfaces and cloud infrastructure.'}
            </p>

            <div className="about-location">
              <span>{isSpanish ? 'Ubicación' : 'Based in'}</span>
              <strong>Alajuela, Costa Rica</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
