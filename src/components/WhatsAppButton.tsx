import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "528120188823";
  
  // Escribimos el mensaje tal cual. 
  // Nota: Asegúrate de que tu editor (VS Code) diga "UTF-8" abajo a la derecha.
  const message = `👋 ¡Hola! Gracias por contactar a ATR Logística.
Con gusto te apoyamos en tus necesidades de transporte y logística.
Por favor indícanos:
📍 Origen:
📍 Destino:
📦 Tipo de carga:
⚖️ Peso o volumen:
📅 Fecha requerida:

En breve uno de nuestros asesores te atiende.`;

  // Usamos encodeURIComponent para limpiar los espacios y emojis
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;