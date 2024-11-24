import React from 'react';
import RenderCat1 from './renderCat1';  // Importamos el componente de la categoría 1

const DetailInfo = ({ producto }) => {
    // Verificamos el id_categoria y renderizamos el componente correspondiente
    const { id_categoria } = producto;

    let renderizado = null;

    if (id_categoria === 1) {
        renderizado = <RenderCat1 producto={producto} />;
    }

    // Podemos agregar más condiciones para otras categorías en el futuro

    return (
        <div>
            {renderizado}
        </div>
    );
};

export default DetailInfo;
