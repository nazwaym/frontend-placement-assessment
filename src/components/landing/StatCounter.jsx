import { useCountUp } from "../../hooks/useCountUp";

export default function StatCounter({ target, suffix = "", prefix = "", label }) {
  const value = useCountUp(target);

  return (
    <div className="text-center">
      <p className="font-display text-3xl text-primary">
        {prefix}
        {value}
        {suffix}
      </p>
      <p className="mt-0.5 text-xs text-text-muted">{label}</p>
    </div>
  );
}
