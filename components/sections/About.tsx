"use client";

import { motion } from "framer-motion";
import { ScrollReveal, staggerContainer, staggerItem } from "@/components/ui/ScrollReveal";
import { VineGrowth } from "@/components/svg/VineGrowth";

const INTERESTS = [
  "AR / VR",
  "Urban Planning",
  "GIS",
  "Computer Vision",
  "Interactive Computing",
  "Spatial Analysis",
  "Database Systems",
  "Machine Learning",
  "HCI",
];

const STATS = [
  { label: "GPA", value: "3.95 / 4.0" },
  { label: "Grad", value: "May 2027" },
  { label: "University", value: "UIUC" },
  { label: "Major", value: "CS + GIS" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative section-padding overflow-hidden"
      style={{ backgroundColor: "var(--color-base)" }}
    >
      {/* Vine accent */}
      <div className="absolute bottom-0 right-8 opacity-30 hidden lg:block">
        <VineGrowth side="right" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs font-mono mb-2" style={{ color: "var(--color-neon-dim)" }}>
            01 / about
          </p>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl mb-12"
            style={{ color: "var(--color-text-primary)" }}
          >
            Who I Am
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div>
            <ScrollReveal delay={0.1}>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                I&apos;m a computer science + geography & GIS major at the University of Illinois
                Urbana-Champaign, interested in building software that improves the efficiency of urban systems.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-text-muted)" }}>
                I serve as a Project Lead in ACM&apos;s Special Interest Groups for
                both HCI and AI & Data Science.
              </p>
            </ScrollReveal>

            {/* Interest tags */}
            <ScrollReveal delay={0.35}>
              <p className="text-xs font-mono mb-3" style={{ color: "var(--color-text-faint)" }}>
                Interests
              </p>
            </ScrollReveal>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {INTERESTS.map((interest) => (
                <motion.span
                  key={interest}
                  variants={staggerItem}
                  className="px-3 py-1 text-xs font-mono rounded-sm border"
                  style={{
                    borderColor: "var(--color-moss)",
                    color: "var(--color-neon-dim)",
                    backgroundColor: "rgba(22,101,52,0.12)",
                  }}
                >
                  {interest}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Stats + abstract visual */}
          <div>
            <ScrollReveal direction="left" delay={0.15}>
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg p-5 border"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <p className="text-xs font-mono mb-1" style={{ color: "var(--color-text-faint)" }}>
                      {stat.label}
                    </p>
                    <p
                      className="font-display font-bold text-xl"
                      style={{ color: "var(--color-neon)" }}
                    >
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Abstract city/nature visual */}
              <div
                className="rounded-lg border overflow-hidden"
                style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
              >
                <svg viewBox="0 0 320 140" className="w-full">
                  {/* Grid */}
                  <defs>
                    <pattern id="aboutGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="rgba(167,139,250,0.05)"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="320" height="140" fill="url(#aboutGrid)" />
                  {/* City blocks */}
                  <rect x="20" y="60" width="40" height="80" fill="var(--color-elevated)" rx="1" />
                  <rect x="65" y="40" width="35" height="100" fill="var(--color-elevated)" rx="1" />
                  <rect x="105" y="70" width="50" height="70" fill="var(--color-elevated)" rx="1" />
                  <rect x="160" y="50" width="30" height="90" fill="var(--color-elevated)" rx="1" />
                  <rect x="195" y="65" width="45" height="75" fill="var(--color-elevated)" rx="1" />
                  <rect x="245" y="45" width="35" height="95" fill="var(--color-elevated)" rx="1" />
                  {/* Windows */}
                  {[20, 65, 105, 160, 195, 245].map((bx, bi) =>
                    [0, 1, 2].map((row) =>
                      [0, 1].map((col) => (
                        <rect
                          key={`${bi}-${row}-${col}`}
                          x={bx + 6 + col * 10}
                          y={70 + row * 14}
                          width={5}
                          height={6}
                          fill={bi % 2 === 0 ? "rgba(167,139,250,0.35)" : "rgba(56,189,248,0.3)"}
                        />
                      ))
                    )
                  )}
                  {/* Nature overlay */}
                  <path
                    d="M 0 130 C 30 100, 60 110, 80 90 C 100 70, 110 80, 130 60"
                    stroke="var(--color-vine)"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.5"
                  />
                  <ellipse cx="160" cy="138" rx="40" ry="10" fill="var(--color-moss)" opacity="0.3" />
                  <ellipse cx="280" cy="138" rx="30" ry="8" fill="var(--color-moss)" opacity="0.25" />
                  {/* UIUC pin */}
                  <circle cx="240" cy="48" r="5" fill="var(--color-neon)" opacity="0.8" />
                  <line
                    x1="240"
                    y1="53"
                    x2="240"
                    y2="65"
                    stroke="var(--color-neon)"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                  <text
                    x="248"
                    y="56"
                    fontSize="8"
                    fill="var(--color-neon)"
                    fontFamily="monospace"
                    opacity="0.8"
                  >
                    UIUC
                  </text>
                </svg>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
