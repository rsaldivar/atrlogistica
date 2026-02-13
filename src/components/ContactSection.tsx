import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ContactSection = () => {
  const header = useScrollReveal();
  const content = useScrollReveal(0.1);
  const mapReveal = useScrollReveal(0.1);

  return (
    <section id="contacto" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Contáctanos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg">
            Estamos listos para ayudarte con tus necesidades logísticas.
          </p>
        </div>

        <div
          ref={content.ref}
          className={`grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto transition-all duration-700 ${
            content.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Dirección</h3>
                <p className="text-muted-foreground">Apodaca, Nuevo León, México</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Teléfono</h3>
                <p className="text-muted-foreground">+52 (81) 1234 5678</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground">contacto@atrlogistica.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Horario</h3>
                <p className="text-muted-foreground">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            className="bg-card rounded-xl p-8 shadow-lg space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("¡Mensaje enviado! Nos pondremos en contacto pronto.");
            }}
          >
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1">Nombre</label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1">Mensaje</label>
              <textarea
                required
                rows={4}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors text-lg"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Map */}
        <div
          ref={mapReveal.ref}
          className={`mt-16 max-w-5xl mx-auto transition-all duration-700 ${
            mapReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Ubicación STR Logística - Apodaca, Nuevo León"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57498.05878846988!2d-100.21361!3d25.7833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662ebc42e3c4273%3A0x65c4a18b98292b0!2sApodaca%2C%20N.L.%2C%20Mexico!5e0!3m2!1ses!2sus!4v1700000000000!5m2!1ses!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
