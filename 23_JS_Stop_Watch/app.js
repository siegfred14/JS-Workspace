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

    document.querySelector('#m-seconds').innerText = leadingZero(milliseconds);
    document.querySelector('#seconds').innerText = leadingZero(seconds);
    document.querySelector('#minute').innerText = leadingZero(minutes);

};

//to ensure time below 2 digits has a '0' in front of it; 
let leadingZero = (time) => {
    if (time < 10) {
        return "0" + time;
    }
    else {
        return time
    }
};

//click on start button
let startButton = document.querySelector('#start-btn');
startButton.addEventListener('click', function name(params) {
    if (!timerRunning) {
        interval = setInterval(startTimer, 10);  // Start timer
        timerRunning = true;
    }
});

