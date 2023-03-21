

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const styleBody = document.querySelector('body')

let intervalId = null;

function onBtnChange(boolean) {
  btnStart.disabled = true
    btnStop.disabled = false
}

btnStart.addEventListener('click', () => {
 onBtnChange(boolean);
  
intervalId = setInterval(changeColor, 1000);
 })

function changeColor() {
  styleBody.style.backgroundColor = getRandomHexColor()
}

btnStop.addEventListener('click', () => {
  onBtnChange(!boolean);

  
 clearInterval(intervalId)

})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


