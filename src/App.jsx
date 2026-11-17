
import Header from './components/01-Header';
import Hero from './components/02-Hero';
import About from './components/03-About';
import Education from './components/05-Education';
import Skills from './components/06-Skills';
import Projects from './components/07-Projects';
import Contact from './components/08-Contact';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <span>© 2026 Fernando Sánchez Moraga</span>

        <span>
          NANCORE · Designed & built with React
        </span>

        <a href="#hero">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
