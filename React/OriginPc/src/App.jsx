import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/inicio';
import Contact from './pages/contacto';
import { NavbarWithSolidBackground } from './components/navbar';

function App() {
  return (
    <Router>
      <NavbarWithSolidBackground />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
