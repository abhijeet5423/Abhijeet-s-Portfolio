import { FaArrowDown, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../../assets/abhiport.png";
import cvFile from "../../assets/updated cv.pdf";

const About = () => {
  const handleScrollToWork = (e) => {
    e.preventDefault();
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" id="about" aria-label="Introduction and summary">
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="section-kicker hero-reveal-kicker">FULL-STACK DEVELOPER</p>
          <h1 className="hero-title hero-reveal-title">
            I build web applications <br className="hero-br" />that solve real problems.
          </h1>
          <p className="hero-subtitle hero-reveal-subtitle">
            I'm Abhijeet, a developer focused on building practical web products with
            React, Node.js and MongoDB &mdash; from interfaces to backend workflows.
          </p>

          <div className="hero-actions hero-reveal-actions">
            <a
              href={cvFile}
              download="Abhijeet_Shukla_CV.pdf"
              className="primary-action"
              aria-label="Download Abhijeet Shukla's CV"
            >
              <FaDownload aria-hidden="true" />
              <span>Download CV</span>
            </a>
            <a
              href="#work"
              onClick={handleScrollToWork}
              className="secondary-action"
              aria-label="Scroll to selected projects"
            >
              <FaArrowDown aria-hidden="true" />
              <span>Selected Work</span>
            </a>
          </div>

          <div className="hero-meta-grid hero-reveal-meta" aria-label="Professional highlights">
            <div className="hero-meta-item">
              <span className="mono-label">Core Technologies</span>
              <strong>React.js &middot; Node.js &middot; MongoDB</strong>
            </div>
            <div className="hero-meta-item">
              <span className="mono-label">Development Focus</span>
              <strong>Full-Stack Web &amp; Product Workflows</strong>
            </div>
          </div>
        </div>

        <div className="hero-portrait-card hero-reveal-portrait">
          <div className="hero-portrait-wrapper spotlight-surface" data-parallax-speed="0.04">
            <img
              src={profileImage}
              alt="Abhijeet Shukla - Full-Stack Developer"
              className="hero-portrait-img"
              loading="eager"
            />
          </div>

          <div className="hero-socials" aria-label="Profile links">
            <a
              href="https://github.com/abhijeet5423"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abhijeetshukla2011"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
