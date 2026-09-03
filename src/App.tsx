import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div id="top" className="app">
      <Header />
      <main>
        <Hero />
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
