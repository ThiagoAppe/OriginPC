import React, { useState } from 'react';
import ProductCard from './productCard';

const ProductList = ({ products, onProductSelect }) => {
    // Estado para la categoría seleccionada
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');  // Puede ser un string vacío para mostrar todos

    // Función para manejar el cambio de categoría
    const handleCategoryChange = (event) => {
        setCategoriaSeleccionada(event.target.value);
    };

    // Filtrar los productos según la categoría seleccionada
    const productosFiltrados = categoriaSeleccionada
        ? products.filter(product => product.id_categoria === parseInt(categoriaSeleccionada))
        : products;

    return (
        <div className="p-4">
            {/* Filtro de categoría */}
            <div className="mb-4">
                <label htmlFor="categoryFilter" className="mr-2">Filtrar por categoría:</label>
                <select
                    id="categoryFilter"
                    value={categoriaSeleccionada}
                    onChange={handleCategoryChange}
                    className="border rounded p-2"
                >
                    <option value="">Todas</option>
                    <option value="1">Microprocesadores</option>
                    <option value="2">Motherboards</option>
                    <option value="3">RAM</option>
                    <option value="4">Almacenamiento</option>
                    <option value="5">Gráficas</option>
                    <option value="6">Fuentes de Alimentación</option>
                </select>
            </div>

            {/* Mostrar los productos filtrados */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {productosFiltrados.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        imagen={product.imagen}
                        nombre={product.nombre}
                        modelo={product.modelo}
                        onProductSelect={onProductSelect}  // Asegúrate de pasar la función correcta
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
