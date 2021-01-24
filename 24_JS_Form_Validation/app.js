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

//Check Username
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

