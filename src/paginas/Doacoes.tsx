import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { QrCode, Building2, Copy, Check, Heart, Instagram } from "lucide-react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/componentes/interface do usuario/carousel";
import qrExemplo from "@/ativos/pix-qr-exemplo.png";

const bankData = [
  { label: "Favorecido", value: "Resiliente Slum" },
  { label: "CNPJ", value: "43.680.777/0001-57" },
  { label: "Banco", value: "Caixa Econômica Federal" },
  { label: "Agência", value: "4855" },
  { label: "Conta", value: "00005061-1" },
  { label: "Operação", value: "013" },
];

const pixKey = "43.680.777/0001-57";

// Logos otimizados dos parceiros + nomes de exibição.
const logoFiles = import.meta.glob("../ativos/parceiros-web/*.{jpg,png}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const nomes: Record<string, string> = {
  "ifl-bh": "IFL BH",
  "Instituto-InvestCar-social": "Instituto InvestCar Social",
  "Professor-Juliano-Lopes": "Professor Juliano Lopes",
  "startup-da-quebrada": "StartUp da Quebrada",
  "gedam_ong": "GEDAM",
  "sopro-que-cura": "Sopro que Cura",
  "amorinhas": "Amorinhas em Ação",
  "Salte": "Salte",
  "Brazas": "Brazas",
};

// Ordem de exibição (parceiros institucionais primeiro).
const ordem = [
  "ifl-bh",
  "Instituto-InvestCar-social",
  "Professor-Juliano-Lopes",
  "startup-da-quebrada",
  "gedam_ong",
  "sopro-que-cura",
  "amorinhas",
  "Salte",
  "Brazas",
];

const parceiros = ordem
  .map((base) => {
    const entry = Object.entries(logoFiles).find(([path]) => path.includes(`/${base}.`));
    return entry ? { name: nomes[base] ?? base, logo: entry[1] } : null;
  })
  .filter((p): p is { name: string; logo: string } => p !== null);

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="ml-2 p-1.5 rounded border border-border hover:border-yellow/50 hover:text-yellow transition-colors"
      aria-label="Copiar chave PIX"
    >
      {copied ? <Check size={14} className="text-yellow" /> : <Copy size={14} />}
    </button>
  );
}

function ParceirosCarrossel() {
  const [api, setApi] = useState<CarouselApi>();
  const paused = useRef(false);

  useEffect(() => {
    if (!api) return;
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduz) return;
    const id = setInterval(() => {
      if (!paused.current) api.scrollNext();
    }, 2800);
    return () => clearInterval(id);
  }, [api]);

  return (
    <div
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocusCapture={() => (paused.current = true)}
      onBlurCapture={() => (paused.current = false)}
    >
      <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className="px-2">
        <CarouselContent className="-ml-4">
          {parceiros.map((p) => (
            <CarouselItem key={p.name} className="pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/5">
              <div className="group/card h-36 bg-gradient-to-br from-surface to-background border border-border rounded-sm flex flex-col items-center justify-center gap-4 px-4 hover:border-yellow/40 transition-colors duration-300">
                <img
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                  className="max-h-12 md:max-h-14 max-w-[78%] object-contain opacity-85 group-hover/card:opacity-100 transition-opacity duration-300"
                />
                <span className="font-body text-[11px] text-foreground/55 text-center leading-tight px-1">{p.name}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 sm:-left-4 h-9 w-9 bg-background/80 border-border text-foreground hover:bg-yellow hover:text-primary-foreground" />
        <CarouselNext className="right-0 sm:-right-4 h-9 w-9 bg-background/80 border-border text-foreground hover:bg-yellow hover:text-primary-foreground" />
      </Carousel>
    </div>
  );
}

export default function Doacoes() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Heart className="mx-auto mb-6 text-yellow" size={48} />
            <h1 className="font-display text-5xl md:text-7xl tracking-wider text-foreground mb-4">
              APOIE O <span className="text-yellow">PROJETO</span>
            </h1>
            <p className="font-body text-foreground/60 max-w-xl mx-auto text-lg">
              Sua contribuição transforma vidas. Cada doação fortalece crianças e jovens da periferia
              através da educação, cultura e esporte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dados financeiros */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          {/* Bank details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border border-border bg-surface rounded-sm p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <Building2 className="text-yellow" size={24} />
                <h2 className="font-display text-3xl tracking-wider text-foreground">DADOS BANCÁRIOS</h2>
              </div>
              <p className="font-body text-foreground/60 mb-8">Doe por transferência ou depósito em conta:</p>
              <div className="space-y-5">
                {bankData.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <span className="font-body text-xs uppercase tracking-widest text-foreground/40 mb-1">{item.label}</span>
                    <span className="font-body text-foreground text-lg">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* PIX QR Code */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border border-border bg-surface rounded-sm p-8 text-center h-full flex flex-col">
              <div className="flex items-center justify-center gap-3 mb-8">
                <QrCode className="text-yellow" size={24} />
                <h2 className="font-display text-3xl tracking-wider text-foreground">PIX</h2>
              </div>

              {/* QR Code */}
              <div className="relative mx-auto mb-6">
                <div className="w-56 h-56 md:w-60 md:h-60 bg-white rounded-sm p-3 flex items-center justify-center">
                  <img src={qrExemplo} alt="QR Code PIX (exemplo)" className="w-full h-full object-contain" />
                </div>
                <span className="absolute top-2 right-2 bg-yellow text-primary-foreground font-body text-[10px] tracking-widest px-2 py-0.5">
                  EXEMPLO
                </span>
              </div>
              <p className="font-body text-xs text-foreground/40 mb-6">
                QR de exemplo — será substituído pelo oficial.
              </p>

              {/* PIX key */}
              <div className="mt-auto">
                <div className="bg-background border border-border rounded-sm p-4 inline-flex items-center gap-2">
                  <div className="text-left">
                    <span className="font-body text-xs uppercase tracking-widest text-foreground/40 block mb-1">
                      Chave PIX (CNPJ)
                    </span>
                    <span className="font-body text-yellow text-lg font-medium">{pixKey}</span>
                  </div>
                  <CopyButton text={pixKey} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Comprovante / transparência */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-8"
        >
          <div className="flex items-center justify-center gap-3 text-center border border-yellow/20 bg-yellow/5 rounded-sm px-6 py-4">
            <Instagram size={18} className="text-yellow flex-shrink-0" />
            <p className="font-body text-sm text-foreground/70">
              Doou? Envie o comprovante no nosso{" "}
              <a
                href="https://www.instagram.com/resilienteslum/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow hover:underline"
              >
                @resilienteslum
              </a>{" "}
              — assim fazemos a prestação de contas de forma transparente.
            </p>
          </div>
        </motion.div>

        {/* Parceiros */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mt-24"
        >
          <div className="text-center mb-12">
            <span className="font-body text-yellow text-xs uppercase tracking-[0.3em] block mb-2">Quem caminha com a gente</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-wider text-foreground">
              NOSSOS <span className="text-yellow">PARCEIROS</span>
            </h2>
          </div>
          <ParceirosCarrossel />
          <p className="font-body text-sm text-foreground/50 text-center mt-12 max-w-xl mx-auto">
            Quer somar forças com o Resiliente Slum?{" "}
            <Link to="/contato" className="text-yellow hover:underline">Seja parceiro</Link> e ajude a transformar a quebrada.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
