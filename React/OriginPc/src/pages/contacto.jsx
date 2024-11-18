import React, { useState } from 'react';
import { Button } from "react-bootstrap";

import ServicioTecnico from '../assets/Servicio Tecnico.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado correctamente. ¡Gracias por contactarnos!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <section className="container-fluid d-flex justify-content-evenly h-100 p-3">
        <aside className="w-50 h-100">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="form-label">Nombre y Apellido:</label>
              <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="email" className="form-label">Correo Electrónico:</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="phone" className="form-label">Teléfono:</label>
              <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="message" className="form-label">Mensaje:</label>
              <textarea id="message" name="message" className="form-control" rows="4" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <div className="py-2">
              <Button type="submit" style={{ backgroundColor: '#cc181e' }} variant="danger" size="md">Enviar</Button>
            </div>
          </form>
        </aside>
      </section>
    </>
  );
};

export default Contact;
