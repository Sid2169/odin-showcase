import type { Project } from '../constants';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <a href={project.liveUrl} className="project-card__image-link" target="_blank" rel="noopener noreferrer">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="project-card__image"
          loading="lazy"
        />
      </a>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__module">{project.odinModule}</span>
          <h3 className="project-card__title">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </h3>
        </div>
        <p className="project-card__description">{project.description}</p>
        <ul className="project-card__tags">
          {project.tags.map((tag) => (
            <li key={tag} className="project-card__tag">
              {tag}
            </li>
          ))}
        </ul>
        <div className="project-card__links">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
