const projects = [
  {
    number: '01',
    name: 'LottoLab CR',
    description:
      'An in-progress analysis tool for exploring historical Chances results, reviewing number frequencies and probability calculations in one place. Built with Python, Pandas and Streamlit.',
    stack: ['Python', 'Pandas', 'Streamlit'],
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
      'An educational games website about agriculture, food and waste sorting. It presents these topics through interactive games, using HTML, CSS and JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript'],
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
      'An online storefront for FRCHO that brings its clothing catalog, prices and product imagery together in one place. Built with React and Vite.',
    stack: ['React', 'Vite', 'CSS'],
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
      'Herramienta de análisis en desarrollo para explorar resultados históricos de chances y consultar frecuencias y cálculos de probabilidad en un solo lugar. Desarrollada con Python, Pandas y Streamlit.',
    'Educational Games Website':
      'Sitio de juegos educativos sobre agricultura, alimentación y clasificación de residuos. Presenta estos temas mediante juegos interactivos, con HTML, CSS y JavaScript.',
    'FRCHO Clothing Store':
      'Tienda en línea de FRCHO que reúne su catálogo de ropa, precios e imágenes de producto en un solo lugar. Desarrollada con React y Vite.',
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
            <article
              className="project"
              key={project.number}
            >
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-number">{project.number}</span>
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
                </div>

                <h3>{project.name}</h3>

                <p>
                  {isSpanish
                    ? translatedDescriptions[project.name]
                    : project.description}
                </p>

                <div className="project-footer">
                  <div className="project-stack">
                    {project.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
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

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
