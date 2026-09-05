"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const services = [
  {
    title: "Web Development",
    description: "High-performance websites designed to convert and scale.",
    href: "/services/website-development",
  },
  {
    title: "Digital Marketing",
    description: "Performance campaigns built around leads, sales and growth.",
    href: "/services/digital-marketing",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive digital experiences designed for seamless interaction.",
    href: "/services/ui-ux-design",
  },
  {
    title: "SEO",
    description: "Organic search strategies for sustainable visibility.",
    href: "/services/seo",
  },
  {
    title: "AI Automation",
    description: "Smarter systems that reduce repetitive work and save time.",
    href: "/services/ai-solutions",
  },
  {
    title: "Domain & Hosting",
    description: "Reliable hosting infrastructure designed for speed and performance.",
    href: "/services/domain-hosting",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`nav-chevron ${open ? "nav-chevron-open" : ""}`}
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12L12 4M6 4H12V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    setServicesOpen(true);
  };

  const closeServices = () => {
    closeTimer.current = setTimeout(() => {
      setServicesOpen(false);
    }, 180);
  };

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <a href="#" className="site-logo">
            <Image
              src="/images/logo.png"
              alt="Fixonic Solutions"
              width={180}
              height={70}
              priority
            />
          </a>

          <nav className="site-nav">
            <a href="/" className="nav-link">
              Home
            </a>

            <div
              className="services-menu"
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
            >
              <button
                type="button"
                className={`nav-link services-trigger ${
                  servicesOpen ? "is-active" : ""
                }`}
                onClick={() => setServicesOpen((current) => !current)}
              >
                <span>Services</span>
                <ChevronIcon open={servicesOpen} />
              </button>

              {servicesOpen && (
                <div
                  className="dropdown-bridge"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServices}
                >
                  <div className="services-mega-menu">
                    <div className="mega-menu-header">
                      <div>
                        <span className="mega-label">Our Capabilities</span>

                        <h3>
                          Everything your brand
                          <br />
                          needs to grow.
                        </h3>
                      </div>

                      <p>
                        Strategy, creativity and technology combined to build
                        stronger digital businesses.
                      </p>
                    </div>

                    <div className="mega-services-grid">
                      {services.map((service, index) => (
                        <a
                          key={service.title}
                          href={service.href}
                          className="mega-service"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="mega-service-number">
                            0{index + 1}
                          </span>

                          <div className="mega-service-content">
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                          </div>

                          <span className="mega-service-arrow">
                            <ArrowIcon />
                          </span>
                        </a>
                      ))}
                    </div>

                    <div className="mega-footer">
                      <span>Have a project that doesn&apos;t fit a box?</span>
                       <div className="mega-footer-buttons">
                        <a
      href="/services"
      className="view-services-btn"
      onClick={() => setServicesOpen(false)}
    >
      <span>View All Services</span>
      <ArrowIcon />
    </a>



                      <a
                        href="https://api.whatsapp.com/send/?phone=923154928521"
                        className="view-services-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        
                        <span>Talk to us</span>
                        <ArrowIcon />
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="/about" className="nav-link">
              About Us
            </a>

            <a href="/contact" className="nav-link">
              Contact Us
            </a>
          </nav>

          <div className="header-right">
            <a
              href="https://api.whatsapp.com/send/?phone=923154928521"
              target="_blank"
              rel="noreferrer"
              className="quote-button"
            >
              <span>Get a Quote</span>
              <ArrowIcon />
            </a>

            <button
              type="button"
              className={`menu-toggle ${
                mobileOpen ? "menu-toggle-open" : ""
              }`}
              onClick={() => setMobileOpen((current) => !current)}
              aria-label="Open menu"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-panel ${mobileOpen ? "mobile-panel-open" : ""}`}>
        <div className="mobile-panel-content">
          <nav className="mobile-nav">
            <a href="/" onClick={() => setMobileOpen(false)}>
              Home
            </a>

            <div className="mobile-services">
              <button
                type="button"
                onClick={() => setServicesOpen((current) => !current)}
              >
                <span>Services</span>
                <ChevronIcon open={servicesOpen} />
              </button>

              <div
                className={`mobile-services-list ${
                  servicesOpen ? "mobile-services-list-open" : ""
                }`}
              >
                {services.map((service) => (
                  <a
                    href={service.href}
                    key={service.title}
                    onClick={() => {
                      setServicesOpen(false);
                      setMobileOpen(false);
                    }}
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>

            <a href="/about" onClick={() => setMobileOpen(false)}>
              About Us
            </a>

            <a href="/contact" onClick={() => setMobileOpen(false)}>
              Contact Us
            </a>
          </nav>

          <div className="mobile-bottom">
            <span>Have a project in mind?</span>

            <a
              href="https://api.whatsapp.com/send/?phone=923154928521"
              target="_blank"
              rel="noreferrer"
            >
              Start a Conversation
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}