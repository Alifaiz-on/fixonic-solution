const projects = [
  {
    title: "Digital Experience",
    image: "/images/banner1.png",
    tags: ["Web Design", "Development", "UI/UX"],
  },
  {
    title: "Product Experience",
    image: "/images/banner2.jpg",
    tags: ["App Design", "Web Design", "Product"],
  },
  {
    title: "Brand Experience",
    image: "/images/banner2.jpg",
    tags: ["Branding", "Creative", "Campaign"],
  },
  {
    title: "Growth Campaign",
    image: "/images/banner1.png",
    tags: ["Marketing", "Performance", "Strategy"],
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="work">
      <div className="projects-container">
        <div className="projects-heading">
          <h2>
            <span>Our highlights.</span>{" "}
            <strong className="grey-Heading">
              Recent
              <br />
              projects we&apos;re proud of.
            </strong>
          </h2>
        </div>

        <div className="projects-copy">
          <p className="projects-copy-left">
            We work with growing businesses to create digital experiences that
            look sharp, perform well, and support real business growth.
          </p>

          <p className="projects-copy-right">
            Explore selected projects across web, branding, marketing, and
            digital product design.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <a href="#" className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-card-overlay">
                  <h3>{project.title}</h3>

                  <span>View Project ↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}