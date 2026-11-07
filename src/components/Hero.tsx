import { useState, useEffect, useCallback, useMemo } from 'react';
import { SITE, ASSETS, PROJECTS, getProjectYear, getTrack } from '../constants';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const stats = useMemo(() => {
    const years = PROJECTS.map(getProjectYear);
    const firstYear = Math.min(...years);
    const latestYear = Math.max(...years);
    const trackCount = new Set(
      PROJECTS.map((project) => getTrack(project.odinModule)?.id ?? project.odinModule),
    ).size;

    return {
      projectCount: PROJECTS.length,
      trackCount,
      firstYear,
      latestYear,
      span: `${latestYear - firstYear}+`,
    };
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isModalOpen, closeModal]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <p className="eyebrow hero__eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              The Odin Project · Project archive
            </p>
            <h1 className="hero__title">
              Projects built with
              <span className="hero__title-accent">The Odin Project</span>
            </h1>
            <p className="hero__subtitle">
              A living archive of everything I&rsquo;ve shipped while working through the
              curriculum — from my first HTML page to full-stack applications.
            </p>
            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary">
                View Projects
                <span className="btn__icon" aria-hidden="true">
                  ↓
                </span>
              </a>
              <a
                href={SITE.GITHUB_URL}
                className="btn btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <span className="btn__icon" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
            <p className="hero__meta">
              <span>{stats.projectCount} projects</span>
              <span>{stats.trackCount} tracks</span>
              <span>
                {stats.firstYear}—{stats.latestYear}
              </span>
              <span>Open source</span>
            </p>
          </div>

          <div className="hero__media">
            <p className="hero__media-kicker">Portrait / 01</p>
            <div
              className="avatar-flip"
              tabIndex={0}
              role="button"
              aria-label={`View enlarged portrait of ${SITE.AUTHOR}`}
              onClick={openModal}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openModal();
                }
              }}
            >
              <div className="avatar-flip__inner">
                <div className="avatar-flip__face avatar-flip__face--front">
                  <img
                    src={ASSETS.PROFILE}
                    alt={`Portrait of ${SITE.AUTHOR}`}
                    className="hero__avatar"
                  />
                </div>
                <div className="avatar-flip__face avatar-flip__face--back">
                  <img
                    src={ASSETS.PROFILE_ALT}
                    alt={`Alternate portrait of ${SITE.AUTHOR}`}
                    className="hero__avatar"
                  />
                </div>
              </div>
            </div>
            <p className="hero__caption">
              <span className="hero__caption-desktop">Hover to flip · Click to enlarge</span>
              <span className="hero__caption-touch">Tap to enlarge</span>
            </p>
          </div>
        </div>

        <dl className="hero__stats">
          <div className="hero__stat">
            <dt>Projects shipped</dt>
            <dd>{stats.projectCount}</dd>
          </div>
          <div className="hero__stat">
            <dt>Curriculum tracks</dt>
            <dd>{String(stats.trackCount).padStart(2, '0')}</dd>
          </div>
          <div className="hero__stat">
            <dt>Building since</dt>
            <dd>{stats.firstYear}</dd>
          </div>
          <div className="hero__stat">
            <dt>Years in public</dt>
            <dd>
              {stats.span}
              <span className="hero__stat-suffix">yrs</span>
            </dd>
          </div>
        </dl>
      </div>

      {isModalOpen && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portrait-caption"
          onClick={closeModal}
        >
          <figure className="modal__content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="modal__close"
              aria-label="Close enlarged portrait"
              onClick={closeModal}
              autoFocus
            >
              &times;
            </button>
            <img
              src={ASSETS.PROFILE_ALT}
              alt={`Alternate portrait of ${SITE.AUTHOR}`}
              className="modal__image"
            />
            <figcaption id="portrait-caption" className="modal__caption">
              <span>{SITE.AUTHOR}</span>
              <span className="modal__role">{SITE.ROLE}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

export default Hero;
