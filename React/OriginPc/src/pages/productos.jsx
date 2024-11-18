import React, { useEffect, useState } from 'react';

const ProductCard = () => { 
    const [products, setProducts] = useState([]);

    useEffect(() => { 
        fetch('/database.json')
        //https://raw.githubusercontent.com/ThiagoAppe/OriginPC/refs/heads/main/React/OriginPc/public/database.json
            .then(response => { 
                if (!response.ok) throw new Error('Error al cargar la base de datos');
                return response.json();
            })
            .then(data => { 
                setProducts(data);
            })
            .catch(error => { 
                console.error('Error:', error);
            });
    }, []);
    

    if (products.length === 0) return <p className="text-center text-gray-500">Cargando productos...</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-3">
            {products.map(product => (
                <div key={product.id} className="max-w-sm mx-auto border border-gray-300 rounded-lg shadow-lg p-4 bg-white">
                    <img src={product.imagen} alt={product.nombre} className="w-full h-48 object-cover rounded-t-lg" />
                    <h2 className="text-xl font-semibold text-gray-800 mt-4">{product.nombre}</h2>
                    <p className="text-gray-600 text-sm">Modelo: {product.modelo}</p>
                    <p className="text-gray-600 text-sm mt-2">Núcleos: {product.especificaciones_tecnicas.nucleos} | Hilos: {product.especificaciones_tecnicas.hilos}</p>
                    <p className="text-gray-600 text-sm">Frecuencia: {product.especificaciones_tecnicas.frecuencia_base} - {product.especificaciones_tecnicas.frecuencia_max_turbo}</p>
                    <p className="text-gray-600 text-sm">Caché: {product.especificaciones_tecnicas.cache}</p>
                    <p className="text-gray-600 text-sm">TDP: {product.especificaciones_tecnicas.tdp}</p>
                    <p className="text-gray-500 text-sm mt-4">Lanzamiento: {product.fecha_de_salida}</p>
                    <p className="text-gray-500 text-sm">Socket: {product.compatibilidad.socket}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
