import { ASSETS, SITE } from '../constants';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#top" className="brand brand--footer">
              <img src={ASSETS.LOGO} alt="" className="brand__logo" />
              <span className="brand__text">
                <span className="brand__name">{SITE.TITLE}</span>
                <span className="brand__sub">Project archive</span>
              </span>
            </a>
            <p className="footer__blurb">
              A living record of projects built while following The Odin Project curriculum —
              from first HTML pages to full-stack applications.
            </p>
            <p className="footer__status">
              <span className="footer__status-dot" aria-hidden="true" />
              Building in public
            </p>
          </div>

          <nav className="footer__col" aria-label="Explore">
            <p className="footer__heading">Explore</p>
            <ul>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#curriculum">Curriculum</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href={SITE.GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Curriculum">
            <p className="footer__heading">Curriculum</p>
            <ul>
              <li>
                <a href={SITE.ODIN_URL} target="_blank" rel="noopener noreferrer">
                  The Odin Project <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a href={SITE.ODIN_PATHS.FOUNDATIONS} target="_blank" rel="noopener noreferrer">
                  Foundations <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a href={SITE.ODIN_PATHS.FULL_STACK} target="_blank" rel="noopener noreferrer">
                  Full Stack JavaScript <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.ODIN_PATHS.GETTING_HIRED}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Getting Hired <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer__col">
            <p className="footer__heading">Colophon</p>
            <p className="footer__colophon">
              Built with React 19, TypeScript and Vite. Set in Bricolage Grotesque and
              JetBrains Mono.
            </p>
            <p className="footer__colophon">
              <a href={SITE.GITHUB_URL} target="_blank" rel="noopener noreferrer">
                Source on GitHub <span aria-hidden="true">↗</span>
              </a>
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} {SITE.AUTHOR} — independent project. Not affiliated
            with The Odin Project.
          </p>
          <a href="#top" className="footer__top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
