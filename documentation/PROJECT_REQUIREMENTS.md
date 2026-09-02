# Product Requirements Document

# Frontend Placement Test Engine

**Version:** 1.0
**Status:** Development Reference
**Language:** Bahasa Indonesia
**Product Type:** Frontend Assessment Web Application

---

## 1. Product Overview

Frontend Placement Test Engine adalah aplikasi web untuk membantu calon peserta program frontend mengetahui tingkat kemampuan mereka melalui assessment pilihan ganda.

Aplikasi memberikan hasil berupa:

* skor keseluruhan,
* capability level,
* performa berdasarkan kategori,
* rekomendasi program,
* dan CTA WhatsApp dengan pesan otomatis.

Produk menggunakan pendekatan assessment yang interaktif, sederhana, dan human-centered.

---

## 2. Product Goal

Produk memiliki empat tujuan:

1. Mengukur kemampuan dasar frontend user.
2. Mengidentifikasi capability level user.
3. Memberikan insight mengenai area kemampuan user.
4. Mengarahkan user kepada program belajar yang sesuai.

---

## 3. Target User

Target utama adalah calon peserta program belajar frontend.

Termasuk:

* mahasiswa,
* fresh graduate,
* pemula frontend,
* career switcher,
* developer yang ingin mengetahui level frontend mereka.

User tidak diasumsikan memiliki tingkat kemampuan yang sama.

---

## 4. Core User Journey

```text
Landing
↓
Biodata
↓
Assessment Introduction
↓
Generate Assessment Session
↓
Quiz
↓
Submit Confirmation
↓
Scoring
↓
Level Calculation
↓
Category Analysis
↓
Recommendation
↓
Result
↓
WhatsApp CTA
```

---

## 5. Assessment Structure

Setiap assessment session terdiri dari 15 soal.

Distribution:

| Category          | Questions |
| ----------------- | --------: |
| Web Fundamentals  |         2 |
| HTML              |         3 |
| CSS               |         3 |
| JavaScript        |         4 |
| Programming Logic |         3 |
| Total             |        15 |

---

## 6. Difficulty Distribution

Setiap assessment harus mempertahankan distribusi:

| Difficulty | Questions |
| ---------- | --------: |
| Easy       |         7 |
| Medium     |         5 |
| Hard       |         3 |
| Total      |        15 |

Randomization tidak boleh mengubah distribusi tersebut.

---

## 7. Question Source

Scope final **tidak menggunakan question bank**. Assessment memakai persis 15 soal final yang sudah dikunci di `Question_Rules_Assessment_Blueprint_Frontend_Placement_Test`, dengan distribusi kategori dan difficulty tetap seperti pada Section 5 dan 6.

Ekspansi ke question bank yang lebih besar (mis. 40 soal dengan sampling per kategori/difficulty) adalah potential future work di luar scope assessment ini, dan **tidak** menjadi bagian dari implementasi saat ini.

---

## 8. Question Metadata

Setiap question harus memiliki:

```text
id
category
difficulty
question
options
correctAnswer
```

Opsional untuk dokumentasi/internal analysis:

```text
learningObjective
cognitiveSkill
explanation
```

---

## 9. Question Randomization

Randomization harus dilakukan pada saat assessment session dibuat.

Randomization menggunakan pendekatan category-based dan difficulty-aware.

Aturan:

1. Setiap kategori mempertahankan jumlah soal.
2. Difficulty distribution tetap.
3. Question order diacak.
4. Question order (hasil shuffle) disimpan dalam session.
5. Question order tidak boleh berubah ketika React melakukan re-render.
6. Refresh browser harus mengembalikan question order yang sama.
7. Isi 15 soal selalu sama (fixed set dari Blueprint) di setiap session; yang berbeda antar-session hanyalah urutan penyajiannya.

Randomization digunakan untuk memberikan variasi urutan antar-session, bukan sebagai sistem keamanan anti-cheating, dan bukan sebagai mekanisme pemilihan soal dari pool yang lebih besar.

---

## 10. Registration

User harus mengisi:

* Nama
* Email
* WhatsApp
* Domisili / Target Program

Validation dilakukan sebelum assessment dimulai.

Error message harus human-readable.

Contoh:

> "Masukkan email yang valid."

Bukan:

> "Invalid input."

---

## 11. Assessment Introduction

Sebelum question pertama ditampilkan, user melihat informasi singkat:

* jumlah soal,
* estimasi waktu,
* sistem navigasi,
* informasi autosave,
* dan CTA untuk memulai.

Tidak ada practice question tambahan karena assessment utama ditetapkan sebanyak 15 soal.

---

## 12. Quiz Experience

Quiz menggunakan prinsip one-question-at-a-time.

User dapat:

* memilih jawaban,
* berpindah ke soal berikutnya,
* kembali ke soal sebelumnya,
* melihat progress,
* melihat status soal,
* melanjutkan setelah refresh.

Option harus berbentuk clickable card, bukan hanya radio button kecil.

---

## 13. Progress

Progress menunjukkan posisi pengerjaan, bukan score.

Contoh:

```text
Question 7 of 15
█████████░░░░░░
```

Progress tidak boleh dianggap sebagai persentase kemampuan user.

---

## 14. Question Navigation

Desktop dapat menyediakan question navigator.

Status:

```text
● Active
✓ Answered
○ Unanswered
```

Mobile menggunakan progress indicator yang lebih sederhana.

---

## 15. Autosave

Jawaban dan progress harus disimpan ke localStorage.

Data yang perlu dipulihkan minimal:

```text
sessionId
questionIds
currentQuestion
answers
```

Jika browser di-refresh, user kembali ke assessment session yang sama.

---

## 16. Submit Confirmation

Sebelum submit, sistem menampilkan confirmation.

Jika semua soal telah dijawab:

> "Kamu sudah menjawab semua soal. Siap melihat hasilnya?"

Jika masih ada soal kosong:

> "Masih ada X soal yang belum dijawab. Yakin ingin mengirim?"

User dapat kembali ke quiz.

---

## 17. Scoring

Formula:

```text
Score = (Correct Answers / 15) × 100
```

Score ditampilkan sebagai persentase.

Catatan: Blueprint soal (`Question_Rules_Assessment_Blueprint...`) mencantumkan poin per soal berdasarkan difficulty (Easy=1, Medium=2, Hard=3). Poin tersebut **tidak dipakai untuk kalkulasi skor** — hanya metadata dokumentasi tingkat kesulitan soal. Formula final yang dipakai adalah simple percentage di atas.

---

## 18. Capability Level

|   Score | Level        |
| ------: | ------------ |
|   0–40% | Beginner     |
|  41–75% | Intermediate |
| 76–100% | Advanced     |

Overall score merupakan dasar utama penentuan level.

---

## 19. Category Performance

Sistem dapat menghitung performa per kategori.

Contoh:

```text
HTML
3 / 3
100%

CSS
2 / 3
66.7%

JavaScript
2 / 4
50%
```

Category performance digunakan sebagai learning insight.

Category performance tidak menggantikan overall score sebagai penentu level.

---

## 20. Recommendation

### Beginner

**Program:** Frontend Fundamental

Fokus:

* HTML
* CSS
* JavaScript dasar
* Web fundamentals
* Programming logic

---

### Intermediate

**Program:** Frontend Development

Fokus:

* JavaScript
* Responsive UI
* Component-based development
* Data handling
* Frontend implementation

---

### Advanced

**Program:** Advanced Frontend Development

Fokus:

* Advanced JavaScript
* Component architecture
* State management
* Performance awareness
* Production-oriented frontend development

---

## 21. Recommendation Principle

Recommendation harus mengikuti:

```text
Overall Score
↓
Capability Level
↓
Recommended Program
```

Category score digunakan sebagai supporting insight.

Jangan membuat recommendation engine yang terlalu kompleks jika tidak didukung requirement.

---

## 22. Result Page

Result page harus menampilkan:

1. Completion state
2. Overall score
3. Capability level
4. Category performance
5. Recommended program
6. Recommended focus
7. WhatsApp CTA

Result harus terasa sebagai completion dari assessment journey, bukan sekadar tabel nilai.

---

## 23. WhatsApp CTA

CTA harus menghasilkan pesan otomatis berdasarkan:

* nama user,
* score,
* level,
* recommended program.

Contoh struktur:

```text
Halo, saya [Nama].

Saya telah menyelesaikan Frontend Placement Test
dengan hasil:

Level: [Level]
Score: [Score]%

Saya tertarik dengan program [Program]
dan ingin mendapatkan informasi lebih lanjut.
```

---

## 24. Design Direction

Design harus menggabungkan:

**Scholar-inspired educational visual direction**

dengan:

**TestGorilla-style assessment UX**

dan:

**Typeform-style interaction principles.**

Design harus:

* modern,
* clean,
* warm,
* professional,
* interactive,
* readable,
* responsive.

---

## 25. Anti-AI Visual Direction

Jangan menggunakan pola visual generik hasil AI seperti:

* purple-blue gradient sebagai default,
* excessive glassmorphism,
* floating gradient blobs,
* excessive rounded cards,
* excessive drop shadows,
* random decorative icons,
* excessive neon colors,
* unnecessary 3D elements,
* excessive animations.

Setiap visual element harus memiliki fungsi UX atau branding yang jelas.

---

## 26. Interaction Principles

Animation dan interaction harus digunakan untuk memberikan feedback.

Contoh:

* option hover → clickable feedback,
* selected option → selection feedback,
* question transition → orientation,
* progress → position awareness,
* result reveal → completion feedback.

Tidak boleh menambahkan animasi hanya untuk dekorasi.

---

## 27. Responsive Design

Desktop dan mobile tidak harus memiliki layout identik.

Mobile harus memprioritaskan:

* readable question,
* large touch target,
* clear option cards,
* minimal navigation clutter,
* visible progress,
* accessible CTA.

---

## 28. Accessibility

Minimal:

* semantic HTML,
* keyboard-accessible controls,
* visible focus state,
* sufficient color contrast,
* readable text size,
* accessible labels,
* reduced-motion support.

---

## 29. Technical Direction

Frontend:

* React
* Vite
* Tailwind CSS

State:

* React Context API atau custom hook.

Data:

* local JSON.

Persistence:

* localStorage.

Tidak menggunakan:

* Next.js
* Remix
* shadcn/ui
* DaisyUI
* component library yang menghilangkan ownership terhadap UI.

---

## 30. Component Principle

Komponen harus reusable dan memiliki responsibility yang jelas.

Contoh:

```text
Button
Input
OptionCard
ProgressBar
QuestionCard
QuestionNavigator
StepIndicator
SubmitModal
ScoreCard
RecommendationCard
CategoryPerformance
WhatsAppCTA
```

---

## 31. Edge Cases

Minimal handle:

* biodata kosong,
* email invalid,
* WhatsApp invalid,
* user belum memilih jawaban,
* unanswered questions,
* browser refresh,
* localStorage tidak tersedia,
* assessment session expired,
* submit dua kali,
* mobile viewport,
* reduced motion.

---

## 32. Definition of Done

Project dianggap selesai jika:

* seluruh core flow berjalan,
* 15 soal dapat dikerjakan,
* randomization bekerja,
* scoring benar,
* level benar,
* recommendation benar,
* localStorage bekerja,
* navigation bekerja,
* result bekerja,
* WhatsApp CTA bekerja,
* responsive,
* tidak terdapat console error,
* edge cases utama ditangani,
* README tersedia,
* AI usage terdokumentasi,
* deployment tersedia.
