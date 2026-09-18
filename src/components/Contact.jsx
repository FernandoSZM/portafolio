
function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-label">
        <span>04</span>
        <p>Contact</p>
      </div>

      <div className="contact-content">
        <span className="contact-eyebrow">
          Have a project in mind?
        </span>

        <h2>
          Let's build
          <em> something.</em>
        </h2>

        <p>
          I'm open to interesting projects, professional opportunities
          and conversations about technology.
        </p>

        <a
          href="mailto:tu_correo@ejemplo.com"
          className="contact-email"
        >
          tu_correo@ejemplo.com
          <span>↗</span>
        </a>

        <div className="social-links">
          <a
            href="https://github.com/FernandoSZM"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/tu-usuario"
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

