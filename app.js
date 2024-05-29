//Assign variables to our elements in html using DOM
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');

    //Create a function that validates the email against a certain pattern and returns true or false
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Simple pattern for an email address
        return emailPattern.test(email);
    }
    //Create a function that validates the phone number against a certain pattern and returns true or false
    function validatePhone(phone) {
        const phonePattern = /^\d{10}$/;  // Simple pattern for a 10-digit phone number
        return phonePattern.test(phone);
    }

    emailInput.addEventListener('input', function() {
        if (validateEmail(emailInput.value)) {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
            emailError.textContent = '';
        } else {
            emailInput.classList.add('is-invalid');
            emailError.textContent = 'Please enter a valid email address.';
        }
    });

    phoneInput.addEventListener('input', function() {
        if (validatePhone(phoneInput.value)) {
            phoneInput.classList.remove('is-invalid');
            phoneInput.classList.add('is-valid');
            phoneError.textContent = '';
        } else {
            phoneInput.classList.add('is-invalid');
            phoneError.textContent = 'Please enter a valid phone number.';
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Validate Email
        if (!validateEmail(emailInput.value)) {
            isValid = false;
            emailInput.classList.add('is-invalid');
            emailError.textContent = 'Please enter a valid email address.';
        } else {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
            emailError.textContent = '';
        }

        // Validate Phone
        if (!validatePhone(phoneInput.value)) {
            isValid = false;
            phoneInput.classList.add('is-invalid');
            phoneError.textContent = 'Please enter a valid phone number.';
        } else {
            phoneInput.classList.remove('is-invalid');
            phoneInput.classList.add('is-valid');
            phoneError.textContent = '';
        }

        if (isValid) {
            form.reset();
            alert('Form submitted successfully!');
        }
    });

    

});
