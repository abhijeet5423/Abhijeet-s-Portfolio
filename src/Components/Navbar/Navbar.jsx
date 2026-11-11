import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection-based ScrollSpy with fallback for smooth, flicker-free section highlighting
  useEffect(() => {
    const sectionIds = ["about", "work", "skills", "experience", "education", "contact"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (sections.length === 0) return;

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.id;
              setActiveSection(id === "education" ? "experience" : id);
            }
          });
        },
        {
          rootMargin: "-20% 0px -55% 0px",
          threshold: 0,
        }
      );

      sections.forEach((sec) => observer.observe(sec));
      return () => observer.disconnect();
    } else {
      const handleScrollSpy = () => {
        const scrollPosition = window.scrollY + 130;
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(sectionIds[i]);
          if (el && el.offsetTop <= scrollPosition) {
            const id = sectionIds[i];
            setActiveSection(id === "education" ? "experience" : id);
            break;
          }
        }
      };

      window.addEventListener("scroll", handleScrollSpy, { passive: true });
      handleScrollSpy();
      return () => window.removeEventListener("scroll", handleScrollSpy);
    }
  }, []);

  // Close mobile drawer on outside click or Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

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
    { id: "experience", label: "Journey" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/abhijeet5423",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      href: "https://www.linkedin.com/in/abhijeetshukla2011",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <nav
      ref={navRef}
      className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}
      aria-label="Primary Navigation"
    >
      <div className="navbar-container">
        <button
          className="logo"
          onClick={() => handleMenuItemClick("about")}
          type="button"
          aria-label="Abhijeet Shukla Portfolio - Home"
        >
          <span
            className="status-dot"
            title="Available for opportunities"
            aria-label="Available for opportunities"
          ></span>
          <span className="tag">AS</span>
          <span className="name">Abhijeet Shukla</span>
        </button>

        <ul className="menu desktop-menu" role="menubar">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`menu-item ${activeSection === item.id ? "active" : ""}`}
              role="none"
            >
              <button
                type="button"
                onClick={() => handleMenuItemClick(item.id)}
                role="menuitem"
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="social-icons desktop-icons">
          {socialLinks.map((item) => (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              key={item.label}
            >
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
          aria-controls="mobile-navigation"
        >
          {isOpen ? <HiX className="menu-icon" /> : <HiMenu className="menu-icon" />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu" id="mobile-navigation">
          <ul className="menu" role="menu">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`menu-item ${activeSection === item.id ? "active" : ""}`}
                role="none"
              >
                <button
                  type="button"
                  onClick={() => handleMenuItemClick(item.id)}
                  role="menuitem"
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="social-icons">
            {socialLinks.map((item) => (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                key={item.label}
              >
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
