const projects = [
  {
    number: '01',
    name: 'Project One',
    description:
      'A full-stack application focused on solving a real-world problem through a clean interface and structured backend architecture.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    type: 'Full-Stack Application',
    github: '#',
    demo: '#',
  },
  {
    number: '02',
    name: 'Project Two',
    description:
      'A data-oriented application designed to process, organize and visualize information through a modern web interface.',
    stack: ['Python', 'SQL', 'React'],
    type: 'Data / Web Application',
    github: '#',
    demo: '#',
  },
  {
    number: '03',
    name: 'Project Three',
    description:
      'A backend-focused project exploring APIs, database architecture and scalable application development.',
    stack: ['C#', 'SQL Server', 'REST API'],
    type: 'Backend System',
    github: '#',
    demo: '#',
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-label">
        <span>03</span>
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
              <div className="project-number">
                {project.number}
              </div>

              <div className="project-info">
                <span className="project-type">
                  {project.type}
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

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo ↗
                    </a>
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

