function Projects() {
  const projects = [
    { name: 'Proyecto 1', description: 'Descripción breve del proyecto.', stack: 'React · Node' },
    { name: 'Proyecto 2', description: 'Descripción breve del proyecto.', stack: 'Python · SQL' },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      {projects.map((p, i) => (
        <div className="project-row" key={p.name}>
          <span className="index">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <span className="project-stack">{p.stack}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;