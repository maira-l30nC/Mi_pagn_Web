document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll('.sidebar .icon');
    const content = document.getElementById('content');

    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            const id = this.getAttribute('id');
            // Oculta el contenido actual
            content.style.display = 'none';
            // Aquí puedes mostrar el contenido correspondiente al icono clicado
        });
    });
});
