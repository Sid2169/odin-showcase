import { SITE, ASSETS } from '../constants';

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top" className="header__logo">
          <img src={ASSETS.LOGO} alt={`${SITE.TITLE} logo`} className="header__logo-img" />
          <span>{SITE.TITLE}</span>
        </a>
        <nav className="header__nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href={SITE.GITHUB_URL} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
