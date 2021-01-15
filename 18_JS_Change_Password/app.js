let checkBox = document.querySelector('#checkbox');
checkBox.addEventListener('change', function name(params) {
    /* let password = document.querySelector('#password');
    password.setAttribute('type', 'text');  //this gets you only the password to text and doesnt reverse */

    //for more accuracy
    let typeAttribute = password.getAttribute('type');
    if (typeAttribute === 'password') {
        password.setAttribute('type', 'text');
    }
    else
        password.setAttribute('type', 'password');
})