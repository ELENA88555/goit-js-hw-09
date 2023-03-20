

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const styleBody = document.querySelector('body')

let intervalId = null;

btnStart.addEventListener('click', () => {
  if (btnStart.disabled = true){
    btnStop.disabled = false
  }
intervalId = setInterval(changeColor, 1000);
 })

function changeColor() {
  styleBody.style.backgroundColor = getRandomHexColor()
}

btnStop.addEventListener('click', () => {
  if (btnStop.disabled = true){
    btnStart.disabled = false
  }
 clearInterval(intervalId)

})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


