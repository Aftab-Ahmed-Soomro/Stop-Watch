let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let rest;
let second = 0;
let minute = 0;
let hour = 0;
function counter() {
    second++;
    if (second === 60) {
        minute++;
        second = 0;
        if (minute === 60) {
            hour++;
            minute = 0;
        }
    }
    
    if (hour < 10) {
        hr.innerText = `0` + hour
    }
    else {
        hr.innerText = hour
    }

    if (minute < 10) {
        min.innerText = `0` + minute
    }
    else {
        min.innerText = minute
    }

    if (second < 10) {
        sec.innerText = `0` + second
    }
    else {
        sec.innerText = second
    }
  
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
    second = 0;
    minute = 0;
    hour = 0;
    clearInterval(rest);
    hr.innerText = '00';   
    min.innerText = '00';   
    sec.innerText = '00';      
    start.removeAttribute('disabled','disabled');  
}