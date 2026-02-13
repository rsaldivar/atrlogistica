import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Soluciones logísticas integrales",
    subtitle: "Conectamos tu negocio con el mundo de forma eficiente y segura.",
  },
  {
    image: hero2,
    title: "Flota moderna y confiable",
    subtitle: "Transporte terrestre con la más alta tecnología y seguridad.",
  },
  {
    image: hero3,
    title: "Almacenaje y distribución",
    subtitle: "Centros de distribución estratégicos para optimizar tu cadena de suministro.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay/70" />
        </div>
      ))}

      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-tight">
            {slides[current].title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
            {slides[current].subtitle}
          </p>
          <a
            href="#contacto"
            className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors text-lg"
          >
            Contáctanos
          </a>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-secondary/60 hover:bg-secondary text-primary-foreground p-2 rounded-full transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-secondary/60 hover:bg-secondary text-primary-foreground p-2 rounded-full transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-primary scale-125" : "bg-primary-foreground/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
