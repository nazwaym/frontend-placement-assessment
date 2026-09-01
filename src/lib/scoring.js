export function calculateScore(answers, questions) {
  const correctCount = questions.reduce(
    (count, question) =>
      answers[question.id] === question.correctAnswer ? count + 1 : count,
    0,
  );

  const percentage = Math.round((correctCount / questions.length) * 100);

  return { correctCount, totalQuestions: questions.length, percentage };
}

export function determineLevel(percentage) {
  if (percentage <= 40) return "Beginner";
  if (percentage <= 75) return "Intermediate";
  return "Advanced";
}

export function calculateCategoryPerformance(answers, questions) {
  const byCategory = {};

  for (const question of questions) {
    const entry = byCategory[question.category] ?? { correct: 0, total: 0 };
    entry.total += 1;
    if (answers[question.id] === question.correctAnswer) entry.correct += 1;
    byCategory[question.category] = entry;
  }

  return Object.entries(byCategory).map(([category, { correct, total }]) => ({
    category,
    correct,
    total,
    percentage: Math.round((correct / total) * 100),
  }));
}
