function updateDateTime() {
  const now = new Date();
  document.getElementById('time').textContent = now.toISOString().slice(11, 19);
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  document.getElementById('day').textContent = days[now.getUTCDay()];
}

updateDateTime();
setInterval(updateDateTime, 1000); // Update every second
