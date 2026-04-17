"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";

const CitySkyline = dynamic(
  () => import("@/components/svg/CitySkyline").then((m) => m.CitySkyline),
  { ssr: false, loading: () => null }
);
import { GridOverlay } from "@/components/svg/GridOverlay";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const TypeAnimation = dynamic(
  () => import("react-type-animation").then((m) => m.TypeAnimation),
  { ssr: false, loading: () => <span style={{ color: "var(--color-neon)" }}>CS + GIS Student</span> }
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
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "100svh",
        backgroundColor: "var(--color-void)",
      }}
    >
      {/* Background layers */}
      <GridOverlay opacity={0.8} />

      {/* Star-like particles (static, CSS only) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {Array.from({ length: 40 }).map((_, i) => {
          const x = (i * 37 + 13) % 100;
          const y = (i * 53 + 7) % 80;
          const size = ((i * 11) % 3) + 1;
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: size,
                height: size,
                backgroundColor:
                  i % 3 === 0
                    ? "rgba(167,139,250,0.4)"
                    : i % 3 === 1
                      ? "rgba(56,189,248,0.3)"
                      : "rgba(255,255,255,0.15)",
              }}
            />
          );
        })}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={reduced ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={18} style={{ color: "var(--color-text-faint)" }} />
      </motion.div>

      {/* City skyline at bottom */}
      <CitySkyline />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16 pb-24"
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
              backgroundColor: "rgba(17,17,24,0.8)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--color-neon)", boxShadow: "0 0 6px var(--color-neon)" }}
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
            letterSpacing: "-0.02em",
          }}
        >
          Shanmukh{" "}
          <span style={{ color: "var(--color-neon)" }} className="text-glow-neon">
            Upadhyayula
          </span>
        </motion.h1>

        {/* Typewriter roles */}
        <motion.div
          variants={reduced ? {} : itemVariants}
          className="font-mono text-lg sm:text-xl mb-6 h-8"
          style={{ color: "var(--color-neon-dim)" }}
        >
          <TypeAnimation
            sequence={[
              "CS + GIS Student",
              2000,
              "AR/VR Developer",
              2000,
              "Urban Systems Thinker",
              2000,
              "HCI Researcher",
              2000,
              "GI Scientist",
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
          className="text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          My favorite CS subfields are computer vision, AR/VR, and database systems —
          and I am interested in applying them to build smarter tools for urban planning and GIS analysis.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={reduced ? {} : itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <ResumeButton />
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded text-sm font-medium border transition-colors duration-200"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-muted)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)";
            }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>

    </section>
  );
}
