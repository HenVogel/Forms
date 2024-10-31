// JavaScript code for form validation
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the form and input field elements
    const form = document.getElementById("myForm");
    const inputField = document.getElementById("inputField");
    const message = document.getElementById("message");

    // Regular expression pattern for alphanumeric input
    const alphaNumericPattern = /^[a-zA-Z0-9]+$/;

    // Add event listener to form submission
    form.addEventListener("submit", function (event) {
        // Prevent form from submitting by default
        event.preventDefault();

        // Retrieve the input field value
        const inputValue = inputField.value;

        // Check if the input value matches the pattern
        if (alphaNumericPattern.test(inputValue)) {
            // Valid input: display confirmation message and reset error message
            message.textContent = "Input is valid. Form submitted!";
            message.style.color = "green";
        } else {
            // Invalid input: display error message
            message.textContent = "Error: Only alphanumeric values are allowed.";
            message.style.color = "red";
        }
    });
});