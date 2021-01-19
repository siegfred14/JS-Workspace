//Math table

let numberEl = document.querySelector('#req-number');
numberEl.addEventListener('keyup', function name(params) {
    let theNumber = Number(numberEl.value);
    document.querySelector('#number').innerText = theNumber;
    calculate()
});

