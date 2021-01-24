//Submitting Form

let registrationForm = document.querySelector('#register-form');
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); //stops auto submission
    if (validateForm()) {
        alert(' Form is sumbitted successfully');
    }
    else {
        alert('something Went Wrong');
    }
});

//Form Validation

let validateForm = () => {
    if (checkUsername() & checkEmail() & checkPassword() & checkConfirmPassword()) {
        return true;
    }
    else {
        return false;
    }
    //or simply
    //return (checkUsername() & checkEmail() & checkPassword() & checkConfirmPassword());
};

//Check
let checkUsername = () => {
    let inputEl = document.querySelector('#username');
    let inputFeedbackEl = document.querySelector('#email-feedback');
    let regExp = /^[a-zA-Z0-9]{4, 10}$/;
    if (regExp.test(inputEl.value)) {
        makeValid(inputEl, inputFeedbackEl);
        return true;
    }
    else {
        makeInvalid(inputEl, inputFeedbackEl);
        return false;
    }
};

//Check Email
let checkEmail = () => {
    let inputEl = document.querySelector('#email');
    let inputFeedbackEl = document.querySelector('#username-feedback');
    let regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regExp.test(inputEl.value)) {
        makeValid(inputEl, inputFeedbackEl);
        return true;
    }
    else {
        makeInvalid(inputEl, inputFeedbackEl);
        return false;
    }
};

//check Password
let checkPassword = () => {
    let inputEl = document.querySelector('#password');
    let inputFeedbackEl = document.querySelector('#password-feedback');
    let regExp = /^[A-Za-z]\w{7, 14}$/;
    if (regExp.test(inputEl.value)) {
        makeValid(inputEl, inputFeedbackEl);
        return true;
    }
    else {
        makeInvalid(inputEl, inputFeedbackEl);
        return false;
    }
};

//check  confirm Password
let checkConfirmPassword = () => {
    let inputEl = document.querySelector('#c_password');
    let passwordEl = document.querySelector('#password');
    let inputFeedbackEl = document.querySelector('#c_password-feedback');
    let regExp = /^[A-Za-z]\w{7, 14}$/;
    if (regExp.test(inputEl.value) && inputEl.value === passwordEl.value) {
        makeValid(inputEl, inputFeedbackEl);
        return true;
    }
    else {
        makeInvalid(inputEl, inputFeedbackEl);
        return false;
    }
};

// make Valid
let makeValid = (inputEl, inputFeedbackEl) => {
    inputEl.classList.add('is-form-valid');
    inputEl.classList.remove('is-form-invalid');
    inputFeedbackEl.classList.add('text-success');
    inputFeedbackEl.classList.remove('text-danger');
    inputFeedbackEl.innerText = 'Looks Good';
};

//make Invalid
let makeinValid = (inputEl, inputFeedbackEl) => {
    inputEl.classList.remove('is-form-valid');
    inputEl.classList.add('is-form-invalid');
    inputFeedbackEl.classList.remove('text-success');
    inputFeedbackEl.classList.add('text-danger');
    inputFeedbackEl.innerText = `please Enter a ${inputEl.placeholder}`;
}

