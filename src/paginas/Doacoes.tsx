import { motion } from "framer-motion";
import { QrCode, Building2, Copy, Check, Heart } from "lucide-react";
import { useState } from "react";

const bankData = [
  { label: "Razão Social", value: "Resilienteslum – Favela Resiliente" },
  { label: "CNPJ", value: "00.000.000/0001-00" },
  { label: "Banco", value: "Banco do Brasil" },
  { label: "Agência", value: "0000" },
  { label: "Conta Corrente", value: "00000-0" },
  { label: "Operação", value: "003" },
];

const pixKey = "00.000.000/0001-00";

const impactItems = [
  { amount: "R$ 25", description: "Material escolar para 1 jovem" },
  { amount: "R$ 50", description: "1 mês de aulas de reforço" },
  { amount: "R$ 100", description: "Kit completo de oficina criativa" },
  { amount: "R$ 250", description: "Bolsa mensal para 1 jovem no projeto" },
];

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
      aria-label="Copiar"
    >
      {copied ? <Check size={14} className="text-yellow" /> : <Copy size={14} />}
    </button>
  );
}

export default function Doacoes() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Heart className="mx-auto mb-6 text-yellow" size={48} />
            <h1 className="font-display text-5xl md:text-7xl tracking-wider text-foreground mb-4">
              APOIE O <span className="text-yellow">PROJETO</span>
            </h1>
            <p className="font-body text-foreground/60 max-w-xl mx-auto text-lg">
              Sua contribuição transforma vidas. Cada doação fortalece jovens da periferia
              através da educação, cultura e esporte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          {/* Bank details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border border-border bg-surface rounded-sm p-8">
              <div className="flex items-center gap-3 mb-8">
                <Building2 className="text-yellow" size={24} />
                <h2 className="font-display text-3xl tracking-wider text-foreground">
                  DOAÇÕES FINANCEIRAS
                </h2>
              </div>
              <p className="font-body text-foreground/60 mb-8">
                Recebemos doações por meio de depósito em conta:
              </p>
              <div className="space-y-5">
                {bankData.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <span className="font-body text-xs uppercase tracking-widest text-foreground/40 mb-1">
                      {item.label}
                    </span>
                    <span className="font-body text-foreground text-lg">
                      {item.value}
                    </span>
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
            <div className="border border-border bg-surface rounded-sm p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <QrCode className="text-yellow" size={24} />
                <h2 className="font-display text-3xl tracking-wider text-foreground">
                  QR CODE PIX
                </h2>
              </div>
              <p className="font-body text-foreground/60 mb-8">
                Abra seu aplicativo de banco e faça o scan para doar
              </p>

              {/* QR Code placeholder */}
              <div className="mx-auto w-56 h-56 md:w-64 md:h-64 bg-foreground/10 border-2 border-dashed border-foreground/20 rounded-sm flex flex-col items-center justify-center mb-8">
                <QrCode size={64} className="text-foreground/30 mb-3" />
                <span className="font-body text-xs text-foreground/40 uppercase tracking-wider">
                  QR Code aqui
                </span>
              </div>

              {/* PIX key */}
              <div className="bg-background border border-border rounded-sm p-4 inline-flex items-center gap-2">
                <div>
                  <span className="font-body text-xs uppercase tracking-widest text-foreground/40 block mb-1">
                    Chave PIX (CNPJ)
                  </span>
                  <span className="font-body text-yellow text-lg font-medium">
                    {pixKey}
                  </span>
                </div>
                <CopyButton text={pixKey} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impact section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mt-16"
        >
          <h2 className="font-display text-3xl md:text-4xl tracking-wider text-center text-foreground mb-10">
            O IMPACTO DA SUA <span className="text-yellow">DOAÇÃO</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {impactItems.map((item, i) => (
              <motion.div
                key={item.amount}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="border border-border bg-surface rounded-sm p-6 text-center hover:border-yellow/40 transition-colors"
              >
                <span className="font-display text-3xl md:text-4xl text-yellow block mb-2">
                  {item.amount}
                </span>
                <span className="font-body text-sm text-foreground/60">
                  {item.description}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
