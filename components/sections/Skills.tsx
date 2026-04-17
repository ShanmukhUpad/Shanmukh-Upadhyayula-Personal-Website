"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Code2, Earth, Layers, Library } from "lucide-react";

const SKILL_GROUPS = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["TypeScript", "Python", "HTML/CSS", "C++", "C", "R", "JavaScript", "C#", "Java", "SQL"],
    accent: "neon" as const,
  },
  {
    category: "Frameworks & Tools",
    icon: Layers,
    skills: [
      "React", "Next.js", "Node.js", "Prisma ORM", "Streamlit", "OpenCV", "MediaPipe", "Pandas",
      "Tailwind CSS", "Git", "Jupyter", "Unity", "Vercel", "LaTeX / Overleaf",
    ],
    accent: "amber" as const,
  },
  {
    category: "GIS Software",
    icon: Earth,
    skills: ["ArcGIS Pro", "ArcGIS Online", "ArcGIS Field Maps", "Mapbox GL", "Leaflet", "sf (R)", "GeoPandas"],
    accent: "neon" as const,
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
    accent: "amber" as const,
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

const accentColors = {
  neon: {
    bg: "rgba(167,139,250,0.1)",
    text: "var(--color-neon)",
    border: "var(--color-neon-dim)",
  },
  amber: {
    bg: "rgba(56,189,248,0.1)",
    text: "var(--color-amber)",
    border: "var(--color-amber-dim)",
  },
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
          <p className="text-xs font-mono mb-2" style={{ color: "var(--color-neon-dim)" }}>
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
            const colors = accentColors[group.accent];
            return (
              <ScrollReveal key={group.category} delay={gi * 0.08}>
                <div
                  className="rounded-lg border p-6"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon size={15} style={{ color: colors.text }} />
                    <h3 className="text-sm font-mono" style={{ color: colors.text }}>
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
                        className="inline-flex items-center px-2.5 py-1 rounded-sm text-xs font-mono border"
                        style={{
                          backgroundColor: colors.bg,
                          color: colors.text,
                          borderColor: colors.border,
                          opacity: 0.85,
                        }}
                        whileHover={{ opacity: 1, scale: 1.04 }}
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
