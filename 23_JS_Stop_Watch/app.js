let count = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = 0; //in view of clearing interval
let timerRunning = false; //in view of preventing start reimplementation when already running

let startTimer = () => {
    count++;

    minutes = Math.floor((count / 100) / 60);
    seconds = Math.floor((count / 100) - (minutes * 60));
    milliseconds = Math.floor(count - (seconds * 100) - (minutes * 60));

    document.querySelector('#m-seconds').innerText = milliseconds;
    document.querySelector('#seconds').innerText = seconds;
    document.querySelector('#minute').innerText = minutes;

};

