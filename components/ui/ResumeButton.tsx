"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function ResumeButton({ className = "" }: { className?: string }) {
  return (
    <motion.a
      href="/resume.pdf"
      download="ShanmukhUpadhyayula-Resume.pdf"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium border transition-colors duration-200 ${className}`}
      style={{
        borderColor: "var(--color-neon-dim)",
        color: "var(--color-neon)",
        backgroundColor: "rgba(167,139,250,0.08)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor =
          "rgba(167,139,250,0.18)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor =
          "rgba(167,139,250,0.08)";
      }}
    >
      <Download size={15} />
      Download Resume
    </motion.a>
  );
}
