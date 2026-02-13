import logo from "@/assets/logo-atr.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="STR Logística" className="h-10 w-auto rounded" />
            <span className="text-lg font-bold text-secondary-foreground">STR Logística</span>
          </div>
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} STR Logística. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
