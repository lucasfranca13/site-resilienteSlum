import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, Package, Megaphone, HandHeart, CalendarDays, X, ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/ativos/240656050_269393144774253_1720218614709911459_n.jpg";
import aboutImg from "@/ativos/240656050_269393144774253_1720218614709911459_n.jpg";
import projetoCultura from "@/ativos/240656050_269393144774253_1720218614709911459_n.jpg";
import projetoEsporte from "@/ativos/240656050_269393144774253_1720218614709911459_n.jpg";
import projetoTech from "@/ativos/240656050_269393144774253_1720218614709911459_n.jpg";

const acoes = [
  {
    icon: Package,
    title: "Distribuição de Cestas Básicas",
    desc: "Realizamos entregas regulares de cestas básicas para famílias em situação de vulnerabilidade. Cada entrega é um ato de solidariedade que garante alimentação digna para quem mais precisa na comunidade.",
    stats: { label: "Famílias atendidas", value: "200+" },
    tag: "Mensal",
    photos: [heroBg, aboutImg, projetoCultura],
  },
  {
    icon: Users,
    title: "Mutirões de Limpeza Comunitária",
    desc: "Organizamos mutirões nos becos, vielas e espaços comuns da comunidade. Mais do que limpar, é um momento de união entre moradores — cuidar do nosso território é um ato de resistência.",
    stats: { label: "Mutirões realizados", value: "35+" },
    tag: "Bimestral",
    photos: [projetoEsporte, heroBg],
  },
  {
    icon: Heart,
    title: "Campanha do Agasalho",
    desc: "Todo inverno mobilizamos a comunidade e parceiros para arrecadar agasalhos, cobertores e roupas. O frio não espera, e a gente também não. Cada peça doada aquece um corpo e um coração.",
    stats: { label: "Peças arrecadadas", value: "3.000+" },
    tag: "Anual",
    photos: [aboutImg, projetoTech],
  },
  {
    icon: CalendarDays,
    title: "Festa Junina & Eventos Comunitários",
    desc: "Promovemos festas e eventos culturais que fortalecem os laços da comunidade. Festa junina, dia das crianças, natal solidário — momentos de alegria que mostram que a periferia também celebra.",
    stats: { label: "Pessoas impactadas", value: "500+" },
    tag: "Sazonal",
    photos: [projetoCultura, projetoEsporte, heroBg],
  },
  {
    icon: Megaphone,
    title: "Rodas de Conversa & Conscientização",
    desc: "Espaços de diálogo sobre saúde mental, direitos, educação financeira e cidadania. A informação é poder, e levar conhecimento para dentro da comunidade é transformar realidades.",
    stats: { label: "Encontros realizados", value: "50+" },
    tag: "Quinzenal",
    photos: [projetoTech, aboutImg],
  },
  {
    icon: HandHeart,
    title: "Apoio a Famílias em Situação de Emergência",
    desc: "Quando acontecem enchentes, incêndios ou outras emergências, a Resilienteslum está presente. Articulamos doações, abrigo temporário e suporte emocional para quem perdeu tudo.",
    stats: { label: "Famílias apoiadas", value: "80+" },
    tag: "Sob demanda",
    photos: [heroBg, projetoCultura],
  },
];

const Galeria = () => {
  const [lightbox, setLightbox] = useState<{ photos: string[]; index: number } | null>(null);

  const openLightbox = (photos: string[], index: number) => {
    setLightbox({ photos, index });
  };

  const navigateLightbox = (dir: 1 | -1) => {
    if (!lightbox) return;
    const next = (lightbox.index + dir + lightbox.photos.length) % lightbox.photos.length;
    setLightbox({ ...lightbox, index: next });
  };

  return (
    <div className="min-h-screen bg-background grain-overlay">
      {/* Hero */}
      <div className="relative h-64 md:h-80 flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Nossas Ações" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        </div>
        <div className="relative container mx-auto px-6 z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-body text-yellow text-xs uppercase tracking-[0.3em] block mb-2">
              Impacto real na comunidade
            </span>
            <h1 className="font-display text-6xl md:text-8xl text-foreground">NOSSAS AÇÕES</h1>
          </motion.div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-foreground/70 text-lg leading-relaxed"
          >
            Além dos projetos voltados para a juventude, a <span className="text-yellow font-medium">Resilienteslum</span> atua
            diretamente na comunidade com ações sociais que impactam centenas de famílias. Cada ação nasce da necessidade real
            de quem vive na periferia.
          </motion.p>
        </div>
      </section>

      {/* Actions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {acoes.map((acao, i) => {
              const Icon = acao.icon;
              return (
                <motion.div
                  key={acao.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i % 2 === 1 ? 0.1 : 0 }}
                  className={`group relative bg-card border border-border overflow-hidden hover:border-yellow/40 transition-all duration-500 ${
                    i % 2 === 1 ? "md:translate-y-12" : ""
                  }`}
                >
                  {/* Photo strip */}
                  <div className="flex h-48 overflow-hidden">
                    {acao.photos.map((photo, pi) => (
                      <button
                        key={pi}
                        onClick={() => openLightbox(acao.photos, pi)}
                        className="relative flex-1 min-w-0 overflow-hidden cursor-pointer"
                      >
                        <img
                          src={photo}
                          alt={`${acao.title} - foto ${pi + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-background/0 hover:bg-background/30 transition-colors duration-300" />
                        {pi < acao.photos.length - 1 && (
                          <div className="absolute right-0 top-0 bottom-0 w-px bg-background/40" />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10">
                    {/* Top row: icon + tag */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-yellow/10 flex items-center justify-center group-hover:bg-yellow/20 transition-colors duration-300">
                        <Icon className="w-7 h-7 text-yellow" />
                      </div>
                      <span className="font-display text-[11px] tracking-[0.2em] text-muted-foreground border border-border px-3 py-1">
                        {acao.tag.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                      {acao.title.toUpperCase()}
                    </h3>

                    <p className="font-body text-sm text-foreground/60 leading-relaxed mb-8">
                      {acao.desc}
                    </p>

                    {/* Stats bar */}
                    <div className="border-t border-border pt-5 flex items-center gap-3">
                      <span className="font-display text-3xl text-yellow">{acao.stats.value}</span>
                      <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                        {acao.stats.label}
                      </span>
                    </div>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow group-hover:w-full transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact summary */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-yellow text-xs uppercase tracking-[0.3em] block mb-2">Nosso impacto</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground">NÚMEROS QUE FALAM</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "200+", label: "Famílias atendidas" },
              { value: "35+", label: "Mutirões realizados" },
              { value: "3.000+", label: "Itens doados" },
              { value: "500+", label: "Pessoas impactadas" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center py-8"
              >
                <span className="font-display text-5xl md:text-6xl text-yellow block">{stat.value}</span>
                <span className="font-body text-xs text-muted-foreground uppercase tracking-wider mt-2 block">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-foreground/60 hover:text-yellow transition-colors"
            >
              <X size={32} />
            </button>

            {lightbox.photos.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                  className="absolute left-4 md:left-8 text-foreground/60 hover:text-yellow transition-colors"
                >
                  <ChevronLeft size={40} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                  className="absolute right-4 md:right-8 text-foreground/60 hover:text-yellow transition-colors"
                >
                  <ChevronRight size={40} />
                </button>
              </>
            )}

            <motion.div
              key={lightbox.index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.photos[lightbox.index]}
                alt="Registro da ação"
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-center">
                <span className="font-body text-sm text-muted-foreground">
                  {lightbox.index + 1} / {lightbox.photos.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galeria;
