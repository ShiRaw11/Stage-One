// Get the current date and time
const currentDate = new Date();
const currentDayOfWeek = currentDate.toLocaleDateString("en-US", {
  weekday: "long",
});
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
  currentDayOfWeek;

function updateUTCTime() {
  const currentDate = new Date();
  const currentUTCTime = currentDate.toISOString();

  document.querySelector('[data-testid="currentUTCTime"]').textContent =
    currentUTCTime;
}

updateUTCTime();

setInterval(updateUTCTime, 1000);
