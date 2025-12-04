import React from "react";

const skillsData = [
  "HTML & CSS",
  "Java",
  "Python",
  "Javascript"

];

export default function Skills() {
  return (
    <div className="card skills-card" tabIndex={0}>
      <h2>Skills</h2>
      <ul className="pf-skills-list">
        {skillsData.map((skill) => (
          <li key={skill} className="skill-item" tabIndex={0}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
