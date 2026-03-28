import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Youtube, Send, CheckCircle } from "lucide-react";
import heroBg from "@/ativos/hero-bg.jpg";

const Contato = () => {
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  return (
    <div className="min-h-screen bg-background grain-overlay">
      {/* Page header */}
      <div className="relative h-64 md:h-80 flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Contato" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        </div>
        <div className="relative container mx-auto px-6 z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-body text-yellow text-xs uppercase tracking-[0.3em] block mb-2">Fale com a gente</span>
            <h1 className="font-display text-6xl md:text-8xl text-foreground">CONTATO</h1>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <span className="font-body text-yellow text-xs uppercase tracking-[0.3em] block mb-3">Vamos conversar</span>
                <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-4">
                  A QUEBRADA<br />
                  <span className="text-yellow">ESTÁ ABERTA</span>
                </h2>
                <p className="font-body text-foreground/70 leading-relaxed">
                  Quer apoiar o projeto, participar como voluntário, fechar uma parceria ou só tirar uma dúvida? Manda a mensagem — respondemos rapidinho.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-display text-sm tracking-widest text-foreground mb-1">LOCALIZAÇÃO</div>
                    <div className="font-body text-sm text-muted-foreground">Ventosa - Belo Horizonte, MG — Brasil</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-display text-sm tracking-widest text-foreground mb-1">TELEFONE / WHATSAPP</div>
                    <a href="tel:+5511999999999" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                      (11) 99999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-display text-sm tracking-widest text-foreground mb-1">EMAIL</div>
                    <a href="mailto:contato@resilienteslum.org" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                      contato@resilienteslum.org
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="font-display text-sm tracking-widest text-foreground mb-4">NAS REDES</div>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-border px-4 py-2.5 text-muted-foreground hover:text-yellow hover:border-yellow transition-colors font-body text-sm"
                  >
                    <Instagram size={16} /> Instagram
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-border px-4 py-2.5 text-muted-foreground hover:text-yellow hover:border-yellow transition-colors font-body text-sm"
                  >
                    <Youtube size={16} /> YouTube
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center gap-6 border border-yellow/30 bg-yellow/5 p-12"
                >
                  <CheckCircle className="text-yellow w-16 h-16" />
                  <div>
                    <h3 className="font-display text-3xl text-foreground mb-2">MENSAGEM ENVIADA!</h3>
                    <p className="font-body text-muted-foreground">Obrigado pelo contato. Retornaremos em breve.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-display text-xs tracking-widest text-muted-foreground">NOME</label>
                      <input
                        type="text"
                        required
                        value={form.nome}
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                        placeholder="Seu nome"
                        className="w-full bg-surface border border-border text-foreground font-body text-sm px-4 py-3 outline-none focus:border-yellow transition-colors placeholder:text-muted-foreground/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-display text-xs tracking-widest text-muted-foreground">EMAIL</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="seu@email.com"
                        className="w-full bg-surface border border-border text-foreground font-body text-sm px-4 py-3 outline-none focus:border-yellow transition-colors placeholder:text-muted-foreground/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-display text-xs tracking-widest text-muted-foreground">ASSUNTO</label>
                    <select
                      required
                      value={form.assunto}
                      onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                      className="w-full bg-surface border border-border text-foreground font-body text-sm px-4 py-3 outline-none focus:border-yellow transition-colors"
                    >
                      <option value="" className="bg-surface text-muted-foreground">Selecione um assunto</option>
                      <option value="voluntario" className="bg-surface">Quero ser voluntário(a)</option>
                      <option value="parceria" className="bg-surface">Proposta de parceria</option>
                      <option value="doacao" className="bg-surface">Quero apoiar financeiramente</option>
                      <option value="participar" className="bg-surface">Quero participar dos projetos</option>
                      <option value="imprensa" className="bg-surface">Imprensa / Mídia</option>
                      <option value="outro" className="bg-surface">Outro</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-display text-xs tracking-widest text-muted-foreground">MENSAGEM</label>
                    <textarea
                      required
                      rows={6}
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      placeholder="Conta pra gente..."
                      className="w-full bg-surface border border-border text-foreground font-body text-sm px-4 py-3 outline-none focus:border-yellow transition-colors placeholder:text-muted-foreground/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-yellow text-primary-foreground font-display tracking-widest py-4 text-base hover:bg-yellow/90 transition-colors"
                  >
                    ENVIAR MENSAGEM <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
