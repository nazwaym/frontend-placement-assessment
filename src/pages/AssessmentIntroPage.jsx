import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import StepIndicator from "../components/quiz/StepIndicator";
import StartConfirmationModal from "../components/quiz/StartConfirmationModal";
import { ReadIcon, NavigateIcon, ResultIcon, ShieldIcon } from "../components/landing/icons";
import { useQuiz } from "../hooks/useQuiz";

const STEPS = [
  {
    Icon: ReadIcon,
    title: "Baca & pilih jawaban",
    description:
      "Satu soal tampil per halaman, pilihan jawabannya berbentuk kartu besar yang gampang dibaca — bukan radio button kecil.",
  },
  {
    Icon: NavigateIcon,
    title: "Navigasi sesukamu",
    description:
      "Lompat ke soal mana pun, lewati dulu yang bikin mikir lama. Jawabanmu otomatis tersimpan, aman walau browser di-refresh.",
  },
  {
    Icon: ResultIcon,
    title: "Lihat hasil & rekomendasi",
    description:
      "Skor, level kemampuan, sampai program belajar yang paling cocok buat kamu langsung muncul begitu selesai.",
  },
];

export default function AssessmentIntroPage() {
  const navigate = useNavigate();
  const { biodata, hasHydrated, startSession } = useQuiz();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    if (hasHydrated && !biodata) navigate("/", { replace: true });
  }, [hasHydrated, biodata, navigate]);

  if (!hasHydrated) return null;
  if (!biodata) return null;

  const firstName = biodata.name.trim().split(" ")[0];

  function handleModalConfirm() {
    startSession(biodata);
    setShowConfirmModal(false);
    navigate("/assessment");
  }

  return (
    <main className="min-h-screen px-4 py-10 sm:py-14">
      <div className="animate-fade-up mx-auto max-w-3xl text-center">
        <StepIndicator activeStep={1} />

        <span className="mt-6 inline-block rotate-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase shadow-sm">
          Yuk, kenalan sama alurnya
        </span>

        <h1 className="mt-5 font-display text-3xl leading-tight text-text sm:text-4xl">
          Oke, <span className="italic text-primary">{firstName}</span> — ini
          yang bakal kamu lalui
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm text-text-muted">
          Tiga langkah sederhana, sekitar 15 menit, tanpa drama. Berikut
          gambarannya sebelum kamu mulai.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {STEPS.map(({ Icon, title, description }, index) => (
            <div
              key={title}
              className="animate-pop-in relative flex flex-col items-center rounded-2xl border border-border bg-white/60 p-5 text-center transition-transform hover:-translate-y-1"
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <span className="absolute -top-3 -left-3 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-sm">
                {index + 1}
              </span>
              <Icon className="h-10 w-10 text-primary" />
              <h2 className="mt-3 text-sm font-semibold text-text">{title}</h2>
              <p className="mt-1.5 text-xs leading-relaxed text-text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-md items-start gap-3 rounded-2xl border border-border bg-primary-soft/60 p-4 text-left">
          <ShieldIcon className="h-8 w-8 shrink-0 text-primary" />
          <p className="text-xs leading-relaxed text-text">
            Progresmu tersimpan otomatis di perangkat ini. Kalau koneksi
            putus atau tab kepencet close, tinggal buka lagi dan lanjut dari
            soal terakhir.
          </p>
        </div>

        <Button
          onClick={() => setShowConfirmModal(true)}
          variant="accent"
          className="animate-pulse-ring mt-8"
        >
          Aku Siap, Mulai Soal
        </Button>
      </div>

      <StartConfirmationModal
        open={showConfirmModal}
        name={biodata.name}
        onConfirm={handleModalConfirm}
        onCancel={() => setShowConfirmModal(false)}
      />
    </main>
  );
}
