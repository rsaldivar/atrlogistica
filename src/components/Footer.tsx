import logo from "@/assets/logo-atr.jpg";
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaLinkedin size={20} />,
    href: "https://www.linkedin.com/in/atr-logistics-26146b3b0/",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram size={20} />,
    href: "https://www.instagram.com/atr_logistics_mty?igsh=ZHpnMWpsNzlxeWs4&utm_source=qr",
    label: "Instagram",
  },
  {
    icon: <FaFacebook size={20} />,
    href: "https://www.facebook.com/share/1LKFKgQjq3/?mibextid=wwXIfr",
    label: "Facebook",
  },
  {
    icon: <FaEnvelope size={20} />,
    href: "mailto:contacto@atrlogisticsmx.com",
    label: "Email",
  },
];

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="ATR Logística" className="h-10 w-auto rounded" />
            <span className="text-lg font-bold text-secondary-foreground">ATR Logística</span>
          </div>

          {/* Redes sociales */}
          <div className="flex items-center gap-4">
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

          {/* Copyright */}
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} ATR Logística. Todos los derechos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;