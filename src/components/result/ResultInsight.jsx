import { CATEGORIES } from "../../lib/categories";

const CATEGORY_LABELS = Object.fromEntries(
  CATEGORIES.map(({ id, label }) => [id, label]),
);

const LEVEL_INSIGHTS = {
  Beginner: ({ strongest, weakest }) =>
    `Hasil assessment menunjukkan bahwa kamu sedang membangun fondasi di dunia frontend. ${
      weakest
        ? `Area ${weakest} bisa menjadi prioritas awal untuk dipelajari.`
        : "Mulailah dari dasar dan bangun pemahamanmu secara bertahap."
    }${
      strongest
        ? ` Kabar baiknya, pemahamanmu di ${strongest} sudah cukup baik — gunakan itu sebagai pijakan.`
        : ""
    }`,
  Intermediate: ({ strongest, weakest }) =>
    `Kamu sudah memiliki dasar yang cukup solid di frontend. ${
      strongest
        ? `${strongest} menjadi area terkuatmu saat ini.`
        : "Kamu punya pemahaman yang merata di berbagai area."
    }${
      weakest
        ? ` Untuk naik level, fokuskan peningkatan di ${weakest}.`
        : " Terus pertajam kemampuanmu di setiap area."
    }`,
  Advanced: ({ strongest, weakest }) =>
    `Kemampuan frontend kamu sudah berada di level yang baik. ${
      strongest
        ? `${strongest} menunjukkan penguasaan yang kuat.`
        : "Kamu menunjukkan pemahaman yang konsisten di seluruh kategori."
    }${
      weakest
        ? ` Untuk menyempurnakan, dalami lagi ${weakest} agar pemahaman makin utuh.`
        : " Saatnya mengasah skill untuk proyek yang lebih kompleks."
    }`,
};

export default function ResultInsight({ level, categoryPerformance }) {
  const sorted = [...categoryPerformance].sort(
    (a, b) => b.percentage - a.percentage,
  );

  const strongest =
    sorted.length > 0 && sorted[0].percentage > 0
      ? CATEGORY_LABELS[sorted[0].category] ?? sorted[0].category
      : null;

  const weakest =
    sorted.length > 0
      ? CATEGORY_LABELS[sorted[sorted.length - 1].category] ??
        sorted[sorted.length - 1].category
      : null;

  const getInsight = LEVEL_INSIGHTS[level] || LEVEL_INSIGHTS.Beginner;
  const insightText = getInsight({
    strongest: strongest !== weakest ? strongest : null,
    weakest: strongest !== weakest ? weakest : null,
  });

  return (
    <div
      className="rounded-2xl border border-primary/15 bg-primary-soft/40 p-5 sm:p-6 animate-fade-up"
      style={{ animationDelay: "0.3s" }}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
          </svg>
        </span>
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-bold text-text">Insight untuk Kamu</h3>
          <p className="text-sm leading-relaxed text-text-muted">{insightText}</p>
        </div>
      </div>
    </div>
  );
}
