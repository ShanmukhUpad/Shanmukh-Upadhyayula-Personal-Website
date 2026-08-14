"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export interface ResourceLink {
  href: string;
  label: string;
  /** Adds the `download` attribute (internal links only). */
  download?: boolean;
  icon?: "download" | "external" | "github";
}

const MotionLink = motion.create(Link);

const ICONS = {
  download: Download,
  external: ExternalLink,
  github: FaGithub,
};

function iconFor(link: ResourceLink) {
  if (link.icon) return ICONS[link.icon];
  if (link.download) return ICONS.download;
  return ICONS.external;
}

const linkClass = "flex items-center gap-1.5 text-xs transition-colors duration-150";
const linkStyle = { color: "var(--color-text-muted)" };
const hoverOn = (e: React.MouseEvent<HTMLElement>) =>
  ((e.currentTarget as HTMLElement).style.color = "var(--color-neon)");
const hoverOff = (e: React.MouseEvent<HTMLElement>) =>
  ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)");

/** Row of small labelled resource links (notebook downloads, papers, external views). */
export function ResourceLinks({ links }: { links?: ResourceLink[] }) {
  if (!links || links.length === 0) return null;

  return (
    <>
      {links.map((link, i) => {
        const Icon = iconFor(link);
        const isInternal = link.href.startsWith("/");

        if (isInternal) {
          return (
            <MotionLink
              key={i}
              href={link.href}
              download={link.download ?? false}
              whileHover={{ y: -2 }}
              className={linkClass}
              style={linkStyle}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >
              <Icon size={13} />
              {link.label}
            </MotionLink>
          );
        }

        return (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className={linkClass}
            style={linkStyle}
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
          >
            <Icon size={13} />
            {link.label}
          </motion.a>
        );
      })}
    </>
  );
}
