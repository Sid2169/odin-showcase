import Header from './components/Header';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import FeaturedProject from './components/FeaturedProject';
import ProjectGrid from './components/ProjectGrid';
import Curriculum from './components/Curriculum';
import About from './components/About';
import ClosingCta from './components/ClosingCta';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import './styles/App.css';

function App() {
  const { preference, setTheme } = useTheme();

  return (
    <div id="top" className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header preference={preference} onThemeSelect={setTheme} />
      <main id="main">
        <Hero />
        <TechMarquee />
        <FeaturedProject />
        <ProjectGrid />
        <Curriculum />
        <About />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
