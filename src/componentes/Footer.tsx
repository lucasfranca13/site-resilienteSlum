import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/ativos/logo.png";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Resiliente Slum"
              className="h-10 md:h-12 w-auto"
            />
            <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xs">
              Transformando realidades na periferia através de educação, cultura e esporte. Jovens resilientes constroem futuros.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/resilienteslum/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-yellow hover:border-yellow transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-yellow hover:border-yellow transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>


            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xl tracking-widest text-yellow mb-6">NAVEGAÇÃO</h4>
            <ul className="space-y-3">
              {["Home", "Sobre", "Projetos", "Galeria", "Contato"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl tracking-widest text-yellow mb-6">CONTATO</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={16} className="mt-0.5 text-yellow flex-shrink-0" />
                <span className="font-body text-sm">Ventosa, BH - Brasil</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={16} className="text-yellow flex-shrink-0" />
                <a href="tel:+5511999999999" className="font-body text-sm hover:text-foreground transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={16} className="text-yellow flex-shrink-0" />
                <a href="mailto:contato@resilienteslum.org" className="font-body text-sm hover:text-foreground transition-colors">
                  contato@resilienteslum.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Resiliente Slum — Favela Resiliente. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Feito com 💛 pela comunidade
          </p>
        </div>
      </div>
    </footer>
  );
}
