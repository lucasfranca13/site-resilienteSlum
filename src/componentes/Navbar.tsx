import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/ativos/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Projetos", to: "/projetos" },
  { label: "Galeria", to: "/Galeria" },
  { label: "Contato", to: "/contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || menuOpen
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Resiliente Slum"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-sm font-500 tracking-wide uppercase transition-colors duration-200 relative group ${location.pathname === link.to
                    ? "text-yellow"
                    : "text-foreground/70 hover:text-foreground"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-yellow transition-all duration-300 ${location.pathname === link.to ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            ))}
            <Link
              to="/doacoes"
              className="ml-2 border border-yellow/40 text-yellow/70 font-display text-xs tracking-widest px-5 py-2 hover:border-yellow hover:text-yellow transition-colors duration-200"
            >
              APOIE
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <Link
                  to={link.to}
                  className={`font-display text-5xl tracking-widest transition-colors ${location.pathname === link.to ? "text-yellow" : "text-foreground hover:text-yellow"
                    }`}
                >
                  {link.label.toUpperCase()}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              <Link
                to="/doacoes"
                className="bg-yellow text-primary-foreground font-display text-xl tracking-widest px-10 py-4 mt-4 block"
              >
                APOIE O PROJETO
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
