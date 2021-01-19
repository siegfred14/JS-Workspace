//Math table

let numberEl = document.querySelector('#req-number');
numberEl.addEventListener('keyup', function name(params) {
    let theNumber = Number(numberEl.value);
    document.querySelector('#number').innerText = theNumber;
    calculate()
});

let range = document.querySelector('#multiplier');
range.addEventListener('change', function name(params) {
    let multiple = document.querySelector('#multiples');
    multiple.innerText = Number(range.value);
    calculate();
});

