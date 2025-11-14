import React, { useState, useEffect } from "react";
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
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
   { id: "education", label: "Education" },
    { id: "work", label: "Projects" },
    
     { id: "contact", label: "Contact me" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <span className="tag">&lt;</span>
          <span className="name">Abhijeet</span>
          <span className="tag">/</span>
          <span className="name">Shukla</span>
          <span className="tag">&gt;</span>
        </div>

        {/* Desktop Menu */}
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

        {/* Desktop Social Icons */}
        <div className="social-icons desktop-icons">
          <a
            href="https://github.com/abhijeet5423"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhijeetshukla2011"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle mobile-only" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX className="menu-icon" /> : <HiMenu className="menu-icon" />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
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
            <div className="social-icons">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
