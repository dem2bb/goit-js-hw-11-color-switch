const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

let timerId = null;
let isActive;

function activateRandomColorCreater() {
  if (isActive) {
    return;
  }
  isActive = true;
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = `${
      colors[randomIntegerFromInterval(0, 5)]
    }`;
  }, 1000);
}

function stopColorCreater() {
  isActive = false;
  clearInterval(timerId);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', activateRandomColorCreater);
refs.stopBtn.addEventListener('click', stopColorCreater);
