import React, { useState } from 'react';
import ProductCard from '../pages/productos';
import ProductDetail from '../components/detalleProducto';

function MainProductos() {
    const [selectedProductId, setSelectedProductId] = useState(null);

    const handleProductSelect = (productId) => {
        setSelectedProductId(productId);
    };

    return (
        <div>
            {selectedProductId ? (
                <ProductDetail productId={selectedProductId} />
            ) : (
                <ProductCard onProductSelect={handleProductSelect} />
            )}
        </div>
    );
}

export default MainProductos;
