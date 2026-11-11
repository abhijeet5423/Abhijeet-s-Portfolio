import {
  FaCss3Alt,
  FaCubes,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNetworkWired,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import {
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Component architectures, responsive layout systems, and modern browser interfaces.",
    skills: [
      { name: "React.js", icon: <FaReact />, color: "#61dafb" },
      { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
      { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
      { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Server architectures, RESTful API design, authentication, and secure data routing.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a" },
      { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
      { name: "REST APIs", icon: <TbApi />, color: "#25c2ff" },
      { name: "JWT", icon: <SiJsonwebtokens />, color: "#d63aff" },
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Schema modeling, document stores, relational structures, and query efficiency.",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
      { name: "MySQL", icon: <SiMysql />, color: "#00758f" },
      { name: "SQL", icon: <FaDatabase />, color: "#25c2ff" },
    ],
  },
  {
    id: "tools",
    title: "Development Tools",
    description: "Version control workflows, API testing suites, interface prototyping, and editor tooling.",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#f1502f" },
      { name: "GitHub", icon: <FaGithub />, color: "#f7f7f8" },
      { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
      { name: "Figma", icon: <FaFigma />, color: "#a259ff" },
      { name: "VS Code", icon: <VscCode />, color: "#25c2ff" },
    ],
  },
];

const csFoundations = [
  {
    name: "Data Structures and Algorithms",
    icon: <GiBrain />,
    summary: "Arrays, lists, trees, graphs, sorting, searching, and time/space complexity analysis.",
  },
  {
    name: "Object-Oriented Programming",
    icon: <FaCubes />,
    summary: "Encapsulation, inheritance, polymorphism, abstraction, and modular system design.",
  },
  {
    name: "Operating Systems",
    icon: <MdComputer />,
    summary: "Process scheduling, thread lifecycle, memory management, and file systems.",
  },
  {
    name: "Computer Networks",
    icon: <FaNetworkWired />,
    summary: "OSI & TCP/IP stack, HTTP/HTTPS, DNS, client-server models, and sockets.",
  },
  {
    name: "Database Fundamentals",
    icon: <FaDatabase />,
    summary: "ACID transactions, indexing strategies, normalization, and relational vs. document stores.",
  },
];

const Skills = () => {
  return (
    <section className="section skills-section" id="skills" aria-label="Technology and Skills">
      <div className="section-heading reveal-on-scroll">
        <p className="section-kicker">03 / TECHNOLOGY</p>
        <h2>A practical stack for shipping full product flows.</h2>
        <p>
          Frontend craft, backend architectures, database modeling, and computer science
          fundamentals organized across real-world product engineering disciplines.
        </p>
      </div>

      <div className="skills-categories-grid">
        {skillCategories.map((category, index) => (
          <article
            className={`skills-category-card spotlight-surface reveal-on-scroll stagger-${(index % 2) + 1}`}
            key={category.id}
          >
            <div className="category-header">
              <span className="mono-label">{category.id}</span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>

            <div className="skills-chip-list">
              {category.skills.map((skill) => (
                <div className="skill-chip" key={skill.name}>
                  <span className="skill-chip-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  <span className="skill-chip-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="cs-foundations-panel spotlight-surface reveal-on-scroll">
        <div className="category-header cs-header">
          <span className="mono-label">KNOWLEDGE DOMAINS</span>
          <h3>Computer Science Foundations</h3>
          <p>
            Core theoretical principles and system fundamentals informing dependable,
            scalable software engineering.
          </p>
        </div>

        <div className="cs-foundations-grid">
          {csFoundations.map((foundation) => (
            <div className="cs-card" key={foundation.name}>
              <div className="cs-card-icon" aria-hidden="true">
                {foundation.icon}
              </div>
              <div className="cs-card-content">
                <strong>{foundation.name}</strong>
                <p>{foundation.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
