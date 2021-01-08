let date = new Date();
console.log(date);

//proper date
let currentDate = new Date().toLocaleDateString();
console.log(currentDate);

//proper time
let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);

//Another country date,say USA Time
let options = { timeZone: 'America/New_York' };
let usaDate = new Date().toLocaleDateString('en-US', options);
console.log(usaDate);

//USA Time
options = { timeZone: 'America/New_York' };
let usaTime = new Date().toLocaleTimeString('en-US', options);
console.log(usaTime);

//today
let today = new Date().getDay();
console.log(today); // this outputs 4 since javascript uses numbers 0-6 from sunday for days.

