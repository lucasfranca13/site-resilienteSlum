import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { VideoPlayer } from "@/componentes/VideoPlayer";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/componentes/interface do usuario/carousel";
import heroBg from "@/ativos/foto-SlumNaRua.jpg";

// Carrega as fotos/vídeos otimizados de projetos-web. As imagens usam loading="lazy",
// e os vídeos só baixam ao dar play (preload="none" dentro do VideoPlayer).
const files = import.meta.glob("../ativos/projetos-web/**/*.{jpg,mp4}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

type Media = { images: string[]; video?: string; poster?: string };
const media: Record<string, Media> = {};
Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .forEach(([path, url]) => {
    const m = path.match(/projetos-web\/([^/]+)\/([^/]+)$/);
    if (!m) return;
    const [, slug, file] = m;
    (media[slug] ??= { images: [] });
    if (file.endsWith(".mp4")) media[slug].video = url;
    else if (file.startsWith("poster")) media[slug].poster = url;
    else media[slug].images.push(url);
  });

type Projeto = {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  highlights: string[];
};

const projetos: Projeto[] = [
  {
    slug: "futebol-criancas",
    tag: "Esporte",
    title: "Futebol com as Crianças",
    desc: "Mais do que aulas de futebol: um espaço para orientar as crianças da Ventosa e plantar valores que elas levam para a vida. Entre um drible e outro, aprendem a ganhar, a perder e a crescer juntas.",
    highlights: ["Respeito", "Disciplina", "Trabalho em equipe", "Orientação"],
  },
  {
    slug: "ifl-jovem",
    tag: "Educação",
    title: "Palestra IFL Jovem",
    desc: "Em parceria com o IFL Jovem BH, nossos jovens vivem um dia inteiro de imersão: palestras sobre liderança, empreendedorismo e tecnologia, dinâmicas e desafios. E porque conhecimento é poder, cada participante recebe um kit com livros e materiais de estudo — incentivo real à leitura e ao protagonismo.",
    highlights: ["Liderança", "Empreendedorismo", "Tecnologia", "Kit de livros"],
  },
  {
    slug: "slum-na-rua",
    tag: "Esporte",
    title: "Slum na Rua — Masculino e Feminino",
    desc: "O futebol de rua como ferramenta para unir e orientar a juventude. Antes de cada competição, realizamos palestras com convidados — um espaço de interação e conhecimento relevante para a vida. Dentro de campo todos são iguais; fora dele, todos saem transformados.",
    highlights: ["Futebol de rua", "Masculino e feminino", "Palestras", "Integração"],
  },
  {
    slug: "cras",
    tag: "Desenvolvimento",
    title: "Palestras no CRAS",
    desc: "Encontros dentro da própria comunidade da Ventosa, onde os jovens ampliam o repertório com temas que conversam com a vida real. Da história — que ajuda a entender o contexto social em que estão inseridos — a debates sobre o cotidiano urbano, tudo costurado por dinâmicas e muita troca.",
    highlights: ["História e cidadania", "Contexto social", "Dinâmicas", "Repertório de vida"],
  },
  {
    slug: "educacao-financeira",
    tag: "Capacitação",
    title: "Curso de Educação Financeira",
    desc: "Um curso de finanças pessoais pensado para a realidade da quebrada: como organizar o dinheiro, planejar objetivos e tomar decisões com mais consciência. Educação financeira também é liberdade.",
    highlights: ["Finanças pessoais", "Planejamento", "Consciência", "Autonomia"],
  },
  {
    slug: "empreendedorismo",
    tag: "Capacitação",
    title: "Curso de Empreendedorismo",
    desc: "Da ideia à ação: um curso para despertar o espírito empreendedor dos jovens, mostrando que é possível criar, inovar e gerar a própria renda mesmo diante das barreiras. Empreender também é resistir.",
    highlights: ["Mentalidade empreendedora", "Geração de renda", "Inovação", "Protagonismo"],
  },
  {
    slug: "maquiagem",
    tag: "Capacitação",
    title: "Curso de Maquiagem",
    desc: "Além de ensinar um ofício, o curso entrega aos participantes os materiais para continuarem praticando — abrindo a porta para uma nova fonte de renda e a chance de começar a empreender com o que aprenderam.",
    highlights: ["Ofício profissional", "Materiais inclusos", "Empreender", "Autoestima"],
  },
];

function ProjetoCarrossel({ m, tag }: { m: Media; tag: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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
    <div className="relative">
      {/* Acentos decorativos */}
      <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow/10 border border-yellow/30 hidden md:block" />
      <div className="absolute -bottom-4 -right-4 w-28 h-28 border-2 border-yellow/40 hidden md:block" />

      <Carousel setApi={setApi} opts={{ loop: true }} className="relative group">
        <CarouselContent className="ml-0">
          {m.video && (
            <CarouselItem className="pl-0">
              <div className="aspect-[4/3] bg-black overflow-hidden">
                <VideoPlayer src={m.video} poster={m.poster} active={current === 0} />
              </div>
            </CarouselItem>
          )}
          {m.images.map((img, i) => (
            <CarouselItem key={img} className="pl-0">
              <div className="aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={img}
                  alt={`${tag} — foto ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <span className="absolute top-5 left-5 z-10 font-body text-[11px] tracking-widest bg-yellow text-primary-foreground px-3 py-1">
          {tag}
        </span>
        <span className="absolute top-5 right-5 z-10 font-body text-[11px] tracking-widest bg-background/60 backdrop-blur px-2.5 py-1 text-foreground/90 tabular-nums">
          {current + 1}/{count}
        </span>

        <CarouselPrevious className="left-3 h-9 w-9 opacity-0 group-hover:opacity-100 transition-opacity bg-background/70 border-border text-foreground hover:bg-yellow hover:text-primary-foreground" />
        <CarouselNext className="right-3 h-9 w-9 opacity-0 group-hover:opacity-100 transition-opacity bg-background/70 border-border text-foreground hover:bg-yellow hover:text-primary-foreground" />
      </Carousel>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Ir para o slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-yellow" : "w-1.5 bg-border hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const Projetos = () => {
  return (
    <div className="min-h-screen bg-background grain-overlay">
      {/* Page header */}
      <div className="relative h-64 md:h-80 flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Projetos do Resiliente Slum" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        </div>
        <div className="relative container mx-auto px-6 z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-body text-yellow text-xs uppercase tracking-[0.3em] block mb-2">O que fazemos</span>
            <h1 className="font-display text-6xl md:text-8xl text-foreground">PROJETOS</h1>
          </motion.div>
        </div>
      </div>

      {/* Intro */}
      <section className="pt-16">
        <div className="container mx-auto px-6">
          <p className="font-body text-foreground/70 leading-relaxed max-w-2xl text-lg">
            Cada projeto que desenvolvemos ao longo da nossa história é prova de que a periferia produz talento. Passe pelas fotos e vídeos e veja, de perto, a transformação acontecendo na quebrada.
          </p>
        </div>
      </section>

      {/* Projetos — seções alternadas */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 space-y-24 md:space-y-36">
          {projetos.map((proj, i) => {
            const m = media[proj.slug];
            const numero = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={proj.slug}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-last" : ""
                }`}
              >
                {/* Carrossel de mídias do projeto */}
                {m && <ProjetoCarrossel m={m} tag={proj.tag} />}

                {/* Conteúdo */}
                <div className="relative">
                  <span className="pointer-events-none select-none absolute -top-16 md:-top-20 -right-2 font-display text-[120px] md:text-[160px] leading-none text-foreground/[0.04]">
                    {numero}
                  </span>
                  <div className="relative space-y-6">
                    <div>
                      <span className="font-body text-yellow text-xs uppercase tracking-[0.3em] block mb-3">
                        Projeto {numero} · {proj.tag}
                      </span>
                      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[0.95]">
                        {proj.title}
                      </h2>
                      <div className="w-16 h-1 bg-yellow mt-5" />
                    </div>

                    <p className="font-body text-foreground/70 leading-relaxed">{proj.desc}</p>

                    <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                      {proj.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2.5 font-body text-sm text-foreground/60">
                          <span className="w-1.5 h-1.5 bg-yellow flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contato"
                      className="inline-flex items-center gap-2 font-display text-sm tracking-widest text-yellow hover:text-yellow/80 transition-colors group pt-2"
                    >
                      QUERO PARTICIPAR
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

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
              QUER FAZER PARTE<br />
              <span className="text-yellow">DESSA HISTÓRIA?</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Seja como participante, voluntário ou parceiro: tem espaço pra você no Slum. Bora construir junto.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-yellow text-primary-foreground font-display tracking-widest px-10 py-4 text-base hover:bg-yellow/90 transition-colors"
            >
              FALE COM A GENTE <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projetos;
