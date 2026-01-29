function mostrarApoyo() {
    const btn = document.querySelector('.cta-btn');
    btn.textContent = "¡GRACIAS!";
    btn.style.backgroundColor = "#3BC3DE"; // Color Celeste
    btn.style.boxShadow = "none";
    
    // Opcional: Redirigir a WhatsApp del candidato
    // window.open('https://wa.me/59162620749?text=Quiero sumarme al equipo', '_blank');
    
    alert("¡Gracias! Tu apoyo es vital para transformar Sacaba.");
}