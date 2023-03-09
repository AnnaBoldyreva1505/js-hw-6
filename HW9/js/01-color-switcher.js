const body = document.querySelector("body");
const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
let timerID = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startColorSwitcher = () => {
  timerID = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    btnStart.disabled = true;
  }, 1000);
};

const stopColorSwitcher = () => {
  clearTimeout(timerID);
  btnStart.disabled = false;
};

btnStart.addEventListener("click", startColorSwitcher);
btnStop.addEventListener("click", stopColorSwitcher);
