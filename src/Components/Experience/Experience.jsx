import { FaCodeBranch, FaDatabase, FaLayerGroup, FaRocket } from "react-icons/fa";

const buildSteps = [
  {
    icon: <FaLayerGroup />,
    title: "Shape the Product",
    copy: "Translate the idea into screens, flows, entities, roles, and states before writing the core interface.",
  },
  {
    icon: <FaDatabase />,
    title: "Model the System",
    copy: "Define data, API boundaries, validation, permissions, and reporting needs so the product can scale cleanly.",
  },
  {
    icon: <FaCodeBranch />,
    title: "Build the Interface",
    copy: "Create responsive React experiences with practical components, clear hierarchy, and reliable interactions.",
  },
  {
    icon: <FaRocket />,
    title: "Ship and Improve",
    copy: "Test the important paths, deploy the working product, then refine performance, usability, and edge cases.",
  },
];

const Experience = () => {
  return (
    <section className="section architecture-section" id="architecture">
      <div className="section-heading split-heading">
        <div>
          <p className="section-kicker">SYSTEM DESIGN</p>
          <h2>Architecture / How I Build</h2>
        </div>
        <p>
          My process is simple: understand the workflow, make the system usable,
          and keep the implementation grounded in real product behavior.
        </p>
      </div>

      <div className="architecture-grid">
        {buildSteps.map((step, index) => (
          <article className="architecture-card" key={step.title}>
            <span className="architecture-number">0{index + 1}</span>
            <div className="architecture-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
