import refs from './refs.js';
const {
  body,
  h1,
  h2,
  m1,
  m2,
  s1,
  s2,
  timeFormatsBlock,
  controlBtnsBlock,
  startBtn,
  pauseBtn,
  stopBtn,
  clockBtn,
  timerBtn,
  counterBtn,
  clockFace,
  alarmInputBlock,
  alarmInput,
} = refs;

let Format = 1;
let StopChecker = 0;
let TimeHolder = 0;

timeFormatsBlock.addEventListener('click', (e) => {
  [...timeFormatsBlock.children].map(span => span.classList.toggle('active'));
    e.target.id === '12hr' ? Format = 2 : Format = 1;
  }
)

clockBtn.addEventListener('click', () => {
  body.classList.remove('BgAnimation');
  Format = timeFormatsBlock.children['24hr'].classList.contains('active') ? 1 : 2
  timeFormatsBlock.style.display = 'block';
  controlBtnsBlock.style.display = 'none';
  clockFace.style.display = '';
  alarmInputBlock.style.display = 'none';
  alarmInput.value = '';
})

timerBtn.addEventListener('click', () => {
  body.classList.remove('BgAnimation');
  Format = 3; // TIMER
  StopChecker = 1;
  TimeHolder = 0;
  resetClassNames(); // обнуляем циферблат
  timeFormatsBlock.style.display = 'none';
  controlBtnsBlock.style.display = 'block';
  clockFace.style.display = '';
  alarmInputBlock.style.display = 'none';
  alarmInput.value = '';
});

counterBtn.addEventListener('click', () => {
  Format = 4; // COUNTER
  StopChecker = 1;
  resetClassNames(); // обнуляем циферблат
  timeFormatsBlock.style.display = 'none';
  controlBtnsBlock.style.display = 'block';
  clockFace.style.display = 'none';
  alarmInputBlock.style.display = 'block';
  startBtn.style.display = 'block';
  pauseBtn.style.display = 'none';
});

startBtn.addEventListener('click', () => {
  console.log('START');
  StopChecker = 0;
  if (Format === 3) {
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
  }
  if (Format === 4) {
    TimeHolder = alarmInput.value;
    if (TimeHolder > 0) {
      resetClassNames(); // обнуляем циферблат
      alarmInputBlock.style.display = 'none';
      clockFace.style.display = '';
      alarmInput.value = '';
      startBtn.style.display = 'none';
      pauseBtn.style.display = 'block';
    } 
    if (!TimeHolder) {
       return;
    }
  }

})

pauseBtn.addEventListener('click', () => {
  startBtn.style.display = 'block';
  pauseBtn.style.display = 'none';
  StopChecker = 1;
});

stopBtn.addEventListener('click', () => {
  body.classList.remove('BgAnimation');
  resetClassNames(); // обнуляем циферблат
  startBtn.style.display = 'block';
  pauseBtn.style.display = 'none';
  StopChecker = 1;
  TimeHolder = 0;
  
  if (Format === 3) {
    TimeHolder = 0;
  }
  if (Format === 4) {
     alarmInputBlock.style.display = 'block';
     clockFace.style.display = 'none';
  }
});

function updateTimer() {
  console.log('FORMAT:', Format);
    let date = new Date()
    let day = date.getDay(); // 4
    setDayOfWeek(day);
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const time = setTimeObject(hours, minutes, seconds);

    if(Format === 1) {
        set24hours(time);
    }
    if(Format === 2) {
        set12hours(time, hours);
    }
    if(Format === 3 && StopChecker === 0) {
      TimeHolder = TimeHolder + 1; // TimeHolder++
      setTimer(TimeHolder);
    }
    if (Format === 4 && StopChecker === 0) {
      TimeHolder = TimeHolder - 1; // TimeHolder--
      TimeHolder === 0 ? setAlarmlarm() : setTimer(TimeHolder);
    }

  }

setInterval(updateTimer, 1000);

function setTimeObject(h, m, s){
  return {
    hoursNumFirst: Math.floor(h / 10),
    hoursNumSecond: h % 10,

    minutesNumFirst: Math.floor(m / 10),
    minutesNumSecond: m % 10,

    secondsNumFirst: Math.floor(s / 10),
    secondsNumSecond: s % 10,
  };
}

function setDayOfWeek(day) {
  document.querySelector(
    '.WeekDays span:nth-child(' + ((day + 2) % 7) + ')'
  ).classList.add('active');
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
  if(hours > 12){
    hours = hours - 12; // 8
    time.hoursNumFirst = Math.floor(hours / 10); // 0
    time.hoursNumSecond = hours % 10; // 8
  }
  set24hours(time);
}

function setTimer(timeHolder){
  let hours = Math.floor(timeHolder / 3600); 
  let minutes = Math.floor((timeHolder - hours * 3600) / 60);
  let seconds = Math.floor(timeHolder - hours * 3600 - minutes * 60);

  const time = setTimeObject(hours, minutes, seconds);
  set24hours(time);
}

function setAlarmlarm() {
  body.classList.add('BgAnimation');
  resetClassNames();
  StopChecker = 1;
};

function setClassName(node, clasName){
    node.classList.forEach(clasItem => 
      clasItem.includes('show') ?
        node.classList.replace(clasItem, clasName): node.classList.add(clasName));
}

function resetClassNames(){
  [h1, h2, m1, m2, s1, s2].map(node => setClassName(node, 'show0'));
}
