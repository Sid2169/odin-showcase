import { SITE } from '../constants';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          © {new Date().getFullYear()} {SITE.AUTHOR}
        </p>
        <p>
          Built while following{' '}
          <a href={SITE.ODIN_URL} target="_blank" rel="noopener noreferrer">
            The Odin Project
          </a>{' '}
          curriculum
        </p>
      </div>
    </footer>
  );
}

export default Footer;
