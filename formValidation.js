const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errors = document.querySelector('.error-messages');
const success = document.querySelector('.success-message');


//  Empty object to store error messages for each input field. We can use this object to keep track of which fields have errors and what the error messages are. This way, we can easily display the error messages to the user and also check if there are any errors before allowing the form to be submitted.
const setError = {}




// a function gets submitted when the submit button is clicked, but to check the form values before submission we need to stop the default nature of submit button, so that before submissions we can check the form values and if they are valid then we can submit the form, otherwise we can show error messages to the user.
//  e is the event that is occuring(submit) we can get the event object by passing it as a parameter to the function and then we can use the preventDefault() method to stop the default nature of submit button.
form.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent form from submitting
    validateInputs();
});


function validateInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


    if(usernameValue === ''){
        setError.usernameError = 'Username is required';
    } else {
        setError.usernameError = null;
    }           

    if(emailValue === '' || emailValue.indexOf('@') === -1){
        setError.emailError = 'Email is invalid';
    } else {
        setError.emailError = null;
    }


    //  for validations such as password length, uppercase , lowercase digits and special characters we can use regular expressions.(Regular Expressions are explained at the bottom of this code snippet.)

    if(passwordValue === '' || passwordValue.length < 6 || !/[A-Z]/.test(passwordValue) || !/[a-z]/.test(passwordValue) || !/\d/.test(passwordValue) || !/[@$!%*?&]/.test(passwordValue)){
        setError.passwordError = 'Password must be at least 6 characters and contain uppercase, lowercase, digit and special character';
    } else {
        setError.passwordError = null;
    }



    //  Now we can check if there are any errors in the setError object and if there are no errors then we can submit the form, otherwise we can show error messages to the user.


    if(!setError.usernameError && !setError.emailError && !setError.passwordError){
        // Submit the form if there are no errors
        success.innerHTML = '<p>Form submitted successfully!</p>';
        success.style.display = 'block';
        errors.style.display = 'none';

    } else {
        // Display error messages to the user
        errors.innerHTML = '';
        if(setError.usernameError){
            errors.innerHTML += `<p>${setError.usernameError}</p>`; // we can use innerHTML to add the error messages to the errors div. We can also use template literals to make it easier to add the error messages.
        }
        if(setError.emailError){
            errors.innerHTML += `<p>${setError.emailError}</p>`;
        }
        if(setError.passwordError){
            errors.innerHTML += `<p>${setError.passwordError}</p>`;
        }
        errors.style.display = 'block';
    }
}



//  Regular Expressions are a powerful tool for validating input patterns. For example, we can use regular expressions to ensure that a password contains at least one uppercase letter, one lowercase letter, one digit, and one special character.
//  test method is used to see if string matches some pattern.

//  the patterns are as follows :
//  /[A-Z]/.test(passwordValue) checks if the password contains at least one uppercase letter.
//  /[a-z]/.test(passwordValue) checks if the password contains at least one lowercase letter.
//  /\d/.test(passwordValue) checks if the password contains at least one digit.
//  /[@$!%*?&]/.test(passwordValue) checks if the password contains at least one special character from the set @$!%*?&.
//  so basically we need to pass characters in [] to check of those exist in string and it return true or false
//  example - to check if string contain digit - /[0-9]/.test('hiii09hi') - return true


