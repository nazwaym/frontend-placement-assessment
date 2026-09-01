export default function Input({ label, id, error, light = false, ...props }) {
  return (
    <div className="flex flex-col gap-1.5 text-left">
      <label
        htmlFor={id}
        className={`text-sm font-medium ${light ? "text-white/90" : "text-text"}`}
      >
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`rounded-xl border px-4 py-3 text-sm outline-none transition-shadow focus-visible:ring-4 ${
          light
            ? "border-white/20 bg-white/10 text-white placeholder-white/40 focus-visible:border-accent focus-visible:ring-accent/20"
            : "border-border bg-white/60 text-text focus-visible:border-primary focus-visible:ring-primary-soft"
        } ${error ? (light ? "border-red-300" : "border-error") : ""}`}
        {...props}
      />
      {error && (
        <p
          id={`${id}-error`}
          className={`text-sm ${light ? "text-red-200" : "text-error"}`}
        >
          {error}
        </p>
      )}
    </div>
  );
}
