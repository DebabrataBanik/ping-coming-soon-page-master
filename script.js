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

  if (!email.value.trim()) {
    error.textContent = 'Whoops! It looks like you forgot to add your email';
  }
  else if (email.value.match(email_regex)) {
    error.classList.remove('show');


  } else {
    error.classList.add('show');
    error.textContent = 'Please enter a valid email address'
  }
})