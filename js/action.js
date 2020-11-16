const email = document.getElementById("mail");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const form = document.getElementById("form");
const errorVar = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (firstName.value === '' || name.value == null) {
        messages.push('Please enter your name.')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorVar.innerText = messages.join(',')
    }
        


})