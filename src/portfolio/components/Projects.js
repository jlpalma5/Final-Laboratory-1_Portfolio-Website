import React from "react";
import foodfiesta from "../assets/foodfiesta.png";
import myPortfolioSS from "../assets/my-portfolio-ss.png";

const DEFAULT_GITHUB = "https://github.com/jlpalma5";

const projects = [
  {
    id: 1,
    title: "FOODFIESTA",
    desc: "A food e-commerce website that offers a variety of delicious meals for online ordering.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://jlpalma5.github.io/FOODFIESTA/",
    repo: "#",
    image: foodfiesta,
  },
  {
    id: 2,
    title: "My-Portfolio",
    desc: "My First Portfolio Project of mine with cool animations and responsive design.",
    tech: ["HTML", "CSS", "Javascript"],
    demo: "https://jlpalma5.github.io/My-Portfolio/",
    repo: "#",
    image: myPortfolioSS,
  },
  {
    id: 3,
    title: "Library System",
    desc: "A Java-based library management system with a user-friendly GUI for managing books and members.",
    tech: ["Java"],
    demo: "#",
    repo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="card">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p) => {
          const repoLink = p.repo && p.repo !== "#" ? p.repo : DEFAULT_GITHUB;
          return (
            <article
              key={p.id}
              className="project-card"
              tabIndex="0"
              aria-labelledby={`proj-${p.id}`}
            >
              <div className="project-image" aria-hidden="true">
                {p.image && (
                  <img
                    src={p.image}
                    alt={`${p.title} project screenshot`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}
              </div>

              <div className="project-body">
                <h3 id={`proj-${p.id}`}>{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <ul className="project-tech">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div className="project-actions">
                  {p.demo && p.demo !== "#" ? (
                    <a
                      href={p.demo}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Live demo for ${p.title}`}
                    >
                      Live
                    </a>
                  ) : (
                    <button className="btn" type="button" disabled aria-disabled="true">
                      Live
                    </button>
                  )}

                  <a
                    href={repoLink}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Repository for ${p.title}`}
                  >
                    Repo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/*
# node
node_modules/
npm-debug.log
yarn-error.log
package-lock.json
.yarn
.env

# build / output
dist/
build/
coverage/

# OS / editor
.DS_Store
Thumbs.db
.vscode/
*/