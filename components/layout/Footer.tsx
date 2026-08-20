export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="theme-dark border-t py-8"
      style={{ backgroundColor: "var(--color-elevated)", borderColor: "var(--color-border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs font-mono" style={{ color: "var(--color-text-faint)" }}>
          © {year} Shanmukh Upadhyayula
        </p>
        <p className="text-xs font-mono" style={{ color: "var(--color-text-faint)" }}>
          Built with{" "}
          <span style={{ color: "var(--color-signal-dim)" }}>Next.js</span>
        </p>
      </div>
    </footer>
  );
}
