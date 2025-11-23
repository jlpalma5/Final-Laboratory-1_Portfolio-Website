import React, { useEffect, useState } from "react";

const skillsData = [
  { name: "HTML & CSS", level: 85 },
  { name: "Java", level: 80 },
  { name: "Python", level: 75 },
  { name: "Javascript", level: 70 }
];

export default function Skills() {
  const [progress, setProgress] = useState(skillsData.map(() => 0));

  useEffect(() => {
    // Animate progress bar fill on mount
    let animationFrame;
    let start;

    function animate(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const duration = 1000; // duration of animation in ms
      const newProgress = skillsData.map((skill, index) => {
        const current = (elapsed / duration) * skill.level;
        return current > skill.level ? skill.level : current;
      });
      setProgress(newProgress);
      if (elapsed < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    }

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="card skills-card" tabIndex={0}>
      <h2>Skills</h2>
      <ul className="pf-skills-list">
        {skillsData.map((skill, index) => (
          <li key={skill.name} className="skill-item" tabIndex={0}>
            <div className="skill-label">
              {skill.name}
              <span className="skill-level">{Math.round(progress[index])}%</span>
            </div>
            <div className="skill-bar-bg" aria-hidden="true">
              <div
                className="skill-bar-fill"
                style={{ width: `${progress[index]}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
