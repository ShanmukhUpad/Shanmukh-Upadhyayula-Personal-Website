"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const NODES: [number, number][] = [
  [120, 100], [260, 180], [90, 260], [320, 90], [480, 150],
  [620, 80], [750, 200], [900, 120], [1080, 90], [1220, 180],
  [1340, 100], [180, 480], [380, 560], [560, 500], [780, 580],
  [950, 500], [1150, 560], [1300, 480], [60, 620], [1380, 620],
];

const EDGES: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10],
  [1, 2], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17],
  [11, 18], [17, 19], [2, 11], [9, 17], [4, 13],
];

const HIGHLIGHTS = new Set([5, 14]);

export function NodeGraph() {
  const reduced = useReducedMotion();

  return (
    <svg
      viewBox="0 0 1440 700"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 w-full h-full"
      aria-hidden
    >
      {EDGES.map(([a, b], i) => {
        const [x1, y1] = NODES[a];
        const [x2, y2] = NODES[b];
        return (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--color-signal)"
            strokeWidth="1"
            initial={reduced ? { opacity: 0.18 } : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.18 }}
            transition={{ duration: 1.2, delay: reduced ? 0 : i * 0.04, ease: "easeOut" }}
          />
        );
      })}
      {NODES.map(([x, y], i) => {
        const highlight = HIGHLIGHTS.has(i);
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={highlight ? 5 : 3}
            fill="var(--color-signal)"
            initial={reduced ? { opacity: highlight ? 0.7 : 0.4 } : { opacity: 0, scale: 0 }}
            animate={{ opacity: highlight ? 0.7 : 0.4, scale: 1 }}
            transition={{ duration: 0.5, delay: reduced ? 0 : 0.6 + i * 0.03, ease: "easeOut" }}
          />
        );
      })}
    </svg>
  );
}
