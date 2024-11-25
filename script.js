function chooseArrival(type) {
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('arrival-screen').classList.remove('hidden');
}

function showNext(nextScreen) {
  const screens = document.querySelectorAll('.container');
  screens.forEach(screen => screen.classList.add('hidden'));
  document.getElementById(nextScreen + '-screen').classList.remove('hidden');
}

function chooseItinerary(type) {
  document.getElementById('itinerary-screen').classList.add('hidden');
  if (type === 'capoMilazzo') {
    document.getElementById('capoMilazzo-screen').classList.remove('hidden');
  } else {
    document.getElementById('spiaggiaPonente-screen').classList.remove('hidden');
  }
}

function endItinerary() {
  alert('Itinerario completato!');
  location.reload(); // Ricarica la pagina per iniziare di nuovo
}
