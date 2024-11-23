function toggleContent(contentId, button) {
    const content = document.getElementById(contentId);
    const mapLink = document.getElementById(contentId + '-map');  // ID del link alla mappa

    // Se il contenuto è nascosto, mostriamo il contenuto e il link della mappa
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";  // Mostra il contenuto
        mapLink.style.display = "block";  // Mostra il link alla mappa
        button.textContent = "-";  // Cambia il pulsante a "-"
    } else {
        content.style.display = "none";  // Nascondi il contenuto
        mapLink.style.display = "none";  // Nascondi il link alla mappa
        button.textContent = "+";  // Cambia il pulsante a "+"
    }
}
