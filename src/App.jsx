
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="app">

      <div className="background-effects" aria-hidden="true">
        <div className="grid-background" />

        <div className="ambient-light ambient-light-one" />
        <div className="ambient-light ambient-light-two" />

        <div className="floating-orb orb-one" />
        <div className="floating-orb orb-two" />

        <div className="scan-line" />
      </div>

      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <span>© 2026 Fernando Sánchez Moraga</span>

        <span>
          Designed & built with React
        </span>

        <a href="#hero">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;

