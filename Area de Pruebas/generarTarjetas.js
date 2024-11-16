document.addEventListener('DOMContentLoaded', () => {
    const url = '.database.json';

    const productList = document.getElementById('product-list');

    fetch(url)
        .then(response => response.json())
        .then(productos => {
            productos.forEach(producto => {
                const card = document.createElement('div');
                card.classList.add('col-md-4', 'mb-4');
                card.innerHTML = `
                    <div class="card">
                        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">
                                <strong>Modelo:</strong> ${producto.modelo}<br>
                                <strong>Núcleos:</strong> ${producto.especificaciones_tecnicas.nucleos}<br>
                                <strong>Hilos:</strong> ${producto.especificaciones_tecnicas.hilos}<br>
                                <strong>Frecuencia Base:</strong> ${producto.especificaciones_tecnicas.frecuencia_base}<br>
                                <strong>Frecuencia Turbo:</strong> ${producto.especificaciones_tecnicas.frecuencia_max_turbo}
                            </p>
                            <a href="#" class="btn btn-primary">Ver Detalles</a>
                        </div>
                    </div>
                `;
                productList.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
});