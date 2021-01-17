// SMS App
let textAreaEL = document.querySelector('#text-area');
let countEl = document.querySelector('#char-count');

textAreaEL.addEventListener('keyup', function name(params) {
    let textLength = textAreaEL.value.length;
    countEl.innerText = textLength;
});