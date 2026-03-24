import { FormEvent, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type InventoryItem = {
  id: string;
  nome: string;
  quantidade: number;
  minimo: number;
};

const initialItems: InventoryItem[] = [
  { id: '1', nome: 'Arroz 5kg', quantidade: 12, minimo: 8 },
  { id: '2', nome: 'Feijão 1kg', quantidade: 5, minimo: 6 },
  { id: '3', nome: 'Óleo 900ml', quantidade: 9, minimo: 5 },
];

export default function InventoryPage() {
  const [items, setItems] = useState<InventoryItem[]>(initialItems);
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [minimo, setMinimo] = useState(1);

  const lowStockCount = useMemo(() => items.filter(i => i.quantidade <= i.minimo).length, [items]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!nome.trim()) return;
    setItems(prev => [
      ...prev,
      { id: crypto.randomUUID(), nome: nome.trim(), quantidade, minimo },
    ]);
    setNome('');
    setQuantidade(1);
    setMinimo(1);
  };

  const changeQty = (id: string, delta: number) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantidade: Math.max(0, i.quantidade + delta) } : i));
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  return (
    <main className="feature-page">
      <div className="container">
        <div className="feature-topbar">
          <Link className="back-link" to="/">← Voltar para landing</Link>
          <span className="feature-chip">Módulo: Controle Digital</span>
        </div>

        <motion.section
          className="feature-hero"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Controle de Estoque</h1>
          <p>Cadastre produtos, ajuste quantidades e acompanhe alertas de estoque baixo em tempo real.</p>
          <div className="kpi-row">
            <article className="kpi-card">
              <strong>{items.length}</strong>
              <span>Itens cadastrados</span>
            </article>
            <article className="kpi-card warning">
              <strong>{lowStockCount}</strong>
              <span>Abaixo do mínimo</span>
            </article>
          </div>
        </motion.section>

        <section className="feature-grid">
          <article className="feature-card">
            <h2>Novo item</h2>
            <form className="feature-form" onSubmit={onSubmit}>
              <label>
                Nome do item
                <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Ex.: Café 500g" required />
              </label>
              <div className="form-inline">
                <label>
                  Quantidade
                  <input type="number" min={0} value={quantidade} onChange={e => setQuantidade(Number(e.target.value) || 0)} />
                </label>
                <label>
                  Mínimo
                  <input type="number" min={0} value={minimo} onChange={e => setMinimo(Number(e.target.value) || 0)} />
                </label>
              </div>
              <button className="btn-submit" type="submit">Adicionar item</button>
            </form>
          </article>

          <article className="feature-card">
            <h2>Itens do estoque</h2>
            <ul className="stock-list">
              {items.map(item => {
                const isLow = item.quantidade <= item.minimo;
                return (
                  <li key={item.id} className={isLow ? 'low' : ''}>
                    <div>
                      <strong>{item.nome}</strong>
                      <span>{item.quantidade} un. • mínimo {item.minimo}</span>
                    </div>
                    <div className="stock-actions">
                      <button onClick={() => changeQty(item.id, -1)}>-</button>
                      <button onClick={() => changeQty(item.id, 1)}>+</button>
                      <button className="danger" onClick={() => removeItem(item.id)}>Remover</button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
}
