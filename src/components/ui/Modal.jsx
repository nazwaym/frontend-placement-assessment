export default function Modal({ open, title, children, onClose }) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
    >
      <div className="w-full max-w-md rounded-xl bg-background p-6 shadow-lg">
        <h2 id="modal-title" className="text-lg font-semibold text-text">
          {title}
        </h2>
        <div className="mt-3 text-sm text-text-muted">{children}</div>
        <button
          type="button"
          onClick={onClose}
          className="sr-only"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
