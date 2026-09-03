import { useState, useEffect, useCallback } from 'react';
import { SITE, ASSETS } from '../constants';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

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
    <section id="about" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Projects built with The Odin Project</h1>
        <p className="hero__subtitle">{SITE.DESCRIPTION}</p>
        <a href="#projects" className="hero__cta">
          View Projects
        </a>
      </div>
      <div className="hero__media">
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
        <p className="hero__caption">Click to enlarge</p>
      </div>

      {isModalOpen && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <figure className="modal__content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="modal__close"
              aria-label="Close enlarged portrait"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={ASSETS.PROFILE_ALT}
              alt={`Alternate portrait of ${SITE.AUTHOR}`}
              className="modal__image"
            />
            <figcaption className="modal__caption">
              {SITE.AUTHOR} - {SITE.ROLE}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

export default Hero;