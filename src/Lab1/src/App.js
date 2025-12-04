import React, { useState } from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  const [currentSection, setCurrentSection] = useState('About');

  const renderSection = () => {
    switch (currentSection) {
      case 'About':
        return <About />;
      case 'Skills':
        return <Skills />;
      case 'Projects':
        return <Projects />;
      default:
        return <About />;
    }
  };

  return (
    <div className="container">
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <button
            className={currentSection === 'About' ? 'active' : ''}
            onClick={() => setCurrentSection('About')}
          >
            About
          </button>
          <button
            className={currentSection === 'Skills' ? 'active' : ''}
            onClick={() => setCurrentSection('Skills')}
          >
            Skills
          </button>
          <button
            className={currentSection === 'Projects' ? 'active' : ''}
            onClick={() => setCurrentSection('Projects')}
          >
            Projects
          </button>
        </nav>
      </header>
      <main>{renderSection()}</main>
    </div>
  );
}

export default App;
