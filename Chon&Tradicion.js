

//H1
document.addEventListener('DOMContentLoaded', function() {
    var title = document.querySelector('#main-title');
    
    if (title) {
        
        title.style.width = '0';
        title.style.overflow = 'hidden';
        title.style.transition = 'width 3s ease';  // Agrega una transición suave
        setTimeout(function() {
            title.style.width = 'auto';
        }, 100);  // Espera para permitir que el estilo inicial se aplique
        // Estilos iniciales para la animación
        title.style.transition = 'transform 0.6s ease';
        
        // Añadir efectos de animación en hover
        title.addEventListener('mouseover', function() {
            title.style.transform = 'scale(1.1)';
        });

        title.addEventListener('mouseout', function() {
            title.style.transform = 'scale(1)';
        });
    } else {
        console.error('Elemento con id "main-title" no encontrado.');
    }
});







