import Button from "../ui/Button";
import Modal from "../ui/Modal";

export default function SubmitModal({
  open,
  totalQuestions = 15,
  unansweredCount,
  onConfirm,
  onCancel,
  onGoToUnanswered,
}) {
  const answeredCount = totalQuestions - unansweredCount;
  const allAnswered = unansweredCount === 0;

  return (
    <Modal
      open={open}
      onClose={onCancel}
      title={allAnswered ? "Review Jawaban" : "Belum Semua Soal Dijawab"}
    >
      <div className="flex flex-col gap-4 py-1">
        {/* Status card breakdown */}
        <div className="rounded-xl border border-border bg-background p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs font-semibold text-text border-b border-border pb-2">
            <span>Total Soal</span>
            <span>{totalQuestions} Soal</span>
          </div>
          <div className="flex items-center justify-between text-xs text-green-700 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-white text-[10px] font-bold">
                ✓
              </span>
              Sudah dijawab
            </span>
            <span className="font-bold">{answeredCount}</span>
          </div>
          <div className="flex items-center justify-between text-xs text-text-muted font-medium">
            <span className="flex items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-border text-text-muted text-[10px] font-bold">
                ○
              </span>
              Belum dijawab
            </span>
            <span className="font-bold text-amber-700">{unansweredCount}</span>
          </div>
        </div>

        {/* Informative message */}
        <p className="text-sm text-text-muted leading-relaxed">
          {allAnswered
            ? "Semua 15 soal telah kamu jawab dengan lengkap. Setelah dikirim, jawaban tidak dapat diubah."
            : `Masih ada ${unansweredCount} soal yang belum dijawab. Assessment hanya dapat dikirim setelah seluruh soal terisi.`}
        </p>

        {/* Buttons */}
        <div className="mt-2 flex flex-col-reverse sm:flex-row sm:justify-end gap-2.5">
          <Button variant="secondary" onClick={onCancel}>
            Kembali ke Soal
          </Button>

          {allAnswered ? (
            <Button variant="primary" onClick={onConfirm}>
              Kirim Assessment
            </Button>
          ) : (
            <Button variant="primary" onClick={onGoToUnanswered}>
              Lihat Soal yang Belum Dijawab
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
}
