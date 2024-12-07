// Funzione per nascondere tutte le sezioni
function hideAllSections() {
  const sections = document.querySelectorAll('.container > div');
  sections.forEach(section => section.classList.add('hidden'));
}

// Funzione per scrollare in cima alla pagina
function scrollToTop() {
  window.scrollTo(0, 0);
}

function changeLanguage(languageCode) {
    // Navigate to the respective language page
    window.location.href = `index_${languageCode}.html`;
}

let lastScrollTop = 0; // Memorizza la posizione dello scroll precedente
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Se si scorre verso il basso, nascondi la navbar
        navbar.style.top = "-60px";  // Nascondi la navbar, 60px può variare in base all'altezza della navbar
    } else {
        // Se si scorre verso l'alto, mostra la navbar
        navbar.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Assicurati che scrollTop non diventi negativo
});

<script>
 // Funzione per cambiare il tema
function toggleTheme() {
    const body = document.body;
    const themeButton = document.querySelector('.theme-toggle');

    // Cambia tra modalità chiara e scura
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Cambia l'icona del tema
    if (body.classList.contains('dark-mode')) {
        themeButton.innerHTML = "🌞"; // Icona per la modalità chiara
    } else {
        themeButton.innerHTML = "🌙"; // Icona per la modalità scura
    }

    // Salva la preferenza dell'utente nel localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Carica la preferenza salvata al caricamento della pagina
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeButton = document.querySelector('.theme-toggle');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        themeButton.innerHTML = "🌞"; // Icona per la modalità chiara
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        themeButton.innerHTML = "🌙"; // Icona per la modalità scura
    }
});





// Funzioni per navigazione tra le sezioni
function goToArrivo() { hideAllSections(); document.getElementById('arrivo').classList.remove('hidden'); scrollToTop(); }
function goToIndicazioni() { hideAllSections(); document.getElementById('indicazioni').classList.remove('hidden'); scrollToTop(); }
function goToColazione() { hideAllSections(); document.getElementById('colazione').classList.remove('hidden'); scrollToTop(); }
function goToItinerario() { hideAllSections(); document.getElementById('itinerario').classList.remove('hidden'); scrollToTop(); }
function goToIndicazioniCapoMilazzo() { hideAllSections(); document.getElementById('indicazioniCapoMilazzo').classList.remove('hidden'); scrollToTop(); }
function goToCapoMilazzo() { hideAllSections(); document.getElementById('capoMilazzo').classList.remove('hidden'); scrollToTop(); }
function goToPiscinaVenereA() { hideAllSections(); document.getElementById('piscinaVenereA').classList.remove('hidden'); scrollToTop(); }
function goToPanoramicaIsoleA() { hideAllSections(); document.getElementById('panoramicaIsoleA').classList.remove('hidden'); scrollToTop(); }
function goToBorgoAnticoA() { hideAllSections(); document.getElementById('borgoAnticoA').classList.remove('hidden'); scrollToTop(); }
function goToPranzoA() { hideAllSections(); document.getElementById('pranzoA').classList.remove('hidden'); scrollToTop(); }
function goToCastelloA() { hideAllSections(); document.getElementById('castelloA').classList.remove('hidden'); scrollToTop(); }
function goToPomeriggioA() { hideAllSections(); document.getElementById('pomeriggioA').classList.remove('hidden'); scrollToTop(); }
function goToBaiaDelTonoA() { hideAllSections(); document.getElementById('baiaDelTonoA').classList.remove('hidden'); scrollToTop(); }
function goTempoSpiaggiaA() { hideAllSections(); document.getElementById('tempoSpiaggiaA').classList.remove('hidden'); scrollToTop(); }
function goToAttivitaSpiaggiaA() { hideAllSections(); document.getElementById('attivitaSpiaggiaA').classList.remove('hidden'); scrollToTop(); }
function goToTramontoTonoA() { hideAllSections(); document.getElementById('tramontoTonoA').classList.remove('hidden'); scrollToTop(); }
function goToRientroCentroA() { hideAllSections(); document.getElementById('rientroCentroA').classList.remove('hidden'); scrollToTop(); }
function goToSpiaggiaPonente() { hideAllSections(); document.getElementById('spiaggiaPonente').classList.remove('hidden'); scrollToTop(); }
function goToLidoSpiaggia() { hideAllSections(); document.getElementById('lidoSpiaggia').classList.remove('hidden'); scrollToTop(); }
function goTotempoSpiaggiaB() { hideAllSections(); document.getElementById('tempoSpiaggiaB').classList.remove('hidden'); scrollToTop(); }
function goToAttivitaAcquaticheB() { hideAllSections(); document.getElementById('attivitaAcquaticheB').classList.remove('hidden'); scrollToTop(); }
function goToPranzoB() { hideAllSections(); document.getElementById('pranzoB').classList.remove('hidden'); scrollToTop(); }
function goToPomeriggioB() { hideAllSections(); document.getElementById('pomeriggioB').classList.remove('hidden'); scrollToTop(); }
function goToBorgoAnticoB() { hideAllSections(); document.getElementById('borgoAnticoB').classList.remove('hidden'); scrollToTop(); }
function goToCastelloB() { hideAllSections(); document.getElementById('castelloB').classList.remove('hidden'); scrollToTop(); }
function goToCapoMilazzoB() { hideAllSections(); document.getElementById('capoMilazzoB').classList.remove('hidden'); scrollToTop(); }
function goToIndicazionicapomilazzoB() { hideAllSections(); document.getElementById('indicazionicapomilazzoB').classList.remove('hidden'); scrollToTop(); }
function goToPiscinaVenereB() { hideAllSections(); document.getElementById('piscinaVenereB').classList.remove('hidden'); scrollToTop(); }
function goToPanoramicaIsoleB() { hideAllSections(); document.getElementById('panoramicaIsoleB').classList.remove('hidden'); scrollToTop(); }
function goToTramontoCapoMilazzo() { hideAllSections(); document.getElementById('tramontoCapoMilazzo').classList.remove('hidden'); scrollToTop(); }
function goToRientroCentroB() { hideAllSections(); document.getElementById('rientroCentroB').classList.remove('hidden'); scrollToTop(); }
function goToCena() { hideAllSections(); document.getElementById('cena').classList.remove('hidden'); scrollToTop(); }
function goToPasseggiata() { hideAllSections(); document.getElementById('passeggiata').classList.remove('hidden'); scrollToTop(); }
function goToGelato() { hideAllSections(); document.getElementById('gelato').classList.remove('hidden'); scrollToTop(); }
function goToBar() { hideAllSections(); document.getElementById('bar').classList.remove('hidden'); scrollToTop(); }
function fineGiornata() { hideAllSections(); document.getElementById('fineGiornata').classList.remove('hidden'); scrollToTop(); }
function goToIntro() { hideAllSections(); document.getElementById('intro').classList.remove('hidden'); scrollToTop(); }
