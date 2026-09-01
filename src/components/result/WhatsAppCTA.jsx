import Button from "../ui/Button";

export default function WhatsAppCTA({ url }) {
  return (
    <Button
      variant="primary"
      className="w-full"
      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
    >
      Hubungi via WhatsApp
    </Button>
  );
}
