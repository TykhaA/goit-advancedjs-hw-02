const btnStart = document.querySelector('button[data-start]'),
    btnStop = document.querySelector('button[data-stop]'),
    body = document.querySelector('body');

btnStart.addEventListener('click', handlStart);
btnStop.addEventListener('click', handlStop);

function handlStart(evt){
    evt.currentTarget.disabled = true;
    btnStop.disabled = false;
    changeColor()
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
let setIntervalData = null;

function changeColor() {
    body.style.background = getRandomHexColor();

    setIntervalData = setInterval(() => {
        body.style.background = getRandomHexColor();
    }, 1000)
}
function handlStop(evt){
    evt.currentTarget.disabled = true;
    btnStart.disabled = false;
    clearInterval(setIntervalData);
}