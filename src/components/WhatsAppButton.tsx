import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/528112345678?text=Hola%2C%20me%20interesa%20conocer%20sus%20servicios%20de%20log%C3%ADstica"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
