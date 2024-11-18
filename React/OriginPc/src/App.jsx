import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/inicio';
import Contact from './pages/contacto';
import { NavbarWithSolidBackground } from './components/navbar';
import { Footer } from './components/footer';

import ProductCard from './pages/productos';

function App() {
  return (
    <>
      <main className='d-flex flex-column vh-100'>
        <Router>
          <NavbarWithSolidBackground />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ProductCard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </Router>
      </main>
    </>
  );
}

export default App;
