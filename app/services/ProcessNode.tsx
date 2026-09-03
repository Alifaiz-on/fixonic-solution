"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const CARD_W = 180;
const CARD_H = 120;
const PADDING = 20;

export default function ProcessNode({
  data,
  position,
  canvas,
  updateNode,
  draggable = true,
}: any) {
  // x/y are the ONLY source of truth for this card's position.
  // Previously position was driven by both style.left/top (React state)
  // AND framer-motion's internal drag transform at the same time —
  // the two stacked, so every drag moved the card further than the
  // pointer actually moved, pushing it past the canvas edges.
  const x = useMotionValue(position.x);
  const y = useMotionValue(position.y);

  // stay in sync if the parent reclamps position (e.g. on resize)
  useEffect(() => {
    x.set(position.x);
    y.set(position.y);
  }, [position.x, position.y]);

  function clampAndReport() {
    if (!canvas?.current) return;

    const rect = canvas.current.getBoundingClientRect();

    const nextX = Math.max(
      PADDING,
      Math.min(x.get(), rect.width - CARD_W - PADDING)
    );
    const nextY = Math.max(
      PADDING,
      Math.min(y.get(), rect.height - CARD_H - PADDING)
    );

    if (nextX !== x.get()) x.set(nextX);
    if (nextY !== y.get()) y.set(nextY);

    updateNode(data.id, nextX, nextY);
  }

  // Mobile: plain stacked card, no absolute positioning, no drag —
  // a free-drag canvas can't shrink to phone width with 7 cards and
  // stay usable, so it falls back to normal document flow.
  if (!draggable) {
    return (
      <div className="process-node process-node--static">
        <div className="process-card">
          <span>{data.number}</span>
          <h3>{data.title}</h3>
          <p>{data.text}</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="process-node"
      style={{ x, y }}
      drag
      dragMomentum={false}
      dragElastic={0}
      onDrag={clampAndReport}
      onDragEnd={clampAndReport}
      whileDrag={{ scale: 1.06, zIndex: 50 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 32 }}
    >
      <div className="process-card">
        <span>{data.number}</span>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
      </div>
    </motion.div>
  );
}