function Skills() {
  const categories = [
    {
      number: '01',
      title: 'Backend',
      technologies: ['Python', 'C#', 'Java', 'ETL'],
    },
    {
      number: '02',
      title: 'Frontend',
      technologies: ['React', 'Vue', 'TypeScript', 'JavaScript'],
    },
    {
      number: '03',
      title: 'Databases',
      technologies: [
        'SQL Server',
        'MySQL',
        'PostgreSQL',
        'Oracle',
      ],
    },
    {
      number: '04',
      title: 'Cloud & Tools',
      technologies: [
        'AWS',
        'Git',
        'Postman',
        'Jira',
      ],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="skills-content">
        <div className="section-heading">
          <h2>
            Tools I use to
            <em> build.</em>
          </h2>
        </div>

        <div className="skills-list">
          {categories.map((category) => (
            <article className="skill-item" key={category.number}>
              <div className="skill-main">
                <h3>{category.title}</h3>

                <div className="technology-list">
                  {category.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <span className="skill-arrow">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
