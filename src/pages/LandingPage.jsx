import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import StepIndicator from "../components/quiz/StepIndicator";
import StatCounter from "../components/landing/StatCounter";
import StartConfirmationModal from "../components/quiz/StartConfirmationModal";
import { useQuiz } from "../hooks/useQuiz";
import { validateBiodata, isBiodataValid } from "../lib/validation";

const INITIAL_FORM = { name: "", email: "", whatsapp: "", domicile: "" };

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
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  function handleChange(field) {
    return (event) => {
      const nextForm = { ...form, [field]: event.target.value };
      setForm(nextForm);
      if (touched[field]) {
        setErrors(validateBiodata(nextForm));
      }
    };
  }

  function handleBlur(field) {
    return () => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      setErrors(validateBiodata(form));
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateBiodata(form);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, whatsapp: true, domicile: true });

    if (isBiodataValid(validationErrors)) {
      setShowConfirmModal(true);
    }
  }

  function handleModalConfirm() {
    startSession(form);
    setShowConfirmModal(false);
    navigate("/assessment");
  }

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:py-14">
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
            Jawab 15 soal singkat dan dapatkan skor, level kemampuan, sampai
            rekomendasi program belajar yang benar-benar sesuai buat kamu —
            bukan sekadar tebak-tebakan.
          </p>

          <div className="mt-8 flex justify-center gap-8 sm:gap-12 lg:justify-start">
            <StatCounter target={15} label="Soal" />
            <StatCounter target={5} label="Kategori" />
            <StatCounter target={100} suffix="%" label="Gratis" />
          </div>


        </div>

        <div className="relative w-full min-w-0 lg:max-w-md lg:justify-self-end">
          <span
            className="animate-pop-in absolute -top-4 right-6 z-10 rotate-3 rounded-full bg-accent px-3 py-1 text-[11px] font-bold text-primary shadow-md"
            style={{ animationDelay: "0.5s" }}
          >
            100% Gratis, tanpa kartu kredit
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
                error={touched.name ? errors.name : undefined}
              />
              <Input
                light
                id="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                error={touched.email ? errors.email : undefined}
              />
              <Input
                light
                id="whatsapp"
                label="Nomor WhatsApp"
                value={form.whatsapp}
                onChange={handleChange("whatsapp")}
                onBlur={handleBlur("whatsapp")}
                error={touched.whatsapp ? errors.whatsapp : undefined}
              />
              <Input
                light
                id="domicile"
                label="Domisili"
                value={form.domicile}
                onChange={handleChange("domicile")}
                onBlur={handleBlur("domicile")}
                error={touched.domicile ? errors.domicile : undefined}
              />
              <Button
                type="submit"
                variant="accent"
                className="animate-pulse-ring mt-2 w-full"
              >
                Mulai Assessment →
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
  );
}
