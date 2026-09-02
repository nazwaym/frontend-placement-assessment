# AI Prompt Documentation - Frontend Placement Test Engine

Dokumen ini berisi catatan prompt Artificial Intelligence (AI) yang digunakan selama proses analisa, perencanaan, implementasi, dan redesign aplikasi **Frontend Placement Test Engine**, sesuai dengan ketentuan penugasan seleksi.

---

## 📋 Summary Usage

* **AI Agent Role**: Development Assistant & Pair Programming Support
* **Scope of AI Assistance**:
  - Membantu menganalisis requirement berdasarkan konsep dan blueprint yang telah dibuat.
  - Membantu melakukan review assessment structure dan question mapping.
  - Membantu menerjemahkan requirement ke struktur project React yang modular.
  - Membantu implementasi dan refinement fitur assessment.
  - Membantu mengeksplorasi alternatif UI/UX berdasarkan design direction yang telah ditentukan.
  - Membantu refinement responsive behavior, validation, dan edge cases.
  - Membantu pengecekan teknis dan dokumentasi project.

---

## 🏗️ AI Usage & Development Process

### 1. Initial Product Idea
**Tujuan**
Sebelum menggunakan AI, saya sudah menentukan konsep dasar Frontend Placement Test.
Soal, aturan soal, kategori, competency, difficulty, bobot, dan struktur assessment sudah saya susun dalam file `Question_Rules_Assessment_Blueprint`.
AI digunakan untuk membantu mengembangkan konsep yang sudah ada menjadi product thinking, user flow, assessment experience, result experience, dan requirement sebelum coding.

**Prompt yang Digunakan**
> Aku sudah menentukan konsep dasar frontend assessment untuk mengetahui kemampuan peserta di bidang frontend development. Peserta akan mengerjakan beberapa soal yang mencakup kemampuan seperti HTML, CSS, JavaScript, Web Fundamentals, dan Programming Logic.
> 
> Soal dan struktur assessment sudah aku susun sebelumnya dalam file Question_Rules_Assessment_Blueprint, termasuk aturan dan blueprint yang menjadi dasar assessment.
> 
> Aku ingin hasil assessment nantinya tidak hanya menampilkan nilai, tetapi juga menunjukkan performa peserta di setiap kategori dan memberikan rekomendasi program berdasarkan hasil tersebut.
> 
> Berdasarkan konsep dan blueprint yang sudah aku buat, bantu aku mengembangkan produk ini dari sisi product thinking, user flow, assessment experience, result experience, serta hal-hal yang perlu diperhatikan sebelum masuk ke tahap coding.
> 
> Jangan membuat ulang soal atau mengubah blueprint yang sudah ada. Gunakan file tersebut sebagai acuan utama.

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
**Tujuan**
Blueprint sudah dibuat dalam file `Question_Rules_Assessment_Blueprint`. AI digunakan untuk membantu melakukan review terhadap kategori, competency, difficulty, bobot, dan tujuan pengukuran.

**Prompt yang Digunakan**
> Aku sudah membuat blueprint assessment dalam file Question_Rules_Assessment_Blueprint. Bantu aku melakukan review terhadap struktur yang sudah dibuat, terutama hubungan antara kategori, competency, difficulty, bobot, dan tujuan pengukuran. Pastikan struktur tersebut konsisten dengan tujuan Frontend Placement Test dan jangan mengubah blueprint tanpa alasan yang jelas.

**Hasil**
Blueprint yang direview digunakan sebagai dasar penyusunan 15 soal dan menjadi penghubung antara `question → competency → scoring → recommendation`.

### 5. Question Mapping & Validation
**Tujuan**
Mapping dilakukan berdasarkan blueprint yang sudah dibuat. AI berperan sebagai reviewer untuk membantu memastikan setiap soal sesuai dengan kategori, competency, difficulty, bobot, dan tujuan pengukurannya.

**Prompt yang Digunakan**
> Aku sudah menentukan struktur assessment-nya. Bantu aku mapping setiap soal ke kategori, competency, difficulty, dan bobotnya. Setelah itu review apakah setiap soal benar-benar sesuai dengan kemampuan yang ingin diukur dan apakah tingkat kesulitannya sudah masuk akal.

**Hasil**
Setiap pertanyaan memiliki mapping yang divalidasi dengan jelas sehingga hasil assessment nantinya dapat dianalisis berdasarkan kategori, bukan hanya berdasarkan jumlah jawaban benar.

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

### 8. Implementation & Architecture

**Tujuan**
Setelah `PROJECT_REQUIREMENTS.md` dan `AGENTS.md` selesai sebagai source of truth, AI digunakan untuk menerjemahkan requirement tersebut menjadi struktur project React yang modular, reusable, dan mudah dikembangkan, sebelum masuk ke detail implementasi tiap fitur.

**Prompt yang Digunakan**
> sekarang kita lanjut untuk membikin struktur file yg bisa mudah dipahami dan terstruktur. lalu menginstall apa yg harus di install dengan sesuai ketentuan pada prd dam agents. menggunakan dengan penggunaan ract vite dengan ketentuan dan persyaratan teknisnya.

**Hasil / Keputusan**
- Struktur folder dipisah berdasarkan tanggung jawab: `src/pages` (halaman/route), `src/components/{ui,quiz,result}` (komponen reusable per domain), `src/context` + `src/hooks` (state management), `src/lib` (pure function: scoring, level, rekomendasi, randomisasi, storage, validasi, WhatsApp message), `src/data` (question bank JSON).
- Dependency dipasang sesuai batasan `AGENTS.md`: React + Vite + Tailwind CSS v4 (lewat plugin resmi, tanpa config PostCSS manual) + React Router untuk routing antar halaman — tanpa Next.js dan tanpa component library pihak ketiga.
- State assessment (`QuizContext` + `useQuiz`) dipisahkan dari komponen presentasional, supaya logic scoring dan navigasi tidak bercampur dengan tampilan.
- Logic scoring, penentuan level, dan rekomendasi ditulis sebagai pure function di `src/lib` (bukan langsung di dalam komponen React), supaya tidak ada logic yang terduplikasi antar halaman.

---

### 9. Assessment State & User Experience

**Tujuan**
Menyempurnakan pengalaman inti saat mengerjakan soal: bagaimana jawaban disimpan, bagaimana user berpindah antar soal, dan bagaimana sistem menangani validasi kelengkapan jawaban serta batas waktu pengerjaan.

**Prompt yang Digunakan**
> Aku mau memperbaiki flow dan validation pada halaman assessment:
> - User tidak boleh berpindah soal sebelum memilih jawaban.
> - Tampilkan feedback inline: "Silakan pilih salah satu jawaban terlebih dahulu." (tanpa browser alert).
> - Pengecekan 15/15 soal pada modal review sebelum submit final.
> - PENGECUALIAN TIMEOUT: Jika timer 20 menit habis (00:00), otomatis submit tanpa memblokir soal kosong.
> - Single source of truth untuk status jawaban (answers[questionId]).

**Hasil / Keputusan**
- Jawaban tersimpan langsung ke satu sumber state (`answers[questionId]` di `QuizContext`) setiap kali opsi dipilih, dan otomatis dipersist ke `localStorage` — berpindah soal atau refresh browser tidak menghilangkan jawaban yang sudah dipilih.
- Status "sudah dijawab / belum dijawab / soal aktif" di Question Navigator diturunkan langsung dari keberadaan jawaban di state — bukan flag terpisah, supaya tidak ada risiko status yang tidak sinkron dengan jawaban sebenarnya.

**Catatan Iterasi**
Setelah ditinjau kembali dari sisi user experience, keputusan "User tidak boleh berpindah soal sebelum memilih jawaban" diubah menjadi navigasi bebas. User akhirnya dapat berpindah antar-soal tanpa harus menjawab terlebih dahulu, sedangkan validasi kelengkapan 15 soal dilakukan pada tahap review sebelum submit. Timeout tetap menjadi pengecualian dan akan melakukan auto-submit meskipun terdapat soal yang belum dijawab.

---

### 10. Result & Recommendation UX

**Tujuan**
Memastikan halaman hasil tidak hanya menampilkan angka, tapi memiliki hierarki informasi yang jelas: hasil → performa kategori → insight → rekomendasi → next action, mengikuti prinsip "Result → Meaning → Evidence → Recommendation → Next Action" yang sudah ditentukan pada tahap Product Thinking (bagian 3).

**Prompt yang Digunakan**
> Aku mau redesign halaman hasil assessment yang sekarang agar terasa seperti hasil yang personal dan profesional:
> - Visualisasi score dengan SVG progress arc / ring.
> - Badge Capability Level (Beginner: 0-40%, Intermediate: 41-75%, Advanced: 76-100%).
> - Analisa otomatis "Kekuatan Kamu" (>=67%) dan "Yang Perlu Ditingkatkan" (<67%) berdasarkan categoryPerformance.
> - Insight naratif kontekstual berdasarkan level dan skor.
> - Card Rekomendasi Program beserta alasan (rationale) dan chip topik fokus.
> - WhatsApp CTA otomatis dengan format pesan nama, skor, level, dan program yang diminati.

**Hasil / Keputusan**
- Halaman `/result` disusun sebagai rangkaian komponen yang mengikuti hierarki tersebut secara berurutan: `CapabilitySummary` (skor & level) → `CategoryPerformance` (breakdown per kategori dengan bar indicator) → `ResultInsight` (kekuatan/area yang perlu ditingkatkan) → `RecommendationCard` (program + alasan) → `LearningPath` (fokus belajar) → `ResultCTA` (WhatsApp).
- Threshold Capability Level (0–40 Beginner, 41–75 Intermediate, 76–100 Advanced) dan pemetaan rekomendasi tetap mengacu ke `PROJECT_REQUIREMENTS.md` §18 dan §20 — redesign ini murni pada sisi presentasi, bukan mengubah logic penentuan level atau rekomendasi.

**Catatan Iterasi**
Setelah review terhadap result page, section “Kekuatan Kamu” dan “Yang Perlu Ditingkatkan” (dari prompt di atas) tidak digunakan pada versi final karena informasinya terlalu berulang dengan Category Performance dan Result Insight. Keputusan tersebut merupakan refinement berdasarkan evaluasi desain dan hierarchy informasi.

---

### 11. Edge Case & Validation

**Tujuan**
Memastikan titik-titik rawan pada flow assessment (soal belum lengkap, submit ganda, timeout, akses ulang setelah selesai) ditangani secara eksplisit, bukan dibiarkan sebagai default behavior yang tidak terduga.

**Prompt yang Digunakan**
> Tampilkan confirmation card/modal "Siap Memulai Assessment?" setelah user mengisi form biodata dengan valid:
> - Timer BELUM berjalan saat modal tampil.
> - Tombol "Kembali" menutup modal tanpa menghapus data form.
> - Tombol "Mulai Assessment" menginisialisasi sesi, memulai timer, dan pindah ke /assessment.
> - Hapus card "Informasi Ujian" dari right sidebar agar workspace 2 kolom di desktop lebih lapang.

**Hasil / Keputusan**
- Sesi assessment (dan timer) baru benar-benar mulai setelah user secara eksplisit mengonfirmasi di modal "Siap Memulai Assessment?" — mencegah timer berjalan diam-diam saat user masih membaca halaman pengenalan.
- Submit dilindungi dari double-submit menggunakan ref guard (`hasSubmittedRef`) di `QuizPage`: baik submit manual dari modal review maupun auto-submit saat timeout hanya bisa terpicu satu kali per sesi.
- Assessment yang sudah di-submit terkunci dari sisi routing: mencoba mengakses `/assessment` lagi setelah status menjadi `submitted` otomatis diarahkan ke `/result`, dan sebaliknya mengakses `/result` sebelum submit diarahkan kembali ke `/assessment` — status sesi di `QuizContext` menjadi satu-satunya sumber kebenaran untuk keputusan redirect ini.
- Soal yang belum dijawab saat submit ditangani lewat modal review: menampilkan jumlah soal terjawab/belum, dan menyediakan navigasi langsung ke soal pertama yang belum dijawab sebagai bantuan.
- Timeout (20 menit habis) memicu auto-submit meskipun masih ada soal kosong, melewati pengecekan kelengkapan — konsisten dengan keputusan bahwa sesi tidak boleh menggantung tanpa hasil akhir.
- Jawaban yang sudah dipilih tetap tersimpan saat user berpindah soal maupun saat browser di-refresh, karena disimpan ke `localStorage` setiap kali state berubah (bukan hanya saat submit).

---

### 12. UI/UX Design & Refinement

#### 12.1 Design Direction
**Sebelum masuk ke tahap implementasi UI**, arah desain ditentukan berdasarkan kebutuhan produk sebagai Frontend Placement Test, dengan mempertimbangkan karakteristik produk assessment/EdTech.
Referensi visual digunakan untuk membantu menentukan mood, warna, dan feel yang ingin dicapai. Salah satu referensi yang digunakan adalah Scholarstoday, terutama sebagai inspirasi visual, tetapi desain akhir dikembangkan dengan identitas dan kebutuhan project sendiri.

**Prompt yang Digunakan — Menentukan Arah Desain**
> Aku ingin membuat UI/UX untuk Frontend Placement Test yang terasa seperti produk assessment/EdTech modern. Aku ingin menggunakan Scholarstoday sebagai salah satu referensi visual, terutama dari sisi color palette dan feel, tetapi tidak ingin menyalin desainnya secara langsung. Aku ingin desainnya tetap punya identitas sendiri, lebih interaktif, responsive, dan tidak terlihat seperti template AI. Tolong bantu kembangkan konsep desain berdasarkan arahan tersebut.

**Hasil**
AI digunakan untuk membantu mengeksplorasi kemungkinan layout, visual hierarchy, komponen, dan interaction pattern berdasarkan arahan desain yang telah ditentukan. Keputusan mengenai konsep visual, referensi, dan karakter desain tetap disesuaikan dengan kebutuhan project.

#### 12.2 Landing Page Design
Setelah arah visual ditentukan, desain landing page dikembangkan agar tidak hanya berfungsi sebagai halaman pembuka, tetapi juga memberikan gambaran kepada user mengenai assessment yang akan dilakukan.

Beberapa hal yang menjadi perhatian:
- Introduction yang lebih informatif dan engaging.
- Penjelasan singkat mengenai assessment.
- Informasi jumlah soal dan jenis kompetensi yang diukur.
- CTA yang jelas untuk melanjutkan ke tahap berikutnya.
- Responsive layout untuk desktop, tablet, dan mobile.
- Penggunaan visual element dan micro-interaction secara seperlunya.

**Prompt yang Digunakan — Landing Page**
> Aku ingin redesign halaman awal Frontend Placement Test. Gunakan arahan desain yang sudah ditentukan sebelumnya sebagai acuan. Halaman awal jangan hanya menampilkan judul dan deskripsi, tetapi berikan introduction yang lebih menarik dan membantu user memahami assessment sebelum memulai. Buat layout yang responsive untuk desktop, tablet, dan mobile serta tambahkan elemen interaktif yang tetap sesuai dengan karakter produk.

**Hasil**
Landing page dikembangkan dengan struktur yang lebih komunikatif, seperti introduction, informasi assessment, preview konten, dan CTA. Beberapa elemen visual dan interaction ditambahkan untuk membuat halaman lebih hidup tanpa mengganggu tujuan utama halaman.

#### 12.3 Assessment Workspace Design
Untuk halaman assessment, fokus desain diarahkan pada kemudahan membaca soal, menjawab, berpindah soal, dan mengetahui progress assessment.

Struktur workspace yang digunakan meliputi:
- Header dengan informasi assessment, progress, dan timer.
- Question navigator.
- Question workspace.
- Code block untuk soal yang membutuhkan potongan kode.
- Interactive answer options.
- Navigation antar-soal.
- Responsive behavior untuk perangkat mobile.

**Prompt yang Digunakan — Assessment Workspace**
> Saya ingin melakukan redesign halaman assessment Frontend Placement Test yang sudah ada. Jangan mengubah logic utama aplikasi seperti data soal, scoring, jawaban user, navigasi soal, routing, timer, dan assessment state. Fokus utama pekerjaan adalah memperbaiki UI/UX agar workspace assessment lebih nyaman digunakan dan terasa seperti produk assessment yang profesional. Perhatikan hierarchy informasi, question navigator, question card, answer options, progress, timer, dan responsive behavior pada mobile.

**Hasil**
AI membantu menerjemahkan kebutuhan tersebut ke dalam struktur komponen React dan styling Tailwind yang modular. Fokus utama refinement adalah readability, spacing, hierarchy, status soal, dan kemudahan navigasi.

#### 12.4 Iterasi Desain Berdasarkan Hasil Tampilan
Setelah implementasi awal selesai, hasil tampilan diperiksa kembali melalui browser. Evaluasi dilakukan berdasarkan tampilan aktual, terutama pada hierarchy, spacing, responsiveness, dan pengalaman interaksi.

**Prompt yang Digunakan — Iterasi Desain**
> Aku sudah melihat hasil desain yang dibuat dan ingin melakukan beberapa refinement supaya tampilannya lebih memiliki karakter yang sesuai dengan konsep Frontend Placement Test. Tolong evaluasi kembali hierarchy, spacing, interaksi, dan elemen visualnya.
> 
> Aku ingin desainnya terasa lebih natural, engaging, dan tidak terlalu generik. Jika memang sesuai dengan konteks halaman, tambahkan animasi dan micro-interaction yang membantu user memahami alur dan membuat pengalaman assessment lebih menarik, terutama pada bagian introduction dan elemen yang dapat berinteraksi.

**Hasil**
Refinement dilakukan terhadap beberapa aspek visual dan interaction, termasuk:
- Spacing dan visual hierarchy.
- Struktur introduction.
- CTA dan interactive elements.
- Micro-interaction.
- Animasi yang mendukung perpindahan atau feedback user.
- Responsive behavior.
- Konsistensi antar halaman.
Animasi tidak ditambahkan hanya sebagai dekorasi, tetapi dipertimbangkan berdasarkan konteks interaksi agar tetap mendukung usability.

#### 12.5 Result Page & Recommendation UX
Pada halaman hasil, desain diarahkan agar hasil assessment tidak berhenti pada angka atau score. Informasi disusun berdasarkan alur:
`Result → Meaning → Evidence → Recommendation → Next Action`

Struktur utama hasil meliputi:
- Capability Level dan score.
- Performa berdasarkan kategori.
- Insight berdasarkan hasil assessment.
- Program yang direkomendasikan.
- Focus learning.
- Learning path atau langkah selanjutnya.
- CTA untuk melanjutkan ke tahap berikutnya.

Pada tahap refinement, bagian “Kekuatan Kamu” dan “Yang Perlu Ditingkatkan” tidak dipertahankan sebagai section terpisah karena informasi tersebut sudah tercakup dalam category performance dan insight. Hal ini dilakukan untuk mengurangi pengulangan informasi pada halaman hasil.

**Prompt yang Digunakan — Result & Recommendation**
> Aku mau redesign halaman hasil assessment yang sekarang agar terasa seperti hasil yang personal dan profesional. Hasil jangan hanya menampilkan score, tetapi bantu user memahami capability level, performa setiap kategori, insight dari hasil assessment, serta rekomendasi program yang sesuai. Buat recommendation area lebih personal dan actionable, misalnya dengan focus learning, learning path, dan langkah selanjutnya. Perhatikan hierarchy informasi dan jangan membuat section yang informasinya terlalu berulang.

**Hasil**
Halaman result dikembangkan menjadi lebih informatif dan actionable. User tidak hanya mengetahui nilai akhirnya, tetapi juga mendapatkan gambaran mengenai kemampuan yang diukur dan rekomendasi langkah berikutnya.

#### 12.6 Peran AI dalam Proses UI/UX
AI tidak digunakan sebagai satu-satunya sumber keputusan desain. Arah visual dan kebutuhan UX ditentukan berdasarkan konsep produk, kebutuhan assessment, referensi visual, serta hasil evaluasi tampilan secara langsung.

AI digunakan terutama untuk:
- Mengeksplorasi alternatif layout dan interaction.
- Membantu menerjemahkan ide UI/UX ke komponen React.
- Membantu implementasi styling menggunakan Tailwind CSS.
- Memberikan alternatif responsive behavior.
- Membantu melakukan refinement setelah hasil implementasi diperiksa.
- Membantu menemukan kemungkinan masalah pada hierarchy, spacing, dan usability.

Dengan demikian, proses UI/UX bersifat iteratif, yaitu:
`Product Need → Design Direction → Initial Implementation → Browser Review → Refinement → Final UI/UX`

Keputusan akhir tetap disesuaikan dengan kebutuhan dan karakteristik Frontend Placement Test, bukan semata-mata mengikuti output AI.

---

## 🔍 Validation & Human Review
Setiap output AI telah melalui verifikasi teknis secara manual, bukan diterima mentah-mentah:
- Semua komponen React menggunakan hook standar (`useState`, `useEffect`, `useReducer`, `useRef`) tanpa dependency tambahan di luar ketentuan `AGENTS.md`.
- State hydration dan persistensi `localStorage` (termasuk skenario refresh di tengah pengerjaan) diverifikasi langsung di browser, bukan hanya dibaca dari kode.
- Formula scoring, threshold capability level, dan pemetaan rekomendasi dicek ulang terhadap `PROJECT_REQUIREMENTS.md` agar implementasi tidak diam-diam menyimpang dari keputusan yang sudah disepakati.
- Perilaku edge case (double-submit, akses `/assessment` setelah submit, akses `/result` sebelum submit, layout responsive di beberapa breakpoint) diuji ulang secara manual di browser setelah setiap perubahan, bukan diasumsikan benar dari kode saja.
- Oxlint linting dan Vite production build dijalankan sampai bersih tanpa error setelah setiap perubahan signifikan.
