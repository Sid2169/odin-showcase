import { SITE } from '../constants';

function ClosingCta() {
  return (
    <section className="closing" aria-labelledby="closing-title">
      <div className="container">
        <div className="closing__panel">
          <div className="closing__content">
            <p className="eyebrow">
              <span className="eyebrow__index">05</span>
              <span className="eyebrow__line" aria-hidden="true" />
              Keep building
            </p>
            <h2 id="closing-title" className="closing__title">
              The next project is <span>already in progress.</span>
            </h2>
            <p className="closing__lede">
              Follow along on GitHub, or start the curriculum yourself. The Odin Project is
              free — no subscription, no locked lessons, no gatekeeping.
            </p>
            <div className="closing__actions">
              <a
                href={SITE.GITHUB_URL}
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open GitHub
                <span className="btn__icon" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a
                href={SITE.ODIN_URL}
                className="btn btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start the curriculum
                <span className="btn__icon" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
            <p className="closing__note">Free curriculum · Open source · Built in public</p>
          </div>

          <div className="terminal" aria-hidden="true">
            <div className="terminal__bar">
              <span className="terminal__dots">
                <span />
                <span />
                <span />
              </span>
              <span className="terminal__title">build-log — zsh</span>
            </div>
            <div className="terminal__body">
              <p className="terminal__line">
                <span className="terminal__prompt">~ $</span> git status
              </p>
              <p className="terminal__line terminal__line--output">
                On branch <span className="terminal__accent">learning</span>
              </p>
              <p className="terminal__line">
                <span className="terminal__prompt">~ $</span> cat next.txt
              </p>
              <p className="terminal__line terminal__line--output terminal__accent">
                something worth shipping.
              </p>
              <p className="terminal__line">
                <span className="terminal__prompt">~ $</span>
                <span className="terminal__cursor" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClosingCta;
