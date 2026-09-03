import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

function ProjectGrid() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__heading">Projects</h2>
      <p className="projects__subheading">
        A collection of projects I&apos;ve built while going through The Odin Project curriculum.
        Each project reflects the skills and concepts learned at that stage.
      </p>
      <div className="projects__grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectGrid;
