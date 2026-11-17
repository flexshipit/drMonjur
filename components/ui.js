export function Container({ className = "", children }) {
  return <div className={`shell ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase ${
        light
          ? "border border-mint/20 bg-white/10 text-mint"
          : "border border-teal/15 bg-mint/50 text-teal"
      }`}
    >
      <span
        className={`size-1.5 rounded-full ${light ? "bg-mint" : "bg-teal"}`}
        aria-hidden="true"
      />
      <span>{children}</span>
    </div>
  );
}
