import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Send, CheckCircle } from "lucide-react";
import heroBg from "@/ativos/contato-hero.jpg";

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
                    <a
                      href="https://wa.me/5531986575234"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      (31) 9 8657-5234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-display text-sm tracking-widest text-foreground mb-1">EMAIL</div>
                    <a href="mailto:resilienteslum@gmail.com" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                      resilienteslum@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="font-display text-sm tracking-widest text-foreground mb-4">NAS REDES</div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.instagram.com/resilienteslum/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-border px-4 py-2.5 text-muted-foreground hover:text-yellow hover:border-yellow transition-colors font-body text-sm"
                  >
                    <Instagram size={16} /> Instagram
                  </a>
                  <a
                    href="https://wa.me/5531986575234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-border px-4 py-2.5 text-muted-foreground hover:text-yellow hover:border-yellow transition-colors font-body text-sm"
                  >
                    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.911zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href="mailto:resilienteslum@gmail.com"
                    className="flex items-center gap-2 border border-border px-4 py-2.5 text-muted-foreground hover:text-yellow hover:border-yellow transition-colors font-body text-sm"
                  >
                    <Mail size={16} /> E-mail
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
