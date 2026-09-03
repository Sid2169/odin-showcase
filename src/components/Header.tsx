import { SITE, ASSETS } from '../constants';
import type { ThemePreference } from '../hooks/useTheme';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  preference: ThemePreference;
  onThemeSelect: (pref: ThemePreference) => void;
}

function Header({ preference, onThemeSelect }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__inner">
        <a
          href={SITE.ODIN_URL}
          className="header__logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ASSETS.LOGO} alt={`${SITE.TITLE} logo`} className="header__logo-img" />
          <span>{SITE.TITLE}</span>
        </a>
        <nav className="header__nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href={SITE.GITHUB_URL} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <ThemeToggle preference={preference} onSelect={onThemeSelect} />
        </nav>
      </div>
    </header>
  );
}

export default Header;