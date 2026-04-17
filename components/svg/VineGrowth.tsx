"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface VineGrowthProps {
  side?: "left" | "right";
  className?: string;
}

export function VineGrowth({ side = "left", className = "" }: VineGrowthProps) {
  const reduced = useReducedMotion();

  const pathLeft =
    "M 10 200 C 20 160, 5 120, 25 90 C 40 65, 15 40, 30 10";
  const pathRight =
    "M 90 200 C 80 160, 95 120, 75 90 C 60 65, 85 40, 70 10";
  const leafPath = side === "left" ? pathLeft : pathRight;

  // Small leaf branches
  const leaves =
    side === "left"
      ? [
          "M 20 150 C 5 140, -10 130, 0 120",
          "M 18 100 C 2 88, -5 75, 8 68",
          "M 28 55 C 18 42, 10 30, 20 22",
        ]
      : [
          "M 80 150 C 95 140, 110 130, 100 120",
          "M 82 100 C 98 88, 105 75, 92 68",
          "M 72 55 C 82 42, 90 30, 80 22",
        ];

  const animateProps = reduced
    ? {}
    : {
        initial: { pathLength: 0, opacity: 0 },
        whileInView: { pathLength: 1, opacity: 1 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 2.5, ease: "easeInOut" },
      };

  const leafAnimateProps = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          whileInView: { pathLength: 1, opacity: 0.7 },
          viewport: { once: true },
          transition: { duration: 1.5, ease: "easeInOut", delay },
        };

  return (
    <svg
      viewBox="0 0 100 210"
      width="80"
      height="168"
      className={`pointer-events-none ${className}`}
      aria-hidden
    >
      {/* Main vine */}
      <motion.path
        d={leafPath}
        stroke="var(--color-vine)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        {...animateProps}
      />
      {/* Leaf branches */}
      {leaves.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="var(--color-neon-dim)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          {...leafAnimateProps(0.6 + i * 0.4)}
        />
      ))}
    </svg>
  );
}
