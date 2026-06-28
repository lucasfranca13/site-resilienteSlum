import { motion } from "framer-motion";
import { Star, Crown, BookOpen, Lightbulb, Sprout, ExternalLink } from "lucide-react";
import { VideoPlayer } from "@/componentes/VideoPlayer";
import missaoImg from "@/ativos/sobre o Slum/missao-palestra.jpg";
import heroBg from "@/ativos/fotoSobre-superio.jpg";
import jornalBuritis from "@/ativos/sobre o Slum/materias/jornal-Buritis.jpg";
import alterosaVideo from "@/ativos/sobre o Slum/materias/alterosa-web.mp4";
import alterosaPoster from "@/ativos/sobre o Slum/materias/alterosa-poster.jpg";
import bhzVideo from "@/ativos/sobre o Slum/materias/bhz-web.mp4";
import bhzPoster from "@/ativos/sobre o Slum/materias/bhz-poster.jpg";

const valores = [
  { icon: Star, title: "Resiliência", desc: "Força para se adaptar e evoluir após a adversidade, transformando experiências negativas em aprendizado." },
  { icon: Crown, title: "Liderança", desc: "Domínio próprio para liderar primeiro a si mesmo e, a partir daí, servir o outro com o melhor que puder." },
  { icon: BookOpen, title: "Conhecimento é poder", desc: "A educação transforma e muda destinos — uma chave de acesso a lugares incríveis." },
  { icon: Lightbulb, title: "Criatividade", desc: "Ousadia e coragem para transformar o abstrato em ação e resolver qualquer tipo de problema." },
  { icon: Sprout, title: "Desenvolvimento Pessoal", desc: "Desenvolver as habilidades de cada pessoa para realizar metas e sonhos, com mais qualidade de vida." },
];

const hashtags = [
  { tag: "#AFavelaVive", desc: "Quando a favela vive, ela cresce. E se ela cresce, ela vence." },
  { tag: "#VamoQueVamo", desc: "Força para seguir em frente e coragem para enfrentar o novo." },
  { tag: "#AGenteNãoPara", desc: "Enquanto existir desigualdade, o exército do bem não vai parar." },
];

// Linha do tempo interina, baseada no PDF (fundação em 2019). Será refinada com o resumo enviado pelo cliente.
const timeline = [
  { year: "2019", title: "Nasce o Slum", desc: "Das palestras motivacionais em escolas públicas de BH ao sonho real: começa o Resiliente Slum, na favela da Ventosa." },
  { year: "2020", title: "Slum na Rua", desc: "O futebol de rua vira ferramenta de educação, integração e protagonismo da juventude periférica." },
  { year: "2021", title: "Pandemia Solidária", desc: "Ações emergenciais levam alimentos e esperança às famílias da Ventosa — história contada pela imprensa local." },
  { year: "2026", title: "Hoje", desc: "Atuando com crianças, adolescentes, jovens e suas famílias. Seguimos firmes: a gente não para." },
];

const materias = [
  {
    type: "video" as const,
    source: "TV Alterosa · Esporte (SBT)",
    title: "O Resiliente Slum no Alterosa Esporte",
    src: alterosaVideo,
    poster: alterosaPoster,
    vertical: false,
  },
  {
    type: "video" as const,
    source: "Portal BHZ",
    title: "Resiliente Slum vem viralizando nas redes",
    src: bhzVideo,
    poster: bhzPoster,
    vertical: true,
  },
  {
    type: "image" as const,
    source: "Jornal Buritis · jun/2021",
    title: "“Pandemia Solidária” leva esperança a famílias da Ventosa",
    src: jornalBuritis,
  },
];

function MateriaCard({ materia }: { materia: (typeof materias)[number] }) {
  return (
    <figure className="group">
      {materia.type === "video" ? (
        <div className={`border border-border ${materia.vertical ? "aspect-[9/16]" : "aspect-video"}`}>
          <VideoPlayer src={materia.src} poster={materia.poster} />
        </div>
      ) : (
        <a
          href={materia.src}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block overflow-hidden bg-black border border-border aspect-[3/4]"
        >
          <img src={materia.src} alt={materia.title} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
          <span className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="font-body text-xs text-foreground uppercase tracking-widest flex items-center gap-1.5">
              <ExternalLink size={14} className="text-yellow" /> Ler matéria
            </span>
          </span>
        </a>
      )}
      <figcaption className="mt-3">
        <span className="font-body text-[11px] uppercase tracking-[0.2em] text-yellow">{materia.source}</span>
        <p className="font-body text-sm text-foreground/80 leading-snug mt-1">{materia.title}</p>
      </figcaption>
    </figure>
  );
}

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background grain-overlay">
      {/* Page header */}
      <div className="relative h-64 md:h-80 flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Jovens do Resiliente Slum erguendo o troféu" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        </div>
        <div className="relative container mx-auto px-6 z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-body text-yellow text-xs uppercase tracking-[0.3em] block mb-2">Conheça nossa história</span>
            <h1 className="font-display text-6xl md:text-8xl text-foreground">SOBRE NÓS</h1>
          </motion.div>
        </div>
      </div>

      {/* Missão / Quem somos */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="font-body text-yellow text-xs uppercase tracking-[0.3em]">Quem é o Slum</span>
              <h2 className="font-display text-5xl text-foreground leading-tight">
                SER DA FAVELA<br />
                <span className="text-yellow">É SER FORTE</span>
              </h2>
              <p className="font-body text-foreground/70 leading-relaxed text-base">
                Somos o Resiliente Slum, uma organização social que atua com crianças, jovens e suas famílias dentro da favela da Ventosa, na região Oeste de Belo Horizonte. Unimos educação, esporte e cultura para oferecer experiências de desenvolvimento pessoal, orientação e acompanhamento especializado.
              </p>
              <p className="font-body text-foreground/70 leading-relaxed text-base">
                Acreditamos que cada jovem pode se perceber como sujeito livre, com direitos e deveres — autor e protagonista da própria história — e não estar fadado a viver de acordo com as vulnerabilidades em que se encontra.
              </p>
              <p className="font-body text-foreground/70 leading-relaxed text-base">
                Valorizamos a leitura, a liderança e o desenvolvimento pessoal, mostrando à juventude periférica que ela pode ir em busca de um futuro cada vez melhor.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={missaoImg} alt="Encontro do Resiliente Slum na comunidade" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow p-6 font-display text-primary-foreground">
                <div className="text-5xl leading-none">7</div>
                <div className="text-xs tracking-widest mt-1">ANOS DE HISTÓRIA</div>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {valores.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="border border-border p-6 bg-background hover:border-yellow transition-colors duration-300"
              >
                <v.icon className="text-yellow mb-5 w-7 h-7" />
                <h3 className="font-display text-xl text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hashtags */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {hashtags.map((h, i) => (
              <motion.div
                key={h.tag}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <p className="font-display text-3xl md:text-4xl text-yellow tracking-wide">{h.tag}</p>
                <p className="font-body text-sm text-muted-foreground mt-2 max-w-xs mx-auto">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-surface">
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

      {/* Na mídia */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-body text-yellow text-xs uppercase tracking-[0.3em] block mb-2">O que falam de nós</span>
            <h2 className="font-display text-5xl text-foreground">NA MÍDIA</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-6">
              <MateriaCard materia={materias[0]} />
              <MateriaCard materia={materias[2]} />
            </div>
            <MateriaCard materia={materias[1]} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
