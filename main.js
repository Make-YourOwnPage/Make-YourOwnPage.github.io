document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const searchInput = document.getElementById('searchInput');
    const productos = document.querySelectorAll('.producto');
    const noResultsMessage = document.getElementById('noResults');
    const resetSearchButton = document.getElementById('resetSearch');

    // Función de búsqueda (existente)
    function buscarProductos() {
        const texto = searchInput.value.toLowerCase().trim();
        let encontrados = 0;

        productos.forEach(producto => {
            const nombre = producto.querySelector('h3').textContent.toLowerCase();
            if (nombre.includes(texto)) {
                producto.style.display = 'block';
                encontrados++;
            } else {
                producto.style.display = 'none';
            }
        });

        noResultsMessage.style.display = encontrados === 0 ? 'block' : 'none';
    }

    // Event listeners
    searchInput.addEventListener('input', buscarProductos);
    
    if (resetSearchButton) {
        resetSearchButton.addEventListener('click', function() {
            searchInput.value = '';
            productos.forEach(producto => {
                producto.style.display = 'block';
            });
            noResultsMessage.style.display = 'none';
        });
    }
});