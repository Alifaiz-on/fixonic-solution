export default function IntroSection() {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-heading-wrap">
          <h2>
            We Build Digital Solutions That Turn Ambitious Ideas Into Business
            Growth.
          </h2>
        </div>

        <div className="intro-content-grid">
          <div className="intro-main-copy">
            <p>
              <strong>About us.</strong>{" "}
              <span>
                Fixonic Solutions brings strategy, design, technology, and
                marketing together under one roof. We understand your business
                first, then build digital systems around what actually moves it
                forward.
              </span>{" "}
              <strong>
                The result: digital solutions that don&apos;t just look good,
                they perform.
              </strong>
            </p>

            <a href="#process" className="intro-process-btn">
              <span>↗</span>
              Explore Our Process
            </a>
          </div>

          <div className="intro-side-copy">
            <p>
              From websites and branding to SEO, digital marketing, AI
              automation, mobile apps, and cloud solutions, every service is
              built around growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}