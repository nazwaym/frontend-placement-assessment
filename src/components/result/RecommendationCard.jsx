const RECOMMENDATION_RATIONALE = {
  Beginner:
    "Berdasarkan hasil assessment, kamu disarankan untuk memperkuat fundamental frontend terlebih dahulu. Program ini dirancang untuk membangun dasar yang kuat sebelum melangkah ke materi yang lebih kompleks.",
  Intermediate:
    "Hasil assessment menunjukkan bahwa kamu sudah memiliki dasar yang baik. Program ini akan membantumu mengembangkan skill ke tahap implementasi nyata membangun UI yang responsif dan memahami arsitektur frontend modern.",
  Advanced:
    "Kamu sudah menguasai dasar dengan baik. Program ini fokus pada skill lanjutan yang dibutuhkan di lingkungan kerja profesional  arsitektur komponen, state management, dan optimasi performa.",
};

export default function RecommendationCard({ program, level }) {
  const rationale =
    RECOMMENDATION_RATIONALE[level] || RECOMMENDATION_RATIONALE.Beginner;

  return (
    <div
      className="relative flex flex-col gap-4 rounded-2xl border border-primary/20 bg-surface p-6 sm:p-8 shadow-[0_4px_24px_-8px_rgba(29,78,216,0.12)] animate-fade-up overflow-hidden"
      style={{ animationDelay: "0.35s" }}
    >
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent opacity-90" />
      <div className="flex flex-col gap-1">
        <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
          Program yang Direkomendasikan
        </span>
        <h2 className="text-2xl font-display font-bold text-text sm:text-3xl mt-1">{program}</h2>
      </div>

      <div className="mt-2 rounded-xl bg-background border border-border p-4 sm:p-5">
        <p className="text-sm leading-relaxed text-text-muted">
          <strong className="text-text font-semibold mr-1.5 block mb-1">Kenapa program ini cocok untukmu?</strong>
          {rationale}
        </p>
      </div>
    </div>
  );
}
