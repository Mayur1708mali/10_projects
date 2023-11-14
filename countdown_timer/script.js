let year = 2023;

const x = setInterval(() => {
  const now = new Date().getTime();
  const countdownDate = new Date(`Jan 1, ${year} 15:56:01`).getTime();

  const date = countdownDate - now;

  var days = Math.floor(date / (1000 * 60 * 60 * 24));
  var hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((date % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('mins').innerHTML = minutes;
  document.getElementById('sec').innerHTML = seconds;

  document.querySelector('h1').innerHTML = `New Year ${year}`;

  if (date < 1) {
    year = year + 1;
  }
}, 1000);
