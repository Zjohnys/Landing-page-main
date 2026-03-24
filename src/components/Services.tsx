import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

export default function Services() {
  return (
    <section className="services" id="servicos">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-tag">Serviços</span>
          <h2 className="section-title">Como podemos ajudar seu negócio?</h2>
          <p className="section-desc">
            Soluções completas para organizar, monitorar e expandir seu estoque com
            tecnologia acessível a todos.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((svc, i) => (
            <motion.article
              key={svc.title}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)', transition: { duration: 0.3 } }}
            >
              <Link to={`/servicos/${svc.slug}`} className="service-link" aria-label={`Abrir ${svc.title}`}>
                <div className="card-body">
                  <div className="card-icon">{svc.icon}</div>
                  <h3 className="card-title">{svc.title}</h3>
                  <p className="card-desc">{svc.desc}</p>
                  <span className="card-cta">Acessar módulo →</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
