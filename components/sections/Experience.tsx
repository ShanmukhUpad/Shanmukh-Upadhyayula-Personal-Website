"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal, staggerContainer, staggerItem } from "@/components/ui/ScrollReveal";
import { ExperienceCard, type Experience } from "@/components/ui/ExperienceCard";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const EXPERIENCES: Experience[] = [
  {
    role: "Undergraduate Researcher",
    company: "Semantic Segmentation Failure Analysis",
    location: "Urbana, IL",
    period: "May 2026 – Aug 2026",
    tags: ["Python", "PyTorch", "torchvision"],
    link: "https://github.com/ShanmukhUpad/semantic-segmentation-feature",
    bullets: [
      "Cut segmentation error from 51% to under 10% at 20% pixel coverage on unseen aerial imagery by engineering four label-free uncertainty signals that rank a model's own errors without ground truth.",
      "Proved failure detection survives domain shift at 0.61–0.74 pixel AUROC across 4 datasets spanning 44 countries and 6 continents.",
      "Diagnosed boundary and rare-class failure modes, roughly half the accuracy at class edges vs. interior regions, on a DeepLabV3-ResNet50 baseline, writing an IEEE-format paper and delivering a CyberGIS talk.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    company: "Bias Reduction in Food Inspection Models across Chicago",
    location: "Urbana, IL",
    period: "May 2026 – Aug 2026",
    tags: ["Python", "XGBoost", "GeoPandas"],
    links: [
      { href: "/bias_reduction.ipynb", label: "Notebook", download: true },
      { href: "/bias_reduction.html", label: "View", icon: "external" },
    ],
    bullets: [
      "Cut Chicago's largest cross-neighborhood recall gap by 99%, to nearly zero, by pitting a custom Group-DRO XGBoost objective, with hand-derived gradient/Hessian, against per-group thresholds.",
      "Traced the disparity to a ranking deficit, not a threshold artifact, by computing per-group ROC AUC well above chance over 8,312 inspections, correctly predicting which mitigation would work.",
      "Rebuilt the City's forecasting pipeline on 2018-present data, cutting 148K raw records down to 42K clean rows, and clustered neighborhoods into 3 typologies via two-stage k-means and Ward clustering.",
    ],
  },
  {
    role: "Project Lead, Data Scientist & GI Scientist",
    company: "Pathway to Improved Cities (ACM SIG-AIDA)",
    location: "Urbana, IL",
    period: "Feb 2026 – May 2026",
    tags: ["Python", "Sci-Kit Learn", "GeoPandas", "Streamlit", "Mapbox GL"],
    link: "https://github.com/ShanmukhUpad/Pathway-To-Improved-Cities",
    bullets: [
      "Led a team of 8 to develop ensemble ML models (Random Forest, Gradient Boosting) predicting urban hardship, crime hotspots, crash risk, and transit accessibility across 77 Chicago community areas.",
      "Built a live data pipeline integrating the Chicago Data Portal SODA API and Global/Local Moran's I (LISA) spatial autocorrelation analysis across six urban domains.",
      "Developed an interactive Streamlit + Mapbox GL dashboard featuring choropleth maps, density heatmaps, and LISA cluster visualizations for city planning decisions.",
      "Engineered an urban domain-aware file upload system with automated validation, spatial mapping, and on-demand ML prediction.",
    ],
  },
  {
    role: "Project Lead & Software Engineer",
    company: "ACM SIG-CHI",
    location: "Urbana, IL",
    period: "Sep 2025 – Apr 2026",
    tags: ["TypeScript", "HTML/CSS", "Next.js", "OpenCV"],
    link: "https://acm-sigchi-digitaldiary.org/",
    bullets: [
      "Architected and led development of a full-stack interactive journaling platform across a 15-person team.",
      "Engineered a context-aware guided journal mode integrating Google Calendar, National Weather Service, and Claude AI to generate personalized daily reflection prompts.",
      "Built a real-time computer vision pipeline to detect facial expressions for mood inference.",
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
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs font-mono mb-2" style={{ color: "var(--color-signal-dim)" }}>
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
                backgroundColor: "var(--color-signal-dim)",
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
              <motion.div key={i} variants={staggerItem} className="relative">
                <span
                  className="hidden lg:block absolute top-6"
                  style={{
                    left: "-1.5rem",
                    transform: "translateX(-3.5px)",
                    width: 7,
                    height: 7,
                    backgroundColor: "var(--color-signal)",
                    border: "1px solid var(--color-bg-alt)",
                  }}
                  aria-hidden
                />
                <ExperienceCard exp={exp} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
