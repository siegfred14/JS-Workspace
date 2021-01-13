let textBox = document.querySelector('#username');
textBox.addEventListener('keyup', function name(params) {
    textEntered = textBox.value;
    newMessage = document.querySelector('#msg')
    newMessage.innerText = textEntered;
})