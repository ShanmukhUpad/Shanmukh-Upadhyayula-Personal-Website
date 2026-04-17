"use client";

import { motion } from "framer-motion";
import { Mail, GitBranch, Link2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { VineGrowth } from "@/components/svg/VineGrowth";

const LINKS = [
  {
    icon: Mail,
    label: "shanmukh.upad@gmail.com",
    href: "mailto:shanmukh.upad@gmail.com",
    display: "Email",
  },
  {
    icon: GitBranch,
    label: "ShanmukhUpad",
    href: "https://github.com/ShanmukhUpad",
    display: "GitHub",
  },
  {
    icon: Link2,
    label: "Shanmukh-Upadhyayula",
    href: "https://linkedin.com/in/Shanmukh-Upadhyayula",
    display: "LinkedIn",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--color-void)" }}
    >
      {/* Vine accents */}
      <div className="absolute bottom-0 left-4 opacity-20 hidden lg:block">
        <VineGrowth side="left" />
      </div>
      <div className="absolute bottom-0 right-4 opacity-20 hidden lg:block">
        <VineGrowth side="right" />
      </div>

      <div className="max-w-2xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-xs font-mono mb-2" style={{ color: "var(--color-neon-dim)" }}>
            06 / contact
          </p>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Get in Touch
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: "var(--color-text-muted)" }}>
            If anything you see on my website catches your attention, feel free to reach out!
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {LINKS.map(({ icon: Icon, label, href, display }) => (
              <motion.a
                key={display}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-5 py-3 rounded-lg border text-sm transition-colors duration-200"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-muted)",
                  backgroundColor: "var(--color-surface)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-neon-dim)";
                  el.style.color = "var(--color-neon)";
                  el.style.boxShadow = "var(--shadow-neon-sm)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-border)";
                  el.style.color = "var(--color-text-muted)";
                  el.style.boxShadow = "none";
                }}
              >
                <Icon size={14} />
                <span className="font-mono text-xs">{label}</span>
              </motion.a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
