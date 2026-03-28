import { motion } from "framer-motion";
import { Heart, Users, Star, Target } from "lucide-react";
import aboutImg from "@/ativos/about-img.jpg";
import heroBg from "@/ativos/fotoSobre-superio.jpg";

const valores = [
  { icon: Heart, title: "Pertencimento", desc: "Toda criança e jovem da periferia merece sentir que pertence e que tem potencial." },
  { icon: Users, title: "Comunidade", desc: "Acreditamos no poder coletivo. Juntos somos mais fortes que qualquer barreira." },
  { icon: Star, title: "Resiliência", desc: "Transformamos adversidade em combustível. A dor da favela vira arte, música e força." },
  { icon: Target, title: "Impacto Real", desc: "Não trabalhamos com promessas. Cada ação gera resultado concreto na vida dos jovens." },
];

const timeline = [
  { year: "2013", title: "O Começo", desc: "Nascemos em uma garagem na periferia da Ventosa - Belo Horizonte com 5 jovens e um sonho." },
  { year: "2016", title: "Primeiros Projetos", desc: "Lançamos as primeiras oficinas de arte e iniciamos o programa de esporte." },
  { year: "2019", title: "Expansão", desc: "Alcançamos 3 comunidades e mais de 300 jovens atendidos." },
  { year: "2022", title: "Tech da Favela", desc: "Criamos o programa de tecnologia e inclusão digital para a nova geração." },
  { year: "2025", title: "Hoje", desc: "Mais de 850 jovens, 45 parceiros e uma comunidade que nunca para de crescer." },
];

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background grain-overlay">
      {/* Page header */}
      <div className="relative h-64 md:h-80 flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Sobre" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        </div>
        <div className="relative container mx-auto px-6 z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-body text-yellow text-xs uppercase tracking-[0.3em] block mb-2">Conheça nossa história</span>
            <h1 className="font-display text-6xl md:text-8xl text-foreground">SOBRE NÓS</h1>
          </motion.div>
        </div>
      </div>

      {/* Missão */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="font-body text-yellow text-xs uppercase tracking-[0.3em]">Nossa missão</span>
              <h2 className="font-display text-5xl text-foreground leading-tight">
                SER DA FAVELA<br />
                <span className="text-yellow">É SER FORTE</span>
              </h2>
              <p className="font-body text-foreground/70 leading-relaxed text-base">
                A Resiliente Slum — Favela Resiliente — nasceu da crença de que a periferia não é problema, é solução. Somos uma organização social criada por jovens da quebrada para jovens da quebrada.
              </p>
              <p className="font-body text-foreground/70 leading-relaxed text-base">
                Nossa missão é garantir que cada jovem periférico tenha acesso a oportunidades de educação, expressão cultural e desenvolvimento humano — transformando resiliência em protagonismo.
              </p>
              <p className="font-body text-foreground/70 leading-relaxed text-base">
                Não viemos de fora para "ajudar". Somos a favela ajudando a si mesma.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={aboutImg} alt="Nossa comunidade" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow p-6 font-display text-primary-foreground">
                <div className="text-5xl leading-none">12</div>
                <div className="text-xs tracking-widest mt-1">ANOS DE LUTA</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-body text-yellow text-xs uppercase tracking-[0.3em] block mb-2">O que acreditamos</span>
            <h2 className="font-display text-5xl text-foreground">NOSSOS VALORES</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border border-border p-8 bg-background hover:border-yellow transition-colors duration-300 group"
              >
                <v.icon className="text-yellow mb-6 w-8 h-8" />
                <h3 className="font-display text-2xl text-foreground mb-3">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-body text-yellow text-xs uppercase tracking-[0.3em] block mb-2">Nossa trajetória</span>
            <h2 className="font-display text-5xl text-foreground">HISTÓRIA</h2>
          </motion.div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-start gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-yellow -translate-x-1.5 mt-1.5" />

                  <div className={`pl-16 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="font-display text-yellow text-3xl mb-1">{item.year}</div>
                    <h3 className="font-display text-2xl text-foreground mb-2">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
