"use client";

export default function ProcessLines({ nodes }: any) {
  const connections = [
    ["brief", "research"],
    ["research", "strategy"],
    ["strategy", "design"],
    ["design", "development"],
    ["development", "testing"],
    ["testing", "launch"],
  ];

  return (
    <svg className="process-lines">
      {connections.map((c, i) => {
        const a = nodes.find((n: any) => n.id === c[0]);
        const b = nodes.find((n: any) => n.id === c[1]);

        if (!a || !b) return null;

        return (
          <path
            key={i}
            d={`
              M ${a.x + 90} ${a.y + 60}
              C
              ${a.x + 200} ${a.y + 60},
              ${b.x - 200} ${b.y + 60},
              ${b.x + 90} ${b.y + 60}
            `}
          />
        );
      })}
    </svg>
  );
}