import { useMemo } from 'react';
import { MODULE_TRACKS, PROJECTS, getProjectYear, getTrack } from '../constants';

function Curriculum() {
  const tracks = useMemo(
    () =>
      MODULE_TRACKS.map((track) => {
        const projects = PROJECTS.filter(
          (project) => getTrack(project.odinModule)?.id === track.id,
        );
        const years = projects.map(getProjectYear);
        const first = Math.min(...years);
        const latest = Math.max(...years);
        return {
          ...track,
          count: projects.length,
          range: first === latest ? String(first) : `${first}—${latest}`,
        };
      }).filter((track) => track.count > 0),
    [],
  );

  const years = useMemo(() => PROJECTS.map(getProjectYear), []);
  const firstYear = Math.min(...years);
  const latestYear = Math.max(...years);

  return (
    <section id="curriculum" className="section curriculum" aria-labelledby="curriculum-title">
      <div className="container">
        <div className="section__heading">
          <p className="eyebrow">
            <span className="eyebrow__index">03</span>
            <span className="eyebrow__line" aria-hidden="true" />
            Curriculum map
          </p>
          <h2 id="curriculum-title" className="section__title">
            From the box model to full-stack.
          </h2>
          <p className="section__lede">
            The Odin Project is a free, project-first curriculum. This is what each track
            looked like once it left the lesson plan and became software.
          </p>
        </div>

        <table className="tracks">
          <thead>
            <tr>
              <th scope="col" className="tracks__index">
                #
              </th>
              <th scope="col">Track</th>
              <th scope="col">Projects</th>
              <th scope="col">Years</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track, index) => (
              <tr key={track.id}>
                <td className="tracks__index">{String(index + 1).padStart(2, '0')}</td>
                <td className="tracks__name">
                  <span className="tracks__label">{track.label}</span>
                  <span className="tracks__description">{track.description}</span>
                </td>
                <td className="tracks__count">
                  {String(track.count).padStart(2, '0')}
                  <span>projects</span>
                </td>
                <td className="tracks__years">{track.range}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td />
              <td>Total</td>
              <td className="tracks__count">{String(PROJECTS.length).padStart(2, '0')}</td>
              <td className="tracks__years">
                {firstYear}—{latestYear}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}

export default Curriculum;
