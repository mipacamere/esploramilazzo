function toggleContent(id) {
    const content = document.getElementById(id);
    const button = content.previousElementSibling;  // Trova il tasto relativo alla sezione

    // Controlliamo se il contenuto è nascosto o visibile
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.textContent = "-";  // Cambia il tasto a "-"
    } else {
        content.style.display = "none";
        button.textContent = "+";  // Cambia il tasto a "+"
    }
}
