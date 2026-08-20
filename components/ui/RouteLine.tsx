"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useActiveSection } from "@/hooks/useActiveSection";

const STOPS = [
  { id: "about", number: "01", label: "About" },
  { id: "experience", number: "02", label: "Experience" },
  { id: "education", number: "03", label: "Education" },
  { id: "projects", number: "04", label: "Projects" },
  { id: "skills", number: "05", label: "Skills" },
  { id: "contact", number: "06", label: "Contact" },
];

// Hardcoded (not theme-scoped): this rail is fixed at the page level, outside
// any .theme-dark section, so it must read against both white and dark-purple
// bands scrolling underneath it.
const TRACK_COLOR = "#b3a4d1";
const ACTIVE_COLOR = "#8b5cf6";

export function RouteLine() {
  const activeId = useActiveSection(STOPS.map((s) => s.id));
  const activeIndex = Math.max(0, STOPS.findIndex((s) => s.id === activeId));
  const reduced = useReducedMotion();

  const fillPercent = (activeIndex / (STOPS.length - 1)) * 100;

  return (
    <nav
      aria-label="Section progress"
      className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center"
      style={{ height: 320 }}
    >
      <div className="relative w-px flex-1" style={{ backgroundColor: TRACK_COLOR }}>
        <div
          className="absolute top-0 left-0 w-full"
          style={{
            height: `${fillPercent}%`,
            backgroundColor: ACTIVE_COLOR,
            transition: reduced ? "none" : "height 0.3s ease",
          }}
        />
        {STOPS.map((stop, i) => (
          <a
            key={stop.id}
            href={`#${stop.id}`}
            aria-current={i === activeIndex ? "true" : undefined}
            aria-label={stop.label}
            className="group absolute flex items-center"
            style={{
              top: `${(i / (STOPS.length - 1)) * 100}%`,
              left: 0,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span
              className="block rounded-full"
              style={{
                width: i === activeIndex ? 10 : 7,
                height: i === activeIndex ? 10 : 7,
                backgroundColor: i <= activeIndex ? ACTIVE_COLOR : TRACK_COLOR,
                border: "2px solid white",
              }}
            />
            <span
              className="pointer-events-none absolute left-4 whitespace-nowrap text-xs font-mono px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              style={{
                color: "white",
                backgroundColor: i === activeIndex ? ACTIVE_COLOR : "#5b4b8a",
              }}
            >
              {stop.number} {stop.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
