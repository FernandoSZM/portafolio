
function About() {
  return (
    <section id="about" className="section about">
      <div className="section-label">
        <span>01</span>
        <p>About me</p>
      </div>

      <div className="about-content">
        <h2>
          I turn complex problems into
          <em> simple, useful software.</em>
        </h2>

        <div className="about-grid">
          <p className="about-lead">
            I'm Fernando, a Computer Engineer from Costa Rica with a strong
            interest in software development, data, and cloud technologies.
          </p>

          <div className="about-details">
            <p>
              My approach combines technical problem-solving with a focus on
              building applications that are clean, maintainable, and
              genuinely useful.
            </p>

            <p>
              I enjoy working across the stack — from databases and backend
              services to modern interfaces and cloud infrastructure.
            </p>

            <div className="about-location">
              <span>Based in</span>
              <strong>Atenas, Costa Rica</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

