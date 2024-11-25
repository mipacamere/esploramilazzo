function nextStep(step) {
    // Nascondi tutte le sezioni
    const allSteps = document.querySelectorAll('.container > div');
    allSteps.forEach(step => {
        step.classList.add('hidden');
    });

    // Mostra la sezione successiva
    const nextStep = document.getElementById(step);
    if (nextStep) {
        nextStep.classList.remove('hidden');
    }
}

// Mostra la prima sezione al caricamento
document.addEventListener('DOMContentLoaded', function() {
    nextStep('step1');
});

