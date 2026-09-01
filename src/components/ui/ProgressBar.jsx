export default function ProgressBar({ current, total, showLabel = true, className = "" }) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-text-muted">
          <span>
            Soal <strong className="text-text font-semibold">{current}</strong> dari {total}
          </span>
          <span className="font-semibold text-primary">{percentage}%</span>
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label={`Progress soal ${current} dari ${total}`}
        className="h-2 w-full overflow-hidden rounded-full bg-border/70"
      >
        <div
          className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
