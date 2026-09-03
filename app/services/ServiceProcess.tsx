"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ProcessNode from "./ProcessNode";
import ProcessLines from "./ProcessLines";

const CARD_W = 180;
const CARD_H = 120;
const PADDING = 20;

// Reference canvas the layout was designed against (matches the
// approved screenshot). Each card's x/y is a position on THIS
// 1200x650 canvas — everything else scales off it.
const DESIGN_W = 1200;
const DESIGN_H = 650;

const layout = [
  { id: "brief", number: "01", title: "Client Brief", text: "Understanding goals", x: 85, y: 80 },
  { id: "research", number: "02", title: "Research", text: "Market analysis", x: 168, y: 364 },
  { id: "strategy", number: "03", title: "Strategy", text: "Planning direction", x: 367, y: 105 },
  { id: "design", number: "04", title: "UI/UX Design", text: "Digital experience", x: 709, y: 71 },
  { id: "development", number: "05", title: "Development", text: "Building solutions", x: 404, y: 497 },
  { id: "testing", number: "06", title: "Testing", text: "Quality checks", x: 936, y: 211 },
  { id: "launch", number: "07", title: "Launch", text: "Final delivery", x: 911, y: 495 },
];

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max));
}

// Scales each card's design-canvas position onto the canvas's real
// rendered size, so a card at 70% across the design still lands 70%
// across the real canvas — its intended spot — instead of a raw
// pixel that only made sense at 1200px wide.
function toPixels(rectWidth: number, rectHeight: number) {
  return layout.map((n) => ({
    ...n,
    x: clamp((n.x / DESIGN_W) * rectWidth, PADDING, rectWidth - CARD_W - PADDING),
    y: clamp((n.y / DESIGN_H) * rectHeight, PADDING, rectHeight - CARD_H - PADDING),
  }));
}

export default function ServiceProcess() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState(layout);

  // Below this, the free-drag canvas can't shrink to phone width
  // with 7 cards and stay usable — it switches to a stacked list.
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 768px)").matches
      : false
  );

  function updateNode(id: string, x: number, y: number) {
    setNodes((prev) =>
      prev.map((item) => (item.id === id ? { ...item, x, y } : item))
    );
  }

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Place cards at their intended spot, scaled to the canvas's real
  // size — on initial load, and again if the canvas re-mounts after
  // switching back from the mobile list.
  useLayoutEffect(() => {
    if (isMobile) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    setNodes(toPixels(rect.width, rect.height));
  }, [isMobile]);

  // On resize, just keep whatever position each card is currently at
  // (including any the user dragged) inside the new bounds — this
  // does not re-run the initial layout.
  useEffect(() => {
    if (isMobile) return;

    function reclamp() {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;

      setNodes((prev) =>
        prev.map((n) => ({
          ...n,
          x: clamp(n.x, PADDING, rect.width - CARD_W - PADDING),
          y: clamp(n.y, PADDING, rect.height - CARD_H - PADDING),
        }))
      );
    }

    window.addEventListener("resize", reclamp);
    return () => window.removeEventListener("resize", reclamp);
  }, [isMobile]);

  if (isMobile) {
    return (
      <section className="process-section">
        <div className="process-mobile-heading">
          <h3>THE PROCESS</h3>
          <p>Strategy → Design → Build</p>
        </div>

        <div className="process-list">
          {layout.map((node) => (
            <ProcessNode
              key={node.id}
              data={node}
              position={node}
              draggable={false}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="process-section">
      <div className="process-canvas" ref={canvasRef}>
        <ProcessLines nodes={nodes} />

        <div className="process-center">
          <h3>THE PROCESS</h3>
          <p>Strategy → Design → Build</p>
        </div>

        {nodes.map((node) => (
          <ProcessNode
            key={node.id}
            data={node}
            position={node}
            canvas={canvasRef}
            updateNode={updateNode}
            draggable
          />
        ))}
      </div>
    </section>
  );
}