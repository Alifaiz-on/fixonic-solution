"use client";

import type { CSSProperties } from "react";

const services = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "High-performance websites designed around clarity, user experience and business growth.",
    capabilities: [
      "UI/UX Design",
      "Development",
      "Responsive",
      "SEO Ready",
    ],
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Performance-focused campaigns designed to turn attention into leads, sales and measurable growth.",
    capabilities: [
      "Meta Ads",
      "Google Ads",
      "Strategy",
      "Performance",
    ],
  },
  {
    number: "03",
    title: "Branding & Design",
    description:
      "Distinct visual systems that give businesses a stronger, more consistent brand presence.",
    capabilities: [
      "Brand Identity",
      "Graphic Design",
      "Social Creative",
      "Campaign Design",
    ],
  },
  {
    number: "04",
    title: "Search Engine Optimization",
    description:
      "Search strategies built to improve visibility, organic traffic and long-term discoverability.",
    capabilities: [
      "Technical SEO",
      "On-Page SEO",
      "Local SEO",
      "Content",
    ],
  },
  {
    number: "05",
    title: "AI Automation",
    description:
      "Practical automation systems that reduce repetitive work and help teams operate more efficiently.",
    capabilities: [
      "AI Workflows",
      "Automation",
      "Integrations",
      "Optimization",
    ],
  },
  {
    number: "06",
    title: "Mobile & Cloud",
    description:
      "Scalable mobile and cloud solutions designed around performance, reliability and future growth.",
    capabilities: [
      "Mobile Apps",
      "Cloud",
      "APIs",
      "Scalable Systems",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-left">
          <div className="services-left-sticky">
            <span className="services-kicker">Services</span>

            <h2>
              Our Core
              <br />
              Services
            </h2>

            <p>
              Digital services built to help businesses create, grow and scale.
            </p>
          </div>
        </div>

        <div className="services-stack">
          {services.map((service, index) => (
            <article
              className="service-card"
              key={service.title}
              style={
                {
                  "--card-index": index,
                } as CSSProperties
              }
            >
              <div className="service-card-inner">
                <div className="service-card-top">
                  <span>{service.number}</span>

                  <span className="service-card-rule" />

                  <span>Fixonic Solutions</span>
                </div>

                <div className="service-card-main">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <div className="service-card-bottom">
                  <div className="service-capabilities">
                    {service.capabilities.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <a href="#contact">
                    Explore
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}