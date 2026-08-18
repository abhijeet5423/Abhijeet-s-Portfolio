import {
  FaCss3Alt,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaUserCog,
} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdComputer, MdMemory } from "react-icons/md";
import { SiCanva, SiCplusplus, SiPostman, SiTailwindcss } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const techSkills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#e34c26", level: 95, group: "Interface" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6", level: 90, group: "Interface" },
  { name: "JavaScript", icon: <FaJs />, color: "#f7df1e", level: 85, group: "Language" },
  { name: "React.js", icon: <FaReact />, color: "#61dafb", level: 85, group: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a", level: 75, group: "Backend" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38bdf8", level: 80, group: "Styling" },
  { name: "C++", icon: <SiCplusplus />, color: "#00599C", level: 85, group: "Core" },
  { name: "SQL", icon: <FaDatabase />, color: "#25C2FF", level: 70, group: "Data" },
  { name: "Data Structures", icon: <GiBrain />, color: "#fca311", level: 80, group: "Problem solving" },
];

const tools = [
  { name: "Git", icon: <FaGitAlt />, color: "#f1502f" },
  { name: "GitHub", icon: <FaGithub />, color: "#f7f7f8" },
  { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
  { name: "Figma", icon: <FaFigma />, color: "#a259ff" },
  { name: "Canva", icon: <SiCanva />, color: "#00c4cc" },
  { name: "VS Code", icon: <VscCode />, color: "#25C2FF" },
];

const csSubjects = [
  { name: "Operating Systems", icon: <MdComputer />, color: "#fca311", level: 80 },
  { name: "Computer Networks", icon: <MdMemory />, color: "#25C2FF", level: 75 },
  { name: "OOPs", icon: <FaUserCog />, color: "#7C5CFF", level: 85 },
];

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading">
        <p className="section-kicker">03 / TECHNOLOGY</p>
        <h2>A practical stack for shipping full product flows.</h2>
        <p>
          Frontend craft, backend foundations, databases, APIs, tooling, and CS
          fundamentals arranged as one working ecosystem.
        </p>
      </div>

      <div className="ecosystem-grid">
        <div className="skills-card-container stack-panel">
          <div className="panel-heading">
            <span className="mono-label">stack.index</span>
            <h3>Technology Ecosystem</h3>
          </div>
          <div className="skills-grid">
            {techSkills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <div>
                  <strong>{skill.name}</strong>
                  <span>{skill.group}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-card-container tools-panel">
          <div className="panel-heading">
            <span className="mono-label">toolchain.ready</span>
            <h3>Workflow Tools</h3>
          </div>
          <div className="tools-list">
            {tools.map((tool) => (
              <div className="tool-row" key={tool.name}>
                <span style={{ color: tool.color }}>{tool.icon}</span>
                <strong>{tool.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bar-section">
        <div className="panel-heading">
          <span className="mono-label">foundation.metrics</span>
          <h3>Core Computer Science</h3>
        </div>
        {csSubjects.map((subject) => (
          <div className="bar-wrapper" key={subject.name}>
            <div className="bar-title">
              <span style={{ color: subject.color }}>{subject.icon}</span>
              <span>{subject.name}</span>
              <strong>{subject.level}%</strong>
            </div>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{
                  width: `${subject.level}%`,
                  background: `linear-gradient(90deg, ${subject.color}, #25C2FF)`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
