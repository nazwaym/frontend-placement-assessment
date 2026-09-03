export default function OptionCard({ label, prefix, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group relative flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition-all focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary ${
        selected
          ? "border-primary bg-primary-soft text-text"
          : "border-border bg-surface text-text hover:border-primary/40 hover:bg-background"
      }`}
    >
      <span
        className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border text-xs font-semibold transition-colors ${
          selected
            ? "border-primary bg-primary text-white shadow-sm"
            : "border-border bg-background text-text-muted group-hover:border-primary/40 group-hover:text-primary"
        }`}
      >
        {prefix}
      </span>
      <span className="flex-grow">{label}</span>
      {selected && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 flex-shrink-0 text-primary animate-pop-in"
        >
          <path
            fillRule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}
