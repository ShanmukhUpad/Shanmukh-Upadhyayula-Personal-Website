"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Code, Globe, Layers, Library } from "@/components/ui/icons";

const SKILL_GROUPS = [
  {
    category: "Languages",
    icon: Code,
    skills: ["TypeScript", "Python", "HTML/CSS", "C++", "C", "R", "JavaScript", "C#", "Java", "SQL"],
  },
  {
    category: "Frameworks & Tools",
    icon: Layers,
    skills: [
      "React", "Next.js", "Node.js", "Prisma ORM", "Streamlit", "OpenCV", "MediaPipe", "Pandas",
      "Tailwind CSS", "Git", "Jupyter", "Unity", "Vercel", "LaTeX / Overleaf",
    ],
  },
  {
    category: "GIS Software",
    icon: Globe,
    skills: ["ArcGIS Pro", "ArcGIS Online", "ArcGIS Field Maps", "Mapbox GL", "Leaflet", "sf (R)", "GeoPandas"],
  },
  {
    category: "Other Libraries",
    icon: Library,
    skills: [
      "Sci-Kit Learn",
      "ESDA / libpysal",
      "TensorFlow",
      "Matplotlib",
      "Seaborn",
    ],
  },
];

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut", delay: i * 0.03 },
  }),
};

export function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
      style={{ backgroundColor: "var(--color-base)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs font-mono mb-2" style={{ color: "var(--color-signal-dim)" }}>
            05 / skills
          </p>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl mb-12"
            style={{ color: "var(--color-text-primary)" }}
          >
            Skills
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, gi) => {
            const Icon = group.icon;
            return (
              <ScrollReveal key={group.category} delay={gi * 0.08}>
                <div
                  className="border p-6"
                  style={{
                    borderRadius: 8,
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon size={15} style={{ color: "var(--color-signal)" }} />
                    <h3 className="text-sm font-mono" style={{ color: "var(--color-signal)" }}>
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, si) => (
                      <motion.span
                        key={skill}
                        custom={gi * 8 + si}
                        variants={tagVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="inline-flex items-center px-2.5 py-1 text-xs font-mono border"
                        style={{
                          borderRadius: 6,
                          backgroundColor: "var(--color-signal-tint)",
                          color: "var(--color-signal)",
                          borderColor: "var(--color-signal-dim)",
                          opacity: 0.85,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
