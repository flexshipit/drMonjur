export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] ${
        light ? "text-mint" : "text-teal"
      }`}
    >
      <span
        className={`size-1.5 rounded-full ${light ? "bg-copper" : "bg-orchid"}`}
        aria-hidden
      />
      {children}
    </p>
  );
}
