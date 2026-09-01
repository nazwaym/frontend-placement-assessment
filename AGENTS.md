# AGENTS.md

# Frontend Placement Test Engine — AI Development Rules

## 1. Source of Truth

`PRD.md` adalah sumber kebenaran utama untuk

 product requirement,
 user flow,
 assessment structure,
 scoring,
 recommendation,
 UX behavior,
 dan scope.

Jangan membuat keputusan produk baru yang bertentangan dengan PRD.

Jika sebuah keputusan belum ditentukan dan memengaruhi product behavior secara signifikan, jangan mengarang. Tandai sebagai keputusan yang perlu ditentukan terlebih dahulu.

---

## 2. Development Philosophy

Build the product, not just the interface.

Sebelum membuat component atau kode baru, pahami

```text
Requirement
↓
User Need
↓
Behavior
↓
UI
↓
Implementation
```

Jangan memulai dari

```text
Komponen apa yang bisa dibuat
```

Mulai dari

```text
User perlu melakukan apa
```

---

## 3. Design Philosophy

Design harus terasa

 human-designed,
 educational,
 modern,
 credible,
 clean,
 interactive,
 purposeful.

Jangan membuat desain yang terlihat seperti template AI.

---

## 4. Anti-AI Design Rules

DILARANG menggunakan secara berlebihan

 purpleblue AI gradients,
 glassmorphism,
 gradient blobs,
 excessive rounded cards,
 excessive shadows,
 random decorative icons,
 floating 3D shapes,
 unnecessary illustrations,
 excessive animation,
 excessive glow effects,
 generic dashboard layouts.

Jangan menambahkan elemen visual hanya karena terlihat modern.

Setiap elemen harus memiliki alasan.

---

## 5. Visual Reference

Gunakan Scholarstoday sebagai referensi visual utama.

Gunakan TestGorilla sebagai referensi assessment UX.

Gunakan Typeform sebagai referensi interaction.

Gunakan referensi tersebut sebagai inspirasi prinsip, bukan sebagai template yang harus disalin.

Jangan menyalin

 layout secara identik,
 copywriting,
 logo,
 asset,
 atau branding.

---

## 6. Color Rules

Gunakan color palette yang terinspirasi dari visual identity Scholarstoday.

Jangan mengarang warna baru pada setiap component.

Semua warna harus berasal dari design tokens.

Contoh struktur

```text
--color-primary
--color-primary-hover
--color-primary-soft
--color-background
--color-surface
--color-text
--color-text-muted
--color-border
--color-success
--color-warning
--color-error
```

Jika HEX resmi belum ditentukan, jangan mengklaim warna tersebut sebagai warna resmi Scholarstoday.

Tetapkan token terlebih dahulu sebelum implementasi visual.

---

## 7. Typography

Typography harus konsisten.

Jangan menggunakan terlalu banyak font family.

Prioritaskan

 readability,
 hierarchy,
 educational tone,
 mobile readability.

Jangan memilih font hanya karena terlihat AI aesthetic.

---

## 8. Spacing

Gunakan spacing system yang konsisten.

Jangan memberikan marginpadding random pada setiap component.

Jika sebuah spacing value sering digunakan, masukkan ke design token.

---

## 9. Border Radius

Gunakan radius secara konsisten.

Jangan membuat semua element

```text
rounded-full
```

atau

```text
rounded-[32px]
```

tanpa alasan.

Assessment card harus terasa modern tetapi tetap profesional.

---

## 10. Shadow

Shadow harus subtle.

Jangan menggunakan

 heavy glow,
 neon shadow,
 multiple layered shadows.

Gunakan elevation hanya ketika membantu hierarchy.

---

## 11. Animation

Animation harus purposeful.

Gunakan terutama untuk

 question transition,
 selection feedback,
 progress feedback,
 result reveal.

Jangan membuat

 infinite animation,
 floating blobs,
 excessive bouncing,
 unnecessary parallax,
 long transitions.

Hormati

```css
prefers-reduced-motion
```

---

## 12. Question Randomization

Randomization dilakukan sekali ketika assessment session dibuat.

Jangan melakukan

```text
shuffle()
```

setiap render.

Question set harus disimpan di session state dan localStorage.

Refresh harus menghasilkan question set yang sama.

New assessment session dapat menghasilkan question set berbeda.

---

## 13. Randomization Fairness

Tidak ada question bank. Soal yang dipakai selalu 15 soal final dari Blueprint (fixed set), dengan distribusi yang otomatis terpenuhi karena set-nya tetap:

```text
Web Fundamentals = 2
HTML = 3
CSS = 3
JavaScript = 4
Programming Logic = 3
```

dan

```text
Easy = 7
Medium = 5
Hard = 3
```

Randomization hanya mengacak **urutan penyajian** ke-15 soal tersebut, bukan memilih/sampling soal dari pool yang lebih besar. Jangan mengimplementasikan logic sampling dari bank — itu di luar scope.

---

## 14. Question Data

Question data tidak boleh ditulis langsung di component UI.

Gunakan data layer

```text
srcdataquestions.json
```

UI hanya membaca data.

---

## 15. State Management

Quiz state harus dipisahkan dari presentational UI.

Gunakan

```text
QuizContext
```

atau

```text
useQuiz()
```

State minimal

```text
currentQuestion
questionIds
answers
sessionId
status
```

---

## 16. LocalStorage

localStorage digunakan untuk persistence.

Jangan menyimpan state secara acak di banyak key.

Gunakan satu namespacesession object.

Contoh

```text
frontend-placement-session
```

Data harus dapat dipulihkan.

---

## 17. Scoring

Scoring harus deterministic.

Gunakan

```text
correctAnswers  totalQuestions  100
```

Jangan membuat score berdasarkan difficulty. Ini keputusan final — Blueprint soal mencantumkan poin per soal (Easy=1/Medium=2/Hard=3) hanya sebagai metadata dokumentasi difficulty, bukan untuk dipakai dalam kalkulasi score.

---

## 18. Level

Gunakan

```text
0–40    Beginner
41–75   Intermediate
76–100  Advanced
```

Jangan mengubah threshold tanpa alasan product requirement.

---

## 19. Recommendation

Recommendation harus berdasarkan level.

```text
Beginner
→ Frontend Fundamental

Intermediate
→ Frontend Development

Advanced
→ Advanced Frontend Development
```

Category score hanya supporting insight.

---

## 20. Component Architecture

Prefer small, focused components.

Jangan membuat satu component

```text
QuizPage.jsx
```

yang berisi seluruh

 question rendering,
 scoring,
 localStorage,
 navigation,
 modal,
 recommendation,
 dan UI.

Pisahkan responsibility.

---

## 21. Reusability

Prioritaskan reusable components

```text
Button
Input
OptionCard
ProgressBar
QuestionCard
QuestionNavigator
Modal
ResultCard
RecommendationCard
```

Jangan membuat komponen reusable secara berlebihan jika hanya digunakan sekali dan abstraction tidak memberikan manfaat.

---

## 22. UX Writing

Gunakan Bahasa Indonesia yang natural.

Hindari copy yang terasa seperti terjemahan mesin.

Hindari

 Invalid input.

Gunakan

 Masukkan email yang valid.

Hindari

 Submit Quiz.

Gunakan

 Lihat Hasil Saya.

Copy harus terdengar seperti produk yang dibuat manusia untuk manusia.

---

## 23. Accessibility

Semua interactive element harus

 keyboard accessible,
 memiliki focus state,
 memiliki semantic meaning,
 memiliki label yang jelas,
 memiliki sufficient contrast.

Option card tidak boleh hanya clickable melalui mouse.

---

## 24. Responsive

Jangan hanya mengecilkan desktop layout.

Tentukan behavior mobile secara sengaja.

Mobile priority

```text
Question
↓
Answer Options
↓
Progress
↓
Navigation
```

Desktop dapat memiliki additional question navigation.

---

## 25. Performance

Jangan menambahkan dependency hanya untuk fitur kecil.

Prefer native Reactbrowser capability jika cukup.

Jangan memasukkan

 animation library,
 UI library,
 state library,

jika tidak diperlukan.

---

## 26. Code Quality

Gunakan

 clear naming,
 small functions,
 single responsibility,
 predictable state,
 no duplicated scoring logic,
 no duplicated recommendation logic.

---

## 27. Testing

Setiap core behavior harus diuji.

Minimal

```text
Registration validation
Question rendering
Answer selection
Previous navigation
Next navigation
Randomization
LocalStorage restore
Scoring
Level calculation
Recommendation
Submit confirmation
WhatsApp URL generation
```

---

## 28. AI Usage

AI boleh digunakan sebagai development assistant.

AI dapat membantu

 brainstorming,
 implementation,
 boilerplate,
 debugging,
 refactoring,
 test generation,
 code review.

Namun developer tetap bertanggung jawab terhadap

 requirement analysis,
 product decision,
 assessment blueprint,
 question validation,
 scoring logic,
 UX decisions,
 final code review.

---

## 29. AI Prompt Documentation

Setiap prompt AI yang benar-benar digunakan dalam development harus dicatat di dokumentasi sesuai requirement study case.

Jangan mengklaim menggunakan prompt yang tidak pernah digunakan.

Jangan menghapus bagian prompt hanya agar dokumentasi terlihat lebih sedikit.

---

## 30. AI Output Validation

Jangan menerima output AI secara langsung.

Setiap output harus diperiksa terhadap

```text
PRD
↓
AGENTS
↓
Existing Architecture
↓
UX
↓
Technical Correctness
```

Jika output AI bertentangan dengan PRD atau AGENTS, jangan digunakan.

---

## 31. No Blind Coding

Sebelum meminta AI membuat implementation besar, pastikan

1. requirement sudah jelas,
2. component responsibility sudah jelas,
3. state sudah jelas,
4. data structure sudah jelas,
5. expected behavior sudah jelas.

Jangan meminta AI

 Buatkan semua aplikasi ini.

Gunakan task kecil dan terukur.

---

## 32. Development Sequence

Ikuti urutan

```text
Requirement
↓
PRD
↓
Assessment Data
↓
Design Tokens
↓
UIUX Structure
↓
Component Architecture
↓
State Architecture
↓
Implementation
↓
Testing
↓
Refinement
↓
Documentation
```

---

## 33. Definition of Done

Sebuah feature belum dianggap selesai hanya karena sudah tampil.

Feature harus

 sesuai PRD,
 responsive,
 accessible,
 state-nya benar,
 edge case ditangani,
 tidak menimbulkan console error,
 tidak merusak feature lain,
 dan telah diuji.

---

## 34. Final Rule

Jangan menambahkan complexity hanya untuk membuat project terlihat lebih advanced.

Prioritas

```text
Correctness

Usability

Clarity

Maintainability

Visual polish

Extra features
```

Produk yang sederhana tetapi reasoning-nya kuat lebih baik daripada produk yang kompleks tetapi tidak memiliki alasan yang jelas.
