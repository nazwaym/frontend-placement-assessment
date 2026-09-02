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

## 🏗️ AI Usage & Development Process

### 1. Initial Product Idea
**Tujuan**
Sebelum menggunakan AI, konsep dasar aplikasi sudah ditentukan sebagai Frontend Assessment yang digunakan untuk mengetahui kemampuan dasar peserta pada beberapa kompetensi frontend.
Konsep awal yang ingin dibangun adalah assessment yang tidak hanya memberikan nilai akhir, tetapi juga dapat menunjukkan kemampuan peserta berdasarkan kategori dan memberikan rekomendasi program yang sesuai dengan hasil assessment.
AI kemudian digunakan untuk membantu mengembangkan ide tersebut menjadi requirement dan flow yang lebih terstruktur.

**Prompt yang Digunakan**
> Aku ingin membuat sebuah frontend assessment untuk mengetahui kemampuan peserta di bidang frontend development. Konsep dasarnya adalah peserta mengerjakan beberapa soal yang mencakup kemampuan seperti HTML, CSS, JavaScript, Web Fundamentals, dan Programming Logic.
> 
> Aku ingin hasil assessment nantinya tidak hanya menampilkan nilai, tetapi juga menunjukkan performa peserta di setiap kategori dan memberikan rekomendasi program berdasarkan hasil tersebut.
> 
> Bantu aku mengembangkan konsep ini dari sisi product thinking, user flow, assessment structure, dan hal-hal yang perlu diperhatikan sebelum masuk ke tahap coding.

**Hasil**
Konsep awal tersebut kemudian dikembangkan menjadi assessment dengan alur:
`Biodata → Persiapan Assessment → Pengerjaan Soal → Hasil Assessment → Insight → Rekomendasi Program`

### 2. Requirement Analysis
**Prompt yang Digunakan**
> Dari konsep frontend assessment yang sudah aku tentukan, bantu aku breakdown requirement-nya menjadi fitur-fitur yang dibutuhkan.
> Pisahkan requirement utama, behavior assessment, kebutuhan hasil assessment, dan kebutuhan UI/UX. Aku ingin hasilnya bisa digunakan sebagai dasar sebelum mulai implementasi.

**Hasil**
Requirement kemudian dikelompokkan menjadi beberapa bagian:
- Landing dan biodata peserta
- Assessment 15 soal
- Navigasi soal
- Timer
- Penyimpanan jawaban
- Scoring
- Capability level
- Performa per kategori
- Insight peserta
- Program recommendation
- Responsive interface
- Validation dan edge case

### 3. Product Thinking
**Prompt yang Digunakan**
> Aku sudah punya konsep frontend assessment-nya. Sekarang bantu aku melihatnya dari sisi product thinking. Apa tujuan utama produk ini untuk peserta, informasi apa yang sebenarnya mereka butuhkan setelah assessment, dan bagaimana hasil assessment bisa dibuat lebih berguna daripada hanya menampilkan score.

**Hasil**
Dari proses tersebut, assessment diarahkan agar hasil akhirnya memiliki alur:
`Result → Meaning → Evidence → Recommendation → Next Action`
Artinya peserta tidak hanya mengetahui nilainya, tetapi juga memahami kemampuan yang terlihat dari hasil assessment dan mengetahui langkah berikutnya.

### 4. Assessment Blueprint
**Prompt yang Digunakan**
> Aku ingin assessment ini terdiri dari 15 soal. Bantu aku membuat blueprint berdasarkan kompetensi frontend yang ingin diukur. Setiap soal perlu memiliki kategori, competency, difficulty, bobot, dan tujuan pengukuran supaya soal yang dibuat tidak random.

**Hasil**
Blueprint digunakan sebagai dasar penyusunan 15 soal dan menjadi penghubung antara `question → competency → scoring → recommendation`.

### 5. Question Mapping & Validation
**Prompt yang Digunakan**
> Aku sudah menentukan struktur assessment-nya. Bantu aku mapping setiap soal ke kategori, competency, difficulty, dan bobotnya. Setelah itu review apakah setiap soal benar-benar sesuai dengan kemampuan yang ingin diukur dan apakah tingkat kesulitannya sudah masuk akal.

**Hasil**
Setiap pertanyaan memiliki mapping yang jelas sehingga hasil assessment nantinya dapat dianalisis berdasarkan kategori, bukan hanya berdasarkan jumlah jawaban benar.

### 6. Scoring & Assessment Logic
**Prompt yang Digunakan**
> Untuk scoring, aku ingin tingkat kesulitan soal ikut memengaruhi nilai. Gunakan Easy = 1, Medium = 2, dan Hard = 3. Bantu aku menentukan cara menghitung score, maximum score, persentase, capability level, dan performa kategori berdasarkan struktur assessment yang sudah dibuat.

**Hasil**
Sistem menggunakan weighted scoring:
- Easy = 1 
- Medium = 2 
- Hard = 3
Persentase dihitung berdasarkan score yang diperoleh dibandingkan dengan maximum score berbobot.

### 7. Project Requirements
**Tujuan**
Setelah konsep, requirement, assessment structure, dan scoring sudah jelas, hasil diskusi kemudian dituangkan ke dalam `PROJECT_REQUIREMENTS.md` sebagai salah satu source of truth project.

**Prompt yang Digunakan**
> Dari konsep frontend assessment dan requirement yang sudah kita bahas, bantu susun PROJECT_REQUIREMENTS.md yang berisi requirement utama project, assessment flow, fitur, behavior, scoring, result, recommendation, dan batasan implementasi.
> Dokumentasi ini akan digunakan sebagai acuan saat masuk ke tahap development, jadi jangan menambahkan fitur yang tidak dibutuhkan. Pastikan requirement yang ditulis konsisten dengan konsep assessment yang sudah ditentukan.

**Hasil**
`PROJECT_REQUIREMENTS.md` digunakan sebagai acuan sebelum masuk ke implementasi sehingga development berikutnya memiliki dasar yang jelas dan tidak berkembang keluar dari scope awal project.

---

## 📝 Prompt Log & History (Implementation & UI/UX)

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
