//Range Select

//format number
let formatNumber = (number) => {
    let result = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
    return result;
}

let rangeEl = document.querySelector('#formControlRange');
let amountEl = document.querySelector('#amount');
rangeEl.addEventListener('input', function name(params) {
    amountEl.innerText = formatNumber(rangeEl.value);
});