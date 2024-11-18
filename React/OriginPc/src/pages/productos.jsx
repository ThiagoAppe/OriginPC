import React, { useEffect, useState } from 'react';
import ProductDetail from '../components/detalleProducto';

const ProductCard = ({ onProductSelect }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ThiagoAppe/OriginPC/refs/heads/gh-pages/database.json')
            .then(response => {
                if (!response.ok) throw new Error('Error al cargar la base de datos');
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    const filterProducts = (categoryId) => {
        setSelectedCategory(categoryId);
        if (categoryId === null) {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(product => product.id_categoria === categoryId));
        }
    };

    if (filteredProducts.length === 0) return <p className="text-center text-gray-500">Cargando productos...</p>;

    return (
        <div className="pt-5">
            {/* Filtros por categoría */}
            <div className="mb-4 flex justify-center gap-4 flex-wrap">
                <button className={`px-4 py-2 bg-red-500 text-white rounded ${selectedCategory === null ? 'bg-red-950' : ''}`} onClick={() => filterProducts(null)}>Todos</button>
                <button className={`px-4 py-2 bg-red-500 text-white rounded ${selectedCategory === 1 ? 'bg-red-950' : ''}`} onClick={() => filterProducts(1)}>Procesadores</button>
                <button className={`px-4 py-2 bg-red-500 text-white rounded ${selectedCategory === 2 ? 'bg-red-950' : ''}`} onClick={() => filterProducts(2)}>Motherboards</button>
                <button className={`px-4 py-2 bg-red-500 text-white rounded ${selectedCategory === 3 ? 'bg-red-950' : ''}`} onClick={() => filterProducts(3)}>Memorias RAM</button>
                <button className={`px-4 py-2 bg-red-500 text-white rounded ${selectedCategory === 4 ? 'bg-red-950' : ''}`} onClick={() => filterProducts(4)}>Almacenamiento</button>
                <button className={`px-4 py-2 bg-red-500 text-white rounded ${selectedCategory === 5 ? 'bg-red-950' : ''}`} onClick={() => filterProducts(5)}>Tarjetas Gráficas</button>
                <button className={`px-4 py-2 bg-red-500 text-white rounded ${selectedCategory === 6 ? 'bg-red-950' : ''}`} onClick={() => filterProducts(6)}>Fuentes de Alimentación</button>
            </div>
            {/* Productos filtrados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3">
                {filteredProducts.map(product => (
                    <div key={product.id} className="w-full border border-gray-300 rounded-lg shadow-lg p-4 bg-white" onClick={() => onProductSelect(product.id)}>
                        <img src={product.imagen} alt={product.nombre} className="w-full h-56 object-cover rounded-t-lg" />
                        <h2 className="text-xl font-semibold text-gray-800 mt-4">{product.nombre}</h2>
                        <p className="text-gray-600 text-sm">Modelo: {product.modelo || 'Información no disponible'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
