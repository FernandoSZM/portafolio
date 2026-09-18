
import heroPhoto from '../assets/profile.png';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">

        <div className="availability">
          <span className="status-dot" />
          <span>Available for opportunities</span>
        </div>

        <h1>
          Fernando
          <span>Sánchez Moraga</span>
        </h1>

        <div className="hero-bottom">
          <div className="hero-description">
            <p>
              Computer Engineer focused on building reliable software,
              working with data, and creating full-stack applications.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                View my work <span>↗</span>
              </a>

              <a href="#contact" className="button button-secondary">
                Get in touch
              </a>
            </div>
          </div>

          <div className="hero-meta">
            <span>01 — PROFILE</span>
            <p>
              Full-Stack
              <br />
              Data
              <br />
              Cloud
            </p>
          </div>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-image-glow" />
        <div className="hero-image-frame">
          <img
            src={heroPhoto}
            alt="Fernando Sánchez Moraga"
          />
        </div>

        <div className="hero-image-label">
          <span>CR / 2026</span>
          <span>Software Engineer</span>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}

export default Hero;

