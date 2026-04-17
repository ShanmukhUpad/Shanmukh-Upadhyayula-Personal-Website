"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const MotionLink = motion.create(Link);
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md border-b"
          : "border-b border-transparent"
      )}
      style={{
        backgroundColor: scrolled ? "rgba(26,26,36,0.85)" : "transparent",
        borderColor: scrolled ? "var(--color-border)" : "transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold font-mono border"
            style={{
              backgroundColor: "rgba(167,139,250,0.1)",
              borderColor: "var(--color-neon-dim)",
              color: "var(--color-neon)",
            }}
          >
            SU
          </motion.div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
          <MotionLink
            href="/ShanmukhUpadhyayula-Resume.pdf"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="ml-3 px-4 py-1.5 rounded text-sm font-medium border transition-colors duration-200"
            style={{
              borderColor: "var(--color-neon-dim)",
              color: "var(--color-neon)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "rgba(167,139,250,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "transparent";
            }}
          >
            Resume
          </MotionLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{ color: "var(--color-text-muted)" }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t"
            style={{
              backgroundColor: "var(--color-elevated)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm py-1.5 transition-colors duration-150"
                  style={{ color: "var(--color-text-muted)" }}
                  onClick={() => setMobileOpen(false)}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--color-neon)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")
                  }
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/ShanmukhUpadhyayula-Resume.pdf"
                download
                className="mt-1 px-4 py-2 rounded text-sm font-medium border text-center"
                style={{
                  borderColor: "var(--color-neon-dim)",
                  color: "var(--color-neon)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="relative px-3 py-1.5 text-sm transition-colors duration-150 group"
      style={{ color: "var(--color-text-muted)" }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")
      }
    >
      {label}
      <span
        className="absolute bottom-0 left-3 right-3 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
        style={{ backgroundColor: "var(--color-neon)" }}
      />
    </a>
  );
}
