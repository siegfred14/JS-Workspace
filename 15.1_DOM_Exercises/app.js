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

