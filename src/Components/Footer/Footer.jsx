import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Intro", id: "about" },
    { name: "Selected Work", id: "work" },
    { name: "Technology", id: "skills" },
    { name: "Journey", id: "education" },
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
      link: "https://www.linkedin.com/in/abhijeet-shukla-8117b4225",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      link: "https://www.instagram.com/abhijeet___as/?hl=en",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <p className="mono-label">portfolio.shutdown</p>
          <h2 className="footer-name">Abhijeet Shukla</h2>
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

        <p className="footer-copy">
          &copy; 2026 Abhijeet Shukla. Built as a single-page developer workspace.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
