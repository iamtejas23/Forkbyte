// Simple email validation using HTML5 pattern attribute
document.getElementById('myForm').addEventListener('submit', function (event) {
    var emailInput = document.getElementById('email');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});