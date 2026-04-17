import { cn } from "@/lib/utils";

interface TagBadgeProps {
  label: string;
  variant?: "neon" | "amber" | "muted" | "outline";
  className?: string;
}

export function TagBadge({ label, variant = "outline", className }: TagBadgeProps) {
  const styles = {
    neon: "bg-[rgba(167,139,250,0.12)] text-[var(--color-neon)] border-[var(--color-neon-dim)]",
    amber: "bg-[rgba(56,189,248,0.1)] text-[var(--color-amber)] border-[var(--color-amber-dim)]",
    muted: "bg-[var(--color-surface)] text-[var(--color-text-muted)] border-[var(--color-border)]",
    outline: "bg-transparent text-[var(--color-text-muted)] border-[var(--color-border)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-mono border",
        styles[variant],
        className
      )}
    >
      {label}
    </span>
  );
}
