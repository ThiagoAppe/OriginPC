import React from 'react';

const RenderCat1 = ({ producto }) => {
    const { nombre, modelo, especificaciones_tecnicas, fecha_de_salida, imagen, compatibilidad } = producto;
    const { socket } = compatibilidad;
    console.log('Producto recibido en RenderCat1:', producto);
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex p-6 max-w-full mx-auto bg-white shadow-lg rounded-lg">
                <div className="flex-1 pr-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{nombre}</h1>
                    <p className="text-xl text-gray-700 mb-4">Modelo: {modelo}</p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">Especificaciones Técnicas</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Núcleos:</strong> {especificaciones_tecnicas.nucleos}</li>
                        <li><strong>Hilos:</strong> {especificaciones_tecnicas.hilos}</li>
                        <li><strong>Frecuencia Base:</strong> {especificaciones_tecnicas.frecuencia_base}</li>
                        <li><strong>Frecuencia Máx. Turbo:</strong> {especificaciones_tecnicas.frecuencia_max_turbo}</li>
                        <li><strong>Caché:</strong> {especificaciones_tecnicas.cache}</li>
                        <li><strong>TDP:</strong> {especificaciones_tecnicas.tdp}</li>
                        <li><strong>Socket:</strong> {especificaciones_tecnicas.socket}</li>
                    </ul>

                    <p className="text-lg text-gray-700 mt-4"><strong>Fecha de Salida:</strong> {fecha_de_salida}</p>

                </div>

                <div className="flex-shrink-0">
                    <img src={imagen} alt={nombre} className="w-2xl h-auto mb-4 rounded-lg" />
                </div>
            </div>
        </div>


    );
};

export default RenderCat1;
