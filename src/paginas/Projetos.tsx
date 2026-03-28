import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import projetoCultura from "@/ativos/projeto-cultura.jpg";
import projetoEsporte from "@/ativos/projeto-esporte.jpg";
import projetoTech from "@/ativos/projeto-tech.jpg";
import heroBg from "@/ativos/hero-bg.jpg";

const projetos = [
  {
    tag: "Arte",
    title: "Cultura & Arte",
    subtitle: "Expressão sem fronteiras",
    desc: "Oficinas semanais de grafite, música, dança e fotografia. A arte é nossa língua e as paredes da favela são nossa tela. Aqui, qualquer jovem pode se expressar e encontrar seu caminho.",
    img: projetoCultura,
    items: ["Grafite e street art", "Produção musical", "Fotografia urbana", "Dança e expressão corporal"],
    color: "from-yellow/20 to-transparent",
  },
  {
    tag: "Esporte",
    title: "Esporte na Quebrada",
    subtitle: "Disciplina que transforma",
    desc: "O esporte como ferramenta de desenvolvimento social. Futebol de rua, basquete 3x3, capoeira e lutas. Além do jogo, trabalhamos liderança, trabalho em equipe e saúde mental.",
    img: projetoEsporte,
    items: ["Futebol e futsal", "Basquete de rua", "Capoeira", "Artes marciais"],
    color: "from-foreground/10 to-transparent",
  },
  {
    tag: "Tecnologia",
    title: "Tech da Favela",
    subtitle: "O futuro é nosso",
    desc: "Programação, design digital e empreendedorismo para jovens que querem transformar o futuro. Porque tecnologia não é só pro rico — é uma ferramenta de libertação.",
    img: projetoTech,
    items: ["Programação web", "Design gráfico", "Empreendedorismo digital", "Cursos e certificações"],
    color: "from-yellow/10 to-transparent",
  },
];

const Projetos = () => {
  return (
    <div className="min-h-screen bg-background grain-overlay">
      {/* Page header */}
      <div className="relative h-64 md:h-80 flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Projetos" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        </div>
        <div className="relative container mx-auto px-6 z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-body text-yellow text-xs uppercase tracking-[0.3em] block mb-2">O que fazemos</span>
            <h1 className="font-display text-6xl md:text-8xl text-foreground">PROJETOS</h1>
          </motion.div>
        </div>
      </div>

      {/* Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6 space-y-32">
          {projetos.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-last" : ""}`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden group">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${proj.color}`} />
                <span className="absolute top-6 left-6 font-display text-sm tracking-widest bg-yellow text-primary-foreground px-4 py-2">
                  {proj.tag}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <span className="font-body text-yellow text-xs uppercase tracking-[0.3em] block mb-2">{proj.subtitle}</span>
                  <h2 className="font-display text-5xl text-foreground leading-tight">{proj.title}</h2>
                </div>
                <p className="font-body text-foreground/70 leading-relaxed">{proj.desc}</p>
                <ul className="space-y-2">
                  {proj.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-body text-sm text-foreground/60">
                      <span className="w-1.5 h-1.5 bg-yellow flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 font-display text-sm tracking-widest text-yellow hover:text-yellow/80 transition-colors group"
                >
                  PARTICIPAR <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
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
              QUER CRIAR UM<br />
              <span className="text-yellow">NOVO PROJETO?</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Tem uma ideia para transformar a comunidade? Entre em contato e vamos construir juntos.
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
