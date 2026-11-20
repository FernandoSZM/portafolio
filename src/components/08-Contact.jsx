
function Contact({ language }) {
  const isSpanish = language === 'es';
  return (
    <section id="contact" className="section contact">
      <div className="section-label">
        <p>{isSpanish ? 'Contacto' : 'Contact'}</p>
      </div>

      <div className="contact-content">
        <span className="contact-eyebrow">
          {isSpanish ? '¿Tienes un proyecto en mente?' : 'Have a project in mind?'}
        </span>

        <h2 className={isSpanish ? 'contact-heading contact-heading-spanish' : 'contact-heading'}>
          {isSpanish ? 'Trabajemos' : "Let's build"}
          <em>{isSpanish ? ' juntos.' : ' something.'}</em>
        </h2>

        <p>
          {isSpanish
            ? 'Estoy abierto a proyectos interesantes, oportunidades profesionales y conversaciones sobre tecnología.'
            : "I'm open to interesting projects, professional opportunities and conversations about technology."}
        </p>

        <a
          href="mailto:nano.sanfs@gmail.com"
          className="contact-email"
        >
          nano.sanfs@gmail.com
          <span>↗</span>
        </a>

        <p className="contact-location">
          <span>{isSpanish ? 'Ubicación' : 'Based in'}</span>
          <strong>Alajuela, Costa Rica</strong>
        </p>

        <div className="contact-resources">
          <a href="/cv.pdf" target="_blank" rel="noreferrer">
            {isSpanish ? 'Ver CV' : 'View CV'} <span>↗</span>
          </a>
          <a href="/cv.pdf" download="Fernando-Sanchez-Moraga-CV.pdf">
            {isSpanish ? 'Descargar CV' : 'Download CV'} <span>↓</span>
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/FernandoSZM"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/fernandofsm/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
