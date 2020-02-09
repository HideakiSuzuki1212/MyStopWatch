'use strict';

{
  const timer = document.getElementById('timer');
  const tbtn = document.getElementById('tbtn');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutId;
  let elapsedTime = 0;
  let timerFlag = false;

  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    timer.textContent = `${m}:${s}`;
    timeoutId = setTimeout(() => {
      countUp();
    },1000);
  }

  function setButtonStateInitial() {
    timerFlag = false;
      // tbtn.classList.remove('inactive');
      // stop.classList.add('inactive');
      reset.classList.add('inactive');
  }

  function setButtonStateRunning() {
    timerFlag = true;
    // tbtn.classList.add('inactive');
    // stop.classList.remove('inactive');
    reset.classList.add('inactive');
  }

  function setButtonStateStopped() {
    timerFlag = false;
    // tbtn.classList.remove('inactive');
    // stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }

  setButtonStateInitial();

  tbtn.addEventListener('click',　() => {
    if (timerFlag == false){
      setButtonStateRunning();
      startTime = Date.now();
      countUp();
      timerFlag = true;
      tbtn.innerHTML = "Ⅱ ストップ";
    } else {
      timerFlag = false;
      setButtonStateStopped();
      clearTimeout(timeoutId);
      elapsedTime += Date.now() - startTime;
      tbtn.innerHTML = "▶ スタート";
    }
  });

  reset.addEventListener('click',　() => {
    if (reset.classList.contains('inactive') === true){
      return;
    }
    setButtonStateInitial();
    timer.textContent = `00:00`;
    elapsedTime = 0;
  });

}
