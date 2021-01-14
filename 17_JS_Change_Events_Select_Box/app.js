//change event on select box
let selectBox = document.querySelector('#lang-select');
selectBox.addEventListener('change', function () {
    let languageOptionEl = document.querySelector('#lang-option');
    languageOptionEl.innerText = selectBox.value;

})