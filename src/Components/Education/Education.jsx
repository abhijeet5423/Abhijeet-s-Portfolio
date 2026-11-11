import { education } from "../../assets/constants";

const Education = () => {
  return (
    <section id="education" className="section education-section" aria-label="Education and Journey">
      <div className="section-heading reveal-on-scroll">
        <p className="section-kicker">04 / JOURNEY</p>
        <h2>Education shaped the engineering foundation.</h2>
        <p>
          A rigorous academic background in computer science, software development, web systems,
          and the engineering principles behind dependable digital products.
        </p>
      </div>

      <div className="education-timeline">
        {education.map((edu, index) => (
          <article className={`education-card reveal-on-scroll stagger-${index + 1}`} key={edu.id}>
            <div className="education-card-header">
              <div className="school-logo">
                <img
                  src={edu.img}
                  alt={`${edu.school} official insignia`}
                  loading="lazy"
                />
              </div>

              <div className="school-info">
                <div className="school-info-top">
                  <span className="mono-label">{edu.date}</span>
                  <span className="education-index">0{index + 1}</span>
                </div>
                <h3 className="degree">{edu.degree}</h3>
                <h4 className="school">{edu.school}</h4>
              </div>
            </div>

            <div className="education-card-body">
              <div className="education-grade-pill">
                <strong>Academic Result:</strong> <span>{edu.grade}</span>
              </div>
              <p className="desc">{edu.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <aside className="philosophy-quote-wrapper reveal-on-scroll" aria-label="Engineering Philosophy">
        <blockquote className="philosophy-quote">
          &ldquo;Clean interfaces are only half the job. The system behind them has to hold up.&rdquo;
        </blockquote>
        <p className="philosophy-author">
          Thoughtful UI, predictable data flow, responsive layouts, and engineering that makes software dependable.
        </p>
      </aside>
    </section>
  );
};

export default Education;
