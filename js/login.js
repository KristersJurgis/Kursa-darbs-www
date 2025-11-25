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

});


document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;

    // Username validation
    const name = document.getElementById('name').value.trim();
    if (name === '' || !/^[a-zA-Z ]+$/.test(name)) {
        document.getElementById('nameError').textContent = 'Please enter a valid name.';
        valid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Password validation
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
        document.getElementById('passwordError').textContent =
            'Password must be at least 8 characters long and include uppercase, lowercase, and a number.';
        valid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    // Confirm password match
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        valid = false;
    } else {
        document.getElementById('confirmPasswordError').textContent = '';
    }

    if (valid) {
        // Example: show success or send data
        alert('Registration data is valid! Submitting...');
        // You can do your fetch POST here
    }
});

// Login form validation & submit
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Login form submit triggered");

    const email = document.getElementById('loginemail').value.trim();
    const password = document.getElementById('loginpassword').value;
    let valid = true;

    if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('loginEmailError').textContent = 'Please enter a valid email.';
        valid = false;
    } else {
        document.getElementById('loginEmailError').textContent = '';
    }

    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
        document.getElementById('loginPasswordError').textContent =
            'Password must be at least 8 characters long and include uppercase, lowercase, and a number.';
        valid = false;
    } else {
        document.getElementById('loginPasswordError').textContent = '';
    }

    if (!valid) return; // Stop if validation fails

    fetch('./users.json')
        .then(response => {
            if (!response.ok) {
                alert("Couldn't fetch users data");
                throw new Error('Fetch failed');
            }
            return response.json();
        })
        .then(users => {
            const user = users.find(u => u.email === email);
            if (!user) {
                alert('Email not found');
                valid = false;
                return;
            }
            if (user.password !== password) {
                alert('Wrong password');
                valid = false;
                return;
            }

            if (valid) {
                console.log('Login successful!');
                // Redirect or submit form here
            }
        })
        .catch(error => console.error('Fetch error:', error));
});