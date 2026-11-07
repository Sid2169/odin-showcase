import { useEffect, useState } from 'react';
import { SITE, ASSETS } from '../constants';
import type { ThemePreference } from '../hooks/useTheme';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  preference: ThemePreference;
  onThemeSelect: (pref: ThemePreference) => void;
}

function Header({ preference, onThemeSelect }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top" className="brand" aria-label={`${SITE.TITLE} home`}>
          <img src={ASSETS.LOGO} alt="" className="brand__logo" />
          <span className="brand__text">
            <span className="brand__name">{SITE.TITLE}</span>
            <span className="brand__sub">Project archive</span>
          </span>
        </a>

        <button
          type="button"
          className="header__menu"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="header__menu-icon" aria-hidden="true">
            <span />
            <span />
          </span>
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav
          id="site-nav"
          className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#curriculum" onClick={closeMenu}>
            Curriculum
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a
            href={SITE.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            GitHub <span className="nav__arrow" aria-hidden="true">↗</span>
          </a>
          <ThemeToggle preference={preference} onSelect={onThemeSelect} />
        </nav>
      </div>
    </header>
  );
}

export default Header;
