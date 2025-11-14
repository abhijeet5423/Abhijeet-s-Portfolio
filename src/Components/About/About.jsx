import React from 'react';

import profileImage from '../../assets/abhiport.jpg'; // Replace with your actual image path
import cvFile from '../../assets/updated cv.pdf'; // Replace with your actual CV file

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image-container">
          <img src={profileImage} alt="Profile" className="about-image" />
        </div>
        <div className="about-text fade-in">
          <h2>About Me</h2>
          <p>
            Hi! I'm a passionate Web Developer with experience in building responsive and interactive websites using HTML, CSS, JavaScript, React.js, MongoDb, Nodejs and UI/UX .
            I love creating clean and user-friendly interfaces, and I’m constantly exploring new tools and technologies to improve my skills.
          </p>

          {/* Download CV Button */}
          <a href={cvFile} download className="download-btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
