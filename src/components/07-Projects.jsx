const projects = [
  {
    number: '01',
    name: 'LottoLab CR',
    description:
      'An in-progress data analysis app that studies historical Chances results to explore number frequencies and estimate probabilities for future draws.',
    stack: ['Data analysis', 'Chances results'],
    type: 'In development · Data analysis',
    status: 'In progress',
    statusClass: 'in-progress',
    github: 'https://github.com/FernandoSZM/LottoLab-CR',
    demo: null,
  },
  {
    number: '02',
    name: 'Educational Games Website',
    description:
      'A website featuring educational games, created as part of the TCU-584 project.',
    stack: ['Educational games', 'Interactive website'],
    type: 'Educational website',
    status: 'Completed',
    statusClass: 'completed',
    github: 'https://github.com/FernandoSZM/TCU-584',
    demo: 'https://agrogamestcu.netlify.app',
  },
  {
    number: '03',
    name: 'FRCHO Clothing Store',
    description:
      'An online clothing store offering a dedicated shopping experience for the FRCHO brand.',
    stack: ['Fashion', 'E-commerce'],
    type: 'Online store',
    status: 'In progress',
    statusClass: 'in-progress',
    github: 'https://github.com/FernandoSZM/tienda-ropa-react',
    demo: 'https://gilded-gumdrop-ff6d2c.netlify.app',
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-label">
        <p>Selected work</p>
      </div>

      <div className="projects-content">
        <div className="section-heading projects-heading">
          <h2>
            Things I've
            <em> built.</em>
          </h2>

          <p>
            A selection of projects that represent how I approach
            software, architecture and problem solving.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-info">
                <span className="project-type">
                  {project.type}
                </span>
                <span className={`project-status ${project.statusClass}`}>
                  {project.status}
                </span>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="project-footer">
                  <div className="project-stack">
                    {project.stack.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live demo ↗
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="project-hover">
                View project <span>↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
