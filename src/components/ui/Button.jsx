const VARIANT_CLASSES = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed",
  accent:
    "bg-accent text-primary-hover hover:bg-accent-hover shadow-sm disabled:opacity-50 disabled:cursor-not-allowed",
  secondary:
    "bg-surface text-text border border-border shadow-sm hover:bg-slate-50 hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed",
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
