"use client";

import { motion } from "framer-motion";

const services = [
  "Website Development",
  "UI/UX Design",
  "Search Engine Optimization",
  "Digital Marketing",
  "Tech Support",
  "eCommerce Solutions",
  "Custom Web Applications",
  "WordPress Development",
];

export default function AboutContent() {
  return (
    <section className="about-services">

      <div className="about-services-container">

        <motion.div
          className="about-services-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="about-label">
            WHAT WE DO
          </span>

          <h2>
            Building Digital
            Solutions That Create
            Real Impact
          </h2>

          <p>
            At Fixonic Solutions, we create digital experiences
            that help businesses grow. From websites and branding
            to marketing and technology solutions, we build systems
            designed for performance and scalability.
          </p>

          <div className="services-list">

            {services.map((service, index) => (
              <motion.div
                key={service}
                className="service-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
              >

                <span>
                  ↗
                </span>

                {service}

              </motion.div>
            ))}

          </div>

        </motion.div>


        <motion.div
          className="about-services-image"
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="image-glow"></div>

          <img
            src="/images/banner2.jpg    "
            alt="Digital Technology"
          />

        </motion.div>

      </div>

    </section>
  );
}