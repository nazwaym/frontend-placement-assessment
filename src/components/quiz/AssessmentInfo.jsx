export default function AssessmentInfo({ answeredCount, totalQuestions }) {
  const percentage = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <aside
      aria-label="Informasi Assessment"
      className="hidden xl:flex w-64 shrink-0 flex-col gap-4 rounded-2xl border border-border bg-surface p-5 shadow-sm self-start"
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-bold text-text">Informasi Ujian</h3>
        <p className="text-xs text-text-muted">Frontend Placement Test</p>
      </div>

      {/* Progress Breakdown Card */}
      <div className="flex flex-col gap-2 rounded-xl bg-background p-3.5 border border-border">
        <div className="flex items-center justify-between text-xs font-semibold text-text">
          <span>Kelengkapan</span>
          <span className="text-primary">{percentage}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-border/60">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="mt-1 flex items-center justify-between text-[11px] text-text-muted">
          <span>{answeredCount} Terjawab</span>
          <span>{totalQuestions - answeredCount} Tersisa</span>
        </div>
      </div>

      {/* Autosave badge */}
      <div className="flex items-center gap-2 rounded-xl bg-green-50/80 px-3 py-2 border border-green-200/60 text-xs text-green-900">
        <span className="flex h-2 w-2 rounded-full bg-green-600 animate-pulse" />
        <span className="font-medium text-[11px]">Progres tersimpan otomatis</span>
      </div>

      {/* Tips / Instructions */}
      <div className="flex flex-col gap-2 border-t border-border pt-3 text-xs text-text-muted">
        <span className="font-semibold text-text">Petunjuk Pengerjaan:</span>
        <ul className="flex flex-col gap-1.5 list-disc pl-4 text-[11px] leading-relaxed">
          <li>Pilih satu jawaban yang paling tepat pada setiap soal.</li>
          <li>Kamu dapat berpindah dan meninjau kembali soal kapan saja.</li>
          <li>Setelah selesai, klik <strong>Review Jawaban</strong> untuk mengonfirmasi.</li>
        </ul>
      </div>
    </aside>
  );
}
