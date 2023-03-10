// function sayHallo(){
//     console.log('hello');
// }
// // setTimeout(()=>{}, 0)

// setTimeout(()=>{
//     console.log('hello timeout');
// }, 0); // ASYNC

// const int = setInterval(()=>{
//     console.log('Interval');
// }, 1000)
// console.log(int);

// sayHallo(); // sync
// console.log('1');
// console.log('10');
// console.log('100');
// console.log('1000');
// console.log('10000');
// console.log('100000');

// document.getElementById('stop').addEventListener('click', ()=>{
//     clearInterval(int)
// })

// console.dir(Date);
// const date = new Date();
// console.log(date);

// const dayOfWeek = date.getDay()
// console.log('day Of Week: ', dayOfWeek); // 0 - sun, 1 - mon ... 4 - thu

// const month = date.getMonth();
// console.log('month: ', month); // 0 - Jan, 5 - June,  ... 11 - December

// const day = date.getDate();
// console.log('day: ', day); // 1 ... 31

// const year = date.getFullYear();
// console.log('year: ', year); //

// const hours = date.getHours();
// console.log('hours: ', hours);

// const minutes = date.getMinutes();
// console.log('minutes: ', minutes);

// const seconds = date.getSeconds();
// console.log('seconds: ', seconds);

// ==============================
import refs from './refs.js';
const {
  h1,
  h2,
  m1,
  m2,
  s1,
  s2,
  timeFormatsBlock,
  clockBtn,
  timerBtn,
  counterBtn,
  timeHolder,
  numbersPlate,
  alarmPlate,
  alarmInput,
  controlBtnsBlock,
  startBtn,
  stopBtn,
  pauseBtn,
  controlButtons,
  body,
} = refs;

let Format = 1;
let TimeHolder = 0;
let StopChecker = 0;

timeFormatsBlock.addEventListener('click', e => {
  [...timeFormatsBlock.children].map(span => span.classList.toggle('active'));
  e.target.id === '12hr' ? (Format = 2) : (Format = 1);
});

clockBtn.addEventListener('click', () => {
  body.classList.remove('BgAnimation');
  numbersPlate.style.display = ''; // отобразить часы снова
  alarmPlate.style.display = 'none'; // скрыть поле ввода секунд
  timeFormatsBlock.style.display = 'block'; // отобразить форматы часов
  controlBtnsBlock.style.display = 'none'; // скрыть кнопки Play, Stop, Pause
  timeHolder.classList.remove('StopWatch'); // удаляем класс Таймера
  timeHolder.classList.remove('Alarm'); // удаляем класс Счетчика
  timeFormatsBlock.children['12hr'].classList.contains('active')
    ? (Format = 2)
    : (Format = 1); // устанавливаем формат
  StopChecker = 0;
});

timerBtn.addEventListener('click', () => {
  body.classList.remove('BgAnimation');
  numbersPlate.style.display = ''; // отобразить часы снова
  alarmPlate.style.display = 'none'; // скрыть поле ввода секунд
  timeFormatsBlock.style.display = 'none'; // скрыть форматы часов
  controlBtnsBlock.style.display = 'block'; // отображаем кнопки Play, Stop, Pause
  if (!timeHolder.classList.contains('StopWatch')) {
    timeHolder.classList.add('StopWatch'); // дабавляем класс Таймера
    Format = 3; // устанавливаем формат
    StopChecker = 1; // устанавливаем отсчет счетчика
    resetClassNames(); // сбрасываем циферблат в 0
    TimeHolder = 0;
  }
});

counterBtn.addEventListener('click', () => {
  if (Format === 4) return;
  numbersPlate.style.display = 'none'; // скрыть часы
  alarmPlate.style.display = 'block'; // отображаем поле ввода
  timeFormatsBlock.style.display = 'none'; // скрыть форматы часов
  controlBtnsBlock.style.display = 'block'; // отображаем кнопки Play & Stop
  if (!timeHolder.classList.contains('Alarm')) {
    timeHolder.classList.add('Alarm'); // дабавляем класс Счетчика
    Format = 4; // устанавливаем формат
    StopChecker = 1; // устанавливаем отсчет счетчика
    resetClassNames(); // сбрасываем циферблат в 0
  }
});

startBtn.addEventListener('click', () => {
  body.classList.remove('BgAnimation');
  if (Format === 3) {
    StopChecker = 0;
    startBtn.style.display = 'none'; // скрыть кнопку Start
    pauseBtn.style.display = 'block'; // отобразить кнопку Pause
  }
  if (Format === 4) {
    TimeHolder = alarmInput.value;
    if (TimeHolder > 0) {
      StopChecker = 0; // сбрасываем отсчет счетчика
      startBtn.style.display = 'block'; // отобразить кнопку Start
      pauseBtn.style.display = 'none'; // скрыть кнопку Pause
      resetClassNames(); // сбрасываем циферблат в 0
      alarmPlate.style.display = 'none'; // скрыть поле ввода
      numbersPlate.style.display = ''; // отобразить часы снова
    }
  }
});

stopBtn.addEventListener('click', () => {
  body.classList.remove('BgAnimation'); // снимаем анимацию
  if (Format === 3) {
    StopChecker = 1; // устанавливаем отсчет счетчика
    pauseBtn.style.display = 'none'; // скрыть кнопку Pause
    startBtn.style.display = 'block'; // отобразить кнопку Start
    TimeHolder = 0;
    resetClassNames(); // сбрасываем циферблат в 0
  }
  if (Format === 4) {
    resetClassNames(); // сбрасываем циферблат в 0
    numbersPlate.style.display = 'none'; // скрыть часы
    alarmPlate.style.display = 'block'; // отображаем поле ввода
    startBtn.style.display = 'block'; // отобразить кнопку Start
    pauseBtn.style.display = 'none'; // скрыть кнопку Pause
    StopChecker = 1; // устанавливаем отсчет счетчика
    alarmInput.value = ''; // зачищаем поле ввода
  }
});

pauseBtn.addEventListener('click', () => {
  if (Format === 3) {
    startBtn.style.display = 'block'; // отобразить кнопку СТАРТ
    pauseBtn.style.display = 'none'; // скрыть кнопку ПАУЗА
    StopChecker = 1;
  }
});

function updateTimer() {
  console.log('FORMAT:', Format);
  let date = new Date();
  let day = date.getDay(); // 4
  setDayOfWeek(day);

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  const time = {
    hoursNumFirst: Math.floor(hours / 10),
    hoursNumSecond: hours % 10,

    minutesNumFirst: Math.floor(minutes / 10),
    minutesNumSecond: minutes % 10,

    secondsNumFirst: Math.floor(seconds / 10),
    secondsNumSecond: seconds % 10,
  };

  if (Format === 1) {
    set24hours(time);
  }
  if (Format === 2) {
    set12hours(time, hours);
  }
  if (Format === 3 && StopChecker === 0) {
    TimeHolder = TimeHolder + 1; // TimeHolder++
    setTimer(TimeHolder);
  }
  if (Format === 4 && StopChecker === 0) {
    TimeHolder = TimeHolder - 1; // TimeHolder--
    if (TimeHolder === 0) {
      AlarmOut();
    } else {
      setTimer(TimeHolder);
    }
  }
}
setInterval(updateTimer, 1000);

function AlarmOut() {
  body.classList.add('BgAnimation');
  resetClassNames(); // сбрасываем циферблат в 0
  StopChecker = 1;
}

function setTimer(startTime) {
  let hours = Math.floor(startTime / 3600);
  let minutes = Math.floor((startTime - hours * 3600) / 60);
  let seconds = Math.floor(startTime - hours * 3600 - minutes * 60);

  const time = {
    hoursNumFirst: Math.floor(hours / 10),
    hoursNumSecond: hours % 10,

    minutesNumFirst: Math.floor(minutes / 10),
    minutesNumSecond: minutes % 10,

    secondsNumFirst: Math.floor(seconds / 10),
    secondsNumSecond: seconds % 10,
  };

  set24hours(time);
}

function setDayOfWeek(day) {
  document
    .querySelector('.WeekDays span:nth-child(' + ((day + 2) % 7) + ')')
    .classList.add('active');
}

function set24hours(time) {
  setClassName(h1, 'show' + time.hoursNumFirst);
  setClassName(h2, 'show' + time.hoursNumSecond);
  setClassName(m1, 'show' + time.minutesNumFirst);
  setClassName(m2, 'show' + time.minutesNumSecond);
  setClassName(s1, 'show' + time.secondsNumFirst);
  setClassName(s2, 'show' + time.secondsNumSecond);
}

function set12hours(time, hours) {
  if (hours > 12) {
    hours = hours - 12; // 8
    time.hoursNumFirst = Math.floor(hours / 10); // 0
    time.hoursNumSecond = hours % 10; // 8
  }
  set24hours(time);
}

function setClassName(node, clasName) {
  node.classList.forEach(clasItem =>
    clasItem.includes('show')
      ? node.classList.replace(clasItem, clasName)
      : node.classList.add(clasName)
  );
}

function resetClassNames() {
  [h1, h2, m1, m2, s1, s2].map(el => setClassName(el, 'show0'));
}

