function Skills() {
  const categories = [
    { label: 'Bases de datos', value: 'SQL Server, MySQL, PostgreSQL, Oracle' },
    { label: 'Backend', value: 'Python, C#, Java, procesos ETL' },
    { label: 'Frontend', value: 'React, Vue, TypeScript' },
    { label: 'Herramientas', value: 'Git, Postman, Jira, AWS (básico)' },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Habilidades</h2>
      <div className="skills-list">
        {categories.map((cat, i) => (
          <div className="skills-row" key={cat.label}>
            <span className="index">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <dt>{cat.label}</dt>
              <dd>{cat.value}</dd>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;