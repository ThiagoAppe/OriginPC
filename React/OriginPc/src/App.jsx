import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/inicio';
import Contact from './pages/contacto';
import MainProductos from './pages/mainProductos';

import { NavbarWithSolidBackground } from './components/navbar';
import { Footer } from './components/footer';

function App() {
  return (
    <Router basename="/OriginPC">
      <main className='d-flex flex-column vh-100'>
        <NavbarWithSolidBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainProductos" element={<MainProductos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
