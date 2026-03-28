import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/ativos/Design sem nome.png";
import aboutImg from "@/ativos/sobre.jpg";
import projetoCultura from "@/ativos/fotoHome-Curso.jpg";
import projetoEsporte from "@/ativos/foto-SlumNaRua.jpg";
import projetoDesenvolvimento from "@/ativos/fotoHome-educacao.jpg";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function ImpactCard({ label, value, suffix = "+" }: { label: string; value: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center group">
      <div className="font-display text-7xl md:text-8xl text-yellow leading-none tracking-tight">
        {count}{suffix}
      </div>
      <div className="font-body text-sm text-muted-foreground mt-2 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const projects = [
  { title: "Slum na Rua", desc: "Futebol na rua como ferramenta de integração, orientação e desenvolvimento de jovens da periferia.", img: projetoEsporte, tag: "Esporte" },
  { title: "Capacitação", desc: "Ao longo da nossa trajetória, já oferecemos cursos de finanças, maquiagem, marketing digital e outras capacitações.", img: projetoCultura, tag: "Educação" },
  { title: "Desenvolvimento Pessoal", desc: "Procuramos criar ambientes de desenvolvimento para os jovens, com eventos e palestras que os ajudem a explorar seu potencial.", img: projetoDesenvolvimento, tag: "Desenvolvimento" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background grain-overlay">
      {/* ─── HERO ─── */}
      <section className="relative h-screen min-h-[600px] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Jovens da Favela Resiliente" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
        </div>

        <div className="relative container mx-auto px-6 z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p
              variants={fadeUp}
              className="font-body text-yellow text-sm uppercase tracking-[0.3em] mb-4"
            >
              Favela Resiliente
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-6xl md:text-8xl lg:text-[120px] leading-none tracking-wide text-foreground mb-6"
            >
              RESILIENTE<br />
              <span className="text-stroke-yellow">SLUM</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-body text-base md:text-lg text-foreground/70 max-w-lg mb-8"
            >
              Transformando a periferia através da educação, cultura e esporte. Porque ser da favela é ser forte.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 bg-yellow text-primary-foreground font-display tracking-widest px-8 py-4 text-sm hover:bg-yellow/90 transition-colors duration-200"
              >
                NOSSOS PROJETOS <ArrowRight size={16} />
              </Link>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 border border-foreground/30 text-foreground font-display tracking-widest px-8 py-4 text-sm hover:border-yellow hover:text-yellow transition-colors duration-200"
              >
                CONHEÇA A GENTE
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground animate-bounce">
          <ChevronDown size={20} />
        </div>
      </section>

      {/* ─── IMPACTO ─── */}
      <section className="py-20 border-y border-border bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            <ImpactCard value={500} label="Jovens Atendidos" />
            <ImpactCard value={7} label="Anos de Atuação" suffix="" />
            <ImpactCard value={30} label="Projetos Realizados" />
            <ImpactCard value={10} label="Parceiros" />
          </div>
        </div>
      </section>

      {/* ─── SOBRE ─── */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={aboutImg} alt="Sobre o projeto" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent" />
              </div>
              {/* Yellow accent corner */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-yellow opacity-60" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow/10 border border-yellow/30" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <span className="font-body text-yellow text-xs uppercase tracking-[0.3em]">Quem somos</span>
              <h2 className="font-display text-5xl md:text-6xl leading-tight text-foreground">
                NASCEMOS DA<br />
                <span className="text-yellow">QUEBRADA</span>
              </h2>
              <p className="font-body text-foreground/70 leading-relaxed">
                Somos o Resiliente Slum, organização que visa desenvolver o potencial ilimitado dos jovens e suas famílias. Atuamos com educação, esporte, cultura, empreendedorismo e desenvolvimento pessoal.
              </p>
              <p className="font-body text-foreground/70 leading-relaxed">
                Trabalhamos para que o jovem se perceba como sujeito livre, com direitos e deveres, podendo ser autor e protagonista da sua história e ir em busca de um futuro cada vez melhor.
              </p>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 font-display text-sm tracking-widest text-yellow hover:text-yellow/80 transition-colors group"
              >
                NOSSA HISTÓRIA <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PROJETOS ─── */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
          >
            <div>
              <span className="font-body text-yellow text-xs uppercase tracking-[0.3em] block mb-2">O que fazemos</span>
              <h2 className="font-display text-5xl md:text-6xl text-foreground">NOSSOS PROJETOS</h2>
            </div>
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 font-display text-sm tracking-widest text-yellow hover:text-yellow/80 transition-colors group"
            >
              VER TODOS <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="group relative overflow-hidden cursor-pointer hover-lift"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block font-body text-xs text-primary-foreground bg-yellow px-2 py-1 mb-3 tracking-widest">
                    {proj.tag}
                  </span>
                  <h3 className="font-display text-2xl text-foreground mb-2">{proj.title}</h3>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed">{proj.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEPOIMENTOS ─── */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-body text-yellow text-xs uppercase tracking-[0.3em] block mb-2">Vozes da quebrada</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground">DEPOIMENTOS</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Lucas Silva", age: "17 anos", text: "O projeto mudou minha vida. Hoje eu sei programar e tenho um futuro pela frente que antes eu não conseguia enxergar.", tag: "Tech" },
              { name: "Ana Beatriz", age: "15 anos", text: "Nas oficinas de arte eu descobri que minha voz importa. Agora uso o grafite pra contar a história da minha comunidade.", tag: "Arte" },
              { name: "Carlos Eduardo", age: "19 anos", text: "O esporte me tirou da rua e me deu disciplina. Hoje sou instrutor e ajudo outros jovens a encontrarem o caminho deles.", tag: "Esporte" },
            ].map((dep, i) => (
              <motion.div
                key={dep.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="border border-border p-8 relative group hover:border-yellow/40 transition-colors duration-300"
              >
                <div className="absolute top-6 left-8 font-display text-6xl text-yellow/15 leading-none select-none">"</div>
                <p className="font-body text-foreground/70 leading-relaxed relative z-10 mt-6 mb-6">
                  {dep.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow/20 border border-yellow/30 flex items-center justify-center font-display text-yellow text-sm">
                    {dep.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-sm text-foreground tracking-wide">{dep.name}</p>
                    <p className="font-body text-xs text-muted-foreground">{dep.age} · {dep.tag}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FAIXA ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow" />
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative container mx-auto px-6 text-center"
        >
          <h2 className="font-display text-5xl md:text-7xl text-primary-foreground mb-6">
            FAÇA PARTE DA<br />MUDANÇA
          </h2>
          <p className="font-body text-primary-foreground/80 max-w-xl mx-auto mb-10 text-lg">
            Apoie o projeto e ajude a transformar a realidade de centenas de jovens da periferia.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/doacoes"
              className="inline-flex items-center gap-2 bg-primary-foreground text-yellow font-display tracking-widest px-10 py-4 text-base hover:bg-primary-foreground/90 transition-colors"
            >
              QUERO APOIAR <ArrowRight size={18} />
            </Link>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground font-display tracking-widest px-10 py-4 text-base hover:bg-primary-foreground/10 transition-colors"
            >
              SAIBA MAIS
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
