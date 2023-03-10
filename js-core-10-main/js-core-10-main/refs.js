export default {
  body: document.querySelector('body'),
  h1: document.querySelector('.H1'),
  h2: document.querySelector('.H2'),

  m1: document.querySelector('.M1'),
  m2: document.querySelector('.M2'),

  s1: document.querySelector('.S1'),
  s2: document.querySelector('.S2'),

  timeFormatsBlock: document.querySelector('.Type'),
  controlBtnsBlock: document.querySelector('.control'),

  startBtn: document.getElementById('start'),
  pauseBtn: document.getElementById('pause'),
  stopBtn: document.getElementById('stop'),

  clockBtn: document.querySelector('[data-title="Time"]'),
  timerBtn: document.querySelector('[data-title="StopWatch"]'),
  counterBtn: document.querySelector('[data-title="CountDown"]'),

  clockFace: document.querySelector('.Numbers'),
  alarmInputBlock: document.querySelector('.AlarmInput'),
  alarmInput: document.querySelector('.AlarmInput input'),
};