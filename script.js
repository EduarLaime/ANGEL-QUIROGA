function mostrarApoyo() {
    // Efecto visual simple al hacer click
    const btn = document.querySelector('.cta-btn');
    btn.textContent = "¡GRACIAS POR EL APOYO!";
    btn.style.backgroundColor = "#3BC3DE"; // Cambia a color celeste
    btn.style.color = "#000";
    
    setTimeout(() => {
        alert("Tu intención de apoyo ha sido registrada. ¡Vamos con Angel Quiroga!");
    }, 200);
}