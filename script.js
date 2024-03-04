const form = document.querySelector('form');
const button = form.querySelector('[type="submit"]');
const error = document.createElement('p');
error.classList.add('error_text');
error.textContent = 'Invalid email format';

function checkEmail(e) {
    e.preventDefault();
    const email = e.target.querySelector('[type="email"]').value;

    if (!validateEmail(email)) {
        form.classList.add('error');
        form.insertBefore(error, button);
    } else {
        form.classList.remove('error');
        if (form.contains(error)) {
            form.removeChild(error);
        }
        alert('Thanks for your e-mail');
        location.reload();
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', checkEmail);