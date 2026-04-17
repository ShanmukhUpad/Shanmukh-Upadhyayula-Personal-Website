"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TagBadge } from "@/components/ui/TagBadge";
import { ChevronDown } from "lucide-react";

const COURSEWORK = [
  "Spatial Analysis",
  "Virtual Reality",
  "Data Management in the Cloud",
  "Human-LLM Interaction",
  "Algorithms & Formal Models of Computation",
  "CyberGIS & Geospatial Data Science",
  "Intro to GIS I & II",
  "Environmental Data Science",
  "Intro to Computer Systems",
  "Software Design Lab",
  "Data Structures",
  "Discrete Structures",
  "Linear Algebra",
];

const INVOLVEMENT = [
  { label: "ACM SIG-HCI", desc: "Project Lead" },
  { label: "ACM SIG-AIDA", desc: "Project Lead" },
];

export function Education() {
  const [courseOpen, setCourseOpen] = useState(false);

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--color-base)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs font-mono mb-2" style={{ color: "var(--color-neon-dim)" }}>
            03 / education
          </p>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl mb-12"
            style={{ color: "var(--color-text-primary)" }}
          >
            Education
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            className="rounded-lg border p-6 sm:p-8"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <div>
                <h3
                  className="font-display font-bold text-xl mb-0.5"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  University of Illinois Urbana-Champaign
                </h3>
                <p className="text-sm italic" style={{ color: "var(--color-text-muted)" }}>
                  Bachelor of Science in Computer Science &amp; Geographic Information Science
                </p>
              </div>
              <div className="text-right shrink-0">
                <span
                  className="block text-xs font-mono"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  Urbana, IL · May 2027
                </span>
                <span
                  className="inline-flex mt-1.5 items-center px-2.5 py-1 rounded text-sm font-bold border"
                  style={{
                    borderColor: "var(--color-neon-dim)",
                    color: "var(--color-neon)",
                    backgroundColor: "rgba(167,139,250,0.08)",
                  }}
                >
                  GPA: 3.95 / 4.0
                </span>
              </div>
            </div>

            {/* Involvement */}
            <div className="flex flex-wrap gap-2 mt-4 mb-5">
              {INVOLVEMENT.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-1.5 text-xs font-mono rounded-sm px-2.5 py-1 border"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-muted)",
                    backgroundColor: "var(--color-elevated)",
                  }}
                >
                  <span style={{ color: "var(--color-amber)" }}>{item.label}</span>
                  <span style={{ color: "var(--color-text-faint)" }}>— {item.desc}</span>
                </div>
              ))}
            </div>

            {/* Coursework collapsible */}
            <button
              className="flex items-center gap-2 text-xs font-mono transition-colors duration-150"
              style={{ color: "var(--color-text-muted)" }}
              onClick={() => setCourseOpen((o) => !o)}
            >
              <motion.span
                animate={{ rotate: courseOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={13} />
              </motion.span>
              Relevant Coursework
            </button>

            <AnimatePresence>
              {courseOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {COURSEWORK.map((c) => (
                      <TagBadge key={c} label={c} variant="muted" />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
