import React from "react";

// Import your images here
import billingimg from "../../assets/billingsoftware.png";
import tourismimg from "../../assets/tourismproject.png";
import diceimg from "../../assets/dicegame.png";

const projectList = [
  {
    id: 1,
    title: "Billing Software | MERN Stack",
    description:
      "Developed a full-stack billing and POS software using MongoDB, Express.js, React.js, and Node.js for managing business operations efficiently. Implemented product management, customer management, supplier management, purchase tracking, sales billing, stock management, expense tracking, profit/loss reports, and invoice generation. Added role-based access control, dashboard analytics, GST/non-GST billing, sequential GST invoice numbering, and responsive invoice layouts.",
    image: billingimg,
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "CSS"],
    codeLink: "https://billing-software-mvp.vercel.app/admin/dashboard",
  },
  {
    id: 2,
    title: "Tourism Project",
    description:
      "A fully responsive tourism website built using pure React and CSS.",
    image: tourismimg,
    tech: ["React", "CSS"],
    codeLink: "https://github.com/abhijeet5423/Tourme-",
  },
  {
    id: 3,
    title: "Mini Dice Game",
    description:
      "A mini dice game built to practice JavaScript logic and React integration.",
    image: diceimg,
    tech: ["React", "JavaScript"],
    codeLink: "https://github.com/abhijeet5423/Dice-game",
  },
];

const Work = () => {
  return (
    <section className="wrk-section" id="work">
      <h2 className="wrk-title">My Work</h2>

      <div className="wrk-grid">
        {projectList.map((p) => (
          <div className="wrk-card" key={p.id}>
            {/* IMAGE SECTION */}
            <div className="wrk-image-wrapper">
              <img src={p.image} alt={p.title} className="wrk-image" />
            </div>

            {/* TEXT SECTION */}
            <h3 className="wrk-card-title">{p.title}</h3>
            <p className="wrk-description">{p.description}</p>

            {/* TECHNOLOGIES */}
            <div className="wrk-tech-list">
              {p.tech.map((t, index) => (
                <span className="wrk-tech" key={index}>
                  {t}
                </span>
              ))}
            </div>

            {/* DEMO LOGIN ONLY FOR BILLING PROJECT */}
            {p.id === 1 && (
              <p className="wrk-demo-login">
                <strong>Demo Login:</strong> admin@example.com |{" "}
                <strong>Password:</strong> admin123
              </p>
            )}

            {/* PROJECT BUTTON */}
            <a
              href={p.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="wrk-btn"
            >
              {p.id === 1 ? "View Live Project" : "View Code"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;