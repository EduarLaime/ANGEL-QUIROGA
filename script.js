// Configuración del Carrusel
const intervalo = 4000; // Tiempo en milisegundos (4 segundos)
let indiceActual = 0;

function iniciarCarrusel() {
    const imagenes = document.querySelectorAll('.carousel-img');
    
    // Si no hay imágenes o solo hay una, no hacemos nada
    if (imagenes.length <= 1) return;

    setInterval(() => {
        // Quitamos la clase 'active' de la imagen actual
        imagenes[indiceActual].classList.remove('active');

        // Calculamos cuál es la siguiente imagen
        indiceActual = (indiceActual + 1) % imagenes.length;

        // Ponemos la clase 'active' a la siguiente
        imagenes[indiceActual].classList.add('active');
    }, intervalo);
}

function mostrarApoyo() {
    const btn = document.querySelector('.cta-btn');
    
    // 1. Cambio visual del botón
    btn.textContent = "¡GRACIAS!";
    btn.style.backgroundColor = "#3BC3DE"; // Celeste
    btn.style.boxShadow = "none";
    
    // 2. Abrir Facebook en una pestaña nueva
    // ⚠️ IMPORTANTE: Pega aquí abajo el enlace real de tu Fan Page
    window.open('https://www.facebook.com/profile.php?id=61586332002406', '_blank');

    // 3. Mostrar el mensaje
    alert("¡Gracias! Tu apoyo es vital para transformar Sacaba. Te redirigiremos a nuestra página oficial.");
}

// Iniciar cuando carga la página
document.addEventListener('DOMContentLoaded', iniciarCarrusel);