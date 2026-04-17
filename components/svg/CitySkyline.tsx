"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { seededRandom } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/* -------------------------------------------------------------------------- */
/*  Building data — each layer has [x, y, w, h] rectangles                   */
/* -------------------------------------------------------------------------- */

// Layer 1 — farthest, tiny city silhouette
const L1_BUILDINGS = [
  [0, 320, 55, 80],
  [60, 300, 40, 100],
  [105, 330, 35, 70],
  [145, 280, 50, 120],
  [200, 310, 45, 90],
  [250, 295, 38, 105],
  [293, 325, 60, 75],
  [358, 305, 42, 95],
  [405, 315, 55, 85],
  [465, 285, 48, 115],
  [518, 320, 35, 80],
  [558, 300, 52, 100],
  [615, 330, 40, 70],
  [660, 290, 60, 110],
  [725, 315, 45, 85],
  [775, 305, 38, 95],
  [818, 325, 55, 75],
  [878, 310, 42, 90],
  [925, 300, 48, 100],
  [978, 320, 35, 80],
  [1018, 285, 55, 115],
  [1078, 315, 45, 85],
  [1128, 305, 40, 95],
  [1173, 325, 58, 75],
  [1236, 295, 42, 105],
  [1283, 310, 50, 90],
  [1338, 300, 45, 100],
  [1388, 320, 52, 80],
];

// Layer 2 — medium buildings, amber-tinted rooftops
const L2_BUILDINGS = [
  [20, 260, 70, 140],
  [100, 240, 60, 160],
  [170, 270, 80, 130],
  [260, 230, 65, 170],
  [335, 255, 75, 145],
  [420, 245, 58, 155],
  [488, 265, 70, 135],
  [568, 235, 65, 165],
  [643, 250, 78, 150],
  [731, 240, 62, 160],
  [803, 260, 72, 140],
  [885, 245, 68, 155],
  [963, 255, 75, 145],
  [1048, 235, 70, 165],
  [1128, 250, 65, 150],
  [1203, 265, 78, 135],
  [1291, 240, 62, 160],
  [1363, 255, 77, 145],
];

// Layer 3 — midground: Chicago-inspired silhouettes
const L3_BUILDINGS = [
  // Willis-tower-like: main shaft + setbacks
  { type: "willis", x: 180, baseW: 100, baseH: 200, steps: [[30, 240], [22, 290], [14, 330]] },
  // Hancock-like: tapered
  { type: "rect", x: 420, y: 150, w: 85, h: 250 },
  { type: "rect", x: 420, y: 120, w: 65, h: 30 },
  { type: "rect", x: 430, y: 90, w: 45, h: 30 },
  // Glass box
  { type: "rect", x: 640, y: 180, w: 110, h: 220 },
  // Slender tower
  { type: "rect", x: 900, y: 130, w: 55, h: 270 },
  { type: "rect", x: 907, y: 110, w: 41, h: 20 },
  { type: "rect", x: 912, y: 90, w: 31, h: 20 },
  { type: "rect", x: 918, y: 50, w: 19, h: 40 }, // antenna
  // Marina-style cylinders (simplified as narrow rects)
  { type: "rect", x: 1100, y: 200, w: 60, h: 200 },
  { type: "rect", x: 1170, y: 210, w: 60, h: 190 },
  // Tribune-like gothic
  { type: "rect", x: 1330, y: 160, w: 90, h: 240 },
  { type: "rect", x: 1350, y: 140, w: 50, h: 20 },
];

// Layer 4 — foreground silhouettes
const L4_BUILDINGS = [
  [0, 310, 90, 90],
  [95, 280, 75, 120],
  [175, 300, 100, 100],
  [280, 260, 85, 140],
  [370, 290, 95, 110],
  [470, 275, 80, 125],
  [555, 305, 95, 95],
  [655, 265, 90, 135],
  [750, 285, 80, 115],
  [835, 295, 100, 105],
  [940, 270, 85, 130],
  [1030, 285, 95, 115],
  [1130, 260, 90, 140],
  [1225, 295, 80, 105],
  [1310, 275, 90, 125],
  [1405, 290, 95, 110],
];

// Window grid per building — [cols, rows, ox, oy, cw, ch, gap]
function WindowGrid({
  buildingIndex,
  bx,
  by,
  bw,
  bh,
}: {
  buildingIndex: number;
  bx: number;
  by: number;
  bw: number;
  bh: number;
}) {
  const cols = Math.max(2, Math.floor(bw / 12));
  const rows = Math.max(2, Math.floor(bh / 14));
  const ww = 4;
  const wh = 5;
  const xGap = (bw - cols * ww) / (cols + 1);
  const yGap = (bh - rows * wh) / (rows + 1);

  return (
    <>
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((_, col) => {
          const seed = buildingIndex * 100 + row * 20 + col;
          const rand = seededRandom(seed);
          const isLit = rand > 0.3;
          if (!isLit) return null;
          const flickerDelay = seededRandom(seed + 50) * 4;
          return (
            <rect
              key={`${row}-${col}`}
              x={bx + xGap + col * (ww + xGap)}
              y={by + yGap + row * (wh + yGap)}
              width={ww}
              height={wh}
              fill={rand > 0.6 ? "rgba(110,250,250,0.8)" : "rgba(167,139,250,0.5)"}
              style={{
                animationName: "flicker",
                animationDuration: `${3 + seededRandom(seed + 80) * 4}s`,
                animationDelay: `${flickerDelay}s`,
                animationIterationCount: "infinite",
                animationTimingFunction: "ease",
              }}
            />
          );
        })
      )}
    </>
  );
}

export function CitySkyline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const l1Y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -20]);
  const l2Y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -40]);
  const l3Y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -65]);
  const l4Y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -90]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden"
      style={{ height: 420 }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMax meet"
        className="w-full h-full"
      >
        {/* Ground */}
        <rect x="0" y="390" width="1440" height="10" fill="var(--color-border)" opacity="0.4" />

        {/* Layer 1 — farthest, neon-green tint */}
        <motion.g style={{ y: l1Y }} opacity={0.12}>
          {L1_BUILDINGS.map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} fill="#a78bfa" />
          ))}
        </motion.g>

        {/* Layer 2 — medium, amber rooftops */}
        <motion.g style={{ y: l2Y }} opacity={0.22}>
          {L2_BUILDINGS.map(([x, y, w, h], i) => (
            <g key={i}>
              <rect x={x} y={y} width={w} height={h} fill="#1a1a28" />
              <rect x={x} y={y} width={w} height={4} fill="rgba(56,189,248,0.5)" />
              <WindowGrid buildingIndex={100 + i} bx={x} by={y + 8} bw={w} bh={h - 8} />
            </g>
          ))}
        </motion.g>

        {/* Layer 3 — Chicago silhouettes */}
        <motion.g style={{ y: l3Y }} opacity={0.45}>
          {/* Willis-like */}
          {(() => {
            const wx = 180;
            return (
              <g key="willis">
                <rect x={wx + 10} y={150} width={80} height={250} fill="#111118" />
                <rect x={wx + 20} y={100} width={60} height={50} fill="#111118" />
                <rect x={wx + 28} y={60} width={44} height={40} fill="#111118" />
                <rect x={wx + 35} y={20} width={30} height={40} fill="#111118" />
                <rect x={wx + 43} y={0} width={14} height={20} fill="#a78bfa" opacity="0.6" />
                <WindowGrid buildingIndex={200} bx={wx + 12} by={160} bw={76} bh={230} />
              </g>
            );
          })()}
          {/* Hancock-like tapered */}
          <g key="hancock">
            <polygon points="420,395 505,395 490,150 435,150" fill="#111118" />
            <rect x={443} y={100} width={40} height={50} fill="#111118" />
            <rect x={450} y={40} width={26} height={60} fill="#111118" />
            <rect x={460} y={0} width={6} height={40} fill="#38bdf8" opacity="0.7" />
          </g>
          {/* Wide glass tower */}
          <g key="glass">
            <rect x={640} y={180} width={110} height={220} fill="#0e0e1a" />
            {/* Curtain wall lines */}
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1={640}
                y1={180 + i * 18}
                x2={750}
                y2={180 + i * 18}
                stroke="rgba(167,139,250,0.08)"
                strokeWidth="0.5"
              />
            ))}
            <WindowGrid buildingIndex={300} bx={645} by={190} bw={100} bh={200} />
          </g>
          {/* Slender spire */}
          <g key="spire">
            <rect x={900} y={130} width={55} height={270} fill="#111118" />
            <rect x={907} y={110} width={41} height={20} fill="#111118" />
            <rect x={914} y={60} width={27} height={50} fill="#111118" />
            <rect x={924} y={20} width={7} height={40} fill="var(--color-neon)" opacity="0.7" />
            <WindowGrid buildingIndex={400} bx={903} by={140} bw={49} bh={250} />
          </g>
          {/* Tribune gothic */}
          <g key="tribune">
            <rect x={1330} y={160} width={90} height={240} fill="#111118" />
            <rect x={1347} y={130} width={56} height={30} fill="#111118" />
            <rect x={1358} y={105} width={34} height={25} fill="#111118" />
            <rect x={1364} y={80} width={22} height={25} fill="#111118" />
            <rect x={1369} y={50} width={12} height={30} fill="#111118" />
            <rect x={1372} y={25} width={6} height={25} fill="#38bdf8" opacity="0.5" />
            <WindowGrid buildingIndex={500} bx={1334} by={170} bw={82} bh={220} />
          </g>
        </motion.g>

        {/* Layer 4 — foreground, near-black silhouettes */}
        <motion.g style={{ y: l4Y }}>
          {L4_BUILDINGS.map(([x, y, w, h], i) => (
            <g key={i}>
              <rect x={x} y={y} width={w} height={h} fill="var(--color-void)" opacity="0.92" />
              <rect x={x} y={y} width={w} height={2} fill="rgba(167,139,250,0.15)" />
            </g>
          ))}
          {/* Foreground vines between buildings */}
          <path
            d="M 60 400 C 70 360, 55 320, 75 290 C 90 265, 65 240, 80 210"
            stroke="var(--color-vine)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.4"
          />
          <path
            d="M 1380 400 C 1370 360, 1385 320, 1365 290 C 1350 265, 1375 240, 1360 210"
            stroke="var(--color-vine)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.4"
          />
          {/* Ground foliage */}
          <ellipse cx={150} cy={395} rx={60} ry={12} fill="var(--color-moss)" opacity="0.35" />
          <ellipse cx={600} cy={395} rx={80} ry={14} fill="var(--color-moss)" opacity="0.3" />
          <ellipse cx={1100} cy={395} rx={70} ry={12} fill="var(--color-moss)" opacity="0.35" />
          <ellipse cx={1350} cy={395} rx={50} ry={10} fill="var(--color-moss)" opacity="0.3" />
        </motion.g>

        {/* Gradient fade at bottom */}
        <defs>
          <linearGradient id="skyFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-base)" stopOpacity="0" />
            <stop offset="100%" stopColor="var(--color-base)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <rect x="0" y="300" width="1440" height="100" fill="url(#skyFade)" />
      </svg>
    </div>
  );
}
