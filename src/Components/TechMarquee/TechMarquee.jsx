const marqueeItems = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "JWT",
  "Tailwind CSS",
  "JavaScript",
  "SQL",
  "Postman",
  "GitHub",
  "Figma",
  "Data Structures",
];

const TechMarquee = () => {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="tech-marquee" aria-label="Technology marquee">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span className="marquee-item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechMarquee;
