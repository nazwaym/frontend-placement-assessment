import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import QuestionCard from "../components/quiz/QuestionCard";
import QuestionNavigator from "../components/quiz/QuestionNavigator";
import AssessmentHeader from "../components/quiz/AssessmentHeader";
import SubmitModal from "../components/quiz/SubmitModal";
import { useQuiz } from "../hooks/useQuiz";

export default function QuizPage() {
  const navigate = useNavigate();
  const {
    status,
    hasHydrated,
    questions,
    questionIds,
    currentIndex,
    answers,
    selectAnswer,
    goToQuestion,
    submit,
  } = useQuiz();

  const [modalOpen, setModalOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [validationError, setValidationError] = useState(null);
  const hasSubmittedRef = useRef(false);

  useEffect(() => {
    if (!hasHydrated) return;
    if (status === "idle") navigate("/", { replace: true });
    else if (status === "submitted") navigate("/result", { replace: true });
  }, [hasHydrated, status, navigate]);

  if (!hasHydrated) return null;
  if (status !== "in-progress") return null;

  const questionId = questionIds[currentIndex];
  const question = questions.find((item) => item.id === questionId);
  const answeredCount = questionIds.filter((id) => answers[id] !== undefined).length;
  const unansweredCount = questionIds.length - answeredCount;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === questionIds.length - 1;

  function handleSelectOption(optionIndex) {
    setValidationError(null);
    selectAnswer(questionId, optionIndex);
  }

  function handleNavigate(index) {
    setValidationError(null);
    goToQuestion(index);
  }

  function handleNext() {
    setValidationError(null);
    goToQuestion(currentIndex + 1);
  }

  function handlePrev() {
    setValidationError(null);
    goToQuestion(currentIndex - 1);
  }

  function handleGoToUnanswered() {
    setModalOpen(false);
    const firstUnansweredIndex = questionIds.findIndex(
      (id) => answers[id] === undefined
    );
    if (firstUnansweredIndex !== -1) {
      handleNavigate(firstUnansweredIndex);
    }
  }

  function handleConfirmSubmit() {
    if (hasSubmittedRef.current) return;
    hasSubmittedRef.current = true;
    submit();
    navigate("/result", { replace: true });
  }

  function handleTimeout() {
    if (hasSubmittedRef.current) return;
    hasSubmittedRef.current = true;
    submit();
    navigate("/result", { replace: true });
  }

  return (
    <div className="min-h-screen bg-background text-text flex flex-col">
      {/* Top Fixed Header with Timer */}
      <AssessmentHeader
        currentIndex={currentIndex}
        totalQuestions={questionIds.length}
        answeredCount={answeredCount}
        onOpenMobileDrawer={() => setMobileDrawerOpen(true)}
        onTimeout={handleTimeout}
      />

      {/* Main Assessment Workspace */}
      <main className="mx-auto flex w-full max-w-7xl flex-1 items-start gap-6 px-4 py-6 sm:px-6 lg:py-8">
        {/* Left Column: Question Navigator (Desktop Sidebar) & Mobile Drawer */}
        <QuestionNavigator
          questionIds={questionIds}
          currentIndex={currentIndex}
          answers={answers}
          onNavigate={handleNavigate}
          isMobileDrawerOpen={mobileDrawerOpen}
          onCloseMobileDrawer={() => setMobileDrawerOpen(false)}
        />

        {/* Center Column: Question Workspace (Dominant) */}
        <div className="flex flex-1 flex-col gap-6 min-w-0">
          {question && (
            <QuestionCard
              question={question}
              selectedAnswer={answers[questionId]}
              onSelectAnswer={handleSelectOption}
              validationError={validationError}
            />
          )}

          {/* Bottom Action Navigation */}
          <div className="flex items-center justify-between gap-4 rounded-3xl border border-border bg-surface p-4 shadow-sm sm:px-8 mt-4">
            <Button
              variant="secondary"
              disabled={isFirst}
              onClick={handlePrev}
            >
              Sebelumnya
            </Button>

            {isLast ? (
              <Button
                variant="primary"
                onClick={() => {
                  setValidationError(null);
                  setModalOpen(true);
                }}
              >
                Selesai Assessment
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={handleNext}
              >
                Selanjutnya
              </Button>
            )}
          </div>
        </div>
      </main>

      {/* Accidental Submission Prevention / Review Modal */}
      <SubmitModal
        open={modalOpen}
        totalQuestions={questionIds.length}
        unansweredCount={unansweredCount}
        onConfirm={handleConfirmSubmit}
        onCancel={() => setModalOpen(false)}
        onGoToUnanswered={handleGoToUnanswered}
      />
    </div>
  );
}
