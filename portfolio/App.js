import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import PersonalInfo from "./components/PersonalInfo";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import "./styles.css";
import avatar from "./assets/avatar.png";
import avatar2 from "./assets/avatar2.png";

export default function App() {
  return (
    <div className="pf-root">
      <header className="pf-header">
        <div className="pf-brand">
          <div className="pf-avatar">
            <img src={avatar} alt="John Lloyd Palma" className="pf-avatar-img" />
          </div>
          <div>
            <h1 className="pf-name">John Lloyd Palma</h1>
            <p className="pf-role">Computer Science Student</p>
          </div>
        </div>
        <nav className="pf-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="pf-container">
        <section id="hero" className="pf-hero">
          <div>
            <h2>Building clean, responsive web apps</h2>
            <p className="pf-hero-sub">
              I design and develop accessible, performance-oriented user interfaces with React.
            </p>
            <div className="pf-ctas">
              <a className="btn btn-primary" href="#contact">Get in touch</a>
              <a className="btn" href="#projects">See projects</a>
            </div>
          </div>
          <img src={avatar2} alt="Avatar2 of John Lloyd Palma" className="pf-hero-illustration" />
        </section>

        <section className="top-cards">
          <div className="top-card info-card" id="personal-info-top">
            <PersonalInfo />
          </div>
          <div className="top-card skills-card" id="skills">
            <Skills />
          </div>
        </section>

        <section id="about" className="pf-section card">
          <About />
        </section>

        <Projects />

        <section id="contact" className="card">
          <ContactForm />
        </section>

        <footer className="pf-footer">
          <div className="socials">
            <a href="https://github.com/johnlloydpalma" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.52 7.52 0 012.01-.27c.68 0 1.36.09 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
            <a href="https://linkedin.com/in/johnlloydpalma" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.849-3.037-1.85 0-2.134 1.445-2.134 2.939v5.667H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.368-1.849 3.603 0 4.268 2.37 4.268 5.455v6.285h-.002zm-15.036-11.703a2.07 2.07 0 110-4.139 2.07 2.07 0 010 4.14zm1.778 11.703H3.634V9h3.555v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.723v20.54c0 .95.792 1.723 1.771 1.723h20.451c.978 0 1.778-.774 1.778-1.723V1.723c0-.95-.8-1.723-1.778-1.723z"></path>
              </svg>
            </a>
          </div>
          © {new Date().getFullYear()} John Lloyd Palma
        </footer>
      </main>
    </div>
  );
}
