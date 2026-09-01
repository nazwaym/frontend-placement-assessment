export default function ScoreCard({ percentage, level, correctCount, totalQuestions }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 text-center">
      <p className="text-sm text-text-muted">Capability Level</p>
      <p className="mt-1 text-2xl font-semibold text-primary">{level}</p>
      <p className="mt-4 text-4xl font-bold text-text">{percentage}%</p>
      <p className="mt-1 text-sm text-text-muted">
        {correctCount} dari {totalQuestions} soal benar
      </p>
    </div>
  );
}
