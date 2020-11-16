const email = document.getElementById("mail");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const form = document.getElementById("form");
const errorVar = document.getElementById('error');

form.addEventListener('submit', (e) => {
    
    if (firstName.value === '' || name.value == null) {
        alert('Please enter your name.');
        e.preventDefault();
    }
})