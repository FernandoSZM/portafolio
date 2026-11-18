
import profilePhoto from '../assets/profile.png';

function About({ language }) {
  const isSpanish = language === 'es';
  return (
    <section id="about" className="section about">
      <div className="section-label">
        <p>{isSpanish ? 'Sobre mí' : 'About me'}</p>
      </div>

      <div className="about-content">
        <div className="about-grid">
          <div className="about-portrait">
            <img src={profilePhoto} alt="Fernando Sánchez Moraga" loading="lazy" />
          </div>

          <div className="about-copy">
            <h2>
              {isSpanish ? 'Diseño sistemas que convierten' : 'I design systems that turn'}
              <em>{isSpanish ? ' datos en decisiones.' : ' data into decisions.'}</em>
            </h2>

            <p className="about-lead">
              {isSpanish
                ? 'Soy Fernando, ingeniero en sistemas enfocado en arquitectura de software y análisis de datos. Me interesa crear soluciones que conecten sistemas confiables con información útil.'
                : "I'm Fernando, a Systems Engineer focused on software architecture and data analytics. I build solutions that connect reliable systems with useful insights."}
            </p>

            <div className="about-details">
              <p>
                {isSpanish
                  ? 'Diseño arquitecturas claras y mantenibles, pensando en cómo cada componente, servicio y dato encaja en el sistema completo.'
                  : 'I design clear, maintainable architectures, considering how each component, service, and data source fits into the larger system.'}
              </p>

              <p>
                {isSpanish
                  ? 'También analizo datos para encontrar patrones y comunicar hallazgos que ayuden a resolver problemas y tomar mejores decisiones.'
                  : 'I also analyze data to uncover patterns and communicate findings that help solve problems and support better decisions.'}
              </p>

              <div className="about-location">
                <span>{isSpanish ? 'Ubicación' : 'Based in'}</span>
                <strong>Alajuela, Costa Rica</strong>
              </div>

              <div className="about-focus">
                <span>{isSpanish ? 'Enfoque profesional' : 'Professional focus'}</span>
                <p>
                  {isSpanish
                    ? 'Arquitectura de software · Análisis de datos · Ingeniería de datos · APIs · Nube · Desarrollo full-stack'
                    : 'Software architecture · Data analytics · Data engineering · APIs · Cloud · Full-stack development'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
