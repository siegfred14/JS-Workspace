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

