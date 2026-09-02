import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CapabilitySummary from "../components/result/CapabilitySummary";
import CategoryPerformance from "../components/result/CategoryPerformance";
import ResultInsight from "../components/result/ResultInsight";
import RecommendationCard from "../components/result/RecommendationCard";
import LearningPath from "../components/result/LearningPath";
import ResultCTA from "../components/result/ResultCTA";
import { useQuiz } from "../hooks/useQuiz";
import { calculateScore, calculateCategoryPerformance, determineLevel } from "../lib/scoring";
import { getRecommendation } from "../lib/recommendation";
import { buildWhatsAppMessage, buildWhatsAppUrl } from "../lib/whatsapp";

export default function ResultPage() {
  const navigate = useNavigate();
  const { status, hasHydrated, biodata, questions, answers, resetSession } = useQuiz();

  useEffect(() => {
    if (!hasHydrated) return;
    if (status === "idle") navigate("/", { replace: true });
    else if (status === "in-progress") navigate("/assessment", { replace: true });
  }, [hasHydrated, status, navigate]);

  if (!hasHydrated) return null;
  if (status !== "submitted") return null;

  const { correctCount, totalQuestions, percentage } = calculateScore(answers, questions);
  const level = determineLevel(percentage);
  const categoryPerformance = calculateCategoryPerformance(answers, questions);
  const recommendation = getRecommendation(level);
  const whatsappUrl = buildWhatsAppUrl(
    buildWhatsAppMessage({
      name: biodata.name,
      score: percentage,
      level,
      program: recommendation.program,
    }),
  );

  function handleRestart() {
    resetSession();
    navigate("/");
  }

  const firstName = biodata.name.trim().split(" ")[0];

  return (
    <main
      className="min-h-screen bg-background"
      style={{ backgroundImage: "none" }}
    >
      {/* Header Banner */}
      <div className="border-b border-border bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-8 text-center sm:px-6 sm:py-10">
          <span className="inline-block rounded-lg bg-primary-soft px-3 py-1 text-xs font-bold tracking-wide text-primary uppercase mb-3">
            Assessment Selesai
          </span>
          <h1 className="font-display text-2xl font-bold text-text sm:text-3xl">
            Hasil Assessment Kamu
          </h1>
          <p className="mt-2 text-sm text-text-muted">
            Terima kasih sudah menyelesaikan assessment, <strong className="text-text">{firstName}</strong>. Berikut adalah analisis hasil kemampuan frontend kamu.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex flex-col gap-6 sm:gap-8">
          {/* 1. Capability Summary */}
          <CapabilitySummary
            percentage={percentage}
            level={level}
            correctCount={correctCount}
            totalQuestions={totalQuestions}
          />

          {/* 2. Category Performance */}
          <CategoryPerformance items={categoryPerformance} />

          {/* 3. Insight */}
          <ResultInsight
            level={level}
            categoryPerformance={categoryPerformance}
          />

          {/* 4. Recommendation */}
          <RecommendationCard
            program={recommendation.program}
            level={level}
          />

          {/* 5. Learning Path (Interactive Focus) */}
          <LearningPath focus={recommendation.focus} />

          {/* 6. CTA */}
          <ResultCTA whatsappUrl={whatsappUrl} onRestart={handleRestart} />
        </div>
      </div>
    </main>
  );
}
