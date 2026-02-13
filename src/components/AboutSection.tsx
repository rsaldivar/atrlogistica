import { Truck, Package, Clock, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: Truck,
    title: "Transporte Terrestre",
    desc: "Flota propia de unidades modernas para carga completa y parcial a nivel nacional.",
  },
  {
    icon: Package,
    title: "Almacenaje",
    desc: "Centros de distribución estratégicos con inventario en tiempo real.",
  },
  {
    icon: Clock,
    title: "Entregas a Tiempo",
    desc: "Cumplimiento de tiempos de entrega con monitoreo GPS 24/7.",
  },
  {
    icon: Shield,
    title: "Seguridad Total",
    desc: "Seguros de carga, rastreo satelital y protocolos de seguridad certificados.",
  },
];

const AboutSection = () => {
  const header = useScrollReveal();
  const cards = useScrollReveal(0.1);

  return (
    <section id="nosotros" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Quiénes Somos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            En <strong className="text-foreground">STR Logística</strong> somos líderes en soluciones
            de transporte y logística. Con más de 15 años de experiencia, ofrecemos servicios
            integrales que garantizan la eficiencia y seguridad de tu cadena de suministro.
          </p>
        </div>

        <div
          ref={cards.ref}
          id="servicios"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-700 group ${
                cards.visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: cards.visible ? `${i * 150}ms` : "0ms" }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <f.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
