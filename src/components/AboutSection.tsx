import { Truck, Package, Clock, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import about3 from "@/assets/about-3.jpg";

const features = [
  {
    icon: Truck,
    title: "Nuestra Flota y Capacidades",
    desc: `
    Unidades Disponibles:
      <ul class="space-y-1">
        <li>✔ Caja seca 53'</li>
        <li>✔ Refrigerada</li>
        <li>✔ Plataforma</li>
        <li>✔ Camiones 3.5 toneladas</li>
        <li>✔ Camionetas 1.5 toneladas</li>
         </ul>
         <p class="mt-3 font-semibold"> Nos adaptamos a carga industrial, consumo masivo, acero, mercancía refrigerada y distribución urbana"</p>
   
         `,
  },
  {
    icon: Package,
    title: "Cobertura Operativa ",
    desc: `
      <b>Norte y Bajío:</b>
            <ul class="space-y-1">
      <li>- Chihuahua</li>
      <li>- Monterrey</li>
      <li>- Coahuila</li>
      <li>- Tamaulipas</li>
      <li>- Querétaro</li>
      <li>- Guanajuato</li>
      <li>- Guadalajara</li>
      <li>- Ciudad</li> de México
      </ul>
<b>Zona Pacífico:</b>

      <ul class="space-y-1">
        <li>- Mazatlán</li>
        <li>- Culiacán</li>
        <li>- Navojoa</li>
      </ul>
      <p class="mt-3 font-semibold">Y expansión constante hacia nuevos corredores estratégicos.</p>
    `
  },
  {
    icon: Clock,
    title: "En ATR Logística garantizamos",
    desc: `
      <ul class="space-y-1">
        <li>✔ Seguridad en cada trayecto</li>
        <li>✔ Monitoreo y comunicación constante</li>
        <li>✔ Puntualidad en citas de carga y descarga</li>
        <li>✔ Evidencia inmediata de entrega (POD)</li>
        <li>✔ Solución rápida ante cualquier incidencia</li>
        <li class="font-semibold mt-2">No improvisamos. Operamos con disciplina.</li>
      </ul>
    `,
  },
  {
    icon: Shield,
    title: "¿Por Qué ATR Logística?",
    desc: `
      <ul class="space-y-1">
        <li>✔ Capacidad nacional flexible</li>
        <li>✔ Más de 50 aliados estratégicos</li>
        <li>✔ Operación estructurada</li>
        <li>✔ Comunicación clara</li>
        <li>✔ Compromiso real con tiempos y mercancía</li>
      </ul>
      <p class="mt-3 font-semibold">Donde otros transportan... nosotros garantizamos.</p>
    `,
  },
];

const galleryImages = [
  { src: about1, alt: "Unidad de transporte en zona industrial" },
  { src: about2, alt: "Flota de camiones en centro de distribución" },
  { src: about3, alt: "Tráiler en punto de carga" },
];

const AboutSection = () => {
  const header = useScrollReveal();
  const cards = useScrollReveal(0.1);
  const gallery = useScrollReveal(0.1);

  return (
    <section id="nosotros" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Quiénes Somos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            En <strong className="text-foreground">ATR Logística</strong> somos líderes en soluciones
            de transporte y logística. Con más de 15 años de experiencia, ofrecemos servicios
            integrales que garantizan la eficiencia y seguridad de tu cadena de suministro.
          </p>
        </div>

        {/* Gallery */}
        <div
          ref={gallery.ref}
          className={`grid md:grid-cols-3 gap-4 mb-16 transition-all duration-700 ${gallery.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg group"
              style={{ transitionDelay: gallery.visible ? `${i * 150}ms` : "0ms" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Service cards */}
        <div
          ref={cards.ref}
          id="servicios"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-700 group ${cards.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: cards.visible ? `${i * 150}ms` : "0ms" }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <f.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <div
                className="text-muted-foreground text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: f.desc }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
