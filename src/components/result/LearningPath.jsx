export default function LearningPath({ focus }) {
  if (!focus || focus.length === 0) return null;

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 sm:p-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-text">Fokus Pembelajaran</h2>
        <p className="text-sm text-text-muted">
          Rekomendasi alur materi yang perlu kamu kuasai secara bertahap.
        </p>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-y-3 sm:gap-x-2 relative">
        {focus.map((item, index) => {
          const isLast = index === focus.length - 1;
          return (
            <div key={item} className="group relative flex flex-col sm:flex-row items-start sm:items-center">
              {/* Node */}
              <div className="flex items-center justify-center rounded-xl border border-primary/20 bg-primary-soft/50 px-5 py-3 text-[13px] font-semibold text-primary shadow-sm transition-all hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_12px_-2px_rgba(29,78,216,0.25)] cursor-default select-none z-10">
                {item}
              </div>
              
              {/* Connector Line (Mobile: vertical, Desktop: horizontal) */}
              {!isLast && (
                <div className="hidden sm:flex items-center justify-center px-1.5 text-primary/30 group-hover:text-primary/60 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              {!isLast && (
                <div className="sm:hidden flex h-6 w-full items-center pl-7 text-primary/30 group-hover:text-primary/60 transition-colors relative z-0">
                  {/* Vertical line indicator for mobile */}
                  <div className="w-px h-full bg-primary/20"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
