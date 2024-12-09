// Funzione per nascondere tutte le sezioni
function hideAllSections() {
    const sections = document.querySelectorAll('.container > div');
    sections.forEach(section => {
        section.classList.add('hidden');  // Aggiungi la classe 'hidden' per nascondere
        section.classList.remove('visible');  // Rimuovi la classe 'visible'
    });
}

// Funzione per scrollare in cima alla pagina
function scrollToTop() {
    window.scrollTo(0, 0);
}


// Imposta la visualizzazione iniziale alla sezione "intro"
document.addEventListener('DOMContentLoaded', function () {
    goToIntro();
});

// Funzione per cambiare il tema tra chiaro e scuro
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Funzioni per navigazione tra le sezioni
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
