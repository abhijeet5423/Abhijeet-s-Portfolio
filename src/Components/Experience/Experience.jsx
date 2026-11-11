import { FaCode, FaRegLightbulb, FaRocket, FaSitemap } from "react-icons/fa";

const approachStages = [
  {
    number: "01",
    title: "Understand the Problem",
    summary:
      "Clarify user requirements and functional constraints before writing any code. In the Billing & POS project, this meant analyzing cashier speed bottlenecks, manual GST math errors, and multi-entity inventory tracking needs.",
    icon: <FaRegLightbulb />,
  },
  {
    number: "02",
    title: "Plan the Data and Application Flow",
    summary:
      "Design data models, API contracts, and state transitions early. Defining atomic MongoDB schemas for stock items, transaction logs, and customer ledgers ensured inventory calculations remained consistent across high-frequency checkouts.",
    icon: <FaSitemap />,
  },
  {
    number: "03",
    title: "Build the Interface and Backend",
    summary:
      "Construct modular, responsive React components wired to secured Express.js REST APIs. Focus on clean form validation, intuitive ergonomics, and role-based access control (RBAC) separating administrative insights from billing operations.",
    icon: <FaCode />,
  },
  {
    number: "04",
    title: "Test, Deploy and Improve",
    summary:
      "Validate edge cases, test printable invoice layouts across screen sizes, and deploy live production builds to Vercel. Continually refine UI feedback, error states, and database query performance based on practical usage.",
    icon: <FaRocket />,
  },
];

const practicalExperience = [
  {
    type: "Independent Product Engineering",
    title: "Full-Stack Developer (MERN)",
    organization: "Billing & POS Management System",
    dates: "2024 - Present",
    responsibilities: [
      "Engineered a full-stack billing and point-of-sale platform handling product catalogs, customer ledgers, and sales billing.",
      "Implemented Express.js REST APIs with JWT authentication and role-based access control (Admin & Cashier privileges).",
      "Created dynamic GST & non-GST billing workflows, sequential invoice generation, and real-time stock decrementing.",
      "Deployed and maintained the live web application on Vercel with responsive desktop and tablet layouts.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
  },
  {
    type: "Open-Source & Independent Client Builds",
    title: "Frontend Developer",
    organization: "Web Applications & UI Prototypes",
    dates: "2023 - 2024",
    responsibilities: [
      "Developed responsive, accessible web interfaces including Tourme (tourism discovery platform) and interactive prototypes.",
      "Applied modern CSS and React component architectures with zero runtime layout shift.",
      "Integrated third-party APIs and practiced deterministic state management.",
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Git"],
  },
];

const Experience = () => {
  return (
    <section
      className="section approach-section"
      id="experience"
      aria-label="Development Approach and Experience"
    >
      <div className="section-heading reveal-on-scroll">
        <p className="section-kicker">DEVELOPMENT PROCESS</p>
        <h2>How I Approach Development</h2>
        <p>
          A practical, user-centered development process focused on solving genuine business friction,
          planning clean data flows, building modular components, and delivering reliable software.
        </p>
      </div>

      <div className="approach-grid">
        {approachStages.map((stage, index) => (
          <article className={`approach-card reveal-on-scroll stagger-${index + 1}`} key={stage.number}>
            <div className="approach-card-header">
              <span className="approach-number">{stage.number}</span>
              <div className="approach-icon" aria-hidden="true">
                {stage.icon}
              </div>
            </div>
            <h3>{stage.title}</h3>
            <p>{stage.summary}</p>
          </article>
        ))}
      </div>

      <div className="experience-history-block">
        <div className="category-header reveal-on-scroll">
          <span className="mono-label">PRACTICAL BACKGROUND</span>
          <h3>Engineering Experience</h3>
          <p>
            Hands-on full-stack development, open-source work, and independent product engineering.
          </p>
        </div>

        <div className="experience-list">
          {practicalExperience.map((exp, index) => (
            <article className={`experience-item reveal-on-scroll stagger-${index + 1}`} key={exp.organization}>
              <div className="experience-item-header">
                <div>
                  <span className="mono-label">{exp.type}</span>
                  <h4 className="experience-role">{exp.title}</h4>
                  <p className="experience-org">{exp.organization}</p>
                </div>
                <span className="experience-dates">{exp.dates}</span>
              </div>

              <ul className="experience-bullets">
                {exp.responsibilities.map((bullet, i) => (
                  <li key={i}>
                    <span className="feature-bullet" aria-hidden="true">
                      &bull;
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="case-study-tech-list">
                {exp.technologies.map((tech) => (
                  <span className="case-study-tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
