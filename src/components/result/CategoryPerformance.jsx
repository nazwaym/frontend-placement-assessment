import { CATEGORIES } from "../../lib/categories";

const CATEGORY_LABELS = Object.fromEntries(
  CATEGORIES.map(({ id, label }) => [id, label]),
);

function barColor(percentage) {
  if (percentage >= 67) return "bg-emerald-500";
  if (percentage >= 34) return "bg-amber-500";
  return "bg-red-400";
}

function barBgColor(percentage) {
  if (percentage >= 67) return "bg-emerald-100";
  if (percentage >= 34) return "bg-amber-100";
  return "bg-red-100";
}

export default function CategoryPerformance({ items }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:p-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-text">Performa per Kategori</h2>
        <span className="text-xs font-medium text-text-muted">
          {items.length} Kategori
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {items.map(({ category, correct, total, percentage }, index) => (
          <div key={category} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-text">
                {CATEGORY_LABELS[category] ?? category}
              </span>
              <span className="font-semibold text-text tabular-nums">
                {correct}/{total}
                <span className="ml-1.5 text-text-muted font-normal">
                  ({percentage}%)
                </span>
              </span>
            </div>
            <div
              className={`h-2.5 w-full overflow-hidden rounded-full ${barBgColor(percentage)}`}
            >
              <div
                className={`h-full rounded-full animate-bar-fill ${barColor(percentage)}`}
                style={{
                  "--bar-target": `${percentage}%`,
                  animationDelay: `${0.3 + index * 0.1}s`,
                  width: 0,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
