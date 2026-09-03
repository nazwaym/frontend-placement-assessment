export default function BrandLogo({ showSubtitle = false }) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-display text-xl font-bold tracking-tight text-primary">
        ScholarsToday<span className="text-accent">.</span>
      </span>
      {showSubtitle && (
        <>
          <span className="hidden h-4 w-px bg-border sm:inline-block" />
          <span className="hidden text-sm font-semibold text-text sm:inline-block">
            Frontend Placement Test
          </span>
        </>
      )}
    </div>
  );
}
