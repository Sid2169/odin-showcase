import type { ThemePreference } from '../hooks/useTheme';

interface ThemeToggleProps {
  preference: ThemePreference;
  onSelect: (pref: ThemePreference) => void;
}

const OPTIONS: { value: ThemePreference; label: string }[] = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

function ThemeToggle({ preference, onSelect }: ThemeToggleProps) {
  return (
    <div
      className="theme-toggle"
      role="group"
      aria-label="Color theme"
    >
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`theme-toggle__button${preference === option.value ? ' theme-toggle__button--active' : ''}`}
          aria-pressed={preference === option.value}
          onClick={() => onSelect(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default ThemeToggle;