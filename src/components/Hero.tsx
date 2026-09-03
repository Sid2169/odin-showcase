import { SITE, ASSETS } from '../constants';

function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Projects built with The Odin Project</h1>
        <p className="hero__subtitle">{SITE.DESCRIPTION}</p>
        <a href="#projects" className="hero__cta">
          View Projects
        </a>
      </div>
      <div className="hero__media">
        <img
          src={ASSETS.PROFILE}
          alt={`Portrait of ${SITE.AUTHOR}`}
          className="hero__avatar"
        />
      </div>
    </section>
  );
}

export default Hero;
