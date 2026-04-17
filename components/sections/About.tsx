"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ScrollReveal, staggerContainer, staggerItem } from "@/components/ui/ScrollReveal";
import { VineGrowth } from "@/components/svg/VineGrowth";

const IllinoisMap = dynamic(() => import("@/components/ui/IllinoisMap"), { ssr: false });

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
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-muted)" }}>
                I&apos;m a computer science + geography & GIS major at the University of Illinois
                Urbana-Champaign, interested in building software that improves the efficiency of urban systems.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-muted)" }}>
                I serve as a Project Lead in ACM&apos;s Special Interest Groups for
                both HCI and AI & Data Science.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-muted)" }}>
                I was born and raised in Naperville, a suburb of Chicago. Then I attended the University of Illinois Chicago for one year before transferring to University of Illinois Urbana-Champaign in Fall 2025.
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

              {/* Illinois map */}
              <div
                className="rounded-lg border overflow-hidden"
                style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
              >
                <IllinoisMap />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
