import { CATEGORIES } from "../../lib/categories";

export default function CategoryMarquee() {
  const items = [...CATEGORIES, ...CATEGORIES];

  return (
    <div
      className="w-full max-w-full min-w-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-hidden="true"
    >
      <div className="animate-marquee flex w-max gap-3 py-1">
        {items.map((category, index) => (
          <span
            key={`${category.id}-${index}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-2 text-xs font-semibold text-text"
          >
            {category.label}
            <span className="rounded-full bg-primary-soft px-1.5 py-0.5 text-[10px] text-primary">
              {category.count}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
