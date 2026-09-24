export default function IntroSection() {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-heading-wrap">
          <h2>
            Your Full-Service Digital Transformation Partner For Scalable
            Business Growth.
          </h2>
        </div>

        <div className="intro-content-grid">
          <div className="intro-main-copy">
            <p>
              <strong>About us.</strong>{" "}
              <span>
                As an <strong>international digital marketing agency</strong> and technology innovator,
                Fixonic Solutions unites custom web development, performance marketing, and AI automation
                under one roof. Headquartered in Pakistan and serving businesses worldwide, we understand
                your market first, then build robust digital systems that drive measurable revenue.
              </span>{" "}
              <strong>
                The result: custom digital solutions that don&apos;t just look good,
                they perform and scale.
              </strong>
            </p>

            <a href="/about" className="intro-process-btn">
              <span>↗</span>
              More About Us
            </a>
          </div>

          <div className="intro-side-copy">
            <p>
              From custom web development and branding to SEO, performance marketing,
              AI automation, and cloud systems, every solution is engineered for global business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}