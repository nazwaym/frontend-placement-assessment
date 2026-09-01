const RECOMMENDATION_RATIONALE = {
  Beginner:
    "Berdasarkan hasil assessment, kamu disarankan untuk memperkuat fundamental frontend terlebih dahulu. Program ini dirancang untuk membangun dasar yang kuat sebelum melangkah ke materi yang lebih kompleks.",
  Intermediate:
    "Hasil assessment menunjukkan bahwa kamu sudah memiliki dasar yang baik. Program ini akan membantumu mengembangkan skill ke tahap implementasi nyata — membangun UI yang responsif dan memahami arsitektur frontend modern.",
  Advanced:
    "Kamu sudah menguasai dasar dengan baik. Program ini fokus pada skill lanjutan yang dibutuhkan di lingkungan kerja profesional — arsitektur komponen, state management, dan optimasi performa.",
};

export default function RecommendationCard({ program, focus, level }) {
  const rationale =
    RECOMMENDATION_RATIONALE[level] || RECOMMENDATION_RATIONALE.Beginner;

  return (
    <div
      className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 sm:p-8 transition-shadow hover:shadow-md animate-fade-up"
      style={{ animationDelay: "0.35s" }}
    >
      <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold tracking-wide text-text-muted uppercase">
          Program yang Direkomendasikan
        </span>
        <h2 className="text-xl font-bold text-text sm:text-2xl">{program}</h2>
      </div>

      <p className="text-sm leading-relaxed text-text-muted">{rationale}</p>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-text uppercase tracking-wide">
          Fokus Pembelajaran
        </span>
        <ul className="flex flex-wrap gap-2">
          {focus.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-text transition-colors hover:border-primary/40 hover:text-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-primary/60">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
