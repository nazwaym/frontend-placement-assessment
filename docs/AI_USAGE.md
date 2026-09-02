# AI Prompt Documentation — Frontend Placement Test Engine

Dokumen ini berisi catatan prompt Artificial Intelligence (AI) yang digunakan selama proses analisa, perencanaan, implementasi, dan redesign aplikasi **Frontend Placement Test Engine**, sesuai dengan ketentuan penugasan seleksi.

---

## 📋 Summary Usage

* **AI Agent Role**: Pair Programming & Code Architecture Assistant.
* **Scope of AI Assistance**:
  1. Analisis requirement PRD & Assessment Blueprint.
  2. Pembuatan komponen UI modular menggunakan React + Tailwind CSS v4.
  3. Redesign UX Assessment Workspace (3-column layout, inline validation, mobile bottom sheet).
  4. Redesign Halaman Hasil & Rekomendasi (`/result`) dengan visualisasi SVG progress ring, analisa kekuatan/kelemahan, dan generator pesan WhatsApp.
  5. Penyusunan dokumentasi `README.md` dan penanganan edge cases.

---

## 📝 Prompt Log & History

### Prompt 1: Assessment Workspace UI/UX Redesign
```text
Saya ingin melakukan redesign halaman assessment Frontend Placement Test yang sudah ada.
JANGAN mengubah logic utama aplikasi (data soal, scoring, jawaban user, navigasi soal, routing, timer, assessment state).
Fokus utama pekerjaan adalah REDESIGN UI/UX halaman assessment agar terasa seperti produk EdTech assessment profesional.
...
Struktur Desktop:
HEADER: Logo, Frontend Placement Test, Progress, Timer
LEFT SIDEBAR: Question Navigator
CENTER: Question Workspace (QuestionCard, CodeBlock, Interactive Option Cards A/B/C/D)
RIGHT: Assessment Information
BOTTOM NAVIGATION: Previous, Next / Review Jawaban
MOBILE: Single column dengan "Daftar Soal" drawer / bottom sheet.
```

### Prompt 2: Validasi & Flow Pengerjaan Soal (Inline Validation & Timeout Handling)
```text
Aku mau memperbaiki flow dan validation pada halaman assessment:
- User tidak boleh berpindah soal sebelum memilih jawaban.
- Tampilkan feedback inline: "Silakan pilih salah satu jawaban terlebih dahulu." (tanpa browser alert).
- Pengecekan 15/15 soal pada modal review sebelum submit final.
- PENGECUALIAN TIMEOUT: Jika timer 20 menit habis (00:00), otomatis submit tanpa memblokir soal kosong.
- Single source of truth untuk status jawaban (answers[questionId]).
```

### Prompt 3: Redesign Halaman Hasil & Rekomendasi (/result)
```text
Aku mau redesign halaman hasil assessment yang sekarang agar terasa seperti hasil yang personal dan profesional:
- Visualisasi score dengan SVG progress arc / ring.
- Badge Capability Level (Beginner: 0-40%, Intermediate: 41-75%, Advanced: 76-100%).
- Analisa otomatis "Kekuatan Kamu" (>=67%) dan "Yang Perlu Ditingkatkan" (<67%) berdasarkan categoryPerformance.
- Insight naratif kontekstual berdasarkan level dan skor.
- Card Rekomendasi Program beserta alasan (rationale) dan chip topik fokus.
- WhatsApp CTA otomatis dengan format pesan nama, skor, level, dan program yang diminati.
```

### Prompt 4: Flow Konfirmasi Pre-Assessment (Moment of Commitment)
```text
Tampilkan confirmation card/modal "Siap Memulai Assessment?" setelah user mengisi form biodata dengan valid:
- Timer BELUM berjalan saat modal tampil.
- Tombol "Kembali" menutup modal tanpa menghapus data form.
- Tombol "Mulai Assessment" menginisialisasi sesi, memulai timer, dan pindah ke /assessment.
- Hapus card "Informasi Ujian" dari right sidebar agar workspace 2 kolom di desktop lebih lapang.
```

---

## 🔍 Validation & Human Review
Setiap output AI telah melalui verifikasi teknis secara manual:
- All React components use standard hooks (`useState`, `useEffect`, `useReducer`, `useRef`).
- State hydration and `localStorage` persistence are verified.
- Oxlint linting and Vite production build commands run cleanly with zero errors.
