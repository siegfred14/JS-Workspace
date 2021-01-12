let wishMe = (message, color) => {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = message;
    h1Tag.style.backgroundColor = color;
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
    h1Tag.style.borderRadius = '10px';
    h1Tag.style.color = 'white';
    h1Tag.style.textShadow = '0 0 5px black';

}


//Good Morning Button Logic
let gmButton = document.querySelector('#gm-btn');
gmButton.addEventListener('click', function () {
    wishMe('Good Morning', 'orange');
});

//Good Afternoon Button Logic
let gaButton = document.querySelector('#ga-btn');
gaButton.addEventListener('click', function () {
    wishMe('Good Afternoon', 'red');
});

//Good Evening Button Logic
let geButton = document.querySelector('#ge-btn');
geButton.addEventListener('click', function () {
    wishMe('Good Evening', 'brown');
});
