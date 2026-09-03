import Button from "../ui/Button";
import Modal from "../ui/Modal";

export default function StartConfirmationModal({
  open,
  name,
  onConfirm,
  onCancel,
}) {
  const firstName = name ? name.trim().split(" ")[0] : "";

  return (
    <Modal
      open={open}
      onClose={onCancel}
      title="Siap Memulai Assessment?"
    >
      <div className="flex flex-col gap-4 py-1">
        {/* Intro copy */}
        <p className="text-sm text-text-muted leading-relaxed">
          {firstName ? `Halo ${firstName}, k` : "K"}amu akan mengerjakan 15 soal pilihan ganda untuk mengukur level kemampuan frontend kamu.
        </p>

        {/* Preparedness checklist / indicators */}
        <div className="rounded-xl border border-border bg-background p-4 flex flex-col gap-2.5">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-text">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-[11px] font-bold">
              ✓
            </span>
            <span>15 Soal Pilihan Ganda</span>
          </div>

          <div className="flex items-center gap-2.5 text-xs font-semibold text-text">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-[11px] font-bold">
              ⏱
            </span>
            <span>Waktu Pengerjaan 20 Menit</span>
          </div>

          <div className="flex items-center gap-2.5 text-xs font-semibold text-text">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-[11px] font-bold">
              📝
            </span>
            <span>Jawaban Tersimpan Otomatis</span>
          </div>
        </div>

        {/* Warning banner */}
        <div className="flex items-start gap-2.5 rounded-xl bg-amber-50/80 border border-amber-200/80 p-3 text-xs text-amber-900 leading-relaxed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 shrink-0 text-amber-600 mt-0.5"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            Timer pengerjaan akan mulai berjalan setelah kamu menekan <strong>Mulai Assessment</strong>.
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-2 flex flex-col-reverse sm:flex-row sm:justify-end gap-2.5">
          <Button variant="secondary" onClick={onCancel}>
            Kembali
          </Button>
          <Button variant="accent" onClick={onConfirm} className="gap-2">
            <span>Mulai Assessment</span>

          </Button>
        </div>
      </div>
    </Modal>
  );
}
