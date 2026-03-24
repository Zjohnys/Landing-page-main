import { useTheme } from './hooks/useTheme';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import InventoryPage from './pages/InventoryPage';
import ReportsPage from './pages/ReportsPage';
import SupportPage from './pages/SupportPage';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicos/controle-digital" element={<InventoryPage />} />
        <Route path="/servicos/relatorios-inteligentes" element={<ReportsPage />} />
        <Route path="/servicos/suporte-especializado" element={<SupportPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
