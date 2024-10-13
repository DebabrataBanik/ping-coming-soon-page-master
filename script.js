const form = document.querySelector('form');
const email = document.querySelector('input');
const error = document.querySelector('.error__message');

form.addEventListener('submit', e => {
  e.preventDefault()

  const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (email.value.match(email_regex)) {
    error.classList.remove('show');
  } else {
    error.classList.add('show');
  }
})