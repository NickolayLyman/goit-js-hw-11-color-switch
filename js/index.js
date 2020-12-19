const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
 }
 
 

 let switcherIntervalId = null;
 let bgColor = '';
 
 const colorSwitch = function() {
 if (!refs.startBtn.disabled) {
     switcherIntervalId = setInterval(() => {
       checkRandomColor(0, colors.length - 1);
       refs.body.style.backgroundColor = bgColor;
     }, 1000);
     refs.startBtn.disabled = true;
     refs.stopBtn.disabled = false;
   }
 }
 refs.startBtn.addEventListener('click', colorSwitch);
 const checkRandomColor = function(min, max) {
 const color = colors[randomIntegerFromInterval(min, max)];
   if (color === bgColor) {
     checkRandomColor(min, max);
   } else {
     bgColor = color;
   }
 }
 
 
 const stopColorSwitch = function() {
 if (!refs.stopBtn.disabled) {
     clearInterval(switcherIntervalId);
     refs.startBtn.disabled = false;
     refs.stopBtn.disabled = true;
   }
 }
 refs.stopBtn.addEventListener('click', stopColorSwitch);