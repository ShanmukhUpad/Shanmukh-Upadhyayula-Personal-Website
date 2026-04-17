"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal, staggerContainer, staggerItem } from "@/components/ui/ScrollReveal";
import { ExperienceCard, type Experience } from "@/components/ui/ExperienceCard";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const EXPERIENCES: Experience[] = [
  {
    role: "Project Lead, Data Scientist & GI Scientist",
    company: "ACM SIG-AIDA",
    location: "Urbana, IL",
    period: "Feb 2026 – Present",
    tags: ["Python", "Sci-Kit Learn", "GeoPandas", "Streamlit", "Mapbox GL"],
    link: "https://github.com/ShanmukhUpad/Pathway-To-Improved-Cities",
    bullets: [
      "Leading a team of 8 to develop ensemble ML models (Random Forest, Gradient Boosting) predicting urban hardship, crime hotspots, crash risk, and transit accessibility across 77 Chicago community areas.",
      "Building a live data pipeline integrating the Chicago Data Portal SODA API and Global/Local Moran's I (LISA) spatial autocorrelation analysis across six urban domains.",
      "Developing an interactive Streamlit + Mapbox GL dashboard featuring choropleth maps, density heatmaps, and LISA cluster visualizations for city planning decisions.",
      "Engineering an urban domain-aware file upload system with automated validation, spatial mapping, and on-demand ML prediction.",
    ],
  },
  {
    role: "Project Lead & Software Engineer",
    company: "ACM SIG-CHI",
    location: "Urbana, IL",
    period: "Sep 2025 – Present",
    tags: ["TypeScript", "HTML/CSS", "Next.js", "OpenCV"],
    link: "https://acm-sigchi-digitaldiary.org/",
    bullets: [
      "Architect and lead developer of a full-stack interactive journaling platform across a 15-person team.",
      "Engineering a context-aware guided journal mode integrating Google Calendar, National Weather Service, and Claude AI to generate personalized daily reflection prompts.",
      "Building a real-time computer vision pipeline to detect facial expressions for mood inference.",
    ],
  },
  {
    role: "Software Engineer",
    company: "UIC Electronic Visualization Laboratory",
    location: "Chicago, IL",
    period: "Jun 2025 – Aug 2025",
    tags: ["Python", "Pandas", "TypeScript", "React"],
    link: "https://github.com/ShanmukhUpad/curio",
    bullets: [
      "Cut data pipeline processing time by ~30% across hundreds of pipelines by engineering a merge tool built on Pandas for large-scale Chicago urban datasets.",
      "Delivered a merge flow box feature for Curio, a visual data pipeline GUI, enabling researchers to combine large datasets directly within the interface.",
      "Extended Curio's data pool component with multi-tab support, allowing simultaneous inspection of multiple merged datasets.",
    ],
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding relative"
      style={{ backgroundColor: "var(--color-void)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs font-mono mb-2" style={{ color: "var(--color-neon-dim)" }}>
            02 / experience
          </p>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl mb-12"
            style={{ color: "var(--color-text-primary)" }}
          >
            Work Experience
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Animated timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden lg:block"
            style={{
              marginLeft: "-1.5rem",
              backgroundColor: "var(--color-border)",
            }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{
                height: reduced ? "100%" : lineHeight,
                backgroundColor: "var(--color-neon-dim)",
                boxShadow: "0 0 8px var(--color-neon-dim)",
              }}
            />
          </div>

          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {EXPERIENCES.map((exp, i) => (
              <motion.div key={i} variants={staggerItem}>
                <ExperienceCard exp={exp} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
