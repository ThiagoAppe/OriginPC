import React from 'react';

const Contact = () => {
  return (
    <>
      <section class="py-5">
        <div class="container">
          <h1 class="text-center mb-4">Contacto - Origin PC</h1>
          <form class="row g-3">
            <div class="col-md-6">
              <label for="name" class="form-label">Nombre y Apellido:</label>
              <input type="text" class="form-control" id="name" name="name" required></input>
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">Correo Electrónico:</label>
              <input type="email" class="form-control" id="email" required></input>
            </div>
            <div class="col-md-6">
              <label for="phone" class="form-label">Teléfono:</label>
              <input type="text" class="form-control" id="phone" required></input>
            </div>
            <div class="col-12">
              <label for="message" class="form-label">Mensaje:</label>
              <textarea id="message" name="message" class="form-control" rows="4" required></textarea>
            </div>
            <div class="col-12 text-center">
              <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
