import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type Product = {
  nome: string;
  categoria: 'Alimentos' | 'Bebidas' | 'Limpeza';
  vendasMes: number;
  margem: number;
  estoque: number;
};

const data: Product[] = [
  { nome: 'Arroz 5kg', categoria: 'Alimentos', vendasMes: 230, margem: 18, estoque: 22 },
  { nome: 'Feijão 1kg', categoria: 'Alimentos', vendasMes: 140, margem: 15, estoque: 6 },
  { nome: 'Refrigerante 2L', categoria: 'Bebidas', vendasMes: 195, margem: 22, estoque: 12 },
  { nome: 'Detergente', categoria: 'Limpeza', vendasMes: 88, margem: 27, estoque: 8 },
  { nome: 'Água 500ml', categoria: 'Bebidas', vendasMes: 270, margem: 19, estoque: 35 },
];

export default function ReportsPage() {
  const [categoria, setCategoria] = useState<'Todas' | Product['categoria']>('Todas');

  const filtered = useMemo(() => {
    return categoria === 'Todas' ? data : data.filter(p => p.categoria === categoria);
  }, [categoria]);

  const totalVendas = filtered.reduce((acc, p) => acc + p.vendasMes, 0);
  const margemMedia = filtered.length ? (filtered.reduce((acc, p) => acc + p.margem, 0) / filtered.length) : 0;
  const giro = filtered.length ? (filtered.reduce((acc, p) => acc + p.vendasMes / Math.max(1, p.estoque), 0) / filtered.length) : 0;

  return (
    <main className="feature-page">
      <div className="container">
        <div className="feature-topbar">
          <Link className="back-link" to="/">← Voltar para landing</Link>
          <span className="feature-chip">Módulo: Relatórios Inteligentes</span>
        </div>

        <motion.section
          className="feature-hero"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Reposicionamento com dados</h1>
          <p>Filtre por categoria e visualize indicadores para decidir o que vender mais, repor antes e otimizar margem.</p>
          <div className="kpi-row">
            <article className="kpi-card">
              <strong>{totalVendas}</strong>
              <span>Vendas no período</span>
            </article>
            <article className="kpi-card">
              <strong>{margemMedia.toFixed(1)}%</strong>
              <span>Margem média</span>
            </article>
            <article className="kpi-card">
              <strong>{giro.toFixed(1)}x</strong>
              <span>Índice de giro</span>
            </article>
          </div>
        </motion.section>

        <section className="feature-card">
          <div className="reports-header">
            <h2>Painel analítico</h2>
            <label className="sr-only" htmlFor="categoria-relatorio">Filtrar por categoria</label>
            <select
              id="categoria-relatorio"
              title="Filtrar por categoria"
              value={categoria}
              onChange={e => setCategoria(e.target.value as typeof categoria)}
            >
              <option value="Todas">Todas as categorias</option>
              <option value="Alimentos">Alimentos</option>
              <option value="Bebidas">Bebidas</option>
              <option value="Limpeza">Limpeza</option>
            </select>
          </div>

          <div className="report-bars">
            {filtered.map(item => (
              <article key={item.nome} className="bar-item">
                <header>
                  <strong>{item.nome}</strong>
                  <span>{item.vendasMes} vendas</span>
                </header>
                <div className="bar-track">
                  <motion.span
                    className="bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, (item.vendasMes / 300) * 100)}%` }}
                    transition={{ duration: 0.7 }}
                  />
                </div>
                <p>Margem: {item.margem}% • Estoque atual: {item.estoque}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
