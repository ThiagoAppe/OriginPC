import React, { useState, useEffect } from 'react';
import ProductList from '../components/productList';
import fetchGeneral from '../utils/request';
import DetailInfo from '../components/detailInfo';

function MainProductos() {
    const [listaProductos, setListaProductos] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    useEffect(() => {
        const obtenerProductos = async () => {
            const data = await fetchGeneral('https://raw.githubusercontent.com/ThiagoAppe/OriginPC/refs/heads/main/database.json');
            setListaProductos(data);
        };
        obtenerProductos();
    }, []);

    const handleProductSelect = (id) => {
        const producto = listaProductos.find((prod) => prod.id === id);
        setProductoSeleccionado(producto);
    };

    const handleProductDeselect = () => {
        setProductoSeleccionado(null);
    };

    return (
        <div>
            {productoSeleccionado ? (
                <DetailInfo 
                    producto={productoSeleccionado} 
                    onBack={handleProductDeselect}
                />
            ) : (
                <ProductList products={listaProductos} onProductSelect={handleProductSelect} />
            )}
        </div>
    );
}

export default MainProductos;
