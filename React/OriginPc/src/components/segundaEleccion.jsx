import React from "react";

const SegundaEleccion = ({ selectedOption, onSelect }) => {
  const opciones = {
    ofimatica: [
      {
        id: "ofimatica-baja",
        title: "Ofimática Básica",
        description: "Ideal para tareas básicas como navegación web y uso de Office.",
        price: "$300",
        img: "https://http2.mlstatic.com/D_NQ_NP_716135-MLA50841520561_072022-O.webp",
      },
      {
        id: "ofimatica-media",
        title: "Ofimática Media",
        description: "Incluye mejor capacidad para multitareas y almacenamiento.",
        price: "$500",
        img: "https://http2.mlstatic.com/D_NQ_NP_709491-MLA50841456673_072022-O.webp",
      },
      {
        id: "ofimatica-alta",
        title: "Ofimática Avanzada",
        description: "Para usuarios exigentes con más capacidad y velocidad.",
        price: "$700",
        img: "https://http2.mlstatic.com/D_NQ_NP_639604-MLA50841501521_072022-O.webp",
      },
    ],
    gaming: [
      {
        id: "gaming-baja",
        title: "Gaming Básico",
        description: "Corre juegos ligeros con gráficos moderados.",
        price: "$800",
        img: "https://http2.mlstatic.com/D_NQ_NP_944238-MLA50042535093_052022-O.webp",
      },
      {
        id: "gaming-media",
        title: "Gaming Intermedio",
        description: "Adecuado para juegos AAA a configuración media.",
        price: "$1200",
        img: "https://http2.mlstatic.com/D_NQ_NP_994221-MLA50042483974_052022-O.webp",
      },
      {
        id: "gaming-alta",
        title: "Gaming Premium",
        description: "Lo último en potencia para gaming 4K y VR.",
        price: "$2000",
        img: "https://http2.mlstatic.com/D_NQ_NP_690502-MLA50042510856_052022-O.webp",
      },
    ],
    workstation: [
      {
        id: "workstation-baja",
        title: "Workstation Básica",
        description: "Para tareas exigentes de oficina y diseño ligero.",
        price: "$1000",
        img: "https://http2.mlstatic.com/D_NQ_NP_960804-MLA45725740748_042021-O.webp",
      },
      {
        id: "workstation-media",
        title: "Workstation Media",
        description: "Perfecta para proyectos de diseño gráfico e ilustración.",
        price: "$2000",
        img: "https://http2.mlstatic.com/D_NQ_NP_990217-MLA45725572939_042021-O.webp",
      },
      {
        id: "workstation-alta",
        title: "Workstation Premium",
        description: "Máxima potencia para modelado 3D y edición profesional.",
        price: "$4000",
        img: "https://http2.mlstatic.com/D_NQ_NP_905874-MLA45725751400_042021-O.webp",
      },
    ],
  };

  const opcionesSeleccionadas = opciones[selectedOption] || [];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Opciones para {selectedOption}</h2>
      <div className="row">
        {opcionesSeleccionadas.map((opcion) => (
          <div key={opcion.id} className="col-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={opcion.img}
                className="card-img-top"
                alt={`${opcion.title} image`}
              />
              <div className="card-body">
                <h5 className="card-title">{opcion.title}</h5>
                <p className="card-text">{opcion.description}</p>
                <p className="text-muted">Precio: {opcion.price}</p>
              </div>
              <div className="card-footer bg-transparent text-center">
                <button
                  className="btn btn-danger"
                  onClick={() => onSelect(opcion.id)}
                >
                  Elegir esta opción
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SegundaEleccion;
