import { FaArrowDown, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../../assets/abhiport.png";
import cvFile from "../../assets/updated cv.pdf";

const About = () => {
  return (
    <section className="hero-section" id="about">
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="section-kicker">01 / INTRO</p>
          <h1>Developer control room for real software.</h1>
          <p className="hero-subtitle">
            I build responsive, interactive software products with React.js, Node.js,
            MongoDB, JavaScript, HTML, CSS, and UI/UX thinking from idea to production.
          </p>

          <div className="hero-actions">
            <a href={cvFile} download className="primary-action">
              <FaDownload aria-hidden="true" />
              Download CV
            </a>
            <a href="#work" className="secondary-action">
              <FaArrowDown aria-hidden="true" />
              Selected Work
            </a>
          </div>

          <div className="hero-meta-grid" aria-label="Portfolio highlights">
            <div>
              <span>Focus</span>
              <strong>MERN products</strong>
            </div>
            <div>
              <span>Mode</span>
              <strong>Build, ship, refine</strong>
            </div>
            <div>
              <span>Stack</span>
              <strong>React / Node / MongoDB</strong>
            </div>
          </div>
        </div>

        <div className="hero-panel" aria-label="Developer profile summary">
          <div className="profile-terminal">
            <div className="terminal-topbar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img src={profileImage} alt="Abhijeet Shukla" className="about-image" />
            <div className="terminal-content">
              <p className="mono-label">currently_building</p>
              <h2>Scalable web systems with polished user interfaces.</h2>
              <p>
                Clean frontend experiences, practical backend flows, and product details
                that make software feel reliable.
              </p>
            </div>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/abhijeet5423" target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/abhijeetshukla2011" target="_blank" rel="noopener noreferrer">
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
