"use client";

import { motion } from "framer-motion";

export default function FluidBackground() {
  return (
    <div className="fluid-background">

      <motion.div
        className="fluid-shape fluid-shape-one"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fluid-shape fluid-shape-two"
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 60, -30, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fluid-shape fluid-shape-three"
        animate={{
          x: [0, 50, -60, 0],
          y: [0, 40, -50, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </div>
  );
}