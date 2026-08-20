"use client";

import { motion } from "framer-motion";
import { ScrollReveal, staggerContainer, staggerItem } from "@/components/ui/ScrollReveal";
import { ProjectCard, type Project } from "@/components/ui/ProjectCard";

const PROJECTS: Project[] = [
  {
    title: "MAS Sycophancy: Hierarchical Multi-Agent LLM Failure",
    description: [
      "Demonstrated that hierarchical LLM agent topologies collapse under a single injected authority hallucination, driving a large sycophancy effect and 100% cascade by turn 3.",
      "Quantified the failure without an LLM judge, using three independent signals (stance flips, planning errors, and deference language), each completely absent in the uninjected baseline.",
      "Showed that explicit anti-sycophancy prompting fails to prevent collapse, co-authoring an ACL-format paper on the resulting \"Yes-Man\" failure mode.",
    ],
    tags: ["Python", "Concordia", "Vertex AI"],
    github: "https://github.com/VelupallyG/mas-sycophancy",
    links: [{ href: "/MAS-Sycophancy.pdf", label: "Paper", download: true }],
    featured: true,
    period: "Mar 2026 – May 2026",
  },
  {
    title: "Spatial Autocorrelation of AI Data Centers",
    description: [
      "Proved 5 statistically significant hyperscale-impact effects vanish under a spatial-lag model, contrasting OLS-with-state-fixed-effects against GM_Lag across 3,220 U.S. counties.",
      "Surfaced a 34-county Northern Virginia electricity-price hot spot invisible to national statistics via bivariate global Moran's I and LISA across 5 impact variables.",
      "Fused 12 datasets on hyperscale locations, home values, utility prices, drought, and air quality into a Python spatial-regression pipeline.",
    ],
    tags: ["Python", "GeoPandas", "libpysal", "esda", "spreg"],
    period: "Mar 2026 – May 2026",
    links: [
      {
        href: "https://drive.google.com/file/d/1AqqyYQIkKm83-Xw9wflU3zjfdRdfiHaK/view?usp=sharing",
        label: "View Analysis",
        icon: "external",
      },
    ],
  },
  {
    title: "Pathway to Improved Cities (ACM SIG-AIDA)",
    description: [
      "Led a team of 8 building ensemble ML models that predict urban hardship, crime hotspots, crash risk, and transit accessibility across 77 Chicago community areas.",
      "Shipped an interactive Streamlit + Mapbox GL dashboard with choropleth maps, density heatmaps, and LISA cluster visualizations for city planning decisions.",
    ],
    tags: ["Python", "Sci-Kit Learn", "GeoPandas", "Streamlit", "Mapbox GL", "SODA API"],
    github: "https://github.com/ShanmukhUpad/Pathway-To-Improved-Cities",
    featured: true,
    period: "Feb 2026 – May 2026",
  },
  {
    title: "Digital Diary (ACM SIG-CHI)",
    description: [
      "Architected a full-stack interactive journaling platform across a 15-person team.",
      "Built a context-aware guided mode integrating Google Calendar, National Weather Service, and Claude AI, plus a real-time computer vision pipeline for mood inference.",
    ],
    tags: ["Next.js", "OpenCV", "Claude AI", "Google Calendar API", "TypeScript"],
    github: "https://github.com/sigchi-uiuc/digital-diary",
    demo: "https://acm-sigchi-digitaldiary.org/",
    demoLabel: "Website",
    featured: true,
    period: "Sep 2025 – Apr 2026",
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
      "Cleaned and transformed raw EPA walk score data using R's sf library into publication-ready spatial measures with improved geographic precision",
    ],
    tags: ["R", "sf", "Spatial Analysis", "ChiVes"],
    demo: "https://shanmukhupad.github.io/chicago-walkability/",
    demoLabel: "Website",
    period: "Oct 2025 – Apr 2026",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="theme-dark section-padding"
      style={{ backgroundColor: "var(--color-elevated)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs font-mono mb-2" style={{ color: "var(--color-signal-dim)" }}>
            04 / projects
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
