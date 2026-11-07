import { PROJECTS, getTrack } from '../constants';

function FeaturedProject() {
  const project = PROJECTS[0];
  const track = getTrack(project.odinModule);
  const address = project.liveUrl.replace(/^https?:\/\//, '');

  return (
    <section className="section featured" aria-labelledby="featured-title">
      <div className="container">
        <div className="featured__grid">
          <div className="featured__content">
            <p className="eyebrow">
              <span className="eyebrow__index">01</span>
              <span className="eyebrow__line" aria-hidden="true" />
              Featured build
            </p>
            <h2 id="featured-title" className="featured__title">
              {project.title}
            </h2>
            <p className="featured__description">{project.description}</p>

            <dl className="featured__meta">
              <div className="featured__meta-item">
                <dt>Track</dt>
                <dd>{track?.label ?? project.odinModule}</dd>
              </div>
              <div className="featured__meta-item">
                <dt>Published</dt>
                <dd>{project.publishedDate}</dd>
              </div>
              <div className="featured__meta-item">
                <dt>Stack</dt>
                <dd>{project.tags.join(' · ')}</dd>
              </div>
            </dl>

            <div className="featured__actions">
              <a
                href={project.liveUrl}
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo
                <span className="btn__icon" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a
                href={project.repoUrl}
                className="btn btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code
                <span className="btn__icon" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>

          <div className="browser">
            <div className="browser__bar">
              <span className="browser__dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="browser__address">{address}</span>
              <span className="browser__badge">Live</span>
            </div>
            <a
              href={project.liveUrl}
              className="browser__screen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo`}
            >
              <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
              <span className="browser__overlay">
                <span>Open live build</span>
                <span aria-hidden="true">↗</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
