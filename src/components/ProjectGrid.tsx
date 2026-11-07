import { useMemo, useState } from 'react';
import { MODULE_TRACKS, PROJECTS, getProjectYear, getTrack } from '../constants';
import ProjectCard from './ProjectCard';

const getTrackId = (moduleName: string) => getTrack(moduleName)?.id ?? 'other';

function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = useMemo(() => {
    const counts = new Map<string, number>();
    for (const project of PROJECTS) {
      const id = getTrackId(project.odinModule);
      counts.set(id, (counts.get(id) ?? 0) + 1);
    }

    return [
      { id: 'all', label: 'All', count: PROJECTS.length },
      ...MODULE_TRACKS.filter((track) => (counts.get(track.id) ?? 0) > 0).map((track) => ({
        id: track.id,
        label: track.label,
        count: counts.get(track.id) ?? 0,
      })),
    ];
  }, []);

  const projects = useMemo(
    () =>
      activeFilter === 'all'
        ? PROJECTS
        : PROJECTS.filter((project) => getTrackId(project.odinModule) === activeFilter),
    [activeFilter],
  );

  const years = useMemo(() => PROJECTS.map(getProjectYear), []);
  const firstYear = Math.min(...years);
  const latestYear = Math.max(...years);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section__heading">
          <p className="eyebrow">
            <span className="eyebrow__index">02</span>
            <span className="eyebrow__line" aria-hidden="true" />
            The archive
          </p>
          <div className="projects__title-row">
            <h2 className="section__title">Every build, mapped to a lesson.</h2>
            <p className="projects__count">
              <span>{String(projects.length).padStart(2, '0')}</span> /{' '}
              {String(PROJECTS.length).padStart(2, '0')} projects
            </p>
          </div>
          <p className="section__lede">
            Filter by curriculum track to follow the progression — foundations first,
            full-stack later, with a few detours along the way.
          </p>
        </div>

        <div className="filters" role="group" aria-label="Filter projects by curriculum track">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`filter${activeFilter === filter.id ? ' filter--active' : ''}`}
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
              <span className="filter__count">{filter.count}</span>
            </button>
          ))}
        </div>

        <div className="projects__grid" key={activeFilter}>
          {projects.map((project, position) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={PROJECTS.indexOf(project) + 1}
              order={position}
            />
          ))}
        </div>

        <p className="projects__footnote">
          <span>
            {firstYear} — {latestYear}
          </span>
          <span className="projects__footnote-dot" aria-hidden="true" />
          <span>{PROJECTS.length} shipped builds</span>
          <span className="projects__footnote-dot" aria-hidden="true" />
          <span>Source on GitHub</span>
        </p>
      </div>
    </section>
  );
}

export default ProjectGrid;
