"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowDown } from "@/components/ui/icons";
import { NodeGraph } from "@/components/svg/NodeGraph";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const TypeAnimation = dynamic(
  () => import("react-type-animation").then((m) => m.TypeAnimation),
  { ssr: false, loading: () => <span style={{ color: "var(--color-signal)" }}>CS + GIS Student</span> }
);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      className="theme-dark relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "100svh",
        backgroundColor: "var(--color-elevated)",
      }}
    >
      <NodeGraph />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ArrowDown size={18} style={{ color: "var(--color-text-faint)" }} />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24"
        variants={reduced ? {} : containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Location chip */}
        <motion.div variants={reduced ? {} : itemVariants} className="flex justify-center mb-6">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-muted)",
              backgroundColor: "rgba(20,7,48,0.7)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--color-route-green)", boxShadow: "0 0 6px var(--color-route-green)" }}
            />
            Naperville, IL · UIUC · May 2027
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={reduced ? {} : itemVariants}
          className="font-display font-bold leading-tight mb-4"
          style={{
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            color: "var(--color-text-primary)",
            letterSpacing: "-0.01em",
          }}
        >
          Shanmukh{" "}
          <span style={{ color: "var(--color-signal)" }}>
            Upadhyayula
          </span>
        </motion.h1>

        {/* Typewriter roles */}
        <motion.div
          variants={reduced ? {} : itemVariants}
          className="font-mono text-lg sm:text-xl mb-6 h-8"
          style={{ color: "var(--color-signal-dim)" }}
        >
          <TypeAnimation
            sequence={[
              "CS Student",
              2000,
              "GIS Student",
              2000,
              "Urban Planning Enthusiast",
              2000,
              "Project Lead",
              2000,
              "AR/VR Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={reduced ? {} : itemVariants}
          className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          I build tools for urban planning and GIS analysis using computer vision, AR/VR, and
          database systems, my favorite corners of computer science.
        </motion.p>
      </motion.div>
    </section>
  );
}
