import heroPhoto from '../assets/profile.png';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <span className="badge">Buscando un equipo a mi altura</span>
        <h1>
          Fernando
          <em>Sánchez Moraga</em>
        </h1>
        <p>Ingeniero en Computación especializado en datos y desarrollo full-stack.</p>
      </div>
      <div className="hero-photo">
        <img src={heroPhoto} alt="Fernando Sánchez Moraga" />
      </div>
    </section>
  );
}

export default Hero;