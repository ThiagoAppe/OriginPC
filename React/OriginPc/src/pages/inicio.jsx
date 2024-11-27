import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Sección 1: Encabezado */}
      <section className="container py-5 bg-white text-black">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">
              El Futuro es Hoy...
              <br />
              No te quedes en el tiempo.
            </h1>
            <p className="lead">
              En un mundo en constante evolución, tener la tecnología adecuada
              marca la diferencia...
            </p>
            <div className="d-flex gap-3 mt-3">
              <Link
                to="/armaTuPC"
                className="btn btn-danger btn-lg"
                style={{ backgroundColor: "#cc181e", outline: "none" }}
              >
                Arma tu nueva máquina
              </Link>
              <Link to="/mainProductos" className="btn btn-outline-secondary btn-lg">
                Productos
              </Link>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://i.ytimg.com/vi/QFDinUktaAs/maxresdefault.jpg"
              className="img-fluid rounded shadow-lg"
              alt="Computadora moderna"
            />
          </div>
        </div>
      </section>

      {/* Sección 2: Servicios */}
      <section className="container py-5 bg-white">
        <div className="row text-center">
          <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
            <div className="display-4 text-primary mb-3">
              <img
                src="https://cdn-icons-png.freepik.com/512/157/157977.png"
                alt="Check"
                width="65"
                height="65"
                className="img-fluid"
              />
            </div>
            <h3>Componentes Dedicados</h3>
            <p className="text-muted">
              Ofrecemos una selección exclusiva de componentes diseñados para
              maximizar el rendimiento de tus equipos...
            </p>
          </div>
          <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
            <div className="display-4 text-primary mb-3">
              <img
                src="https://cdn.icon-icons.com/icons2/621/PNG/512/folder-black-open-shape_icon-icons.com_56988.png"
                alt="Carpeta"
                width="70"
                height="70"
                className="img-fluid"
              />
            </div>
            <h3>Componentes Específicos</h3>
            <p className="text-muted">
              Cada usuario tiene requisitos únicos, y por eso ofrecemos opciones
              de componentes específicos...
            </p>
          </div>
          <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
            <div className="display-4 text-primary mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/44/44543.png"
                alt="Estrella"
                width="70"
                height="70"
                className="img-fluid"
              />
            </div>
            <h3>Estaciones Completas</h3>
            <p className="text-muted">
              Nos especializamos en la creación de estaciones de trabajo
              completas, diseñadas para cumplir con los más altos estándares...
            </p>
          </div>
        </div>
      </section>

      {/* Sección 3: Texto e Imagen */}
      <section className="container py-5 d-flex flex-column flex-lg-row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0 p-2">
          <h2 className="mb-4 display-4 fw-bold">
            Nosotros hacemos las cuentas para que vos no te preocupes.
          </h2>
          <p className="text-muted lead">
            Confiá en nuestro servicio para armar estaciones de trabajo
            personalizadas con los mejores componentes...
          </p>
        </div>
        <div className="col-lg-6 text-center">
          <img
            src="https://i.blogs.es/42ea44/diseno/840_560.jpeg"
            alt="Estación de trabajo"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
