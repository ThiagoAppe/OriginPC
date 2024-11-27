import React from 'react';
import RenderCat1 from './renderCat1';

const DetailInfo = ({ producto, onBack }) => {
    const { id_categoria } = producto;

    let renderizado = null;

    if (id_categoria === 1) {
        renderizado = <RenderCat1 producto={producto} />;
    }

    return (
        <div className='p-2' >
            <button 
                onClick={onBack} 
                className="bg-danger text-white px-4 py-1 rounded mb-4 sticky top-2"
            >
                Volver atrás
            </button>

            {renderizado}
        </div>
    );
};

export default DetailInfo;
