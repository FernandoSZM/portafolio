function Education({ language }) {
  const isSpanish = language === 'es';
  return (
    <section id="education" className="section education">
      <div className="section-label">
        <p>{isSpanish ? 'Educación' : 'Education'}</p>
      </div>

      <div className="education-content">
        <div className="section-heading">
          <h2>{isSpanish ? 'Formación académica' : 'Academic background'}</h2>
        </div>

        <article className="education-card">
          <h3>Universidad de Costa Rica</h3>
          <p>{isSpanish ? 'Bachillerato en Informática Empresarial' : 'Bachelor’s Degree in Business Informatics'}</p>
          <div className="education-focus">
            <span>Apr 2019 – May 2024</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;
