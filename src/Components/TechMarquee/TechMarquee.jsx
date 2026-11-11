const coreToolchain = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "Tailwind CSS",
  "REST APIs",
  "Git",
];

const TechMarquee = () => {
  return (
    <aside className="tech-strip-section reveal-on-scroll" aria-label="Core Technology Summary">
      <div className="tech-strip-container">
        <span className="tech-strip-label">CORE TOOLCHAIN</span>
        <div className="tech-strip-items">
          {coreToolchain.map((tech) => (
            <span className="tech-strip-badge" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default TechMarquee;
