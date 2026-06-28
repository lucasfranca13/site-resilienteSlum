import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Gift, Egg, ShoppingBasket, CreditCard, Palette, Smile, Images, ArrowRight, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/componentes/interface do usuario/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/componentes/interface do usuario/dialog";
import heroBg from "@/ativos/acoes-web/dia-das-criancas/03.jpg";

// Fotos otimizadas das ações (Hope Slum), agrupadas por pasta.
const files = import.meta.glob("../ativos/acoes-web/**/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const media: Record<string, string[]> = {};
Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .forEach(([path, url]) => {
    const m = path.match(/acoes-web\/([^/]+)\/([^/]+)$/);
    if (!m) return;
    (media[m[1]] ??= []).push(url);
  });

type Acao = {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  icon: typeof Gift;
  cover: number;
};

const acoes: Acao[] = [
  {
    slug: "dia-das-criancas",
    tag: "Crianças",
    title: "Dia das Crianças na Favela",
    desc: "Um dia inteiro de alegria para a criançada da Ventosa: brincadeiras, presentes e muito afeto. Porque toda criança merece viver a infância com leveza, mesmo onde a vida costuma ser dura.",
    icon: Smile,
    cover: 2,
  },
  {
    slug: "natal",
    tag: "Natal",
    title: "Ação de Natal",
    desc: "No fim do ano, levamos presentes e carinho para famílias da comunidade. Um Natal mais quente para quem nem sempre tem o que comemorar — porque ninguém deveria passar a data com as mãos vazias.",
    icon: Gift,
    cover: 0,
  },
  {
    slug: "pascoa",
    tag: "Páscoa",
    title: "Páscoa Solidária",
    desc: "Na Páscoa, a doçura também chega à quebrada: distribuímos chocolates e ovos para as crianças e famílias da Ventosa, transformando a data em um momento de partilha e sorriso.",
    icon: Egg,
    cover: 2,
  },
  {
    slug: "cesta-basica",
    tag: "Solidariedade",
    title: "Entrega de Cesta Básica",
    desc: "Mapeamos as famílias em maior vulnerabilidade e levamos cestas básicas até suas casas. Alimento na mesa é o mínimo para se ter dignidade — e é por esse mínimo que a gente não para.",
    icon: ShoppingBasket,
    cover: 0,
  },
  {
    slug: "cartao-alimentacao",
    tag: "Solidariedade",
    title: "Cartão Alimentação",
    desc: "Com a ajuda de apoiadores, entregamos cartões-alimentação que dão autonomia para as famílias escolherem o que mais precisam. Ajuda com respeito, do jeito que tem que ser.",
    icon: CreditCard,
    cover: 1,
  },
  {
    slug: "cultura-arte",
    tag: "Cultura",
    title: "Cultura e Arte",
    desc: "Em parceria com a Rede Solidária, levamos arte e cor para os muros da Ventosa. Pintar a favela é afirmar que a periferia é potência, beleza e identidade.",
    icon: Palette,
    cover: 0,
  },
];

function AcaoCarrossel({ images, startIndex }: { images: string[]; startIndex: number }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(startIndex);
  const [count, setCount] = useState(images.length);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <div className="relative bg-black">
      <Carousel setApi={setApi} opts={{ loop: true, startIndex }} className="group">
        <CarouselContent className="ml-0">
          {images.map((img, i) => (
            <CarouselItem key={img} className="pl-0">
              <div className="h-[56vh] max-h-[540px] flex items-center justify-center bg-black">
                <img src={img} alt={`Registro da ação ${i + 1}`} loading="lazy" className="max-h-full max-w-full object-contain" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 h-9 w-9 bg-background/70 border-border text-foreground hover:bg-yellow hover:text-primary-foreground" />
        <CarouselNext className="right-3 h-9 w-9 bg-background/70 border-border text-foreground hover:bg-yellow hover:text-primary-foreground" />
        <span className="absolute top-4 right-4 z-10 font-body text-[11px] tracking-widest bg-background/60 backdrop-blur px-2.5 py-1 text-foreground/90 tabular-nums">
          {current + 1}/{count}
        </span>
      </Carousel>
      <div className="flex justify-center gap-2 py-4 bg-surface">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Ir para a foto ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-yellow" : "w-1.5 bg-border hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const Acoes = () => {
  const [ativo, setAtivo] = useState<string | null>(null);
  const acaoAtiva = acoes.find((a) => a.slug === ativo) ?? null;

  return (
    <div className="min-h-screen bg-background grain-overlay">
      {/* Hero */}
      <div className="relative h-64 md:h-80 flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Ações sociais do Resiliente Slum" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        </div>
        <div className="relative container mx-auto px-6 z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-body text-yellow text-xs uppercase tracking-[0.3em] block mb-2">Hope Slum · ação social</span>
            <h1 className="font-display text-6xl md:text-8xl text-foreground">AÇÕES</h1>
          </motion.div>
        </div>
      </div>

      {/* Intro — o que é o Hope Slum */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-8 md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-5">
              O QUE É O <span className="text-yellow">HOPE SLUM</span>
            </h2>
            <p className="font-body text-foreground/70 text-lg leading-relaxed">
              O Hope Slum é o braço de ação social do Resiliente Slum. São ações pontuais que levam
              dignidade, afeto e esperança às famílias da Ventosa: a partir de um mapeamento das principais
              demandas da comunidade, e com o apoio de parceiros e voluntários, chegamos com alimentos,
              presentes e cultura até a porta de quem mais precisa. Cuidar da favela é cuidar de quem vive nela.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-yellow"
          >
            <HandHeart className="w-10 h-10 flex-shrink-0" strokeWidth={1.5} />
            <span className="font-display text-2xl leading-tight text-foreground/90">
              #AGenteNãoPara
            </span>
          </motion.div>
        </div>
      </section>

      {/* Grid de ações */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {acoes.map((acao, i) => {
              const imgs = media[acao.slug] ?? [];
              const cover = imgs[acao.cover] ?? imgs[0];
              const Icon = acao.icon;
              return (
                <motion.button
                  key={acao.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                  onClick={() => setAtivo(acao.slug)}
                  className="group relative overflow-hidden border border-border text-left aspect-[4/5]"
                >
                  {cover && (
                    <img
                      src={cover}
                      alt={acao.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                  <span className="absolute top-4 left-4 font-body text-[11px] tracking-widest bg-yellow text-primary-foreground px-3 py-1">
                    {acao.tag}
                  </span>
                  <span className="absolute top-4 right-4 flex items-center gap-1.5 text-foreground/85 text-[11px] font-body bg-background/50 backdrop-blur px-2 py-1">
                    <Images size={12} className="text-yellow" />
                    {imgs.length}
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Icon className="w-7 h-7 text-yellow mb-3" strokeWidth={1.75} />
                    <h3 className="font-display text-2xl text-foreground leading-tight">{acao.title}</h3>
                    <span className="mt-2 inline-flex items-center gap-1.5 font-body text-xs tracking-widest text-yellow opacity-0 group-hover:opacity-100 transition-opacity">
                      VER AÇÃO <ArrowRight size={13} />
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow group-hover:w-full transition-all duration-500" />
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal de galeria */}
      <Dialog open={!!ativo} onOpenChange={(o) => !o && setAtivo(null)}>
        <DialogContent className="max-w-3xl bg-surface border-border p-0 overflow-hidden max-h-[92vh] overflow-y-auto">
          {acaoAtiva && (
            <>
              <AcaoCarrossel images={media[acaoAtiva.slug] ?? []} startIndex={acaoAtiva.cover} />
              <div className="p-6 md:p-8">
                <span className="font-body text-[11px] uppercase tracking-[0.3em] text-yellow">{acaoAtiva.tag}</span>
                <DialogTitle className="font-display text-3xl md:text-4xl text-foreground mt-1">
                  {acaoAtiva.title}
                </DialogTitle>
                <DialogDescription className="font-body text-foreground/70 leading-relaxed mt-4 text-base">
                  {acaoAtiva.desc}
                </DialogDescription>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display text-5xl text-foreground">
              SUA AJUDA VIRA<br />
              <span className="text-yellow">AÇÃO NA QUEBRADA</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Cada cesta, cada presente, cada lata de tinta nasce de quem decide ajudar. Apoie o Hope Slum e caminhe com a gente.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/doacoes"
                className="inline-flex items-center gap-2 bg-yellow text-primary-foreground font-display tracking-widest px-10 py-4 text-base hover:bg-yellow/90 transition-colors"
              >
                QUERO APOIAR <ArrowRight size={18} />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 border border-foreground/30 text-foreground font-display tracking-widest px-10 py-4 text-base hover:border-yellow hover:text-yellow transition-colors"
              >
                SER VOLUNTÁRIO
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Acoes;
