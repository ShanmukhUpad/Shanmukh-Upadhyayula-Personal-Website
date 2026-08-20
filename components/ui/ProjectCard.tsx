import Link from "next/link";
import { ExternalLink, Github } from "@/components/ui/icons";
import { TagBadge } from "./TagBadge";
import { ResourceLinks, type ResourceLink } from "./ResourceLinks";

export interface Project {
  title: string;
  description: string | string[];
  tags: string[];
  github?: string;
  demo?: string;
  demoLabel?: string;
  featured?: boolean;
  period?: string;
  links?: ResourceLink[];
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group relative flex flex-col border p-6 card-hover-glow"
      style={{
        borderRadius: 8,
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      {project.featured && (
        <span
          className="absolute top-4 right-4 text-xs font-mono px-2 py-0.5 border"
          style={{
            borderRadius: 6,
            color: "var(--color-signal)",
            borderColor: "var(--color-signal-dim)",
            backgroundColor: "var(--color-signal-tint)",
          }}
        >
          Featured
        </span>
      )}

      {project.period && (
        <p className="text-xs font-mono mb-2" style={{ color: "var(--color-text-faint)" }}>
          {project.period}
        </p>
      )}

      <h3
        className="font-display font-semibold text-base mb-2 leading-snug pr-16"
        style={{ color: "var(--color-text-primary)" }}
      >
        {project.title}
      </h3>

      {Array.isArray(project.description) ? (
        <ul className="space-y-1 text-sm flex-1 mb-4">
          {project.description.map((b, i) => (
            <li key={i} className="flex gap-2 leading-relaxed">
              <span className="mt-2 shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: "var(--color-signal-dim)" }} />
              <span style={{ color: "var(--color-text-muted)" }}>{b}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--color-text-muted)" }}>
          {project.description}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <TagBadge key={tag} label={tag} variant="muted" />
        ))}
      </div>

      <div className="flex items-center gap-3 mt-auto flex-wrap">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs transition-colors duration-150 hover:text-[var(--color-signal)]"
            style={{ color: "var(--color-text-muted)" }}
          >
            <Github size={13} />
            GitHub
          </a>
        )}
        {project.demo && (project.demo.startsWith("/") ? (
          <Link
            href={project.demo}
            className="flex items-center gap-1.5 text-xs transition-colors duration-150 hover:text-[var(--color-signal)]"
            style={{ color: "var(--color-text-muted)" }}
          >
            <ExternalLink size={13} />
            {project.demoLabel ?? "Demo"}
          </Link>
        ) : (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs transition-colors duration-150 hover:text-[var(--color-signal)]"
            style={{ color: "var(--color-text-muted)" }}
          >
            <ExternalLink size={13} />
            {project.demoLabel ?? "Demo"}
          </a>
        ))}
        <ResourceLinks links={project.links} />
      </div>
    </div>
  );
}
