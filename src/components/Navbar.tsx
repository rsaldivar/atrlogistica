import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import logo from "@/assets/logo-atr.jpg";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quienes Somos", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

const socialLinks = [
  {
    icon: <FaLinkedin size={17} />,
    href: "https://www.linkedin.com/in/atr-logistics-26146b3b0/",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram size={17} />,
    href: "https://www.instagram.com/atr_logistics_mty",
    label: "Instagram",
  },
  {
    icon: <FaFacebook size={17} />,
    href: "https://www.facebook.com/share/1LKFKgQjq3/",
    label: "Facebook",
  },
  {
    icon: <FaEnvelope size={17} />,
    href: "mailto:atrlogisticsmx@gmail.com",
    label: "Email",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary shadow-lg" : "bg-secondary/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="ATR Logistica" className="h-12 w-auto rounded" />
          <span className="text-xl font-bold text-primary-foreground tracking-tight">
            ATR Logistica
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 border-l border-secondary-foreground/20 pl-6">
        {socialLinks.map((link) => (
          <a 
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-secondary-foreground/60 hover:text-primary transition-colors duration-200"
          >
            {link.icon}
          </a>
        ))}
      </div>
      </div>  

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-secondary border-t border-secondary-foreground/10">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a 
                  href={l.href}
                  className="text-base font-medium text-secondary-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Iconos sociales en movil */}
          <div className="flex items-center justify-center gap-5 pb-6 border-t border-secondary-foreground/10 pt-4">
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-secondary-foreground/60 hover:text-primary transition-colors duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
