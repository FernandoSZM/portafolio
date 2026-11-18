function Skills({ language }) {
  const isSpanish = language === 'es';
  const technologyIcons = {
    Python: 'python/python-original',
    'C#': 'csharp/csharp-original',
    Java: 'java/java-original',
    React: 'react/react-original',
    Vue: 'vuejs/vuejs-original',
    TypeScript: 'typescript/typescript-original',
    JavaScript: 'javascript/javascript-original',
    'SQL Server': 'microsoftsqlserver/microsoftsqlserver-original',
    MySQL: 'mysql/mysql-original',
    PostgreSQL: 'postgresql/postgresql-original',
    Oracle: 'oracle/oracle-original',
    AWS: 'amazonwebservices/amazonwebservices-original',
    Git: 'git/git-original',
    Postman: 'postman/postman-original',
    Jira: 'jira/jira-original',
  };

  const categories = [
    {
      number: '01',
      title: isSpanish ? 'Backend' : 'Backend',
      technologies: ['Python', 'C#', 'Java', 'ETL'],
    },
    {
      number: '02',
      title: isSpanish ? 'Frontend' : 'Frontend',
      technologies: ['React', 'Vue', 'TypeScript', 'JavaScript'],
    },
    {
      number: '03',
      title: isSpanish ? 'Bases de datos' : 'Databases',
      technologies: [
        'SQL Server',
        'MySQL',
        'PostgreSQL',
        'Oracle',
      ],
    },
    {
      number: '04',
      title: isSpanish ? 'Nube y herramientas' : 'Cloud & Tools',
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
            {isSpanish ? 'Herramientas para' : 'Tools I use to'}
            <em>{isSpanish ? ' construir.' : ' build.'}</em>
          </h2>
        </div>

        <div className="skills-list">
          {categories.map((category) => (
            <article className="skill-item" key={category.number}>
              <div className="skill-main">
                <h3>{category.title}</h3>

                <div className="technology-list">
                  {category.technologies.map((technology) => (
                    <span className="technology-item" key={technology} title={technology}>
                      {technology === 'ETL' ? (
                        <svg
                          className="technology-icon-fallback etl-icon"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <ellipse cx="12" cy="5" rx="7" ry="3" />
                          <path d="M5 5v10c0 1.7 3.1 3 7 3 1.2 0 2.3-.1 3.3-.4" />
                          <path d="M19 5v5" />
                          <path d="m15 15 4 4 4-4" />
                          <path d="M19 19v-5" />
                        </svg>
                      ) : technologyIcons[technology] ? (
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${technologyIcons[technology]}.svg`}
                          alt=""
                          loading="lazy"
                        />
                      ) : null}
                      <span className="technology-name">{technology}</span>
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
