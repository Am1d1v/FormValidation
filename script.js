

const form = document.querySelector('#form');
//const formControl = document.querySelector('.form-control');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#password2');


// Show error input message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success ounline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Form submit listener
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Username validation
    if(username.value === ''){
        showError(username, "User is required")
    } else {
        showSuccess(username)
    }

    // Email validation
    if(email.value === ''){
        showError(email, "Email is required")
    } else {
        showSuccess(email)
    }

    // Password validation
    if(password.value === ''){
        showError(password, "Password is required")
    } else {
        showSuccess(password)
    }
})