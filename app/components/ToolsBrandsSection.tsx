"use client";

import { motion } from "framer-motion";

const tools = [
  {
    name: "Figma",
    image: "/images/icons/figma.avif",
  },
  {
    name: "After Effects",
    image: "/images/icons/adobeae.avif",
  },
  {
    name: "Photoshop",
    image: "/images/icons/photoshop.avif",
  },
  {
    name: "Illustrator",
    image: "/images/icons/adobeAI.avif",
  },
  {
    name: "Framer",
    image: "/images/icons/framer.avif",
  },
  {
    name: "Gemini",
    image: "/images/icons/copilot.avif",
  },
  {
    name: "PowerPoint",
    image: "/images/icons/adobeslides.avif",
  },
  {
    name: "WordPress",
    image: "/images/icons/wordpress.png",
  },
  {
    name: "Shopify",
    image: "/images/icons/shopify.png",
  },
];

const strengths = [
  {
    title: "Business Strategy",
    subtitle: "Turn Ideas Into Digital Opportunities",
    description:
      "We help businesses identify the right digital opportunities, define clear goals, and create practical strategies that support long-term growth.",
  },
  {
    title: "Brand Identity",
    subtitle: "Build a Brand People Remember",
    description:
      "We create a consistent and recognizable brand identity with the right visual language, messaging, and creative direction across every digital touchpoint.",
  },
  {
    title: "Performance & Optimization",
    subtitle: "Make Every Digital Experience Better",
    description:
      "We analyze, refine, and optimize digital experiences to improve performance, usability, engagement, and overall customer satisfaction.",
  },
  {
    title: "Technology & Innovation",
    subtitle: "Stay Ahead With Modern Technology",
    description:
      "We explore modern tools, platforms, automation, and AI-powered solutions to help businesses work smarter and adapt to changing digital demands.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const toolVariants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.92,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: index * 0.05,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function ToolsBrandsSection() {
  return (
    <section className="tools-brands-section">
      <div className="tools-brands-container">
        <motion.div
          className="tools-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h2>Our Tools &</h2>
        </motion.div>

        <div className="tools-row-wrap">
          <div className="tools-list">
            {tools.map((tool, index) => (
              <motion.div
                className="tool-item"
                key={tool.name}
                custom={index}
                variants={toolVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{
                  y: -5,
                  scale: 1.04,
                }}
              >
                <img src={tool.image} alt={tool.name} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="brands-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h2>Your Brands</h2>
        </motion.div>

        <motion.div
          className="brands-intro"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.08,
          }}
        >
          <p>
            We&apos;ve delivered successful projects across healthcare,
            education, real estate, eCommerce, corporate, logistics, finance,
            and service industries, helping businesses strengthen their digital
            presence and achieve measurable growth.
          </p>
        </motion.div>

        <div className="strengths-grid">
          {strengths.map((item, index) => (
            <motion.article
              className={`strength-card strength-card-${index + 1}`}
              key={item.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{
                y: -7,
                scale: 1.01,
              }}
            >
              <h3>{item.title}</h3>

              <h4>{item.subtitle}</h4>

              <motion.span
                className="strength-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: 0.15 + index * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />

              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}