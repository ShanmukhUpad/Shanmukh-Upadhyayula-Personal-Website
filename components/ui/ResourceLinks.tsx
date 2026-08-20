import Link from "next/link";
import { Download, ExternalLink, Github } from "@/components/ui/icons";

export interface ResourceLink {
  href: string;
  label: string;
  /** Adds the `download` attribute (internal links only). */
  download?: boolean;
  icon?: "download" | "external" | "github";
}

const ICONS = {
  download: Download,
  external: ExternalLink,
  github: Github,
};

function iconFor(link: ResourceLink) {
  if (link.icon) return ICONS[link.icon];
  if (link.download) return ICONS.download;
  return ICONS.external;
}

const linkClass =
  "flex items-center gap-1.5 text-xs transition-colors duration-150 hover:text-[var(--color-signal)]";
const linkStyle = { color: "var(--color-text-muted)" };

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
            <Link
              key={i}
              href={link.href}
              download={link.download ?? false}
              className={linkClass}
              style={linkStyle}
            >
              <Icon size={13} />
              {link.label}
            </Link>
          );
        }

        return (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            style={linkStyle}
          >
            <Icon size={13} />
            {link.label}
          </a>
        );
      })}
    </>
  );
}
