export function validateBiodata({ name, email, whatsapp, targetProgram }) {
  const errors = {};

  if (!name?.trim()) {
    errors.name = "Nama tidak boleh kosong.";
  }

  if (!email?.trim()) {
    errors.email = "Email tidak boleh kosong.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Format email tidak valid.";
  }

  if (!whatsapp?.trim()) {
    errors.whatsapp = "Nomor WhatsApp tidak boleh kosong.";
  } else if (!/^[0-9+\-\s()]+$/.test(whatsapp)) {
    errors.whatsapp = "Format nomor WhatsApp tidak valid.";
  } else if (whatsapp.replace(/\D/g, "").length < 9) {
    errors.whatsapp = "Nomor WhatsApp terlalu pendek.";
  }

  if (!targetProgram?.trim()) {
    errors.targetProgram = "Target Program harus dipilih.";
  }

  return errors;
}

export function isBiodataValid(errors) {
  return Object.keys(errors).length === 0;
}
