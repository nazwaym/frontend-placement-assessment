import { useCountUp } from "../../hooks/useCountUp";

const LEVEL_CONFIG = {
  Beginner: {
    color: "text-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    arcColor: "#1d4ed8",
    description:
      "Fondasi frontend kamu mulai terbentuk. Kamu disarankan memperkuat HTML, CSS, JavaScript dasar, dan programming logic sebelum masuk ke materi yang lebih lanjut.",
  },
  Intermediate: {
    color: "text-indigo-700",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    arcColor: "#4338ca",
    description:
      "Kamu sudah memiliki pemahaman dasar yang cukup baik. Saatnya memperdalam JavaScript, membangun komponen UI yang responsif, dan mulai memahami arsitektur frontend modern.",
  },
  Advanced: {
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    arcColor: "#059669",
    description:
      "Pemahaman frontend kamu sudah kuat. Kamu siap untuk mendalami arsitektur komponen, state management, optimasi performa, dan membangun aplikasi frontend siap produksi.",
  },
};

export default function CapabilitySummary({
  percentage,
  level,
  correctCount,
  totalQuestions,
}) {
  const animatedPercentage = useCountUp(percentage, 1200);
  const config = LEVEL_CONFIG[level] || LEVEL_CONFIG.Beginner;

  // SVG circle math
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-surface p-6 sm:p-8 animate-fade-up">
      {/* Score Circle */}
      <div className="relative flex items-center justify-center">
        <svg
          width="192"
          height="192"
          viewBox="0 0 192 192"
          className="transform -rotate-90"
          aria-hidden="true"
        >
          {/* Background track */}
          <circle
            cx="96"
            cy="96"
            r={radius}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="10"
            opacity="0.5"
          />
          {/* Progress arc */}
          <circle
            cx="96"
            cy="96"
            r={radius}
            fill="none"
            stroke={config.arcColor}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            className="animate-arc"
            style={{
              "--arc-length": circumference,
              "--arc-target": targetOffset,
            }}
          />
        </svg>
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-5xl font-bold tracking-tight text-text">
            {animatedPercentage}
            <span className="text-2xl font-semibold text-text-muted">%</span>
          </span>
          <span className="mt-1 text-xs font-medium text-text-muted">
            {correctCount} dari {totalQuestions} benar
          </span>
        </div>
      </div>

      {/* Level Badge */}
      <div className="flex flex-col items-center gap-3 text-center">
        <div
          className={`inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-bold ${config.bgColor} ${config.borderColor} ${config.color}`}
        >
          <span>Capability Level:</span>
          <span>{level}</span>
        </div>

        {/* Level Description */}
        <p className="max-w-md text-sm leading-relaxed text-text-muted">
          {config.description}
        </p>
      </div>
    </div>
  );
}
