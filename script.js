/*document.addEventListener('DOMContentLoaded' , () => {

    // Form Selection
    const form = document.getElementById('registration-form');

    // feedback selection
    const feedbackDiv = document.getElementById('form-feedback');

    // adding an eventlistener to form
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // preventing default submission 

        // retriving user inputs
        const userNameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const username = userNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        // username validation variables
        let isValid = true;
        let messages = [];

        // username validation
        if (username < 3){
            isValid = false;
            messages[0] = 'Username too short, less than 3 characters';
        }

        //email validation
        if (email.includes('@') & email.includeso('.')){
            isValid = true;
        } else {
            isValid = false;
            messages[1] = 'Invalid email';
        }

        // Password validation
        if (password < 8){
            isValid = false;
            messages[2] = 'Password is less than 8 charactes long.';
        }

        //feedback display logic
        feedbackDiv.style.display = 'block';

        if (isValid = true){
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        } else {
            feedbackDiv.innerHTML = messages;
            feedbackDiv.style.color = '#dc3545';
        }
    })
})*/

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        let messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        feedbackDiv.style.display = 'block';

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
            feedbackDiv.style.backgroundColor = '#d4edda';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
            feedbackDiv.style.backgroundColor = '#f8d7da';
        }
    });
});