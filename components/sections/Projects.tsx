"use client";

import { motion } from "framer-motion";
import { ScrollReveal, staggerContainer, staggerItem } from "@/components/ui/ScrollReveal";
import { ProjectCard, type Project } from "@/components/ui/ProjectCard";

const PROJECTS: Project[] = [
  {
    title: "LLM Study of Authority and Consensus in Multi-Agent Systems",
    description: [
      "Studying authority bias and hallucination propagation in agentic flows by designing hierarchical vs. flat multi-agent systems.",
      "Introducing a whistleblower agent that challenges the orchestrator's consensus to test the limits of authority bias.",
      "Measuring whether lower-weighted sub-agents can still drive opinion convergence across the hierarchy.",
    ],
    tags: ["Python", "Concordia", "LaTeX / Overleaf"],
    featured: true,
    period: "Jan 2026 – Present",
  },
  {
    title: "Pathway to Improved Cities (ACM SIG-AIDA)",
    description: [
      "See ACM SIG-AIDA in experience section for details.",
    ],
    tags: ["Python", "Sci-Kit Learn", "GeoPandas", "Streamlit", "Mapbox GL", "SODA API"],
    github: "https://github.com/ShanmukhUpad/Pathway-To-Improved-Cities",
    featured: true,
    period: "Feb 2026 – Present",
  },
  {
    title: "Digital Diary (ACM SIG-CHI)",
    description: [
      "See ACM SIG-CHI in experience section for details.",
    ],
    tags: ["Next.js", "OpenCV", "Claude AI", "Google Calendar API", "TypeScript"],
    github: "https://github.com/sigchi-uiuc/digital-diary",
    demo: "https://acm-sigchi-digitaldiary.org/",
    demoLabel: "Website",
    featured: true,
    period: "Sep 2025 – Present",
  },
  {
    title: "PlantRoute",
    description: [
      "HackIllinois: XGBoost model generating personalized low-carbon travel itineraries, balancing vacation preferences with emissions reduction",
      "Fused Google Maps, Supermemory, and Gemini APIs with a Leaflet globe visualization",
    ],
    tags: ["Next.js", "TypeScript", "XGBoost", "Prisma ORM", "Leaflet", "Gemini API"],
    github: "https://github.com/groversomanshi/PlantRoute",
    demo: "https://tinyurl.com/44zy4ujm",
    period: "Feb 2026 – Mar 2026",
  },
  {
    title: "A Spatial Analysis of Walkability and Urban Form in the Chicago Metropolitan Area",
    description: [
      "Contributed a new EPA-derived walkability score variable to ChiVes, a geospatial urban analytics platform for the Chicago metro area",
      "Cleaned and transformed raw EPA walk score data using R'sf library into publication-ready spatial measures with improved geographic precision",
    ],
    tags: ["R", "sf", "Spatial Analysis", "ChiVes"],
    demo: "https://shanmukhupad.github.io/",
    demoLabel: "Website",
    period: "Oct 2025 – Dec 2025",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="section-padding"
      style={{ backgroundColor: "var(--color-void)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs font-mono mb-2" style={{ color: "var(--color-neon-dim)" }}>
          </p>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Projects
          </h2>
          <p className="text-sm mb-12" style={{ color: "var(--color-text-muted)" }}>
            A selection of work spanning LLM-Research, urban analytics, HCI, and geospatial analysis.
          </p>
        </ScrollReveal>

        <motion.div
          className="grid sm:grid-cols-2 gap-5 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="flex flex-col gap-5">
            {PROJECTS.filter((_, i) => i % 2 === 0).map((project, i) => (
              <motion.div key={`l-${i}`} variants={staggerItem}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            {PROJECTS.filter((_, i) => i % 2 === 1).map((project, i) => (
              <motion.div key={`r-${i}`} variants={staggerItem}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
