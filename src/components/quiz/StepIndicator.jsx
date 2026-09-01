const STEPS = ["Biodata", "Pengenalan", "Ujian", "Hasil"];

export default function StepIndicator({ activeStep }) {
  return (
    <ol className="flex items-center gap-3 text-xs font-medium text-text-muted">
      {STEPS.map((step, index) => (
        <li
          key={step}
          className={`flex items-center gap-2 ${
            index === activeStep ? "text-primary" : ""
          }`}
        >
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full border text-[10px] ${
              index === activeStep
                ? "border-primary bg-primary text-white"
                : "border-border"
            }`}
          >
            {index + 1}
          </span>
          {step}
        </li>
      ))}
    </ol>
  );
}
