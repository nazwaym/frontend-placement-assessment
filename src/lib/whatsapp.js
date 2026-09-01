// TODO: isi dengan nomor WhatsApp resmi program (format internasional, tanpa +).
// Belum ada di PRD/Blueprint — perlu dikonfirmasi sebelum go-live.
const PROGRAM_WHATSAPP_NUMBER = "";

export function buildWhatsAppMessage({ name, score, level, program }) {
  return [
    `Halo, saya ${name}.`,
    "",
    "Saya telah menyelesaikan Frontend Placement Test",
    "dengan hasil:",
    "",
    `Level: ${level}`,
    `Score: ${score}%`,
    "",
    `Saya tertarik dengan program ${program}`,
    "dan ingin mendapatkan informasi lebih lanjut.",
  ].join("\n");
}

export function buildWhatsAppUrl(message, phoneNumber = PROGRAM_WHATSAPP_NUMBER) {
  const encodedMessage = encodeURIComponent(message);
  return phoneNumber
    ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;
}
