const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active');
<<<<<<< HEAD
});
=======
});

document.getElementById('register').addEventListener('Submit', function(event) {
    event.preventDefault();

    let valid = true;
        // username validation
    const name = document.getElementById('name').value;
    if (name === '' || !/^[a-zA-Z ] + $/.test(name)) {
        document.getElementById('nameError').textContent = 'Please enter a valid name.';
        valid = false;

    }
    else {
        document.getElementById('nameError').textContent = ''; 
    }

    // email validation

    const email = document.getElementById('eMail').value;
    if (email === '' || !/^[^\s@] + @[^\s@] +\.[^s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        valid = false;
    }
    else {
        document.getElementById('emailError').textContent = '';
    }

    // password validation

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('password-error').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError').value;
    if (password.length < 8 ||  !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)){
        passwordError.textContent = 'Password must be atleast 8 characters long, and include uppercase, lowercase and a number.';
        valid = false;
    }
    else {
        passwordError.textContent = ' ';
    // checks if password matches confirm password
    } 
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        valid = false;
    }
    else {
        confirmPasswordError.textContent = ' '; 
    }


})
>>>>>>> 0a9eeb2 (sync local changes)
