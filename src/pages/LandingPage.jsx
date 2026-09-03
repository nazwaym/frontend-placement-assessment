import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import StepIndicator from "../components/quiz/StepIndicator";
import StatCounter from "../components/landing/StatCounter";
import StartConfirmationModal from "../components/quiz/StartConfirmationModal";
import { useQuiz } from "../hooks/useQuiz";
import { validateBiodata, isBiodataValid } from "../lib/validation";
import BrandLogo from "../components/ui/BrandLogo";

const INITIAL_FORM = { name: "", email: "", whatsapp: "", targetProgram: "" };

const PROGRAM_OPTIONS = [
  { value: "frontend-fundamental", label: "Frontend Fundamental" },
  { value: "frontend-development", label: "Frontend Development" },
  { value: "advanced-frontend-development", label: "Advanced Frontend Development" }
];

function MarkerUnderline() {
  return (
    <svg
      className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full"
      viewBox="0 0 220 14"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 9 C 45 3, 90 12, 132 6 S 200 2, 218 7"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="6"
        strokeLinecap="round"
        className="marker-draw"
      />
    </svg>
  );
}

export default function LandingPage() {
  const navigate = useNavigate();
  const { startSession } = useQuiz();
  const [form, setForm] = useState(INITIAL_FORM);
  const [touched, setTouched] = useState({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  function handleChange(field) {
    return (event) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function handleBlur(field) {
    return () => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      // Error updates dynamically via validation below
    };
  }

  // Calculate errors dynamically based on current form state
  const currentErrors = validateBiodata(form);

  function handleSubmit(event) {
    event.preventDefault();
    setTouched({ name: true, email: true, whatsapp: true, targetProgram: true });

    if (isBiodataValid(currentErrors)) {
      setShowConfirmModal(true);
    }
  }

  function handleModalConfirm() {
    startSession(form);
    setShowConfirmModal(false);
    navigate("/assessment");
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="w-full mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
        <BrandLogo showSubtitle={true} />
      </header>
      <main className="flex-1 px-4 pb-12 sm:px-6 lg:pb-14">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-10">
          <div className="animate-fade-up min-w-0 pt-2 text-center lg:text-left">
            <StepIndicator activeStep={0} />

            <span className="mt-6 inline-block -rotate-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase shadow-sm">
              Frontend Placement Test · Gratis
            </span>

            <h1 className="mt-5 font-display text-3xl leading-[1.15] text-text sm:text-4xl lg:text-5xl">
              Seberapa siap kamu terjun ke dunia{" "}
              <span className="relative inline-block italic text-primary">
                frontend
                <MarkerUnderline />
              </span>
              ?
            </h1>

            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-text-muted lg:mx-0">
              Jawab 15 soal singkat, kenali level kemampuan frontend-mu, dan temukan program belajar di Scholar Today yang paling sesuai untuk langkah belajarmu berikutnya.
            </p>

            <div className="mt-8 flex justify-center gap-8 sm:gap-12 lg:justify-start">
              <StatCounter target={15} label="Soal" />
              <StatCounter target={5} label="Area Penilaian" />
              <StatCounter target={100} suffix="%" label="Gratis" />
            </div>

            <p className="mt-4 text-sm text-text-muted max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              Meliputi: HTML, CSS, JavaScript, Web Fundamentals, dan Programming Logic.
            </p>


          </div>

          <div className="relative w-full min-w-0 lg:max-w-md lg:justify-self-end">
            <span
              className="animate-pop-in absolute -top-4 right-6 z-10 rotate-3 rounded-full bg-accent px-3 py-1 text-[11px] font-bold text-primary shadow-md"
              style={{ animationDelay: "0.5s" }}
            >
              Assessment Gratis
            </span>

            <div
              className="animate-fade-up rounded-3xl bg-primary p-6 shadow-lg sm:p-8"
              style={{ animationDelay: "0.15s" }}
            >
              <h2 className="font-display text-2xl text-white">
                Isi data kamu dulu, yuk
              </h2>
              <p className="mt-1.5 text-sm text-white/70">
                Biar hasil dan rekomendasi programnya bisa langsung kami arahkan
                ke kamu.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <Input
                  light
                  id="name"
                  label="Nama"
                  value={form.name}
                  onChange={handleChange("name")}
                  onBlur={handleBlur("name")}
                  error={touched.name ? currentErrors.name : undefined}
                />
                <Input
                  light
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={touched.email ? currentErrors.email : undefined}
                />
                <Input
                  light
                  id="whatsapp"
                  label="Nomor WhatsApp"
                  value={form.whatsapp}
                  onChange={handleChange("whatsapp")}
                  onBlur={handleBlur("whatsapp")}
                  error={touched.whatsapp ? currentErrors.whatsapp : undefined}
                />
                <Select
                  light
                  id="targetProgram"
                  label="Target Program"
                  options={PROGRAM_OPTIONS}
                  value={form.targetProgram}
                  onChange={handleChange("targetProgram")}
                  onBlur={handleBlur("targetProgram")}
                  error={touched.targetProgram ? currentErrors.targetProgram : undefined}
                />

                <Button
                  type="submit"
                  variant="accent"
                  className="animate-pulse-ring mt-2 w-full"
                >
                  Mulai Assessment
                </Button>
              </form>
            </div>
          </div>
        </div>

        <StartConfirmationModal
          open={showConfirmModal}
          name={form.name}
          onConfirm={handleModalConfirm}
          onCancel={() => setShowConfirmModal(false)}
        />
      </main>
    </div>
  );
}
