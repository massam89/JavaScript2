const timeDown = document.getElementById('time-down');
const timeUp = document.getElementById('time-up');
const timeSelect = document.getElementById('time-select');
const time = document.getElementById('time');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const bell = new Audio('bell.mp3');
let minute = parseInt(timeSelect.textContent);
let second = 0;

timeUp.addEventListener('click', increaseTime);
timeDown.addEventListener('click', decreaseTime);
play.addEventListener('click', playTimer);
stop.style.display = "none";


function playTimer() {
  timeUp.removeEventListener('click', increaseTime);
  timeDown.removeEventListener('click', decreaseTime);
  play.removeEventListener('click', playTimer);
  pause.addEventListener('click', pauseTimer);
  stop.removeEventListener('click', stopTimer);
  stop.style.display = "none";


  timer();
  const timing = setInterval(timer, 1000);

  function timer() {
    switch (true) {
      case (second == 0):
        second = 60;
        minute--;
        break;
      case (minute == 0 && second == 1):
        bell.play();
        time.textContent = "Time's up!";
        clearInterval(timing);
        stop.addEventListener('click', stopTimer);
        stop.style.display = "inline";
        break;
      default:
        second--;
        time.textContent = minute + ':' + second;
    }
  }

  function pauseTimer() {
    pause.removeEventListener('click', pauseTimer);
    clearInterval(timing);
    play.addEventListener('click', playTimer);
    stop.addEventListener('click', stopTimer);
    stop.style.display = "inline";
  }

  function stopTimer() {
    minute = 25;
    second = 0;
    timeSelect.textContent = minute;
    time.textContent = minute + ':00';
    timeUp.addEventListener('click', increaseTime);
    timeDown.addEventListener('click', decreaseTime);
    play.addEventListener('click', playTimer);
    stop.removeEventListener('click', stopTimer);
    stop.style.display = "none";
  }
}

function increaseTime() {
  if (timeSelect.textContent == 59) {
    timeSelect.textContent = 1;
  } else {
    timeSelect.textContent = parseInt(timeSelect.textContent) + 1;
    minute++;
  }
};

function decreaseTime() {
  if (timeSelect.textContent == 1) {
    timeSelect.textContent = 59;
  } else {
    timeSelect.textContent = parseInt(timeSelect.textContent) - 1;
    minute--;
  }
};