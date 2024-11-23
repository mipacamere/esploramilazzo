let itinerary = "";

function selectOption(question, choice) {
    switch(question) {
        case 1: // Prima scelta: Arrivo a Milazzo o Sveglia a Milazzo
            if (choice === "arrivo") {
                itinerary += "Arrivo a Milazzo: Parcheggia o prendi il treno. ";
            } else {
                itinerary += "Sveglio a Milazzo: Colazione e inizio della giornata. ";
            }
            break;
        
        case 2: // Seconda scelta: Attività mattutine
            if (choice === "capo") {
                itinerary += "Visita a Capo Milazzo per una passeggiata panoramica. ";
            } else {
                itinerary += "Mattinata al mare: Spiaggia di Tono. ";
            }
            break;

        // Aggiungi ulteriori opzioni per altre parti dell'itinerario
        
    }
    
    // Aggiorna l'itinerario sullo schermo
    document.getElementById("finalItinerary").innerText = itinerary;
}
