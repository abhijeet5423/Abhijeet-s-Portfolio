import React from "react";
import { education } from "../../assets/constants";

const Education = () => {
  return (
    <section id="education" className="education-section">
      {/* Section Title */}
      <div className="education-header">
        <h2 className="education-title">EDUCATION</h2>
        <div className="education-underline"></div>
        <p className="education-subtext">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="education-timeline">
        {/* Vertical center line */}
        <div className="timeline-line"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`timeline-entry ${index % 2 === 0 ? "left" : "right"}`}
          >
            {/* Timeline Circle */}
            <div className="timeline-circle">
              <img src={edu.img} alt={edu.school} className="circle-image" />
            </div>

            {/* Education Card */}
            <div className="education-card">
              <div className="education-card-header">
                <div className="school-logo">
                  <img src={edu.img} alt={edu.school} />
                </div>
                <div className="school-info">
                  <h3 className="degree">{edu.degree}</h3>
                  <h4 className="school">{edu.school}</h4>
                  <p className="date">{edu.date}</p>
                </div>
              </div>
              <p className="grade">Grade: {edu.grade}</p>
              <p className="desc">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
