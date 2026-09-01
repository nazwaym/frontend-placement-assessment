const VARIANT_CLASSES = {
  primary:
    "bg-primary text-white hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed",
  accent:
    "bg-accent text-primary hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed",
  secondary:
    "bg-transparent text-text border border-border hover:bg-surface disabled:opacity-50 disabled:cursor-not-allowed",
};

export default function Button({
  variant = "primary",
  type = "button",
  className = "",
  children,
  ...props
}) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 disabled:hover:translate-y-0 disabled:hover:shadow-sm ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
