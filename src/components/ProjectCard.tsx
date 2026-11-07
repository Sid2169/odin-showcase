import type { CSSProperties } from 'react';
import { getTrack } from '../constants';
import type { Project } from '../constants';

interface ProjectCardProps {
  project: Project;
  index: number;
  order: number;
}

function ProjectCard({ project, index, order }: ProjectCardProps) {
  const track = getTrack(project.odinModule);
  const style = {
    animationDelay: `${Math.min(order, 8) * 45}ms`,
  } as CSSProperties;

  return (
    <article className="project-card" style={style}>
      <a
        href={project.liveUrl}
        className="project-card__media"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="project-card__image"
          loading="lazy"
        />
        <span className="project-card__index">{String(index).padStart(2, '0')}</span>
        <span className="project-card__peek" aria-hidden="true">
          ↗
        </span>
      </a>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__module">{track?.label ?? project.odinModule}</span>
          <span className="project-card__date">{project.publishedDate}</span>
        </div>
        <h3 className="project-card__title">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>
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
            Live Demo <span aria-hidden="true">↗</span>
          </a>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            Source Code <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
