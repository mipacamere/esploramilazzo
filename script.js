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

function toggleTheme() { const body = document.body; const themeButton = document.getElementById('theme-toggle');


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
