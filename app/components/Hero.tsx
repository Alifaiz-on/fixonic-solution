"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          GLOBAL DIGITAL MARKETING & TECHNOLOGY AGENCY
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Transforming Ideas
          <br />
          Into Powerful Digital
          <br />
          Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          As a full-service <strong>global digital marketing agency</strong>,{" "}
          <strong>Fixonic Solutions</strong> delivers custom web development, SEO strategies,
          performance marketing, and AI automation to scale businesses worldwide.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.45,
          }}
        >
          <a
            href="https://api.whatsapp.com/send/?phone=923154928521"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            WhatsApp Now
          </a>

          <a href="#services" className="secondary-btn">
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}