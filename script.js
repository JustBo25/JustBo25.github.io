function getCountdown() {
  let currentDate = new Date();
  let currentDay = currentDate.getDay();
  let daysUntilFriday = currentDay <= 5 ? 5 - currentDay : 12 - currentDay;
  let nextFridayDate = new Date(currentDate.getTime() + (daysUntilFriday * 24 * 60 * 60 * 1000));

  // Calculate the second Friday
  let daysToAdd = (12 - nextFridayDate.getDay() + 5) % 7 + 7;
  let secondFridayDate = new Date(nextFridayDate.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));

  let timeUntilSecondFriday = secondFridayDate.getTime() - currentDate.getTime();
  let seconds = Math.floor(timeUntilSecondFriday / 1000) % 60;
  let minutes = Math.floor(timeUntilSecondFriday / (1000 * 60)) % 60;
  let hours = Math.floor(timeUntilSecondFriday / (1000 * 60 * 60)) % 24;
  let days = Math.floor(timeUntilSecondFriday / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
}

function updateCountdown() {
  let countdown = getCountdown();
  let countdownElement = document.getElementById('countdown');
  countdownElement.textContent = `${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes, ${countdown.seconds} seconds`;
}

// Initial call to update countdown
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);
