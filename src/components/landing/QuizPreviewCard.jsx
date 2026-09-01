const OPTIONS = ["[1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "[3, 6, 9]"];
const SELECTED_INDEX = 1;

export default function QuizPreviewCard({ className = "" }) {
  return (
    <div
      className={`animate-float w-64 rounded-2xl border border-border bg-white p-4 shadow-xl ${className}`}
      style={{ "--float-rotate": "-6deg" }}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between text-[11px] font-semibold text-text-muted">
        <span>Soal 3 dari 15</span>
        <span className="rounded-full bg-accent-soft px-2 py-0.5 text-accent-hover">
          JavaScript
        </span>
      </div>

      <p className="mt-2.5 font-mono text-[11px] leading-relaxed text-text">
        const result = numbers.map(
        <br />
        &nbsp;&nbsp;number =&gt; number * 2
        <br />
        );
      </p>

      <div className="mt-3 flex flex-col gap-1.5">
        {OPTIONS.map((option, index) => (
          <div
            key={option}
            className={`flex items-center justify-between rounded-lg border px-2.5 py-1.5 text-[11px] ${
              index === SELECTED_INDEX
                ? "border-primary bg-primary-soft text-primary"
                : "border-border text-text-muted"
            }`}
          >
            {option}
            {index === SELECTED_INDEX && (
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none">
                <path
                  d="M4 10.5 8 14.5 16 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
