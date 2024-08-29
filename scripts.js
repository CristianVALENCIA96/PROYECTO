document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de funcionalidad: alerta al hacer clic en un enlace de navegación
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Navegando a: ' + this.textContent);
        });
    });
});
