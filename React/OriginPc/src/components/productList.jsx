import React from 'react';
import ProductCard from './productCard';

const ProductList = ({ products, onProductSelect }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {products.map((product) => (
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
    );
};

export default ProductList;
