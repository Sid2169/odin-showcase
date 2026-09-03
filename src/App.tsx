import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import './styles/App.css';

function App() {
  const { preference, setTheme } = useTheme();

  return (
    <div id="top" className="app">
      <Header preference={preference} onThemeSelect={setTheme} />
      <main>
        <Hero />
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;