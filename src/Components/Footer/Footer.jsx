import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Intro", id: "about" },
    { name: "Work", id: "work" },
    { name: "Tech", id: "skills" },
    { name: "Journey", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      link: "https://github.com/abhijeet5423",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/abhijeetshukla2011",
    },
  ];

  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-brand-title">
            <span className="footer-tag">AS</span>
            <div>
              <h2 className="footer-name">Abhijeet Shukla</h2>
              <p className="footer-role">Full-Stack Web Developer</p>
            </div>
          </div>
          <p className="footer-bio">
            Building reliable, practical web applications with React, Node.js, and modern web architectures.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="footer-nav-button"
              type="button"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="footer-social">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Abhijeet Shukla. All rights reserved.
          </p>
          <p className="footer-built-with">
            Designed with dark cyber-industrial precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
