import React from "react";

// Import your images here
import scorekaroimg from "../../assets/scorekaroproject.png";
import tourismimg from "../../assets/tourismproject.png";
import diceimg from "../../assets/dicegame.png";

const projectList = [
  {
    id: 1,
    title: "Scorekaro - Full Stack Web App",
    description:
      "A complete MERN application with authentication and CRUD operations. Users can score and record the match ball by ball.",
    image: scorekaroimg,
    tech: ["React", "Node.js", "MongoDB"],
    codeLink: "https://github.com/abhijeet5423/Scoreit-", // ADD YOUR LINK HERE
  },
  {
    id: 2,
    title: "Tourism Project",
    description:
      "A fully responsive tourism website built using pure React and CSS.",
    image: tourismimg,
    tech: ["React", "CSS"],
    codeLink: "https://github.com/abhijeet5423/Tourme-", // ADD YOUR LINK HERE
  },
  {
    id: 3,
    title: "Mini Dice Game",
    description:
      "A mini dice game built to practice JavaScript logic and React integration.",
    image: diceimg,
    tech: ["React", "JavaScript"],
    codeLink: "https://github.com/abhijeet5423/Dice-game", // ADD YOUR LINK HERE
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

            {/* PROJECT BUTTON */}
            <a
              href={p.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="wrk-btn"
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
