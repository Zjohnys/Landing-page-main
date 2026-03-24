import { motion } from 'framer-motion';

const features = [
  {
    icon: '🚀',
    title: 'Fácil de usar',
    desc: 'Interface intuitiva, sem necessidade de conhecimento técnico avançado.',
  },
  {
    icon: '🔐',
    title: 'Dados seguros',
    desc: 'Seus dados protegidos com as melhores práticas de segurança.',
  },
  {
    icon: '📱',
    title: 'Acesso em qualquer lugar',
    desc: 'Use no computador, tablet ou celular — onde você estiver.',
  },
];

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="container">
        <div className="about-grid">
          {/* Image */}
          <motion.div
            className="about-img-wrap"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/img/about-analytics.svg" alt="Análise de dados e relatórios" loading="lazy" />
            <motion.div
              className="about-badge"
              initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <strong>3+</strong>
              <span>anos no mercado</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-header section-header--left">
              <span className="section-tag">Sobre nós</span>
              <h2 className="section-title">Por que existimos?</h2>
            </div>

            <p>
              NexaStock é um projeto criado para auxiliar na organização de estoques de pequenas
              empresas. Muitos negócios ainda trabalham com papel e documentação física, o que
              gera desorganização e problemas frequentes. Com um sistema acessível, a NexaStock vem
              para mudar essa realidade.
            </p>

            <div className="about-features">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="feature-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="feature-icon">{f.icon}</div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
