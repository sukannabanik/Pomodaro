let workDuration = 25 * 60; // 25 minutes
let currentTime = workDuration;
let timer;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
  let minutes = Math.floor(currentTime / 60);
  let seconds = currentTime % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (currentTime > 0) {
      currentTime--;
      updateDisplay();
    } else {
      clearInterval(timer);
      alert("Time's up! Take a break.");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  pauseTimer();
  currentTime = workDuration;
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay(); // Initial display
