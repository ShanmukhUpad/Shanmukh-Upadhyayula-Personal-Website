"use client";

import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";
import { TagBadge } from "./TagBadge";

export interface Project {
  title: string;
  description: string | string[];
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  period?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-lg border p-6 transition-shadow duration-300 card-hover-glow"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      {project.featured && (
        <span
          className="absolute top-4 right-4 text-xs font-mono px-2 py-0.5 rounded-sm border"
          style={{
            color: "var(--color-amber)",
            borderColor: "var(--color-amber-dim)",
            backgroundColor: "rgba(56,189,248,0.08)",
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
              <span className="mt-2 shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: "var(--color-neon-dim)" }} />
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

      <div className="flex items-center gap-3 mt-auto">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="flex items-center gap-1.5 text-xs transition-colors duration-150"
            style={{ color: "var(--color-text-muted)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--color-neon)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")
            }
          >
            <GitBranch size={13} />
            GitHub
          </motion.a>
        )}
        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="flex items-center gap-1.5 text-xs transition-colors duration-150"
            style={{ color: "var(--color-text-muted)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--color-amber)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")
            }
          >
            <ExternalLink size={13} />
            Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
