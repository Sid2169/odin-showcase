import { useMemo } from 'react';
import { PROJECTS } from '../constants';
import TechIcon from './TechIcon';

function TechMarquee() {
  const tags = useMemo(() => {
    const seen = new Set<string>();
    return PROJECTS.flatMap((project) => project.tags).filter((tag) => {
      const key = tag.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, []);

  return (
    <div
      className="marquee"
      role="region"
      aria-label="Technologies used across these projects"
    >
      <div className="marquee__track">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="marquee__group"
            aria-hidden={group === 1 ? 'true' : undefined}
          >
            {tags.map((tag) => (
              <span key={`${group}-${tag}`} className="marquee__item">
                <span className="marquee__star" aria-hidden="true">
                  ✦
                </span>
                <TechIcon tag={tag} className="marquee__icon" />
                {tag}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechMarquee;
