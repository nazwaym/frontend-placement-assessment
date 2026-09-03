# Frontend Placement Test Engine

[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38BDF8?logo=tailwind-css)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)](https://vercel.com/)

---

## 📌 Project Links

* 🔗 **GitHub Repository**: [https://github.com/nazwaym/frontend-placement-assessment](https://github.com/nazwaym/frontend-placement-assessment)
* 🚀 **Live Demo (Vercel)**: [https://frontend-placement-assessment.vercel.app](https://frontend-placement-assessment.vercel.app)

---

## 📖 Overview

**Frontend Placement Test Engine** adalah aplikasi web assessment interaktif berbasis React yang dirancang untuk mengukur tingkat kemampuan dasar *Frontend Development* calon peserta program belajar, mahasiswa, maupun pemula.

Aplikasi ini memberikan pengalaman evaluasi teknis yang profesional, tenang, dan transparan — mulai dari pendaftaran biodata, pengerjaan 15 soal terstruktur, hingga penyajian laporan analisis kemampuan yang mendalam dilengkapi rekomendasi program belajar yang dipersonalisasi.

---

## ✨ Main Features & UX Highlights

### ⚡ Assessment Workspace
* **3-Column Professional Layout (Desktop)**: Navigator soal interaktif di sebelah kiri, workspace soal utama di tengah, dan statistik pengerjaan & petunjuk di sebelah kanan.
* **Responsive Mobile Bottom Drawer**: Navigator soal pada perangkat mobile disajikan dalam bentuk *bottom sheet / drawer* yang mudah dibuka tanpa mengganggu keterbacaan soal.
* **Interactive Answer Cards**: Pilihan jawaban (A, B, C, D) dalam bentuk kartu besar dengan efek hover, keyboard focus, dan indikator *checkmark* terpilih.
* **Code Block Syntax Formatting**: Soal yang mengandung potongan kode (JavaScript/HTML/CSS) disajikan dalam container *dark-themed code block* ber-font monospace dengan dukungan *horizontal scrolling*.

### 🔒 Validation & Strict Assessment Rules
* **Free Navigation Between Questions**: User dapat berpindah soal kapan saja tanpa harus menjawab terlebih dahulu. Kelengkapan jawaban diverifikasi pada tahap review sebelum submission final.
* **Complete Submission Safeguard**: Submission final dilengkapi modal review yang menampilkan jumlah soal terjawab. Jika masih ada soal kosong, user diarahkan langsung ke soal yang belum dijawab (*Jump to Unanswered*).
* **Automatic Timeout Handling**: Apabila waktu pengerjaan (20 menit) habis, sistem secara otomatis melakukan submission berbasis jawaban yang berhasil diisi tanpa memblokir user.
* **Double-Submit Prevention**: Proteksi state untuk menjamin proses scoring dan pengiriman data hanya dieksekusi tepat satu kali.

### 📊 Comprehensive Result & Recommendation Engine
* **Animated Score Arc**: Visualisasi persentase skor akhir dengan SVG radial progress ring dan animasi *count-up*.
* **Capability Leveling**:
  * **Beginner** (0 – 40%) - Direkomendasikan untuk Program *Frontend Fundamental*
  * **Intermediate** (41 – 75%) - Direkomendasikan untuk Program *Frontend Development*
  * **Advanced** (76 – 100%) - Direkomendasikan untuk Program *Advanced Frontend Development*
* **Strength & Improvement Analysis**: Mengidentifikasi kategori terkuat (≥67%) dan kategori yang perlu ditingkatkan (<67%) secara dinamis dari hasil pengerjaan.
* **Personalized Insight & Rationale**: Penjelasan naratif mengenai makna skor akhir dan alasan pemilihan program rekomendasi.
* **WhatsApp CTA Integration**: Membuka aplikasi WhatsApp dengan pesan otomatis berisi nama, skor, level, dan program yang diminati.

### 💾 Session Persistence
* **LocalStorage Autosave**: Progress pengerjaan dan status sesi tersimpan otomatis. Jika tab tertutup atau di-refresh, user akan kembali ke sesi assessment yang sama tanpa kehilangan jawaban.

---

## 🎯 Assessment Structure & Blueprint

Setiap sesi assessment terdiri dari **15 soal fixed** yang mencakup 5 kategori utama dengan distribusi tingkat kesulitan yang proporsional:

| Kategori | Jumlah Soal | Distribusi Difficulty |
| :--- | :---: | :--- |
| **Web Fundamentals** | 2 | Easy: 7 soal |
| **HTML** | 3 | Medium: 5 soal |
| **CSS** | 3 | Hard: 3 soal |
| **JavaScript** | 4 | **Total: 15 Soal** |
| **Programming Logic** | 3 | |

---

## 🛠️ Tech Stack

* **Framework**: [React 19](https://react.dev/)
* **Build Tool**: [Vite 6](https://vitejs.dev/)
* **Routing**: [React Router v7](https://reactrouter.com/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **State Management**: React Context API (`QuizContext`) + `useReducer`
* **Icons**: Inline SVG Icons (Lucide/Heroicons standard)
* **Linting & Code Quality**: [Oxlint](https://github.com/oxc-project/oxc)
* **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Directory Structure

```text
asesments-frontend/
├── public/                  # Assets publik
├── src/
│   ├── components/
│   │   ├── landing/         # Komponen landing page (StatCounter, QuizPreview, dll)
│   │   ├── quiz/            # Komponen workspace assessment (QuestionCard, Navigator, Header, Modal)
│   │   ├── result/          # Komponen hasil (CapabilitySummary, StrengthImprovement, Insight, CTA)
│   │   └── ui/              # Reusable UI primitives (Button, Input, ProgressBar, Modal)
│   ├── context/             # QuizProvider & QuizContext (Session state, local persistence)
│   ├── data/                # Data 15 soal assessment (questions.json)
│   ├── hooks/               # Custom hooks (useQuiz, useCountUp)
│   ├── lib/                 # Logic layer (scoring, recommendation, categories, validation, whatsapp, storage)
│   ├── pages/               # Halaman utama (LandingPage, AssessmentIntroPage, QuizPage, ResultPage)
│   ├── App.jsx              # Main routing configuration
│   ├── index.css            # Design tokens & global CSS styles
│   └── main.jsx             # React entry point
├── documentation/           # Dokumentasi proyek (requirements, AI usage, blueprint)
├── index.html
├── package.json
└── vite.config.js
```

---

## 💻 Local Development Setup

### Prerequisites
* **Node.js**: `v18.0.0` atau versi lebih baru
* **npm**: `v9.0.0` atau versi lebih baru

### Step-by-Step Installation

1. **Clone repository**:
   ```bash
   git clone https://github.com/nazwaym/frontend-placement-assessment.git
   cd frontend-placement-assessment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Aplikasi dapat diakses melalui `http://localhost:5173`.

4. **Build untuk production**:
   ```bash
   npm run build
   ```

5. **Jalankan linter**:
   ```bash
   npm run lint
   ```

---

## 🤖 AI Prompt & Development Documentation

Pengembangan aplikasi ini mengikuti prinsip **Human-Centered AI Pair Programming**. Seluruh daftar prompt yang digunakan dalam pengembangan aplikasi tercatat secara lengkap pada dokumen:

📄 **[AI Usage Documentation (`documentation/AI_USAGE.md`)](documentation/AI_USAGE.md)**

* **Product Decision & Scope**: Merujuk sepenuhnya pada `PROJECT_REQUIREMENTS.md` dan `Assessment Blueprint`.
* **AI Assistance**: Digunakan untuk pembuatan boilerplate, perancangan arsitektur komponen, refactoring CSS tokens, penyusunan regex validasi, dan verifikasi accessibility.
* **Review & QA**: Seluruh logic scoring (`correctCount / 15 * 100`), kriteria level (0-40, 41-75, 76-100), dan aturan validasi diuji secara manual serta melalui automated build & lint pass.

---

## 📄 License

Project ini dibuat untuk keperluas **Frontend Placement Test Assessment / Internship Selection**. Hak cipta penuh pada pengembang.
