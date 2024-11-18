import React from 'react';

const Home = () => {
  return (
    <>
      {/* Sección 1: Encabezado */}
      <section className="container py-5 bg-white">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">El Futuro es Hoy...<br />No te quedes en el tiempo.</h1>
            <p className="lead text-muted">En un mundo en constante evolución, tener la tecnología adecuada marca la diferencia. Con nuestras estaciones de trabajo personalizadas, podrás afrontar cualquier desafío con la mejor tecnología del mercado. ¡No dejes que tu equipo se quede atrás, es hora de dar el siguiente paso!</p>
            <div className="d-flex gap-3 mt-3">
              <button className="btn btn-primary btn-lg">Arma tu nueva máquina</button>
              <button className="btn btn-outline-secondary btn-lg">Productos</button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img src="https://i.ytimg.com/vi/QFDinUktaAs/maxresdefault.jpg" className="img-fluid rounded" alt="Computadora moderna" />
          </div>
        </div>
      </section>

      {/* Sección 2: Servicios */}
      <section className="container py-5 bg-white">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="display-4 text-primary mb-3">
              <img src="https://cdn-icons-png.freepik.com/512/157/157977.png" alt="Check" width="65" height="65" />
            </div>
            <h3>Componentes Dedicados</h3>
            <p className="text-muted">Ofrecemos una selección exclusiva de componentes diseñados para maximizar el rendimiento de tus equipos, adaptados a las necesidades más exigentes. Desde procesadores de última generación hasta tarjetas gráficas avanzadas, tenemos todo lo que necesitas para llevar tu experiencia tecnológica al siguiente nivel.</p>
          </div>
          <div className="col-md-4 mb-4">
            <div className="display-4 text-primary mb-3">
              <img src="https://cdn.icon-icons.com/icons2/621/PNG/512/folder-black-open-shape_icon-icons.com_56988.png" alt="Carpeta" width="70" height="70" />
            </div>
            <h3>Componentes Específicos</h3>
            <p className="text-muted">Cada usuario tiene requisitos únicos, y por eso ofrecemos opciones de componentes específicos que se adaptan a tus proyectos o intereses. Ya sea para tareas profesionales, creativas o de entretenimiento, nuestros equipos garantizan un rendimiento óptimo.</p>
          </div>
          <div className="col-md-4 mb-4">
            <div className="display-4 text-primary mb-3">
              <img src="https://cdn-icons-png.flaticon.com/512/44/44543.png" alt="Estrella" width="70" height="70" />
            </div>
            <h3>Estaciones Completas</h3>
            <p className="text-muted">Nos especializamos en la creación de estaciones de trabajo completas, diseñadas para cumplir con los más altos estándares de rendimiento y durabilidad. Ya sea que necesites una máquina para diseño gráfico, programación o gaming, tenemos una solución para ti.</p>
          </div>
        </div>
      </section>

      {/* Sección 3: Texto e Imagen */}
      <section className="container py-5 d-flex flex-column flex-lg-row align-items-center">
        <div className="col-lg-6">
          <h2 className="mb-4">Nosotros hacemos las cuentas para que vos no te preocupes.</h2>
          <p className="text-muted">Confiá en nuestro servicio para armar estaciones de trabajo personalizadas con los mejores componentes. Nosotros nos ocupamos de todos los detalles técnicos, para que vos solo disfrutes del rendimiento y la calidad de tus equipos. Cada estación está diseñada para que maximices tu productividad con la tranquilidad de saber que tu equipo es perfecto para ti.</p>
        </div>
        <div className="col-lg-6 text-center">
          <img src="https://i.blogs.es/42ea44/diseno/840_560.jpeg" alt="Estación de trabajo" className="img-fluid rounded shadow-lg" />
        </div>
      </section>

      {/* Sección 4: Testimonios */}
      <section className="container py-5 bg-light">
        <div id="carouselTestimonios" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner text-center">
            {/* Testimonio 1 */}
            <div className="carousel-item active">
              <p className="fs-5 text-muted">
                Desde que compré mi nueva computadora en su sitio web, ¡estoy encantado! Su estabilidad es impecable, la velocidad me permite trabajar sin pausas, y su eficacia ha mejorado mi productividad. Sin duda, una excelente compra.
              </p>
              <div className="mt-3">
                <img src="https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg" alt="Foto de Carlos" className="rounded-circle" width="60" />
                <p className="mt-2">Carlos</p>
              </div>
            </div>
            {/* Testimonio 2 */}
            <div className="carousel-item">
              <p className="fs-5 text-muted">
                La calidad del servicio y el equipo que me proporcionaron es excelente. Siempre responden rápidamente a cualquier consulta y me brindan soluciones efectivas. ¡Muy satisfecha con mi compra!
              </p>
              <div className="mt-3">
                <img src="https://media.istockphoto.com/id/1357723739/es/foto/retrato-de-estudio-de-una-joven-latina-sonriente.jpg?s=612x612&w=0&k=20&c=qODhSQLDNoqzka6aSqnAAuwHmp1MVB9HERE5mLZQ6JM=" alt="Foto de Maria" className="rounded-circle" width="60" />
                <p className="mt-2">María</p>
              </div>
            </div>
            {/* Testimonio 3 */}
            <div className="carousel-item">
              <p className="fs-5 text-muted">
                Hace meses que uso mi computadora comprada aquí y puedo decir que ha sido una de las mejores decisiones. Todo funciona perfecto, y el soporte técnico ha sido rápido y muy eficiente.
              </p>
              <div className="mt-3">
                <img src="https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uYSUyMGZvbmRvJTIwYmxhbmNvfGVufDB8fDB8fHww" alt="Foto de Pedro" className="rounded-circle" width="60" />
                <p className="mt-2">Pedro</p>
              </div>
            </div>
          </div>

          {/* Controles del Carousel */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselTestimonios" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselTestimonios" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;