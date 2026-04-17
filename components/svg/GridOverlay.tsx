export function GridOverlay({ opacity = 1 }: { opacity?: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 bg-city-grid"
      style={{ opacity }}
      aria-hidden
    />
  );
}
