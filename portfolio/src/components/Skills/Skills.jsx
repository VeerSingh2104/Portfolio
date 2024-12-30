import React, { useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "C++", level: 83 },
    { name: "Java", level: 90 },
    { name: "Python", level: 60 },
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript", level: 65 },
    { name: "IntelliJ IDEA", level: 70 },
    { name: "Eclipse", level: 65 },
    { name: "Android Studio", level: 80 },
    { name: "Git & Github", level: 90 }
  ];

  useEffect(() => {
    skills.forEach((skill, index) => {
      // Set the CSS variable dynamically for each skill
      document.documentElement.style.setProperty(`--progress-${index}`, `${skill.level}%`);
    });
  }, [skills]);

  return (
    <div className="skill-container">
      <h2 className="skill-h2">My Skills</h2>  
      <div className="skill-content">
        {skills.map((skill, index) => (
          <div className="skill-category" key={index}>
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ "--target-width": `var(--progress-${index})` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
