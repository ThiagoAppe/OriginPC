// Cargar los datos del JSON local
fetch('database.json')  // Suponiendo que tienes un archivo 'componentes.json' en el mismo directorio
    .then(response => response.json())
    .then(data => mostrarProductosPorCategoria(data))
    .catch(error => console.error('Error al cargar los datos:', error));

function mostrarProductosPorCategoria(componentes) {
    const contenedorCategorias = document.getElementById('contenedor-categorias');
    const categoriasNav = document.getElementById('categorias-nav');
    const categorias = {};

    // Organizar los productos por categoría
    componentes.forEach(componente => {
        if (!categorias[componente.id_categoria]) {
            categorias[componente.id_categoria] = {
                nombre: `Categoría ${componente.id_categoria}`, // Puedes cambiar esto por algo más descriptivo
                productos: []
            };
        }
        categorias[componente.id_categoria].productos.push(componente);
    });

    // Crear la navegación de categorías
    Object.keys(categorias).forEach(idCategoria => {
        const categoria = categorias[idCategoria];

        // Crear item en la barra de navegación
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.href = `#categoria${idCategoria}`;
        navLink.textContent = categoria.nombre;
        navItem.appendChild(navLink);
        categoriasNav.appendChild(navItem);

        // Crear sección para esta categoría
        const divCategoria = document.createElement('section');
        divCategoria.id = `categoria${idCategoria}`;
        divCategoria.classList.add('categoria');
        
        const tituloCategoria = document.createElement('h2');
        tituloCategoria.textContent = categoria.nombre;
        divCategoria.appendChild(tituloCategoria);

        // Mostrar productos en esta categoría
        categoria.productos.forEach(producto => {
            const divProducto = document.createElement('div');
            divProducto.classList.add('producto');
            divProducto.innerHTML = `
                <h3>${producto.nombre} (${producto.modelo})</h3>
                <p><strong>Especificaciones:</strong> ${producto.especificaciones_tecnicas.frecuencia_base}</p>
                <p><strong>Fecha de salida:</strong> ${producto.fecha_de_salida}</p>
                <img src="${producto.imagen}" alt="${producto.nombre}">
            `;
            divCategoria.appendChild(divProducto);
        });

        contenedorCategorias.appendChild(divCategoria);
    });
}
