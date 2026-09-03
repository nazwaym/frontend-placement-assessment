import { useEffect, useState, useRef } from "react";
import ProgressBar from "../ui/ProgressBar";
import BrandLogo from "../ui/BrandLogo";

export default function AssessmentHeader({
  currentIndex,
  totalQuestions,
  answeredCount,
  onOpenMobileDrawer,
  onTimeout,
}) {
  // 20-minute assessment countdown (1200 seconds)
  const [secondsLeft, setSecondsLeft] = useState(1200);
  const timeoutTriggeredRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          if (!timeoutTriggeredRef.current && onTimeout) {
            timeoutTriggeredRef.current = true;
            onTimeout();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimeout]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const isWarning = secondsLeft < 180; // Warning under 3 minutes

  return (
    <header className="sticky top-0 z-30 border-b border-border/50 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        {/* Left: Branding & Assessment Title */}
        <div className="flex items-center gap-3">
          <BrandLogo showSubtitle={true} />
        </div>

        {/* Center: Progress (Desktop) / Mobile Question Sheet Trigger */}
        <div className="flex items-center gap-3">
          {/* Mobile Navigator Drawer Button */}
          <button
            type="button"
            onClick={onOpenMobileDrawer}
            className="flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold text-text transition-colors hover:border-primary/40 sm:hidden"
            aria-label="Buka daftar soal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              className="h-4 w-4 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span>Daftar Soal</span>
            <span className="rounded-full bg-primary/10 px-1.5 py-0.2 text-[10px] font-bold text-primary">
              {answeredCount}/{totalQuestions}
            </span>
          </button>

          {/* Desktop Progress Bar Header */}
          <div className="hidden w-48 lg:w-64 sm:block">
            <ProgressBar
              current={currentIndex + 1}
              total={totalQuestions}
              showLabel={true}
            />
          </div>
        </div>

        {/* Right: Timer & Autosave Status */}
        <div className="flex items-center gap-3">
          <div
            className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold shadow-sm transition-colors ${
              isWarning
                ? "border-warning/30 bg-amber-50 text-warning"
                : "border-border bg-surface text-text"
            }`}
            title="Sisa Waktu Pengerjaan"
            aria-label={`Sisa waktu: ${formattedTime}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              className={`h-4 w-4 ${isWarning ? "text-warning" : "text-text-muted"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-semibold text-text">{formattedTime}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
