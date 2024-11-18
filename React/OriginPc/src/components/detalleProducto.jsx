import React from 'react';

const ProductDetail = ({ productId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('/database.json')
            .then(response => {
                if (!response.ok) throw new Error('Error al cargar la base de datos');
                return response.json();
            })
            .then(data => {
                const selectedProduct = data.find(item => item.id === productId);
                setProduct(selectedProduct);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [productId]);

    if (!product) return <p className="text-center text-gray-500">Cargando detalles...</p>;

    return (
        <div className="product-detail">
            <h2>{product.nombre}</h2>
            <img src={product.imagen} alt={product.nombre} className="w-full h-56 object-cover" />
            <p>Modelo: {product.modelo || 'Información no disponible'}</p>
            <p>Descripción: {product.descripcion || 'No disponible'}</p>
            {/* Añadir más detalles según sea necesario */}
        </div>
    );
};

export default ProductDetail;
