let sec = 0;
let min = 0;
let hr = 0;
let timer = document.getElementById('timer');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let rest;
function counter() {
    sec++;
    if (sec === 60) {
        min++;
        sec = 0;
        if (min === 60) {
            hr++;
            min = 0;
        }
    }
    timer.innerText = `${hr}:${min}:${sec}`;
    start.setAttribute('disabled','disabled');
    stop.removeAttribute('disabled','disabled');
}

function counterStart() {
    rest = setInterval(counter, 1000)
}

function counterStop() {
    clearInterval(rest);
    start.removeAttribute('disabled','disabled');
    stop.setAttribute('disabled','disabled');
}

function counterReset() {
    start.removeAttribute('disabled','disabled');
    timer.innerText = '0:0:0';   
    sec = 0;
    min = 0;
    hr = 0;
    clearInterval(rest);
}