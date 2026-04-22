import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ZonaPage from './pages/ZonaPage';
import SobreVictu from './pages/SobreVictu';
import BiosalesGuia from './pages/BiosalesGuia';
import Galeria from './pages/Galeria';
import './styles/global.css';
import './App.css';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Si hay un hash, esperar un poco y hacer scroll al elemento
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si no hay hash, ir al inicio
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-victu" element={<SobreVictu />} />
            <Route path="/biosales" element={<BiosalesGuia />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/zonas/:zona" element={<ZonaPage />} />
            <Route path="/:categorySlug" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
