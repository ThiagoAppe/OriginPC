import React from 'react';

const ProductCard = ({ id, imagen, nombre, modelo, onProductSelect, onAddToCart }) => {
    return (
        <div key={id} className="w-full border border-gray-300 rounded-lg shadow-lg p-4 bg-white">
            <img src={imagen} alt={nombre} className="w-full h-56 object-contain rounded-t-lg" />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">{nombre}</h2>
            <p className="text-gray-600 text-sm">Modelo: {modelo || 'Información no disponible'}</p>

            {/* Botones */}
            <div className="mt-1 flex justify-between">
                <button
                    onClick={() => onProductSelect(id)}  // Pasamos directamente el id
                    className="bg-black m-2 w-full text-white p-2 rounded-lg"
                >
                    Ver más
                </button>
                <button
                    onClick={() => onAddToCart(id)}  // Llama a la función para añadir al carrito
                    style={{ backgroundColor: '#cc181e' }}
                    className="bg-danger m-2 w-full text-white rounded-lg"
                >
                    Añadir al Carrito
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
