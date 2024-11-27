import React from "react";

const SegundaEleccion = ({ selectedOption, onSelect }) => {
  const opciones = {
    ofimatica: [
      {
        id: "ofimatica-baja",
        title: "Ofimática Básica",
        description: "Ideal para tareas básicas como navegación web y uso de Office.",
        price: "$300",
        img: "https://blogthinkbig.com/wp-content/uploads/sites/4/2020/07/IBM-PC-XT-5160.jpg?fit=1500%2C1000",
      },
      {
        id: "ofimatica-media",
        title: "Ofimática Media",
        description: "Incluye mejor capacidad para multitareas y almacenamiento.",
        price: "$500",
        img: "https://img.pccomponentes.com/articles/42/421701/1746-pccom-basic-home-intel-celeron-g5905-4gb-240gbssd.jpg",
      },
      {
        id: "ofimatica-alta",
        title: "Ofimática Avanzada",
        description: "Para usuarios exigentes con más capacidad y velocidad.",
        price: "$700",
        img: "https://informaticalumar.com/wp-content/uploads/2018/06/torre-01-2.png",
      },
    ],
    gaming: [
      {
        id: "gaming-baja",
        title: "Gaming Básico",
        description: "Corre juegos ligeros con gráficos moderados.",
        price: "$800",
        img: "https://statics.qloud.ar/gaming-point-06-2021/221_17-04-2023-03-04-59-fenix_sin-monitor.png",
      },
      {
        id: "gaming-media",
        title: "Gaming Intermedio",
        description: "Adecuado para juegos AAA a configuración media.",
        price: "$1200",
        img: "https://tiendas.contapyme.com.ar/clientes/goodgames/archivos/images/1/image_4894.png",
      },
      {
        id: "gaming-alta",
        title: "Gaming Premium",
        description: "Lo último en potencia para gaming 4K y VR.",
        price: "$2000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjhkMoc6WuG_spfeHAQYi9An3T4OGPPgZ4XA&s",
      },
    ],
    workstation: [
      {
        id: "workstation-baja",
        title: "Workstation Básica",
        description: "Para tareas exigentes de oficina y diseño ligero.",
        price: "$1000",
        img: "https://volttierpc.com/3812-home_default/pc-oficina-intel-i5-12400.jpg",
      },
      {
        id: "workstation-media",
        title: "Workstation Media",
        description: "Perfecta para proyectos de diseño gráfico e ilustración.",
        price: "$2000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9qKfXhFxwOZQS-t0vw8cNeHv4ljgYhEPS5w&s",
      },
      {
        id: "workstation-alta",
        title: "Workstation Premium",
        description: "Máxima potencia para modelado 3D y edición profesional.",
        price: "$4000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTthUKPQoC7NIpPmVC8U_1zyn7XNFOBEms_gA&s",
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
                  className="btn btn-success"
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
