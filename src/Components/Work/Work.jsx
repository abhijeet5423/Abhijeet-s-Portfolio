import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projects } from "../../assets/constants";

const Work = () => {
  return (
    <section className="section wrk-section" id="work">
      <div className="section-heading">
        <p className="section-kicker">02 / SELECTED WORK</p>
        <h2>Systems that move from prototype to product.</h2>
        <p>
          A focused set of projects showing dashboard logic, responsive interfaces,
          backend thinking, and product polish.
        </p>
      </div>

      <div className="wrk-grid">
        {projects.map((project, index) => (
          <article className="wrk-card" key={project.id}>
            <div className="wrk-index">0{index + 1}</div>
            <div className="wrk-image-wrapper">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="wrk-image"
                loading="lazy"
              />
            </div>

            <div className="wrk-content">
              <p className="mono-label">{project.eyebrow}</p>
              <h3 className="wrk-card-title">{project.title}</h3>
              <p className="wrk-description">{project.description}</p>

              {project.demoLogin && (
                <p className="wrk-demo-login">
                  <strong>Demo Login:</strong> {project.demoLogin} <span>/</span>{" "}
                  <strong>Password:</strong> {project.demoPassword}
                </p>
              )}

              <div className="wrk-footer">
                <div className="wrk-tech-list">
                  {project.tech.map((tech) => (
                    <span className="wrk-tech" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wrk-btn"
                >
                  {project.action}
                  <FaArrowUpRightFromSquare aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
