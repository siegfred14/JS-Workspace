// Nigerian Time
let nigeriaWatch = () => {
    let options = { timeZone: 'Africa/Lagos' };
    let currentDate = new Date().toLocaleDateString('en-US', options);
    let currentTime = new Date().toLocaleTimeString('en-US', options);
    document.querySelector('#lagos-date').innerText = currentDate;
    document.querySelector('#lagos-time').innerText = currentTime;
};
setInterval(nigeriaWatch, 1000); //this means call the function every 1000 milisecond (1min);

//USA Time
let usaWatch = () => {
    let options = { timeZone: 'America/New_York' };
    let currentDate = new Date().toLocaleDateString('en-US', options);
    let currentTime = new Date().toLocaleTimeString('en-US', options);
    document.querySelector('#usa-date').innerText = currentDate;
    document.querySelector('#usa-time').innerText = currentTime;
};
setInterval(usaWatch, 1000); //this means call the function every 1000 milisecond (1min);

//china Time
let chinaWatch = () => {
    let options = { timeZone: 'Asia/Shanghai' };
    let currentDate = new Date().toLocaleDateString('en-US', options);
    let currentTime = new Date().toLocaleTimeString('en-US', options);
    document.querySelector('#china-date').innerText = currentDate;
    document.querySelector('#china-time').innerText = currentTime;
};
setInterval(chinaWatch, 1000); //this means call the function every 1000 milisecond (1min);
