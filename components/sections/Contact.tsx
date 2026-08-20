import { Mail, Github, Linkedin } from "@/components/ui/icons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const LINKS = [
  {
    icon: Mail,
    label: "shanmukh.upad@gmail.com",
    href: "mailto:shanmukh.upad@gmail.com",
    display: "Email",
  },
  {
    icon: Github,
    label: "ShanmukhUpad",
    href: "https://github.com/ShanmukhUpad",
    display: "GitHub",
  },
  {
    icon: Linkedin,
    label: "Shanmukh-Upadhyayula",
    href: "https://linkedin.com/in/Shanmukh-Upadhyayula",
    display: "LinkedIn",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="theme-dark section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--color-elevated)" }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-xs font-mono mb-2" style={{ color: "var(--color-signal-dim)" }}>
            06 / contact
          </p>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Get in Touch
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: "var(--color-text-muted)" }}>
            If anything you see on my website catches your attention, reach out.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {LINKS.map(({ icon: Icon, label, href, display }) => (
              <a
                key={display}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-3 border text-sm transition-colors duration-200 hover:border-[var(--color-signal-dim)] hover:text-[var(--color-signal)]"
                style={{
                  borderRadius: 8,
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-muted)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <Icon size={14} />
                <span className="font-mono text-xs">{label}</span>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
