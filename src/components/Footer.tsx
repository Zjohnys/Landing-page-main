import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <motion.span
          className="footer-logo"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          NexaStock
        </motion.span>
        <motion.p
          className="footer-copy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          © 2022–2026 NexaStock — Todos os direitos reservados.
        </motion.p>
      </div>
    </footer>
  );
}
