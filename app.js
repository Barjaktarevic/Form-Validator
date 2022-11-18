const form = document.querySelector('.validation-form')
const password1El = document.querySelector('.password1')
const password2El = document.querySelector('.password2')
const messageContainer = document.querySelector('.message-container')
const message = document.querySelector('.message')

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    isValid = form.checkValidity()

    if(password1El.value === password2El.value) {
        passwordsMatch = true
    } else {
        message.textContent = 'Passwords need to match'
        message.style.color = "var(--failure-color)"
        message.style.border = "2px solid var(--failure-color)"
        messageContainer.style.animation = "success-failure-animation infinite 1s alternate"
        password1El.textContent = ""
        password1El.style.border = "3px solid var(--failure-color)"
        password2El.textContent = ""
        password2El.style.border = "3px solid var(--failure-color)"
        return
    }
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully registered!'
        message.style.color = "var(--success-color)"
        message.style.border = "2px solid var(--success-color)"
        messageContainer.style.animation = "success-failure-animation infinite 1s alternate"
        password1El.style.border = "3px solid var(--success-color)"
        password2El.style.border = "3px solid var(--success-color)"
    } 
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
})



