import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    company: "Grupo Industrial del Norte",
    text: "STR Logística ha transformado nuestra cadena de suministro. Su compromiso con la puntualidad y seguridad es excepcional.",
    rating: 5,
  },
  {
    name: "Ana García",
    company: "Distribuidora Nacional MX",
    text: "Llevamos más de 5 años trabajando con ellos. Su flota moderna y servicio al cliente son de primer nivel.",
    rating: 5,
  },
  {
    name: "Roberto Sánchez",
    company: "Alimentos del Pacífico",
    text: "La mejor empresa de logística con la que hemos trabajado. Monitoreo en tiempo real y comunicación constante.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="clientes" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-secondary-foreground/5 backdrop-blur rounded-xl p-8 border border-secondary-foreground/10 hover:border-primary/50 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-secondary-foreground/80 mb-6 leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-bold text-secondary-foreground">{t.name}</p>
              <p className="text-sm text-secondary-foreground/60">{t.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
