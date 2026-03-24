import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const faq = [
  {
    q: 'Quanto tempo para responder um chamado?',
    a: 'Nosso tempo médio de resposta é de até 2 horas em horário comercial.',
  },
  {
    q: 'Vocês ajudam na configuração inicial?',
    a: 'Sim. A equipe conduz onboarding completo com você e seu time.',
  },
  {
    q: 'Existe suporte por WhatsApp?',
    a: 'Sim, para planos elegíveis. Também atendemos via e-mail e portal.',
  },
];

export default function SupportPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [ticketSent, setTicketSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setTicketSent(true);
  };

  return (
    <main className="feature-page">
      <div className="container">
        <div className="feature-topbar">
          <Link className="back-link" to="/">← Voltar para landing</Link>
          <span className="feature-chip">Módulo: Suporte Especializado</span>
        </div>

        <motion.section
          className="feature-hero"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Monitoramento e suporte contínuo</h1>
          <p>Abra chamados, acompanhe o status e tire dúvidas com especialistas em operação e estoque.</p>
        </motion.section>

        <section className="feature-grid">
          <article className="feature-card">
            <h2>Perguntas frequentes</h2>
            <div className="faq-list">
              {faq.map((item, index) => {
                const open = activeFaq === index;
                return (
                  <div key={item.q} className={`faq-item${open ? ' open' : ''}`}>
                    <button onClick={() => setActiveFaq(open ? null : index)}>
                      {item.q}
                      <span>{open ? '−' : '+'}</span>
                    </button>
                    {open && <p>{item.a}</p>}
                  </div>
                );
              })}
            </div>
          </article>

          <article className="feature-card">
            <h2>Abrir chamado</h2>
            {ticketSent ? (
              <div className="ticket-success">
                <strong>Chamado enviado!</strong>
                <p>Protocolo #{Math.floor(100000 + Math.random() * 900000)}</p>
                <p>Nosso time vai responder em breve.</p>
              </div>
            ) : (
              <form className="feature-form" onSubmit={submit}>
                <label>
                  Assunto
                  <input placeholder="Ex.: divergência de estoque" required />
                </label>
                <label>
                  Prioridade
                  <select defaultValue="media">
                    <option value="baixa">Baixa</option>
                    <option value="media">Média</option>
                    <option value="alta">Alta</option>
                  </select>
                </label>
                <label>
                  Descrição
                  <textarea placeholder="Descreva o problema" required rows={5} />
                </label>
                <button className="btn-submit" type="submit">Enviar chamado</button>
              </form>
            )}
          </article>
        </section>
      </div>
    </main>
  );
}
