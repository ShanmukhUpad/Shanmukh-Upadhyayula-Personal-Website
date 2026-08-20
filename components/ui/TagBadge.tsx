import { cn } from "@/lib/utils";

interface TagBadgeProps {
  label: string;
  variant?: "signal" | "muted" | "outline";
  className?: string;
}

export function TagBadge({ label, variant = "outline", className }: TagBadgeProps) {
  const styles = {
    signal: "bg-[var(--color-signal-tint)] text-[var(--color-signal)] border-[var(--color-signal-dim)]",
    muted: "bg-[var(--color-surface)] text-[var(--color-text-muted)] border-[var(--color-border)]",
    outline: "bg-transparent text-[var(--color-text-muted)] border-[var(--color-border)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-mono border",
        styles[variant],
        className
      )}
      style={{ borderRadius: 6 }}
    >
      {label}
    </span>
  );
}
