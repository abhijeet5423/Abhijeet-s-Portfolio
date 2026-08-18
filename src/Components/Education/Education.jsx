import { education } from "../../assets/constants";

const Education = () => {
  return (
    <>
      <section id="education" className="section education-section">
        <div className="section-heading">
          <p className="section-kicker">04 / JOURNEY</p>
          <h2>Education shaped the engineering foundation.</h2>
          <p>
            A path through computer science, software development, web systems,
            and the fundamentals behind dependable product work.
          </p>
        </div>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <article className="education-card" key={edu.id}>
              <div className="timeline-marker">
                <span>0{index + 1}</span>
              </div>
              <div className="education-card-header">
                <div className="school-logo">
                  <img src={edu.img} alt={`${edu.school} logo`} loading="lazy" />
                </div>
                <div className="school-info">
                  <p className="mono-label">{edu.date}</p>
                  <h3 className="degree">{edu.degree}</h3>
                  <h4 className="school">{edu.school}</h4>
                </div>
              </div>
              <p className="grade">Grade: {edu.grade}</p>
              <p className="desc">{edu.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section philosophy-section" id="philosophy">
        <div className="philosophy-card">
          <p className="section-kicker">ABOUT / PHILOSOPHY</p>
          <h2>Clean interfaces are only half the job. The system behind them has to hold up.</h2>
          <p>
            I care about software that feels clear to use and practical to maintain:
            thoughtful UI, predictable data flow, responsive layouts, and enough
            product thinking to make every feature useful.
          </p>
        </div>
      </section>
    </>
  );
};

export default Education;
