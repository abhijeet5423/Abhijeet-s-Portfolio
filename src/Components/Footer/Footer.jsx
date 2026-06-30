import React from "react";
import {
   FaGithub,

  FaLinkedin,
  FaInstagram,
 
} from "react-icons/fa";


const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/abhijeet5423",
    },
   
  {
  icon: <FaLinkedin />,
  link: "https://www.linkedin.com/in/abhijeet-shukla-8117b4225",
},

    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/abhijeet___as/?hl=en",
    },
   
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-name">Abhijeet Shukla</h2>

        <nav className="footer-nav">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="footer-nav-button"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="footer-social">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="footer-copy">
          © 2026 Abhijeet Shukla. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
