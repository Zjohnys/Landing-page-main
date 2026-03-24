import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollTo(href), 120);
      return;
    }
    scrollTo(href);
  };

  return (
    <motion.header
      className={`navbar-wrapper${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container navbar">
        <motion.span
          className="logo"
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          NexaStock
        </motion.span>

        {/* Desktop nav */}
        <nav className="nav-links" aria-label="Navegação principal">
          {links.map(link => (
            <motion.a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="nav-actions">
          <motion.button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label="Alternar tema"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </motion.button>

          <motion.button
            className="btn-primary"
            onClick={() => handleNavClick('#contato')}
            whileHover={{ scale: 1.04, boxShadow: '0 4px 24px rgba(43,88,118,0.45)' }}
            whileTap={{ scale: 0.96 }}
          >
            Falar com a gente
          </motion.button>

          {/* Hamburger */}
          <motion.button
            className="hamburger"
            onClick={() => setIsOpen(o => !o)}
            aria-label="Abrir menu"
            aria-expanded={isOpen}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="ham-line"
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="ham-line"
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="ham-line"
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="mobile-link"
                onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
