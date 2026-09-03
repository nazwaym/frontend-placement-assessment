function statusOf(index, currentIndex, answers, questionIds) {
  if (index === currentIndex) return "current";
  return answers[questionIds[index]] !== undefined ? "answered" : "unanswered";
}

export default function QuestionNavigator({
  questionIds,
  currentIndex,
  answers,
  onNavigate,
  isMobileDrawerOpen = false,
  onCloseMobileDrawer,
}) {
  const answeredCount = questionIds.filter((id) => answers[id] !== undefined).length;
  const unansweredCount = questionIds.length - answeredCount;

  const renderItem = (id, index) => {
    const status = statusOf(index, currentIndex, answers, questionIds);
    const isCurrent = status === "current";
    const isAnswered = status === "answered";

    let itemStyle =
      "border-border bg-surface text-text hover:border-primary/40 hover:bg-background";
    if (isCurrent) {
      itemStyle = "border-primary bg-primary text-white font-semibold shadow-sm";
    } else if (isAnswered) {
      itemStyle = "border-primary/20 bg-primary-soft text-primary font-medium";
    }

    return (
      <button
        key={id}
        type="button"
        onClick={() => {
          onNavigate(index);
          if (onCloseMobileDrawer) onCloseMobileDrawer();
        }}
        aria-current={isCurrent ? "step" : undefined}
        aria-label={`Soal ${index + 1}${isAnswered ? ", sudah dijawab" : ", belum dijawab"}`}
        className={`group flex items-center justify-between rounded-xl border px-3 py-2.5 text-xs transition-all ${itemStyle}`}
      >
        <div className="flex items-center gap-2">
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold ${
              isCurrent
                ? "bg-white/20 text-white"
                : isAnswered
                  ? "bg-primary text-white"
                  : "bg-border text-text-muted"
            }`}
          >
            {isAnswered ? "✓" : isCurrent ? "●" : "○"}
          </span>
          <span className="tracking-wide">
            Soal {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-col items-end gap-0.5">
          {isCurrent && (
            <span className="text-[10px] font-semibold text-white/90">Aktif</span>
          )}
          {!isCurrent && (
            <span className={`text-[10px] font-semibold ${isAnswered ? "text-primary" : "text-text-muted"}`}>
              {isAnswered ? "Sudah dijawab" : "Belum dijawab"}
            </span>
          )}
        </div>
      </button>
    );
  };

  const navContent = (
    <div className="flex flex-col gap-4">
      {/* Header & Status Summary */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-text">Daftar Soal</h2>
          <span className="text-xs font-medium text-text-muted">
            Total {questionIds.length} Soal
          </span>
        </div>

        {/* Mini Status Breakdown */}
        <div className="grid grid-cols-2 gap-2 rounded-xl bg-background p-2.5 text-xs border border-border">
          <div className="flex items-center gap-1.5 text-primary font-medium">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>{answeredCount} Dijawab</span>
          </div>
          <div className="flex items-center gap-1.5 text-text-muted font-medium">
            <span className="h-2 w-2 rounded-full bg-border" />
            <span>{unansweredCount} Belum</span>
          </div>
        </div>
      </div>

      {/* Questions Vertical List / Grid */}
      <div className="flex flex-col gap-1.5 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
        {questionIds.map((id, index) => renderItem(id, index))}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Left Column) */}
      <aside
        aria-label="Navigasi Soal Desktop"
        className="hidden md:block w-64 shrink-0 rounded-3xl border border-border bg-surface p-5 shadow-sm"
      >
        {navContent}
      </aside>

      {/* Mobile Drawer / Bottom Sheet */}
      {isMobileDrawerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-nav-title"
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 md:hidden backdrop-blur-xs animate-fade-up"
        >
          <div className="relative flex max-h-[85vh] w-full flex-col rounded-t-3xl border-t border-border bg-surface p-5 shadow-2xl">
            {/* Grab handle bar */}
            <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-border" />

            {/* Header with Close button */}
            <div className="mb-3 flex items-center justify-between">
              <h3 id="mobile-nav-title" className="text-base font-bold text-text">
                Navigasi Soal
              </h3>
              <button
                type="button"
                onClick={onCloseMobileDrawer}
                className="rounded-full p-1.5 text-text-muted hover:bg-background hover:text-text"
                aria-label="Tutup daftar soal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Summary & Grid */}
            <div className="overflow-y-auto">
              {navContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
