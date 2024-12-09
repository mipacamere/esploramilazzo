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
function goToArrivo() { hideAllSections(); document.getElementById('arrivo').classList.add('visible'); scrollToTop(); }
function goToIndicazioni() { hideAllSections(); document.getElementById('indicazioni').classList.add('visible'); scrollToTop(); }
function goToColazione() { hideAllSections(); document.getElementById('colazione').classList.add('visible'); scrollToTop(); }
function goToItinerario() { hideAllSections(); document.getElementById('itinerario').classList.add('visible'); scrollToTop(); }
function goToIndicazioniCapoMilazzo() { hideAllSections(); document.getElementById('indicazioniCapoMilazzo').classList.add('visible'); scrollToTop(); }
function goToCapoMilazzo() { hideAllSections(); document.getElementById('capoMilazzo').classList.add('visible'); scrollToTop(); }
function goToPiscinaVenereA() { hideAllSections(); document.getElementById('piscinaVenereA').classList.add('visible'); scrollToTop(); }
function goToPanoramicaIsoleA() { hideAllSections(); document.getElementById('panoramicaIsoleA').classList.add('visible'); scrollToTop(); }
function goToBorgoAnticoA() { hideAllSections(); document.getElementById('borgoAnticoA').classList.add('visible'); scrollToTop(); }
function goToPranzoA() { hideAllSections(); document.getElementById('pranzoA').classList.add('visible'); scrollToTop(); }
function goToCastelloA() { hideAllSections(); document.getElementById('castelloA').classList.add('visible'); scrollToTop(); }
function goToPomeriggioA() { hideAllSections(); document.getElementById('pomeriggioA').classList.add('visible'); scrollToTop(); }
function goToBaiaDelTonoA() { hideAllSections(); document.getElementById('baiaDelTonoA').classList.add('visible'); scrollToTop(); }
function goTempoSpiaggiaA() { hideAllSections(); document.getElementById('tempoSpiaggiaA').classList.add('visible'); scrollToTop(); }
function goToAttivitaSpiaggiaA() { hideAllSections(); document.getElementById('attivitaSpiaggiaA').classList.add('visible'); scrollToTop(); }
function goToTramontoTonoA() { hideAllSections(); document.getElementById('tramontoTonoA').classList.add('visible'); scrollToTop(); }
function goToRientroCentroA() { hideAllSections(); document.getElementById('rientroCentroA').classList.add('visible'); scrollToTop(); }
function goToSpiaggiaPonente() { hideAllSections(); document.getElementById('spiaggiaPonente').classList.add('visible'); scrollToTop(); }
function goToLidoSpiaggia() { hideAllSections(); document.getElementById('lidoSpiaggia').classList.add('visible'); scrollToTop(); }
function goTotempoSpiaggiaB() { hideAllSections(); document.getElementById('tempoSpiaggiaB').classList.add('visible'); scrollToTop(); }
function goToAttivitaAcquaticheB() { hideAllSections(); document.getElementById('attivitaAcquaticheB').classList.add('visible'); scrollToTop(); }
function goToPranzoB() { hideAllSections(); document.getElementById('pranzoB').classList.add('visible'); scrollToTop(); }
function goToPomeriggioB() { hideAllSections(); document.getElementById('pomeriggioB').classList.add('visible'); scrollToTop(); }
function goToBorgoAnticoB() { hideAllSections(); document.getElementById('borgoAnticoB').classList.add('visible'); scrollToTop(); }
function goToCastelloB() { hideAllSections(); document.getElementById('castelloB').classList.add('visible'); scrollToTop(); }
function goToCapoMilazzoB() { hideAllSections(); document.getElementById('capoMilazzoB').classList.add('visible'); scrollToTop(); }
function goToIndicazionicapomilazzoB() { hideAllSections(); document.getElementById('indicazionicapomilazzoB').classList.add('visible'); scrollToTop(); }
function goToPiscinaVenereB() { hideAllSections(); document.getElementById('piscinaVenereB').classList.add('visible'); scrollToTop(); }
function goToPanoramicaIsoleB() { hideAllSections(); document.getElementById('panoramicaIsoleB').classList.add('visible'); scrollToTop(); }
function goToTramontoCapoMilazzo() { hideAllSections(); document.getElementById('tramontoCapoMilazzo').classList.add('visible'); scrollToTop(); }
function goToRientroCentroB() { hideAllSections(); document.getElementById('rientroCentroB').classList.add('visible'); scrollToTop(); }
function goToCena() { hideAllSections(); document.getElementById('cena').classList.add('visible'); scrollToTop(); }
function goToPasseggiata() { hideAllSections(); document.getElementById('passeggiata').classList.add('visible'); scrollToTop(); }
function goToGelato() { hideAllSections(); document.getElementById('gelato').classList.add('visible'); scrollToTop(); }
function goToBar() { hideAllSections(); document.getElementById('bar').classList.add('visible'); scrollToTop(); }
function fineGiornata() { hideAllSections(); document.getElementById('fineGiornata').classList.add('visible'); scrollToTop(); }
function goToIntro() { hideAllSections(); document.getElementById('intro').classList.add('visible'); scrollToTop(); }

// Funzione per gestire l'attivazione del tema scuro
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
}

document.querySelector('.theme-toggle').addEventListener('click', function() {
    // Alterna la classe di tema tra light e dark
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    // Gestisce l'icona del tasto (luna o sole)
    let isDark = document.body.classList.contains('dark-theme');
    if (isDark) {
        // Cambia a tema scuro (luna)
        document.querySelector('.theme-toggle .moon').style.opacity = '1';
        document.querySelector('.theme-toggle .sun').style.opacity = '0';
    } else {
        // Cambia a tema chiaro (sole)
        document.querySelector('.theme-toggle .sun').style.opacity = '1';
        document.querySelector('.theme-toggle .moon').style.opacity = '0';
    }
});


// Aggiungi una classe "visible" alla sezione iniziale per mostrarla al caricamento della pagina
window.addEventListener('load', function() {
    // Mostra la sezione intro iniziale
    document.getElementById('intro').classList.add('visible');
});

let prevScrollPos = window.pageYOffset; // Memorizza la posizione precedente dello scroll
const navbar = document.querySelector('.navbar');
const languageSelection = document.querySelector('.language-selection');

// Quando si scorre sulla pagina
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset; // Posizione corrente dello scroll

    // Se lo scroll è verso il basso, nascondi la navbar e la striscia delle lingue
    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";  // Mostra la navbar
        languageSelection.classList.remove("hidden"); // Mostra la striscia delle lingue
    } else {
        navbar.style.top = "-80px"; // Nascondi la navbar
        languageSelection.classList.add("hidden"); // Nascondi la striscia delle lingue
    }
    prevScrollPos = currentScrollPos; // Aggiorna la posizione dello scroll
}
