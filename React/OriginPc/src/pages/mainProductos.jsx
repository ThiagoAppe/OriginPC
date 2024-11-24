import React, { useState, useEffect } from 'react';
import ProductList from '../components/productList';
import fetchGeneral from '../utils/request';  // Importa la función fetchGeneral
import DetailInfo from '../components/detailInfo';  // Importa DetailInfo

function MainProductos() {
    const [listaProductos, setListaProductos] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    useEffect(() => {
        const obtenerProductos = async () => {
            const data = await fetchGeneral('https://raw.githubusercontent.com/ThiagoAppe/OriginPC/refs/heads/gh-pages/database.json');
            setListaProductos(data);
        };

        obtenerProductos();
    }, []);

    const handleProductSelect = (id) => {
        const producto = listaProductos.find((prod) => prod.id === id);  // Busca el producto por su ID
        setProductoSeleccionado(producto);  // Establece el producto completo
    };

    return (
        <div>
            {productoSeleccionado ? (
                <DetailInfo producto={productoSeleccionado} />  // Pasa el producto completo
            ) : (
                <ProductList products={listaProductos} onProductSelect={handleProductSelect} />  // Usa onProductSelect consistente
            )}
        </div>
    );
}

export default MainProductos;
