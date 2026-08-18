import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "Intro" },
    { id: "work", label: "Work" },
    { id: "skills", label: "Tech" },
    { id: "education", label: "Journey" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/abhijeet5423", label: "GitHub", icon: <FaGithub /> },
    {
      href: "https://www.linkedin.com/in/abhijeetshukla2011",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <button className="logo" onClick={() => handleMenuItemClick("about")} type="button">
          <span className="status-dot"></span>
          <span className="tag">AS</span>
          <span className="name">Abhijeet Shukla</span>
        </button>

        <ul className="menu desktop-menu">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`menu-item ${activeSection === item.id ? "active" : ""}`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>

        <div className="social-icons desktop-icons">
          {socialLinks.map((item) => (
            <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} key={item.label}>
              <span className="icon">{item.icon}</span>
            </a>
          ))}
        </div>

        <button
          className="menu-toggle mobile-only"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX className="menu-icon" /> : <HiMenu className="menu-icon" />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <ul className="menu">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`menu-item ${activeSection === item.id ? "active" : ""}`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
              </li>
            ))}
          </ul>
          <div className="social-icons">
            {socialLinks.map((item) => (
              <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} key={item.label}>
                <span className="icon">{item.icon}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
