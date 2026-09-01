const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WHATSAPP_PATTERN = /^(\+?\d{9,15})$/;

export function validateBiodata({ name, email, whatsapp, domicile }) {
  const errors = {};

  if (!name?.trim()) {
    errors.name = "Nama tidak boleh kosong.";
  }

  if (!email?.trim()) {
    errors.email = "Email tidak boleh kosong.";
  } else if (!EMAIL_PATTERN.test(email.trim())) {
    errors.email = "Masukkan email yang valid.";
  }

  if (!whatsapp?.trim()) {
    errors.whatsapp = "Nomor WhatsApp tidak boleh kosong.";
  } else if (!WHATSAPP_PATTERN.test(whatsapp.trim().replace(/[\s-]/g, ""))) {
    errors.whatsapp = "Masukkan nomor WhatsApp yang valid.";
  }

  if (!domicile?.trim()) {
    errors.domicile = "Domisili tidak boleh kosong.";
  }

  return errors;
}

export function isBiodataValid(errors) {
  return Object.keys(errors).length === 0;
}
