export function Container({ className = "", children }) {
  return <div className={`shell ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.14em] ${
        light ? "text-mint" : "text-teal"
      }`}
    >
      {children}
    </p>
  );
}
