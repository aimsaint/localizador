function updateDateTime() {
  const now = new Date();

  // Opzioni per formattare la data
  const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString('it-IT', optionsDate);

  // Ora formattata
  const timeString = now.toLocaleTimeString('it-IT', { hour12: false });

  document.getElementById('date').textContent = dateString;
  document.getElementById('time').textContent = timeString;
}

// Aggiorna subito e poi ogni secondo
updateDateTime();
setInterval(updateDateTime, 1000);
