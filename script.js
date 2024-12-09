// Funzione per nascondere tutte le sezioni
function hideAllSections() {
    const sections = document.querySelectorAll('div[id]');
    sections.forEach(section => {
        section.classList.remove('visible');
    });
}

// Funzione per scrollare la pagina all'inizio
function scrollToTop() {
    window.scrollTo(0, 0);
}

// Funzioni per navigare tra le diverse sezioni
function goToArrivo() {
    hideAllSections();
    document.getElementById('arrivo').classList.add('visible');
    scrollToTop();
}

function goToIndicazioni() {
    hideAllSections();
    document.getElementById('indicazioni').classList.add('visible');
    scrollToTop();
}

function goToColazione() {
    hideAllSections();
    document.getElementById('colazione').classList.add('visible');
    scrollToTop();
}

function goToItinerario() {
    hideAllSections();
    document.getElementById('itinerario').classList.add('visible');
    scrollToTop();
}

function goToIndicazioniCapoMilazzo() {
    hideAllSections();
    document.getElementById('indicazioniCapoMilazzo').classList.add('visible');
    scrollToTop();
}

function goToCapoMilazzo() {
    hideAllSections();
    document.getElementById('capoMilazzo').classList.add('visible');
    scrollToTop();
}

// Funzione per gestire l'attivazione del tema scuro
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    const button = document.querySelector('.theme-toggle');
    if (body.classList.contains('dark-theme')) {
        button.textContent = '🌙';  // Icona tema chiaro
    } else {
        button.textContent = '🌞';  // Icona tema scuro
    }
}

// Aggiungi una classe "visible" alla sezione iniziale per mostrarla al caricamento della pagina
window.addEventListener('load', function() {
    // Mostra la sezione intro iniziale
    document.getElementById('intro').classList.add('visible');
});
