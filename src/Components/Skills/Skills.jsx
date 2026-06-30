import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaDatabase, FaGitAlt, FaGithub, FaFigma, FaUserCog,
} from "react-icons/fa";
import {
  SiTailwindcss, SiCplusplus, SiPostman, SiCanva,
} from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import { MdComputer, MdMemory } from "react-icons/md";
import { VscCode } from "react-icons/vsc";

const Skills = () => {
  const techSkills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#e34c26", level: 95 },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6", level: 90 },
    { name: "JavaScript", icon: <FaJs />, color: "#f7df1e", level: 85 },
    { name: "React.js", icon: <FaReact />, color: "#61dafb", level: 85 },
    { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a", level: 75 },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38bdf8", level: 80 },
    { name: "C++", icon: <SiCplusplus />, color: "#00599C", level: 85 },
    { name: "SQL", icon: <FaDatabase />, color: "#00758F", level: 70 },
    { name: "Data Structures", icon: <GiBrain />, color: "#fca311", level: 80 },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt />, color: "#f1502f" },
    { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
    { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
    { name: "Figma", icon: <FaFigma />, color: "#a259ff" },
    { name: "Canva", icon: <SiCanva />, color: "#00c4cc" },
    { name: "VS Code", icon: <VscCode />, color: "#007acc" },
  ];

  const csSubjects = [
    { name: "OS", icon: <MdComputer />, color: "#fca311", level: 80 },
    { name: "CN", icon: <MdMemory />, color: "#00b4d8", level: 75 },
    { name: "OOPs", icon: <FaUserCog />, color: "#9d4edd", level: 85 },
  ];

  const renderSkillBar = (skill) => (
    <div className="bar-wrapper" key={skill.name}>
      <div className="bar-title">
        {skill.icon} <span>{skill.name}</span>
      </div>
      <div className="bar-track">
        <div
          className="bar-fill"
          style={{
            width: `${skill.level}%`,
            backgroundColor: skill.color,
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-row">
        {/* Tech Stack Card */}
        <div className="skills-card-container">
          <div className="skills-subtitle">Tech Stack</div>
          <div className="skills-grid">
            {techSkills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Card */}
        <div className="skills-card-container">
          <div className="skills-subtitle">Tools</div>
          <div className="skills-grid">
            {tools.map((tool) => (
              <div className="skill-card" key={tool.name}>
                <div className="skill-icon" style={{ color: tool.color }}>
                  {tool.icon}
                </div>
                <p>{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core CS Subjects */}
      <div className="skills-subtitle">Core CS Subjects</div>
      <div className="bar-section">
        {csSubjects.map(renderSkillBar)}
      </div>
    </section>
  );
};

export default Skills;
