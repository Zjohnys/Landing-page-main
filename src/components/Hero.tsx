import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.25,
    },
  },
};

const stats = [
  { value: '500+', label: 'Empresas atendidas' },
  { value: '98%', label: 'Satisfação' },
  { value: '24h', label: 'Suporte' },
];

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-inner">
          {/* Content */}
          <motion.div
            className="hero-content"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div className="hero-badge" variants={fadeUp}>
              <span className="dot" />
              Estoque inteligente, crescimento constante
            </motion.div>

            <motion.h1 className="hero-title" variants={fadeUp}>
              Organize seu negócio{' '}
              <span className="gradient-word">com NexaStock</span>
            </motion.h1>

            <motion.p className="hero-subtitle" variants={fadeUp}>
              A solução digital que pequenos negócios precisam para gerenciar
              estoque com eficiência, inteligência e simplicidade.
            </motion.p>

            <motion.div className="hero-actions" variants={fadeUp}>
              <motion.button
                className="btn-hero"
                onClick={() => scrollTo('#servicos')}
                whileHover={{ scale: 1.04, boxShadow: '0 6px 32px rgba(43,88,118,0.5)' }}
                whileTap={{ scale: 0.97 }}
              >
                Conheça os serviços
              </motion.button>
              <motion.button
                className="btn-ghost"
                onClick={() => scrollTo('#sobre')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Saiba mais
              </motion.button>
            </motion.div>

            <motion.div className="hero-stats" variants={fadeUp}>
              {stats.map(s => (
                <div className="stat" key={s.label}>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-img-wrap">
              <motion.img
                src="/img/hero-dashboard.svg"
                alt="Dashboard de controle de estoque"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              />

              <motion.div
                className="hero-float-card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="float-icon">📦</div>
                <div className="float-text">
                  <strong>Estoque organizado</strong>
                  <span>Controle em tempo real</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
