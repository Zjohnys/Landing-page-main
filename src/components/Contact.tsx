import { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const metaItems = [
  { icon: '📧', label: 'E-mail', value: 'contato@nexastock.com.br' },
  { icon: '📞', label: 'Telefone', value: '(11) 9 9999-0000' },
  { icon: '📍', label: 'Localização', value: 'Brasil — Atendimento remoto' },
];

interface FormState {
  nome: string;
  email: string;
  mensagem: string;
}

const EMPTY: FormState = { nome: '', email: '', mensagem: '' };

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setForm(EMPTY);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="contact" id="contato">
      <div className="container">
        <div className="contact-grid">
          {/* Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-header section-header--left">
              <span className="section-tag">Contato</span>
              <h2 className="section-title">Vamos conversar?</h2>
            </div>

            <p>
              Respondemos em até 1 dia útil. Estamos prontos para ajudar o seu negócio
              a crescer com organização e tecnologia.
            </p>

            <div className="contact-meta">
              {metaItems.map(item => (
                <div className="meta-item" key={item.label}>
                  <div className="meta-icon">{item.icon}</div>
                  <div className="meta-text">
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="contact-form-card">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    className="form-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="success-icon">✅</span>
                    <h3>Mensagem enviada!</h3>
                    <p>Obrigado pelo contato. Retornaremos em breve.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="form-fields">
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="nome">Nome</label>
                          <input
                            id="nome"
                            name="nome"
                            type="text"
                            placeholder="Seu nome"
                            value={form.nome}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">E-mail</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea
                          id="mensagem"
                          name="mensagem"
                          placeholder="Como podemos ajudar?"
                          value={form.mensagem}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      className="btn-submit"
                      whileHover={{ scale: 1.02, boxShadow: '0 6px 28px rgba(43,88,118,0.45)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Enviar mensagem →
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
