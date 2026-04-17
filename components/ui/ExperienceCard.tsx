import { TagBadge } from "./TagBadge";
import { ExternalLink } from "lucide-react";

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
  link?: string;
}

export function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div
      className="relative rounded-lg border-l-[3px] p-6"
      style={{
        backgroundColor: "var(--color-surface)",
        borderLeftColor: "var(--color-neon-dim)",
        borderTop: "1px solid var(--color-border)",
        borderRight: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
        <h3
          className="font-display font-semibold text-base"
          style={{ color: "var(--color-text-primary)" }}
        >
          {exp.role}
        </h3>
        <span
          className="text-xs font-mono shrink-0"
          style={{ color: "var(--color-text-faint)" }}
        >
          {exp.period}
        </span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-medium" style={{ color: "var(--color-amber)" }}>
          {exp.company}
        </span>
        <span className="text-xs" style={{ color: "var(--color-text-faint)" }}>
          · {exp.location}
        </span>
        {exp.link && (
          <a
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto"
            style={{ color: "var(--color-text-faint)" }}
          >
            <ExternalLink size={12} />
          </a>
        )}
      </div>

      <ul className="space-y-1.5 mb-4">
        {exp.bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed">
            <span
              className="mt-1.5 shrink-0 w-1 h-1 rounded-full"
              style={{ backgroundColor: "var(--color-neon-dim)" }}
            />
            <span style={{ color: "var(--color-text-muted)" }}>{b}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {exp.tags.map((tag) => (
          <TagBadge key={tag} label={tag} variant="neon" />
        ))}
      </div>
    </div>
  );
}
