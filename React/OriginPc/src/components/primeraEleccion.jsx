import React from "react";

const PrimeraEleccion = ({ onSelect }) => {
  const cards = [
    {
      id: "ofimatica",
      title: "Ofimática",
      description:
        "Ideal para tareas simples como procesadores de texto, hojas de cálculo y navegación web.",
      features: ["Procesador básico", "4GB RAM en Adelante", "Almacenamiento SSD"],
      img: "https://http2.mlstatic.com/D_NQ_NP_802073-MLA74867281418_032024-O.webp",
    },
    {
      id: "gaming",
      title: "Gaming",
      description:
        "Diseñada para gamers, capaz de correr los últimos juegos con gráficos de alta calidad.",
      features: ["Procesador potente", "Tarjeta gráfica dedicada", "16GB+ RAM"],
      img: "https://http2.mlstatic.com/D_NQ_NP_875115-MLA75107353523_032024-O.webp",
    },
    {
      id: "workstation",
      title: "Workstation",
      description:
        "Potencia máxima para trabajos exigentes como diseño gráfico, modelado 3D o edición de video.",
      features: ["Procesadores multicore", "32GB+ RAM", "GPU de alto rendimiento"],
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_804497-MLA42458415877_072020-F.webp",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fs-1">Elige tu Computadora</h2>
      <div className="row">
        {cards.map((card) => (
          <div key={card.id} className="col-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={card.img}
                className="card-img-top"
                alt={`${card.title} image`}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <ul className="list-unstyled">
                  {card.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="card-footer bg-transparent text-center">
                <button
                  className="btn btn-danger"
                  onClick={() => onSelect(card.id)}
                >
                  Seleccionar Categoria
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrimeraEleccion;
