function hideAllSections() {
    const sections = document.querySelectorAll('.container > div');
    sections.forEach(section => section.classList.add('hidden'));
}

// Funzioni per navigazione tra le sezioni
function goToArrivo() { hideAllSections(); document.getElementById('arrivo').classList.remove('hidden'); }
function goToIndicazioni() { hideAllSections(); document.getElementById('indicazioni').classList.remove('hidden'); }
function goToColazione() { hideAllSections(); document.getElementById('colazione').classList.remove('hidden'); }
function goToItinerario() { hideAllSections(); document.getElementById('itinerario').classList.remove('hidden'); }
function goToCapoMilazzo() { hideAllSections(); document.getElementById('capoMilazzo').classList.remove('hidden'); }
function goToIndicazioniCapoMilazzo() { hideAllSections(); document.getElementById('indicazioniCapoMilazzo').classList.remove('hidden'); }
function goToPiscinaVenereA() { hideAllSections(); document.getElementById('piscinaVenereA').classList.remove('hidden'); }
function goToPanoramicaIsoleA() { hideAllSections(); document.getElementById('panoramicaIsoleA').classList.remove('hidden'); }
function goToBorgoAnticoA() { hideAllSections(); document.getElementById('borgoAnticoA').classList.remove('hidden'); }
function goToCastelloA() { hideAllSections(); document.getElementById('castelloA').classList.remove('hidden'); }
function goToIntro() { hideAllSections(); document.getElementById('intro').classList.remove('hidden'); }
