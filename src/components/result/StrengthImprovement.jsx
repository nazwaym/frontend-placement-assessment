import { CATEGORIES } from "../../lib/categories";

const CATEGORY_LABELS = Object.fromEntries(
  CATEGORIES.map(({ id, label }) => [id, label]),
);

export default function StrengthImprovement({ categoryPerformance }) {
  const sorted = [...categoryPerformance].sort(
    (a, b) => b.percentage - a.percentage,
  );

  const strengths = sorted.filter((c) => c.percentage >= 67);
  const improvements = sorted.filter((c) => c.percentage < 67).reverse();

  // If all categories are strengths or all need improvement, adjust
  const hasStrengths = strengths.length > 0;
  const hasImprovements = improvements.length > 0;

  return (
    <div
      className="grid gap-4 sm:grid-cols-2 animate-fade-up"
      style={{ animationDelay: "0.25s" }}
    >
      {/* Strengths */}
      <div className="flex flex-col gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600 text-white text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
          </span>
          <h3 className="text-sm font-bold text-emerald-900">Kekuatan Kamu</h3>
        </div>

        {hasStrengths ? (
          <ul className="flex flex-col gap-2">
            {strengths.map(({ category, percentage }) => (
              <li
                key={category}
                className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-2 text-sm border border-emerald-200/60"
              >
                <span className="font-medium text-emerald-900">
                  {CATEGORY_LABELS[category] ?? category}
                </span>
                <span className="rounded-md bg-emerald-600 px-2 py-0.5 text-xs font-bold text-white">
                  {percentage}%
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-emerald-800/70 leading-relaxed">
            Belum ada kategori yang mencapai skor kuat. Jangan khawatir — ini
            adalah titik awal yang bagus untuk berkembang.
          </p>
        )}
      </div>

      {/* Improvement Areas */}
      <div className="flex flex-col gap-3 rounded-2xl border border-amber-200 bg-amber-50/50 p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500 text-white text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
          </span>
          <h3 className="text-sm font-bold text-amber-900">Yang Perlu Ditingkatkan</h3>
        </div>

        {hasImprovements ? (
          <ul className="flex flex-col gap-2">
            {improvements.map(({ category, percentage }) => (
              <li
                key={category}
                className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-2 text-sm border border-amber-200/60"
              >
                <span className="font-medium text-amber-900">
                  {CATEGORY_LABELS[category] ?? category}
                </span>
                <span className="rounded-md bg-amber-500 px-2 py-0.5 text-xs font-bold text-white">
                  {percentage}%
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-amber-800/70 leading-relaxed">
            Semua kategori sudah menunjukkan performa yang baik. Pertahankan dan
            terus perdalam pemahamanmu.
          </p>
        )}
      </div>
    </div>
  );
}
