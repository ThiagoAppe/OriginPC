import React from 'react';

const Contact = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <h1 className="text-center mb-4">Contacto - Origin PC</h1>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Nombre y Apellido:</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Correo Electrónico:</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">Teléfono:</label>
              <input type="text" className="form-control" id="phone" required />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">Mensaje:</label>
              <textarea id="message" name="message" className="form-control" rows="4" required></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
