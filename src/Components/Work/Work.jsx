import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../assets/constants";

const Work = () => {
  return (
    <section className="section wrk-section" id="work" aria-label="Selected Projects Case Studies">
      <div className="section-heading reveal-on-scroll">
        <p className="section-kicker">02 / SELECTED WORK</p>
        <h2>Systems that move from prototype to product.</h2>
        <p>
          In-depth case studies illustrating full-stack MERN architecture, real-world business
          logic, responsive UI engineering, and production deployment.
        </p>
      </div>

      <div className="wrk-grid">
        {projects.map((project, index) => (
          <article
            className={`case-study-card spotlight-surface reveal-on-scroll ${index % 2 === 1 ? "alternate-layout" : ""}`}
            key={project.id}
          >
            <div className="case-study-media-col" data-parallax-speed="0.02">
              <div className="case-study-media">
                <img
                  src={project.image}
                  alt={`${project.title} interface screenshot`}
                  className="case-study-img"
                  loading="lazy"
                />
              </div>

              {project.demoCredentials && (
                <div
                  className="demo-credentials-box"
                  role="region"
                  aria-label="Restricted demo sandbox access"
                >
                  <div className="demo-credentials-header">
                    <span className="status-dot"></span>
                    <span className="mono-label">Sandbox Credentials</span>
                  </div>
                  <p className="demo-credentials-note">{project.demoCredentials.note}</p>
                  <div className="demo-credentials-grid">
                    <span>
                      <strong>Email:</strong> <code>{project.demoCredentials.email}</code>
                    </span>
                    <span>
                      <strong>Password:</strong> <code>{project.demoCredentials.password}</code>
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="case-study-content">
              <span className="case-study-kicker">
                {project.id} / {project.eyebrow}
              </span>
              <h3 className="case-study-title">{project.title}</h3>
              <p className="case-study-desc">{project.description}</p>

              <div className="case-study-narrative">
                <div className="narrative-block">
                  <span className="mono-label">The Problem</span>
                  <p>{project.problem}</p>
                </div>
                <div className="narrative-block">
                  <span className="mono-label">My Contribution</span>
                  <p>{project.contribution}</p>
                </div>
              </div>

              <div className="case-study-features-block">
                <span className="mono-label">Key Implemented Features</span>
                <ul className="case-study-features">
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <span className="feature-bullet" aria-hidden="true">
                        &bull;
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="case-study-tech-list">
                {project.tech.map((tech) => (
                  <span className="case-study-tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="case-study-actions">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-action"
                    aria-label={`Open live demo of ${project.title}`}
                  >
                    <span>Live Demo</span>
                    <FaArrowUpRightFromSquare aria-hidden="true" />
                  </a>
                )}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-action"
                    aria-label={`View source code for ${project.title} on GitHub`}
                  >
                    <FaGithub aria-hidden="true" />
                    <span>View Code</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
