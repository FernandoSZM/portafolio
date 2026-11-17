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

function Projects({ language }) {
  const isSpanish = language === 'es';
  const translatedDescriptions = {
    'LottoLab CR':
      'Aplicación de análisis de datos en desarrollo que estudia resultados históricos de chances para explorar frecuencias y estimar probabilidades de futuros sorteos.',
    'Educational Games Website':
      'Sitio web con juegos educativos, creado como parte del proyecto TCU-584.',
    'FRCHO Clothing Store':
      'Tienda en línea de ropa que ofrece una experiencia de compra dedicada a la marca FRCHO.',
  };
  const translatedStatuses = {
    'In progress': 'En desarrollo',
    Completed: 'Completado',
  };
  return (
    <section id="projects" className="section projects">
      <div className="section-label">
        <p>{isSpanish ? 'Proyectos destacados' : 'Selected work'}</p>
      </div>

      <div className="projects-content">
        <div className="section-heading projects-heading">
          <h2>
            {isSpanish ? 'Lo que he' : "Things I've"}
            <em>{isSpanish ? ' construido.' : ' built.'}</em>
          </h2>

          <p>
            {isSpanish
              ? 'Una selección de proyectos que representa mi enfoque del software, la arquitectura y la resolución de problemas.'
              : 'A selection of projects that represent how I approach software, architecture and problem solving.'}
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-info">
                <span className="project-type">
                  {isSpanish
                    ? {
                        'In development · Data analysis': 'En desarrollo · Análisis de datos',
                        'Educational website': 'Sitio web educativo',
                        'Online store': 'Tienda en línea',
                      }[project.type]
                    : project.type}
                </span>
                <span className={`project-status ${project.statusClass}`}>
                  {isSpanish ? translatedStatuses[project.status] : project.status}
                </span>

                <h3>{project.name}</h3>

                <p>
                  {isSpanish
                    ? translatedDescriptions[project.name]
                    : project.description}
                </p>

                <div className="project-footer">
                  <div className="project-stack">
                    {project.stack.map((technology) => (
                      <span key={technology}>
                        {isSpanish
                          ? {
                              'Data analysis': 'Análisis de datos',
                              'Chances results': 'Resultados de chances',
                              'Educational games': 'Juegos educativos',
                              'Interactive website': 'Sitio web interactivo',
                              Fashion: 'Moda',
                              'E-commerce': 'Comercio electrónico',
                            }[technology]
                          : technology}
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
                        {isSpanish ? 'Ver sitio ↗' : 'Live demo ↗'}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="project-hover">
                {isSpanish ? 'Ver proyecto' : 'View project'} <span>↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
