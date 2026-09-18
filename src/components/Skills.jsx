function Skills() {
  const categories = [
    {
      number: '01',
      title: 'Backend',
      description:
        'Building APIs, business logic, services and data processing systems.',
      technologies: ['Python', 'C#', 'Java', 'ETL'],
    },
    {
      number: '02',
      title: 'Frontend',
      description:
        'Creating responsive interfaces with modern JavaScript frameworks.',
      technologies: ['React', 'Vue', 'TypeScript', 'JavaScript'],
    },
    {
      number: '03',
      title: 'Databases',
      description:
        'Designing, querying and working with relational database systems.',
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
      description:
        'Development workflows, APIs, version control and cloud services.',
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
      <div className="section-label">
        <span>02</span>
        <p>Expertise</p>
      </div>

      <div className="skills-content">
        <div className="section-heading">
          <h2>
            Tools I use to
            <em> build.</em>
          </h2>

          <p>
            A combination of development, data and infrastructure
            technologies that allows me to work across different
            layers of a product.
          </p>
        </div>

        <div className="skills-list">
          {categories.map((category) => (
            <article className="skill-item" key={category.number}>
              <div className="skill-number">
                {category.number}
              </div>

              <div className="skill-main">
                <h3>{category.title}</h3>

                <p>{category.description}</p>

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

