// Dichiarazione delle variabili per gestire il flusso e l'itinerario
let itinerary = "";
let step = 1;

// Aggiungere la prima domanda
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const itinerarySection = document.getElementById("itinerary-section");
const itineraryTextElement = document.getElementById("itinerary");
const resetButton = document.getElementById("reset-button");

// Funzione per aggiornare la domanda e le opzioni
function updateQuestion(questionText, options) {
    questionElement.innerText = questionText;
    optionsElement.innerHTML = ""; // Resetta le opzioni esistenti

    options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option.text;
        button.onclick = () => handleChoice(option.nextStep, option.action);
        optionsElement.appendChild(button);
    });
}

// Funzione per gestire le scelte e aggiornare l'itinerario
function handleChoice(nextStep, action) {
    // Aggiungi l'azione all'itinerario
    itinerary += action + " ";

    // Mostra l'itinerario se siamo oltre il primo passo
    if (nextStep === 3) {
        itineraryTextElement.innerText = itinerary;
        itinerarySection.style.display = "block"; // Mostra la sezione dell'itinerario
    }

    // Passa alla domanda successiva
    step = nextStep;
    loadNextStep();
}

// Funzione per caricare la prossima domanda
function loadNextStep() {
    if (step === 1) {
        updateQuestion("Ti trovi già a Milazzo o stai arrivando?", [
            { text: "Arrivo a Milazzo", nextStep: 2, action: "Arrivo a Milazzo: Parcheggia o prendi il treno" },
            { text: "Sveglio a Milazzo", nextStep: 2, action: "Sveglio a Milazzo: Colazione e inizio della giornata" }
        ]);
    } else if (step === 2) {
        updateQuestion("Che cosa ti piacerebbe fare al mattino?", [
            { text: "Visita a Capo Milazzo", nextStep: 3, action: "Visita a Capo Milazzo per una passeggiata panoramica" },
            { text: "Mattinata al mare (Spiaggia di Tono)", nextStep: 3, action: "Mattinata al mare: Spiaggia di Tono" }
        ]);
    }
}

// Funzione per resettare l'itinerario e iniziare da capo
resetButton.onclick = () => {
    itinerary = "";
    step = 1;
    itinerarySection.style.display = "none";
    loadNextStep();
};

// Carica la prima domanda
loadNextStep();
